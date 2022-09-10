export default function SuggestChange({ display, toggleClose }) {
  return (
    <div
      className={`backdrop-blur-sm justify-center items-center ${display} overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      aria-labelledby="Suggest A Change Form"
      aria-hidden="true"
    >
      <div className="p-4 flex bg-white text-gray-800 rounded-lg sm:w-96">
        <div className="w-full">
          <p className="text-xl">Suggest A Change</p>

          <textarea
            className="bg-gray-200 rounded-md w-full min-h-[150px]"
            required
          />
          <div className="flex space-x-2">
            <button
              onClick={toggleClose}
              className="rounded-md bg-slate-300 hover:bg-slate-400 px-3 py-1"
            >
              Close
            </button>
            <button className="rounded-md bg-zinc-300 hover:bg-zinc-400 px-3 py-1">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
