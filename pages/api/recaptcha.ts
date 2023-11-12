import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const options = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    ApiKey: process.env.NEXT_PUBLIC_API_KEY,
  };
  const client = new RecaptchaEnterpriseServiceClient();
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

    // Check if the expected action was executed.
    // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.

    if (response.tokenProperties.action === req.body.recaptchaAction) {
      // Get the risk score and the reason(s).
      // For more information on interpreting the assessment, see:
      // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
      console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
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
    console.error(error);
    res.status(500).send("Internal server error");
  }
}
