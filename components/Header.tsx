import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav className="flex justify-center  sm:space-x-6  space-x-4 p-3 items-center">
        {[
          ["HOME", "/"],
          ["MADE IN YOUNGSTOWN", "/made-in-youngstown"],
          ["JOBS", "/jobs"],
        ].map(([title, url]) => (
          <Link href={url} key={title}>
            <a className="hover:underline hover:text-gray-300 text-gray-400 text-xl">
              {title}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
