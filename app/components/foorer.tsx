
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E2E] text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Branding */}
          <Link href="/" className="text-2xl font-bold tracking-wide text-[#FFB800] hover:opacity-90 transition">
            RandomBuddy
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-[#FFB800] transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#FFB800] transition">
              About
            </Link>
            <Link href="/explore" className="hover:text-[#FFB800] transition">
              Explore
            </Link>
            <Link href="/contact" className="hover:text-[#FFB800] transition">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
      
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} RandomBuddy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with ❤️ by{" "}
            <Link href="https://github.com/yourusername" className="text-[#FFB800] hover:underline">
              Brahim Driouch
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
