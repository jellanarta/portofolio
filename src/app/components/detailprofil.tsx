import Image from "next/image";

export default function Detailprofil() {
    return (
        <div className="grid grid-cols-1 pb-5 bg-white dark:bg-gray-700 p-5 " id="profil">
            <div className="text-base font-semibold uppercase">
                <h1>
                    PERSONAL PROFILE
                </h1>
            </div>
            <div className="mt-5">
                <div className="w-full max-w-[500px] h-[300px] rounded-md relative">
                    <Image
                        src={'/jellanarta.jpg'}
                        sizes="100%"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                        alt='Profil Jellan Arta'
                    />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-5">
                    <div>
                        <div className="text-base uppercase font-semibold">
                            Jellan arta
                        </div>
                        <div className="text-sm dark:text-gray-300 mt-2">
                            A Web Developer from Lombok, West Nusa Tenggara. Last education obtained from SMK Negeri 1 Praya Pariwisata. Committed to continuously improving skills in the field of web development.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        <Lebihlengkap ikon="pendidikan" teks="SMK Negeri 1 Praya Pariwisata" />
                        <Lebihlengkap ikon="email" teks="jellanarta@gmail.com" />
                        <Lebihlengkap ikon="nohp" teks="+6285941304719" />
                        <Lebihlengkap ikon="website" teks="arta.eu.org" />
                        <Lebihlengkap ikon="website" teks="kecimol.com" />
                        <Lebihlengkap ikon="website" teks="nuansamandalika.com" />
                        <Lebihlengkap ikon="github" teks="jellanarta" />
                        <Lebihlengkap ikon="lokasi" teks="Praya, Kabupaten Lombok Tengah, Nusa Tenggara Barat, Indonesia" />
                    </div>
                </div>
            </div>
        </div>
    )
}
function Lebihlengkap({ ikon, teks }: { ikon: string, teks: string }) {
    return (
        <div className="grid grid-cols-[auto,1fr] border-b border-dotted border-gray-200 pb-1 gap-4 items-start">
            <div className="w-4 h-4">
                <Image
                    src={`/${ikon}.svg`}
                    width={100}
                    height={100}
                    alt={ikon}
                />
            </div>
            {
                ikon === "website" || ikon === "github" ?
                    <a href={`https://${ikon === "github" ? `github.com/${teks}` : `${teks}`}`} target="_blank">
                        <div className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500">
                            {teks}
                        </div>
                    </a>
                    :
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                        {teks}
                    </div>
            }
        </div>
    )
}
