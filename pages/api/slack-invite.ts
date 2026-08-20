import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import type { NextApiRequest, NextApiResponse } from "next";
import { getGCPCredentials } from "../../utils/googleCloudPlatform";

const DEFAULT_ALLOWED_HOSTNAMES = [
  "codeyoungstown.com",
  "www.codeyoungstown.com",
];
const DEFAULT_MINIMUM_SCORE = 0.6;

function setPrivateResponseHeaders(res: NextApiResponse) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
}

function redirectToJoin(
  res: NextApiResponse,
  error: "configuration" | "verification"
) {
  res.redirect(303, `/slack?error=${error}`);
}

function getString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function getClientIp(req: NextApiRequest) {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0].trim();
  }

  return req.socket.remoteAddress || "";
}

function getAllowedHostnames() {
  const configuredHostnames = process.env.RECAPTCHA_ALLOWED_HOSTNAMES;

  if (!configuredHostnames) {
    return DEFAULT_ALLOWED_HOSTNAMES;
  }

  return configuredHostnames
    .split(",")
    .map((hostname) => hostname.trim().toLowerCase())
    .filter(Boolean);
}

function getMinimumScore() {
  const configuredScore = Number(process.env.RECAPTCHA_MIN_SCORE);

  if (
    Number.isFinite(configuredScore) &&
    configuredScore >= 0 &&
    configuredScore <= 1
  ) {
    return configuredScore;
  }

  return DEFAULT_MINIMUM_SCORE;
}

function getSlackInviteUrl() {
  const configuredUrl = process.env.SLACK_INVITE_URL;

  if (!configuredUrl) {
    return null;
  }

  try {
    const inviteUrl = new URL(configuredUrl);
    const isSlackInvite =
      inviteUrl.protocol === "https:" &&
      inviteUrl.hostname === "join.slack.com" &&
      inviteUrl.pathname.includes("/shared_invite/");

    return isSlackInvite ? inviteUrl.toString() : null;
  } catch {
    return null;
  }
}

async function verifyRecaptcha(req: NextApiRequest, token: string) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const projectId =
    process.env.GOOGLE_CLOUD_PROJECT_ID || process.env.NEXT_PUBLIC_PROJECT_ID;

  if (!siteKey || !projectId || !token) {
    return false;
  }

  const client = new RecaptchaEnterpriseServiceClient(getGCPCredentials());
  const [assessment] = await client.createAssessment({
    parent: client.projectPath(projectId),
    assessment: {
      event: {
        token,
        siteKey,
        userAgent: getString(req.headers["user-agent"]),
        userIpAddress: getClientIp(req),
        requestedUri: "/slack",
      },
    },
  });

  const tokenProperties = assessment.tokenProperties;
  const hostname = tokenProperties?.hostname?.toLowerCase();
  const score = assessment.riskAnalysis?.score ?? 0;

  return Boolean(
    tokenProperties?.valid &&
      hostname &&
      getAllowedHostnames().includes(hostname) &&
      score >= getMinimumScore()
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  setPrivateResponseHeaders(res);

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).send("Method not allowed");
    return;
  }

  const inviteUrl = getSlackInviteUrl();

  if (!inviteUrl) {
    console.error("SLACK_INVITE_URL is missing or is not a Slack invite URL");
    redirectToJoin(res, "configuration");
    return;
  }

  const body =
    req.body && typeof req.body === "object"
      ? (req.body as Record<string, unknown>)
      : {};
  const location = getString(body.location).trim().toLowerCase();
  const honeypot = getString(body.companyWebsite).trim();
  const recaptchaToken = getString(body.recaptchaToken);

  if (honeypot || location !== "youngstown") {
    redirectToJoin(res, "verification");
    return;
  }

  const bypassRecaptcha =
    process.env.NODE_ENV === "development" &&
    !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  try {
    if (!bypassRecaptcha && !(await verifyRecaptcha(req, recaptchaToken))) {
      redirectToJoin(res, "verification");
      return;
    }
  } catch (error) {
    console.error("Slack invite reCAPTCHA assessment failed", error);
    redirectToJoin(res, "verification");
    return;
  }

  res.redirect(303, inviteUrl);
}
