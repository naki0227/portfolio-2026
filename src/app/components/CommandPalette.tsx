import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { Search, Home, FolderOpen, User, Gamepad2, Phone, Sun, Moon, Globe } from "lucide-react";
import { useNavigate } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const isDark = theme === 'dark';

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4 backdrop-blur-sm bg-black/40">
      <div className="fixed inset-0" onClick={() => setOpen(false)} />
      <div className={`relative w-full max-w-2xl border-2 rounded-[2.5rem] shadow-2xl overflow-hidden cmdk-dialog transition-colors duration-300 ${isDark ? 'bg-[#0D1117] border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]' : 'bg-white border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)]'}`}>
        <Command className="flex flex-col w-full h-full">
          <div className={`flex items-center border-b px-6 ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
            <Search className={`w-6 h-6 mr-4 ${isDark ? 'text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'text-[#0284C7]'}`} />
            <Command.Input 
              placeholder="Where do you want to shapeshift?..." 
              className={`flex-1 bg-transparent border-none outline-none py-6 text-xl focus:ring-0 font-bold ${isDark ? 'text-white placeholder-zinc-500' : 'text-slate-900 placeholder-slate-400'}`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              autoFocus
            />
          </div>
          <Command.List className="max-h-[400px] overflow-y-auto p-4">
            <Command.Empty className={`p-6 text-center text-lg ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>No results found. (Only magic allowed)</Command.Empty>
            
            <Command.Group heading="Pages" className={`px-2 py-3 text-sm font-bold [&_[cmdk-group-heading]]:mb-3 uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
              <Command.Item 
                onSelect={() => runCommand(() => navigate("/"))}
                className={`flex items-center px-4 py-4 rounded-2xl cursor-pointer transition-all duration-200 mt-1 font-medium ${isDark ? 'aria-selected:bg-[#00F0FF]/10 aria-selected:text-[#00F0FF] text-zinc-300' : 'aria-selected:bg-slate-100 aria-selected:text-[#0284C7] text-slate-600'}`}
              >
                <Home className="w-5 h-5 mr-4" /> Home (Command Center)
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => navigate("/projects"))}
                className={`flex items-center px-4 py-4 rounded-2xl cursor-pointer transition-all duration-200 mt-1 font-medium ${isDark ? 'aria-selected:bg-[#FF66B2]/10 aria-selected:text-[#FF66B2] text-zinc-300' : 'aria-selected:bg-slate-100 aria-selected:text-[#DB2777] text-slate-600'}`}
              >
                <FolderOpen className="w-5 h-5 mr-4" /> Projects (The Menagerie)
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => navigate("/about"))}
                className={`flex items-center px-4 py-4 rounded-2xl cursor-pointer transition-all duration-200 mt-1 font-medium ${isDark ? 'aria-selected:bg-yellow-500/10 aria-selected:text-yellow-400 text-zinc-300' : 'aria-selected:bg-slate-100 aria-selected:text-yellow-600 text-slate-600'}`}
              >
                <User className="w-5 h-5 mr-4" /> About (The Forge)
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => navigate("/playground"))}
                className={`flex items-center px-4 py-4 rounded-2xl cursor-pointer transition-all duration-200 mt-1 font-medium ${isDark ? 'aria-selected:bg-green-500/10 aria-selected:text-green-400 text-zinc-300' : 'aria-selected:bg-slate-100 aria-selected:text-green-600 text-slate-600'}`}
              >
                <Gamepad2 className="w-5 h-5 mr-4" /> Playground (The Arcade)
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => navigate("/connection"))}
                className={`flex items-center px-4 py-4 rounded-2xl cursor-pointer transition-all duration-200 mt-1 font-medium ${isDark ? 'aria-selected:bg-purple-500/10 aria-selected:text-purple-400 text-zinc-300' : 'aria-selected:bg-slate-100 aria-selected:text-purple-600 text-slate-600'}`}
              >
                <Phone className="w-5 h-5 mr-4" /> Connection (The Signal)
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading={language === 'en' ? "Actions" : "アクション"} className={`px-2 py-3 text-sm font-bold mt-2 border-t [&_[cmdk-group-heading]]:mb-3 uppercase tracking-widest ${isDark ? 'text-zinc-500 border-white/10' : 'text-slate-400 border-slate-100'}`}>
              <Command.Item 
                onSelect={() => runCommand(() => toggleTheme())}
                className={`flex items-center px-4 py-4 rounded-2xl cursor-pointer transition-all duration-200 mt-1 font-medium ${isDark ? 'aria-selected:bg-white/10 aria-selected:text-white text-zinc-300' : 'aria-selected:bg-slate-100 aria-selected:text-slate-900 text-slate-600'}`}
              >
                {isDark ? <Sun className="w-5 h-5 mr-4" /> : <Moon className="w-5 h-5 mr-4" />}
                {language === 'en' ? `Toggle ${isDark ? 'Light' : 'Dark'} Mode` : `${isDark ? 'ライト' : 'ダーク'}モードに切り替え`}
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => toggleLanguage())}
                className={`flex items-center px-4 py-4 rounded-2xl cursor-pointer transition-all duration-200 mt-1 font-medium ${isDark ? 'aria-selected:bg-white/10 aria-selected:text-white text-zinc-300' : 'aria-selected:bg-slate-100 aria-selected:text-slate-900 text-slate-600'}`}
              >
                <Globe className="w-5 h-5 mr-4" />
                {language === 'en' ? 'Switch to Japanese' : '英語に切り替え'}
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
