import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website & SEO Premium - Arta Store',
  description: 'Dapatkan layanan pembuatan website profesional, cepat, responsive, optimasi peringkat Google (SEO), dan penulisan artikel berkualitas tinggi di Arta Store.',
  keywords: ['jasa pembuatan website', 'jasa seo', 'optimasi website', 'konten artikel seo', 'arta store', 'buat web murah', 'ranking 1 google'],
  openGraph: {
    title: 'Jasa Pembuatan Website & SEO Premium - Arta Store',
    description: 'Dapatkan layanan pembuatan website profesional, cepat, responsive, optimasi peringkat Google (SEO), dan penulisan artikel berkualitas tinggi di Arta Store.',
    url: 'https://arta.eu.org/jasa-web',
    siteName: 'Arta Store',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website & SEO Premium - Arta Store',
    description: 'Dapatkan layanan pembuatan website profesional, cepat, responsive, optimasi peringkat Google (SEO), dan penulisan artikel berkualitas tinggi di Arta Store.',
  }
}

export default function JasaWebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
