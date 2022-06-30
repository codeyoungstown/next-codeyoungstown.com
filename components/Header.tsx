import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex sm:justify-center space-x-4 text-lg p-4">
        {[
          ["Home", "/"],
          ["Made In Youngstown", "/made-in-youngstown"],
          ["Jobs", "/jobs"],

        ].map(([title, url]) => (
          <Link href={url} key={title}>
            <a className="hover:underline">{title}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
