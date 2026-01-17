import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT } from "../../utils/constants";
import clipboardVideo from "../../assets/clipboard_white.mp4";
import logo from "../../assets/images/logo.png";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Spline이 완전히 렌더링되도록 추가 지연
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

      // 비디오의 높이
      const videoHeight = rect.height;

      // 화면에 보이는 비디오의 높이 계산
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(windowHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // 비디오의 100%가 보이는지 확인
      const visibilityRatio = visibleHeight / videoHeight;

      // 비디오가 100% 보이고, 일시정지 상태이며, 비디오 상단이 화면 안에 있을 때만 재생
      if (visibilityRatio >= 0.99 && video.paused && rect.top >= 0 && rect.bottom <= windowHeight) {
        video.play();
      } else if (visibilityRatio < 0.99 && !video.paused) {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 비디오가 완전히 보일 때만(100%) 체크
          if (entry.intersectionRatio >= 0.99) {
            checkVideoVisibility();
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 0.99, 1.0],
      }
    );

    // 스크롤 이벤트에도 체크
    window.addEventListener('scroll', checkVideoVisibility);
    observer.observe(video);

    return () => {
      clearTimeout(splineTimer);
      observer.disconnect();
      window.removeEventListener('scroll', checkVideoVisibility);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black pb-20 overflow-hidden">
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
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-56 md:h-64 lg:h-80 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-0" />

      {/* Logo - Above Title */}
      <motion.div
        className="absolute top-12 sm:top-16 md:top-20 lg:top-24 left-0 right-0 flex justify-center z-10 pointer-events-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateY: [-15, 15, -15]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.1 },
          y: { duration: 0.8, delay: 0.1 },
          rotateY: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9
          }
        }}
        style={{ perspective: 1000 }}
      >
        <img
          src={logo}
          alt="SuperMac Logo"
          className="w-[240px] h-[240px]"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start px-4 pt-40 sm:pt-48 md:pt-56 lg:pt-72 pointer-events-none">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center text-white mb-6 sm:mb-8 tracking-tight w-full px-4 sm:px-6"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: "1.05",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {HERO_CONTENT.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-6"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: "1.3",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Boost productivity by up to 17%.
          <br />
          Go home earlier.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex justify-center pointer-events-auto"
        >
          <a
            href="https://gxfsguhfldneqnxpkcge.supabase.co/functions/v1/download"
            className="group relative px-5 py-2 sm:px-6 sm:py-2.5 text-base sm:text-lg font-bold
                       text-white rounded-lg sm:rounded-xl
                       bg-gradient-to-r from-blue-600 to-blue-700
                       hover:from-blue-500 hover:to-blue-600
                       transform hover:scale-105 transition-all duration-300
                       border-2 border-blue-400/60"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            <span>Download for macOS</span>
          </a>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="w-[95%] sm:w-[90%] md:w-[85%] max-w-3xl mt-12 sm:mt-16 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
