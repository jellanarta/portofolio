import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
const inter = Roboto({
  subsets: ['latin'],
  weight: ['400']
})

const dataoke = {
  title: 'Jellan Arta Web Developer',
  description: 'Seorang web programmer dengan hasrat besar di bidang web developer. Latar belakang pendidikan di SMK Negeri 1 Praya ( Pariwisata ).',
  keywords: 'jellan arta, jellan, arta, data jellan arta, profil jellan arta'
}
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL_CLIENT}`),
  ...dataoke,
  alternates: {
    canonical: `${process.env.URL_CLIENT}`,
    languages: {
      'id-ID': '/id-ID',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  themeColor: 'gray',
  openGraph: {
    title: dataoke.title,
    description: dataoke.description,
    images: '/profil.jpg',
    url: `${process.env.URL_CLIENT}`,
    type: 'article',
    locale: 'id_ID',
    authors: 'Jellan Arta'
  },
  twitter: {
    card: 'summary_large_image',
    title: dataoke.title,
    description: dataoke.description,
    creator: 'Jellan Arta',
    images: [`${process.env.URL_CLIENT}/profil.jpg`]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className='light'>
      <body className={inter.className + ' bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-50'}>{children}</body>
    </html>
  )
}
