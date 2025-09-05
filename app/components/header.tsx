import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="bg-[#e6d9c9] shadow-md border-b border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/logo.svg"
              alt="RandomBuddy Logo"
              width={180}
              height={60}
              className="rounded-full border border-black/20 group-hover:scale-105 transition-transform duration-300"
            />
          
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/contact"
              className="text-black hover:text-[#5b4636] font-medium transition-colors"
            >
              Contact
            </Link>
           
            {/* <Link
              href="/blog"
              className="text-black hover:text-[#5b4636] font-medium transition-colors"
            >
              Blog
            </Link> */}
            <Link
              href="/about"
              className="text-black hover:text-[#5b4636] font-medium transition-colors"
            >
              About
            </Link>
          </nav>

         <MobileNav/>
        </div>
      </div>
    </header>
  );
}
