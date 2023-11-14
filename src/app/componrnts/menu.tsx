"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
    const [darkmode, setDarkmode] = useState(false)
    const mengaktivkandarkmode = () => {
        const element = document.documentElement
        console.log(element)
        if (darkmode) {
            setDarkmode(false)
            localStorage.setItem('theme', 'light')
            element.classList.add('light')
            element.classList.remove('dark')
        } else {
            setDarkmode(true)
            localStorage.setItem('theme', 'dark')
            element.classList.add('dark')
            element.classList.remove('light')
        }
    }
    return (
        <div className=" bg-white dark:bg-gray-800">
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
                    <div>
                        <div className="bg-gray-300 w-[60px] relative h-7 px-[2px] cursor-pointer flex items-center rounded-full" onClick={mengaktivkandarkmode}>
                            <div className={`w-6 h-6 rounded-full bg-white transition-all ${darkmode ? 'translate-x-[32px]' : '-translate-x-0'} absolute`}></div>
                        </div>
                    </div>

                    <div className="ring-1 ring-gray-200 rounded-full w-11 h-11 flex  items-center justify-center">
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
