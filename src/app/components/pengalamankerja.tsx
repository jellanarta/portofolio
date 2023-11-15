import Image from "next/image"

export default function Pengalamankerja() {
  return (
    <div className="max-w-5xl mx-auto p-5 my-5">
      <div className="">
        <div className="text-lg uppercase font-semibold">
          pengalaman kerja
        </div>
        <div className="text-sm">
          Pengalaman kerja di berbagai bidang dari tahun 2020 - 2023
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:flex sm:flex-wrap sm:justify-center mt-7 lg:grid lg:grid-cols-3">
        <Kotakkotak bg="web" ikon="website" judul="pembuat website full stack" deskripsi="Membangun web responsif menggunakan teknologi Full stack seperti NodeJS, NextJS, ExpressJS, TailwindCSS dan MysQL" />
        <Kotakkotak bg="seo" ikon="seo" judul="spesialis seo dan konten website" deskripsi="Mengoptimalkan seitus web untuk meningkatkan peringkat pencarian melalui strategi SEO yang terukur" />
        <Kotakkotak bg="writing" ikon="writing" judul="penulis konten independen" deskripsi="Menulis artikel berkualitas tinggi tentang berbagai topik, termasuk teknologi, web development, dan tren industri terkini" />
      </div>
    </div>
  )
}

function Kotakkotak({ ikon, judul, deskripsi, bg }: { bg: string, ikon: string, judul: string, deskripsi: string }) {
  return (
    <div className={`ring-1 ring-gray-200 h-[250px] rounded-sm bg-[url('/${bg}.jpg')] bg-no-repeat bg-center bg-cover dark:ring-gray-700 shadow-sm w-full sm:w-[calc(50%-10px)] lg:w-full relative`}>
      <div className="absolute w-full h-full p-5" style={{ background: 'rgba(0,0,0,0.8)' }}>
        <div className="grid grid-cols-[1fr] gap-3 items-center">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8">
              <Image
                src={`/sosmed/${ikon}.svg`}
                width={100}
                height={100}
                alt="ikon"
              />
            </div>
          </div>
          <div className="text-lg uppercase font-semibold text-gray-50">
            {judul}
          </div>
        </div>
        <div className="text-sm mt-4 text-gray-100 dark:text-gray-200">
          {deskripsi}
        </div>
      </div>
    </div>
  )
}