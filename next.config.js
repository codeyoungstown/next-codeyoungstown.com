module.exports = {
  agentRules: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/events.ics", destination: "/api/event-feeds?format=ics" },
      { source: "/rss.xml", destination: "/api/event-feeds?format=rss" },
    ];
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
