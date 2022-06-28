import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
        <Header />
        <Image
          src="/code-youngstown-white-background-final.png"
          alt="Code Youngstown Logo"
          height={400}
          width={400}
        />

        <h1 className="text-3xl">
          Connecting software engineers, developers, and coders in the
          Youngstown, OH area.
        </h1>
        <h2 className="text-2xl">
          Join the ongoing chat via{" "}
          <a className="underline" href="http://slack.codeyoungstown.com/">
            Slack
          </a>{" "}
          and attend our{" "}
          <a
            className="underline"
            href="https://www.meetup.com/Code-Youngstown/"
          >
            meetups
          </a>
          .
        </h2>
        <Footer />
      </main>
    </div>
  );
}
