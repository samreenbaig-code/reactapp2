import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center px-8">

      {/* LOGO */}
      <Link href="/">
        <Image 
          src="/logo.png" 
          alt="Logo"
          width={120}
          height={50}
          className="object-contain"
        />
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-6">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/projects" className="hover:text-yellow-400">Projects</Link>
        <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>

    </nav>
  );
}