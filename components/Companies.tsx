import { companies } from "../data/companies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import CareerLink from "./CareerLink";
import WebsiteLink from "./WebsiteLink";
import Company from "./Company";

export default function Companies() {
  const Tag = ({ children }) => {
    return (
      <div className="bg-stone-900 rounded-md px-2 py-[2px] mr-2 min-w-max">
        <p className="font-thin text-xs text-gray-400 text-center">
          {children}
        </p>
      </div>
    );
  };
  return (
    <div className="flex flex-col w-full sm:grid sm:grid-cols-2 sm:gap-4 sm:content-start lg:grid-cols-3">
      {companies.map((company) => (
        <Company key={company.name}>
          <h2 className="text-xl font-medium">{company.name}</h2>
          <p className="text-gray-400">
            <FontAwesomeIcon icon={faLocationDot} /> {company.city}
          </p>
          <p className="leading-5 my-2">{company.desc}</p>
          <div className="flex overflow-auto my-1">
            {company.tags
              ? company.tags.map((item) => <Tag key={item}>{item}</Tag>)
              : null}
          </div>
          <div className="grid grid-cols-2 mt-auto">
            <div className="col-span-1">
              <WebsiteLink link={company.website} />
              {company.careers ? <CareerLink link={company.careers} /> : null}
            </div>
            <p className="italic text-gray-400 text-right col-span-2 sm:col-span-1">
              {company.servicesOrProduct}
            </p>
          </div>
        </Company>
      ))}
    </div>
  );
}
