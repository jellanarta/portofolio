import Image from "next/image"

interface Project {
    title: string;
    description: string;
    tech: string[];
    url: string;
    type: string;
}

export default function Projects() {
    const projectList: Project[] = [
        {
            title: "Hitasanpay.com",
            description: "An internal payment gateway system built by integrating Xendit, Midtrans, and NowPayments to handle company transactions securely and efficiently.",
            tech: ["Express.js", "Xendit", "Midtrans", "NowPayments", "Payment Gateway"],
            url: "hitasanpay.com",
            type: "Internal Payment Gateway"
        },
        {
            title: "Macroweb.ai",
            description: "An AI-powered website builder and agency platform developed using Next.js, offering modern, automated website generation services.",
            tech: ["Next.js", "AI Integration", "Tailwind CSS", "ChatGPT & Gemini"],
            url: "macroweb.ai",
            type: "AI Website Builder"
        },
        {
            title: "Closingan.id",
            description: "A customer relationship management (CRM) integration platform combining AI and WhatsApp automation to boost sales conversion rates.",
            tech: ["Next.js", "Express.js", "WhatsApp Automation", "AI Chatbots", "CRM"],
            url: "closingan.id",
            type: "AI CRM & WhatsApp Automation"
        }
    ];

    return (
        <section className="py-16 max-w-5xl mx-auto px-6 scroll-mt-28" id="projects">
            {/* Header */}
            <div className="text-center mb-12 space-y-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/20">
                    My Portfolio
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
                    Featured Projects
                </h2>
                <div className="h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectList.map((project, index) => (
                    <div 
                        key={index}
                        className="glass-card hover-glow rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-md shadow-slate-100/50 dark:shadow-none"
                    >
                        <div className="space-y-4">
                            {/* Project Badge Type */}
                            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-500 dark:text-indigo-400 bg-indigo-500/5 dark:bg-indigo-500/15 px-2.5 py-1 rounded-lg border border-indigo-500/10">
                                {project.type}
                            </span>

                            {/* Project Title */}
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-indigo-500 transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs text-slate-500 dark:text-slate-350 leading-relaxed font-normal">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack + Link Footer */}
                        <div className="mt-6 pt-4 border-t border-slate-55 dark:border-slate-800/80 space-y-4">
                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t, idx) => (
                                    <span 
                                        key={idx}
                                        className="text-[9px] font-semibold tracking-wide px-2 py-0.5 rounded bg-slate-100/60 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700/40"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Visit Button */}
                            <a 
                                href={`https://${project.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/btn"
                            >
                                Visit Live Website
                                <svg 
                                    className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
