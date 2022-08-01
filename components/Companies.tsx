import { companies } from "../data/companies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DataCard from "./DataCard";
import Search from "./Search";
import { useState } from "react";

export default function Companies() {
  // SEARCH HANDLER //
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  const filterTags = ({ company }) => {
    if (select == "") {
      return true;
    } else return company.tags?.includes(select);
  };
  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      filterTags({ company })
  );
  // *SEARCH HANDLER* //

  return (
    <div className="w-full">
      <Search handleSearch={handleSearch} placeHolder="Company Name" />
      <SelectTags onChange={handleSelect} />
      <div className="flex flex-col w-full sm:grid sm:grid-cols-2 sm:gap-4 sm:content-start lg:grid-cols-3">
        {filteredCompanies.length ? (
          filteredCompanies.map((company) => (
            <Company key={company.name} company={company} />
          ))
        ) : (
          <NoResult />
        )}
      </div>
    </div>
  );
}

const Company = ({ company }) => {
  return (
    <DataCard>
      <h3 className="text-xl font-medium">{company.name}</h3>
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
    </DataCard>
  );
};

const CareerLink = ({ link }) => {
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

const WebsiteLink = ({ link }) => {
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

const Tag = ({ children }) => {
  return (
    <div className="bg-stone-900 rounded-md px-2 py-[2px] mr-2 min-w-max">
      <p className="font-thin text-xs text-gray-400 text-center">{children}</p>
    </div>
  );
};

const SelectTags = ({ onChange }) => {
  return (
    <select
      className="text-black my-3 rounded-lg"
      name="tags"
      id="tags"
      onChange={onChange}
    >
      <option value="">--Select Tag--</option>
      <option value="Consulting">Consulting</option>
      <option value="Design">Design</option>
      <option value="Marketing">Marketing</option>
      <option value="Networking">Networking</option>
      <option value="SEO">SEO</option>
      <option value="Software">Software</option>
      <option value="Websites">Websites</option>
    </select>
  );
};

const NoResult = () => {
  return (
    <div className="col-span-full p-5">
      <p className="text-center text-2xl">No Results Found</p>
    </div>
  );
};
