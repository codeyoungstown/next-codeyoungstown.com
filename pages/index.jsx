import Image from "next/image";
import Script from "next/script";
import Layout from "../components/Layout";
import Socials from "../components/Socials";
{
  /* 

*/
}
export default function Home() {
  return (
    <Layout>
      <Image
        src="/code-youngstown-white-background-final.png"
        alt="Code Youngstown Logo"
        height={400}
        width={400}
      />

      <h1 className="text-3xl">
        Connecting software engineers, developers, and coders in the Youngstown,
        OH area.
      </h1>
      <h2 className="text-2xl">
        Join the ongoing chat via{" "}
        <a className="underline" href="http://slack.codeyoungstown.com/">
          Slack
        </a>{" "}
        and attend our{" "}
        <a className="underline" href="https://www.meetup.com/Code-Youngstown/">
          meetups
        </a>
        .
      </h2>
      <div>
        <Socials />
      </div>
      <div>
        <Script
          async
          defer
          src="https://slack.codeyoungstown.com/slackin.js?large"
        />
      </div>
    </Layout>
  );
}
