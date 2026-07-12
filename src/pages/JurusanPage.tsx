import React, { useState } from 'react';
import { PageType, Major } from '../types';
import { MAJORS_DATA } from '../data/schoolData';
import { 
  Code2, ShieldCheck, Palette, TrendingUp, Clapperboard, Cpu, 
  CheckCircle2, ArrowRight, Briefcase, BookOpen, Building2, Sparkles, GraduationCap 
} from 'lucide-react';

interface JurusanPageProps {
  onNavigate: (page: PageType) => void;
  selectedMajorId?: string;
  onSelectMajor: (majorId: string) => void;
  onOpenSoliBot: () => void;
}

export const JurusanPage: React.FC<JurusanPageProps> = ({
  onNavigate,
  selectedMajorId,
  onSelectMajor,
  onOpenSoliBot
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedMajorId || MAJORS_DATA[0].id);

  const currentMajor = MAJORS_DATA.find((m) => m.id === activeTab) || MAJORS_DATA[0];

  const getMajorIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Code2': return <Code2 className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Clapperboard': return <Clapperboard className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <Code2 className={className} />;
    }
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A2D] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border-b-8 border-[#D7FE3F] shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-[#023E8A] text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider border border-[#00B4D7]/40">
              KOMPETENSI KEAHLIAN
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              6 Jurusan Unggulan <span className="text-[#D7FE3F]">Berstandar Global</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Pilih kompetensi keahlian yang sesuai dengan renjana dan bakatmu. Seluruh jurusan difasilitasi program sertifikasi internasional resmi serta magang industri langsung.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TABS JURUSAN SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-thin">
          {MAJORS_DATA.map((m, idx) => {
            const isSelected = activeTab === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setActiveTab(m.id);
                  onSelectMajor(m.id);
                }}
                className={`px-5 py-3.5 rounded-2xl font-extrabold text-sm whitespace-nowrap transition-all flex items-center gap-2.5 shrink-0 ${
                  isSelected
                    ? 'bg-[#023E8A] text-white shadow-lg scale-102 border-2 border-[#D7FE3F]'
                    : 'bg-white text-[#647084] hover:bg-[#EDF4FC] hover:text-[#051A2D] border border-[#EDF4FC]'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black ${
                    isSelected ? 'bg-[#D7FE3F] text-[#051A2D]' : 'bg-[#EDF4FC] text-[#023E8A]'
                  }`}
                >
                  {m.code}
                </span>
                <span>{m.title.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. SELECTED MAJOR DETAIL DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#EDF4FC] shadow-2xl space-y-12 relative overflow-hidden">
          
          {/* Top colored accent indicator */}
          <div
            className="absolute top-0 left-0 right-0 h-4"
            style={{ backgroundColor: currentMajor.accentColor }}
          ></div>

          {/* Header Major Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
            <div className="flex items-start gap-5">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-lg"
                style={{ backgroundColor: currentMajor.accentColor }}
              >
                {getMajorIcon(currentMajor.iconName, "w-8 h-8 sm:w-10 sm:h-10")}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-black bg-[#FF5A60] text-white px-2.5 py-1 rounded-md">
                    AKREDITASI {currentMajor.accreditation}
                  </span>
                  <span className="text-xs font-extrabold text-[#023E8A] bg-[#EDF4FC] px-3 py-1 rounded-md">
                    KODE: {currentMajor.code}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#051A2D]">
                  {currentMajor.title}
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 bg-[#EDF4FC] p-4 rounded-2xl shrink-0">
              <div>
                <span className="text-xs text-[#647084] font-semibold block">Daya Serap Industri</span>
                <span className="text-xl font-black text-[#023E8A]">{currentMajor.stats.employedRate}</span>
              </div>
              <div className="w-px h-8 bg-[#00B4D7]/30"></div>
              <div>
                <span className="text-xs text-[#647084] font-semibold block">Estimasi Gaji Lulusan</span>
                <span className="text-lg font-extrabold text-[#051A2D]">{currentMajor.stats.avgSalary}</span>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="bg-[#EDF4FC]/50 p-6 sm:p-8 rounded-2xl border border-[#EDF4FC]">
            <h3 className="font-extrabold text-base text-[#051A2D] mb-2">Gambaran Kompetensi Keahlian</h3>
            <p className="text-sm sm:text-base text-[#647084] leading-relaxed">
              {currentMajor.fullDesc}
            </p>
          </div>

          {/* 3 Columns Specs: Subjects, Careers, Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Key Subjects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#023E8A]">
                <BookOpen className="w-5 h-5" />
                <h4 className="font-extrabold text-base text-[#051A2D]">Mata Pelajaran Unggulan</h4>
              </div>
              <ul className="space-y-3">
                {currentMajor.keySubjects.map((subj, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-sm font-medium text-[#647084]">
                    <span className="w-6 h-6 rounded-lg bg-[#FF5A60]/10 text-[#FF5A60] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span>{subj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Prospects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#00B4D7]">
                <Briefcase className="w-5 h-5" />
                <h4 className="font-extrabold text-base text-[#051A2D]">Prospek Karier Lulusan</h4>
              </div>
              <ul className="space-y-3">
                {currentMajor.careerProspects.map((car, cIdx) => (
                  <li key={cIdx} className="flex items-center gap-2.5 text-sm font-bold text-[#051A2D] bg-[#EDF4FC]/70 p-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#023E8A] shrink-0" />
                    <span>{car}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner Companies */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#023E8A]">
                <Building2 className="w-5 h-5" />
                <h4 className="font-extrabold text-base text-[#051A2D]">Mitra Sertifikasi Resmi</h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {currentMajor.partnerCompanies.map((part, pIdx) => (
                  <div key={pIdx} className="p-3.5 rounded-xl bg-[#051A2D] text-white text-xs font-extrabold flex items-center justify-between border border-white/10 shadow-xs">
                    <span>{part}</span>
                    <span className="text-[10px] text-[#D7FE3F] bg-white/10 px-2 py-0.5 rounded">VERIFIED</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action Footer for this Major */}
          <div className="pt-8 border-t border-[#EDF4FC] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#EDF4FC]/40 p-6 rounded-2xl">
            <div>
              <h4 className="font-extrabold text-base text-[#051A2D]">
                Tertarik masuk jurusan {currentMajor.code}?
              </h4>
              <p className="text-xs text-[#647084]">
                Kuota pendaftaran untuk jurusan ini adalah {currentMajor.quota} siswa. Segera amankan kursimu!
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenSoliBot}
                className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-white hover:bg-[#EDF4FC] text-[#023E8A] font-extrabold text-xs transition-all border border-[#023E8A]/30 flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#00B4D7]" />
                <span>Konsultasi AI</span>
              </button>

              <button
                onClick={() => onNavigate('ppdb')}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#023E8A] hover:bg-[#012f6b] text-white font-extrabold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#D7FE3F]" />
                <span>Daftar Jurusan Ini</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
