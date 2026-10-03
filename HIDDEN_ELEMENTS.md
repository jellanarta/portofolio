# 📋 Daftar Komponen & Elemen yang Disembunyikan (Hidden Elements)

Dokumen ini mencatat seluruh komponen, section, dan informasi kontak yang disembunyikan menggunakan komentar (`{/* ... */}` atau `//`). Tidak ada kode yang dihapus, sehingga Anda dapat dengan mudah mengembalikannya (uncomment) kapan saja.

---

## 1. Section Featured Projects
* **File:** `src/app/page.tsx`
* **Cara Mengembalikan:** Hapus tanda komentar pada baris import dan tag komponen `<Projects />`.
```tsx
// SEBELUM (Saat ini di-hide):
// import Projects from "./components/projects";
{/* <Projects /> */}

// SESUDAH (Untuk mengembalikan):
import Projects from "./components/projects";
<Projects />
```

---

## 2. Navigasi Menu (Projects & Location)
* **File:** `src/app/components/menu.tsx`
* **Cara Mengembalikan:** Hapus tanda komentar `{/* ... */}` pada menu desktop dan menu mobile (drawer).
```tsx
// Desktop Menu (sekitar baris 72-73):
<ComponentsLink id="projects" teks="Projects" />
<ComponentsLink id="maps" teks="Location" />

// Mobile Menu (sekitar baris 160-161):
<MobileComponentsLink id="projects" teks="Projects" setOpen={setOpenmenu} />
<MobileComponentsLink id="maps" teks="Location" setOpen={setOpenmenu} />
```

---

## 3. Sosial Media & Tombol "Download CV"
* **File:** `src/app/components/profiluser.tsx`
* **Cara Mengembalikan:** Hapus pembungkus komentar `{/* ... */}` pada blok Social Links dan blok Download CV.
```tsx
// Sosial Media (sekitar baris 43-52):
<div className="flex justify-center gap-4 mt-2">
    <Membuatsosmed ikon="github" username="jellanarta" tooltip="GitHub" />
    <Membuatsosmed ikon="linkedin" username="in/jellanarta" tooltip="LinkedIn" />
    <Membuatsosmed ikon="instagram" username="jellanarta" tooltip="Instagram" />
    <Membuatsosmed ikon="facebook" username="jellanarta.id" tooltip="Facebook" />
    <Membuatsosmed ikon="tiktok" username="@jellanarta" tooltip="TikTok" />
</div>

// Download CV (sekitar baris 54-73):
<div className="mt-4">
    <a
        href="https://drive.google.com/file/d/1tlGe1cp9JBUNh2BLhefm_qb4s06PSUPq/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="..."
    >
        ...
        Download CV
    </a>
</div>
```

---

## 4. Email, No. HP, Lokasi, GitHub, dan Instagram di Profil Detail
* **File:** `src/app/components/detailprofil.tsx`
* **Cara Mengembalikan:** Hapus komentar pada masing-masing item baris di dalam `div` Contact Details List (sekitar baris 43-50).
```tsx
// Hapus komentar pada baris-baris berikut:
<Lebihlengkap ikon="email" teks="jellanarta@gmail.com" />
<Lebihlengkap ikon="nohp" teks="+6285941304719" />
<Lebihlengkap ikon="github" teks="jellanarta" />
<Lebihlengkap ikon="instagram" teks="laelanasoraya" />
<Lebihlengkap ikon="lokasi" teks="Praya, Lombok Tengah, Nusa Tenggara Barat, Indonesia" />
```

---

## 5. Tempat Kerja & Lokasi Kerja di Pengalaman Kerja
* **File:** `src/app/components/pengalamankerja.tsx`
* **Cara Mengembalikan:** Hapus komentar `{/* ... */}` pada elemen Company dan Location di dalam baris badge card (sekitar baris 46-92).
```tsx
// 1. Tempat Kerja / Company (sekitar baris 47-61):
<div className="flex items-center gap-1.5">
  <div className="w-3.5 h-3.5 opacity-60">
    <Image src={"/company.svg"} width={20} height={20} alt="Company Icon" className="object-contain dark:invert" />
  </div>
  <span className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
    {data.company}
  </span>
</div>

// 2. Lokasi Kerja / Work Location (sekitar baris 79-93):
<div className="flex items-center gap-1.5">
  <div className="w-3.5 h-3.5 opacity-60">
    <Image src={"/worklocation.svg"} width={20} height={20} alt="Location Icon" className="object-contain dark:invert" />
  </div>
  <span className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
    {data.work_location}
  </span>
</div>
```

---

## 6. Section Lokasi Google Maps
* **File:** `src/app/page.tsx`
* **Cara Mengembalikan:** Hapus komentar pada import `<Lokasimaps />` dan komponennya di kolom sebelah kanan.
```tsx
// SEBELUM:
// import Lokasimaps from "./components/lokasimaps";
{/* <Lokasimaps /> */}

// SESUDAH:
import Lokasimaps from "./components/lokasimaps";
<Lokasimaps />
```

---

## 7. Floating WhatsApp Button
* **File:** `src/app/layout.tsx`
* **Cara Mengembalikan:** Buka komentar `{/* ... */}` pada tag `<a>` Floating WhatsApp Button (sekitar baris 67-86).
```tsx
<a
  href="https://wa.me/6285941304719"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
  aria-label="Chat via WhatsApp"
>
  ...
</a>
```

---

## 8. Kontak Bisnis di Halaman Jasa Website (/jasa-web)
* **File:** `src/app/jasa-web/page.tsx`
* **Cara Mengembalikan:** Buka komentar `{/* ... */}` pada blok `Business Contact Info` (sekitar baris 263-306).
```tsx
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* WhatsApp, Email Bisnis, Alamat Kantor */}
</div>
```
