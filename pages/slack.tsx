import { useRouter } from "next/router";
import SlackJoinForm from "../components/SlackJoinForm";
import Layout from "../components/Layout";

const pageDescription =
  "Join the Code Youngstown Slack community for ongoing regional software conversations.";

export default function Slack() {
  const router = useRouter();
  const configurationError = router.query.error === "configuration";
  const verificationError = router.query.error === "verification";

  return (
    <Layout page="Join Slack" description={pageDescription}>
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl">Join the Code Youngstown Slack</h1>
        <p className="mt-4 text-lg text-gray-200">
          Connect with software developers and other technology professionals
          from the Youngstown area.
        </p>

        {configurationError && (
          <p
            className="mx-auto mt-8 max-w-lg rounded-md bg-red-950 p-4 text-red-100"
            role="alert"
          >
            Slack invitations are temporarily unavailable. Please try again
            later or email contact@codeyoungstown.com.
          </p>
        )}

        {verificationError && (
          <p
            className="mx-auto mt-8 max-w-lg rounded-md bg-red-950 p-4 text-red-100"
            role="alert"
          >
            We could not verify that request. Please check your answer and try
            again.
          </p>
        )}

        <SlackJoinForm />
      </section>
    </Layout>
  );
}
