type Tags =
  | "Websites"
  | "Design"
  | "Data"
  | "Consulting"
  | "Networking"
  | "Marketing"
  | "Software"
  | "Apps"
  | "Hardware"
  | "SEO";

export type Company = {
  name: string;
  city: string;
  website: string;
  careers?: string;
  desc: string;
  tags?: Tags[];
  servicesOrProduct: string;
};

export const companies: Company[] = [
  {
    name: "45Press",
    city: "Canfield",
    website: "https://45press.com/",
    desc: "45Press provide design, development and hosting expertise to help build and host digital products, platforms, or apps.",
    tags: ["Websites", "Design"],
    servicesOrProduct: "Services",
  },
  {
    name: "Advanced Technology Partners",
    city: "Youngstown",
    website: "https://www.atpohio.com/",
    desc: "Advanced Technology Partners provides customers with advanced IT solutions.",
    tags: ["Data", "Consulting", "Networking"],
    servicesOrProduct: "Services",
  },
  {
    name: "Aim Transportation Solutions",
    city: "Girard",
    website: "https://www.aimntls.com/",
    careers: "http://www.jobsataim.com/",
    desc: "Aim Transportation Solutions offers award-winning commercial truck services.",
    servicesOrProduct: "Product",
  },
  {
    name: "Autosoft",
    city: "West Middlesex, PA",
    website: "https://autosoftdms.com/",
    careers: "https://autosoftdms.com/career-opportunities/",
    desc: "Autosoft aims to support and empower dealerships of any size with proven solutions.",
    servicesOrProduct: "Product",
  },
  {
    name: "AVI Foodsystems",
    city: "Warren",
    website: "https://www.avifoodsystems.com/",
    careers: "https://avi-foodsystems.jobs.net/",
    desc: "AVI Foodsystems is America's largest family-owned and operated food and hospitality provider.",
    servicesOrProduct: "Product",
  },
  {
    name: "Black Knight",
    city: "Sharon, PA",
    website: "https://www.blackknightinc.com/",
    careers: "https://www.blackknightinc.com/careers/",
    desc: "Black Knight is a leading provider of integrated software, data and analytics solutions.",
    tags: ["Data", "Consulting", "Software"],
    servicesOrProduct: "Services",
  },
  {
    name: "Canfield Industries, Inc.",
    city: "Youngstown, OH",
    website: "https://www.canfieldindustries.net/",
    desc: "Canfield Industries, Inc. is a manufacturing company that produces and sells products related to the Fluid Power, Electronics, Plastics and Industrial marketplaces.",
    tags: ["Design"],
    servicesOrProduct: "Product",
  },
  {
    name: "CBOSS",
    city: "Poland",
    website: "https://cboss.com/",
    desc: "CBOSS specializes in the design and implementation of industry leading gateway solutions for e-payment processing.",
    servicesOrProduct: "Product",
  },
  {
    name: "Cohen & Company",
    city: "Youngstown (& NE Ohio)",
    website: "https://cohenandcompany.com/",
    careers: "https://www.cohencpa.jobs/",
    desc: "Cohen & Company is a top accounting and consulting firm specializing in audits and tax issues.",
    tags: ["Consulting"],
    servicesOrProduct: "Services",
  },
  {
    name: "Creative Stream Marketing",
    city: "Boardman",
    website: "https://creativestreammarketing.com/",
    desc: "Creative Stream Marketing is a marketing and creative agency, partnering with B2B and Retail Technology companies.",
    tags: ["Websites", "Design", "Marketing"],
    servicesOrProduct: "Services",
  },
  {
    name: "Darwin Reach Marketing",
    city: "Youngstown, OH",
    website: "https://darwinreach.com/",
    desc: "Darwin Reach helps companies and organizations build an unbreakable web presence that grows itself.",
    tags: ["Consulting", "Websites", "Marketing", "SEO"],
    servicesOrProduct: "Services",
  },
  {
    name: "Deloitte",
    city: "Hermitage, PA",
    website: "https://www2.deloitte.com/us/en.html",
    careers: "https://www2.deloitte.com/us/en/careers/careers.html",
    desc: "Deloitte provides industry-leading audit, consulting, tax, and advisory services.",
    tags: ["Consulting"],
    servicesOrProduct: "Services",
  },
  {
    name: "Delta Telecom",
    city: "Poland, OH",
    website: "https://deltatelecomohio.com",
    careers: "330.757.8276 fax",
    desc: "Delta Telecom is your local choice for business telephone services, internet, fiber optics, and more.",
    tags: ["Networking"],
    servicesOrProduct: "Services",
  },
  {
    name: "Dev Youngstown",
    city: "Youngstown, OH",
    website: "https://www.youngstown.dev/",
    desc: "Dev Youngstown partners Youngstown's most promising student software developers with Youngstown's most promising startups.",
    tags: ["Software", "Apps", "Websites", "Consulting"],
    servicesOrProduct: "Services",
  },
  {
    name: "Drund",
    city: "Youngstown",
    website: "https://www.drund.com/",
    careers: "https://www.drund.com/careers/",
    desc: "Drund is an engineering company that provides technical solutions and strategies for our partners based on the Drund platform.",
    servicesOrProduct: "Product",
  },
  {
    name: "ECMSI",
    city: "Struthers",
    website: "https://www.ecmsi.com/",
    careers: "https://www.ecmsi.com/careers/",
    desc: "ECMSI is a highly trusted and accountable managed IT service provider delivering IT best practices to small and medium sized businesses.",
    tags: ["Websites", "Consulting", "Networking"],
    servicesOrProduct: "Services",
  },
  {
    name: "FactSet",
    city: "Youngstown",
    website: "https://www.factset.com/",
    careers:
      "https://factset.wd1.myworkdayjobs.com/en-US/FactSetCareers?locations=e45ee8093d5901a1533a3a439312262f",
    desc: "FactSet creates data and software solutions for tens of thousands of investment professionals around the world.",
    servicesOrProduct: "Product",
  },
  {
    name: "FNB Corp",
    city: "Hermitage, PA",
    website: "https://www.fnb-online.com/",
    careers: "https://fnbcorp.wd1.myworkdayjobs.com/FNBCORP",
    desc: "FNB provides a full range of commercial banking, consumer banking and wealth management services.",
    servicesOrProduct: "Product",
  },
  {
    name: "GBS Corp",
    city: "Youngstown",
    website: "https://www.gbscorp.com/",
    careers: "https://gbscorp.isolvedhire.com/jobs/",
    desc: "GBS is a leading information solutions provider, partnering with some of the world’s most established brand names.",
    servicesOrProduct: "Product",
  },
  {
    name: "Grace Industries",
    city: "Fredonia, PA",
    website: "https://www.graceindustries.com/",
    desc: "Grace Industries, Inc. is a manufacturing company who produces safety and life saving equipment.",
    servicesOrProduct: "Product",
  },
  {
    name: "Henry Schein MicroMD",
    city: "Canfield, OH",
    website: "https://www.micromd.com/",
    desc: "All-in-one healthcare technology platform connecting your independent practice to the complete patient journey.",
    servicesOrProduct: "Product",
  },
  {
    name: "IDMI",
    city: "Poland",
    website: "https://idmi.net/",
    careers: "https://idmi.net/careers",
    desc: "IDMI.Net provides comprehensive, customized digital footprints for businesses and organizations large and small.",
    tags: ["Websites", "Design", "Marketing", "SEO"],
    servicesOrProduct: "Services",
  },
  {
    name: "Intellitech Corporation",
    city: "Poland",
    website: "https://intellitechcorporation.com/",
    desc: "Intellitech is a provider of innovative Jail and public safety software solutions.",
    servicesOrProduct: "Product",
  },
  {
    name: "Involta",
    city: "Youngstown",
    website: "https://www.involta.com/",
    careers: "https://www.involta.com/careers",
    desc: "Involta offers cloud solutions, infrastructure, consulting and data centers.",
    tags: ["Data", "Networking", "Consulting"],
    servicesOrProduct: "Services",
  },
  {
    name: "Jet Creative",
    city: "Youngstown",
    website: "https://jetcreative.com/",
    desc: "Jet is a creative design and marketing agency dedicated to the growth of businesses and organizations in Northeast Ohio.",
    tags: ["Websites", "Design", "Marketing", "SEO"],
    servicesOrProduct: "Services",
  },
  {
    name: "Lordstown Motors",
    city: "Lordstown",
    website: "https://lordstownmotors.com/",
    careers:
      "https://recruiting.paylocity.com/Recruiting/Jobs/All/ddd48b68-5d30-4845-bd31-2cbbac035ac6/Lordstown-Motors-Corp",
    desc: "Lordstown Motors builds electric pickup trucks and other vehicles to revolutionize the way work gets done.",
    servicesOrProduct: "Product",
  },
  {
    name: "New Era Technology, Inc",
    city: "Boardman",
    website: "https://www.neweratech.com/us/",
    desc: "New Era Technology works with customers as a trusted technology adviser.",
    servicesOrProduct: "Product",
  },
  {
    name: "PALO Creative",
    city: "Youngstown",
    website: "https://www.palocreative.com/",
    careers: "https://www.palocreative.com/careers",
    desc: "PALO Creative is a advertising and digital media agency specializing in traditional and digital marketing solutions.",
    tags: ["Websites", "Design", "Marketing", "SEO"],
    servicesOrProduct: "Services",
  },
  {
    name: "PDMI",
    city: "Poland",
    website: "https://www.pdmi.com/",
    desc: "Provides technology and other specialized industry solutions for managing health.",
    servicesOrProduct: "Product",
  },
  {
    name: "Phantom Fireworks",
    city: "Youngstown",
    website: "https://fireworks.com/",
    desc: "Phantom Fireworks is America's premier consumer firework retailer.",
    servicesOrProduct: "Product",
  },
  {
    name: "Rocket Republic",
    city: "Youngstown, OH",
    website: "https://rocketrepublic.com/",
    desc: "Rocket Republic is a full-service creative studio specializing in branding, website design & development, print design, and photography",
    tags: ["Design", "Websites"],
    servicesOrProduct: "Services",
  },
  {
    name: "SenSource",
    city: "Youngstown",
    website: "https://sensourceinc.com/",
    desc: "SenSource provides people counting solutions and traffic analytics software solutions.",
    servicesOrProduct: "Product",
  },
  {
    name: "ServeRight",
    city: "Poland",
    website: "http://serverightsoftware.com/",
    desc: "ServeRight provides advanced online ordering solutions.",
    servicesOrProduct: "Product",
  },
  {
    name: "Simon Roofing",
    city: "Youngstown",
    website: "https://www.simonroofing.com/",
    careers: "https://www.simonroofing.com/careers/",
    desc: "Simon Roofing manufactures and installs the commercial roofing products used for repairs, restorations and replacements.",
    servicesOrProduct: "Product",
  },
  {
    name: "Turning Technologies",
    city: "Youngstown",
    website: "https://www.turning.com/",
    careers: "https://www.turning.com/careers",
    desc: "Turning Technologies is an education technology company.",
    servicesOrProduct: "Product",
  },
  {
    name: "Ultium Cells",
    city: "Lordstown",
    website: "https://www.ultiumcell.com/",
    careers:
      "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=cdd81bde-c04d-4821-8470-4bfe169d4493&ccId=9200095921795_2&type=JS&lang=en_US",
    desc: "Ultium Cells are a modern producer of battery cells designed for electric vehicles.",
    servicesOrProduct: "Product",
  },
  {
    name: "Ving",
    city: "Youngstown",
    website: "https://www.vingapp.com/",
    desc: "Ving is a compliance and training monitoring platform.",
    servicesOrProduct: "Product",
  },
  {
    name: "WernerCo",
    city: "West Middlesex, PA",
    website: "https://www.wernerworldwide.com/",
    careers: "https://www.wernerworldwide.com/en/careers/job-postings/usa",
    desc: "WernerCo is an international manufacturer and distributor of climbing products, access systems, fall protection equipment and jobsite truck and van storage equipment.",
    servicesOrProduct: "Product",
  },
  {
    name: "Youngstown State University",
    city: "Youngstown",
    website: "https://ysu.edu/",
    careers: "https://ysu.edu/human-resources/",
    desc: "Youngstown State University is a public university in Youngstown, Ohio.",
    servicesOrProduct: "Product",
  },
];
