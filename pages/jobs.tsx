// Card design for each job listing with job description, contact person, salary range (optional), location (remote?), listing link

import Link from "next/link";
import Layout from "../components/Layout";
import JobListings from "../components/JobListings";

const pageDescription =
  "Local job opportunities in and around the Youngstown OH area.";

export default function Jobs() {
  return (
    <Layout page="Jobs" description={pageDescription}>
      <h1 className="text-3xl p-2">Jobs</h1>
      <h2 className="text-2xl p-2">Community-sourced job opportunities</h2>
      <Link href="/jobs-form">
        <a className="hover:text-gray-300 underline">Submit a Job</a>
      </Link>
      <JobListings />
    </Layout>
  );
}
