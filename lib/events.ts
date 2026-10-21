import archive from "../data/events.json";
import announcements from "../data/upcoming-events.json";
import { mergeEvents, partitionEvents } from "./event-feeds";

export function getEventListings(now = Date.now()) {
  return partitionEvents(mergeEvents(archive.events, announcements), now);
}
