import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT, SOCIAL_PROOF, TRUST_BADGES } from "../../utils/constants";
import clipboardVideo from "../../assets/clipboard_white.mp4";
import { Download, Star, Users, Clock, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Scroll-based video scale animation
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end start"]
  });

  // Video scale: starts at 1.0, grows to 1.15 as the video section scrolls into view
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);

  useEffect(() => {
    const splineTimer = setTimeout(() => {
      setSplineLoaded(true);
    }, 400);

    const video = videoRef.current;
    if (!video) {
      return () => clearTimeout(splineTimer);
    }

    const checkVideoVisibility = () => {
      const rect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isFullyVisible = rect.top >= 0 && rect.bottom <= windowHeight;

      if (isFullyVisible && video.paused) {
        video.play();
      } else if (!isFullyVisible && !video.paused) {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      () => {
        checkVideoVisibility();
      },
      {
        threshold: [0, 1.0],
      }
    );

    window.addEventListener('scroll', checkVideoVisibility);
    observer.observe(video);

    return () => {
      clearTimeout(splineTimer);
      observer.disconnect();
      window.removeEventListener('scroll', checkVideoVisibility);
    };
  }, []);

  return (
    <section className="relative w-full min-h-0 sm:min-h-screen bg-black pb-6 sm:pb-12 md:pb-20 overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-black">
        <iframe
          src="https://my.spline.design/metallictorus-ewLEUPjEnG0TwOjnaBcN6krV/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: splineLoaded ? 1 : 0 }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 h-full bg-gradient-to-b from-black/20 via-transparent via-40% to-black/80 pointer-events-none z-0" />

      {/* Bottom Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 md:h-48 lg:h-80 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start px-3 sm:px-4 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pointer-events-none">
        {/* Social Proof Badge - Above Headline */}
        <motion.div
          className="flex items-center gap-2 mb-4 sm:mb-5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-white/80 font-medium">{SOCIAL_PROOF.users}</span>
          </div>
          <div className="w-px h-3 bg-white/20" />
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs sm:text-sm text-white/80 font-medium">{SOCIAL_PROOF.rating}</span>
          </div>
        </motion.div>

        {/* Main Heading - Benefit-focused */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white mb-3 sm:mb-4 md:mb-5 tracking-tight w-full px-2 sm:px-4 md:px-6"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {HERO_CONTENT.title}
        </motion.h1>

        {/* Subtitle - Clear value proposition */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-white/70 mb-10 sm:mb-14 md:mb-16 max-w-2xl mx-auto px-3 sm:px-4 md:px-6"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: "1.5",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {HERO_CONTENT.subtitle}
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-3 sm:gap-4 pointer-events-auto"
        >
          {/* Primary CTA Button - Enhanced */}
          <a
            href="/pricing"
            className="group relative flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold
                       text-white rounded-xl sm:rounded-2xl
                       bg-gradient-to-r from-blue-500 to-blue-600
                       hover:from-blue-400 hover:to-blue-500
                       transform hover:scale-105 transition-all duration-300
                       shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
            <span>Get Started</span>
          </a>

          {/* Trust Badges - Below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-1">
            {TRUST_BADGES.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1.5 text-white/50 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                {badge.icon === 'shield' && <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                {badge.icon === 'zap' && <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                {badge.icon === 'clock' && <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Notice */}
          <motion.p
            className="lg:hidden text-xs text-white/40 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Desktop download available on PC
          </motion.p>
        </motion.div>

        {/* Video Section - Scales up on scroll */}
        <motion.div
          ref={videoContainerRef}
          className="w-[92%] sm:w-[88%] md:w-[85%] max-w-3xl mt-20 sm:mt-28 md:mt-36 pointer-events-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div
            className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 bg-black/50 backdrop-blur-sm origin-center"
            style={{ scale: videoScale }}
          >
            <video
              ref={videoRef}
              src={clipboardVideo}
              loop
              muted
              playsInline
              preload="auto"
              onCanPlayThrough={() => setVideoLoaded(true)}
              className="w-full h-auto transition-opacity duration-700"
              style={{ opacity: videoLoaded ? 1 : 0 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
