import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <div className="flex gap-6">
            <a href="#work" className="text-gray-700 hover:text-accent transition-colors">
              projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
