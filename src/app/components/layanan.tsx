import Image from "next/image"

export default function Layanan() {
    return (
        <div className="p-5 max-w-5xl mx-auto mt-10" id="layanan">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <Kotakkotak ikon="layanancoding" judul="pembuatan website" deskripsi="Melayani pembuatan website full stack NodeJS menggunakan framework seperti ReactJS, NextJS sebagai Front-End dan ExpressJS sebagai Back-End. Serta MongoDB dan MYSQL sebagai database" />
                <Kotakkotak ikon="layanantulisartikel" judul="penulis artikel" deskripsi="Melayani pembuatan artikel dengan berbagai topik seperti, teknologi terkini, berita terbaru, pariwisata dan berita olah raga seperti sepak bola dan moto GP" />
                <Kotakkotak ikon="layananseo" judul="seo website" deskripsi="Melayani pengoptimalan SEO sebuah website agar mampu bersaing di hasil pencarian google. Dengan Layanan ini website anda bisa bersaing dengan website lainnya di halaman pertama google" />
            </div>
        </div>
    )
}
function Kotakkotak({ ikon, judul, deskripsi }: { ikon: string, judul: string, deskripsi: string }) {
    return (
        <div className="bg-white rounded-sm dark:bg-gray-700 shadow-sm p-5">
            <div className="w-12 h-12 mx-auto">
                <Image
                    src={`/${ikon}.svg`}
                    width={100}
                    height={100}
                    alt={judul}
                />
            </div>
            <div className="text-center mt-2">
                <div className="text-sm uppercase font-semibold">
                    {judul}
                </div>
                <div className="text-[13px] mt-1 text-gray-700 dark:text-gray-300">
                    {deskripsi}
                </div>
            </div>
        </div>
    )
}
