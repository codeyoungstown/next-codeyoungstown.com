import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCodeBranch,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div>
        <FontAwesomeIcon icon={faCopyright} /> Code Youngstown{" "}
        {new Date().getFullYear()}
      </div>

      <div>
        <a
          href="https://github.com/codeyoungstown/codeyoungstown.com"
          className="m-2 hover:text-[#338ee8]"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faCodeBranch} />
        </a>

        <a
          href="https://simpleanalytics.com/codeyoungstown.com?utm_source=codeyoungstown.com"
          className="m-2 hover:text-[#338ee8]"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faChartLine} />
        </a>
      </div>
    </footer>
  );
}