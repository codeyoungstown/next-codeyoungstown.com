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
    title: "Digital Specialist",
    company: "FactSet",
    desc: "The key objective for the role is to optimize the use of varied and consistent training vehicles across a variety of channels with the appropriate frequency to build and demostrate product offerings.",
    location: "Youngstown, OH",
    salary: "$64,000 - $90,000",
    listing: "https://factset.wd1.myworkdayjobs.com/en-US/FactSetCareers/job/New-York-NY-USA/Digital-Specialist_R13656?locations=e45ee8093d5901a1533a3a439312262f&locations=2457530f5bed01689182c16aae019a74",
    date: "2022-11-09",
  },
  {
    title: "Relationship Manager",
    company: "Content & Technology Solutions",
    desc: "CTS is looking to hire a Relationship Manager to help drive the success of existing clients within the Americas book of business. Familiar with SQL or Python and Cloud service providers.",
    location: "Remote",
    salary: "$87,000 - $135,000",
    listing: "https://factset.wd1.myworkdayjobs.com/en-US/FactSetCareers/job/New-York-NY-USA/Account-Manager_R17352?locations=e45ee8093d5901a1533a3a439312262f&locations=2457530f5bed01689182c16aae019a74",
    date: "2022-11-04",
  },
  {
    title: "Web Developer Internship",
    company: "898 Marketing",
    desc: "898 Marketing looking for a 12-week intern to develop websites, landing pages, and marketing emails. Analyze data to improve SEO and add content to existing sites using WordPress, Shopify, or other CMS platforms.",
    location: "Canfield, OH",
    salary: "Unlisted",
    listing: "https://www.indeed.com/viewjob?t=web%20developer%20internship&jk=fd153f765ae4ac7b&_ga=2.210765788.874613173.1668091844-1524075580.1656525213&fbclid=IwAR0kiLlZOw5X-KKJAOZWSCQHdvTPQa2va9HNykSoVQpuq1ghgjrNOGxsJuY",
    date: "2022-11-02",
  },
  {
    title: "IT Business Analyst/Developer",
    company: "Contract Professionals, Inc.",
    desc: "The position serves as the functional liaison between business customers and technology teams, analyzing customer business needs, and participating in the planning, design, and implementation of new or enhanced IT solutions",
    location: "Youngstown, OH (Hybrid)",
    salary: "Unlisted",
    listing: "https://www.linkedin.com/jobs/view/3335259653/",
    date: "2022-11-01",
  },
  {
    title: "Data Engineer - Automation Engineering",
    company: "FactSet",
    desc: "You will be working on private market data; these are heterogeneous and voluminous datasets. Familiar with python, pandas, and numpy.",
    location: "Youngstown, OH",
    salary: "Unlisted",
    listing: "https://factset.wd1.myworkdayjobs.com/en-US/FactSetCareers/job/New-York-NY-USA/Data-Engineer---Automation-Engineering_R17988?locations=e45ee8093d5901a1533a3a439312262f&locations=2457530f5bed01689182c16aae019a74",
    date: "2022-10-15",
  },
  {
    title: "Backend Engineer",
    company: "Pollytech",
    desc: "Pollytech is looking for someone to build out a public API for their custom e-commerce plugin. The API is a completely greenfield project, so there's flexibility to use the tools you enjoy, but python is preferred.",
    location: "Youngstown, OH",
    salary: "Negotiable",
    contact: "Joe@CodeYoungstown.com",
    date: "2022-08-20",
  },
  {
    title: "Student Developer",
    company: "Youngstown.io",
    desc: "Youngstown.io is looking for student software developers to connect with local companies  to work on web and mobile apps on a contract basis. Flexible + fully remote. ~15 hours a week during contract. When applying, please tell us about the most awesome project you've built so far.",
    location: "Youngstown, OH",
    salary: "Starting at $15 an hour",
    contact: "Joe@JoeDuncko.com",
    date: "2022-08-20",
  },
  {
    title: "Multiple Positions and Internships",
    company: "Ultium Cells",
    desc: "Ultium Cells is looking for 4-5 fulltime people with experience. If you're still a student and looking for part time please also reach out. We're looking for people willing to learn global manufacturing system and application based support. If you speak Korean this is also a plus.",
    location: "Warren, OH",
    contact: "austin.bacho1@gmail.com",
    date: "2022-08-20",
  },
  {
    title: "Director, Server Engineering",
    company: "Marco Polo",
    desc: "We're currently seeking a Director of Server Engineering to lead our Server and DevOps engineers in building and maintaining world-class products that help people feel close. A great candidate for this role is a strong people manager who has experience leading embedded teams of engineers and excels planning,  prioritizing, and managing costs. They will be responsible for running our live service, ensuring our code base and security is solid, and making sure that we have strong operational practices that enable these embedded engineers to  maximize their impact. This is a manager-doer role: 75% of of the time will be managing individuals and the larger team; 25% will be individual contributor work.",
    location: "Remote",
    salary: "$200,000 - $250,000 per year",
    listing:
      "https://jobs.lever.co/marcopolo/f41e379c-9a03-48f1-bfad-3f3600237adc",
    date: "2022-08-20",
  },
  {
    title: "Senior Backend Software Engineer",
    company: "Marco Polo",
    desc: "We are looking for a Senior Backend Software Engineer to help us build and maintain the server technology that powers Marco Polo. The ideal candidate for this role is committed to understanding business needs and the users’ experience, so that they can build and solve problems in the best possible way, helping us achieve our purpose at scale.",
    location: "Remote",
    salary: "$140,000 - $170,000 per year",
    listing:
      "https://jobs.lever.co/marcopolo/b6f129f4-49ec-4898-84e8-8aa2407fbd4e",
    date: "2022-08-20",
  },
  {
    title: "Senior Mobile Software Engineer",
    company: "Marco Polo",
    desc: "We're looking for a thoughtful and creative Senior Mobile Software Engineer to join our team. You are someone who feels pride from writing solid code, you enjoy creating new user experiences and solving fun technical problems. You lean into opportunities to learn unfamiliar technologies in order to solve a wide range of problems. You care first and foremost about doing what’s necessary to help the business succeed. You delight in making a difference for millions of people in the world and you care about having a joyful work environment.",
    location: "Remote",
    salary: "$140,000 - $170,000 per year",
    listing:
      "https://jobs.lever.co/marcopolo/aae88960-3323-4a73-ba78-38e8cad20498",
    date: "2022-08-20",
  },
  {
    title: "Data Engineer",
    company: "BlastPoint",
    desc: "We are looking for a talented Data Engineer to join our growing engineering team. The ideal candidate for this position brings together strong software engineering skills and cloud infrastructure expertise to ensure smooth and timely delivery of actionable insights to customers, leading engineering projects from concept to delivery, contributing to BlastPoint’s data onboarding activities, and ensuring that our platform and supporting services are highly-available, secure, and well-maintained.",
    location: "Remote",
    salary: "$120,000 - $140,000 per year",
    listing: "https://blastpoint.com/about/careers",
    date: "2022-08-27",
  },
  {
    title: "Director of Software Engineering",
    company: "Youngstown Business Incubator",
    desc: "As a Director of Software Development at YBI, you’ll apply both your technical and entrepreneurial skills as part of a cross-functional team, leading the technical effort and managing a small group of apprentice developers while building consumer and/or business-facing SaaS-based products for companies in the YBI Startup Portfolio.",
    location: "Hybrid (Remote + Youngstown, OH)",
    salary: "Based upon experience",
    listing: "https://www.linkedin.com/jobs/view/3279879799/",
    date: "2022-09-22",
  },
  {
    title: "Project Coordinator and Website Content Creator",
    company: "Youngstown State University",
    desc: "Leads and assists in the planning, implementation, and development of YSU’s websites, content strategy, and content management system (CMS) training program by establishing and maintaining an effective presence on the Internet. Focuses on meeting project commitments, including communications with sponsors, stakeholders, etc. Spends significant time on project management responsibilities.",
    location: "Youngstown, OH",
    salary: "$42,055 - $45,000",
    listing: "https://jobs.ysu.edu/postings/8731",
    date: "2022-09-22",
  },
  {
    title: "Data Warehouse Engineer",
    company: "Youngstown State University",
    desc: "Identifies, designs, implements, and supports technology solutions including campus-wide technology environments, systems, and services that meet strategic business requirements in a secure manner. Generates, develops, and communicates strategic technical directions and decisions for existing and new client computing technologies.",
    location: "Youngstown, OH",
    salary: "$64,000 - $84,000",
    listing: "https://jobs.ysu.edu/postings/8672",
    date: "2022-09-24",
  },
  {
    title: "Software Engineer / Web Developer",
    company: "Trumbull Industries",
    desc: "We are looking for an experienced Full Stack PHP Developer with MVC frameworks experiences such as CodeIgniter or Laravel to fill our Developer Lead/Project Manager position.",
    location: "Warren, OH",
    salary: "$65,000 - $90,000 a year",
    listing:
      "https://jobsearcher.com/j/software-engineer-web-developer-at-trumbull-industries-in-warren-oh-1bn2oJM",
    date: "2022-10-11",
  },
  {
    title: "Database Administrator/Software Developer",
    company: "AVI Foodsystems Inc.",
    desc: "The ideal candidate will have 3-5 years experience in Database Administration (Microsoft SQL Server, PostgreSQL, and others) as well as experience with developing desktop applications in C# and VBA.",
    location: "Warren, OH",
    salary: "Unlisted",
    listing:
      "https://avi-foodsystems-en.jobs.net/job/mid-level-database-administrator-full-stack-developer/J3V8626B0GTNR3C9Q1J",
    date: "2022-10-26",
  },
];
