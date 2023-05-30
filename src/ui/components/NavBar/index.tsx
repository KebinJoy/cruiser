import Link from "next/link";
import React from "react";
import { FC, useState } from "react";

type LinkItem = {
  label: string;
  href: string;
};

type NavBarProps = {
  links?: LinkItem[];
  home?: LinkItem;
  endChild?: React.JSX.Element;
};

// https://v1.tailwindcss.com/components/navigation
const NavBar: FC<NavBarProps> = ({ links, home, endChild }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-4 flex flex-wrap items-center justify-between bg-teal-500 p-6">
      {/* Home */}
      <Link
        className="mr-6 flex flex-shrink-0 items-center text-white"
        href={home?.href ?? "/"}
      >
        <span className="text-xl font-semibold tracking-tight">
          {home?.label}
        </span>
      </Link>

      {/* Hamburger */}
      <div className="block lg:hidden">
        <button
          className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:w-auto lg:items-center`}
      >
        {/* Links */}
        <div className="text-sm lg:flex-grow">
          {(links ?? [])?.map((link) => {
            return (
              <Link
                href={link?.href}
                className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
                key={link?.label}
              >
                {link?.label}
              </Link>
            );
          })}
        </div>

        {/* End */}
        <div>{endChild}</div>
      </div>
    </nav>
  );
};

export default NavBar;
