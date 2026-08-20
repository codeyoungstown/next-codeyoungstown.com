import upcomingEventsData from "../../data/upcoming-events.json";
import EventCard, { EventRecord } from "./EventCard";

const upcomingEvents = (upcomingEventsData as EventRecord[])
  .slice()
  .sort((a, b) => a.dateTime.localeCompare(b.dateTime));

export default function UpcomingEvents({
  className = "",
  showDivider = true,
}: {
  className?: string;
  showDivider?: boolean;
}) {
  return (
    <section
      aria-labelledby="upcoming-events-heading"
      className={`text-left ${className}`}
    >
      <div
        className={`mb-5 ${showDivider ? "border-b border-gray-700 pb-3" : ""}`}
      >
        <h2 className="text-3xl font-bold" id="upcoming-events-heading">
          Upcoming events
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
