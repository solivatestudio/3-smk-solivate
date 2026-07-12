import React, { useState } from 'react';
import { PageType, Facility } from '../types';
import { FACILITIES_DATA } from '../data/schoolData';
import { Sparkles, CheckCircle2, ArrowRight, Monitor, Cpu, Wifi, ShieldCheck, Play, Eye } from 'lucide-react';

interface FasilitasPageProps {
  onNavigate: (page: PageType) => void;
}

export const FasilitasPage: React.FC<FasilitasPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeVirtualLab, setActiveVirtualLab] = useState<Facility | null>(null);

  const categories = ['Semua', 'Laboratorium', 'Olahraga & Seni', 'Akademik'];

  const filteredFacilities = selectedCategory === 'Semua'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter(f => f.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A2D] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border-b-8 border-[#00B4D7] shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-[#D7FE3F] text-[#051A2D] text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
              TEKNOLOGI & INFRASTRUKTUR
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Galeri & Virtual Campus <span className="text-[#00B4D7]">Lab Modern</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Seluruh fasilitas pembelajaran di SMK Solivate 01 dirancang dengan standar Teaching Factory spesifikasi tertinggi, memberi pengalaman berinteraksi dengan perangkat yang sama persis digunakan di industri kelas dunia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#023E8A] text-white shadow-md'
                  : 'bg-[#EDF4FC] text-[#647084] hover:text-[#051A2D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs font-bold text-[#647084]">
          Menampilkan {filteredFacilities.length} fasilitas utama
        </span>
      </section>

      {/* 3. FACILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((fac, idx) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EDF4FC] shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div className="relative overflow-hidden h-56 bg-[#051A2D]">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051A2D] via-transparent to-transparent opacity-80"></div>
                
                <span className="absolute top-4 left-4 bg-[#023E8A] text-white text-[11px] font-extrabold px-3 py-1 rounded-lg border border-white/20">
                  {fac.category}
                </span>

                <button
                  onClick={() => setActiveVirtualLab(fac)}
                  className="absolute bottom-4 right-4 bg-[#D7FE3F] text-[#051A2D] text-xs font-black px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 hover:scale-105 transition-transform"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Spesifikasi Lab</span>
                </button>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-[#051A2D] group-hover:text-[#023E8A] transition-colors leading-snug">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-[#647084] mt-2 leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EDF4FC] space-y-2">
                  <span className="text-[10px] font-extrabold text-[#023E8A] uppercase tracking-wider block">
                    Perangkat Unggulan:
                  </span>
                  <ul className="space-y-1.5">
                    {fac.specs.slice(0, 2).map((sp, sIdx) => (
                      <li key={sIdx} className="text-xs font-bold text-[#051A2D] flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A60] shrink-0" />
                        <span className="truncate">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL VIRTUAL LAB SPECS */}
      {activeVirtualLab && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051A2D]/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-[#EDF4FC]">
            <div className="relative h-64 bg-[#051A2D]">
              <img
                src={activeVirtualLab.image}
                alt={activeVirtualLab.title}
                className="w-full h-full object-cover opacity-90"
              />
              <button
                onClick={() => setActiveVirtualLab(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors font-bold"
              >
                &times;
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-[#D7FE3F] text-[#051A2D] text-[10px] font-black px-2.5 py-0.5 rounded uppercase">
                  {activeVirtualLab.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {activeVirtualLab.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-[#647084] leading-relaxed">
                {activeVirtualLab.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-[#051A2D] uppercase tracking-wider text-[#023E8A]">
                  Daftar Spesifikasi Perangkat & Fasilitas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeVirtualLab.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-[#EDF4FC] font-bold text-xs text-[#051A2D] flex items-center gap-2 border border-[#00B4D7]/20">
                      <CheckCircle2 className="w-4 h-4 text-[#023E8A] shrink-0" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDF4FC] flex justify-end">
                <button
                  onClick={() => {
                    setActiveVirtualLab(null);
                    onNavigate('ppdb');
                  }}
                  className="px-6 py-3 rounded-xl bg-[#023E8A] text-white font-extrabold text-xs transition-all shadow-md hover:bg-[#012f6b]"
                >
                  Daftar PPDB Sekarang & Gunakan Fasilitas Ini
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
