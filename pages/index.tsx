import Image from "next/future/image";
import { useRef } from "react";
import CaptchaComponent, {
  CaptchaHandle,
} from "../components/CaptchaComponent";
import Layout from "../components/Layout";
import Socials from "../components/Socials";
import logo from "../public/code-youngstown-white-background-final.png";

const pageDescription =
  "Connecting software engineers, developers, and coders in the Youngstown, OH area.";

export default function Home() {
  const captchaRef = useRef<CaptchaHandle>(null);

  const handleSlack = (event) => {
    event.preventDefault();
    captchaRef.current?.execute();
  };

  return (
    <Layout page="Home" description={pageDescription}>
      <div className="flex justify-center">
        <Image
          src={logo}
          alt="Code Youngstown Logo"
          height={700}
          width={700}
          priority
        />
      </div>
      <h1 className="sm:text-2xl text-xl p-4">{pageDescription}</h1>
      <p className="sm:text-xl text-md p-2">
        Join the ongoing chat via{" "}
        <a
          className="underline hover:text-gray-300 hover:cursor-pointer"
          onClick={handleSlack}
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
      <CaptchaComponent
        link="https://join.slack.com/t/codeyoungstown/shared_invite/zt-3ewvqpinn-5hPZYr4moiRQEPFcoW7F2g"
        ref={captchaRef}
      />
    </Layout>
  );
}
