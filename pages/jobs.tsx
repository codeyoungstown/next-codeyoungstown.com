// Card design for each job listing with job description, contact person, salary range (optional), location (remote?), listing link

import Link from "next/link";
import Layout from "../components/Layout";
import Companies from "../components/Companies";

export default function Jobs() {
  return (
    <Layout page="Jobs">
      <h1 className="text-3xl p-2">Jobs</h1>
      <h2 className="text-xl p-2">Community-sourced job opportunities</h2>
      <Link href="/jobs-form">
        <a className="hover:text-gray-300 underline">Submit a Job</a>
      </Link>
    </Layout>
  );
}
