import Companies from "../components/Companies/Companies";
import { FormButton } from "../components/Globals/FormButtons";
import Layout from "../components/Layout";

const pageDescription =
  "A directory of local tech companies in and around the Youngstown, OH area.";

export default function Directory() {
  return (
    <Layout page="Directory" description={pageDescription}>
      <section className="mx-auto max-w-5xl px-4 pb-8 pt-8 sm:px-6 sm:pt-12">
        <h1 className="m-2 text-3xl">Directory</h1>
        <p className="mb-2 text-md sm:text-xl">{pageDescription}</p>

        <FormButton formLink="/add-a-company">add company</FormButton>
      </section>

      <div className="flex justify-center mt-4">
        <Companies />
      </div>
    </Layout>
  );
}
