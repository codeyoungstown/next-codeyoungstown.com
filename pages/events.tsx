import EventCard, {
  EventRecord,
  eventYear,
} from "../components/Events/EventCard";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import Layout from "../components/Layout";
import archive from "../data/events.json";

const pageDescription =
  "An archive of Code Youngstown meetups, talks, workshops, and community gatherings.";

export default function Events() {
  const events = (archive.events as EventRecord[])
    .slice()
    .sort((a, b) => b.dateTime.localeCompare(a.dateTime));

  return (
    <Layout page="Events" description={pageDescription}>
      <section className="mx-auto max-w-5xl px-4 pb-8 pt-8 sm:px-6 sm:pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
          Community history
        </p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Event Archive</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          {pageDescription} Browse {archive.events.length} events reaching back to{" "}
          {eventYear(events[events.length - 1])}.
        </p>
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
