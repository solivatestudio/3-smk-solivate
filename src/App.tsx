/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SoliBotModal } from './components/SoliBotModal';
import { BerandaPage } from './pages/BerandaPage';
import { ProfilPage } from './pages/ProfilPage';
import { JurusanPage } from './pages/JurusanPage';
import { FasilitasPage } from './pages/FasilitasPage';
import { SpmbPage } from './pages/SpmbPage';
import { BeritaPage } from './pages/BeritaPage';
import { KontakPage } from './pages/KontakPage';
import { DashboardPage } from './pages/DashboardPage';
import { Sparkles, MessageSquare, Lock, ShieldAlert } from 'lucide-react';

const ADMIN_PIN = 'solivate2026';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('beranda');
  const [soliBotOpen, setSoliBotOpen] = useState(false);
  const [selectedMajorId, setSelectedMajorId] = useState<string>('pplg');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState('');
  const [adminPinError, setAdminPinError] = useState('');
  const [adminPinOpen, setAdminPinOpen] = useState(false);

  // Restore page from URL hash on mount & handle back/forward
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as PageType;
    const validPages: PageType[] = ['beranda', 'profil', 'jurusan', 'fasilitas', 'ppdb', 'berita', 'kontak', 'dashboard'];
    if (hash && validPages.includes(hash)) {
      if (hash === 'dashboard') {
        // Trigger PIN modal instead of auto-navigating
        setAdminPinOpen(true);
      } else {
        setCurrentPage(hash);
      }
    }
    const handlePopState = () => {
      const page = (window.location.hash.replace('#', '') || 'beranda') as PageType;
      if (validPages.includes(page)) {
        if (page === 'dashboard') {
          setIsAdminAuthenticated(false);
          setAdminPinOpen(true);
        } else {
          setCurrentPage(page);
          window.scrollTo({ top: 0 });
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageType) => {
    if (page === 'dashboard' && !isAdminAuthenticated) {
      setAdminPinOpen(true);
      return;
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMajor = (majorId: string) => {
    setSelectedMajorId(majorId);
  };

  const handleAdminLogin = () => {
    if (adminPinInput === ADMIN_PIN) {
      setIsAdminAuthenticated(true);
      setAdminPinOpen(false);
      setAdminPinInput('');
      setAdminPinError('');
      setCurrentPage('dashboard');
      window.location.hash = 'dashboard';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setAdminPinError('PIN salah. Coba lagi.');
      setAdminPinInput('');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentPage('beranda');
    window.location.hash = 'beranda';
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
          <SpmbPage
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
        {currentPage === 'dashboard' && isAdminAuthenticated && (
          <DashboardPage onLogout={handleAdminLogout} />
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

      {/* Admin PIN Modal */}
      {adminPinOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setAdminPinOpen(false)}>
          <div
            className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl space-y-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-[#051A2D] flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-[#D7FE3F]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#051A2D]">Admin Dashboard</h3>
              <p className="text-sm text-[#647084]">Masukkan PIN admin untuk mengakses dashboard SPMB.</p>
            </div>

            <div className="space-y-3">
              <input
                type="password"
                value={adminPinInput}
                onChange={e => { setAdminPinInput(e.target.value); setAdminPinError(''); }}
                onKeyDown={e => e.key === 'Enter' && handleAdminLogin()}
                placeholder="Masukkan PIN..."
                className="w-full px-4 py-3.5 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:border-[#023E8A] text-sm font-semibold text-center tracking-widest focus:outline-none"
                autoFocus
              />
              {adminPinError && (
                <p className="text-xs font-bold text-[#FF5A60] flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {adminPinError}
                </p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { setAdminPinOpen(false); setAdminPinInput(''); setAdminPinError(''); }}
                className="flex-1 py-3.5 rounded-xl bg-[#EDF4FC] text-[#647084] font-extrabold text-sm"
              >
                Batal
              </button>
              <button
                onClick={handleAdminLogin}
                className="flex-1 py-3.5 rounded-xl bg-[#023E8A] hover:bg-[#012f6b] text-white font-extrabold text-sm"
              >
                Masuk Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

