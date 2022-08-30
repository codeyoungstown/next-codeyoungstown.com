import Layout from "../components/Layout";
import Companies from "../components/Companies";

const pageDescription =
  "Local tech companies in and around the Youngstown OH area.";

export default function MadeInYoungstown() {
  return (
    <Layout page="Made In Youngstown" description={pageDescription}>
      <h1 className="text-3xl p-2">Made In Youngstown</h1>
      <h2 className="sm:text-2xl text-xl p-2">
        View local tech companies and consultants near the Youngstown, OH area.
      </h2>
      <h2 className="sm:text-2xl text-xl p-2">
        Code Youngstown provides a list of companies and consultants ready to
        provide expert assistance for your technical needs.
      </h2>
      <h3 className="text-xl p-2">Local Tech Companies</h3>
      <div className="flex justify-center">
        <Companies />
      </div>
    </Layout>
  );
}
