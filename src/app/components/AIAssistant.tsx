import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Loader2, Monitor, Cpu } from 'lucide-react';
import { CreateWebWorkerMLCEngine, MLCEngineInterface } from '@mlc-ai/web-llm';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { CuteTanuki } from './CuteTanuki';

export function AIAssistant() {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
    const [input, setInput] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const engineRef = useRef<MLCEngineInterface | null>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const initEngine = async () => {
        if (engineRef.current) return;

        try {
            setProgress("Initializing WebGPU...");
            // For portfolio showcase, we use a small model
            const selectedModel = "Llama-3-8B-Instruct-v0.1-q4f16_1-MLC";

            engineRef.current = await CreateWebWorkerMLCEngine(
                new Worker(new URL('../workers/llm.worker.ts', import.meta.url), { type: 'module' }),
                selectedModel,
                {
                    initProgressCallback: (report) => setProgress(report.text)
                }
            );

            setIsLoaded(true);
            setMessages([{ role: 'assistant', content: language === 'en' ? "Hi! I'm Tanuki-AI. I run entirely on your GPU. How can I help you today?" : "こんにちは！タヌキAIです。あなたのブラウザ（GPU）上で直接動いています。何かお手伝いしましょうか？" }]);
        } catch (e) {
            console.error("WebLLM initialization failed", e);
            setProgress("WebGPU not supported / Load failed.");
        }
    };

    const handleSend = async () => {
        if (!input.trim() || !engineRef.current || isTyping) return;

        const userMsg = { role: 'user' as const, content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            const chunks = await engineRef.current.chat.completions.create({
                messages: [...messages, userMsg],
                stream: true
            });

            let fullResponse = "";
            setMessages(prev => [...prev, { role: 'assistant', content: "" }]);

            for await (const chunk of chunks) {
                const payload = chunk.choices[0]?.delta?.content || "";
                fullResponse += payload;
                setMessages(prev => {
                    const newMsgs = [...prev];
                    newMsgs[newMsgs.length - 1].content = fullResponse;
                    return newMsgs;
                });
            }
        } catch (e) {
            console.error("Chat error", e);
        } finally {
            setIsTyping(false);
        }
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    return (
        <div className="fixed bottom-24 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] rounded-[2.5rem] border-2 shadow-2xl overflow-hidden flex flex-col ${theme === 'dark' ? 'bg-[#0D1117]/95 border-[#00F0FF]/30 backdrop-blur-xl' : 'bg-white/95 border-[#0284C7]/30 backdrop-blur-xl'}`}
                    >
                        {/* Header */}
                        <div className={`p-6 border-b flex items-center justify-between ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'bg-[#0284C7]/20 text-[#0284C7]'}`}>
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-black text-sm">Tanuki-AI Assistant</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className={`w-2 h-2 rounded-full ${isLoaded ? 'bg-green-500 animate-pulse' : 'bg-zinc-500'}`} />
                                        <span className="text-[10px] opacity-60 font-mono">{isLoaded ? "Running on Local GPU" : "Ready to Load"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                            {!isLoaded ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <Monitor className={`w-12 h-12 opacity-20 ${theme === 'dark' ? 'text-[#00F0FF]' : 'text-[#0284C7]'}`} />
                                    <p className="text-sm opacity-60 max-w-[200px]">
                                        {language === 'en' ? "This AI runs entirely in your browser using WebGPU. No data leaves your device." : "このAIはWebGPUを使用し、ブラウザ内で完結して動作します。データが外に出ることはありません。"}
                                    </p>
                                    <button
                                        onClick={initEngine}
                                        className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg ${theme === 'dark' ? 'bg-[#00F0FF] text-[#0D1117] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]' : 'bg-[#0284C7] text-white hover:bg-[#0369A1]'}`}
                                    >
                                        Load AI Model
                                    </button>
                                    {progress && <p className="text-[9px] font-mono opacity-40 animate-pulse">{progress}</p>}
                                </div>
                            ) : (
                                messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'user'
                                            ? theme === 'dark' ? 'bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20' : 'bg-[#0284C7] text-white'
                                            : theme === 'dark' ? 'bg-white/5 text-zinc-300 border border-white/10' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}
                                        >
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))
                            )}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className={`p-4 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'}`}>
                                        <Loader2 className="w-4 h-4 animate-spin opacity-40" />
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input Area */}
                        {isLoaded && (
                            <div className={`p-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder={language === 'en' ? "Ask anything..." : "質問を入力してください..."}
                                        className={`w-full py-3 px-5 pr-12 rounded-2xl outline-none text-sm transition-all ${theme === 'dark' ? 'bg-white/5 border border-white/10 focus:border-[#00F0FF]/50' : 'bg-slate-50 border border-slate-200 focus:border-[#0284C7]/50'}`}
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={isTyping}
                                        className={`absolute right-2 top-2 p-2 rounded-xl transition-all ${theme === 'dark' ? 'hover:bg-[#00F0FF]/10 text-[#00F0FF]' : 'hover:bg-[#0284C7]/10 text-[#0284C7]'}`}
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-2 transition-all ${theme === 'dark' ? 'bg-[#0D1117] border-[#00F0FF] text-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.3)]' : 'bg-white border-[#0284C7] text-[#0284C7] shadow-xl'}`}
            >
                <div className="relative">
                    <CuteTanuki animal="default" className="w-10 h-10" />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-1 -right-1"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                </div>
            </motion.button>
        </div>
    );
}
