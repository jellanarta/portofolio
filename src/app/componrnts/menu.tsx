"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu() {

    const [darkmode, setDarkmode] = useState(false)
    function memanipulasi(data: { kondisi: boolean, theme: string, ubahke: string, element: any }) {
        setDarkmode(data.kondisi)
        localStorage.setItem('theme', data.ubahke)
        data.element.classList.add(data.ubahke)
        data.element.classList.remove(data.theme)
    }
    useEffect(() => {
        const element = document.documentElement
        const nilaidefault: any = localStorage.getItem('theme')
        if (nilaidefault) {
            if (nilaidefault === "light") {
                memanipulasi({ kondisi: false, theme: 'dark', ubahke: 'light', element })
            } else {
                memanipulasi({ kondisi: true, theme: 'light', ubahke: 'dark', element })
            }
        } else {
            memanipulasi({ kondisi: false, theme: 'dark', ubahke: 'light', element })
        }
    }, [])
    const mengaktivkandarkmode = () => {
        const element = document.documentElement
        if (darkmode) {
            memanipulasi({ kondisi: false, theme: 'dark', ubahke: 'light', element })
        } else {
            memanipulasi({ kondisi: true, theme: 'light', ubahke: 'dark', element })
        }
    }
    return (
        <div className=" bg-white dark:bg-gray-800 dark:shadow-md">
            <div className="max-w-5xl w-full mx-auto h-[80px] flex justify-between items-center px-5">
                <Link href={'/'} className="flex items-center gap-5 text-gray-800 dark:text-gray-50">
                    <div className="w-10 h-10">
                        <Image
                            src={'/logo.png'}
                            width={100}
                            height={100}
                            alt="logo jellan arta"
                        />
                    </div>
                    <div>
                        <div className="text-base uppercase font-semibold">
                            Jellan Arta
                        </div>
                        <div className="text-xs lowercase">
                            Portofolio Pribadi
                        </div>
                    </div>
                </Link>
                <div className="flex justify-center gap-5 items-center">
                    <div className="hidden md:flex justify-end gap-4">
                        <div>satu</div>
                        <div>satu</div>
                        <div>satu</div>
                    </div>
                    <div>
                        <div className={`bg-gray-300 w-[60px] relative h-7 px-[2px] cursor-pointer flex items-center rounded-full dark:bg-blue-500`} onClick={mengaktivkandarkmode}>
                            <div className={`w-6 h-6 rounded-full bg-white transition-all ${darkmode ? 'translate-x-[32px]' : '-translate-x-0'} absolute`}></div>
                        </div>
                    </div>

                    <div className="ring-1 ring-gray-200 rounded-full w-11 h-11 flex  items-center justify-center md:hidden">
                        <div className="w-6 h-6">
                            <Image
                                src={`/menu.svg`}
                                width={100}
                                height={100}
                                alt='menu'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

