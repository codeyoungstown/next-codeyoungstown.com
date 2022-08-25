import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Pages = [
  ["HOME", "/"],
  ["MADE IN YOUNGSTOWN", "/made-in-youngstown"],
  ["JOBS", "/jobs"],
];

export default function Header() {
  const [menuLinks, setMenuLinks] = useState("hidden");

  const ToggleMenu = () => {
    menuLinks == "hidden" ? setMenuLinks("block") : setMenuLinks("hidden");
  };

  return (
    <header className="flex justify-center mb-3">
      <nav className="sm:flex justify-center space-x-4 p-3 items-center hidden">
        {Pages.map(([title, url]) => (
          <Link href={url} key={title}>
            <a className="hover:underline hover:text-gray-300 text-gray-400 text-xl">
              {title}
            </a>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      <nav className="sm:hidden w-full p-2">
        <div className="grid grid-cols-5">
          <div className="flex justify-start col-span-4">
            <Link href="/">
              <a className="text-2xl text-gray-400">Code Youngstown</a>
            </Link>
          </div>
          <div className="flex justify-end col-span-1">
            <button
              className="text-gray-400 text-xl py-1 px-4 rounded-md"
              onClick={ToggleMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-links"
          className={`bg-gray-600 w-full mt-2 ${menuLinks}`}
        >
          <ul className="w-full">
            {Pages.map(([title, url]) => (
              <Link key={title} href={url}>
                <li className="hover:underline hover:text-gray-300 border">
                  <a className="text-gray-400 text-xl">{title}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
