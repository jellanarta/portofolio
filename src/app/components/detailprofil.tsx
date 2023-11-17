import Image from "next/image";

export default function Detailprofil() {
    return (
        <div className="grid grid-cols-1 pb-5 border-b border-dotted border-gray-400 dark:border-gray-500">
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
                </div>
            </div>
        </div>
    )
}