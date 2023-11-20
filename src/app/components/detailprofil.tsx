import Image from "next/image";

export default function Detailprofil() {
    return (
        <div className="grid grid-cols-1 pb-5 border-b border-dotted border-gray-400 dark:border-gray-500" id="profil">
            <div className="text-base font-semibold uppercase">
                <h1>
                    profil pribadi
                </h1>
            </div>
            <div className="text-xs">
                Detail profil jellan arta
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
                            Seorang pengembang Web Developer dari Lombok Nusa Tenggara Barat. Pendidikan terakhir di SMK Negeri 1 Praya Pariwisata. Dengan komitmen untuk terus mengembangkan keterampilan dalam dunia web developer.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        <Lebihlengkap ikon="pendidikan" teks="SMK Negeri 1 Praya Pariwisata" />
                        <Lebihlengkap ikon="email" teks="jellanarta@gmail.com" />
                        <Lebihlengkap ikon="nohp" teks="+6285941304719" />
                        <Lebihlengkap ikon="website" teks="jellan.vercel.app" />
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
        <div className="grid grid-cols-[auto,1fr] gap-4 items-start">
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
