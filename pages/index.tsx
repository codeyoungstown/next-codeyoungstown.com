import Image from "next/image";
import Link from "next/link";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import Layout from "../components/Layout";
import NewsletterSignup from "../components/NewsletterSignup";
import Socials from "../components/Socials";
import logo from "../public/code-youngstown-white-background-final.png";

const pageDescription =
  "Connecting software engineers, developers, and coders in the Youngstown, OH area.";

export default function Home() {
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
        <Link href="/slack" className="underline hover:text-gray-300">
          Slack
        </Link>{" "}
        and attend our{" "}
        <Link href="/events" className="underline hover:text-gray-300">
          events
        </Link>
        .
      </p>
      <UpcomingEvents
        className="mx-auto w-full px-4 py-16 sm:px-8 sm:py-20 lg:px-12"
        showDivider={false}
      />
      <div className="px-6 pb-8 pt-2">
        <Socials />
      </div>
      <NewsletterSignup />
    </Layout>
  );
}
