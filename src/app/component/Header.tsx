"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import ThemeSwitcher from "./ThemSwitcher";
// import { ThemeSwitcher } from "./ThemSwitcher";
// import ThemSwitcher from "./ThemSwitcher";
// import { ThemeSwitcher } from './ThemeSwitcher'

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-6 shadow-md sticky top-0 z-50 bg-white dark:bg-black transition-colors">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium hover:underline ${
              pathname === link.href ? "text-blue-500 dark:text-blue-400" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
        {/* <ThemeSwitcher /> */}
      </nav>
    </header>
  );
}
