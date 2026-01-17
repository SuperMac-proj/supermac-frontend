import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/common";
import HomePage from "./pages/HomePage";
// import FeaturesPage from './pages/FeaturesPage';
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ReleaseNotesPage from "./pages/ReleaseNotesPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import MyPage from "./pages/MyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Clean up hash from URL (from Supabase OAuth)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black w-full overflow-x-hidden m-0 p-0">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/features" element={<FeaturesPage />} /> */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/release-notes" element={<ReleaseNotesPage />} />
          <Route path="/auth/callback" element={<AuthCallbackPage />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1440px]">
            <div className="flex flex-col items-center gap-4">
              {/* Links */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <a
                  href="/terms-of-service"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <span className="text-white/30">•</span>
                <a
                  href="/privacy-policy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-white/30">•</span>
                <a
                  href="/refund-policy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Refund Policy
                </a>
                <span className="text-white/30">•</span>
                <a
                  href="mailto:support@supermac.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>

              {/* Copyright */}
              <p className="text-white/60 text-sm">&copy; 2026 SuperMac. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
