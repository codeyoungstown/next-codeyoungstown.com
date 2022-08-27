import Layout from "../components/Layout";

const pageDescription =
  "Add a job opportunity and have it featured on the Jobs Board to get in touch with local talent.";

export default function JobsForm() {
  return (
    <Layout page="Form Submitted" description={pageDescription}>
      <div className="m-8">
        <p className="text-2xl">Thank you for your submission!</p>
      </div>
    </Layout>
  );
}
