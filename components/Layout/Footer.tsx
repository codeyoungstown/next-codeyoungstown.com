import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCodeBranch,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="p-4 absolute bottom-0 w-full">
      <div>
        <FontAwesomeIcon icon={faCopyright} /> Code Youngstown{" "}
        {new Date().getFullYear()}
      </div>

      <div>
        <ul className="flex flex-row items-center text-center  justify-center mb-4">
          <li>
            <a
              href="https://github.com/codeyoungstown/codeyoungstown.com"
              className="m-2 hover:text-gray-300"
              target="_blank"
              rel="noreferrer"
              title={`GitHub Link`}
            >
              <FontAwesomeIcon icon={faCodeBranch} />
            </a>
          </li>
          <li>
            <a
              href="https://simpleanalytics.com/codeyoungstown.com?utm_source=codeyoungstown.com"
              className="m-2 hover:text-gray-300"
              target="_blank"
              rel="noreferrer"
              title={`Simple Analytics Link`}
            >
              <FontAwesomeIcon icon={faChartLine} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
