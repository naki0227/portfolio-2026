import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CuteTanuki } from "../components/CuteTanuki";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { SEO } from "../components/SEO";

const WORDS = ["CODE", "FUN", "CRAFT", "SHAPESHIFT"];

export function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const { theme } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isDark = theme === 'dark';

  return (
    <>
      <SEO title="Home" path="/" description="Welcome to the portfolio of hw24a094 - A shapeshifting Software Engineer." />
      <div className="h-full flex flex-col items-center justify-center relative overflow-hidden min-h-[75vh]">
        {/* Background flowing cyan data-stream lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 opacity-[0.05] dark:opacity-[0.15]">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-b w-[2px] from-transparent via-[#0284C7] dark:via-[#00F0FF] to-transparent"
              style={{
                left: `${10 + i * 12}%`,
                height: "200px",
                top: "-200px",
              }}
              animate={{
                top: ["-200px", "120%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + Math.random() * 4,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center flex flex-col items-center mt-[-5vh]">
          {/* Tanuki Logo that shakes on change */}
          <motion.div
            key={wordIndex}
            initial={{ scale: 0.8, filter: "blur(20px)", rotate: -15, y: 20 }}
            animate={{ scale: 1, filter: "blur(0px)", rotate: 0, y: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 120 }}
            className="mb-14 relative"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 border rounded-[3rem] p-6 flex items-center justify-center backdrop-blur-md relative z-10 transition-colors bg-white/80 dark:bg-[#0D1117]/80 border-[#0284C7]/20 dark:border-[#00F0FF]/30 shadow-[0_20px_50px_rgba(2,132,199,0.15)] dark:shadow-[0_0_50px_rgba(0,240,255,0.2)]">
              <CuteTanuki animal="default" className="w-full h-full drop-shadow-[0_10px_15px_rgba(219,39,119,0.3)] dark:drop-shadow-[0_0_15px_rgba(255,102,178,0.5)]" />
            </div>
            {/* Pink/Cyan smoke on change */}
            <motion.div
              initial={{ opacity: 1, scale: 0.5, y: 0 }}
              animate={{ opacity: 0, scale: 2.5, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 rounded-[3rem] blur-[40px] pointer-events-none bg-gradient-to-tr from-[#DB2777] to-[#0284C7] mix-blend-multiply opacity-50 dark:from-[#FF66B2] dark:to-[#00F0FF] dark:mix-blend-screen dark:opacity-100"
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-tight md:leading-tight transition-colors text-slate-900 dark:text-zinc-100">
            I <br className="md:hidden" />
            <span className="relative inline-flex justify-center min-w-[340px] md:min-w-[520px] lg:min-w-[650px] h-[1.2em] overflow-hidden align-bottom mx-2 md:mx-4 px-4 pt-2">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 100, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -100, opacity: 0, rotateX: 90 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                  className="absolute text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#DB2777] to-amber-500 drop-shadow-[0_5px_15px_rgba(219,39,119,0.3)] dark:from-[#00F0FF] dark:via-[#FF66B2] dark:to-yellow-400 dark:drop-shadow-[0_0_30px_rgba(255,102,178,0.5)]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            IDEAS INTO REALITY.
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl font-medium px-4 leading-relaxed transition-colors text-slate-600 dark:text-zinc-400">
            {language === 'en' ? (
              <>The Command Center. A shapeshifting developer blending <span className="text-[#0284C7] dark:text-[#00F0FF] font-bold">code</span>, <span className="text-[#DB2777] dark:text-[#FF66B2] font-bold">design</span>, and <span className="text-amber-500 dark:text-yellow-400 font-bold">playfulness</span>.</>
            ) : (
              <>コマンドセンター。<span className="text-[#0284C7] dark:text-[#00F0FF] font-bold">コード</span>、<span className="text-[#DB2777] dark:text-[#FF66B2] font-bold">デザイン</span>、そして<span className="text-amber-500 dark:text-yellow-400 font-bold">遊び心</span>を融合させる変幻自在のデベロッパー。</>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
