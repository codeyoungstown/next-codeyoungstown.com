import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import type { NextApiRequest, NextApiResponse } from "next";
import { getGCPCredentials } from "../../utils/googleCloudPlatform";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const credential = getGCPCredentials();
  const client = new RecaptchaEnterpriseServiceClient(credential);
  const projectPath = client.projectPath(process.env.NEXT_PUBLIC_PROJECT_ID);
  try {
    const request = {
      assessment: {
        event: {
          token: req.body.token,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      },
      parent: projectPath,
    };

    const [response] = await client.createAssessment(request);
    if (!response.tokenProperties.valid) {
      res
        .status(400)
        .send(
          `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
        );
    }

    if (response.tokenProperties.action === req.body.recaptchaAction) {
      // Get the risk score and the reason(s).
      // For more information on interpreting the assessment, see:
      // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
      response.riskAnalysis.reasons.forEach((reason) => {
        console.log(reason);
      });

      res.status(200).send(response.riskAnalysis.score);
    } else {
      res
        .status(400)
        .send(
          "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
        );
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}
