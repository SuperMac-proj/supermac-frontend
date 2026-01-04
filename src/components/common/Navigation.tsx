import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1440px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMobileMenu}>
            <span className="text-3xl font-black text-gray-900 hover:text-primary-600 transition-colors duration-300" style={{ fontFamily: 'Rounded Mplus 1c, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: 900, letterSpacing: '-0.03em' }}>
              SuperMac
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!isHome && (
              <Link
                to="/"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Home
              </Link>
            )}
            {/* <Link
              to="/features"
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              Features
            </Link> */}
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/release-notes"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Release Notes
            </Link>
            <a
              href="https://github.com/yourusername/supermac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            {!isHome && (
              <Link
                to="/"
                className="block text-gray-600 hover:text-primary-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            )}
            <Link
              to="/features"
              className="block text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              to="/release-notes"
              className="block text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Release Notes
            </Link>
            <a
              href="https://github.com/yourusername/supermac"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
