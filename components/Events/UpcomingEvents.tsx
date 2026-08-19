import upcomingEventsData from "../../data/upcoming-events.json";
import EventCard, { EventRecord } from "./EventCard";

const upcomingEvents = (upcomingEventsData as EventRecord[])
  .slice()
  .sort((a, b) => a.dateTime.localeCompare(b.dateTime));

export default function UpcomingEvents({ className = "" }: { className?: string }) {
  return (
    <section
      aria-labelledby="upcoming-events-heading"
      className={`text-left ${className}`}
    >
      <div className="mb-5 border-b border-gray-700 pb-3">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
          Mark your calendar
        </p>
        <h2 className="mt-1 text-3xl font-bold" id="upcoming-events-heading">
          Next events
        </h2>
      </div>

      {upcomingEvents.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <EventCard event={event} expanded key={event.id} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-600 bg-black/10 p-6 text-gray-300">
          Nothing announced yet. Check back soon.
        </div>
      )}
    </section>
  );
}
