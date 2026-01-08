import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/common";
import HomePage from "./pages/HomePage";
// import FeaturesPage from './pages/FeaturesPage';
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ReleaseNotesPage from "./pages/ReleaseNotesPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/features" element={<FeaturesPage />} /> */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/release-notes" element={<ReleaseNotesPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-gray-50 to-gray-100/50 border-t border-gray-200/50 py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1440px]">
            <div className="text-center text-gray-600">
              <p>&copy; 2026 SuperMac. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
