import { companies } from "../data/companies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Companies() {
  return (
    <div className="justify-center flex flex-wrap">
      {companies.map((company) => (
        <div
          className="block rounded-lg shadow-lg max-w-sm text-center p-8 flex-none"
          key={company.name}
        >
          <div className="py-3 px-6 border-b border-gray-300">
            Consulting Firm?
          </div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {company.name}
            </h5>
            <p className="text-gray-700 text-base mb-4">{company.city}</p>
            {company.careers != "" && (
              <button
                type="button"
                className="inline-block px-6 py-2.5  text-xs leading-tight uppercase rounded shadow-md hover:bg-blue hover:shadow-lg focus:bg-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue active:shadow-lg transition duration-150 ease-in-out"
              >
                <a
                  href={company.careers}
                  rel="noreferrer"
                  target="_blank"
                  title={`${company.name}'s website`}
                >
                  Careers Page
                </a>
              </button>
            )}
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <a
                href={company.website}
                rel="noreferrer"
                target="_blank"
                title={`${company.name}'s website`}
                className="hover:text-blue"
              >
                Website
              </a>
            </button>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            {company.servicesOrProduct}
          </div>
        </div>
      ))}
    </div>
  );
}
