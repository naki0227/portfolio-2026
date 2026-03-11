import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, RotateCcw, Volume2, Gamepad2, Sparkles, Zap, Trophy, PlayCircle } from "lucide-react";
import { CuteTanuki } from "../components/CuteTanuki";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { QualityDashboard } from "../components/QualityDashboard";
import { SEO } from "../components/SEO";

export function Playground() {
  const [text, setText] = useState("");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';
  const containerRef = useRef(null);

  const [activePad, setActivePad] = useState<number | null>(null);

  const playNote = (index: number) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      // Pentatonic Scale: C4, D4, E4, G4, A4, C5, D5, E5, G5
      const frequencies = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequencies[index - 1] || 440, audioCtx.currentTime);

      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.5);

      setActivePad(index);
      setTimeout(() => setActivePad(null), 200);

      // Cleanup
      setTimeout(() => audioCtx.close(), 1000);
    } catch (e) {
      console.error("Audio initialization failed:", e);
    }
  };

  return (
    <>
      <SEO title="Playground" path="/playground" description="Experimental projects and fun interactive demos." />
      <div className="py-8 md:py-16 px-6 max-w-[1400px] mx-auto min-h-screen transition-colors duration-500 relative">
        {/* Arcade Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none transition-opacity opacity-[0.05] dark:opacity-10"
          style={{ backgroundImage: `linear-gradient(to right, ${isDark ? '#00F0FF' : '#0284C7'} 1px, transparent 1px), linear-gradient(to bottom, ${isDark ? '#FF66B2' : '#DB2777'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />

        <div className="mb-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight flex flex-col md:flex-row md:items-center gap-4 transition-colors text-slate-900 dark:text-white">
            <span>{language === 'en' ? 'The Arcade' : 'ジ・アーケード'}</span>
            <span
              className="text-sm md:text-lg font-bold border px-5 py-2 rounded-[2rem] inline-block w-fit shadow-md dark:shadow-[#FF66B2]/20 shadow-pink-200 transition-colors bg-[#DB2777]/10 dark:bg-[#FF66B2]/10 border-[#DB2777]/30 dark:border-[#FF66B2]/30 text-[#DB2777] dark:text-[#FF66B2]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {language === 'en' ? 'Meaningless Joy' : '意味のない喜び'}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl transition-colors text-slate-600 dark:text-zinc-400">
            {language === 'en'
              ? 'Physics, typing, and noise. A collection of tiny interactions that exist just because they are fun to build and play.'
              : '物理演算、タイピング、そしてノイズ。ただ作って遊ぶのが楽しいから存在する、小さなインタラクションの集まり。'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">

          {/* Physics Box */}
          <div
            ref={containerRef}
            className="border-2 p-10 rounded-[3rem] overflow-hidden relative h-[350px] lg:h-auto shadow-lg transition-colors bg-white/80 dark:bg-[#0D1117]/80 border-[#DB2777]/30 dark:border-[#FF66B2]/30 shadow-[0_20px_40px_rgba(219,39,119,0.1)] dark:shadow-[0_0_40px_rgba(255,102,178,0.1)]"
          >
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20 pointer-events-none">
              <h3 className="text-xl font-black flex items-center gap-2 text-slate-900 dark:text-white">
                <Gamepad2 className="text-[#DB2777] dark:text-[#FF66B2]" /> {language === 'en' ? 'Containment Field' : '封じ込めフィールド'}
              </h3>
              <span className="text-xs font-bold px-3 py-1 rounded-[1rem] bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-zinc-300">{language === 'en' ? 'Drag objects' : 'ドラッグしてみて'}</span>
            </div>

            <motion.div
              drag dragConstraints={containerRef}
              whileHover="hover"
              whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 flex items-center justify-center cursor-grab z-10 backdrop-blur-sm shadow-xl bg-white/50 dark:bg-[#110D17]/50 border-slate-200 dark:border-white/20 dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] group"
            >
              <CuteTanuki animal="default" className="w-24 h-24 drop-shadow-md transition-transform group-hover:rotate-12" />
              <motion.div
                variants={{
                  hover: { opacity: 1, scale: 1, y: -40 }
                }}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                className="absolute text-2xl"
              >
                ❤️
              </motion.div>
            </motion.div>

            {/* Geometric Draggables */}
            <motion.div
              drag dragConstraints={containerRef}
              whileHover={{ scale: 1.1 }}
              whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
              className="absolute top-1/4 left-1/4 w-16 h-16 rounded-[1.5rem] flex items-center justify-center cursor-grab z-10 shadow-lg bg-[#0284C7] dark:bg-[#00F0FF] shadow-sky-300 dark:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              drag dragConstraints={containerRef}
              whileHover={{ scale: 1.1 }}
              whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
              className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full flex items-center justify-center cursor-grab z-10 shadow-lg bg-[#DB2777] dark:bg-[#FF66B2] shadow-pink-300 dark:shadow-[0_0_20px_rgba(255,102,178,0.4)]"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          {/* The Soundboard (Visual only) */}
          <div className="border-2 p-10 rounded-[3rem] backdrop-blur-md shadow-lg transition-colors flex flex-col bg-white/80 dark:bg-[#0D1117]/80 border-[#0284C7]/30 dark:border-[#00F0FF]/30 shadow-[0_20px_40px_rgba(2,132,199,0.1)] dark:shadow-[0_0_40px_rgba(0,240,255,0.1)]">
            <h3 className="text-xl font-black mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
              <Volume2 className="text-[#0284C7] dark:text-[#00F0FF]" /> {language === 'en' ? 'Audio Signals' : 'オーディオシグナル'}
            </h3>

            <div className="grid grid-cols-3 gap-4 flex-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <button
                  key={i}
                  onClick={() => playNote(i)}
                  aria-label={`Play sound pad ${i}`}
                  className={`relative rounded-[1.5rem] flex items-center justify-center overflow-hidden transition-all duration-75 active:scale-95 border-2 ${activePad === i
                    ? `bg-[#0284C7] dark:bg-[#00F0FF] border-[#0284C7] dark:border-[#00F0FF] shadow-lg shadow-sky-300 dark:shadow-[0_0_30px_rgba(0,240,255,0.6)]`
                    : `bg-slate-50 border-slate-200 hover:border-[#0284C7]/50 dark:bg-zinc-900/50 dark:border-zinc-700 dark:hover:border-[#00F0FF]/50`
                    }`}
                >
                  {activePad === i && (
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-white rounded-[1.5rem]"
                    />
                  )}
                  <PlayCircle className={`w-8 h-8 ${activePad === i ? 'text-white' : 'text-slate-400 dark:text-zinc-600'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Speed Typing */}
          <div className="col-span-1 lg:col-span-2 border-2 p-10 rounded-[3rem] backdrop-blur-md shadow-lg transition-colors bg-white/80 dark:bg-[#0D1117]/80 border-green-500/30 shadow-[0_20px_40px_rgba(34,197,94,0.1)] dark:shadow-[0_0_40px_rgba(34,197,94,0.1)]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black flex items-center gap-2 text-slate-900 dark:text-white">
                <Trophy className="text-green-500" /> {language === 'en' ? 'Speed Typing' : 'スピードタイピング'}
              </h3>
              <div className="px-4 py-1.5 rounded-[1.5rem] text-sm font-bold border border-green-200 dark:border-green-500/30 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {language === 'en' ? 'High Score' : 'ハイスコア'}: 120 WPM
              </div>
            </div>

            <div className="p-6 rounded-[2rem] border mb-6 text-lg md:text-xl font-medium leading-relaxed bg-slate-50 dark:bg-zinc-900/80 border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              fn main() {'{'}
              <br />
              &nbsp;&nbsp;println!("The shapeshifting tanuki strikes again!");
              <br />
              {'}'}
            </div>

            <div className="flex gap-4">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={language === 'en' ? "Start typing..." : "タイピングを開始..."}
                className="flex-1 border-2 rounded-[2rem] px-6 py-4 outline-none transition-all font-bold text-lg shadow-inner focus:border-green-500 bg-slate-100 dark:bg-black/40 border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              />
              <button
                onClick={() => setText("")}
                aria-label="Clear text"
                className="w-16 h-16 rounded-[2rem] flex items-center justify-center transition-colors border-2 shadow-sm bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-800 dark:text-white border-slate-300 dark:border-zinc-700"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Lab / Quality Section */}
        <div className="mt-20 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                <Zap className="text-yellow-400" /> Engineer's Lab
              </h3>
              <p className="text-sm opacity-60">Continuous monitoring of interaction performance and code quality.</p>
            </div>
          </div>
          <QualityDashboard />
        </div>
      </div>
    </>
  );
}
