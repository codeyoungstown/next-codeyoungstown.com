import Layout from "../components/Layout";
import FormField from "../components/FormField";

export default function JobsForm() {
  return (
    <Layout>
      <h1 className="text-3xl p-2">
        Add a listing to be featured on the Jobs Board
      </h1>

      <form
        className="p-4 flex-row"
        action="https://mailto:contact@codeyoungstown.com?subject=New Job Listing"
        target="__blank"
        method="post"
        encType="text/plain"
      >
        <FormField name="name" label="Your Name:" />
        <FormField name="email" label="Your Email:" type="email" />
        <FormField name="jobTitle" label="Job Title:" />
        <FormField name="company" label="Copmpany:" />
        <FormField name="location" label="Location (City, State OR Remote):" />
        <FormField name="salaryRange" label="Salary Range:" />
        <FormField name="listingLink" label="Listing link or contact email:" />

        <div>
          <button
            className="p-4 outline rounded-full border-0 border-white hover:bg-gray-700"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}
