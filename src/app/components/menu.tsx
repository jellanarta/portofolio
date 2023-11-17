"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Tipekirim {
    kondisi: boolean,
    theme: string,
    ubahke: string,
    element: any
}
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
        const kirim: Tipekirim = { kondisi: false, element, theme: 'dark', ubahke: 'light' }
        if (nilaidefault && nilaidefault === "dark") {
            kirim.kondisi = true
            kirim.theme = 'light'
            kirim.ubahke = 'dark'
        }
        memanipulasi(kirim)
    }, [])
    const mengaktivkandarkmode = () => {
        const element = document.documentElement
        const kirim: Tipekirim = { kondisi: false, element, theme: 'dark', ubahke: 'light' }
        if (!darkmode) {
            kirim.kondisi = true
            kirim.theme = 'light'
            kirim.ubahke = 'dark'
        }
        memanipulasi(kirim)
    }
    return (
        <div className=" bg-white dark:bg-gray-800 dark:shadow-md sticky top-0 z-[1000]">
            <div className="max-w-5xl w-full mx-auto h-[80px] lg:h-[90px] flex justify-between items-center px-5">
                <Link href={'/'} className="flex items-center gap-4 text-gray-800 dark:text-gray-50">
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
                        <div className="text-xs capitalize">
                            web developer
                        </div>
                    </div>
                </Link>
                <div className="flex justify-center gap-6 items-center">
                    <div className="hidden md:flex justify-end gap-4">
                        <ComponentsLink teks="layanan" />
                        <ComponentsLink teks="profil & kontak" />
                        <ComponentsLink teks="skill" />
                        <ComponentsLink teks="pengalaman" />
                        <ComponentsLink teks="lokasi" />
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

function ComponentsLink({ teks }: { teks: string }) {
    return (
        <div className="uppercase text-xs lg:text-sm font-semibold">
            {teks}
        </div>
    )
}