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
        className="text-white font-normal flex"
      >
        <button className="w-full bg-stone-500 hover:bg-stone-700 text-white font-bold py-1 px-2 rounded m-1">
          Careers
        </button>
      </a>
    );
  };
  const Website = ({ link }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-white font-normal flex"
      >
        <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded m-1">
          Website
        </button>
      </a>
    );
  };
  return (
    <div className="flex flex-col w-full sm:grid sm:grid-cols-3 sm:gap-4 sm:content-start">
      {companies.map((company) => (
        <DataCard>
          <p className="text-xl font-medium">{company.name}</p>
          <hr />
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> {company.city}
          </p>
          {company.careers ? <CareerPage link={company.careers} /> : <></>}
          <Website link={company.website} />
          <div className="mt-auto ">
            <hr />
            <p>{company.servicesOrProduct}</p>
          </div>
        </DataCard>
      ))}
    </div>
  );
}
