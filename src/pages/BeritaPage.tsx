import React, { useState } from 'react';
import { PageType, NewsItem } from '../types';
import { NEWS_DATA } from '../data/schoolData';
import { Calendar, User, Clock, ArrowRight, Search, Tag, X } from 'lucide-react';

interface BeritaPageProps {
  onNavigate: (page: PageType) => void;
}

export const BeritaPage: React.FC<BeritaPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const categories = ['Semua', 'Prestasi', 'Industri', 'Event', 'Akademik'];

  const filteredNews = NEWS_DATA.filter(n => {
    const matchCat = selectedCategory === 'Semua' || n.category === selectedCategory;
    const matchSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        n.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A2D] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border-b-8 border-[#023E8A] shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-[#D7FE3F] text-[#051A2D] text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
              INFORMASI TERKINI
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Berita Prestasi & <span className="text-[#00B4D7]">Artikel Edukasi</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Ikuti perkembangan terbaru kegiatan akademis, kejuaraan nasional/internasional, serta pameran inovasi teknologi karya siswa SMK Solivate 01.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#023E8A] text-white shadow-md'
                  : 'bg-[#EDF4FC] text-[#647084] hover:text-[#051A2D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#647084] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari berita atau artikel..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#EDF4FC] border border-[#EDF4FC] focus:border-[#023E8A] focus:bg-white focus:outline-none text-xs font-semibold text-[#051A2D] transition-all"
          />
        </div>
      </section>

      {/* 3. NEWS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setActiveArticle(news)}
                className="bg-white rounded-3xl overflow-hidden border border-[#EDF4FC] shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-[#051A2D]">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051A2D]/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-[#023E8A] text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                      {news.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-white/90 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D7FE3F]" /> {news.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#00B4D7]" /> {news.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-[#051A2D] group-hover:text-[#023E8A] transition-colors leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#647084] leading-relaxed line-clamp-3">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EDF4FC] flex items-center justify-between text-xs font-bold text-[#023E8A]">
                    <span>Oleh: {news.author}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#00B4D7]">
                      Baca Lengkap <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#EDF4FC]/40 rounded-3xl border border-[#EDF4FC]">
            <p className="text-sm font-bold text-[#647084]">Berita tidak ditemukan. Silakan ganti kata kunci pencarian.</p>
          </div>
        )}
      </section>

      {/* 4. MODAL ARTICLE READER */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051A2D]/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-[#EDF4FC] max-h-[90vh] flex flex-col">
            
            <div className="relative h-64 sm:h-80 bg-[#051A2D] shrink-0">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051A2D] via-black/40 to-transparent"></div>
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors font-bold"
              >
                &times;
              </button>

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="bg-[#D7FE3F] text-[#051A2D] text-[10px] font-black px-2.5 py-0.5 rounded uppercase">
                  {activeArticle.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-white/80 font-medium pt-1">
                  <span>{activeArticle.date}</span> &bull; <span>{activeArticle.author}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1">
              <div className="text-sm sm:text-base text-[#051A2D] leading-relaxed whitespace-pre-line font-medium">
                {activeArticle.content}
              </div>

              <div className="pt-6 border-t border-[#EDF4FC] flex justify-between items-center">
                <span className="text-xs font-bold text-[#647084]">Bagikan kabar gembira ini ke teman & orang tua!</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#023E8A] text-white font-extrabold text-xs"
                >
                  Tutup Artikel
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
