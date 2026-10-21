import { faCalendarPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

const calendarUrl = "https://codeyoungstown.com/events.ics";
const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function CalendarSubscription() {
  const dialog = useRef<HTMLDialogElement>(null);
  const urlInput = useRef<HTMLInputElement>(null);
  const [copyStatus, setCopyStatus] = useState("");

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(calendarUrl);
      setCopyStatus("Copied!");
    } catch {
      urlInput.current?.focus();
      urlInput.current?.select();
      setCopyStatus("Select and copy the URL above.");
    }
  }

  return (
    <>
      <button
        type="button"
        className={`inline-flex items-center gap-2 rounded-sm py-1 transition-colors hover:text-white ${focusStyle}`}
        aria-haspopup="dialog"
        onClick={() => {
          setCopyStatus("");
          dialog.current?.showModal();
        }}
      >
        <FontAwesomeIcon icon={faCalendarPlus} className="h-4 w-4" aria-hidden="true" />
        <span>Subscribe to this calendar</span>
      </button>
      <dialog
        ref={dialog}
        aria-labelledby="calendar-subscription-title"
        aria-describedby="calendar-subscription-description"
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-xl border border-gray-600 bg-zinc-900 p-6 text-left text-base text-gray-200 shadow-2xl backdrop:bg-black/70"
        onClick={event => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right ||
              event.clientY < bounds.top || event.clientY > bounds.bottom) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="calendar-subscription-title" className="text-2xl font-semibold text-white">
            Subscribe to Code Yo events
          </h2>
          <button
            type="button"
            aria-label="Close calendar subscription"
            className={`-mr-2 -mt-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-white/10 hover:text-white ${focusStyle}`}
            onClick={() => dialog.current?.close()}
          >
            <FontAwesomeIcon icon={faXmark} className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <p id="calendar-subscription-description" className="mt-3 text-sm leading-relaxed text-gray-300">
          Add this URL as a calendar subscription to get new events and updates automatically.
        </p>
        <label htmlFor="calendar-subscription-url" className="mt-5 block text-sm font-semibold">
          Subscription URL
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          <input
            ref={urlInput}
            id="calendar-subscription-url"
            type="text"
            readOnly
            value={calendarUrl}
            onFocus={event => event.currentTarget.select()}
            className={`min-w-0 flex-1 basis-64 rounded-lg border border-gray-600 bg-black/20 px-3 py-2 text-sm text-white ${focusStyle}`}
          />
          <button
            type="button"
            onClick={copyUrl}
            className={`rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-gray-200 ${focusStyle}`}
          >
            Copy URL
          </button>
        </div>
        <p role="status" className="mt-1 min-h-5 text-sm text-gray-300">{copyStatus}</p>
        <div className="mt-3 space-y-4 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold text-white">Apple Calendar</h3>
            <p className="mt-1 text-gray-300">On Mac, choose File → New Calendar Subscription and paste the URL. On iPhone or iPad, choose Calendars → Add Calendar → Add Subscription Calendar.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Google Calendar</h3>
            <p className="mt-1 text-gray-300">On a computer, open Google Calendar. Next to Other calendars, click + → From URL. Paste the URL and click Add calendar.</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-sm">
          <a
            href="/events.ics"
            download="code-youngstown-events.ics"
            className={`rounded-sm text-gray-300 underline underline-offset-4 hover:text-white ${focusStyle}`}
          >
            Download calendar — one-time import
          </a>
          <p className="mt-2 text-gray-400">Imported events won’t receive future updates.</p>
        </div>
      </dialog>
    </>
  );
}
