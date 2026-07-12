/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SoliBotModal } from './components/SoliBotModal';
import { BerandaPage } from './pages/BerandaPage';
import { ProfilPage } from './pages/ProfilPage';
import { JurusanPage } from './pages/JurusanPage';
import { FasilitasPage } from './pages/FasilitasPage';
import { PpdbPage } from './pages/PpdbPage';
import { BeritaPage } from './pages/BeritaPage';
import { KontakPage } from './pages/KontakPage';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('beranda');
  const [soliBotOpen, setSoliBotOpen] = useState(false);
  const [selectedMajorId, setSelectedMajorId] = useState<string>('pplg');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMajor = (majorId: string) => {
    setSelectedMajorId(majorId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#051A2D] selection:bg-[#D7FE3F] selection:text-[#051A2D]">
      
      {/* Navbar Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSoliBot={() => setSoliBotOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'beranda' && (
          <BerandaPage
            onNavigate={handleNavigate}
            onOpenSoliBot={() => setSoliBotOpen(true)}
            onSelectMajor={handleSelectMajor}
          />
        )}
        {currentPage === 'profil' && (
          <ProfilPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'jurusan' && (
          <JurusanPage
            onNavigate={handleNavigate}
            selectedMajorId={selectedMajorId}
            onSelectMajor={handleSelectMajor}
            onOpenSoliBot={() => setSoliBotOpen(true)}
          />
        )}
        {currentPage === 'fasilitas' && (
          <FasilitasPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'ppdb' && (
          <PpdbPage
            onNavigate={handleNavigate}
            preselectedMajorId={selectedMajorId}
          />
        )}
        {currentPage === 'berita' && (
          <BeritaPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'kontak' && (
          <KontakPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Floating SoliBot AI Button */}
      {!soliBotOpen && (
        <button
          onClick={() => setSoliBotOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#023E8A] hover:bg-[#00B4D7] text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-[#D7FE3F] transition-all hover:scale-105 group animate-fadeIn"
          title="Tanya AI Konsultan Jurusan"
        >
          <div className="relative">
            <Sparkles className="w-6 h-6 text-[#D7FE3F] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF5A60] rounded-full"></span>
          </div>
          <div className="hidden sm:block text-left">
            <span className="text-[10px] font-black text-[#D7FE3F] block uppercase tracking-wider">
              AI KONSULTAN 24/7
            </span>
            <span className="text-xs font-extrabold text-white">
              Tanya SoliBot
            </span>
          </div>
        </button>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* SoliBot AI Modal */}
      <SoliBotModal
        isOpen={soliBotOpen}
        onClose={() => setSoliBotOpen(false)}
        onSelectMajor={(mId) => {
          handleSelectMajor(mId);
          handleNavigate('jurusan');
        }}
      />
    </div>
  );
}

