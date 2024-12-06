import { skils } from '@/lib/skils'
import Image from 'next/image'
export default function Skilldankeahlian() {
    return (
        <div className="pb-5 bg-white dark:bg-gray-700 p-5 " id='skill'>
            <div>
                <div className="text-base font-semibold uppercase">
                    SKILLS AND EXPERTISE
                </div>
                <div className="text-xs dark:text-gray-300">
                    Skills and expertise in web development.
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 mt-5">
                {
                    skils.map((data:string,index:number)=>(
                        <Skilsatu judul={data} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

function Skilsatu({ judul }: { judul: string }) {
    return (
        <div className="grid grid-cols-[auto,1fr] gap-2 items-start">
            <div className="w-4 h-4">
                <Image
                    src='/verifikasi.svg'
                    width={100}
                    height={100}
                    alt="verifikasi"
                />
            </div>
            <div className="text-xs uppercase text-gray-700 dark:text-gray-300">
                {judul}
            </div>
        </div>
    )
}
