import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900 font-display hover:text-accent transition-colors">
            satonodoka
          </Link>
          <div className="flex items-center gap-8">
            <a 
              href="#work" 
              className="text-gray-700 hover:text-accent transition-colors font-medium text-sm tracking-wide"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-accent transition-colors font-medium text-sm tracking-wide"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
