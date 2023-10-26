import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials";
import ReCAPTCHA from "react-google-recaptcha";
import { MutableRefObject } from "react";
import { Social } from "../data/socials";

export interface CaptchaProps {
  link: string;
  recaptchaRef: MutableRefObject<ReCAPTCHA | null>;
}

export default function CaptchaComponent({ link, recaptchaRef }: CaptchaProps) {
  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    window.open(link, "_blank");
    recaptchaRef.current.reset();
  };

  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      ref={recaptchaRef}
      onChange={(captchaCode) => onReCAPTCHAChange(captchaCode)}
      size="invisible"
      style={{
        visibility: "hidden",
      }}
    />
  );
}
