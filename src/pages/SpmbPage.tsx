import React, { useState } from 'react';
import { PageType, PpdbApplication, SpmbSubmission } from '../types';
import { MAJORS_DATA, SCHOOL_INFO } from '../data/schoolData';
import { 
  GraduationCap, Sparkles, CheckCircle2, ArrowRight, Printer, 
  HelpCircle, UserCheck, Award, FileText, Send, AlertCircle, RefreshCw 
} from 'lucide-react';

interface SpmbPageProps {
  onNavigate: (page: PageType) => void;
  preselectedMajorId?: string;
}

const STORAGE_KEY = 'spmb-submissions';

function loadSubmissions(): SpmbSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSubmission(sub: SpmbSubmission) {
  const list = loadSubmissions();
  list.unshift(sub);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export const SpmbPage: React.FC<SpmbPageProps> = ({ onNavigate, preselectedMajorId }) => {
  const [activeSubTab, setActiveSubTab] = useState<'form' | 'quiz'>('quiz');

  // QUIZ STATE
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [recommendedMajorId, setRecommendedMajorId] = useState<string | null>(null);

  // FORM STATE
  const [formData, setFormData] = useState<PpdbApplication>({
    fullName: '',
    nisn: '',
    gender: 'L',
    birthDate: '',
    phone: '',
    email: '',
    previousSchool: '',
    selectedMajorId: preselectedMajorId || 'pplg',
    parentName: '',
    parentPhone: ''
  });
  const [submittedApp, setSubmittedApp] = useState<SpmbSubmission | null>(null);
  const [regNumber, setRegNumber] = useState<string>('');

  const QUIZ_QUESTIONS = [
    {
      q: 'Apa aktivitas yang paling kamu sukai di waktu luang?',
      options: [
        { label: 'Mengutak-atik komputer, coding, atau bermain game strategi', major: 'pplg' },
        { label: 'Mengkonfigurasi router Wi-Fi, server, atau merakit perangkat keras', major: 'tjkt' },
        { label: 'Menggambar ilustrasi digital, mendesain poster, atau memotret foto', major: 'dkv' },
        { label: 'Berjualan online, membuat konten promosi di TikTok/Instagram', major: 'bd' },
      ]
    },
    {
      q: 'Ketika melihat sebuah produk teknologi baru, apa yang pertama kali kamu注意到?',
      options: [
        { label: 'Bagaimana cara aplikasi/software di dalamnya bekerja & algoritmannya', major: 'pplg' },
        { label: 'Tampilan antarmuka visualnya (UI/UX) dan estetika desain grafisnya', major: 'dkv' },
        { label: 'Strategi pemasarannya dan berapa keuntungan yang bisa dihasilkan', major: 'bd' },
        { label: 'Bagaimana sensor mekanis & otomatisasi elektroniknya bergerak', major: 'ori' },
      ]
    },
    {
      q: 'Apa impian kariermu 5 tahun setelah lulus sekolah nanti?',
      options: [
        { label: 'Full-Stack Software Engineer atau AI Developer di perusahaan Tech', major: 'pplg' },
        { label: 'Cybersecurity Specialist atau Cloud Systems Administrator', major: 'tjkt' },
        { label: 'Animator 3D film layar lebar atau kreator Virtual Reality game', major: 'animasi' },
        { label: 'Robotics Engineer yang mengendalikan lini produksi pabrik pintar', major: 'ori' },
      ]
    },
    {
      q: 'Dalam tugas kelompok sekolah, peran apa yang biasanya paling senang kamu ambil?',
      options: [
        { label: 'Tim pembuat produk teknis, pemrograman, & pemecah masalah logika', major: 'pplg' },
        { label: 'Tim perancang presentasi visual yang estetik dan materi grafis', major: 'dkv' },
        { label: 'Juru bicara presentasi bisnis & penyusun strategi komunikasi pasar', major: 'bd' },
        { label: 'Penanggung jawab konektivitas jaringan, perangkat alat, & server teknis', major: 'tjkt' },
      ]
    }
  ];

  const handleSelectAnswer = (majorId: string) => {
    const updated = [...quizAnswers, majorId];
    setQuizAnswers(updated);
    if (quizStep + 1 < QUIZ_QUESTIONS.length) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate best fit
      const counts: Record<string, number> = {};
      updated.forEach(m => counts[m] = (counts[m] || 0) + 1);
      let bestMajor = 'pplg';
      let maxCount = -1;
      Object.entries(counts).forEach(([mId, count]) => {
        if (count > maxCount) {
          maxCount = count;
          bestMajor = mId;
        }
      });
      setRecommendedMajorId(bestMajor);
    }
  };

  const handleRestartQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setRecommendedMajorId(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.nisn || !formData.phone) {
      alert('Mohon lengkapi Nama Lengkap, NISN, dan Nomor Telepon.');
      return;
    }
    const generatedReg = `SPMB-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const submission: SpmbSubmission = {
      ...formData,
      regNumber: generatedReg,
      submittedAt: new Date().toISOString()
    };
    saveSubmission(submission);
    setRegNumber(generatedReg);
    setSubmittedApp(submission);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#023E8A] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border-b-8 border-[#FF5A60] shadow-2xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="bg-[#D7FE3F] text-[#051A2D] text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
                SELEKSI PENERIMAAN MURID BARU
              </span>
              <span className="bg-[#FF5A60] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                TAHUN AJARAN 2026/2027
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Portal SPMB Online & <span className="text-[#D7FE3F]">Simulasi Tes Minat AI</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Ikuti tes singkat rekomendasi jurusan cerdas untuk mengetahui potensi bakatmu, lalu daftarkan dirimu secara online dalam waktu kurang dari 3 menit.
            </p>
          </div>
        </div>
      </section>

      {/* SUB TAB SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex rounded-2xl bg-[#EDF4FC] p-1.5 max-w-xl mx-auto border border-[#00B4D7]/20">
          <button
            onClick={() => setActiveSubTab('quiz')}
            className={`flex-1 py-3.5 px-6 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 ${
              activeSubTab === 'quiz'
                ? 'bg-[#023E8A] text-white shadow-md'
                : 'text-[#647084] hover:text-[#051A2D]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#D7FE3F]" />
            <span>1. Simulasi Tes Minat Jurusan</span>
          </button>

          <button
            onClick={() => setActiveSubTab('form')}
            className={`flex-1 py-3.5 px-6 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 ${
              activeSubTab === 'form'
                ? 'bg-[#023E8A] text-white shadow-md'
                : 'text-[#647084] hover:text-[#051A2D]'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#D7FE3F]" />
            <span>2. Formulir SPMB Online</span>
          </button>
        </div>
      </section>

      {/* SUB TAB 1: SIMULASI TES MINAT BAKAT JURUSAN */}
      {activeSubTab === 'quiz' && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#EDF4FC] shadow-2xl relative">
            
            {!recommendedMajorId ? (
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-[#EDF4FC] pb-4">
                  <div>
                    <span className="text-xs font-black text-[#023E8A] uppercase tracking-wider block">
                      Kuesioner Minat & Bakat
                    </span>
                    <h3 className="text-xl font-extrabold text-[#051A2D]">
                      Pertanyaan {quizStep + 1} dari {QUIZ_QUESTIONS.length}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF4FC] text-[#023E8A] font-black text-sm flex items-center justify-center">
                    {Math.round(((quizStep + 1) / QUIZ_QUESTIONS.length) * 100)}%
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-extrabold text-[#051A2D] leading-snug">
                  {QUIZ_QUESTIONS[quizStep].q}
                </h4>

                <div className="space-y-3.5">
                  {QUIZ_QUESTIONS[quizStep].options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectAnswer(opt.major)}
                      className="w-full text-left p-5 rounded-2xl bg-[#EDF4FC]/60 hover:bg-[#023E8A] text-[#051A2D] hover:text-white font-bold text-sm sm:text-base transition-all border border-[#EDF4FC] hover:border-[#023E8A] shadow-xs flex items-center justify-between group"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight className="w-5 h-5 text-[#00B4D7] group-hover:text-[#D7FE3F] shrink-0 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-8 py-4 animate-fadeIn">
                <div className="w-20 h-20 rounded-3xl bg-[#D7FE3F] text-[#051A2D] flex items-center justify-center mx-auto shadow-lg">
                  <Sparkles className="w-10 h-10 animate-bounce" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-extrabold text-[#FF5A60] uppercase tracking-widest bg-[#FF5A60]/10 px-3 py-1 rounded-full">
                    REKOMENDASI AI JURUSAN TERBAIKMU
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#051A2D]">
                    {MAJORS_DATA.find(m => m.id === recommendedMajorId)?.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#647084] max-w-lg mx-auto leading-relaxed">
                    Berdasarkan analisis preferensi logis dan kreativitasmu, kamu memiliki potensi luar biasa di bidang ini dengan tingkat kesuksesan karier tinggi!
                  </p>
                </div>

                <div className="bg-[#EDF4FC] p-6 rounded-2xl border border-[#00B4D7]/30 text-left max-w-lg mx-auto space-y-2">
                  <span className="text-xs font-black text-[#023E8A] uppercase">Keunggulan Jurusan Ini:</span>
                  <p className="text-xs text-[#051A2D] font-medium leading-relaxed">
                    {MAJORS_DATA.find(m => m.id === recommendedMajorId)?.shortDesc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, selectedMajorId: recommendedMajorId }));
                      setActiveSubTab('form');
                    }}
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#023E8A] hover:bg-[#012f6b] text-white font-black text-sm uppercase tracking-wide transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Lanjut Daftar Jurusan Ini</span>
                    <ArrowRight className="w-4 h-4 text-[#D7FE3F]" />
                  </button>

                  <button
                    onClick={handleRestartQuiz}
                    className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#EDF4FC] text-[#023E8A] font-extrabold text-sm hover:bg-[#00B4D7]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Ulangi Tes Minat</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* SUB TAB 2: FORMULIR SPMB ONLINE */}
      {activeSubTab === 'form' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {!submittedApp ? (
            <div className="bg-white rounded-3xl p-8 sm:p-14 border-2 border-[#EDF4FC] shadow-2xl space-y-8">
              <div className="border-b border-[#EDF4FC] pb-6 space-y-2">
                <span className="text-xs font-black text-[#FF5A60] uppercase tracking-wider">
                  LANGKAH PENDAFTARAN RESMI
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051A2D]">
                  Formulir Pendaftaran Siswa Baru 2026
                </h2>
                <p className="text-sm text-[#647084]">
                  Isi data diri calon siswa dengan benar sesuai Ijazah/Rapor SMP untuk penerbitan nomor ujian seleksi.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-8">
                
                {/* Pilihan Jurusan */}
                <div className="bg-[#EDF4FC]/60 p-6 rounded-2xl border border-[#00B4D7]/20 space-y-3">
                  <label className="block text-xs font-extrabold text-[#023E8A] uppercase tracking-wider">
                    Pilihan Kompetensi Keahlian Utama *
                  </label>
                  <select
                    value={formData.selectedMajorId}
                    onChange={(e) => setFormData({ ...formData, selectedMajorId: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#EDF4FC] font-extrabold text-sm text-[#051A2D] focus:outline-none focus:border-[#023E8A] shadow-xs"
                    required
                  >
                    {MAJORS_DATA.map(m => (
                      <option key={m.id} value={m.id}>
                        {m.code} - {m.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Data Calon Siswa */}
                <div className="space-y-6">
                  <h3 className="text-base font-extrabold text-[#051A2D] border-l-4 border-[#023E8A] pl-3">
                    A. Data Identitas Calon Siswa
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#647084]">Nama Lengkap Siswa *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Contoh: Muhammad Reyhan"
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#647084]">NISN (Nomor Induk Siswa Nasional) *</label>
                      <input
                        type="text"
                        value={formData.nisn}
                        onChange={e => setFormData({ ...formData, nisn: e.target.value })}
                        placeholder="10 Digit Angka NISN"
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#647084]">Jenis Kelamin *</label>
                      <select
                        value={formData.gender}
                        onChange={e => setFormData({ ...formData, gender: e.target.value as 'L' | 'P' })}
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                      >
                        <option value="L">Laki-laki</option>
                        <option value="P">Perempuan</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#647084]">Tanggal Lahir</label>
                      <input
                        type="date"
                        value={formData.birthDate}
                        onChange={e => setFormData({ ...formData, birthDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#647084]">Nomor WhatsApp / HP Calon Siswa *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0812-xxxx-xxxx"
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#647084]">Asal Sekolah (SMP/MTs) *</label>
                      <input
                        type="text"
                        value={formData.previousSchool}
                        onChange={e => setFormData({ ...formData, previousSchool: e.target.value })}
                        placeholder="Contoh: SMP Negeri 1 Jakarta"
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Data Orang Tua */}
                <div className="space-y-6 pt-4 border-t border-[#EDF4FC]">
                  <h3 className="text-base font-extrabold text-[#051A2D] border-l-4 border-[#00B4D7] pl-3">
                    B. Data Orang Tua / Wali
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#647084]">Nama Orang Tua / Wali *</label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="Nama Ayah/Ibu/Wali"
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#647084]">Nomor HP Orang Tua / Wali *</label>
                      <input
                        type="tel"
                        value={formData.parentPhone}
                        onChange={e => setFormData({ ...formData, parentPhone: e.target.value })}
                        placeholder="0813-xxxx-xxxx"
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:bg-white focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#EDF4FC]">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#D7FE3F] hover:bg-[#cbf531] text-[#051A2D] font-black text-base uppercase tracking-wider transition-all shadow-xl hover:scale-101 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 text-[#023E8A]" />
                    <span>Kirim Pendaftaran & Cetak Bukti SPMB</span>
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* PRINTABLE DIGITAL RECEIPT */
            <div className="bg-white rounded-3xl p-8 sm:p-14 border-4 border-[#023E8A] shadow-2xl space-y-8 animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-dashed border-[#EDF4FC] pb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#023E8A] flex items-center justify-center text-white font-extrabold text-xl">
                    S<span className="text-[#D7FE3F]">01</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl text-[#051A2D]">SMK SOLIVATE 01</h3>
                    <p className="text-xs font-bold text-[#00B4D7]">BUKTI REGISTRASI SPMB ONLINE 2026/2027</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#647084] block">STATUS PENDAFTARAN</span>
                  <span className="bg-[#D7FE3F] text-[#051A2D] text-xs font-black px-3 py-1 rounded">
                    TERVERIFIKASI SISTEM
                  </span>
                </div>
              </div>

              <div className="bg-[#EDF4FC] p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#647084]">NOMOR PENDAFTARAN:</span>
                  <span className="text-lg font-black text-[#023E8A] font-mono">{regNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#647084]">JURUSAN DIPILIH:</span>
                  <span className="text-sm font-extrabold text-[#051A2D]">
                    {MAJORS_DATA.find(m => m.id === submittedApp.selectedMajorId)?.title}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-xs text-[#647084] font-bold block">Nama Calon Siswa:</span>
                  <span className="font-extrabold text-[#051A2D]">{submittedApp.fullName}</span>
                </div>
                <div>
                  <span className="text-xs text-[#647084] font-bold block">NISN:</span>
                  <span className="font-extrabold text-[#051A2D]">{submittedApp.nisn}</span>
                </div>
                <div>
                  <span className="text-xs text-[#647084] font-bold block">Asal Sekolah:</span>
                  <span className="font-extrabold text-[#051A2D]">{submittedApp.previousSchool}</span>
                </div>
                <div>
                  <span className="text-xs text-[#647084] font-bold block">WhatsApp Kontak:</span>
                  <span className="font-extrabold text-[#051A2D]">{submittedApp.phone}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  Selamat! Data Anda telah masuk ke dalam sistem panitia SPMB SMK Solivate 01. Silakan simpan nomor pendaftaran ini untuk jadwal tes wawancara dan verifikasi rapor.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EDF4FC]">
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#023E8A] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-[#012f6b]"
                >
                  <Printer className="w-4 h-4 text-[#D7FE3F]" />
                  <span>Cetak / Simpan PDF Bukti Pendaftaran</span>
                </button>

                <button
                  onClick={() => setSubmittedApp(null)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#EDF4FC] text-[#023E8A] font-bold text-xs hover:bg-[#00B4D7]/20"
                >
                  Daftar Siswa Lainnya
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
