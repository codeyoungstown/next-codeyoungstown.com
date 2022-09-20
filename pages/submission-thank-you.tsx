import Layout from "../components/Layout";

const pageDescription =
  "Thank you for submitting to Code Youngstown. Please be patient, as we manually approve every submission. We may reach out if we have any questions.";

export default function JobsForm() {
  return (
    <Layout page="Form Submitted" description={pageDescription}>
      <div className="m-8">
        <p className="sm:text-xl text-md">{pageDescription}</p>
      </div>
    </Layout>
  );
}
