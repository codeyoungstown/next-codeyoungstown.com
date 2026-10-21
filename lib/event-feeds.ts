import type { EventRecord } from '../components/Events/EventCard';

export type FeedEvent = EventRecord & {
  publishedAt?: string;
  updatedAt?: string;
  sequence?: number;
};

export const siteUrl = 'https://codeyoungstown.com';

const eventUrl = (event: FeedEvent) => `${siteUrl}/events#event-${encodeURIComponent(event.id)}`;
const eventUid = (event: FeedEvent) => `${event.id}@codeyoungstown.com`;
const calendarDate = (value: string) => new Date(value).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');

function calendarText(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/\r\n|\r|\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
}

// RFC 5545 counts UTF-8 octets, including the continuation space.
function foldLine(value: string) {
  let line = '';
  const lines: string[] = [];
  for (const character of value) {
    if (Buffer.byteLength(line + character, 'utf8') > 75) {
      lines.push(line);
      line = ' ';
    }
    line += character;
  }
  lines.push(line);
  return lines.join('\r\n');
}

function xml(value: string) {
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/[<>&"']/g, character => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
  })[character]!);
}

export function mergeEvents(archive: FeedEvent[], announcements: FeedEvent[]) {
  return [...new Map([...archive, ...announcements].map(event => [event.id, event])).values()];
}

export function buildCalendar(events: FeedEvent[], fallbackTimestamp: string) {
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Code Youngstown//Events//EN',
    'CALSCALE:GREGORIAN', 'X-WR-CALNAME:Code Youngstown Events',
  ];
  for (const event of events.slice().sort((a, b) => a.dateTime.localeCompare(b.dateTime))) {
    const modified = event.updatedAt ?? event.publishedAt ?? fallbackTimestamp;
    lines.push(
      'BEGIN:VEVENT', `UID:${calendarText(eventUid(event))}`,
      `DTSTAMP:${calendarDate(modified)}`, `LAST-MODIFIED:${calendarDate(modified)}`,
      `SEQUENCE:${event.sequence ?? 0}`, `DTSTART:${calendarDate(event.dateTime)}`,
    );
    if (event.endTime) lines.push(`DTEND:${calendarDate(event.endTime)}`);
    lines.push(
      `SUMMARY:${calendarText(event.title)}`, `DESCRIPTION:${calendarText(event.description)}`,
      `LOCATION:${calendarText(event.location)}`, `URL:${eventUrl(event)}`,
      `STATUS:${event.status === 'CANCELLED' ? 'CANCELLED' : 'CONFIRMED'}`, 'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  return lines.map(foldLine).join('\r\n') + '\r\n';
}

export function buildRss(events: FeedEvent[]) {
  const items = events.slice().sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '')).map(event => {
    const date = new Date(event.dateTime).toLocaleString('en-US', {
      timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'short',
    });
    const description = `${date} (America/New_York)\n${event.location}\n\n${event.status === 'CANCELLED' ? 'CANCELLED\n\n' : ''}${event.description}`;
    return `<item>
<title>${xml(event.title)}</title>
<link>${xml(eventUrl(event))}</link>
<guid isPermaLink="false">${xml(eventUid(event))}</guid>
${event.publishedAt ? `<pubDate>${new Date(event.publishedAt).toUTCString()}</pubDate>` : ''}
<description>${xml(description)}</description>
</item>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Code Youngstown Events</title>
<link>${siteUrl}/events</link>
<description>Meetups, talks, workshops, and community gatherings from Code Youngstown.</description>
<language>en-us</language>
<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items.join('\n')}
</channel>
</rss>\n`;
}
