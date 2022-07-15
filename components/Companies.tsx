import { companies } from "../data/companies";

export default function Companies() {
  return (
    <div className="">
      {companies.map((company) => (
        <div
          className="rounded-lg shadow-lg text-center outline-white outline-1 outline w-1/3"
          key={company.name}
        >
          <div className="py-3 px-6 border-b border-white">
            Consulting Firm?
          </div>
          <div className="p-6">
            <h5 className="text-xl mb-2">{company.name}</h5>
            <p className="mb-4">{company.city}</p>
            {company.careers != "" && (
              <button
                type="button"
                className="p-4 text-xs uppercase rounded shadow-md text-CYgray bg-white hover:bg-gray-300"
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
              className="p-4 bg-CYgray text-white text-xs uppercase rounded shadow-md hover:text-gray-300 outline-1 outline-white outline hover:outline-gray-300"
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
          <div className="py-3 px-6 border-t border-white text-white">
            {company.servicesOrProduct}
          </div>
        </div>
      ))}
    </div>
  );
}
