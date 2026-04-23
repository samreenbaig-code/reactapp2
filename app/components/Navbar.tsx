import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/projects" className="hover:text-yellow-400">Projects</Link>
        <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
}