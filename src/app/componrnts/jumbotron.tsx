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
        </div>
    )
}
