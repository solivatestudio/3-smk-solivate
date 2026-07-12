import React, { useState } from 'react';
import { PageType } from '../types';
import { SCHOOL_INFO, FAQS_DATA } from '../data/schoolData';
import { MapPin, Phone, Mail, MessageSquare, Send, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

interface KontakPageProps {
  onNavigate: (page: PageType) => void;
}

export const KontakPage: React.FC<KontakPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    emailOrPhone: '',
    category: 'Pertanyaan PPDB',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;
    setFormSent(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A2D] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border-b-8 border-[#FF5A60] shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-[#D7FE3F] text-[#051A2D] text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
              HUBUNGI KAMI
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Layanan Informasi & <span className="text-[#00B4D7]">Pengaduan Sekolah</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Kami siap merespons pertanyaan calon siswa, orang tua, maupun penawaran kerja sama mitra industri setiap hari kerja pukul 07:30 - 16:00 WIB.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CHANNELS & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info & Map Preview */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-[#023E8A] uppercase tracking-wider">
                Kontak Lengkap
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051A2D]">
                Kantor Pusat & Kampus Solivate
              </h2>
            </div>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#EDF4FC] border border-[#00B4D7]/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#023E8A] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF5A60]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#051A2D]">Alamat Kampus</h4>
                  <p className="text-xs text-[#647084] mt-1 leading-relaxed">{SCHOOL_INFO.address}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#EDF4FC] border border-[#00B4D7]/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#023E8A] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#D7FE3F]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#051A2D]">Telepon & WhatsApp Admisi</h4>
                  <p className="text-xs text-[#051A2D] font-bold mt-1">{SCHOOL_INFO.phone}</p>
                  <p className="text-xs text-[#00B4D7] font-semibold">{SCHOOL_INFO.whatsapp} (Fast Response PPDB)</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#EDF4FC] border border-[#00B4D7]/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#023E8A] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#00B4D7]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#051A2D]">Email Resmi</h4>
                  <p className="text-xs text-[#051A2D] font-bold mt-1">{SCHOOL_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Simulated Map Visual */}
            <div className="rounded-2xl overflow-hidden border-2 border-[#EDF4FC] shadow-md bg-[#051A2D] p-6 text-white text-center space-y-3 relative">
              <div className="absolute inset-0 bg-[radial-gradient(#00B4D7_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
              <MapPin className="w-8 h-8 text-[#FF5A60] mx-auto animate-bounce" />
              <h4 className="font-extrabold text-base">SCBD Innovation District</h4>
              <p className="text-xs text-white/70 max-w-xs mx-auto">
                Akses mudah berjarak 5 menit dari stasiun MRT & Halte TransJakarta Sudirman.
              </p>
            </div>
          </div>

          {/* Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#EDF4FC] shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black text-[#FF5A60] uppercase tracking-wider">
                LAYANAN PESAN ONLINE
              </span>
              <h2 className="text-2xl font-extrabold text-[#051A2D]">
                Kirim Pertanyaan / Pengaduan
              </h2>
            </div>

            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#647084]">Nama Anda *</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Nama Lengkap"
                      className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC] border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#647084]">Email atau Nomor WhatsApp *</label>
                    <input
                      type="text"
                      value={contactForm.emailOrPhone}
                      onChange={e => setContactForm({ ...contactForm, emailOrPhone: e.target.value })}
                      placeholder="0812xxxx / email@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC] border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#647084]">Kategori Pesan</label>
                  <select
                    value={contactForm.category}
                    onChange={e => setContactForm({ ...contactForm, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC] border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-bold text-[#051A2D] focus:outline-none"
                  >
                    <option value="Pertanyaan PPDB">Pertanyaan PPDB & Beasiswa</option>
                    <option value="Info Jurusan">Konsultasi Kurikulum & Jurusan</option>
                    <option value="Kerja Sama Industri">Tawaran Kerja Sama Industri / Magang</option>
                    <option value="Kritik & Saran">Kritik, Saran, & Pengaduan</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#647084]">Isi Pesan Anda *</label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda ketahui..."
                    className="w-full p-4 rounded-xl bg-[#EDF4FC] border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-medium text-[#051A2D] focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#023E8A] hover:bg-[#012f6b] text-white font-extrabold text-sm uppercase tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#D7FE3F]" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 bg-[#EDF4FC] rounded-2xl space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#023E8A] mx-auto" />
                <h3 className="text-xl font-extrabold text-[#051A2D]">Pesan Anda Berhasil Terkirim!</h3>
                <p className="text-xs text-[#647084] max-w-md mx-auto">
                  Terima kasih atas partisipasi Anda. Tim Humas & Admisi SMK Solivate 01 akan merespons pesan Anda melalui WhatsApp atau Email dalam waktu maksimal 2x24 jam.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setContactForm({ name: '', emailOrPhone: '', category: 'Pertanyaan PPDB', message: '' });
                  }}
                  className="px-6 py-2 rounded-xl bg-[#023E8A] text-white font-bold text-xs"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-[#023E8A] uppercase tracking-wider">
            PERTANYAAN SERING DIAJUKAN (FAQ)
          </span>
          <h2 className="text-3xl font-extrabold text-[#051A2D]">
            Temukan Jawaban Cepat di Sini
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EDF4FC] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base text-[#051A2D] hover:bg-[#EDF4FC]/40 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#00B4D7] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#023E8A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#647084] leading-relaxed border-t border-[#EDF4FC]/60 bg-[#EDF4FC]/20 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
