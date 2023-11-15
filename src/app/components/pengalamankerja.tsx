import Image from "next/image"

export default function Pengalamankerja() {
  return (
    <div className="max-w-5xl mx-auto p-5 my-5">
      <div className="text-center">
        <div className="text-base uppercase font-semibold">
          pengalaman kerja
        </div>
        <div className="text-sm">
          Pengalaman kerja di berbagai bidang dari tahun 2020 - 2023
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:flex sm:flex-wrap sm:justify-center mt-7 lg:grid lg:grid-cols-3">
        <Kotakkotak ikon="facebook" judul="pembuat website full stack" deskripsi="Membangun web responsif menggunakan teknologi Full stack seperti NodeJS, NextJS, ExpressJS, TailwindCSS dan MysQL" />
        <Kotakkotak ikon="facebook" judul="spesialis seo dan konten website" deskripsi="Mengoptimalkan seitus web untuk meningkatkan peringkat pencarian melalui strategi SEO yang terukur" />
        <Kotakkotak ikon="facebook" judul="penulis konten independen" deskripsi="Menulis artikel berkualitas tinggi tentang berbagai topik, termasuk teknologi, web development, dan tren industri terkini" />
      </div>
    </div>
  )
}

function Kotakkotak({ ikon, judul, deskripsi }: { ikon: string, judul: string, deskripsi: string }) {
  return (
    <div className="ring-1 ring-gray-200 p-5 rounded-sm bg-white dark:bg-gray-700 dark:ring-gray-600 shadow-sm w-full sm:w-[calc(50%-60px)] lg:w-full">
      <div className="grid grid-cols-[auto,1fr] gap-3">
        <div className="w-10 h-10">
          <Image
            src={`/sosmed/${ikon}.svg`}
            width={100}
            height={100}
            alt="ikon"
          />
        </div>
        <div className="text-sm uppercase font-semibold">
          {judul}
        </div>
      </div>
      <div className="text-sm mt-5">
        {deskripsi}
      </div>
      <div className="mt-5 pt-5 border-t border-gray-200 border-dotted dark:border-gray-500">
        <div className="flex">
          <div className="bg-blue-600 text-gray-50 p-3 text-xs uppercase">
            Lihat detail
          </div>
        </div>
      </div>
    </div>
  )
}