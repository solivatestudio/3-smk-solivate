import React, { useState, useMemo } from 'react';
import { SpmbSubmission } from '../types';
import { MAJORS_DATA } from '../data/schoolData';
import {
  Users, GraduationCap, BarChart3, Search, X, Shield,
  Download, Eye, Lock, AlertTriangle, LogOut
} from 'lucide-react';

interface DashboardPageProps {
  onLogout: () => void;
}

function loadData(): SpmbSubmission[] {
  try {
    const raw = localStorage.getItem('spmb-submissions');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

function getMajorTitle(id: string) {
  return MAJORS_DATA.find(m => m.id === id)?.title ?? id.toUpperCase();
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout }) => {
  const [data, setData] = useState<SpmbSubmission[]>(loadData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMajor, setFilterMajor] = useState<string>('all');
  const [selected, setSelected] = useState<SpmbSubmission | null>(null);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  // Refresh button
  const handleRefresh = () => setData(loadData());

  // Filtered & searched data
  const filtered = useMemo(() => {
    return data.filter(d => {
      const matchSearch = searchQuery === '' ||
        d.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.nisn.includes(searchQuery) ||
        d.regNumber.includes(searchQuery.toUpperCase());
      const matchMajor = filterMajor === 'all' || d.selectedMajorId === filterMajor;
      return matchSearch && matchMajor;
    });
  }, [data, searchQuery, filterMajor]);

  // Stats
  const stats = useMemo(() => {
    const total = data.length;
    const perMajor: Record<string, number> = {};
    const perGender = { L: 0, P: 0 };
    data.forEach(d => {
      perMajor[d.selectedMajorId] = (perMajor[d.selectedMajorId] || 0) + 1;
      if (d.gender === 'L' || d.gender === 'P') perGender[d.gender]++;
    });
    return { total, perMajor, perGender };
  }, [data]);

  // Export CSV
  const handleExport = () => {
    const headers = ['No.Registrasi', 'Nama', 'NISN', 'Gender', 'Jurusan', 'Asal Sekolah', 'Tgl Daftar'];
    const rows = data.map(d => [
      d.regNumber, d.fullName, d.nisn, d.gender === 'L' ? 'Laki-laki' : 'Perempuan',
      getMajorTitle(d.selectedMajorId), d.previousSchool, formatDate(d.submittedAt)
    ]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `spmb-data-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-28 pb-20 space-y-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A2D] rounded-3xl p-8 sm:p-10 text-white shadow-2xl border-b-8 border-[#D7FE3F]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#D7FE3F]" />
                <span className="text-xs font-black text-[#D7FE3F] uppercase tracking-wider">Panel Admin</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold">Dashboard SPMB 2026/2027</h1>
              <p className="text-sm text-white/60">Data pendaftar Seleksi Penerimaan Murid Baru SMK Solivate 01</p>
            </div>
            <button
              onClick={onLogout}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#FF5A60] border border-white/20 text-white font-extrabold text-xs transition-all flex items-center gap-2 self-start"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout Admin</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stat Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#EDF4FC] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#023E8A]/10 text-[#023E8A] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-3xl font-black text-[#051A2D]">{stats.total}</span>
            <span className="text-xs font-bold text-[#647084] block">Total Pendaftar</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#EDF4FC] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#00B4D7]/10 text-[#00B4D7] flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <span className="text-3xl font-black text-[#051A2D]">{Object.keys(stats.perMajor).length}</span>
            <span className="text-xs font-bold text-[#647084] block">Jurusan Terisi</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#EDF4FC] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#00B4D7]/10 text-[#023E8A] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-3xl font-black text-[#051A2D]">{stats.perGender.L}</span>
            <span className="text-xs font-bold text-[#647084] block">Laki-laki</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#EDF4FC] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FF5A60]/10 text-[#FF5A60] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-3xl font-black text-[#051A2D]">{stats.perGender.P}</span>
            <span className="text-xs font-bold text-[#647084] block">Perempuan</span>
          </div>
        </div>
      </section>

      {/* Per Major Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#EDF4FC] space-y-5">
          <h3 className="font-extrabold text-lg text-[#051A2D]">Statistik per Jurusan</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {MAJORS_DATA.map(m => {
              const count = stats.perMajor[m.id] || 0;
              const counts: number[] = Object.values(stats.perMajor);
              const maxCount = Math.max(1, ...counts);
              const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;
              return (
                <div key={m.id} className="bg-[#EDF4FC]/60 rounded-xl p-4 space-y-2 border border-[#EDF4FC]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#023E8A]">{m.code}</span>
                    <span className="text-lg font-black text-[#051A2D]">{count}</span>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, backgroundColor: m.accentColor }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-bold text-[#647084] block truncate">{m.title.split('(')[0].trim()}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search & Filter + Actions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#EDF4FC] space-y-6">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="flex flex-1 gap-3 flex-wrap">
              {/* Search */}
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#647084]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Cari nama, NISN, atau No. Registrasi..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] focus:border-[#023E8A] text-sm font-semibold text-[#051A2D] focus:outline-none"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                    <X className="w-4 h-4 text-[#647084]" />
                  </button>
                )}
              </div>

              {/* Filter Major */}
              <select
                value={filterMajor}
                onChange={e => setFilterMajor(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-[#EDF4FC]/50 border border-[#EDF4FC] text-sm font-extrabold text-[#051A2D] focus:outline-none focus:border-[#023E8A]"
              >
                <option value="all">Semua Jurusan</option>
                {MAJORS_DATA.map(m => (
                  <option key={m.id} value={m.id}>{m.code} - {m.title}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                className="px-4 py-2.5 rounded-xl bg-[#EDF4FC] hover:bg-[#023E8A] hover:text-white text-[#023E8A] font-extrabold text-xs transition-all"
              >
                ↻ Refresh
              </button>
              <button
                onClick={handleExport}
                disabled={data.length === 0}
                className="px-4 py-2.5 rounded-xl bg-[#023E8A] hover:bg-[#012f6b] text-white font-extrabold text-xs transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Tabel */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Users className="w-12 h-12 text-[#647084] mx-auto opacity-40" />
              <p className="text-sm font-bold text-[#647084]">
                {data.length === 0 ? 'Belum ada data pendaftar SPMB.' : 'Tidak ditemukan pendaftar dengan kata kunci tersebut.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#EDF4FC] text-left">
                    <th className="pb-3 px-2 text-[10px] font-black text-[#647084] uppercase tracking-wider">No.</th>
                    <th className="pb-3 px-2 text-[10px] font-black text-[#647084] uppercase tracking-wider">No. Registrasi</th>
                    <th className="pb-3 px-2 text-[10px] font-black text-[#647084] uppercase tracking-wider">Nama</th>
                    <th className="pb-3 px-2 text-[10px] font-black text-[#647084] uppercase tracking-wider hidden sm:table-cell">NISN</th>
                    <th className="pb-3 px-2 text-[10px] font-black text-[#647084] uppercase tracking-wider hidden md:table-cell">Jurusan</th>
                    <th className="pb-3 px-2 text-[10px] font-black text-[#647084] uppercase tracking-wider hidden lg:table-cell">Tgl Daftar</th>
                    <th className="pb-3 px-2 text-[10px] font-black text-[#647084] uppercase tracking-wider">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((d, idx) => (
                    <tr key={d.regNumber} className="border-b border-[#EDF4FC]/70 hover:bg-[#EDF4FC]/30 transition-colors">
                      <td className="py-3.5 px-2 text-xs font-bold text-[#647084]">{idx + 1}</td>
                      <td className="py-3.5 px-2 font-mono text-xs font-bold text-[#023E8A]">{d.regNumber}</td>
                      <td className="py-3.5 px-2 font-extrabold text-[#051A2D]">{d.fullName}</td>
                      <td className="py-3.5 px-2 text-xs font-semibold text-[#647084] hidden sm:table-cell">{d.nisn}</td>
                      <td className="py-3.5 px-2 text-xs font-bold text-[#023E8A] hidden md:table-cell">{getMajorTitle(d.selectedMajorId)}</td>
                      <td className="py-3.5 px-2 text-xs text-[#647084] hidden lg:table-cell">{formatDate(d.submittedAt)}</td>
                      <td className="py-3.5 px-2">
                        <button
                          onClick={() => setSelected(d)}
                          className="p-2 rounded-lg bg-[#EDF4FC] hover:bg-[#023E8A] text-[#023E8A] hover:text-white transition-colors"
                          title="Lihat Detail"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-[#647084] pt-4 font-semibold">
                Menampilkan {filtered.length} dari {data.length} pendaftar
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Clear Data */}
      {data.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showConfirmClear ? (
            <button
              onClick={() => setShowConfirmClear(true)}
              className="text-xs font-bold text-[#FF5A60] hover:text-red-600 transition-colors underline"
            >
              Hapus semua data pendaftar
            </button>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-between gap-4">
              <p className="text-xs font-bold text-red-700">Yakin hapus semua {data.length} data pendaftar? Tindakan ini tidak bisa dibatalkan.</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    localStorage.removeItem('spmb-submissions');
                    setData([]);
                    setShowConfirmClear(false);
                  }}
                  className="px-4 py-3 rounded-lg bg-red-600 text-white font-extrabold text-xs"
                >
                  Ya, Hapus Semua
                </button>
                <button
                  onClick={() => setShowConfirmClear(false)}
                  className="px-4 py-3 rounded-lg bg-white border text-[#647084] font-bold text-xs"
                >
                  Batal
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelected(null)}>
          <div
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#EDF4FC] pb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#023E8A]" />
                <h3 className="font-extrabold text-lg text-[#051A2D]">Detail Pendaftar</h3>
              </div>
              <button onClick={() => setSelected(null)} className="p-1 rounded-lg hover:bg-[#EDF4FC]">
                <X className="w-5 h-5 text-[#647084]" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-[#EDF4FC] p-4 rounded-2xl space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-[#647084]">No. Registrasi</span>
                  <span className="text-sm font-black text-[#023E8A] font-mono">{selected.regNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-[#647084]">Jurusan</span>
                  <span className="text-sm font-extrabold text-[#051A2D]">{getMajorTitle(selected.selectedMajorId)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-[#647084]">Tgl Daftar</span>
                  <span className="text-sm font-semibold text-[#051A2D]">{formatDate(selected.submittedAt)}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-[11px] font-bold text-[#647084] block">Nama Lengkap</span><span className="font-extrabold text-[#051A2D]">{selected.fullName}</span></div>
                <div><span className="text-[11px] font-bold text-[#647084] block">NISN</span><span className="font-semibold text-[#051A2D]">{selected.nisn}</span></div>
                <div><span className="text-[11px] font-bold text-[#647084] block">Gender</span><span className="font-semibold text-[#051A2D]">{selected.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</span></div>
                <div><span className="text-[11px] font-bold text-[#647084] block">Tgl Lahir</span><span className="font-semibold text-[#051A2D]">{selected.birthDate || '-'}</span></div>
                <div><span className="text-[11px] font-bold text-[#647084] block">No. HP</span><span className="font-semibold text-[#051A2D]">{selected.phone}</span></div>
                <div><span className="text-[11px] font-bold text-[#647084] block">Asal Sekolah</span><span className="font-semibold text-[#051A2D]">{selected.previousSchool}</span></div>
                <div className="col-span-2"><span className="text-[11px] font-bold text-[#647084] block">Email</span><span className="font-semibold text-[#051A2D]">{selected.email || '-'}</span></div>
                <div><span className="text-[11px] font-bold text-[#647084] block">Nama Orang Tua</span><span className="font-semibold text-[#051A2D]">{selected.parentName}</span></div>
                <div><span className="text-[11px] font-bold text-[#647084] block">HP Orang Tua</span><span className="font-semibold text-[#051A2D]">{selected.parentPhone}</span></div>
              </div>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="w-full py-3.5 rounded-xl bg-[#EDF4FC] text-[#023E8A] font-extrabold text-sm hover:bg-[#023E8A] hover:text-white transition-all"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
