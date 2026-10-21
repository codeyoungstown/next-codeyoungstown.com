import { faCalendarPlus, faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import EventCard, { EventRecord } from "../components/Events/EventCard";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import Layout from "../components/Layout";
import archive from "../data/events.json";

const pageDescription =
  "Upcoming and past Code Youngstown meetups, talks, workshops, and community gatherings.";

export default function Events() {
  const events = (archive.events as EventRecord[])
    .slice()
    .sort((a, b) => b.dateTime.localeCompare(a.dateTime));

  return (
    <Layout page="Events" description={pageDescription}>
      <Head>
        <link rel="alternate" type="application/rss+xml" title="Code Youngstown Events" href="/rss.xml" />
        <link rel="alternate" type="text/calendar" title="Code Youngstown Events" href="/events.ics" />
      </Head>
      <section className="mx-auto max-w-5xl px-4 pb-8 pt-8 sm:px-6 sm:pt-12">
        <h1 className="m-2 text-3xl">Events</h1>
        <p className="mb-2 text-md sm:text-xl">{pageDescription}</p>
        <div className="mt-3 flex flex-col items-center text-sm text-gray-400">
          <a
            className="inline-flex items-center gap-2 rounded-sm py-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="webcal://codeyoungstown.com/events.ics"
          >
            <FontAwesomeIcon icon={faCalendarPlus} className="h-4 w-4" aria-hidden="true" />
            <span>Subscribe to this calendar</span>
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-sm py-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="/rss.xml"
          >
            <FontAwesomeIcon icon={faRss} className="h-4 w-4" aria-hidden="true" />
            <span>Subscribe via RSS</span>
          </a>
        </div>
        <UpcomingEvents className="mt-10" />
      </section>

      <section
        aria-labelledby="past-events-heading"
        className="mx-auto max-w-5xl px-4 pb-8 sm:px-6"
      >
        <div className="mb-5 flex items-end gap-3 border-b border-gray-700 pb-3 text-left">
          <h2 className="text-3xl font-bold" id="past-events-heading">
            Past events
          </h2>
          <span className="pb-1 text-gray-400">Newest first</span>
        </div>
        <div className="space-y-6">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
