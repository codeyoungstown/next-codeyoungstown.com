export default function AddCompanyForm({ display, toggleClose }) {
  const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
  return (
    <div
      className={`backdrop-blur-sm justify-center items-center ${display} overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      aria-labelledby="Suggest A Change Form"
      aria-hidden="true"
    >
      <div className="p-4 flex bg-white text-gray-800 rounded-lg sm:w-[28rem] w-full mx-3">
        <div className="w-full">
          <form
            action="https://formsubmit.co/contact@codeyoungstown.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Company Submission!"
            />
            <input
              type="hidden"
              name="_next"
              value={`https://${BASE_URL}/submission-thank-you`}
            />
            <input type="hidden" name="_captcha" value="false" />
            <label className="text-xl">Add Company</label>
            <textarea
              className="bg-gray-200 rounded-md w-full min-h-[150px]"
              placeholder="Don't see a company you think should be here? Let us know!"
              required
            />
            <div className="flex space-x-2">
              <button
                onClick={toggleClose}
                className="rounded-md bg-slate-300 hover:bg-slate-400 px-3 py-1"
              >
                Close
              </button>
              <button
                type="submit"
                className="rounded-md bg-zinc-300 hover:bg-zinc-400 px-3 py-1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
