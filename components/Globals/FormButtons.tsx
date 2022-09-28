import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function FormButton({ formLink, children }) {
  return (
    <a
      className="px-6 py-2 bg-gray-600 text-white text-sm uppercase rounded hover:bg-gray-700 hover:shadow-lg"
      href={formLink}
    >
      {children}
    </a>
  );
}

export function BackButton({ href }) {
  return (
    <Link href={href}>
      <a className="rounded-md text-black bg-slate-300 hover:bg-slate-400 px-3 py-1 hover:cursor-pointer">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </a>
    </Link>
  );
}

export function SubmitButton() {
  return (
    <button
      type="submit"
      className="rounded-md text-black bg-zinc-300 hover:bg-zinc-400 px-3 py-1"
    >
      Submit
    </button>
  );
}
