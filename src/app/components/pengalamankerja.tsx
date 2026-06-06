import { pengalamankerja, WorkExperience } from "@/lib/pengalamankerja";
import Image from "next/image";

export default function Pengalamankerja() {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-md shadow-slate-100/50 dark:shadow-none">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/20">
          History
        </span>
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
          Work Experience
        </h2>
        <div className="h-1 w-8 bg-indigo-500 rounded-full" />
      </div>

      {/* Timeline List */}
      <div className="relative ml-3 pl-6 space-y-10">
        {/* Timeline Line */}
        <div className="absolute left-[9px] top-[15px] bottom-[15px] border-l border-indigo-100 dark:border-slate-800" />
        {pengalamankerja.map((data: WorkExperience, index: number) => (
          <Cardpengalaman data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

function Cardpengalaman({ data }: { data: WorkExperience }) {
  return (
    <div className="relative group">
      {/* Timeline Bullet Anchor */}
      <span className="absolute -left-[19px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-950">
        <span className="h-2 w-2 rounded-full bg-indigo-500 group-hover:scale-130 transition-transform duration-300 ring-4 ring-indigo-500/15 group-hover:ring-indigo-500/35" />
      </span>

      <div>
        {/* Job Title */}
        <h3 className="text-sm md:text-base font-extrabold text-slate-850 dark:text-white uppercase tracking-wide group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
          {data.profession}
        </h3>

        {/* Company, Date, Location Badge Row */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 pb-3.5 border-b border-slate-100 dark:border-slate-800/80">
          {/* Company */}
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 opacity-60">
              <Image
                src={"/company.svg"}
                width={20}
                height={20}
                alt="Company Icon"
                className="object-contain dark:invert"
              />
            </div>
            <span className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              {data.company}
            </span>
          </div>

          {/* Date Range */}
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 opacity-60">
              <Image
                src={"/datetime.svg"}
                width={20}
                height={20}
                alt="Date Icon"
                className="object-contain dark:invert"
              />
            </div>
            <span className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              {data.start_date} - {data.end_date}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 opacity-60">
              <Image
                src={"/worklocation.svg"}
                width={20}
                height={20}
                alt="Location Icon"
                className="object-contain dark:invert"
              />
            </div>
            <span className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              {data.work_location}
            </span>
          </div>
        </div>

        {/* Bullet List Details */}
        <div className="mt-4 text-[12px] md:text-sm text-slate-550 dark:text-slate-350 leading-relaxed font-normal space-y-2">
          {data.experience.map((dt: string, idx: number) => {
            const isHeader = ["NEXT.JS", "EXPRESS.JS", "ASP.NET"].includes(dt.toUpperCase());
            if (isHeader) {
              return (
                <div key={idx} className="pt-4 pb-1 first:pt-0">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    {dt}
                  </span>
                </div>
              );
            }
            return (
              <div key={idx} className="flex gap-2.5 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-[6px] flex-shrink-0" />
                <p className="flex-1 text-xs md:text-[13px]">{dt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
