"use client"

import React, { useState } from 'react';
import Script from 'next/script';
import Pagecontent from '../components/pagecontent';
import Footer from '../components/footer';

// TS declaration for Midtrans Snap
declare global {
  interface Window {
    snap: any;
  }
}

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    id: 'web-dev',
    name: 'Jasa Pembuatan Website',
    price: 2500000,
    description: 'Pembuatan website modern, responsif, dan performa tinggi untuk profil bisnis, portofolio, landing page, atau toko online Anda.',
    features: [
      'Desain Premium & UI/UX Kustom',
      'Responsif (Mobile, Tablet, Desktop)',
      'Optimasi Kecepatan & SEO On-Page',
      'Integrasi Chat WhatsApp & Formulir',
      'Free Domain (.com) & Hosting 1 Tahun',
      'Revisi 3 Kali & Garansi Pemeliharaan'
    ]
  },
  {
    id: 'seo-opt',
    name: 'Jasa Optimasi SEO Website',
    price: 1500000,
    description: 'Tingkatkan visibilitas website Anda di mesin pencari untuk bersaing di peringkat pertama Google guna menarik trafik potensial secara organik.',
    features: [
      'Audit Teknis SEO & Keyword Research',
      'Optimasi Konten & Meta Tag',
      'Peningkatan Page Speed & Mobile-Friendly',
      'Backlink Berkualitas Tinggi (Off-Page)',
      'Integrasi Google Search Console & Analytics',
      'Laporan Peringkat & Traffic Bulanan'
    ]
  },
  {
    id: 'article-seo',
    name: 'Konten Artikel SEO',
    price: 350000,
    description: 'Paket penulisan artikel berkualitas tinggi yang ramah SEO untuk mengisi blog bisnis Anda demi meningkatkan peringkat kata kunci relevan.',
    features: [
      '10 Artikel SEO Kualitas Premium',
      'Panjang 500 - 800 Kata per Artikel',
      '100% Lolos Plagiasi (Copyscape)',
      'Riset Keyword Relevan & LSI',
      'Termasuk Gambar Pendukung & Meta Description',
      'Format Markdown / Siap Posting di CMS'
    ]
  }
];

export default function JasaWebPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  
  // Checkout Form States
  const [name, setName] = useState('');
  const [wa, setWa] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };

  const handleOpenCheckout = (service: Service) => {
    setSelectedService(service);
    setIsCheckoutOpen(true);
    setFormError('');
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!selectedService) return;

    if (!name.trim()) {
      setFormError('Nama lengkap wajib diisi.');
      return;
    }

    if (!wa.trim() && !email.trim()) {
      setFormError('Anda wajib memasukkan nomor WhatsApp ATAU alamat Email.');
      return;
    }

    if (!agreeTerms) {
      setFormError('Anda wajib menyetujui Syarat & Ketentuan dan Kebijakan Pengembalian.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          wa,
          notes,
          serviceId: selectedService.id,
          serviceName: selectedService.name,
          price: selectedService.price,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Gagal memulai transaksi.');
      }

      setIsLoading(false);
      setIsCheckoutOpen(false);

      // Trigger Snap popup using the token
      if (window.snap) {
        window.snap.pay(data.token, {
          onSuccess: function (result: any) {
            alert('Pembayaran Berhasil! Terima kasih telah memesan.');
            window.location.reload();
          },
          onPending: function (result: any) {
            alert('Pembayaran Menunggu: Silakan selesaikan pembayaran Anda.');
            window.location.reload();
          },
          onError: function (result: any) {
            alert('Pembayaran Gagal: Silakan coba lagi.');
          },
          onClose: function () {
            alert('Anda menutup popup pembayaran sebelum menyelesaikan transaksi.');
          }
        });
      } else {
        alert('Terjadi kesalahan memuat payment gateway. Silakan hubungi admin.');
      }

    } catch (err: any) {
      setIsLoading(false);
      setFormError(err.message || 'Terjadi kesalahan sistem, silakan coba lagi.');
    }
  };

  return (
    <Pagecontent>
      {/* Midtrans Snap JS Script */}
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="lazyOnload"
      />

      <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto min-h-screen">
        {/* Jumbotron / Hero */}
        <div className="text-center py-10 md:py-16">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/50 rounded-full">
            Layanan Profesional
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-500">
            Jasa Pembuatan Website & SEO
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Solusi digital premium untuk membantu bisnis Anda berkembang secara online, menjangkau target audiens lebih luas, dan bersaing di mesin pencari.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="relative flex flex-col justify-between p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl shadow-xl hover:shadow-2xl hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {service.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {formatIDR(service.price)}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 border-t border-slate-100 dark:border-slate-800/60 pt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Fitur & Benefit:
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-355">
                        <svg className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button
                onClick={() => handleOpenCheckout(service)}
                className="mt-8 w-full py-3.5 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 active:scale-[0.98] transition-all duration-200"
              >
                Pesan Sekarang
              </button>
            </div>
          ))}
        </div>

        {/* T&C and Info Section */}
        <div className="mt-16 p-6 md:p-8 bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                Penting Sebelum Membeli
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                Harap membaca Syarat & Ketentuan serta Kebijakan Pengembalian Dana untuk kenyamanan dan keamanan transaksi bersama.
              </p>
            </div>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="py-2.5 px-5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors shrink-0"
            >
              Baca Syarat & Ketentuan
            </button>
          </div>
        </div>

        {/* Business Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">WhatsApp</h4>
              <a href="https://wa.me/6285941304719" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline mt-1 block">
                +62 859 4130 4719
              </a>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Email Bisnis</h4>
              <a href="mailto:jellanarta@gmail.com" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline mt-1 block">
                jellanarta@gmail.com
              </a>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Alamat Kantor</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Jago, Praya, Lombok Tengah, Nusa Tenggara Barat, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsCheckoutOpen(false)} />
          
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh] animate-scale-up">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800/80">
              <div>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase">Form Pemesanan</span>
                <h3 className="text-lg font-bold text-slate-850 dark:text-white mt-0.5">
                  {selectedService.name}
                </h3>
              </div>
              <button 
                onClick={() => setIsCheckoutOpen(false)}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap Anda"
                  className="mt-1.5 w-full py-3 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                    No. WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    value={wa} 
                    onChange={(e) => setWa(e.target.value)}
                    placeholder="Contoh: 0859..."
                    className="mt-1.5 w-full py-3 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                    Alamat Email
                  </label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="mt-1.5 w-full py-3 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <p className="text-[10px] text-slate-450 dark:text-slate-500 -mt-2">
                * Wajib memasukkan minimal nomor WhatsApp atau Email agar kami dapat menghubungi Anda.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  Catatan Proyek / Deskripsi Kebutuhan
                </label>
                <textarea 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Jelaskan kebutuhan website atau bisnis Anda secara singkat..."
                  rows={3}
                  className="mt-1.5 w-full py-3 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Price Tag */}
              <div className="p-4 bg-indigo-50/55 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/30 rounded-2xl flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Total Pembayaran:</span>
                <span className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400">
                  {formatIDR(selectedService.price)}
                </span>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5">
                <input 
                  type="checkbox" 
                  id="agreeTerms" 
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-indigo-600 border-slate-200 dark:border-slate-800 rounded focus:ring-indigo-500"
                />
                <label htmlFor="agreeTerms" className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Saya menyetujui{' '}
                  <button 
                    type="button" 
                    onClick={() => setIsTermsOpen(true)}
                    className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                  >
                    Syarat & Ketentuan
                  </button>{' '}
                  dan{' '}
                  <button 
                    type="button" 
                    onClick={() => setIsTermsOpen(true)}
                    className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                  >
                    Kebijakan Pengembalian
                  </button>.
                </label>
              </div>

              {formError && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 rounded-xl text-xs font-semibold text-center">
                  {formError}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl font-bold shadow-lg disabled:opacity-50 transition-all duration-200"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Memproses...</span>
                  </div>
                ) : (
                  'Lanjutkan Pembayaran'
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setIsTermsOpen(false)} />
          
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[85vh] animate-scale-up">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800/80">
              <h3 className="text-xl font-extrabold text-slate-850 dark:text-white uppercase tracking-wider">
                Syarat & Ketentuan Layanan
              </h3>
              <button 
                onClick={() => setIsTermsOpen(false)}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 text-sm text-slate-650 dark:text-slate-350 space-y-6 leading-relaxed">
              <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-2xl">
                <p className="text-xs font-semibold italic text-slate-550 dark:text-slate-450">
                  Disclaimer: Syarat & ketentuan ini dirancang untuk memberikan informasi panduan umum terkait jasa pembuatan website, optimasi SEO, dan konten artikel di Arta Store.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">1. KETENTUAN PENGGUNAAN (CONDITIONS OF USE)</h4>
                <p className="mt-1">
                  Jasa yang ditawarkan di Arta Store disediakan bagi Anda dengan syarat Anda menyetujui semua syarat, ketentuan, dan pemberitahuan yang tercantum di sini. Dengan memesan layanan kami, Anda menyatakan sepakat atas seluruh isi ketentuan ini.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">2. GAMBARAN UMUM (OVERVIEW)</h4>
                <p className="mt-1">
                  Penggunaan situs ini dan pemesanan jasa yang ada di dalamnya merupakan bentuk kesepakatan tertulis. Silakan baca dengan seksama sebelum melakukan transaksi. Jika Anda tidak menyetujui ketentuan ini, Anda dapat membatalkan proses pemesanan.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">3. MODIFIKASI LAYANAN DAN HARGA</h4>
                <p className="mt-1">
                  Arta Store berhak untuk mengubah, memperbarui, atau menghentikan syarat, harga layanan, dan detail produk kapan saja tanpa pemberitahuan terlebih dahulu. Kami berhak menolak pesanan jika terjadi kesalahan teknis atau kesalahan input harga pada sistem.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">4. HAK CIPTA (COPYRIGHTS)</h4>
                <p className="mt-1">
                  Semua materi desain, kode program, logo, dan konten yang diterbitkan di situs ini adalah milik Arta Store dan dilindungi oleh undang-undang hak cipta Republik Indonesia. Penggandaan materi tanpa izin tertulis dilarang keras.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">5. PEMESANAN & REGISTRASI</h4>
                <p className="mt-1">
                  Anda wajib memberikan data berupa Nama Lengkap serta Informasi Kontak aktif (WhatsApp atau Email) yang benar dan akurat. Kami berkomunikasi langsung melalui kontak yang Anda berikan untuk memproses pengerjaan proyek.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">6. DESKRIPSI PRODUK JASA</h4>
                <p className="mt-1">
                  Kami berupaya semaksimal mungkin menampilkan informasi, spesifikasi, dan deskripsi produk jasa seakurat mungkin. Namun, hasil akhir performa website atau peringkat SEO dapat dipengaruhi oleh faktor eksternal (seperti perubahan algoritma Google atau respon server pihak ketiga).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">7. KEBIJAKAN PENGEMBALIAN DANA (CONDITIONS OF RETURNS)</h4>
                <p className="mt-1">
                  Karena produk yang kami jual berbentuk jasa digital, ketentuan pengembalian dana diatur sebagai berikut:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                  <li>Permintaan pengembalian dana (refund) hanya dapat diajukan maksimal <strong>7 hari</strong> sejak tanggal pembayaran terkonfirmasi.</li>
                  <li>Refund hanya disetujui apabila pengerjaan proyek <strong>belum dimulai sama sekali</strong>.</li>
                  <li>Jika pengerjaan proyek telah masuk ke tahap perencanaan/analisis awal, maka pengembalian dana akan dipotong biaya administrasi dan persiapan teknis.</li>
                  <li>Layanan yang sudah selesai dikerjakan secara penuh tidak dapat diajukan pengembalian dana (non-refundable).</li>
                  <li>Segala biaya administrasi transaksi bank/payment gateway tidak dapat di-refund.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">8. KEBIJAKAN PRIVASI (PRIVACY POLICY)</h4>
                <p className="mt-1">
                  Informasi pribadi Anda aman bersama kami. Arta Store berkomitmen melindungi kerahasiaan data pembeli. Informasi kontak, email, dan detail proyek yang Anda masukkan hanya akan digunakan untuk memproses pesanan dan tidak akan dibagikan atau dijual kepada pihak ketiga.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">9. HUKUM YANG BERLAKU (APPLICABLE LAWS)</h4>
                <p className="mt-1">
                  Syarat dan Ketentuan serta transaksi penjualan jasa di Arta Store tunduk dan diatur berdasarkan hukum yang berlaku di wilayah Republik Indonesia.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">10. PERTANYAAN & UMPAN BALIK</h4>
                <p className="mt-1">
                  Kami menyambut pertanyaan atau masukan Anda terkait layanan ini. Silakan hubungi kami melalui halaman kontak yang tersedia di WhatsApp atau melalui email bisnis kami.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex justify-end">
              <button 
                onClick={() => setIsTermsOpen(false)}
                className="py-2.5 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-sm transition-colors"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </Pagecontent>
  );
}
