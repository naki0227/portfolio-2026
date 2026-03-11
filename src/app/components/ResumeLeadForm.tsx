import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Download, Send, CheckCircle2, Loader2, FileText, Lock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

interface ResumeLeadFormProps {
    onSuccess: () => void;
}

export function ResumeLeadForm({ onSuccess }: ResumeLeadFormProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const { theme } = useTheme();
    const { language } = useLanguage();
    const isDark = theme === 'dark';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('sending');

        try {
            // 本来は EmailJS 等を呼び出しますが、まずはUIと環境変数の準備を優先します。
            // 送信先: contact@enludus.com
            // TODO: emailjs.send(SERVICE_ID, TEMPLATE_ID, { to_email: email, ... })

            // モックとしての遅延処理
            await new Promise(resolve => setTimeout(resolve, 1500));

            setStatus('success');
            setTimeout(() => {
                onSuccess();
            }, 1000);
        } catch (error) {
            console.error('Failed to capture lead:', error);
            setStatus('error');
        }
    };

    return (
        <div className={`p-8 rounded-[2rem] border-2 transition-all ${isDark ? 'bg-[#0D1117] border-[#00F0FF]/30 shadow-[0_0_50px_rgba(0,240,255,0.1)]' : 'bg-white border-slate-200 shadow-xl'}`}>
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDark ? 'bg-[#00F0FF]/10 text-[#00F0FF]' : 'bg-[#0284C7]/10 text-[#0284C7]'}`}>
                    <Lock className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-black">
                        {language === 'en' ? 'Unlock Full Resume' : '履歴書をアンロック'}
                    </h3>
                    <p className="text-sm opacity-60">
                        {language === 'en' ? 'Enter your email to receive the PDF' : 'PDF版の送付先を入力してください'}
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40`} />
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'sending' || status === 'success'}
                        placeholder="hiring@company.com"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 outline-none transition-all font-medium ${isDark ? 'bg-black/50 border-white/10 focus:border-[#00F0FF] text-white' : 'bg-slate-50 border-slate-200 focus:border-[#0284C7] text-slate-900'}`}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${status === 'success'
                            ? 'bg-green-500 text-white cursor-default'
                            : isDark
                                ? 'bg-[#00F0FF] text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] active:scale-95'
                                : 'bg-[#0284C7] text-white hover:bg-[#026aa3] active:scale-95'
                        }`}
                >
                    {status === 'sending' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === 'success' ? (
                        <CheckCircle2 className="w-5 h-5" />
                    ) : (
                        <Send className="w-5 h-5" />
                    )}
                    <span>
                        {status === 'sending' ? (language === 'en' ? 'Sending...' : '送信中...') :
                            status === 'success' ? (language === 'en' ? 'Link Sent!' : '送信完了！') :
                                (language === 'en' ? 'Send Link to Email' : 'メアドに送る')}
                    </span>
                </button>
            </form>

            <p className="mt-4 text-[10px] opacity-40 text-center uppercase tracking-widest font-bold">
                Secure delivery from contact@enludus.com
            </p>
        </div>
    );
}
