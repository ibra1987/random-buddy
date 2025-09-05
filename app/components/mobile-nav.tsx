"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md border border-black/30 hover:bg-[#f6f0e6] transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />
      )}

      {/* Mobile menu content */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-[#f6f0e6] shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-[#e8d9c0] transition-colors"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation links */}
        <div className="pt-16 px-6">
          <ul className="space-y-4">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  onClick={closeMenu}
                  className={`
                    block py-3 px-4 rounded-md text-lg font-medium transition-colors
                    ${pathname === route.href
                      ? "bg-[#5a4631] text-white"
                      : "text-[#5a4631] hover:bg-[#e8d9c0]"
                    }
                  `}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer with website name */}
        <div className="absolute bottom-6 left-6">
          <p className="text-[#6b5a4d] text-sm">RandomBuddy</p>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;