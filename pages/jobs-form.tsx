import Layout from "../components/Layout";
import FormField from "../components/Globals/FormField";
import { BackButton, SubmitButton } from "../components/Globals/FormButtons";

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
          <FormField name="name" label="Your Name:" required />
          <FormField name="email" label="Your Email:" type="email" required />
          <FormField name="jobTitle" label="Job Title:" required />
          <FormField
            name="description"
            label="Job Description:"
            textarea
            required
          />
          <FormField name="company" label="Company:" required />
          <FormField
            name="location"
            label="Location (City, State, OR Remote):"
            required
          />
          <FormField name="salaryRange" label="Salary Range:" required />
          <FormField
            name="Contact/Listing"
            label="Listing link or contact email:"
            required
          />

          <div className="flex space-x-2 text-black">
            <BackButton href="/jobs" />
            <SubmitButton />
          </div>
        </form>
      </div>
    </Layout>
  );
}
