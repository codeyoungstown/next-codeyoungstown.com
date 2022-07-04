import Link from "next/link";
import Layout from "../components/Layout";
import Companies from "../components/Companies";

export default function MadeInYoungstown() {
  return (
    <Layout>
      <h1 className="text-3xl p-2">Made In Youngstown</h1>
      <h2 className="text-2xl p-2">Local Tech Companies</h2>
      <Companies />
    </Layout>
  );
}

// Card design for each company with consulting badge
