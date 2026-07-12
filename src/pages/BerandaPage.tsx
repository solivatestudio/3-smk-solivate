import React from 'react';
import { PageType } from '../types';
import { SCHOOL_INFO, MAJORS_DATA, TESTIMONIALS } from '../data/schoolData';
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Code2, Palette, 
  TrendingUp, Clapperboard, Cpu, Award, Users, Globe, Building2,
  GraduationCap, ChevronRight, Play
} from 'lucide-react';

interface BerandaPageProps {
  onNavigate: (page: PageType) => void;
  onOpenSoliBot: () => void;
  onSelectMajor: (majorId: string) => void;
}

export const BerandaPage: React.FC<BerandaPageProps> = ({
  onNavigate,
  onOpenSoliBot,
  onSelectMajor
}) => {
  // Helper to map icon string to Lucide component
  const getMajorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Clapperboard': return <Clapperboard className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 bg-solivate-gradient text-white overflow-hidden rounded-b-[40px] shadow-2xl">
        {/* Background Ambient Circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00B4D7]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D7FE3F]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D7FE3F] animate-ping"></span>
                <span className="text-xs sm:text-sm font-extrabold text-[#D7FE3F] uppercase tracking-wider">
                  Pendaftaran SPMB Tahun Ajaran 2026/2027 Telah Dibuka
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] font-sans">
                Inkubator Talenta Digital & Kejuruan Masa Depan <br />
                <span className="text-[#D7FE3F] underline decoration-[#00B4D7] decoration-wavy decoration-2">
                  SMK Solivate 01
                </span>
              </h1>

              {/* Game Changer Font: Georgia 400 Editorial Accent */}
              <p className="text-lg sm:text-xl font-normal text-white/90 leading-relaxed font-serif italic max-w-2xl border-l-4 border-[#D7FE3F] pl-4">
                "{SCHOOL_INFO.tagline}. Mencetak generasi profesional berstandar Industri 4.0 dengan sertifikasi internasional sejak bangku sekolah."
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('ppdb')}
                  className="px-8 py-4 rounded-2xl bg-[#D7FE3F] hover:bg-[#cbf531] text-[#051A2D] font-extrabold text-base transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3 group"
                >
                  <GraduationCap className="w-5 h-5 text-[#023E8A]" />
                  <span>Daftar SPMB Online</span>
                  <ArrowRight className="w-5 h-5 text-[#023E8A] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenSoliBot}
                  className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base transition-all flex items-center justify-center gap-2.5"
                >
                  <Sparkles className="w-5 h-5 text-[#D7FE3F]" />
                  <span>Coba Tes Minat AI</span>
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs font-semibold text-white/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D7FE3F]" /> Akreditasi A (Unggul)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D7FE3F]" /> 120+ Mitra Industri Global
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D7FE3F]" /> 100% Sertifikasi Internasional
                </span>
              </div>
            </div>

            {/* Visual Hero Card Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-[#051A2D] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                    alt="Siswa SMK Solivate 01 di Lab Modern"
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051A2D] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#051A2D]/80 backdrop-blur-md border border-white/20 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-extrabold text-[#D7FE3F] uppercase tracking-wider">
                        Solivate Teaching Factory
                      </span>
                      <span className="bg-[#FF5A60] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        LIVE PROJECT
                      </span>
                    </div>
                    <p className="text-sm font-bold">
                      Siswa PPLG & Robotika berkolaborasi membangun sistem kendali otomatis IoT berstandar pabrik.
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1 */}
                <div className="absolute -top-6 -left-6 bg-white text-[#051A2D] p-4 rounded-2xl shadow-2xl border border-[#EDF4FC] hidden sm:flex items-center gap-3 animate-bounce [animation-duration:4s]">
                  <div className="w-10 h-10 rounded-xl bg-[#023E8A] text-white flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#D7FE3F]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#647084] block font-medium">Tingkat Penyerapan Kerja</span>
                    <span className="text-lg font-black text-[#023E8A]">94.8% Lulusan</span>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-6 -right-6 bg-[#051A2D] text-white p-4 rounded-2xl shadow-2xl border border-[#00B4D7]/40 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D7FE3F] text-[#051A2D] flex items-center justify-center font-black text-sm">
                    A+
                  </div>
                  <div>
                    <span className="text-xs text-[#00B4D7] block font-bold uppercase">Akreditasi BAN-SM</span>
                    <span className="text-sm font-extrabold text-white">Predikat Unggul 2024</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#EDF4FC] hover:border-[#00B4D7] transition-all hover:-translate-y-1 text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#023E8A] font-sans mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#647084] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. KOMPETENSI KEAHLIAN UNGGULAN (6 JURUSAN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#EDF4FC] text-[#023E8A] font-extrabold text-xs uppercase tracking-wider inline-block border border-[#00B4D7]/20">
              Kompetensi Keahlian
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051A2D] tracking-tight">
              6 Jurusan Unggulan <span className="text-[#023E8A]">Link & Match Industri</span>
            </h2>
            <p className="text-[#647084] text-base max-w-2xl">
              Kurikulum diselaraskan langsung dengan kebutuhan dunia kerja global, dilengkapi laboratorium spesifikasi tinggi dan pengajar tersertifikasi profesi.
            </p>
          </div>

          <button
            onClick={() => onNavigate('jurusan')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EDF4FC] hover:bg-[#023E8A] text-[#023E8A] hover:text-white font-extrabold text-sm transition-all shrink-0 self-start md:self-auto group"
          >
            <span>Lihat Semua Jurusan & Silabus</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAJORS_DATA.map((major, index) => (
            <div
              key={major.id}
              onClick={() => {
                onSelectMajor(major.id);
                onNavigate('jurusan');
              }}
              className="bg-white rounded-3xl p-8 border border-[#EDF4FC] hover:border-[#023E8A] transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-2 transition-all group-hover:h-3"
                style={{ backgroundColor: major.accentColor }}
              ></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: major.accentColor }}
                  >
                    {getMajorIcon(major.iconName)}
                  </div>

                  {/* Coral Pink point numbering or Code Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#FF5A60] bg-[#FF5A60]/10 px-2.5 py-1 rounded-lg">
                      0{index + 1}.
                    </span>
                    <span className="text-xs font-extrabold text-[#051A2D] bg-[#EDF4FC] px-3 py-1 rounded-lg">
                      {major.code}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#051A2D] group-hover:text-[#023E8A] transition-colors mb-3 leading-snug">
                    {major.title}
                  </h3>
                  <p className="text-sm text-[#647084] leading-relaxed line-clamp-3">
                    {major.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EDF4FC] space-y-2">
                  <span className="text-[11px] font-bold text-[#051A2D] uppercase tracking-wider block">
                    Mitra Sertifikasi & Magang:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {major.partnerCompanies.slice(0, 2).map((partner, pIdx) => (
                      <span key={pIdx} className="text-[11px] font-bold bg-[#EDF4FC] text-[#023E8A] px-2.5 py-1 rounded-md">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EDF4FC] flex items-center justify-between text-xs font-bold text-[#023E8A] group-hover:text-[#00B4D7]">
                <span>Rata-rata Gaji Lulusan: {major.stats.avgSalary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EDITORIAL QUOTE & PHILOSOPHY (GEORGIA FONT) */}
      <section className="bg-[#EDF4FC] py-20 border-y border-[#00B4D7]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative inline-block">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
                  alt={SCHOOL_INFO.principal.name}
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl object-cover shadow-2xl border-4 border-white mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#023E8A] text-white p-3 rounded-2xl shadow-lg font-bold text-xs">
                  Kepala Sekolah
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#023E8A] text-white font-bold text-xs uppercase tracking-wider inline-block">
                Filosofi Kepemimpinan & Visi Solivate
              </span>

              {/* Game Changer Font: Georgia 400 Editorial Accent */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#051A2D] leading-relaxed font-serif italic">
                {SCHOOL_INFO.principal.quote}
              </blockquote>

              <div className="pt-2">
                <h4 className="font-extrabold text-lg text-[#051A2D] font-sans">
                  {SCHOOL_INFO.principal.name}
                </h4>
                <p className="text-sm font-semibold text-[#00B4D7]">
                  {SCHOOL_INFO.principal.title} &bull; Tokoh Pendidik & Inovator Digital
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('profil')}
                  className="text-sm font-extrabold text-[#023E8A] hover:text-[#00B4D7] underline flex items-center gap-1.5"
                >
                  <span>Baca Sejarah & Lengkap Visi Misi Sekolah</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MITRA INDUSTRI GLOBALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xs font-black uppercase tracking-widest text-[#647084] mb-8">
          DIANDALKAN OLEH 120+ PERUSAHAAN MITRA PENYERAPAN LULUSAN & MAGANG
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {[
            'Google Cloud Academy', 'Cisco Networking', 'Adobe Creative Campus',
            'Schneider Electric', 'Shopee E-Commerce', 'Telkomsel Enterprise',
            'Tokopedia Tech', 'Unreal Engine Academic', 'AWS Academy',
            'Lintasarta Cloud', 'Fortinet Security', 'Traveloka Product'
          ].map((partner, idx) => (
            <div
              key={idx}
              className="bg-[#EDF4FC]/60 hover:bg-[#EDF4FC] p-4 rounded-2xl border border-[#EDF4FC] flex items-center justify-center h-20 transition-all group"
            >
              <span className="font-extrabold text-sm text-[#051A2D] group-hover:text-[#023E8A] transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONI ALUMNI SUKSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-[#EDF4FC] text-[#023E8A] font-extrabold text-xs uppercase">
            Bukti Nyata Lulusan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051A2D]">
            Kisah Sukses Alumni SMK Solivate 01
          </h2>
          <p className="text-[#647084] text-base">
            Dengarkan pengalaman nyata alumni kami yang kini berkarier sebagai engineer profesional, desainer di perusahaan teknologi terkemuka, dan founder startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl shadow-lg border border-[#EDF4FC] flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#EDF4FC] text-[#023E8A] flex items-center justify-center font-serif text-2xl font-bold">
                  &ldquo;
                </div>
                {/* Georgia font for quote snippet */}
                <p className="text-sm text-[#051A2D] leading-relaxed font-serif italic">
                  {t.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-[#EDF4FC] flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#023E8A]"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-[#051A2D]">{t.name}</h4>
                  <p className="text-xs font-bold text-[#023E8A]">{t.role}</p>
                  <p className="text-[11px] text-[#647084]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA BANNER PPDB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#023E8A] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border-4 border-[#D7FE3F]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4D7]/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="bg-[#FF5A60] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              KUOTA TERBATAS 360 SISWA
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Siap Bergabung Menjadi Bagian dari Talenta Digital Masa Depan?
            </h2>

            <p className="text-white/80 text-base sm:text-lg">
              Dapatkan kesempatan beasiswa bebas uang pangkal 100% untuk pendaftar gelombang prestasi digital. Tes masuk dan konsultasi minat bakat dapat dilakukan secara online!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('ppdb')}
                className="px-8 py-4 rounded-2xl bg-[#D7FE3F] hover:bg-[#cbf531] text-[#051A2D] font-black text-base transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <span>Formulir SPMB Online 2026</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('fasilitas')}
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <span>Lihat Fasilitas & Kampus Tour</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
