"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center border-b border-gray-800">

      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={50}
          className="object-contain"
        />
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-8">

        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="relative group text-sm md:text-base"
          >
            {/* TEXT */}
            <span
              className={`transition ${
                pathname === link.path
                  ? "text-yellow-400"
                  : "group-hover:text-yellow-400"
              }`}
            >
              {link.name}
            </span>

            {/* UNDERLINE ANIMATION */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full ${
                pathname === link.path ? "w-full" : ""
              }`}
            ></span>
          </Link>
        ))}

      </div>

    </nav>
  );
}