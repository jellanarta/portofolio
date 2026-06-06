import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

const siteUrl = process.env.URL_CLIENT || 'https://arta.eu.org'

const dataoke = {
  title: 'Jellan Arta | Web Developer & SEO Specialist',
  description: 'A web programmer with a strong passion for web development. Specialized in building modern web applications and optimizing for search engines.',
  keywords: 'jellan arta, jellan, arta, data jellan arta, profil jellan arta, web developer lombok, nextjs developer lombok'
}
export const viewport = {
  themeColor: '#4f46e5',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...dataoke,
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  authors: [{ name: 'Jellan Arta', url: 'https://arta.eu.org' }],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: dataoke.title,
    description: dataoke.description,
    images: '/profil.jpg',
    url: siteUrl,
    type: 'profile',
    locale: 'id_ID'
  },
  twitter: {
    card: 'summary_large_image',
    title: dataoke.title,
    description: dataoke.description,
    creator: '@jellanarta',
    images: [`${siteUrl}/profil.jpg`]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="light scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300`}>
        {children}
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6285941304719"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Chat via WhatsApp"
        >
          {/* Pulse animation ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:animate-none" />
          
          {/* WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 relative z-10 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  )
}

