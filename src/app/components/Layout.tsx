import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "./Navigation";
import { Cursor } from "./Cursor";
import { CommandPalette } from "./CommandPalette";
import { useTheme } from "../contexts/ThemeContext";
import { SEO } from "./SEO";
import { useKonamiCode } from "../hooks/useKonamiCode";
import { AIAssistant } from "./AIAssistant";

export function Layout() {
  const location = useLocation();
  const { theme } = useTheme();
  const isTanukiMode = useKonamiCode();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 cursor-none relative ${theme === 'dark' ? 'bg-[#0D1117] text-zinc-100 selection:bg-[#FF66B2]/30' : 'bg-[#F0F4F8] text-slate-900 selection:bg-[#FF66B2]/30'}`}>
      <SEO />
      <Cursor />
      <Navigation />
      <CommandPalette />

      {/* Tanuki Mode Secret Overlay */}
      <AnimatePresence>
        {isTanukiMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF66B2]/20 via-[#00F0FF]/20 to-[#FFD700]/20 animate-pulse" />
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#FF66B2]/5 rounded-full blur-[120px]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 pt-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[calc(100vh-80px)]"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 backdrop-blur-xl rounded-[2rem] border text-sm hidden md:flex items-center gap-3 z-40 transition-colors shadow-[0_0_30px_rgba(0,240,255,0.2)] ${theme === 'dark' ? 'bg-[#0D1117]/90 border-[#00F0FF]/30 text-[#00F0FF]' : 'bg-white/90 border-[#00F0FF]/40 text-[#0284C7]'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <span>Press</span>
        <kbd className={`px-2 py-1 rounded-lg border shadow-[0_0_10px_rgba(0,240,255,0.2)] font-bold ${theme === 'dark' ? 'bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/40' : 'bg-[#00F0FF]/10 text-[#0284C7] border-[#00F0FF]/40'}`}>Cmd + K</kbd>
        <span>to start playing</span>
        {isTanukiMode && <span className="ml-2 animate-bounce text-yellow-400">🦊 TANUKI MODE ACTIVE!</span>}
      </div>

      <AIAssistant />
    </div>
  );
}
