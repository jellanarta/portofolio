import Image from "next/image";

export default function Skillabout() {
    return (
        <div >
            <div className="grid grid-cols-1">
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
                    <div className="mt-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quod, nam aperiam debitis dicta, odit amet at aliquid numquam ratione soluta voluptate atque voluptatem culpa! Facilis iste exercitationem amet quod.
                    </div>
                </div>
            </div>
        </div>
    )
}
