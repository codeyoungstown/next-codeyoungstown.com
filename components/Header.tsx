import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex sm:justify-center space-x-4 text-lg">
        {[
          ["Home", "/"],
          ["Made In Youngstown", "/made-in-youngstown"],
          ["Jobs Board", "/jobs-board"],
          ["Jobs Board Form", "/jobs-board-form"],
        ].map(([title, url]) => (
          <Link href={url} key={title}>
            <a className="hover:underline">{title}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
