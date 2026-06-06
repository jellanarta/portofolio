export default function Footer() {
    return (
        <footer className="max-w-5xl mx-auto px-6 py-10 mt-10 border-t border-slate-200/40 dark:border-slate-900/60 text-slate-500 dark:text-slate-450">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="text-xs md:text-sm font-medium tracking-wide">
                    &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-800 dark:text-slate-200">Jellan Arta</span>. All rights reserved.
                </p>
                <a 
                    href="#" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors uppercase tracking-wider group"
                >
                    Back to top
                    <svg 
                        className="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform duration-200" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </a>
            </div>
        </footer>
    )
}
