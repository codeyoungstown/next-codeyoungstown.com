import Layout from "../components/Layout";
import Companies from "../components/Companies";
import AddCompanyForm from "../components/AddCompanyForm";
import { useState } from "react";

const pageDescription =
  "Local tech companies in and around the Youngstown OH area.";

export default function MadeInYoungstown() {
  const [formVisibility, setFormVisibility] = useState("hidden");

  const toggleFormModal = () => {
    formVisibility == "hidden"
      ? setFormVisibility("flex")
      : setFormVisibility("hidden");
  };

  return (
    <Layout page="Made In Youngstown" description={pageDescription}>
      <h1 className="text-3xl p-2">Made In Youngstown</h1>
      <p className="sm:text-xl text-md p-2">{pageDescription}</p>
      <ToggleCompanyForm toggle={toggleFormModal} />
      <AddCompanyForm display={formVisibility} toggleClose={toggleFormModal} />
      <div className="flex justify-center">
        <Companies />
      </div>
    </Layout>
  );
}

const ToggleCompanyForm = ({ toggle }) => {
  return (
    <button
      className="px-6 py-2 mb-4 bg-gray-600 text-white text-sm uppercase rounded hover:bg-gray-700 hover:shadow-lg"
      onClick={toggle}
    >
      Add Company
    </button>
  );
};
