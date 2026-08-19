import { FormButton } from "../components/Globals/FormButtons";

import JobListings from "../components/JobListings";
import Layout from "../components/Layout";

const pageDescription =
  "Local and remote job opportunities curated by the Code Youngstown community.";

export default function Jobs() {
  return (
    <Layout page="Jobs" description={pageDescription}>
      <section className="mx-auto max-w-5xl px-4 pb-8 pt-8 sm:px-6 sm:pt-12">
        <h1 className="m-2 text-3xl">Jobs</h1>
        <p className="mb-2 text-md sm:text-xl">{pageDescription}</p>

        <FormButton formLink="/jobs-form">Submit a Job</FormButton>
      </section>

      <JobListings />
    </Layout>
  );
}
