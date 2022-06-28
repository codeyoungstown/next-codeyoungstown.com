import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCodeBranch,
  faCopyright,
  faFacebookOfficial,
  faTwitter,
  faGitHub,
  faMeetup,
  faPodcast,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="bg-gray text-white text-center flex-1">
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
        <nav className="flex sm:justify-center space-x-4">
          {[
            ["Home", "/"],
            ["Made In Youngstown", "/made-in-youngstown"],
            ["Jobs Board", "/jobs-board"],
            ["Jobs Board Form", "/jobs-board-form"],
          ].map(([title, url]) => (
            <Link href={url} key={title}>
              <a>{title}</a>
            </Link>
          ))}
        </nav>
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
        <Footer />
      </main>
    </div>
  );
}
