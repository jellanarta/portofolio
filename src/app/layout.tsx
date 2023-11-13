import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const dataoke = {
  title: 'Portofolio Jellan Arta',
  description: 'Portofolio Jellan Arta seorang web programmer asal Lombok Nusa Tenggara Bara ( NTB )',
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
    <html lang="id" className='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
