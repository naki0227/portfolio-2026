import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileCode, FileJson, Code2, TerminalSquare, GitBranch, Terminal, FileText, History, Github } from "lucide-react";
import { CuteTanuki } from "../components/CuteTanuki";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { SkillTimeline } from "../components/SkillTimeline";
import { GithubActivity } from "../components/GithubActivity";

import { SEO } from "../components/SEO";

export function About() {
  const [activeFile, setActiveFile] = useState("philosophy.md");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <>
      <SEO title="About" path="/about" description="hw24a094's background and experience." />
      <div className="py-8 md:py-12 flex flex-col items-center min-h-[85vh] gap-16 md:gap-24">

        {/* Intro Context */}
        <div className="w-full text-left max-w-6xl">
          <h2 className="text-5xl md:text-7xl font-black mb-6 transition-colors text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            The Forge
          </h2>
          <div className="p-6 md:p-8 rounded-[2rem] border-2 backdrop-blur-md mb-8 flex flex-col md:flex-row gap-6 items-center bg-white/80 dark:bg-zinc-900/50 border-slate-200 dark:border-zinc-800">
            <div className="w-20 h-20 shrink-0 rounded-full flex items-center justify-center border-4 bg-slate-100 dark:bg-zinc-950 border-[#DB2777] dark:border-[#FF66B2]">
              <span className="text-3xl">🤔</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#0284C7] dark:text-[#00F0FF]">
                {language === 'en' ? 'Why does this page exist?' : 'なぜこのページが存在するのか？'}
              </h3>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-zinc-300">
                {language === 'en'
                  ? "The Forge isn't just a list of skills. It's my virtual workspace. I believe that engineering should be rock-solid, but development itself should feel like playing a game. Here is the \"source code\" of my philosophy."
                  : "The Forgeは単なるスキル一覧ではありません。私のバーチャルワークスペースです。エンジニアリングは堅牢であるべきですが、開発自体はゲームのように楽しいものであるべきだと信じています。ここに私の哲学の「ソースコード」を記します。"}
              </p>
            </div>
          </div>
        </div>

        {/* Editor UI Container */}
        <div className="w-full max-w-6xl">
          <div className="relative w-full h-[600px] rounded-[2rem] border-2 flex flex-col overflow-hidden transition-all duration-500 bg-[#F8FAFC] dark:bg-[#0D1117] border-slate-300 dark:border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            {/* ... Editor internal content remains the same ... */}
            <div className="h-12 border-b flex items-center px-4 justify-between transition-colors bg-slate-200 dark:bg-zinc-900 border-slate-300 dark:border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-zinc-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Enludus-Tanuki — Zed
              </div>
              <div className="w-16" />
            </div>

            <div className="flex flex-1 overflow-hidden">
              <div className="w-64 border-r p-4 flex flex-col gap-2 transition-colors bg-slate-100 dark:bg-zinc-950 border-slate-300 dark:border-zinc-800">
                <div className="text-xs font-bold mb-2 tracking-widest text-slate-400 dark:text-zinc-500">EXPLORER</div>
                <button
                  onClick={() => setActiveFile("philosophy.md")}
                  className={`flex items-center gap-3 px-3 py-2 rounded-[1rem] text-sm transition-colors font-medium ${activeFile === "philosophy.md" ? "bg-[#DB2777]/10 dark:bg-[#FF66B2]/10 text-[#DB2777] dark:text-[#FF66B2]" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <FileText className="w-4 h-4" /> philosophy.md
                </button>
                <button
                  onClick={() => setActiveFile("stack.json")}
                  className={`flex items-center gap-3 px-3 py-2 rounded-[1rem] text-sm transition-colors font-medium ${activeFile === "stack.json" ? "bg-[#0284C7]/10 dark:bg-[#00F0FF]/10 text-[#0284C7] dark:text-[#00F0FF]" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <FileJson className="w-4 h-4" /> stack.json
                </button>
              </div>

              <div className="flex-1 p-6 relative overflow-y-auto transition-colors bg-white dark:bg-[#0D1117]">
                <AnimatePresence mode="wait">
                  {activeFile === "philosophy.md" && (
                    <motion.div
                      key="philosophy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-lg leading-loose"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      <div className="italic mb-4 text-slate-400 dark:text-zinc-500">&lt;!-- Enludus combines En- (connection) and Ludus (play). --&gt;</div>
                      <h1 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">
                        # {language === 'en' ? 'The Shapeshift Philosophy' : '変幻自在の哲学'}
                      </h1>
                      <p className="mb-4 text-slate-700 dark:text-zinc-300">
                        {language === 'en' ? "Software shouldn't just solve problems. It must be a seamless blend of intelligence and speed." : "ソフトウェアは単に問題を解決するだけのものであるべきではありません。知性と速度のシームレスな融合であるべきです。"}
                      </p>
                      <blockquote className="border-l-4 pl-4 my-6 italic font-sans text-xl border-[#DB2777] dark:border-[#FF66B2] text-slate-600 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-900/50 py-2">
                        {language === 'en' ? "\"AI becomes the Intelligence, GPU becomes the Wings.\"" : "「AIは知能となり、GPUは翼となる。」"}
                      </blockquote>
                      <p className="text-slate-700 dark:text-zinc-300">
                        {language === 'en'
                          ? <>I build robust, memory-safe muscles using <strong>Rust</strong> and <strong>Go</strong>.<br />I craft the brain using <strong>Python</strong> and <strong>LLMs</strong>.</>
                          : <><strong>Rust</strong>と<strong>Go</strong>を用いて、堅牢でメモリ安全な筋肉を構築します。<br /><strong>Python</strong>と<strong>LLM</strong>を駆使して、思考する頭脳を創ります。</>}
                      </p>
                    </motion.div>
                  )}

                  {activeFile === "stack.json" && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-lg leading-loose"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      <span className="text-slate-800 dark:text-zinc-300">{'{'}</span>
                      <div className="ml-8">
                        <span className="text-[#DB2777] dark:text-pink-400">"editor"</span>: <span className="text-amber-600 dark:text-yellow-400">"Zed"</span>,<br />
                        <span className="text-[#DB2777] dark:text-pink-400">"languages"</span>: [<span className="text-amber-600 dark:text-yellow-400">"Rust"</span>, <span className="text-amber-600 dark:text-yellow-400">"Go"</span>, <span className="text-amber-600 dark:text-yellow-400">"Py"</span>, <span className="text-amber-600 dark:text-yellow-400">"TS"</span>],<br />
                        <span className="text-[#DB2777] dark:text-pink-400">"fun_factor"</span>: <span className="text-purple-600 dark:text-purple-400">"∞"</span>
                      </div>
                      <span className="text-slate-800 dark:text-zinc-300">{'}'}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-10 right-10 w-20 h-20 border rounded-2xl flex items-center justify-center backdrop-blur-md bg-sky-100/80 dark:bg-cyan-900/30 border-sky-300 dark:border-cyan-500/50"
                >
                  <TerminalSquare className="w-10 h-10 text-sky-600 dark:text-cyan-400" />
                </motion.div>
              </div>
            </div>

            <div className="h-10 border-t flex items-center px-4 justify-between text-xs font-bold transition-colors bg-sky-50 dark:bg-cyan-900/20 border-sky-200 dark:border-[#00F0FF]/30 text-[#0284C7] dark:text-[#00F0FF]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <div className="flex gap-4">
                <span className="flex items-center gap-2"><GitBranch className="w-3 h-3" /> main</span>
                <span className="flex items-center gap-2"><Terminal className="w-3 h-3" /> zsh</span>
              </div>
              <div className="absolute right-4 bottom-0 flex items-end">
                <div className="w-16 h-16 rounded-t-[2rem] border-2 border-b-0 flex items-center justify-center p-2 z-10 bg-slate-50 dark:bg-zinc-950 border-[#DB2777]/30 dark:border-[#FF66B2]/50">
                  <CuteTanuki animal="default" className="w-full h-full drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth & Live Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <History className="text-[#0284C7] dark:text-[#00F0FF]" />
              {language === 'en' ? 'Growth Story' : '成長の軌跡'}
            </h3>
            <SkillTimeline />
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <Github className="text-[#DB2777] dark:text-[#FF66B2]" />
              {language === 'en' ? 'Raw Input' : '継続の証明'}
            </h3>
            <GithubActivity />
          </div>
        </div>

      </div>
    </>
  );
}
