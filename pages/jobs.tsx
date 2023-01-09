import { FormButton } from "../components/Globals/FormButtons";

import Link from "next/link";
import JobListings from "../components/JobListings";
import Layout from "../components/Layout";

const pageDescription =
  "Local and remote job opportunities curated by the Code Youngstown community.";

export default function Jobs() {
  return (
    <Layout page="Jobs" description={pageDescription}>
      <h1 className="text-3xl p-2">Jobs</h1>
      <p className="sm:text-xl text-md p-2">{pageDescription}</p>
      <Link href="/jobs-form">
        <FormButton formLink="/jobs-form">Submit a Job</FormButton>
      </Link>
      <JobListings />
    </Layout>
  );
}
