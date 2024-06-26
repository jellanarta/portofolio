import Image from "next/image"

export default function Pengalamankerja() {
  return (
    <div className="pb-5 border-b border-dotted border-gray-400 dark:border-gray-500" id="pengalaman">
      <div>
        <div className="text-base font-semibold uppercase">
          WORK EXPERIENCE
        </div>
        <div className="text-xs">
          Work experience in various fields from 2020 - present.
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5">
        <Cardpengalaman judul="FULL STACK WEBSITE DEVELOPER" tahun="2021 - PRESENT" deskripsi={['Building and developing responsive websites using full stack technologies such as HTML, JavaScript, TailwindCSS, ReactJS, NextJS, ExpressJS, MySQL, and MongoDB.', 'Focused on functionality and design to enhance user experience.']} />
        <Cardpengalaman judul="SEO AND WEBSITE CONTENT SPECIALIST" tahun="2022 - PRESENT" deskripsi={['Optimizing websites to improve search rankings through measurable SEO strategies.', 'Developing and implementing content strategies to enhance online visibility.']} />
        <Cardpengalaman judul="INDEPENDENT CONTENT WRITER" tahun="2022 - PRESENT" deskripsi={['Crafting high-quality articles on various topics, including web development technology and current industry trends.', 'Promoting content through social platforms and building reader audiences.']} />
      </div>
    </div>
  )
}

function Cardpengalaman({ judul, tahun, deskripsi }: { judul: string, tahun: string, deskripsi: any }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4 items-start ">
      <div className="grid grid-cols-1 grid-rows-[auto,1fr] h-full gap-2 justify-center mt-[2px]">
        <div className="ring-2 ring-blue-600 rounded-full w-3 h-3 flex justify-center items-center ">
          <div className="bg-blue-600 w-1 h-1 rounded-full " />
        </div>
        <div className="h border-l border-blue-600 ml-[5px]" />
      </div>
      <div>
        <div className="text-sm uppercase font-semibold">
          {judul}
        </div>
        <div className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-300">
          {tahun}
        </div>
        <div className="text-sm mt-3  dark:text-gray-300 grid grid-cols-1 gap-2">
          {
            deskripsi.map((dt: string, idx: number) => (
              <ul className="list-disc ml-4" key={idx}>
                <li>
                  {dt}
                </li>
              </ul>
            ))
          }
        </div>
      </div>
    </div>
  )
}
