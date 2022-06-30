import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataCard } from "./DataCard";
import { socials } from "../data/socials";
import { ExternalLink } from "./ExternalLink";

export default function Socials() {
  return (
    <DataCard title="Socials">
      <ul>
        {socials.map((social) => (
          <li key={social.name} className="mb-2">
            <ExternalLink
              href={social.link}
              title={`To Code Youngstown's ${social.name}`}
            >
              <FontAwesomeIcon icon={social.IconDefinition} /> {social.name}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
