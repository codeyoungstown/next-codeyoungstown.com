import Image from "next/future/image";
import Link from "next/link";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import Layout from "../components/Layout";
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
        <Link href="/slack">
          <a className="underline hover:text-gray-300">Slack</a>
        </Link>{" "}
        and attend our{" "}
        <Link href="/events">
          <a className="underline hover:text-gray-300">events</a>
        </Link>
        .
      </p>
      <UpcomingEvents className="mx-auto w-full px-4 py-14 sm:px-8 lg:px-12" />
      <div className="p-6">
        <Socials />
      </div>
    </Layout>
  );
}
