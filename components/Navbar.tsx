'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/40 dark:border-gray-700/40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-14 sm:h-16">
      
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 group transition-transform hover:scale-105"
        onClick={closeMobileMenu}
      >
        <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-tr from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
          <span className="text-white text-base md:text-lg font-bold">💰</span>
        </div>
        <span className="text-lg sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          BudgetBuddy
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Contact", href: "/contact" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-emerald-500"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        {/* Desktop Auth */}
        <div className="hidden sm:block">
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow hover:shadow-lg transition-transform hover:scale-105 active:scale-95">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-8 h-8 sm:w-9 sm:h-9 hover:scale-110 transition-transform duration-200",
                },
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-transform active:scale-95"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-transform ${
              isMobileMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={`md:hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="mt-3 space-y-2 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/40 dark:border-gray-700/40 shadow-md px-4 py-5">
        {[
          { name: "Home", href: "/", icon: "🏠" },
          { name: "About", href: "/about", icon: "ℹ️" },
          { name: "Contact", href: "/contact", icon: "📞" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={closeMobileMenu}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 hover:bg-emerald-50/50 dark:hover:text-emerald-400 dark:hover:bg-emerald-900/20 transition-colors active:scale-95"
          >
            <span>{link.icon}</span> {link.name}
          </Link>
        ))}

        {/* Mobile Auth */}
        <div className="pt-4 border-t border-gray-200/40 dark:border-gray-700/40">
          <SignedOut>
            <SignInButton>
              <button
                onClick={closeMobileMenu}
                className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow hover:shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex justify-center mt-3">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "w-9 h-9 hover:scale-110 transition-transform duration-200",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  </div>
</nav>


  );
}