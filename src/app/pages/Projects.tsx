import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Terminal, Moon, PenTool, Code2, Video, Film, Bot, Cpu, Play, Sparkles } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { CuteTanuki } from "../components/CuteTanuki";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { SEO } from "../components/SEO";

const PROJECTS: Array<{
  id: string;
  title: string;
  desc: { en: string; ja: string };
  color: string;
  lightColor: string;
  shadow: string;
  lightShadow: string;
  icon: React.ReactNode;
  animal: 'crab' | 'owl' | 'flamingo' | 'default';
  animalName: { en: string; ja: string };
  tech: string[];
  stats: { speed: number; fun: number; stability: number };
  evidence: { en: string; ja: string };
  log: { en: string; ja: string };
}> = [
    {
      id: "agn",
      title: "AGN (Antigravity-Native)",
      desc: {
        en: "The world's first AI-Native multilingual programming language where Japanese and English are treated equally.",
        ja: "日本語と英語を等価に扱う、世界初のAI-Native多言語プログラミング言語。"
      },
      color: "from-orange-500 to-red-600",
      lightColor: "from-orange-400 to-red-500",
      shadow: "shadow-[0_0_30px_rgba(239,68,68,0.4)]",
      lightShadow: "shadow-[0_10px_30px_rgba(239,68,68,0.2)]",
      icon: <Code2 className="w-16 h-16 text-red-100" />,
      animal: "crab",
      animalName: { en: "Rust-Crab Tanuki", ja: "Rustカニ・タヌキ" },
      tech: ["Rust", "WGPU", "Bridge Pattern"],
      stats: { speed: 95, fun: 85, stability: 90 },
      evidence: { en: "60% less memory usage than Electron-based apps", ja: "Electronベースのアプリと比較してメモリ使用量を60%削減" },
      log: {
        en: "Abstracted environment with Bridge Pattern. Running the same core logic in Native, Web, and Test 🦀",
        ja: "Bridge Patternで環境を抽象化。Native、Web、Test環境で同じコアロジックを動かしてるよ🦀"
      }
    },
    {
      id: "nue",
      title: "Nue",
      desc: {
        en: "AI Video Alchemy Platform. Microservices that automatically edit raw footage to match trends.",
        ja: "Raw映像素材をトレンドに合わせて自動編集するAI動画錬金プラットフォーム。"
      },
      color: "from-blue-500 to-indigo-600",
      lightColor: "from-blue-400 to-indigo-500",
      shadow: "shadow-[0_0_30px_rgba(79,70,229,0.4)]",
      lightShadow: "shadow-[0_10px_30px_rgba(79,70,229,0.2)]",
      icon: <Video className="w-16 h-16 text-indigo-100" />,
      animal: "owl",
      animalName: { en: "Microservice Owl", ja: "マイクロサービス・フクロウ" },
      tech: ["Go", "Rust", "Python", "FFmpeg"],
      stats: { speed: 85, fun: 80, stability: 75 },
      evidence: { en: "Processes 4K 60fps footage 4x faster than real-time", ja: "4K 60fpsの映像を実時間の4倍以上の速度で処理" },
      log: {
        en: "Go for Gateway, Python for Brain, Rust for Muscle. The right tool for the right job 🦉",
        ja: "GatewayにGo、頭脳にPython、筋肉にRust。適材適所の言語選定がカギだね🦉"
      }
    },
    {
      id: "auto-director",
      title: "Auto Director",
      desc: {
        en: "Agentic Video Generation Framework where AI autonomously reads repositories and directs commercial videos.",
        ja: "AIが自律的にリポジトリを読み、CM動画を監督・生成するエージェント型フレームワーク。"
      },
      color: "from-pink-400 to-rose-500",
      lightColor: "from-pink-300 to-rose-400",
      shadow: "shadow-[0_0_30px_rgba(244,114,182,0.4)]",
      lightShadow: "shadow-[0_10px_30px_rgba(244,114,182,0.2)]",
      icon: <Film className="w-16 h-16 text-pink-100" />,
      animal: "flamingo",
      animalName: { en: "Director Flamingo", ja: "ディレクター・フラミンゴ" },
      tech: ["TypeScript", "Remotion", "MCP"],
      stats: { speed: 70, fun: 95, stability: 80 },
      evidence: { en: "Reduced advertisement production cost by 90%", ja: "広告動画の制作コストを従来の90%削減" },
      log: {
        en: "Implemented an MCP server so Claude and Windsurf can call the video generator directly 🦩",
        ja: "ClaudeやWindsurfが直接動画を生成できるように、MCPサーバーとして実装したよ🦩"
      }
    },
    {
      id: "dreamcatcher",
      title: "DreamCatcher",
      desc: {
        en: "Autonomous AI Executive Assistant that understands your context and proactively proposes actions.",
        ja: "AIが自律的にユーザーのコンテキストを理解し、アクションを「提案」するライフマネージャー。"
      },
      color: "from-emerald-400 to-green-500",
      lightColor: "from-emerald-300 to-green-400",
      shadow: "shadow-[0_0_30px_rgba(16,185,129,0.4)]",
      lightShadow: "shadow-[0_10px_30px_rgba(16,185,129,0.2)]",
      icon: <Bot className="w-16 h-16 text-emerald-100" />,
      animal: "default",
      animalName: { en: "Agent Tanuki", ja: "エージェント・タヌキ" },
      tech: ["Next.js", "FastAPI", "pgvector"],
      stats: { speed: 80, fun: 90, stability: 85 },
      evidence: { en: "Automates 50+ daily micro-decisions per user", ja: "1ユーザーあたり毎日50以上の微小な意思決定を自動化" },
      log: {
        en: "Proposals are autonomous, but execution requires permission. Keeping the Human-in-the-Loop 🍃",
        ja: "提案は自律的だけど、実行は許可制。Human-in-the-Loopの哲学をコードに組み込んだんだ🍃"
      }
    },
    {
      id: "enludus-ego",
      title: "Enludus Ego",
      desc: {
        en: "Your life, one intelligence. A Local-First AI Digital Twin that fuses technical and emotional contexts.",
        ja: "ローカルファーストのAI Digital Twin。技術的な文脈と感情的なコンテキストを融合。"
      },
      color: "from-cyan-400 to-blue-500",
      lightColor: "from-cyan-300 to-blue-400",
      shadow: "shadow-[0_0_30px_rgba(6,182,212,0.4)]",
      lightShadow: "shadow-[0_10px_30px_rgba(6,182,212,0.2)]",
      icon: <Cpu className="w-16 h-16 text-cyan-100" />,
      animal: "crab",
      animalName: { en: "Bio-Crab Tanuki", ja: "バイオ・カニタヌキ" },
      tech: ["Rust Hub", "Python Engine", "MLX"],
      stats: { speed: 90, fun: 85, stability: 95 },
      evidence: { en: "100% private. 0ms latency local inference", ja: "100%プライベート。ローカル推論による遅延ゼロの体験" },
      log: {
        en: "Bio-inspired architecture: Rust acts as the nervous system, Python as the brain 🧠",
        ja: "生体模倣アーキテクチャ。Rustが神経系としてパルスを送り、Pythonが脳として思考する設計だよ🧠"
      }
    },
    {
      id: "preplay",
      title: "Preplay",
      desc: {
        en: "Zero time spent choosing. A context-aware impromptu play suggestion app with Zero-UI.",
        ja: "遊びを選ぶ時間を、ゼロにする。コンテキスト認識型の即興遊び提案アプリ。"
      },
      color: "from-yellow-400 to-amber-500",
      lightColor: "from-yellow-300 to-amber-400",
      shadow: "shadow-[0_0_30px_rgba(245,158,11,0.4)]",
      lightShadow: "shadow-[0_10px_30px_rgba(245,158,11,0.2)]",
      icon: <Play className="w-16 h-16 text-yellow-100" />,
      animal: "flamingo",
      animalName: { en: "Zero-UI Flamingo", ja: "ゼロUI・フラミンゴ" },
      tech: ["Flutter", "Sensor Fusion", "Provider"],
      stats: { speed: 95, fun: 95, stability: 80 },
      evidence: { en: "Average decision time reduced from 20 min to 3 sec", ja: "意思決定時間を平均20分から3秒に短縮" },
      log: {
        en: "Eliminated all menus. The moment you open the app, it reads the context and gives you the answer 🎲",
        ja: "メニューは極限まで排除。起動した瞬間にコンテキストを読み取って答えを出すZero-UIだよ🎲"
      }
    }
  ];

export function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <>
      <SEO title="Projects" path="/projects" description="Featured projects and technical achievements." />
      <div className="py-8 md:py-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight flex flex-col md:flex-row md:items-center gap-4 transition-colors text-slate-900 dark:text-white">
            <span>{language === 'en' ? 'The Menagerie' : '変化の動物園'}</span>
            <span
              className="text-sm md:text-lg font-bold border px-5 py-2 rounded-[2rem] inline-block w-fit transition-colors text-[#0284C7] dark:text-[#00F0FF] bg-[#0284C7]/10 dark:bg-[#00F0FF]/10 border-[#0284C7]/30 dark:border-[#00F0FF]/30 shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {language === 'en' ? 'Archive of Incarnations' : '化身のアーカイブ'}
            </span>
          </h2>
          <p className="text-lg md:text-xl transition-colors text-slate-600 dark:text-zinc-400">
            {language === 'en' ? 'Hover to reveal the true form. Click to inspect the specs.' : 'ホバーで真の姿を現し、クリックでスペックを調べる。'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((proj) => (
            <ProjectCard key={proj.id} project={proj} onClick={() => setSelectedId(proj.id)} isDark={isDark} language={language} />
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <ProjectModal
              project={PROJECTS.find(p => p.id === selectedId)!}
              onClose={() => setSelectedId(null)}
              isDark={isDark}
              language={language}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function ProjectCard({ project, onClick, isDark, language }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-container-${project.id}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-2 rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-[#0D1117] border-slate-200 dark:border-zinc-800 hover:border-[#DB2777]/50 dark:hover:border-[#FF66B2]/50 hover:shadow-[0_20px_40px_rgba(219,39,119,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,102,178,0.2)]"
    >
      <div className="aspect-[4/3] relative overflow-hidden p-6 flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950">
        {/* Abstract Background for the project */}
        <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? project.color : project.lightColor} opacity-20 transition-opacity duration-500 group-hover:opacity-40`} />

        {/* Default State: Project Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.8 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className={`p-8 rounded-[2rem] backdrop-blur-md border bg-white/60 dark:bg-black/40 border-white/40 dark:border-white/10 ${isDark ? project.shadow : project.lightShadow}`}>
            {project.icon}
          </div>
        </motion.div>

        {/* Hover State: Tanuki Shapeshift */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center flex-col gap-4"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1.2 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.6 }}
        >
          <div className="w-36 h-36 relative">
            <CuteTanuki animal={project.animal} className="w-full h-full drop-shadow-[0_10px_20px_rgba(2,132,199,0.3)] dark:drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]" />
          </div>
          <span className="text-xl font-black tracking-widest uppercase text-slate-900 dark:text-white drop-shadow-md dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            {project.animalName[language]}
          </span>
        </motion.div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 2 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 blur-[40px] pointer-events-none bg-[#DB2777]/10 dark:bg-[#FF66B2]/20 mix-blend-multiply dark:mix-blend-screen"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="p-8 relative z-10 border-t bg-white dark:bg-[#0D1117] border-slate-100 dark:border-zinc-800">
        <h3 className="text-3xl font-black mb-3 flex justify-between items-center text-slate-900 dark:text-zinc-100">
          {project.title}
          <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1 border bg-pink-50 dark:bg-zinc-800 shadow-[0_5px_15px_rgba(219,39,119,0.2)] dark:shadow-[0_0_15px_rgba(255,102,178,0.4)] border-[#DB2777]/30 dark:border-[#FF66B2]/50 text-[#DB2777] dark:text-[#FF66B2]">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </h3>
        <p className="text-base mb-6 line-clamp-2 text-slate-600 dark:text-zinc-400">{project.desc[language]}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-xs font-bold border px-3 py-1.5 rounded-[1rem] bg-slate-50 dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-[#0284C7] dark:text-[#00F0FF] shadow-sm dark:shadow-[0_0_10px_rgba(0,240,255,0.1)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              [{t}]
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose, isDark, language }: any) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 cursor-auto">
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 dark:bg-[#0D1117]/90"
      />
      <motion.div
        layoutId={`card-container-${project.id}`}
        className="w-full max-w-5xl rounded-[3rem] overflow-hidden relative z-10 flex flex-col md:flex-row border-2 bg-white dark:bg-[#0D1117] border-slate-200 dark:border-zinc-700 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-6 right-6 z-20 p-3 rounded-full transition-all backdrop-blur-md border bg-white/80 dark:bg-zinc-800 hover:bg-[#DB2777] dark:hover:bg-[#FF66B2] hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,102,178,0.6)] text-slate-800 dark:text-white hover:text-white border-slate-200 dark:border-zinc-600 hover:border-[#DB2777] dark:hover:border-[#FF66B2]"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Abstract Image Area */}
        <div className={`w-full md:w-[45%] h-64 md:h-auto relative overflow-hidden bg-gradient-to-br ${isDark ? project.color : project.lightColor} flex items-center justify-center`}>
          <div className="absolute inset-0 backdrop-blur-sm bg-white/20 dark:bg-black/40" />
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="relative z-10 w-56 h-56"
          >
            <CuteTanuki animal={project.animal} className="w-full h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r z-10 from-white dark:from-[#0D1117] via-transparent to-transparent" />
        </div>

        <div className="p-8 md:p-12 md:w-[55%] flex flex-col h-full relative z-20 bg-white dark:bg-[#0D1117]">
          <div className="mb-8">
            <h3 className="text-4xl font-black mb-4 drop-shadow-md text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-lg leading-relaxed mb-4 text-slate-600 dark:text-zinc-300">{project.desc[language]}</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-[#0284C7]/5 dark:bg-[#00F0FF]/5 border border-[#0284C7]/20 dark:border-[#00F0FF]/20 text-[#0284C7] dark:text-[#00F0FF]">
              <Sparkles className="w-4 h-4" />
              {project.evidence[language]}
            </div>
          </div>

          <div className="h-64 mb-8 border rounded-[2rem] relative overflow-hidden flex items-center justify-center p-4 bg-slate-50 dark:bg-zinc-950/80 border-[#0284C7]/20 dark:border-[#00F0FF]/20 shadow-inner dark:shadow-[inset_0_0_30px_rgba(0,240,255,0.05)]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={[
                { subject: 'Speed', A: project.stats.speed, fullMark: 100 },
                { subject: 'Fun', A: project.stats.fun, fullMark: 100 },
                { subject: 'Stability', A: project.stats.stability, fullMark: 100 },
              ]}>
                <PolarGrid stroke={isDark ? "#27272a" : "#e2e8f0"} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: isDark ? '#00F0FF' : '#0284C7', fontSize: 14, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Stats" dataKey="A" stroke={isDark ? "#00F0FF" : "#0284C7"} fill={isDark ? "#00F0FF" : "#0284C7"} fillOpacity={isDark ? 0.3 : 0.2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-auto border p-6 rounded-[2.5rem] relative bg-pink-50/50 dark:bg-zinc-800/50 border-[#DB2777]/20 dark:border-[#FF66B2]/30 shadow-sm dark:shadow-[0_0_20px_rgba(255,102,178,0.1)]">
            <div className="absolute -top-6 -left-4 w-12 h-12 rounded-full flex items-center justify-center border shadow-lg bg-white dark:bg-zinc-900 border-[#DB2777]/30 dark:border-[#FF66B2]/50 shadow-pink-200 dark:shadow-[#FF66B2]/40">
              <CuteTanuki animal="default" className="w-8 h-8" />
            </div>
            <p className="text-base font-bold ml-6 pl-4 border-l-4 text-slate-800 dark:text-zinc-200 border-[#DB2777]/50 dark:border-[#FF66B2]/50" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              "{project.log[language]}"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
