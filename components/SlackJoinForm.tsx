import { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type JoinStatus = "idle" | "verifying" | "error";

export default function SlackJoinForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<JoinStatus>("idle");
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const bypassRecaptcha = process.env.NODE_ENV === "development" && !siteKey;

  const submitForm = (token: string) => {
    if (!formRef.current) {
      setStatus("error");
      return;
    }

    const tokenInput = formRef.current.elements.namedItem(
      "recaptchaToken"
    ) as HTMLInputElement | null;

    if (!tokenInput) {
      setStatus("error");
      return;
    }

    tokenInput.value = token;
    formRef.current.submit();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (bypassRecaptcha) {
      return;
    }

    event.preventDefault();

    if (!siteKey) {
      setStatus("error");
      return;
    }

    setStatus("verifying");
    recaptchaRef.current?.execute();
  };

  const handleCaptchaChange = (token: string | null) => {
    if (!token) {
      setStatus("error");
      return;
    }

    submitForm(token);
  };

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
    setStatus("error");
  };

  return (
    <form
      ref={formRef}
      action="/api/slack-invite"
      method="POST"
      onSubmit={handleSubmit}
      className="mx-auto mt-8 w-full max-w-lg rounded-lg bg-gray-700 p-6 text-left shadow-lg"
    >
      <label className="mb-2 block" htmlFor="location">
        Code Youngstown is a regional software group. What city is the group
        located in?
      </label>
      <input
        className="mb-4 w-full rounded-md border-0 border-b-2 border-gray-500 bg-gray-600 p-2 focus:border-gray-100 focus:ring-0"
        id="location"
        name="location"
        type="text"
        autoComplete="address-level2"
        required
      />

      <div className="absolute left-[-10000px]" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <input name="recaptchaToken" type="hidden" />

      {siteKey && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          size="invisible"
          onChange={handleCaptchaChange}
          onErrored={resetCaptcha}
          onExpired={resetCaptcha}
        />
      )}

      {status === "error" && (
        <p className="mb-4 text-sm text-red-200" role="alert">
          We could not verify your request. Please refresh the page and try
          again.
        </p>
      )}

      <button
        className="w-full rounded-md bg-zinc-300 px-4 py-2 text-black hover:bg-zinc-400 disabled:cursor-wait disabled:opacity-70"
        type="submit"
        disabled={status === "verifying"}
      >
        {status === "verifying" ? "Verifying…" : "Continue to Slack"}
      </button>
    </form>
  );
}
