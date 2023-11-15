import Image from "next/image"

export default function Jumbotron() {
    return (
        <div className="bg-[url('/bgarta.jpg')] w-full h-[500px] lg:h-[500px] bg-no-repeat bg-center   bg-cover relative">
            <div className="absolute w-full h-full" style={{ background: 'rgba(0,0,0,0.7)' }}>
                <div className="max-w-5xl mx-auto flex justify-center items-center h-[500px] lg:h-[500px]">
                    <Profilarta />
                </div>
            </div>
        </div>
    )
}

function Profilarta() {
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
                Seorang web programmer dengan hasrat besar di bidang web developer.
                Latar belakang pendidikan di SMK Negeri 1 Praya ( Pariwisata ).
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
            <div className="ring-1 ring-gray-200 rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center hover:ring-blue-200">
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