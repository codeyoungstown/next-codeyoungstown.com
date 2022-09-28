import Layout from "../components/Layout";
import Companies from "../components/Companies/Companies";
import { FormButton } from "../components/Globals/FormButtons";

const pageDescription =
  "Local tech companies in and around the Youngstown OH area.";

export default function MadeInYoungstown() {
  return (
    <Layout page="Made In Youngstown" description={pageDescription}>
      <h1 className="text-3xl m-2">Made In Youngstown</h1>
      <p className="sm:text-xl text-md mb-2">{pageDescription}</p>
      <FormButton formLink="/add-a-company">add company</FormButton>
      <div className="flex justify-center mt-4">
        <Companies />
      </div>
    </Layout>
  );
}
