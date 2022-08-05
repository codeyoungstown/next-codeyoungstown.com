import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const Pages = [
    ["HOME", "/"],
    ["MADE IN YOUNGSTOWN", "/made-in-youngstown"],
    ["JOBS", "/jobs"],
  ];
  const ToggleMenu = () => {
    const pages = document.getElementById("mobile-nav-links");
    pages.classList.toggle("hidden");
  };

  return (
    <header className="flex justify-center">
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
      <nav className="sm:hidden my-3 items-center w-full">
        <button
          className="hover:bg-slate-600 bg-slate-700 text-gray-400 text-xl py-1 px-4 rounded-md"
          onClick={ToggleMenu}
        >
          Menu
          <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
        </button>

        <div id="mobile-nav-links" className="bg-slate-600 w-full mt-2 hidden">
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
