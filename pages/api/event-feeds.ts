import type { NextApiRequest, NextApiResponse } from 'next';
import archive from '../../data/events.json';
import announcements from '../../data/upcoming-events.json';
import { buildCalendar, buildRss, mergeEvents } from '../../lib/event-feeds';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).send('Method not allowed');
  }
  const calendar = req.query.format === 'ics';
  res.setHeader('Content-Type', calendar ? 'text/calendar; charset=utf-8' : 'application/rss+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  const events = mergeEvents(archive.events, announcements);
  const body = calendar
    ? buildCalendar(events, archive.scrapedAt)
    : buildRss(events);
  return res.status(200).send(req.method === 'HEAD' ? '' : body);
}
