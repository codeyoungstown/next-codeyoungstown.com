import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCodeBranch,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code Youngstown</title>
        <meta
          name="description"
          content="Connecting software engineers, developers, and coders in the Youngstown, OH area. Join the ongoing chat via Slack and attend our meetups."
        />
        <link
          rel="icon"
          href="/public/code-youngstown-white-background-final.png"
        />
      </Head>

      <main>
        <Image
          src="/code-youngstown-white-background-final.png"
          alt="Code Youngstown Logo"
          height={400}
          width={400}
        />
        <h1>
          <Link href="/made-in-youngstown">
            <a>Made In Youngstown &rarr;</a>
          </Link>
        </h1>

        <p>
          Connecting software engineers, developers, and coders in the
          Youngstown, OH area.
        </p>
        <p>
          Join the ongoing chat via{" "}
          <a href="http://slack.codeyoungstown.com/">Slack</a> and attend our{" "}
          <a href="https://www.meetup.com/Code-Youngstown/">meetups</a>.
        </p>
      </main>

      <footer className="max-w-screen-lg sm:flex text-xs print:hidden items-center">
        <div className="text-center sm:text-left flex-1">
          <FontAwesomeIcon icon={faCopyright} /> Code Youngstown{" "}
          {new Date().getFullYear()}
        </div>

        <div className="text-center flex-1">
          <a
            href="https://github.com/codeyoungstown/codeyoungstown.com"
            className="m-1 hover:text-[#00FF33]"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCodeBranch} />
          </a>

          <a
            href="https://simpleanalytics.com/codeyoungstown.com?utm_source=codeyoungstown.com"
            className="m-1 hover:text-[#00FF33]"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faChartLine} />
          </a>
        </div>
      </footer>
    </div>
  );
}
