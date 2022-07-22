import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav className="flex justify-center sm:w-3/4 sm:space-x-6 w-full space-x-4 p-3 bg-gray-600 rounded-xl items-center">
        {[
          ["Home", "/"],
          ["Made In Youngstown", "/made-in-youngstown"],
          // ["Jobs", "/jobs"],
        ].map(([title, url]) => (
          <Link href={url} key={title}>
            <a className="hover:underline hover:text-gray-300 sm:text-2xl">
              {title}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
