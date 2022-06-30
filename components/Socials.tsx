import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials";

export default function Socials() {
  return (
    <ul className="flex flex-row items-center text-center gap-8 justify-center text-4xl mb-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  rel = "noreferrer"
                  target="_blank"
                  title={`To Joe Duncko's ${social.name}`}
                  className="hover:text-[#00FF33]"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
            
          </ul>
  );
}
