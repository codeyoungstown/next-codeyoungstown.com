import { companies } from "../data/companies";
import DataCard from "./DataCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// name, website, city, careers?, services/product

export default function Companies() {
  const CareerPage = ({ link }) => {
    return (
      <button className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-1 px-2 rounded m-1">
        <a href={link} target="_blank" className="text-white font-normal">
          Careers
        </a>
      </button>
    );
  };
  const Website = ({ link }) => {
    return (
      <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded m-1">
        <a href={link} target="_blank" className="text-white font-normal">
          Website
        </a>
      </button>
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
          <hr />
          <p>{company.servicesOrProduct}</p>
        </DataCard>
      ))}
    </div>
  );
}
