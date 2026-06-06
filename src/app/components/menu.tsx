"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Menu() {
    const [darkmode, setDarkmode] = useState(false);
    const [openmenu, setOpenmenu] = useState(false);

    useEffect(() => {
        const element = document.documentElement;
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === "dark") {
            setDarkmode(true);
            element.classList.add('dark');
            element.classList.remove('light');
        } else {
            setDarkmode(false);
            element.classList.add('light');
            element.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const element = document.documentElement;
        if (darkmode) {
            setDarkmode(false);
            localStorage.setItem('theme', 'light');
            element.classList.add('light');
            element.classList.remove('dark');
        } else {
            setDarkmode(true);
            localStorage.setItem('theme', 'dark');
            element.classList.add('dark');
            element.classList.remove('light');
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 md:top-4 w-full px-0 md:px-4">
                <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/70 dark:bg-slate-900/75 border-b border-slate-200/80 dark:border-slate-800/80 md:border md:rounded-full shadow-lg md:shadow-indigo-500/5 transition-all duration-300">
                    <div className="h-16 md:h-20 flex justify-between items-center px-6">
                        {/* Logo / Title */}
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="w-9 h-9 relative rounded-xl overflow-hidden bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full bg-white dark:bg-slate-950 flex items-center justify-center rounded-[10px]">
                                    <Image
                                        src="/logo.png"
                                        width={40}
                                        height={40}
                                        alt="Jellan Arta Logo"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="text-sm md:text-base font-extrabold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-500">
                                    Jellan Arta
                                </div>
                                <div className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium -mt-0.5">
                                    Web Developer
                                </div>
                            </div>
                        </a>

                        {/* Desktop Links */}
                        <nav className="hidden md:flex items-center gap-6">
                            <ComponentsLink id="services" teks="Services" />
                            <ComponentsLink id="profil" teks="Profile" />
                            <ComponentsLink id="skill" teks="Skills" />
                            <ComponentsLink id="experience" teks="Experience" />
                            <ComponentsLink id="projects" teks="Projects" />
                            <ComponentsLink id="maps" teks="Location" />
                        </nav>

                        {/* Right Buttons: Theme Toggle & Mobile Menu */}
                        <div className="flex items-center gap-4">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleDarkMode}
                                aria-label="Toggle Theme"
                                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 shadow-sm"
                            >
                                {darkmode ? (
                                    <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setOpenmenu(true)}
                                aria-label="Open Menu"
                                className="flex md:hidden w-10 h-10 rounded-full items-center justify-center border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 shadow-sm"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Menu */}
            {openmenu && (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity" 
                        onClick={() => setOpenmenu(false)}
                    />
                    
                    {/* Drawer Content */}
                    <div className="relative w-full max-w-xs h-full bg-white dark:bg-slate-900 p-6 shadow-2xl flex flex-col justify-between border-l border-slate-100 dark:border-slate-800 transition-transform duration-300 animate-slide-in">
                        <div>
                            {/* Drawer Header */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 relative rounded-lg overflow-hidden bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5">
                                        <div className="w-full h-full bg-white dark:bg-slate-950 flex items-center justify-center rounded-[6px]">
                                            <Image
                                                src="/logo.png"
                                                width={28}
                                                height={28}
                                                alt="Logo"
                                            />
                                        </div>
                                    </div>
                                    <span className="font-extrabold text-sm uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                                        Jellan Arta
                                    </span>
                                </div>
                                <button
                                    onClick={() => setOpenmenu(false)}
                                    className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <nav className="flex flex-col gap-4">
                                <MobileComponentsLink id="services" teks="Services" setOpen={setOpenmenu} />
                                <MobileComponentsLink id="profil" teks="Profile" setOpen={setOpenmenu} />
                                <MobileComponentsLink id="skill" teks="Skills" setOpen={setOpenmenu} />
                                <MobileComponentsLink id="experience-mobile" teks="Experience" setOpen={setOpenmenu} />
                                <MobileComponentsLink id="projects" teks="Projects" setOpen={setOpenmenu} />
                                <MobileComponentsLink id="maps" teks="Location" setOpen={setOpenmenu} />
                            </nav>
                        </div>
                        
                        <div className="text-center text-xs text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-4">
                            © {new Date().getFullYear()} Jellan Arta
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function ComponentsLink({ teks, id }: { teks: string, id: string }) {
    return (
        <a 
            href={`#${id}`} 
            className="uppercase text-xs tracking-wider font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 nav-link-underline"
        >
            {teks}
        </a>
    );
}

function MobileComponentsLink({ teks, id, setOpen }: { teks: string, id: string, setOpen: (open: boolean) => void }) {
    return (
        <a 
            href={`#${id}`} 
            onClick={() => setOpen(false)}
            className="block py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
        >
            {teks}
        </a>
    );
}
