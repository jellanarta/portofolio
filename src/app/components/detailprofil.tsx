import Image from "next/image";

export default function Detailprofil() {
    return (
        <div className="glass-card rounded-2xl p-6 shadow-md shadow-slate-100/50 dark:shadow-none scroll-mt-28" id="profil">
            {/* Header */}
            <div className="mb-6 space-y-2">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    About Me
                </span>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                    Personal Profile
                </h2>
                <div className="h-1 w-8 bg-indigo-500 rounded-full" />
            </div>

            <div>
                {/* Profile Picture */}
                <div className="w-full max-w-[500px] h-[300px] rounded-xl overflow-hidden relative shadow-sm border border-slate-100 dark:border-slate-800">
                    <Image
                        src={'/jellanarta.jpg'}
                        sizes="100%"
                        fill
                        priority
                        className="object-cover"
                        alt='Profil Jellan Arta'
                    />
                </div>

                {/* About Description */}
                <div className="mt-6 space-y-6">
                    <div>
                        <h3 className="text-sm uppercase font-bold text-slate-850 dark:text-slate-100 tracking-wider">
                            Jellan Arta
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-350 leading-relaxed font-normal mt-2.5">
                            A passionate Web Developer from Central Lombok, West Nusa Tenggara. Committed to continually expanding my engineering skill set and delivering high-quality, SEO-optimized web systems.
                        </p>
                    </div>

                    {/* Contact Details List */}
                    <div className="grid grid-cols-1 gap-4 pt-2">
                        <Lebihlengkap ikon="pendidikan" teks="SMK Negeri 1 Praya (Pariwisata)" />
                        <Lebihlengkap ikon="email" teks="jellanarta@gmail.com" />
                        <Lebihlengkap ikon="nohp" teks="+6285941304719" />
                        <Lebihlengkap ikon="website" teks="arta.eu.org" />
                        <Lebihlengkap ikon="github" teks="jellanarta" />
                        <Lebihlengkap ikon="lokasi" teks="Praya, Lombok Tengah, Nusa Tenggara Barat, Indonesia" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Lebihlengkap({ ikon, teks }: { ikon: string, teks: string }) {
    let href = "";
    if (ikon === "email") href = `mailto:${teks}`;
    else if (ikon === "nohp") href = `https://wa.me/${teks.replace(/[^0-9]/g, '')}`;
    else if (ikon === "website") href = `https://${teks}`;
    else if (ikon === "github") href = `https://github.com/${teks}`;

    const isLink = href !== "";

    const textElement = (
        <div className="text-xs md:text-sm text-slate-650 dark:text-slate-300 font-medium group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors break-all">
            {teks}
        </div>
    );

    return (
        <div className="grid grid-cols-[auto,1fr] border-b border-dashed border-slate-100 dark:border-slate-800/80 pb-3 gap-4 items-center group">
            {/* Icon Sphere */}
            <div className="w-8 h-8 rounded-lg bg-indigo-500/5 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-500/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-4 h-4 relative">
                    <Image
                        src={`/${ikon}.svg`}
                        width={100}
                        height={100}
                        alt={ikon}
                        className="object-contain dark:brightness-110"
                    />
                </div>
            </div>
            
            {/* Info Text / Link */}
            {isLink ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
                    {textElement}
                </a>
            ) : (
                <div className="w-full">
                    {textElement}
                </div>
            )}
        </div>
    );
}
