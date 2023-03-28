export type Job = {
  title: string;
  company: string;
  desc: string;
  location: string;
  salary?: string;
  contact?: string;
  listing?: string;
  date: string;
};

export const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "Motorola Solutions",
    desc: "This is an opportunity for you to use software and data engineering skills to enable cybersecurity to protect the people that protect us. You will be responsible for building security-focused web applications, support security projects and initiatives, collaborate with other teams to accomplish shared objectives, and a passion for self-growth and strong focus on career development. Specific knowledge and skills in Python and JS, data engineering, and cloud architecture. Along with 3 - 5 years of software development experience.",
    location: "Chicago, IL / Hybrid",
    salary: "Unlisted",
    listing: "https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Chicago-IL/Software-Engineer_R36868-1",
    date: "2023-03-22",
  },
  {
    title: "Diversity & Inclusion Technology Internship Program",
    company: "Ohio Department of Development",
    desc: "The Diversity & Inclusion Technology Internship Program is a great opportunity to work at some of Ohio's most innovative companies! These paid internships give college students great experience in business and entrepreneurship, while companies get great young, diverse talent to help them compete and grow. If accepted, you will be working on cloud based software application with two experienced lead developers. Technologies are React, Angular, C#, Python, and Javascript. Experience working with API's is a requirement.",
    location: "Boardman, OH",
    salary: "$22.00 - $26.00 per hour",
    listing: "https://development.ohio.gov/business/third-frontier-and-technology/diversity-inclusion-technology-internship-program",
    date: "2023-02-28",
  },
  {
    title: "Senior Software Engineer",
    company: "Intellihealth",
    desc: "Intellihealth is a healthtech startup that recently launched their mobile app, Flyte. They are looking for a Senior Software Engineer that will work with the Product Manager on breaking down project ideas into executable tasks for the team. Mentor other engineers on becoming better through Code Reviews, join Provider-focused team to improve the efficiency and efficacy of their medical service organization and their ability to treat patients, and lastly, working with the team to migrate the current stack to TypeScript.",
    location: "Remote",
    salary: "Unlisted",
    contact: "magicpat2010@gmail.com",
    date: "2023-02-23",
  },
];
