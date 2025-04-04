import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <div className="max-w-6x1 mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Joseph Zazzi
        </Link>
      </div>
      <div className="space-x-6">
        <Link href="/projects" className="hover:underlined">
          Projects
        </Link>
        <Link href="/about" className="hover:underlined">
          About
        </Link>
        <Link href="/" className="hover:underlined">
          Contact
        </Link>
      </div>
    </nav>
  );
}
