import Image from "next/image";

export default function Profiluser() {
    return (
        <div className="text-center flex flex-col gap-6 max-w-[650px] text-slate-100 px-4 md:px-8">
            {/* Status Badge */}
            <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/25 uppercase animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Available for Hire
                </span>
            </div>

            {/* Avatar Container */}
            <div className="w-[170px] h-[170px] rounded-full relative mx-auto p-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/20 hover:rotate-3 transition-transform duration-500">
                <div className="w-full h-full rounded-full relative overflow-hidden bg-slate-900">
                    <Image
                        src={'/profil.jpg'}
                        priority
                        sizes="100%"
                        fill
                        alt="Profil Jellan Arta"
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Title / Name */}
            <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-200">
                    Jellan Arta
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
            </div>

            {/* Description */}
            <div className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                <h2>
                    A web programmer with a strong passion for web development. Specializing in creating clean, fast, and search-optimized web applications from Lombok, Indonesia.
                </h2>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-2">
                <Membuatsosmed ikon="github" username="jellanarta" tooltip="GitHub" />
                <Membuatsosmed ikon="linkedin" username="in/jellanarta" tooltip="LinkedIn" />
                <Membuatsosmed ikon="instagram" username="jellanarta" tooltip="Instagram" />
                <Membuatsosmed ikon="facebook" username="jellanarta.id" tooltip="Facebook" />
                <Membuatsosmed ikon="tiktok" username="@jellanarta" tooltip="TikTok" />
            </div>

            {/* Download CV Button */}
            <div className="mt-4">
                <a
                    href="https://drive.google.com/file/d/1tlGe1cp9JBUNh2BLhefm_qb4s06PSUPq/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/25 border border-white/10 group whitespace-nowrap"
                >
                    <svg 
                        className="w-4.5 h-4.5 text-white transform group-hover:translate-y-0.5 transition-transform duration-200" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download CV
                </a>
            </div>
        </div>
    );
}

function Membuatsosmed({ ikon, username, tooltip }: { ikon: string, username: string, tooltip: string }) {
    return (
        <a 
            href={`https://${ikon}.com/${username}`} 
            target="_blank" 
            rel="noopener noreferrer"
            title={tooltip}
            className="group relative"
        >
            <div className="w-11 h-11 rounded-full bg-white/5 dark:bg-slate-900/50 border border-white/10 dark:border-slate-800/80 flex justify-center items-center hover:scale-115 hover:bg-white dark:hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300 shadow-md">
                <div className="w-5 h-5 relative transition-transform duration-300 group-hover:scale-105">
                    <Image
                        src={`/sosmed/${ikon}.svg`}
                        width={100}
                        height={100}
                        alt={`${ikon} icon`}
                        className="object-contain dark:invert-0 group-hover:filter group-hover:invert-0"
                    />
                </div>
            </div>
        </a>
    );
}
