import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import CaptchaComponent from "./CaptchaComponent";

export default function Socials() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSlack = (event) => {
    event.preventDefault();
    recaptchaRef.current.execute();
  };

  return (
    <ul className="flex flex-wrap flex-row items-center text-center gap-8 justify-center text-4xl mb-4">
      {socials.map((social) => (
        <>
          {social.name === "Slack" && (
            <li key={social.name}>
              <CaptchaComponent social={social} recaptchaRef={recaptchaRef} />
              <a
                rel="noreferrer"
                target="_blank"
                title={`To Code Youngstown's ${social.name}`}
                className="hover:text-gray-300"
                onClick={handleSlack}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          )}
          {social.name !== "Slack" && (
            <li key={social.name}>
              <a
                href={social.link}
                rel="noreferrer"
                target="_blank"
                title={`To Code Youngstown's ${social.name}`}
                className="hover:text-gray-300"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          )}
        </>
      ))}
    </ul>
  );
}
