import { pengalamankerja, WorkExperience } from "@/lib/pengalamankerja";
import Image from "next/image";

export default function Pengalamankerja() {
  return (
    <div className="pb-5" id="pengalaman">
      <div>
        <div className="text-base font-semibold uppercase">WORK EXPERIENCE</div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5">
        {pengalamankerja.map((data: WorkExperience, index: number) => (
          <Cardpengalaman data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

function Cardpengalaman({ data }: { data: WorkExperience }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4 items-start">
      <div className="grid grid-cols-1 grid-rows-[auto,1fr] h-full gap-2 justify-center mt-[2px]">
        <div className="ring-2 ring-blue-600 rounded-full w-3 h-3 flex justify-center items-center ">
          <div className="bg-blue-600 w-1 h-1 rounded-full " />
        </div>
        <div className="h border-l border-blue-600 ml-[5px]" />
      </div>
      <div className="border-b border-gray-400 border-dotted pb-5">
        <div className="text-sm uppercase font-semibold mb-2">
          {data.profession}
        </div>
        <div className="grid grid-cols-1 gap-1 border-b border-gray-400 pb-3">
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <div className="w-3 h-3">
              <Image
                src={"/company.svg"}
                width={100}
                height={100}
                alt="ikon company"
              />
            </div>
            <div className="text-xs uppercase text-gray-600 dark:text-gray-300">
              {data.company}
            </div>
          </div>
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <div className="w-3 h-3">
              <Image
                src={"/datetime.svg"}
                width={100}
                height={100}
                alt="ikon datetime"
              />
            </div>
            <div className="text-xs uppercase text-gray-600 dark:text-gray-300">
              <span>
                {data.start_date} - {data.end_date}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <div className="w-3 h-3">
              <Image
                src={"/worklocation.svg"}
                width={100}
                height={100}
                alt="ikon worklocation"
              />
            </div>
            <div className="text-xs uppercase text-gray-600 dark:text-gray-300">
              {data.work_location}
            </div>
          </div>
        </div>

        <div className="text-sm mt-3  dark:text-gray-300 grid grid-cols-1 gap-y-4">
          {data.experience.map((dt: string, idx: number) => (
            <ul className="list-disc ml-4" key={idx}>
              <li className="text-[15px]">{dt}</li>
            </ul>
          ))}
        </div>

        <div className="mt-5 text-sm">
          <span className="font-semibold uppercase">SKILS</span> : {data.skils.join(" - ")}
        </div>
      </div>
    </div>
  );
}
