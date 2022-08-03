import { jobs } from "../data/jobs";
import DataCard from "./DataCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";

export default function JobListings() {
  return (
    <div className="w-full">
      {jobs.map((job) => (
        <Job key={job.title} job={job} />
      ))}
    </div>
  );
}

const Job = ({ job }) => {
  return (
    <DataCard>
      <h3 className="text-xl font-medium">{job.title}</h3>
      <p className="text-gray-400">
        <FontAwesomeIcon icon={faLocationDot} /> {job.location}
      </p>
      <p className="text-gray-400">
        <FontAwesomeIcon icon={faDollarSign} /> {job.salary}
      </p>
      <p className="leading-5 my-2">{job.desc}</p>
      <div className="grid grid-cols-2 mt-auto">
        <div className="col-span-1">
          <JobContact link={job.contact} />
        </div>
        <div className="col-span-1 text-right">
          <p className="text-gray-400">{job.date}</p>
        </div>
      </div>
    </DataCard>
  );
};

const JobContact = ({ link }) => {
  return (
    <a
      href={`mailto:${link}`}
      target="_blank"
      rel="noreferrer"
      className="text-colt hover:text-[#826e62] font-bold"
    >
      CONTACT
    </a>
  );
};
