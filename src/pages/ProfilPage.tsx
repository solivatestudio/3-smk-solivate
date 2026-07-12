import React from 'react';
import { PageType } from '../types';
import { SCHOOL_INFO, TEACHERS_DATA } from '../data/schoolData';
import { Award, CheckCircle2, ShieldCheck, Target, Compass, Users, Building, Sparkles } from 'lucide-react';

interface ProfilPageProps {
  onNavigate: (page: PageType) => void;
}

export const ProfilPage: React.FC<ProfilPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A2D] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border-b-8 border-[#023E8A] shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4D7]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="bg-[#D7FE3F] text-[#051A2D] text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
              PROFIL RESMI SEKOLAH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Mengenal Lebih Dekat <span className="text-[#00B4D7]">SMK Solivate 01</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Lembaga pendidikan kejuruan modern yang berdedikasi menghasilkan talenta unggul berkarakter Pancasila dan berdaya saing internasional di era Revolusi Industri 4.0.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN KEPALA SEKOLAH (GEORGIA EDITORIAL FONT EMPHASIS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EDF4FC] rounded-3xl p-8 sm:p-12 border border-[#00B4D7]/30 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt={SCHOOL_INFO.principal.name}
                  className="w-48 h-48 sm:w-64 sm:h-64 rounded-3xl object-cover shadow-2xl border-4 border-white mx-auto"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#023E8A] text-white px-4 py-1.5 rounded-xl shadow-lg font-extrabold text-xs text-center max-w-[180px] border border-[#D7FE3F]">
                  Kepala SMK Solivate 01
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00B4D7]" />
                <span className="font-extrabold text-sm text-[#023E8A] uppercase tracking-wider">
                  Sambutan Kepala Sekolah
                </span>
              </div>

              {/* Game Changer Font: Georgia 400 Editorial Accent */}
              <blockquote className="text-lg sm:text-2xl font-normal text-[#051A2D] leading-relaxed font-serif italic border-l-4 border-[#FF5A60] pl-5">
                {SCHOOL_INFO.principal.quote}
              </blockquote>

              <p className="text-sm sm:text-base text-[#647084] leading-relaxed">
                {SCHOOL_INFO.principal.message}
              </p>

              <div className="pt-4 border-t border-white/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-extrabold text-lg text-[#051A2D]">
                    {SCHOOL_INFO.principal.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#00B4D7]">
                    {SCHOOL_INFO.principal.title}
                  </p>
                </div>
                <div className="bg-white px-4 py-2 rounded-xl text-xs font-bold text-[#023E8A] shadow-2xs border border-[#EDF4FC]">
                  NPSN: {SCHOOL_INFO.npsn} &bull; Akreditasi: Unggul (A)
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISI & MISI DENGAN PENOMORAN CORAL PINK (#FF5A60) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Visi Card */}
          <div className="lg:col-span-5 bg-[#023E8A] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl border-4 border-[#D7FE3F]">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#D7FE3F] text-[#051A2D] flex items-center justify-center font-black">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold text-[#D7FE3F] uppercase tracking-wider block">
                Visi Sekolah 2030
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Pusat Keunggulan Teknologi & Digital Bisnis
              </h2>
              {/* Georgia Editorial accent for Vision statement */}
              <p className="text-base sm:text-lg text-white/90 font-serif italic leading-relaxed">
                "{SCHOOL_INFO.vision}"
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-3 text-xs text-[#00B4D7] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#D7FE3F]" />
              <span>Bersertifikasi ISO 9001:2015 Manajemen Mutu</span>
            </div>
          </div>

          {/* Misi 5 Poin dengan Coral Pink Highlight */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#EDF4FC] shadow-lg space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-[#023E8A] uppercase tracking-wider">
                Langkah Strategis
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051A2D]">
                Misi SMK Solivate 01
              </h2>
            </div>

            <div className="space-y-4">
              {SCHOOL_INFO.missions.map((misi, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#EDF4FC]/50 hover:bg-[#EDF4FC] transition-colors flex items-start gap-4 border border-[#EDF4FC]"
                >
                  {/* Coral Pink Point / Numbering highlight as requested in Brand Kit */}
                  <div className="w-10 h-10 rounded-xl bg-[#FF5A60] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                    {idx + 1}.
                  </div>
                  <p className="text-sm sm:text-base text-[#051A2D] font-medium leading-relaxed pt-1">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. SEJARAH SINGKAT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EDF4FC] shadow-md space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold text-[#023E8A] uppercase tracking-wider">
              Jejak Perjalanan
            </span>
            <h2 className="text-3xl font-extrabold text-[#051A2D]">
              Sejarah Berdirinya SMK Solivate 01
            </h2>
            <p className="text-[#647084] leading-relaxed">
              Didirikan oleh Yayasan Solivate Inovasi Nusantara pada tahun 2018 sebagai respon terhadap kekurangan tenaga teknis siap kerja berstandar tinggi di kawasan industri digital Jakarta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: '2018', title: 'Peresmian Kampus Solivate', desc: 'Membuka 2 jurusan perdana (RPL & TKJ) dengan 120 siswa angkatan pertama.' },
              { year: '2021', title: 'Status Center of Excellence', desc: 'Ditetapkan Kemendikbud sebagai Pusat Keunggulan Bidang Teknologi Informasi dan Komunikasi.' },
              { year: '2025', title: 'Ekspansi 6 Jurusan & AI Lab', desc: 'Menambahkan fasilitas Lab AI RTX 4090 serta kerja sama sertifikasi internasional dengan Google Cloud & Cisco.' }
            ].map((milestone, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#EDF4FC]/60 border border-[#EDF4FC] space-y-3 relative">
                <span className="text-2xl font-black text-[#FF5A60] font-sans">
                  {milestone.year}
                </span>
                <h4 className="font-extrabold text-base text-[#051A2D]">{milestone.title}</h4>
                <p className="text-xs text-[#647084] leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRUKTUR MANAJEMEN & KEPALA JURUSAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#023E8A] uppercase tracking-wider">
            Pengajar Profesional
          </span>
          <h2 className="text-3xl font-extrabold text-[#051A2D]">
            Pimpinan & Kepala Program Keahlian
          </h2>
          <p className="text-[#647084] text-sm">
            Para pendidik tersertifikasi internasional dengan latar belakang praktisi industri dan akademisi berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEACHERS_DATA.map((tch) => (
            <div
              key={tch.id}
              className="bg-white rounded-3xl p-6 border border-[#EDF4FC] shadow-md hover:shadow-xl transition-all space-y-4 text-center group"
            >
              <img
                src={tch.image}
                alt={tch.name}
                className="w-28 h-28 rounded-2xl object-cover mx-auto shadow-md group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="text-[10px] font-extrabold bg-[#EDF4FC] text-[#023E8A] px-2.5 py-1 rounded-md uppercase">
                  Jurusan {tch.department}
                </span>
                <h4 className="font-extrabold text-base text-[#051A2D] mt-2 leading-snug">
                  {tch.name}
                </h4>
                <p className="text-xs font-bold text-[#00B4D7] mt-1">{tch.title}</p>
                <p className="text-[11px] text-[#647084] mt-2 leading-relaxed">{tch.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
