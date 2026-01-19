import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { User } from "@supabase/supabase-js";
import logoImage from "../../assets/images/logo.png";
import LoginModal from "./LoginModal";
import { supabase } from "../../lib/supabase";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Check authentication status
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isUserMenuOpen && !target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen]);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/10 z-50 shadow-2xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1440px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group"
            onClick={closeMobileMenu}
          >
            <img
              src={logoImage}
              alt="SuperMac Logo"
              className="w-12 h-12 self-center -mr-1"
              style={{ filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1))" }}
            />
            <span
              className="text-2xl font-medium text-white leading-none"
              style={{
                fontFamily:
                  "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              SuperMac
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <Link
                to="/pricing"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/release-notes"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Release Notes
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="relative user-menu-container">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white/90 hover:text-white border border-white/20 rounded-lg hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    <span>{user.user_metadata?.full_name || user.email}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isUserMenuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-lg shadow-2xl py-1 z-50 border border-white/20">
                      <Link
                        to="/my-page"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        My Page
                      </Link>
                      <div className="border-t border-white/10 my-1"></div>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-4 py-2.5 text-sm font-medium text-white/90 hover:text-white border border-white/20 rounded-lg hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Sign In
                </button>
              )}
              <a
                href="https://gxfsguhfldneqnxpkcge.supabase.co/functions/v1/download"
                className="hidden lg:block px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Download
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
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
          <div className="md:hidden border-t border-white/10 py-4 space-y-3">
            <Link
              to="/pricing"
              className="block text-white/90 hover:text-white transition-colors py-2 font-medium"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="block text-white/90 hover:text-white transition-colors py-2 font-medium"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              to="/release-notes"
              className="block text-white/90 hover:text-white transition-colors py-2 font-medium"
              onClick={closeMobileMenu}
            >
              Release Notes
            </Link>
            <div className="pt-4 border-t border-white/10 space-y-3">
              {user ? (
                <>
                  <div className="px-5 py-2 text-center text-sm text-white/70">
                    {user.user_metadata?.full_name || user.email}
                  </div>
                  <Link
                    to="/my-page"
                    onClick={closeMobileMenu}
                    className="block w-full px-5 py-2.5 text-center text-sm font-medium text-white/90 hover:text-white border border-white/20 rounded-lg hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    My Page
                  </Link>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      handleSignOut();
                    }}
                    className="block w-full px-5 py-2.5 text-center text-sm font-medium text-white/90 hover:text-white border border-white/20 rounded-lg hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    closeMobileMenu();
                    setIsLoginModalOpen(true);
                  }}
                  className="block w-full px-5 py-2.5 text-center text-sm font-medium text-white/90 hover:text-white border border-white/20 rounded-lg hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>

    {/* Mobile Menu Backdrop - Outside nav */}
    {isMobileMenuOpen && (
      <div
        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-40"
        onClick={closeMobileMenu}
      />
    )}
    </>
  );
}
