import Image from 'next/image'

export default function Skilldankeahlian() {
    const frontendSkills = [
        "Next.js", "React.js", "TypeScript", "JavaScript", 
        "Tailwind CSS", "State Management"
    ];

    const backendSkills = [
        "ASP.NET", "Express.js", "C#", "MySQL", "SQL Server", 
        "Supabase", "REST API Development", "AI Integration", 
        "Payment Gateway Integration", "WhatsApp Automation"
    ];

    const toolsSkills = [
        "SEO Optimization", "Keyword Research", "Content Management", 
        "Google Analytics", "Git & GitHub"
    ];

    return (
        <div className="glass-card rounded-2xl p-6 shadow-md shadow-slate-100/50 dark:shadow-none scroll-mt-28" id="skill">
            {/* Header */}
            <div className="mb-6 space-y-2">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    Expertise
                </span>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                    Skills & Expertise
                </h2>
                <div className="h-1 w-8 bg-indigo-500 rounded-full" />
            </div>

            {/* Categories Grid */}
            <div className="space-y-6">
                {/* Frontend */}
                <SkillCategory title="Frontend Development" list={frontendSkills} color="from-blue-500/10 to-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20" />

                {/* Backend */}
                <SkillCategory title="Backend & Databases" list={backendSkills} color="from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" />

                {/* Tools & SEO */}
                <SkillCategory title="Tools & SEO Specialties" list={toolsSkills} color="from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20" />
            </div>
        </div>
    )
}

function SkillCategory({ title, list, color }: { title: string, list: string[], color: string }) {
    return (
        <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {list.map((skill, index) => (
                    <div 
                        key={index} 
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r border transition-all duration-300 hover:scale-105 hover:shadow-sm ${color}`}
                    >
                        <div className="w-3.5 h-3.5 relative flex-shrink-0">
                            <Image
                                src='/verifikasi.svg'
                                width={16}
                                height={16}
                                alt="Verifikasi Icon"
                                className="object-contain dark:brightness-110"
                            />
                        </div>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
