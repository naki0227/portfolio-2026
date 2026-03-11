import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-white transition-colors">
                    <div className="max-w-md w-full p-8 rounded-[2rem] border-2 bg-white dark:bg-zinc-900 border-red-200 dark:border-red-900 shadow-xl flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6">
                            <AlertTriangle className="w-10 h-10 text-red-500 flex-shrink-0" />
                        </div>
                        <h1 className="text-2xl font-black mb-4">Something went wrong.</h1>
                        <p className="text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                            We're sorry, but an unexpected error occurred. Our specialized Tanukis have been notified and are looking into it.
                        </p>
                        {this.state.error && (
                            <div className="w-full bg-slate-100 dark:bg-black/50 p-4 rounded-xl mb-8 overflow-auto text-left border border-slate-200 dark:border-zinc-800">
                                <code className="text-xs text-red-600 dark:text-red-400 font-mono break-all">
                                    {this.state.error.toString()}
                                </code>
                            </div>
                        )}
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform"
                            onClick={() => this.setState({ hasError: false, error: null })}
                        >
                            <Home className="w-4 h-4" /> Return to Home
                        </Link>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
