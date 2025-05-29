"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* === Site Title === */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          My Portfolio
        </h1>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-1.5 rounded transition duration-200 hover:bg-indigo-100 dark:hover:bg-zinc-800 ${
                pathname === link.href
                  ? "bg-indigo-500 text-white dark:bg-indigo-600"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* === Profile Image === */}
          <Image
            src="/abrahon.jpg"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full border border-indigo-500 ml-2"
          />
        </nav>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === Mobile Nav === */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-medium py-2 rounded transition duration-200 ${
                pathname === link.href
                  ? "text-white bg-indigo-500"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Image
              src="/abrahon.jpg"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full border border-indigo-500"
            />
          </div>
        </div>
      )}
    </header>
  );
}
