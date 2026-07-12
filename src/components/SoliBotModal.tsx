import React, { useState, useRef, useEffect } from 'react';
import { MAJORS_DATA } from '../data/schoolData';
import { Sparkles, Send, X, Bot, User, CheckCircle2, HelpCircle, Minimize2 } from 'lucide-react';

interface SoliBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMajor?: (majorId: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestedMajors?: string[];
}

export const SoliBotModal: React.FC<SoliBotModalProps> = ({ isOpen, onClose, onSelectMajor }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: `Halo! Saya **SoliBot**, AI Konsultan Jurusan & PPDB resmi SMK Solivate 01.\n\nApa yang ingin kamu ketahui tentang jurusan atau pendaftaran PPDB 2026?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const generateIntelligentResponse = async (userQuery: string): Promise<{ text: string; suggestedMajors?: string[] }> => {
    const q = userQuery.toLowerCase();

    // Try live Gemini REST call without overriding window.fetch
    try {
      const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY;
      if (apiKey) {
        const systemPrompt = `Kamu adalah SoliBot, asisten AI ramah dan profesional untuk SMK Solivate 01.
Sekolah ini memiliki 6 jurusan unggulan: PPLG (AI & Cloud), TJKT (Cybersecurity), DKV (UI/UX), Bisnis Digital, Animasi 3D & VR, dan Otomasi & Robotika Industri.
Gunakan bahasa Indonesia santun, ringkas, dan antusias.`;

        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: `${systemPrompt}\n\nPertanyaan pengguna: "${userQuery}"` }]
            }]
          })
        });

        if (resp.ok) {
          const data = await resp.json();
          const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiText) {
            const suggested: string[] = [];
            if (aiText.toLowerCase().includes('pplg') || q.includes('coding') || q.includes('web') || q.includes('ai') || q.includes('game')) suggested.push('pplg');
            if (aiText.toLowerCase().includes('tjkt') || q.includes('jaringan') || q.includes('hacker')) suggested.push('tjkt');
            if (aiText.toLowerCase().includes('dkv') || q.includes('desain') || q.includes('ui')) suggested.push('dkv');
            if (aiText.toLowerCase().includes('bisnis') || q.includes('marketing')) suggested.push('bd');
            if (aiText.toLowerCase().includes('animasi') || q.includes('3d')) suggested.push('animasi');
            if (aiText.toLowerCase().includes('robot') || q.includes('otomasi')) suggested.push('ori');

            return {
              text: aiText,
              suggestedMajors: suggested.length > 0 ? suggested : undefined
            };
          }
        }
      }
    } catch (e) {
      // Fallback cleanly
    }

    // Intelligent local response engine
    if (q.includes('coding') || q.includes('game') || q.includes('program') || q.includes('software') || q.includes('web') || q.includes('pplg')) {
      return {
        text: `Berdasarkan minatmu pada pemrograman atau game, jurusan **PPLG (Pengembangan Perangkat Lunak & Gim)** adalah pilihan paling sempurna!\n\nDi jurusan ini kamu belajar Full-stack Web/Mobile, Artificial Intelligence & Cloud Computing dengan sertifikasi Google Cloud. Rata-rata gaji awal lulusan Rp 6,5 - 12 Juta!`,
        suggestedMajors: ['pplg']
      };
    }

    if (q.includes('jaringan') || q.includes('hacker') || q.includes('cyber') || q.includes('security') || q.includes('tjkt')) {
      return {
        text: `Tertarik keamanan siber & jaringan komputer? Jurusan **TJKT (Teknik Jaringan Komputer & Telekomunikasi)** sangat cocok!\n\nDilengkapi Cisco Networking Ops Center berstandar internasional untuk belajar Ethical Hacking defense & Linux Server.`,
        suggestedMajors: ['tjkt']
      };
    }

    if (q.includes('desain') || q.includes('gambar') || q.includes('ui') || q.includes('ux') || q.includes('dkv')) {
      return {
        text: `Dunia kreatif menantimu di **DKV (Desain Komunikasi Visual & UI/UX Design)**!\n\nLab khusus Apple iMac M3 & pen tablet Wacom siap mendukungmu merancang UI/UX aplikasi dan motion graphic bersama Adobe Creative Campus.`,
        suggestedMajors: ['dkv']
      };
    }

    if (q.includes('bisnis') || q.includes('jualan') || q.includes('marketing') || q.includes('e-commerce') || q.includes('bd')) {
      return {
        text: `Ingin menjadi wirausahawan atau digital marketer? Jurusan **Bisnis Digital (BD)** jawabannya!\n\nKamu akan menguasai strategi SEO/SEM, Social Media Ads, dan manajemen e-commerce berkolaborasi dengan Shopee & Meta.`,
        suggestedMajors: ['bd']
      };
    }

    if (q.includes('animasi') || q.includes('3d') || q.includes('vr') || q.includes('film')) {
      return {
        text: `Jurusan **Animasi 3D & VR Production** mencetak animator kelas dunia!\n\nKamu akan mempelajari 3D Character Modeling menggunakan Blender & Unreal Engine 5 di render farm berkecepatan tinggi kami.`,
        suggestedMajors: ['animasi']
      };
    }

    if (q.includes('robot') || q.includes('otomasi') || q.includes('plc') || q.includes('ori')) {
      return {
        text: `Kendalikan teknologi pabrik masa depan di **Otomasi & Robotika Industri (ORI)**!\n\nDi lab Mechatronics kami, kamu memprogram robot lengan industri 6-axis dan PLC berkolaborasi dengan Schneider Electric.`,
        suggestedMajors: ['ori']
      };
    }

    if (q.includes('ppdb') || q.includes('daftar') || q.includes('syarat') || q.includes('biaya')) {
      return {
        text: `**Pendaftaran PPDB SMK Solivate 01 TA 2026/2027 Telah Dibuka!**\n\n**Syarat:**\n1. Lulusan SMP/sederajat\n2. Rapor semester 1-5\n3. Isi formulir online di menu PPDB\n\nTersedia **Beasiswa Solivate Excellence** (bebas uang pangkal 100% untuk siswa berprestasi)!`
      };
    }

    return {
      text: `SMK Solivate 01 memiliki 6 Kompetensi Keahlian berakreditasi A: PPLG (AI & Cloud), TJKT (Cybersecurity), DKV (UI/UX), Bisnis Digital, Animasi 3D, dan Robotika Industri.\n\nTanyakan hobi atau cita-citamu agar saya rekomendasikan jurusan terbaik!`
    };
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(async () => {
      const resp = await generateIntelligentResponse(query);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: resp.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedMajors: resp.suggestedMajors
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const quickPrompts = [
    'Suka game & coding, cocok apa?',
    'Cara daftar & syarat PPDB?',
    'Fasilitas lab apa saja?'
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[calc(100vw-40px)] sm:w-[380px] h-[520px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-[#EDF4FC] flex flex-col overflow-hidden ring-1 ring-[#023E8A]/10 animate-slideUp">
      
      {/* Floating Chat Header */}
      <div className="bg-[#023E8A] px-4 py-3.5 text-white flex items-center justify-between border-b-2 border-[#D7FE3F] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 relative">
            <Sparkles className="w-5 h-5 text-[#D7FE3F] animate-pulse" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#D7FE3F] rounded-full ring-2 ring-[#023E8A]"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-sm text-white">SoliBot AI Konsultan</h3>
              <span className="bg-[#D7FE3F] text-[#051A2D] text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                24/7
              </span>
            </div>
            <p className="text-[11px] text-white/80 leading-none mt-0.5">
              Tanya Jurusan & PPDB SMK Solivate 01
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          title="Tutup Chat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-[#F4F8FC] space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 max-w-[90%] ${
              msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
            }`}
          >
            <div
              className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${
                msg.sender === 'ai'
                  ? 'bg-[#023E8A] text-white'
                  : 'bg-[#00B4D7] text-white'
              }`}
            >
              {msg.sender === 'ai' ? <Bot className="w-4 h-4 text-[#D7FE3F]" /> : <User className="w-4 h-4" />}
            </div>

            <div
              className={`p-3 rounded-2xl shadow-2xs text-xs leading-relaxed ${
                msg.sender === 'ai'
                  ? 'bg-white text-[#051A2D] border border-[#EDF4FC] rounded-tl-2xs'
                  : 'bg-[#023E8A] text-white rounded-tr-2xs'
              }`}
            >
              <div className="whitespace-pre-line font-medium">
                {msg.text}
              </div>

              {msg.suggestedMajors && msg.suggestedMajors.length > 0 && (
                <div className="mt-2 pt-2 border-t border-[#EDF4FC] flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-[#647084]">Rekomendasi Jurusan:</span>
                  {msg.suggestedMajors.map((mId) => {
                    const majorObj = MAJORS_DATA.find((m) => m.id === mId);
                    if (!majorObj) return null;
                    return (
                      <button
                        key={mId}
                        onClick={() => {
                          if (onSelectMajor) {
                            onSelectMajor(mId);
                            onClose();
                          }
                        }}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-[#EDF4FC] hover:bg-[#D7FE3F] text-[#023E8A] hover:text-[#051A2D] font-extrabold text-[11px] transition-colors flex items-center justify-between text-left shadow-2xs"
                      >
                        <span>Lihat {majorObj.code}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B4D7]" />
                      </button>
                    );
                  })}
                </div>
              )}

              <span className={`block text-[9px] text-right font-medium mt-1 ${msg.sender === 'ai' ? 'text-[#647084]' : 'text-white/70'}`}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-[#023E8A] text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-[#D7FE3F] animate-spin" />
            </div>
            <div className="bg-white px-3 py-2 rounded-xl rounded-tl-2xs border border-[#EDF4FC] shadow-2xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#023E8A] animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D7] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7FE3F] animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions Chips */}
      <div className="px-3 py-2 bg-white border-t border-[#EDF4FC] overflow-x-auto shrink-0">
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#00B4D7] shrink-0" />
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1 rounded-full bg-[#EDF4FC]/80 hover:bg-[#023E8A] text-[#051A2D] hover:text-white text-[11px] font-semibold whitespace-nowrap transition-all border border-[#00B4D7]/20"
            >
              {qp}
            </button>
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-white border-t border-[#EDF4FC] shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tulis pesan kamu..."
            className="flex-1 px-3.5 py-2 rounded-xl bg-[#F4F8FC] border border-[#EDF4FC] focus:border-[#023E8A] focus:bg-white focus:outline-none text-xs font-medium text-[#051A2D] placeholder-[#647084] transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="w-9 h-9 rounded-xl bg-[#023E8A] hover:bg-[#012f6b] disabled:opacity-50 text-white flex items-center justify-center transition-all shadow-sm shrink-0"
            title="Kirim Pesan"
          >
            <Send className="w-4 h-4 text-[#D7FE3F]" />
          </button>
        </form>
      </div>

    </div>
  );
};
