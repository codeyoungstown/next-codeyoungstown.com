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
    <header className="mb-3">
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
      <nav className="sm:hidden flex flex-wrap justify-between items-center pt-1">
        <Link href="/">
          <a className="ml-2 text-2xl text-left text-gray-400">
            Code Youngstown
          </a>
        </Link>
        <button
          className="text-gray-400 text-xl mr-4 flex text-right"
          onClick={ToggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`w-full mt-2 ${menuLinks}`}>
          <ul className="w-full">
            {Pages.map(([title, url]) => (
              <Link key={title} href={url}>
                <li className="border p-1">
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
