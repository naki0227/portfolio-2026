import { Link, useLocation } from "react-router";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const isDark = theme === 'dark';

  const LINKS = [
    { path: "/about", label: language === 'en' ? "Forge" : "フォージ" },
    { path: '/projects', label: language === 'en' ? 'Projects' : 'プロジェクト' },
    { path: '/playground', label: language === 'en' ? 'Playground' : 'プレグラ' },
    { path: '/pitch', label: language === 'en' ? 'Pitch' : 'プレゼン' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 h-24 backdrop-blur-md z-50 border-b flex items-center justify-between px-6 md:px-12 transition-colors duration-500 ${isDark ? 'bg-[#0D1117]/80 border-zinc-800/50' : 'bg-white/80 border-slate-200/50'}`}>
      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-4 group">
        <div className={`w-10 h-10 rounded-[1rem] flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg ${isDark ? 'bg-[#FF66B2] shadow-[0_0_20px_rgba(255,102,178,0.4)]' : 'bg-[#DB2777] shadow-[0_0_20px_rgba(219,39,119,0.3)]'}`}>
          <div className={`w-4 h-4 rounded-sm transform -rotate-12 ${isDark ? 'bg-[#0D1117]' : 'bg-white'}`} />
        </div>
        <span className={`font-black text-2xl tracking-tight transition-colors ${isDark ? 'text-white group-hover:text-[#FF66B2]' : 'text-slate-900 group-hover:text-[#DB2777]'}`}>
          Enludus<span className={isDark ? 'text-[#00F0FF]' : 'text-[#0284C7]'}>-Tanuki</span>
        </span>
      </Link>

      {/* Right: Links & Toggles */}
      <div className="hidden md:flex items-center gap-8">
        <div className={`flex items-center gap-2 p-2 rounded-[2rem] border shadow-sm backdrop-blur-md transition-colors ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'}`}>
          {LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-[1.5rem] ${isActive
                  ? isDark ? "text-white bg-[#00F0FF]/20 shadow-[0_0_15px_rgba(0,240,255,0.2)]" : "text-white bg-[#0284C7] shadow-md"
                  : isDark ? "text-zinc-400 hover:text-white hover:bg-white/5" : "text-slate-500 hover:text-slate-900 hover:bg-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Japanese' : '英語に切り替え'}
            className={`flex items-center gap-2 px-3 py-2 rounded-[1.5rem] border font-bold text-sm transition-all ${isDark ? 'border-zinc-800 text-zinc-400 hover:text-white hover:border-[#00F0FF] bg-zinc-900/50' : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:border-[#0284C7] bg-white shadow-sm'}`}
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'EN' : 'JP'}
          </button>

          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'ライトモードに切り替え'}
            className={`w-12 h-12 rounded-[1.5rem] border flex items-center justify-center transition-all ${isDark ? 'border-zinc-800 text-zinc-400 hover:text-[#FF66B2] hover:border-[#FF66B2] bg-zinc-900/50' : 'border-slate-200 text-slate-500 hover:text-[#DB2777] hover:border-[#DB2777] bg-white shadow-sm'}`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Link
            to="/connection"
            className={`px-6 py-3 rounded-[1.5rem] font-bold text-sm transition-all flex items-center gap-2 ${isDark ? 'bg-zinc-100 text-zinc-900 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg'}`}
          >
            {language === 'en' ? 'Signal' : 'シグナル'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
