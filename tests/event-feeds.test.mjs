import assert from 'node:assert/strict';
import test from 'node:test';
import { buildCalendar, buildRss, mergeEvents } from '../lib/event-feeds.ts';

const event = {
  id: 'sample', title: 'Talks & <pizza>', description: 'Hello, world;\\test\nNext line',
  dateTime: '2026-11-03T18:00:00-05:00', endTime: null,
  location: 'Youngstown, OH', status: 'UPCOMING', imageUrl: null,
  publishedAt: '2026-10-21T12:00:00Z',
};
const fallback = '2026-08-19T20:47:53.484Z';

test('calendar preserves identity through edits and exports UTC times and cancellations', () => {
  const first = buildCalendar([event], fallback);
  const edited = buildCalendar([{ ...event, title: 'Moved', status: 'CANCELLED', sequence: 1,
    updatedAt: '2026-10-22T12:00:00Z', endTime: '2026-11-03T20:00:00-05:00' }], fallback);
  assert.match(first, /UID:sample@codeyoungstown.com\r\n/);
  assert.match(edited, /UID:sample@codeyoungstown.com\r\n/);
  assert.match(first, /DTSTART:20261103T230000Z\r\n/);
  assert.doesNotMatch(first, /DTEND:/);
  assert.match(edited, /DTEND:20261104T010000Z\r\n/);
  assert.match(edited, /STATUS:CANCELLED\r\n/);
  assert.match(edited, /SEQUENCE:1\r\n/);
  assert.match(edited, /LAST-MODIFIED:20261022T120000Z\r\n/);
});

test('calendar escapes text and folds long Unicode lines within 75 octets', () => {
  const calendar = buildCalendar([{ ...event, title: '🎉'.repeat(60) }], fallback);
  const unfolded = calendar.replace(/\r\n /g, '');
  assert.ok(unfolded.includes('SUMMARY:' + '🎉'.repeat(60)));
  assert.ok(unfolded.includes('DESCRIPTION:Hello\\, world\\;\\\\test\\nNext line'));
  assert.ok(unfolded.includes('LOCATION:Youngstown\\, OH'));
  assert.ok(calendar.split('\r\n').every(line => Buffer.byteLength(line) <= 75));
  assert.ok(!calendar.includes('\uFFFD'));
  assert.ok(calendar.endsWith('END:VCALENDAR\r\n'));
});

test('RSS escapes XML, uses announcement dates and keeps stable IDs after rescheduling', () => {
  const rss = buildRss([event, { ...event, id: 'older', publishedAt: '2026-10-20T12:00:00Z' }]);
  assert.match(rss, /Talks &amp; &lt;pizza&gt;/);
  assert.match(rss, /<pubDate>Wed, 21 Oct 2026 12:00:00 GMT<\/pubDate>/);
  assert.match(rss, /<guid isPermaLink="false">sample@codeyoungstown.com<\/guid>/);
  assert.ok(rss.indexOf('sample@') < rss.indexOf('older@'));
  assert.match(buildRss([{ ...event, dateTime: '2026-12-01T18:00:00-05:00' }]), /sample@codeyoungstown.com/);
  assert.doesNotMatch(buildRss([{ ...event, publishedAt: undefined }]), /<pubDate>/);
});

test('merging archive and site announcements deduplicates with site edits taking precedence', () => {
  assert.deepEqual(mergeEvents([event], [{ ...event, title: 'Updated' }]).map(e => e.title), ['Updated']);
  assert.match(buildCalendar([], fallback), /BEGIN:VCALENDAR/);
  assert.doesNotMatch(buildCalendar([], fallback), /BEGIN:VEVENT/);
  assert.doesNotMatch(buildRss([]), /<item>/);
});
