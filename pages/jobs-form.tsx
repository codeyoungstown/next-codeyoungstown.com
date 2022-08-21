import Layout from "../components/Layout";
import FormField from "../components/FormField";

export default function JobsForm() {
  const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
  return (
    <Layout page="Submit a Job">
      <h1 className="text-3xl p-2">
        Add a listing to be featured on the Jobs Board
      </h1>

      <div className="flex w-full justify-center">
        <form
          className="w-full max-w-screen-md m-2"
          action="https://formsubmit.co/garretthugs@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Job Listing!" />
          <input
            type="hidden"
            name="_next"
            value={`https://${BASE_URL}/submission-thank-you`}
          />
          <FormField name="name" label="Your Name:" />
          <FormField name="email" label="Your Email:" type="email" />
          <FormField name="jobTitle" label="Job Title:" />
          <FormField name="description" label="Job Description:" textarea />
          <FormField name="company" label="Company:" />
          <FormField
            name="location"
            label="Location (City, State, OR Remote):"
          />
          <FormField name="salaryRange" label="Salary Range:" />
          <FormField
            name="Contact/Listing"
            label="Listing link or contact email:"
          />

          <div>
            <button
              className="px-4 py-1 mt-2  outline rounded-full border-0 border-white hover:bg-gray-700"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
