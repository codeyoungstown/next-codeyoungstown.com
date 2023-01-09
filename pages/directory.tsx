import Companies from "../components/Companies/Companies";
import { FormButton } from "../components/Globals/FormButtons";
import Layout from "../components/Layout";

const pageDescription =
  "A directory of local tech companies in and around the Youngstown, OH area.";

export default function Directory() {
  return (
    <Layout page="Directory" description={pageDescription}>
      <h1 className="text-3xl m-2">Directory</h1>
      <p className="sm:text-xl text-md mb-2">{pageDescription}</p>

      <FormButton formLink="/add-a-company">add company</FormButton>

      <div className="flex justify-center mt-4">
        <Companies />
      </div>
    </Layout>
  );
}
