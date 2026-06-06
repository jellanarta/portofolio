import Image from "next/image"

export default function Layanan() {
    return (
        <section className="py-20 max-w-5xl mx-auto px-6 scroll-mt-28" id="services">
            {/* Section Header */}
            <div className="text-center mb-12 space-y-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/20">
                    What I Offer
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
                    My Premium Services
                </h2>
                <div className="h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Kotakkotak 
                    ikon="layanancoding" 
                    judul="Website Development" 
                    deskripsi="Full stack JavaScript/NodeJS website development using React.js and Next.js for high-fidelity frontends, and Express.js / Nest.js for reliable backends with SQL/NoSQL databases." 
                />
                <Kotakkotak 
                    ikon="layanantulisartikel" 
                    judul="Article Writing" 
                    deskripsi="SEO-friendly article writing services across tech trends, travel, and lifestyle, tailored to engage readers and establish authority in your specific business niche." 
                />
                <Kotakkotak 
                    ikon="layananseo" 
                    judul="Website SEO" 
                    deskripsi="Advanced search engine optimization to boost your online visibility. Audit, keyword optimization, and speed tuning to rank your business page on Google's first page." 
                />
            </div>
        </section>
    )
}

function Kotakkotak({ ikon, judul, deskripsi }: { ikon: string, judul: string, deskripsi: string }) {
    return (
        <div className="glass-card hover-glow rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-md shadow-slate-100/50 dark:shadow-none">
            <div className="text-center flex flex-col items-center">
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-all duration-300 mb-5 shadow-sm">
                    <div className="w-7 h-7 relative group-hover:invert dark:group-hover:invert-0 group-hover:brightness-200 transition-all duration-300">
                        <Image
                            src={`/${ikon}.svg`}
                            width={100}
                            height={100}
                            alt={judul}
                            className="object-contain dark:brightness-110"
                        />
                    </div>
                </div>
                
                {/* Title */}
                <h3 className="text-base font-bold text-slate-800 dark:text-white mb-3 tracking-wide">
                    {judul}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-slate-500 dark:text-slate-350 leading-relaxed font-normal">
                    {deskripsi}
                </p>
            </div>
        </div>
    )
}
