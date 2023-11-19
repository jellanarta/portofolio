import Image from "next/image"

export default function Pengalamankerja() {
  return (
    <div className="pb-5 border-b border-dotted border-gray-400 dark:border-gray-500" id="pengalaman">
      <div>
        <div className="text-base font-semibold uppercase">
          pengalaman kerja
        </div>
        <div className="text-xs">
          Pengalaman kerja di berbagai bidang dari tahun 2020 - 2023
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5">
        <Cardpengalaman judul="pembuat website full stack" tahun="2021 - sekarang" deskripsi={['Membangun dan mengembangkan situs web responsive menggunakan teknologi full stack seperti HTML, JavaScript, TailwindCSS, ReactJS, NextJS, ExpressJS, MySQL dan MongoDB', 'Berfokus pada fungsionalitas dan desain yang meningkatkan pengalaman pengguna']} />
        <Cardpengalaman judul="Spesialis SEO dan konten website" tahun="2022 - sekarang" deskripsi={['Mengoptimalkan situs web untuk meningkatkan peringkat pencarian melalui startegi SEO yang terukur', 'Menyusun dan mengimplementasikan startegi konten untuk meningkatkan visibilitas online']} />
        <Cardpengalaman judul="Penulis konten independen" tahun="2022 - sekarang" deskripsi={['Menulis artikel berkualitas tinggi tentang berbagai topik, termasuk teknologim web devlopment, dan tren industri terkini', 'Mempromosikan konten melalui platform sosial dan mengembangkan audiens pembaca']} />
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
