import Layout from "../components/Layout";
import FormField from "../components/Globals/FormField";

const pageDescription =
  "Submit a job to be featured on the Code Youngstown Job Board";

export default function JobsForm() {
  const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
  return (
    <Layout page="Submit a Job" description={pageDescription}>
      <h1 className="text-3xl p-2">Submit a job</h1>
      <p className="sm:text-xl text-md p-2">{pageDescription}</p>

      <div className="flex w-full justify-center">
        <form
          className="w-full max-w-screen-md m-2"
          action="https://formsubmit.co/contact@codeyoungstown.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Job Listing!" />
          <input
            type="hidden"
            name="_next"
            value={`https://${BASE_URL}/submission-thank-you`}
          />
          <input type="hidden" name="_captcha" value="false" />
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

          <div className="flex space-x-2 text-black">
            <a
              href="/jobs"
              className="rounded-md bg-slate-300 hover:bg-slate-400 px-3 py-1 hover:cursor-pointer"
            >
              Back
            </a>

            <button
              type="submit"
              className="rounded-md bg-zinc-300 hover:bg-zinc-400 px-3 py-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
