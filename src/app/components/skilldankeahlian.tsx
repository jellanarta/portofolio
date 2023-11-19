import Image from 'next/image'
export default function Skilldankeahlian() {
    return (
        <div className="pb-5 border-b border-gray-400 border-dotted dark:border-gray-500 md:border-b-0" id='skill'>
            <div>
                <div className="text-base font-semibold uppercase">
                    skill dan keahlian
                </div>
                <div className="text-xs dark:text-gray-300">
                    Skill dan keahlian di web developer
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-5">
                <Skilsatu judul="javascript" />
                <Skilsatu judul="typescript" />
                <Skilsatu judul="tailwindcss" />
                <Skilsatu judul="reactjs" />
                <Skilsatu judul="nextjs" />
                <Skilsatu judul="expressjs" />
                <Skilsatu judul="nodejs" />
                <Skilsatu judul="mysql" />
                <Skilsatu judul="mongodb" />
                <Skilsatu judul="git" />
            </div>
        </div>
    )
}

function Skilsatu({ judul }: { judul: string }) {
    return (
        <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <div className="w-4 h-4">
                <Image
                    src='/verifikasi.svg'
                    width={100}
                    height={100}
                    alt="verifikasi"
                />
            </div>
            <div className="text-sm uppercase text-gray-700 dark:text-gray-300">
                {judul}
            </div>
        </div>
    )
}