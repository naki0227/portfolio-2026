import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const TIMELINE = [
    { year: '2022', title: 'Full-stack Origin', tags: ['React', 'Node.js'], desc_en: 'Started building production SaaS applications.', desc_jp: '商用SaaSアプリケーションの開発を開始。' },
    { year: '2023', title: 'Performance Architect', tags: ['Go', 'Rust', 'Kubernetes'], desc_en: 'Focused on low-latency systems and distributed architecture.', desc_jp: '低レイテンシシステムと分散アーキテクチャに注力。' },
    { year: '2024', title: 'AI Infrastructure', tags: ['PyTorch', 'Ollama', 'WebLLM'], desc_en: 'Integrating LLMs into web ecosystems.', desc_jp: 'LLMをWebエコシステムへ統合するプロジェクトに従事。' },
    { year: '2025', title: 'Strategic CTO', tags: ['Management', 'Strategy'], desc_en: 'Balancing aggressive technical innovation with business ROI.', desc_jp: '攻撃的な技術革新とビジネスROIの両立を指揮。' },
];

export function SkillTimeline() {
    const { theme } = useTheme();
    const { language } = useLanguage();

    return (
        <div className="relative py-12">
            {/* Central Line */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-500/20 to-transparent`} />

            <div className="space-y-12">
                {TIMELINE.map((item, i) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Year Bubble */}
                        <div className="relative z-10 w-12 h-12 flex-shrink-0">
                            <div className={`absolute inset-0 rounded-full blur-[10px] ${theme === 'dark' ? 'bg-[#00F0FF]/30' : 'bg-[#0284C7]/30'}`} />
                            <div className={`relative w-full h-full rounded-full border-2 flex items-center justify-center font-black text-xs ${theme === 'dark' ? 'bg-[#0D1117] border-[#00F0FF] text-[#00F0FF]' : 'bg-white border-[#0284C7] text-[#0284C7]'}`}>
                                {item.year}
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className={`flex-1 p-6 rounded-[2rem] border-2 transition-all hover:scale-[1.02] ${theme === 'dark' ? 'bg-[#110D17]/50 border-white/10 hover:border-[#00F0FF]/50' : 'bg-white border-slate-200 hover:border-[#0284C7]/50 shadow-lg'}`}>
                            <h4 className="text-xl font-black mb-2">{item.title}</h4>
                            <p className="text-sm opacity-60 mb-4 leading-relaxed">
                                {language === 'en' ? item.desc_en : item.desc_jp}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-bold ${theme === 'dark' ? 'bg-white/10 text-zinc-300' : 'bg-slate-100 text-slate-600'}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Empty space for balance */}
                        <div className="hidden md:block flex-1" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
