import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { companies } from "../../data/companies";
import DataCard from "../Globals/DataCard";
import Search from "../Globals/Search";

export default function Companies() {
  // FILTERS //
  const [userSearch, setUserSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  // SEARCH AND SELECT HANDLERS //
  const handleSearch = (e) => {
    setUserSearch(e.target.value);
  };
  const handleSelect = (e) => {
    setSelectedFilter(e.target.value);
  };
  const handleFilterByTag = (tag) => {
    setSelectedFilter(tag);
  };
  const filterTags = ({ company }) => {
    if (selectedFilter == "") {
      return true;
    } else return company.tags?.includes(selectedFilter);
  };

  // APPLY BOTH FILTERS //
  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(userSearch.toLocaleLowerCase()) &&
      filterTags({ company })
  );

  return (
    <div className="w-full">
      <Search handleSearch={handleSearch} placeHolder="Company Name" />
      <SelectTags filter={selectedFilter} onChange={handleSelect} />
      <div className="flex flex-col w-full sm:grid sm:grid-cols-2 sm:gap-4 sm:content-start lg:grid-cols-3">
        {filteredCompanies.length ? (
          filteredCompanies.map((company) => (
            <Company
              tagSelect={handleFilterByTag}
              key={company.name}
              company={company}
            />
          ))
        ) : (
          <NoResult />
        )}
      </div>
    </div>
  );
}

const Company = ({ company, tagSelect }) => {
  return (
    <DataCard>
      <h3 className="text-xl font-medium">{company.name}</h3>
      <p className="text-gray-400">
        <FontAwesomeIcon icon={faLocationDot} /> {company.city}
      </p>
      <p className="leading-5 my-2">{company.desc}</p>
      <div className="flex overflow-auto my-1">
        {company.tags
          ? company.tags.map((item) => (
              <Tag tagSelect={() => tagSelect(item)} key={item}>
                {item}
              </Tag>
            ))
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

const Tag = ({ children, tagSelect }) => {
  return (
    <button
      onClick={tagSelect}
      className="bg-stone-900 hover:bg-stone-700 rounded-md py-1 px-2 mr-2 min-w-max"
    >
      <span className="font-thin text-xs text-gray-400 text-center block">
        {children}
      </span>
    </button>
  );
};

const SelectTags = ({ onChange, filter }) => {
  return (
    <select
      className="text-black my-3 rounded-lg"
      name="tags"
      id="tags"
      onChange={onChange}
      value={filter}
    >
      <option value="">--Select Tag--</option>
      <option value="Consulting">Consulting</option>
      <option value="Data">Data</option>
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
