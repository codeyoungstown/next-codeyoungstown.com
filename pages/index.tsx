import Image from "next/image";
import Layout from "../components/Layout";
import Socials from "../components/Socials";
import logo from "../public/code-youngstown-white-background-final.png";

const pageDescription =
  "Connecting software engineers, developers, and coders in the Youngstown, OH area.";

export default function Home() {
  return (
    <Layout page="Home" description={pageDescription}>
      <div>
        <Image
          src={logo}
          alt="Code Youngstown Logo"
          height={700}
          width={700}
          layout="intrinsic"
          priority
        />
      </div>
      <h1 className="sm:text-2xl text-xl p-4">{pageDescription}</h1>
      <p className="sm:text-xl text-md p-2">
        Join the ongoing chat via{" "}
        <a
          className="underline hover:text-gray-300"
          href="http://slack.codeyoungstown.com/"
        >
          Slack
        </a>{" "}
        and attend our{" "}
        <a
          className="underline hover:text-gray-300"
          href="https://www.meetup.com/Code-Youngstown/"
        >
          meetups
        </a>
        .
      </p>
      <div className="p-6">
        <Socials />
      </div>
    </Layout>
  );
}
