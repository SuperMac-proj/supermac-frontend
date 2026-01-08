import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import LoginModal from "./LoginModal";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white border-b border-gray-200/50 z-50 shadow-sm transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1440px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMobileMenu}>
            <img src={logoImage} alt="SuperMac Logo" className="w-12 h-12 self-center -mr-1" style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }} />
            <span className="text-2xl font-medium text-gray-900 leading-none" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              SuperMac
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <Link
                to="/pricing"
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/release-notes"
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Release Notes
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-all"
              >
                Sign In
              </button>
              <a
                href="#"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Download
              </a>
            </div>
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
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="block text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              to="/release-notes"
              className="block text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={closeMobileMenu}
            >
              Release Notes
            </Link>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                onClick={() => {
                  closeMobileMenu();
                  setIsLoginModalOpen(true);
                }}
                className="block w-full px-5 py-2.5 text-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-all"
              >
                Sign In
              </button>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-lg shadow-md"
                onClick={closeMobileMenu}
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </nav>
  );
}
