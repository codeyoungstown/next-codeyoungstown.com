import Layout from "../components/Layout";
import Companies from "../components/Companies";

const pageDescription =
  "Local tech companies in and around the Youngstown OH area.";

export default function MadeInYoungstown() {
  return (
    <Layout page="Made In Youngstown" description={pageDescription}>
      <h1 className="text-3xl p-2">Made In Youngstown</h1>
      <p className="sm:text-2xl text-xl p-2">
        A directory of Youngstown-area organizations that employ technology
        professionals, sourced from the Code Youngstown community. Includes
        local consultancies that can help you with your next app, website, or
        anything else.
      </p>
      <h3 className="text-xl p-2">Local Tech Companies</h3>
      <div className="flex justify-center">
        <Companies />
      </div>
    </Layout>
  );
}
