import { jobs } from "../data/jobs";
import DataCard from "./Globals/DataCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { parseISO, formatDistanceToNow, differenceInDays } from "date-fns";
import Search from "./Globals/Search";

export default function JobListings() {
  // SEARCH HANDLER //
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const orderedJobs = jobs.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });
  const filteredJobs = orderedJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
      job.company.toLowerCase().includes(search.toLocaleLowerCase()) ||
      job.desc.toLowerCase().includes(search.toLocaleLowerCase())
  );
  // *SEARCH HANDLER* //

  return (
    <div className="w-full mt-4">
      <Search handleSearch={handleSearch} placeHolder="Search Jobs" />

      {filteredJobs.length ? (
        filteredJobs.map((job) => (
          <div className="flex justify-center" key={job.company + job.title}>
            <Job job={job} />
          </div>
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
}

const Job = ({ job }) => {
  // DATE HANDLER, see:https://date-fns.org/v2.29.1/docs/ //
  const jobDate = parseISO(job.date);
  const timePassed = formatDistanceToNow(jobDate, { addSuffix: true });
  const dateTracker = differenceInDays(new Date(), jobDate);
  // *DATE HANDLER* //

  if (dateTracker < 60) {
    return (
      <DataCard>
        <h3 className="text-xl font-medium mb-1">{job.title}</h3>
        <div className="leading-6">
          <p>@ {job.company}</p>
          <p className="text-gray-400">
            <FontAwesomeIcon icon={faLocationDot} /> {job.location}
          </p>
          {job.salary ? (
            <p className="text-gray-400">
              <FontAwesomeIcon icon={faDollarSign} /> {job.salary}
            </p>
          ) : null}
          <p>{job.desc}</p>
          <div className="grid grid-cols-2">
            {job.contact && job.listing  ? (
              <div className="col-span-1">
                <ul>
                  <li><JobListing link={job.listing} /></li>
                  <li><JobContact link={job.contact} /></li>
                </ul>


              </div>
            ) : job.contact ? (
                <div className="col-span-1">
                  <JobContact link={job.contact} />
                </div>
                ) : (
              <div className="col-span-1">
                <JobListing link={job.listing} />
              </div>
            )}
            <div className="col-span-1 text-right">
              <p className="text-gray-400">{timePassed}</p>
            </div>
          </div>
        </div>
      </DataCard>
    );
  } else return null;
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

const JobListing = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-colt hover:text-[#826e62] font-bold"
    >
      LISTING
    </a>
  );
};

const NoResult = () => {
  return (
    <div className="col-span-full p-5">
      <p className="text-center text-2xl">No Results Found</p>
    </div>
  );
};
