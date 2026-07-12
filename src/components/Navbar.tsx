import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Sparkles, Menu, X, GraduationCap } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenSoliBot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenSoliBot }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'jurusan', label: 'Jurusan' },
    { id: 'fasilitas', label: 'Fasilitas Lab' },
    { id: 'ppdb', label: 'PPDB 2026' },
    { id: 'berita', label: 'Berita' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EDF4FC] h-16 sm:h-20'
          : 'bg-white border-b border-[#EDF4FC] h-20 sm:h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 cursor-pointer shrink-0 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#023E8A] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform relative">
              <span className="font-black text-white text-lg sm:text-xl tracking-tighter">
                S<span className="text-[#D7FE3F]">01</span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-lg text-[#051A2D] tracking-tight">
                  SMK SOLIVATE
                </span>
                <span className="bg-[#D7FE3F] text-[#051A2D] text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                  01
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-[#647084] tracking-tight leading-none">
                Vocational Center of Excellence
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F4F8FC] p-1.5 rounded-2xl border border-[#EDF4FC]">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const isPpdb = item.id === 'ppdb';
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all relative ${
                    isActive
                      ? 'bg-[#023E8A] text-white shadow-2xs'
                      : isPpdb
                      ? 'text-[#FF5A60] hover:bg-white font-black'
                      : 'text-[#647084] hover:text-[#051A2D] hover:bg-white'
                  }`}
                >
                  {isPpdb && !isActive && (
                    <span className="absolute -top-1 -right-0.5 w-2 h-2 bg-[#FF5A60] rounded-full animate-pulse"></span>
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenSoliBot}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#EDF4FC] hover:bg-[#D7FE3F] text-[#023E8A] hover:text-[#051A2D] font-extrabold text-xs transition-all border border-[#00B4D7]/20 shadow-2xs group"
              title="Tanya AI Konsultan Jurusan"
            >
              <Sparkles className="w-4 h-4 text-[#00B4D7] group-hover:text-[#051A2D] transition-colors" />
              <span className="hidden xl:inline">AI Konsultan</span>
            </button>

            <button
              onClick={() => handleNavClick('ppdb')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#023E8A] hover:bg-[#012f6b] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md group"
            >
              <GraduationCap className="w-4 h-4 text-[#D7FE3F]" />
              <span>DAFTAR PPDB</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSoliBot}
              className="p-2 rounded-xl bg-[#EDF4FC] text-[#023E8A] border border-[#00B4D7]/20"
              title="AI Konsultan"
            >
              <Sparkles className="w-5 h-5 text-[#00B4D7]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#EDF4FC] text-[#051A2D] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EDF4FC] px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-1 mb-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-extrabold text-sm transition-all ${
                    isActive
                      ? 'bg-[#023E8A] text-white shadow-sm'
                      : item.id === 'ppdb'
                      ? 'bg-[#FF5A60]/10 text-[#FF5A60] font-black'
                      : 'text-[#647084] hover:bg-[#EDF4FC] hover:text-[#051A2D]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'ppdb' && (
                    <span className="bg-[#FF5A60] text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                      HOT
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EDF4FC] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSoliBot();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#EDF4FC] hover:bg-[#D7FE3F] text-[#023E8A] hover:text-[#051A2D] font-extrabold text-sm flex items-center justify-center gap-2 border border-[#00B4D7]/30 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#00B4D7]" />
              <span>Tanya AI Konsultan Jurusan</span>
            </button>
            <button
              onClick={() => handleNavClick('ppdb')}
              className="w-full py-3.5 px-4 rounded-xl bg-[#023E8A] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md uppercase tracking-wider"
            >
              <GraduationCap className="w-5 h-5 text-[#D7FE3F]" />
              <span>Daftar PPDB Online 2026</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

