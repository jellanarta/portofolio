import Image from "next/image";

export default function Profiluser() {
    return (
        <div className="text-center grid grid-cols-1 gap-5 max-w-[550px] text-gray-50 px-10 md:max-w-[700px]">
            <div className="w-[180px] h-[180px] rounded-full relative mx-auto">
                <Image
                    src={'/profil.jpg'}
                    priority
                    sizes="100%"
                    fill
                    alt="profil jellan arta"
                    style={{
                        objectFit: 'cover',
                        borderRadius: '100%'
                    }}
                />
            </div>
            <div className="text-2xl font-semibold uppercase">
                <h1>
                    Jellan Arta
                </h1>
            </div>
            <div className="text-center text-sm text-gray-100">
                <h2>
                    A web programmer with a strong passion for web development. Educational background from SMK Negeri 1 Praya (Pariwisata).
                </h2>
            </div>
            <div className="flex justify-center gap-5">
                <Membuatsosmed ikon="facebook" username="jellanarta.id" />
                <Membuatsosmed ikon="instagram" username="jellanarta" />
                <Membuatsosmed ikon="github" username="jellanarta" />
                <Membuatsosmed ikon="tiktok" username="@jellanarta" />
            </div>
        </div>
    )
}
function Membuatsosmed({ ikon, username }: { ikon: string, username: string }) {
    return (
        <a href={`https://${ikon}.com/${username}`} target="_blank">
            <div className="ring-1 ring-gray-200 rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center hover:ring-blue-400">
                <div className="w-[20px] h-[20px]">
                    <Image
                        src={`/sosmed/${ikon}.svg`}
                        width={100}
                        height={100}
                        alt="ikon sosmed"
                    />
                </div>
            </div>
        </a>
    )
}
