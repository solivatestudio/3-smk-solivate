# SMK Solivate 01

> Website profil sekolah menengah kejuruan modern berbasis **React 19 + TypeScript + Vite + Tailwind CSS v4**, dilengkapi asisten AI dan portal PPDB interaktif.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)

---

## ✨ Fitur Utama

| Fitur | Keterangan |
|-------|------------|
| **🏠 7 Halaman Lengkap** | Beranda, Profil, Jurusan, Fasilitas, PPDB, Berita, Kontak |
| **🤖 SoliBot AI** | Chatbot konsultasi jurusan berbasis Google Gemini 2.5 Flash |
| **📝 SPMB Online** | Seleksi & formulir pendaftaran siswa baru dengan bukti digital |
| **📊 Dashboard Admin** | Panel admin dengan statistik pendaftar, tabel, filter & export CSV |
| **🎯 Tes Minat AI** | Quiz 4 pertanyaan → rekomendasi jurusan otomatis |
| **📱 Responsif** | Mobile-first dengan navigasi drawer & scroll-aware navbar |
| **🎨 Animasi** | Transisi halus dengan library Motion |

## 🧭 Halaman

| Halaman | Path | Deskripsi |
|---------|------|-----------|
| **Beranda** | `/beranda` | Hero, statistik, jurusan unggulan, testimoni, mitra industri |
| **Profil** | `/profil` | Sambutan kepala sekolah, visi-misi, sejarah, tim pengajar |
| **Jurusan** | `/jurusan` | 6 jurusan dengan detail lengkap (kurikulum, prospek, mitra) |
| **Fasilitas** | `/fasilitas` | Galeri fasilitas dengan filter kategori & detail modal |
| **SPMB** | `/ppdb` | Seleksi penerimaan siswa baru + tes minat AI + formulir |
| **Dashboard** | `/dashboard` | Panel admin (statistik, tabel, filter, export CSV) |
| **Berita** | `/berita` | Artikel berita dengan filter & pencarian |
| **Kontak** | `/kontak` | Info kontak, form pesan, FAQ accordion |

## 🎓 6 Jurusan Unggulan

| Jurusan | Kode | Fokus Utama |
|---------|------|-------------|
| **PPLG** | 🖥️ | Pengembangan Perangkat Lunak & Game (AI & Cloud) |
| **TJKT** | 🌐 | Teknik Jaringan Komputer & Keamanan Siber |
| **DKV** | 🎨 | Desain Komunikasi Visual & UI/UX |
| **BD** | 📊 | Bisnis Digital & Marketing |
| **ANIMASI** | 🎬 | Animasi 3D & Produksi VR |
| **ORI** | 🤖 | Otomasi Industri & Robotika |

## 🏗️ Arsitektur Proyek

```
smk-solivate-01/
├── index.html                 # Entry HTML dengan Google Fonts
├── package.json               # Dependensi & scripts
├── vite.config.ts             # Konfigurasi Vite
├── tsconfig.json              # Konfigurasi TypeScript
├── src/
│   ├── main.tsx               # Entry point React
│   ├── App.tsx                # Root component (routing SPA)
│   ├── index.css              # Tailwind v4 + brand theme
│   ├── types.ts               # Tipe TypeScript
│   ├── data/
│   │   └── schoolData.ts      # Semua data sekolah (331 baris)
│   ├── components/
│   │   ├── Navbar.tsx         # Navigasi utama
│   │   ├── Footer.tsx         # Footer 4 kolom
│   │   └── SoliBotModal.tsx   # Chatbot AI
│   └── pages/
│       ├── BerandaPage.tsx    # Halaman utama (430 baris)
│       ├── ProfilPage.tsx     # Profil sekolah
│       ├── JurusanPage.tsx    # Detail jurusan
│       ├── FasilitasPage.tsx  # Fasilitas sekolah
│       ├── PpdbPage.tsx       # Portal PPDB (506 baris)
│       ├── BeritaPage.tsx     # Berita & artikel
│       └── KontakPage.tsx     # Kontak & FAQ
```

## 🚀 Mulai Cepat

```bash
# Install dependensi
npm install

# Jalankan dev server
npm run dev

# Build produksi
npm run build

# Preview build
npm run preview
```

Dev server berjalan di **http://localhost:3000**.

## 🛠️ Stack Teknologi

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| [React](https://react.dev) | ^19.0.1 | UI framework |
| [TypeScript](https://www.typescriptlang.org) | ~5.8.2 | Type safety |
| [Vite](https://vitejs.dev) | ^6.2.3 | Build tool |
| [Tailwind CSS](https://tailwindcss.com) | ^4.1.14 | Utility CSS |
| [Motion](https://motion.dev) | ^12.23.24 | Animasi |
| [Lucide React](https://lucide.dev) | ^0.546.0 | Ikon |
| [Google Gen AI](https://ai.google.dev) | ^2.4.0 | Gemini API |
| [Express](https://expressjs.com) | ^4.21.2 | Server deployment |

## 🎨 Brand Identity

| Token | Value | Penggunaan |
|-------|-------|------------|
| `--color-cobalt` | `#023E8A` | Warna utama / primary |
| `--color-yellowy` | `#D7FE3F` | Aksen kuning |
| `--color-turquoise` | `#00B4D7` | Aksen toska |
| `--color-coral` | `#FF5A60` | Aksen koral |
| **Font** | Plus Jakarta Sans | Headings |
| **Font** | Georgia | Kutipan editorial |

## 🔧 Scripts

| Script | Perintah |
|--------|----------|
| `npm run dev` | Dev server port 3000 |
| `npm run build` | Build produksi |
| `npm run preview` | Preview build |
| `npm run lint` | Type check (tsc --noEmit) |
| `npm run clean` | Hapus build artifacts |

## 🌐 Deployment

Proyek ini dideploy melalui **Google AI Studio** dengan server-side Gemini API.

## 👥 Tim Pengembang

- **Solivate Studio** — Pengembang & desainer
- **Hammad (hmad28)** — Co-developer & kontributor

---

<p align="center">Dibuat dengan ❤️ oleh <strong>Solivate Studio</strong> untuk SMK Solivate 01</p>
