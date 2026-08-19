import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useRef } from "react";
import { socials } from "../data/socials";
import CaptchaComponent, { CaptchaHandle } from "./CaptchaComponent";

export default function Socials() {
  const captchaRef = useRef<CaptchaHandle>(null);

  const handleSlack = (event) => {
    event.preventDefault();
    captchaRef.current?.execute();
  };

  return (
    <ul className="flex flex-wrap flex-row items-center text-center gap-8 justify-center text-4xl mb-4">
      {socials.map((social) => (
        <Fragment key={social.name} >
          {social.name === "Slack" && (
            <li key={social.name}>
              <CaptchaComponent
                link={social.link}
                ref={captchaRef}
              />
              <a
                rel="noreferrer"
                target="_blank"
                title={`To Code Youngstown's ${social.name}`}
                className="hover:text-gray-300 hover:cursor-pointer"
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
        </Fragment>
      ))}
    </ul>
  );
}
