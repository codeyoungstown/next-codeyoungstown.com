import {
  faSlack,
  faFacebook,
  faGithub,
  faMeetup,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPodcast, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export type Social = {
  name: string;
  link: string;
  icon: any;
};

export const socials: Social[] = [
  {
    name: "Slack",
    link: "https://join.slack.com/t/codeyoungstown/shared_invite/zt-3ewvqpinn-5hPZYr4moiRQEPFcoW7F2g",
    icon: faSlack,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/codeyoungstown",
    icon: faFacebook,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/codeyoungstown",
    icon: faTwitter,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/code-youngstown/",
    icon: faLinkedin,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCOAoZ5MDRa6115ZNnNVOefw",
    icon: faYoutube,
  },
  {
    name: "GitHub",
    link: "https://github.com/codeyoungstown",
    icon: faGithub,
  },
  {
    name: "Meetup",
    link: "https://www.meetup.com/Code-Youngstown/",
    icon: faMeetup,
  },
  {
    name: "Podcast",
    link: "https://podcasts.apple.com/us/podcast/code-youngstown-podcast/id1491969032",
    icon: faPodcast,
  },
  {
    name: "Email",
    link: "mailto:contact@codeyoungstown.com",
    icon: faEnvelope,
  },
];
