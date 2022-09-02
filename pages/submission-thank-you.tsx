import Layout from "../components/Layout";

const pageDescription =
  "Thank you for submitting to the Code Youngstown Job Board. Please be patient, as we manually approve every submission. We may reach out if we have any questions.";

export default function JobsForm() {
  return (
    <Layout page="Form Submitted" description={pageDescription}>
      <div className="m-8">
        <p className="text-2xl">Thank you for your submission!</p>
      </div>
    </Layout>
  );
}
