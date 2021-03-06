import Layout from "../components/Layout";
import Companies from "../components/Companies";

// add filters for type of work done, consulting or not

export default function MadeInYoungstown() {
  return (
    <Layout page="Made In Youngstown">
      <h1 className="text-3xl p-2">Made In Youngstown</h1>
      <h2 className="text-2xl p-2">Local Tech Companies</h2>
      <div className="flex justify-center">
        <Companies />
      </div>
    </Layout>
  );
}
