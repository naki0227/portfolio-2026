import { motion } from "motion/react";
import { FileQuestion, AlertCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

export function NotFound() {
    const { language } = useLanguage();

    return (
        <div className="py-24 flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="relative"
            >
                <div className="text-[12rem] md:text-[16rem] font-black leading-none bg-clip-text text-transparent bg-gradient-to-br from-[#0284C7] to-[#DB2777] dark:from-[#00F0FF] dark:to-[#FF66B2] opacity-20 select-none">
                    404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col items-center justify-center shadow-2xl">
                        <motion.div
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        >
                            <FileQuestion className="w-12 h-12 text-slate-400 dark:text-zinc-500 mb-2" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="mt-12 space-y-6 max-w-lg z-10 relative">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                    {language === 'en' ? 'Signal Lost' : 'シグナル途絶'}
                </h1>
                <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {language === 'en'
                        ? "The page you are looking for has been moved to another dimension."
                        : "お探しのページは別次元に移動したか、現在アクセスできません。"}
                </p>

                <div className="pt-8 pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-8 py-4 rounded-full font-bold text-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 active:scale-95 transition-transform flex justify-center items-center"
                    >
                        {language === 'en' ? 'Return to Base' : 'ホームへ帰還'}
                    </Link>
                </div>
            </div>

            {/* Decorative floating elements */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-32 left-[10%] opacity-20 pointer-events-none"
            >
                <AlertCircle className="w-24 h-24 text-red-500" />
            </motion.div>
        </div>
    );
}
