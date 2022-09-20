import Layout from "../components/Layout";
import FormField from "../components/Globals/FormField";
import { BackButton, SubmitButton } from "../components/Globals/FormButtons";

const pageDescription =
  "Add a company to the Code Youngstown local tech company directory.";

export default function CompanyForm() {
  const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
  return (
    <Layout page="Add Company Form" description={pageDescription}>
      <h1 className="text-3xl p-2">Add a Company</h1>
      <p className="sm:text-xl text-md p-2">{pageDescription}</p>
      <div className="flex w-full justify-center">
        <form
          className="w-full max-w-screen-md m-2"
          action="https://formsubmit.co/contact@codeyoungstown.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Company Suggestion!"
          />
          <input
            type="hidden"
            name="_next"
            value={`https://${BASE_URL}/submission-thank-you`}
          />
          <input type="hidden" name="_captcha" value="false" />
          <FormField name="company" label="Company:" />
          <FormField name="company-link" label="Company Link:" />
          <FormField
            name="email"
            label="Your Email: (incase we have any questions)"
            type="email"
          />
          <FormField
            name="company-description"
            label="Company Description:"
            textarea
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
