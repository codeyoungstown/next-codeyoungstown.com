import { companies } from "../data/companies";
import DataCard from "./DataCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Companies() {
  const CareerPage = ({ link }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-colt hover:text-[#826e62] font-bold pl-4"
      >
        CAREERS
      </a>
    );
  };
  const Website = ({ link }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-colt hover:text-[#826e62] font-bold"
      >
        WEBSITE
      </a>
    );
  };
  return (
    <div className="flex flex-col w-full sm:grid sm:grid-cols-2 sm:gap-4 sm:content-start lg:grid-cols-3">
      {companies.map((company) => (
        <DataCard key={company.name}>
          <p className="text-xl font-medium">{company.name}</p>
          <p className="text-gray-400">
            <FontAwesomeIcon icon={faLocationDot} /> {company.city}
          </p>
          <div className="grid grid-cols-2 mt-auto">
            <div className="col-span-1">
              <Website link={company.website} />
              {company.careers ? <CareerPage link={company.careers} /> : <></>}
            </div>
            <p className="italic text-gray-400 text-right col-span-2 sm:col-span-1">
              {company.servicesOrProduct}
            </p>
          </div>
        </DataCard>
      ))}
    </div>
  );
}
