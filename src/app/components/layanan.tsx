import Image from "next/image"

export default function Layanan() {
    return (
        <div className="p-5 max-w-5xl mx-auto mt-10" id="layanan">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <Kotakkotak ikon="layanancoding" judul="WEBSITE DEVELOPMENT" deskripsi="We provide full stack NodeJS website development using frameworks like ReactJS, NextJS for Front-End, and ExpressJS for Back-End. We also utilize MongoDB and MySQL as databases." />
                <Kotakkotak ikon="layanantulisartikel" judul="ARTICLE WRITING" deskripsi="We provide article writing services on various topics including the latest technology trends, current news, tourism, and sports news." />
                <Kotakkotak ikon="layananseo" judul="WEBSITE SEO" deskripsi="We offer website SEO optimization services to help your website compete in Google search results. With this service, your website can compete with others on the first page of Google." />
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
