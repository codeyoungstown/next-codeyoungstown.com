import { FormButton } from "../components/Globals/FormButtons";

import JobListings from "../components/JobListings";
import Layout from "../components/Layout";

const pageDescription =
  "Local and remote job opportunities curated by the Code Youngstown community.";

export default function Jobs() {
  return (
    <Layout page="Jobs" description={pageDescription}>
      <h1 className="text-3xl m-2">Jobs</h1>
      <p className="sm:text-xl text-md mb-2">{pageDescription}</p>

      <FormButton formLink="/jobs-form">Submit a Job</FormButton>

      <JobListings />
    </Layout>
  );
}
