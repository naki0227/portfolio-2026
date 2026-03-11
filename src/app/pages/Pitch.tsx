import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Timer, Rocket, Target, Code2, Users, Trophy, ChevronRight, ChevronLeft,
    Maximize2, Minimize2, Download, ExternalLink, Presentation
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ResumeLeadForm } from '../components/ResumeLeadForm';
import { SEO } from '../components/SEO';

type PitchTime = '1min' | '3min' | '5min';

interface Slide {
    id: string;
    title: Record<'en' | 'ja', string>;
    content: Record<'en' | 'ja', React.ReactNode>;
    minRequired: PitchTime;
}

export function Pitch() {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const [pitchTime, setPitchTime] = useState<PitchTime>('3min');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const isDark = theme === 'dark';

    const slides: Slide[] = [
        {
            id: 'intro',
            title: { en: 'Executive Summary', ja: 'エグゼクティブ・サマリー' },
            minRequired: '1min',
            content: {
                en: (
                    <div className="space-y-6">
                        <h4 className="text-3xl font-black text-[#00F0FF]">Elite Full-stack Engineer</h4>
                        <p className="text-xl opacity-80 leading-relaxed">
                            Specialized in high-concurrency systems, AI integration, and user-centric frontend experiences.
                            Bridging the gap between business ROI and technical excellence.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] text-sm font-bold">CTO Mindset</span>
                            <span className="px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-sm font-bold">Architect</span>
                        </div>
                    </div>
                ),
                ja: (
                    <div className="space-y-6">
                        <h4 className="text-3xl font-black text-[#00F0FF]">少数精鋭のフルスタック・エンジニア</h4>
                        <p className="text-xl opacity-80 leading-relaxed">
                            高並列処理システム、AI統合、そしてユーザー中心のフロントエンド体験を専門としています。
                            事業の投資対効果（ROI）と技術的卓越性の架け橋となります。
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] text-sm font-bold">CTO思考</span>
                            <span className="px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-sm font-bold">設計・アーキテクチャ</span>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'stack',
            title: { en: 'Core Tech Stack', ja: '主要技術スタック' },
            minRequired: '1min',
            content: {
                en: (
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h5 className="font-bold flex items-center gap-2"><Code2 className="text-[#00F0FF]" /> Backend & Infra</h5>
                            <ul className="space-y-2 opacity-70">
                                <li>• Go (Concurrency/Parallelism)</li>
                                <li>• Rust (Performance/Safety)</li>
                                <li>• Distributed Systems</li>
                            </ul>
                        </div>
                        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h5 className="font-bold flex items-center gap-2"><Rocket className="text-pink-500" /> AI & Frontend</h5>
                            <ul className="space-y-2 opacity-70">
                                <li>• TypeScript / React / Next.js</li>
                                <li>• Local LLM / WebGPU Integration</li>
                                <li>• Framer Motion (UX Design)</li>
                            </ul>
                        </div>
                    </div>
                ),
                ja: (
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h5 className="font-bold flex items-center gap-2"><Code2 className="text-[#00F0FF]" /> サーバーサイド / インフラ</h5>
                            <ul className="space-y-2 opacity-80">
                                <li>• Go (並列処理、スケーラビリティ)</li>
                                <li>• Rust (パフォーマンス、型安全)</li>
                                <li>• 分散システム構築</li>
                            </ul>
                        </div>
                        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h5 className="font-bold flex items-center gap-2"><Rocket className="text-pink-500" /> AI & フロントエンド</h5>
                            <ul className="space-y-2 opacity-80">
                                <li>• TypeScript / Next.js</li>
                                <li>• ローカルLLM / WebGPU 統合</li>
                                <li>• Framer Motion (高度なUX)</li>
                            </ul>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'projects',
            title: { en: 'Signature Projects', ja: '主要な実績' },
            minRequired: '3min',
            content: {
                en: (
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#00F0FF] pl-6 py-4">
                            <h5 className="text-xl font-bold">AI Interview Copilot</h5>
                            <p className="opacity-70">Real-time analysis of interview audio using Gemini AI, providing live feedback to users.</p>
                        </div>
                        <div className="border-l-4 border-pink-500 pl-6 py-4">
                            <h5 className="text-xl font-bold">Repo to Docs AI</h5>
                            <p className="opacity-70">Converting complex codebases into structured documentation using LLMs.</p>
                        </div>
                    </div>
                ),
                ja: (
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#00F0FF] pl-6 py-4">
                            <h5 className="text-xl font-bold">AI Interview Copilot</h5>
                            <p className="opacity-80">Gemini AIを活用した面接音声のリアルタイム分析システム。ユーザーへの即時フィードバックを実現。</p>
                        </div>
                        <div className="border-l-4 border-pink-500 pl-6 py-4">
                            <h5 className="text-xl font-bold">Repo to Docs AI</h5>
                            <p className="opacity-80">大規模なソースコード群から、LLMを用いて構造化されたドキュメントを自動生成するシステム。</p>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'philosophy',
            title: { en: 'Engineering Philosophy', ja: 'エンジニアリング哲学' },
            minRequired: '5min',
            content: {
                en: (
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-start">
                            <div className="bg-[#00F0FF]/20 p-3 rounded-xl text-[#00F0FF]"><Target /></div>
                            <div>
                                <h5 className="font-bold">Business-First Decision Making</h5>
                                <p className="text-sm opacity-60">Optimizing for the balance of speed-to-market and long-term maintainability.</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-start">
                            <div className="bg-pink-500/20 p-3 rounded-xl text-pink-500"><Users /></div>
                            <div>
                                <h5 className="font-bold">User Experience as a Metric</h5>
                                <p className="text-sm opacity-60">Highly interactive interfaces like this portfolio as proof of frontend obsession.</p>
                            </div>
                        </div>
                    </div>
                ),
                ja: (
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-start">
                            <div className="bg-[#00F0FF]/20 p-3 rounded-xl text-[#00F0FF]"><Target /></div>
                            <div>
                                <h5 className="font-bold">事業優先の意思決定 (ROI Focused)</h5>
                                <p className="text-sm opacity-80">市場へのスピードと、長期的な保守性のバランスを常に最適化します。</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-start">
                            <div className="bg-pink-500/20 p-3 rounded-xl text-pink-500"><Users /></div>
                            <div>
                                <h5 className="font-bold">指標としてのユーザー体験 (UX Driven)</h5>
                                <p className="text-sm opacity-80">このポートフォリオに見られる高度なインタラクションは、私の「使い心地」への拘りの証明です。</p>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    ];

    const filteredSlides = slides.filter(slide => {
        if (pitchTime === '1min') return slide.minRequired === '1min';
        if (pitchTime === '3min') return slide.minRequired !== '5min';
        return true;
    });

    const nextSlide = () => setCurrentSlide(prev => (prev + 1) % filteredSlides.length);
    const prevSlide = () => setCurrentSlide(prev => (prev - 1 + filteredSlides.length) % filteredSlides.length);

    useEffect(() => {
        setCurrentSlide(0);
    }, [pitchTime]);

    return (
        <>
            <SEO title="Pitch Deck" path="/pitch" description="Variable-length pitch presentation of my engineering skills." />

            <div className={`min-h-screen py-12 px-6 ${isFullscreen ? 'fixed inset-0 z-[100] bg-[#0D1117]' : 'max-w-6xl mx-auto'}`}>

                {/* Header Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 relative z-10">
                    <div>
                        <h2 className="text-4xl font-black flex items-center gap-3">
                            <Presentation className="text-[#00F0FF]" /> Pitch Deck
                        </h2>
                        <p className="opacity-60">{language === 'en' ? 'Adaptable presentation based on your time.' : '面接時間に合わせて内容が最適化されます。'}</p>
                    </div>

                    <div className="flex bg-white/5 p-1.5 rounded-[2rem] border border-white/10 backdrop-blur-xl">
                        {(['1min', '3min', '5min'] as PitchTime[]).map((t) => (
                            <button
                                key={t}
                                onClick={() => setPitchTime(t)}
                                className={`px-6 py-2 rounded-[1.5rem] text-sm font-bold transition-all ${pitchTime === t ? 'bg-[#00F0FF] text-black shadow-lg shadow-[#00F0FF]/30' : 'hover:bg-white/5 text-zinc-400'}`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Slide Viewer */}
                <div className={`relative ${isFullscreen ? 'h-[70vh]' : 'h-[500px] mb-8'}`}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filteredSlides[currentSlide].id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className={`w-full h-full p-12 rounded-[3.5rem] border-2 flex flex-col justify-center transition-colors ${isDark ? 'bg-black/40 border-[#00F0FF]/20 shadow-[0_0_80px_rgba(0,240,255,0.05)]' : 'bg-white border-slate-200 shadow-2xl shadow-slate-200'}`}
                        >
                            <div className="mb-4 text-sm font-bold tracking-widest text-[#00F0FF] uppercase opacity-60">
                                Slide {currentSlide + 1} / {filteredSlides.length} — {pitchTime} Mode
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black mb-8">{filteredSlides[currentSlide].title[language]}</h3>
                            <div>
                                {filteredSlides[currentSlide].content[language]}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-8">
                        <button onClick={prevSlide} className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${isDark ? 'border-[#00F0FF]/30 hover:bg-[#00F0FF]/10 text-[#00F0FF]' : 'border-slate-200 hover:bg-slate-50 text-slate-900'}`}><ChevronLeft /></button>
                        <button onClick={nextSlide} className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${isDark ? 'border-[#00F0FF]/30 hover:bg-[#00F0FF]/10 text-[#00F0FF]' : 'border-slate-200 hover:bg-slate-50 text-slate-900'}`}><ChevronRight /></button>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className={`p-8 rounded-[2rem] border-2 flex items-center justify-between transition-all ${isDark ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                        <div>
                            <h4 className="font-bold flex items-center gap-2"><Trophy className="text-[#00F0FF]" /> Need the detail?</h4>
                            <p className="text-sm opacity-60">Download the full professional resume.</p>
                        </div>
                        <button
                            onClick={() => setShowLeadForm(true)}
                            className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${isDark ? 'bg-[#00F0FF] text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]' : 'bg-[#0284C7] text-white hover:bg-[#026aa3]'}`}
                        >
                            <Download className="w-4 h-4" /> Download PDF
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsFullscreen(!isFullscreen)}
                            className={`p-4 rounded-xl border-2 flex items-center gap-2 transition-all ${isDark ? 'border-white/10 hover:bg-white/5 text-zinc-400' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}
                        >
                            {isFullscreen ? <Minimize2 /> : <Maximize2 />} {language === 'en' ? 'Presentation Mode' : 'プレゼンモード'}
                        </button>
                        <a
                            href="https://github.com"
                            target="_blank"
                            className={`p-4 rounded-xl border-2 flex items-center gap-2 transition-all ${isDark ? 'border-white/10 hover:bg-white/5 text-zinc-400' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}
                        >
                            <ExternalLink /> GitHub
                        </a>
                    </div>
                </div>

                {/* Lead Form Modal */}
                <AnimatePresence>
                    {showLeadForm && (
                        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowLeadForm(false)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                className="relative w-full max-w-lg"
                            >
                                <ResumeLeadForm onSuccess={() => {
                                    // ダウンロード実行（擬似）
                                    const link = document.createElement('a');
                                    link.href = '#'; // ここにPDFのURL
                                    link.download = 'Resume_Enludus.pdf';
                                    // link.click();
                                    setTimeout(() => setShowLeadForm(false), 2000);
                                }} />
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
