"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 flex items-center space-x-6 shadow-md">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          SkillSprint
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/#contests" className="hover:text-blue-600">Contests</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/#timeline" className="hover:text-blue-600">Timeline</Link>
          <Link href="/leaderboard" className="hover:text-blue-600">Leaderboard</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (appears below the oval navbar) */}
      <div
        className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#contests" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contests</Link>
          <Link href="/#timeline" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Timeline</Link>
          <Link href="/leaderboard" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Leaderboard</Link>
          <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      </div>
    </nav>
  );
}
