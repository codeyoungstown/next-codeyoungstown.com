import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials";
import ReCAPTCHA from "react-google-recaptcha";
import { MutableRefObject } from "react";
import { Social } from "../data/socials";

export interface CaptchaProps {
  social: Social;
  recaptchaRef: MutableRefObject<ReCAPTCHA | null>;
}

export default function CaptchaComponent({
  social,
  recaptchaRef,
}: CaptchaProps) {
  const onReCAPTCHAChange = (captchaCode, social) => {
    if (!captchaCode) {
      return;
    }
    window.open(social.link, "_blank");
    recaptchaRef.current.reset();
  };

  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      ref={recaptchaRef}
      onChange={(captchaCode) => onReCAPTCHAChange(captchaCode, social)}
      size="invisible"
      style={{
        visibility: "hidden",
      }}
    />
  );
}
