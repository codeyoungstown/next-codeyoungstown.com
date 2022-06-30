import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ExternalLink({ children, href, title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      rel="noreferrer"
      title={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
    >
      {children}
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        style={{
          left: "0.2em",
          top: "-1em",
          fontSize: "0.5em",
          color: isHovered ? "blue" : null,
        }}
      />
    </a>
  );
}
