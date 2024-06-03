import axios from "axios";
import { MutableRefObject } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export interface CaptchaProps {
  link: string;
  recaptchaRef: MutableRefObject<ReCAPTCHA | null>;
}

export default function CaptchaComponent({ link, recaptchaRef }: CaptchaProps) {
  const env = process.env.NODE_ENV;
  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }

    const request = {
      token: captchaCode,
      recaptchaAction: "",
    };

    const response = await axios.post("/api/recaptcha", request);
    if (response.data >= 0.6) {
      window.open(link, "_blank");
    } else {
      console.log("User denied access to slack");
    }

    recaptchaRef.current.reset();
  };

  if (env === "development") {
    return <></>;
  } else {
    return (
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        ref={recaptchaRef}
        onChange={(captchaCode) => onReCAPTCHAChange(captchaCode)}
        size="invisible"
      />
    );
  }
}
