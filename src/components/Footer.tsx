import React from 'react';
import { PageType } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Award, ExternalLink, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handlePageClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051A2D] text-white pt-16 pb-10 border-t-4 border-[#023E8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Accreditation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#023E8A] flex items-center justify-center shadow-lg border border-[#00B4D7]/30">
                <span className="font-extrabold text-white text-2xl font-sans">
                  S<span className="text-[#D7FE3F]">01</span>
                </span>
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
                  SMK SOLIVATE <span className="bg-[#D7FE3F] text-[#051A2D] text-xs px-2 py-0.5 rounded font-black">01</span>
                </h3>
                <p className="text-xs text-[#00B4D7] font-semibold tracking-wide uppercase">
                  Vocational Excellence Center
                </p>
              </div>
            </div>

            <p className="text-sm text-[#647084] leading-relaxed">
              Sekolah Menengah Kejuruan berstandardisasi global berbasis teknologi informasi masa depan, Artificial Intelligence, dan kewirausahaan digital modern.
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#D7FE3F] shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">
                  Akreditasi Unggul (A)
                </span>
                <span className="text-[11px] text-[#647084]">
                  BAN-SM No. 892/BAN-SM/2024
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigasi Cepat */}
          <div>
            <h4 className="text-base font-extrabold text-white mb-5 flex items-center gap-2 border-l-4 border-[#D7FE3F] pl-3">
              Navigasi Cepat
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Beranda Utama', id: 'beranda' },
                { label: 'Profil & Sejarah Sekolah', id: 'profil' },
                { label: '6 Kompetensi Keahlian', id: 'jurusan' },
                { label: 'Fasilitas & Lab Industri', id: 'fasilitas' },
                { label: 'PPDB Online & Simulasi Tes AI', id: 'ppdb' },
                { label: 'Berita & Prestasi Terbaru', id: 'berita' },
                { label: 'Kontak & FAQ', id: 'kontak' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handlePageClick(item.id as PageType)}
                    className="text-[#647084] hover:text-[#D7FE3F] transition-colors flex items-center gap-2 font-medium group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#00B4D7] group-hover:translate-x-1 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Kompetensi Keahlian */}
          <div>
            <h4 className="text-base font-extrabold text-white mb-5 flex items-center gap-2 border-l-4 border-[#00B4D7] pl-3">
              Jurusan Unggulan
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { code: 'PPLG', label: 'Pengembangan Perangkat Lunak & Gim' },
                { code: 'TJKT', label: 'Teknik Jaringan & Cloud Security' },
                { code: 'DKV', label: 'Desain Komunikasi Visual UI/UX' },
                { code: 'BD', label: 'Bisnis Digital & Marketing' },
                { code: 'ANIMASI', label: 'Animasi 3D & VR Production' },
                { code: 'ORI', label: 'Otomasi & Robotika Industri' },
              ].map((m) => (
                <li key={m.code} className="flex items-center gap-2.5">
                  <span className="text-[11px] font-extrabold bg-[#023E8A] text-white px-2 py-0.5 rounded border border-white/10 shrink-0">
                    {m.code}
                  </span>
                  <button
                    onClick={() => handlePageClick('jurusan')}
                    className="text-[#647084] hover:text-white text-xs font-medium text-left transition-colors truncate"
                  >
                    {m.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak & Kampus */}
          <div className="space-y-4">
            <h4 className="text-base font-extrabold text-white mb-5 flex items-center gap-2 border-l-4 border-[#FF5A60] pl-3">
              Lokasi Kampus
            </h4>
            
            <div className="flex items-start gap-3 text-sm text-[#647084]">
              <MapPin className="w-5 h-5 text-[#FF5A60] shrink-0 mt-0.5" />
              <p className="leading-relaxed text-xs">
                {SCHOOL_INFO.address}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#647084]">
              <Phone className="w-4 h-4 text-[#D7FE3F] shrink-0" />
              <span className="text-xs font-semibold text-white">{SCHOOL_INFO.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#647084]">
              <Mail className="w-4 h-4 text-[#00B4D7] shrink-0" />
              <span className="text-xs font-semibold text-white">{SCHOOL_INFO.email}</span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handlePageClick('ppdb')}
                className="w-full py-3 px-4 rounded-xl bg-[#D7FE3F] hover:bg-[#cbf531] text-[#051A2D] font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Daftar Sekarang (PPDB 2026)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#647084]">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} SMK Solivate 01. All rights reserved.</span>
            <span className="hidden md:inline">&bull;</span>
            <span className="hidden md:inline">Solivate Studio Brand Kit Compliant</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handlePageClick('profil')} className="hover:text-[#D7FE3F] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handlePageClick('kontak')} className="hover:text-[#D7FE3F] transition-colors">
              Terms of Service
            </button>
            <span className="flex items-center gap-1 text-white/70">
              Designed with <Heart className="w-3.5 h-3.5 text-[#FF5A60] fill-[#FF5A60]" /> by Solivate Studio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
