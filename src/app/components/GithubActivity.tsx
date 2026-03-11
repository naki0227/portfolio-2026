import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, GitCommit, GitPullRequest } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export function GithubActivity() {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const [activities, setActivities] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Note: For a real portfolio, use your actual username
    const username = "hw24a094";

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/events/public`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setActivities(data.slice(0, 5));
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch Github activity", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className={`p-8 rounded-[3rem] border-2 h-full flex flex-col transition-all ${theme === 'dark' ? 'bg-[#0D1117]/80 border-[#FF66B2]/30 shadow-[0_0_30px_rgba(255,102,178,0.1)]' : 'bg-white/80 border-[#DB2777]/30 shadow-xl'}`}>
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black flex items-center gap-2">
                    <Github className={theme === 'dark' ? 'text-[#FF66B2]' : 'text-[#DB2777]'} />
                    Live Pulse (GitHub)
                </h3>
                <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 flex items-center gap-1 transition-opacity">
                    View Profile <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            <div className="flex-1 space-y-4">
                {loading ? (
                    <div className="animate-pulse space-y-4">
                        {[1, 2, 3].map(i => <div key={i} className="h-12 bg-zinc-500/10 rounded-xl" />)}
                    </div>
                ) : activities.length > 0 ? (
                    activities.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-3 rounded-xl border flex items-start gap-4 transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}
                        >
                            <div className={`mt-1 p-2 rounded-lg ${theme === 'dark' ? 'bg-[#FF66B2]/20 text-[#FF66B2]' : 'bg-[#DB2777]/20 text-[#DB2777]'}`}>
                                {event.type === 'PushEvent' ? <GitCommit className="w-4 h-4" /> : <GitPullRequest className="w-4 h-4" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold truncate">{event.repo.name.split('/')[1]}</div>
                                <div className="text-[10px] opacity-60 truncate">
                                    {event.type === 'PushEvent'
                                        ? `Pushed to ${event.payload.ref.replace('refs/heads/', '')}`
                                        : `Active on ${event.type}`}
                                </div>
                            </div>
                            <div className="text-[9px] opacity-40 whitespace-nowrap pt-1">
                                {new Date(event.created_at).toLocaleDateString()}
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="text-sm opacity-40 italic py-8 text-center">
                        Recent activity sleeping...
                    </div>
                )}
            </div>
        </div>
    );
}
