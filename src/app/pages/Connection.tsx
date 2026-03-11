import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Twitter, Github, Linkedin, MessageSquare } from "lucide-react";
import { CuteTanuki } from "../components/CuteTanuki";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { SEO } from "../components/SEO";
import { Turnstile } from "@marsidev/react-turnstile";

export function Connection() {
  const [msg, setMsg] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [token, setToken] = useState("");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg || !token) return;
    setIsSent(true);
    setTimeout(() => {
      setMsg("");
      setIsSent(false);
    }, 4000);
  };

  const bgGlow = isSent
    ? "border-green-400 dark:border-green-500/50 shadow-[0_20px_50px_rgba(34,197,94,0.2)] dark:shadow-[0_0_50px_rgba(34,197,94,0.3)]"
    : "border-[#DB2777]/30 dark:border-[#FF66B2]/30 shadow-[0_20px_40px_rgba(219,39,119,0.1)] dark:shadow-[0_0_40px_rgba(255,102,178,0.1)]";

  return (
    <>
      <SEO title="Connection" path="/connection" description="Get in touch or connect with me." />
      <div className="py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[85vh]">

        {/* Left side: Mascot & Socials */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            The Signal
          </h2>
          <p className="text-xl mb-12 max-w-lg text-slate-600 dark:text-zinc-400">
            {language === 'en'
              ? 'Ready to build something fun? Send a transmission or find me in the wild.'
              : '何か面白いものを作る準備はできてる？ 通信を送るか、野生の私を見つけてください。'}
          </p>

          <div className="w-64 h-64 md:w-80 md:h-80 mb-12 relative rounded-[3rem] border-4 flex items-center justify-center transition-all bg-slate-50 dark:bg-zinc-950 border-[#DB2777]/30 dark:border-[#FF66B2]/50 shadow-xl dark:shadow-[0_0_50px_rgba(255,102,178,0.2)]">
            <CuteTanuki animal="default" className="w-full h-full object-cover transform scale-110 translate-y-8" />

            {/* Reaction Bubble based on typing */}
            <AnimatePresence>
              {msg.length > 5 && !isSent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute -top-6 -right-6 px-6 py-3 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border bg-[#0284C7] dark:bg-[#00F0FF] text-white dark:text-[#0D1117] border-[#0284C7] dark:border-[#00F0FF]"
                >
                  <MessageSquare className="w-4 h-4" /> Interesting...
                </motion.div>
              )}
              {isSent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute -top-6 -right-6 px-6 py-3 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
                >
                  Got it!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            <a href="https://github.com/naki0227" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 border-2 rounded-[2rem] transition-all group backdrop-blur-md bg-white dark:bg-[#0D1117]/80 border-slate-200 dark:border-[#00F0FF]/20 hover:border-[#0284C7]/50 dark:hover:border-[#00F0FF]/50 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <Github className="w-8 h-8 text-slate-500 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white" />
              <span className="font-bold text-slate-700 dark:text-zinc-300">GitHub</span>
            </a>
            <a href="https://x.com/enludus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 border-2 rounded-[2rem] transition-all group backdrop-blur-md bg-white dark:bg-[#0D1117]/80 border-slate-200 dark:border-[#FF66B2]/20 hover:border-[#DB2777]/50 dark:hover:border-[#FF66B2]/50 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(255,102,178,0.2)]">
              <Twitter className="w-8 h-8 text-slate-500 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white" />
              <span className="font-bold text-slate-700 dark:text-zinc-300">X (Twitter)</span>
            </a>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <div className="relative">
            <motion.div
              className={`border-2 p-10 rounded-[3rem] relative backdrop-blur-md transition-all duration-500 ${bgGlow} bg-white/80 dark:bg-[#0D1117]/80`}
            >
              <form onSubmit={handleSend} className="flex flex-col gap-6 relative z-10">
                <div>
                  <input
                    type="text"
                    placeholder={language === 'en' ? "Your Name (or codename)" : "名前（またはコードネーム）"}
                    className="w-full border-2 rounded-[1.5rem] px-6 py-5 outline-none transition-all font-bold text-lg shadow-inner bg-slate-50 dark:bg-black/40 border-slate-200 dark:border-white/10 focus:border-[#DB2777] dark:focus:border-[#FF66B2] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500"
                    disabled={isSent}
                  />
                </div>
                <div>
                  <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder={language === 'en' ? "What's your idea?" : "どんなアイデア？"}
                    className="w-full border-2 rounded-[1.5rem] px-6 py-5 outline-none transition-all h-40 resize-none font-bold text-lg shadow-inner bg-slate-50 dark:bg-black/40 border-slate-200 dark:border-white/10 focus:border-[#0284C7] dark:focus:border-[#00F0FF] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500"
                    disabled={isSent}
                  />
                </div>

                <div className="flex justify-center mb-6">
                  <Turnstile
                    siteKey="1x00000000000000000000AA"
                    onSuccess={(t) => setToken(t)}
                    options={{ theme: isDark ? 'dark' : 'light' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSent || !msg || !token}
                  className={`w-full py-6 rounded-[1.5rem] font-black text-xl flex items-center justify-center gap-3 transition-all ${isSent
                    ? "bg-green-500 text-white"
                    : "bg-white dark:bg-[#0D1117] border-2 border-[#0284C7] dark:border-[#00F0FF] text-[#0284C7] dark:text-[#00F0FF] hover:bg-[#0284C7] dark:hover:bg-[#00F0FF] hover:text-white dark:hover:text-[#0D1117] shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.2)] disabled:opacity-50"
                    }`}
                >
                  {isSent
                    ? (language === 'en' ? "TRANSMITTED!" : "送信完了！")
                    : (language === 'en' ? "SEND SIGNAL" : "シグナルを送信")} <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
