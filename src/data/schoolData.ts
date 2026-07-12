import { Major, Facility, NewsItem, Testimonial, Teacher } from '../types';

export const SCHOOL_INFO = {
  name: 'SMK Solivate 01',
  tagline: 'Empowering Vocational Excellence Through Digital Innovation',
  motto: 'Siap Kerja, Santun, Kreatif, & Berdaya Saing Global',
  npsn: '20608941',
  accreditation: 'A (Unggul) - SK BAN-SM No. 892/BAN-SM/SK/2024',
  address: 'Jl. Solivate Innovation Campus No. 101, Sudirman Central Business District, Jakarta Selatan 12190',
  phone: '(021) 555-0199',
  email: 'admisi@solivate.sch.id',
  whatsapp: '+62 811-2345-6789',
  principal: {
    name: 'Dr. Ir. H. Hendra Solivate, M.Kom., IPM.',
    title: 'Kepala SMK Solivate 01',
    quote: '"Keahlian masa depan bukan sekadar menghafal teori, tetapi kemampuan memecahkan masalah nyata dengan integritas moral, kepemimpinan adaptif, dan penguasaan teknologi tingkat tinggi. SMK Solivate 01 hadir sebagai inkubator talenta digital kelas dunia."',
    message: 'Selamat datang di portal resmi SMK Solivate 01. Kami berkomitmen menyelenggarakan pendidikan kejuruan berstandar Industri 4.0 & Society 5.0 dengan pendekatan Project-Based Learning nyata bersertifikasi internasional.'
  },
  stats: [
    { label: 'Lulusan Langsung Terserap Industri', value: '94.8%' },
    { label: 'Mitra Industri & Perusahaan Global', value: '120+' },
    { label: 'Sertifikasi Internasional Siswa', value: '100%' },
    { label: 'Kompetensi Keahlian Unggulan', value: '6' },
  ],
  vision: 'Menjadi Pusat Keunggulan (Center of Excellence) Pendidikan Menengah Kejuruan Bidang Teknologi Digital dan Bisnis yang Menghasilkan SDM Unggul, Berkarakter Pancasila, dan Diakui Global.',
  missions: [
    'Menyelenggarakan kurikulum Link & Match yang diselaraskan langsung dengan standar kebutuhan industri teknologi kelas dunia.',
    'Menerapkan pembelajaran berbasis proyek nyata (Teaching Factory) dengan fasilitas laboratorium berteknologi terkini.',
    'Membentuk jiwa kewirausahaan (Technopreneurship) serta soft skills komunikasi profesional dan integritas tinggi.',
    'Memfasilitasi sertifikasi profesi internasional (Google Cloud, Cisco, Adobe, AWS) bagi seluruh lulusan.',
    'Membangun ekosistem sekolah ramah lingkungan, inklusif, serta mendukung penelitian dan inovasi digital kelanjutan.'
  ]
};

export const MAJORS_DATA: Major[] = [
  {
    id: 'pplg',
    code: 'PPLG',
    title: 'Pengembangan Perangkat Lunak & Gim (AI & Cloud)',
    shortDesc: 'Rekayasa perangkat lunak web, mobile app development, integrasi AI (Artificial Intelligence), serta pemrosesan Cloud Computing.',
    fullDesc: 'Program keahlian PPLG di SMK Solivate 01 berfokus pada modern full-stack development menggunakan TypeScript, React, Next.js, Node.js, Python untuk Machine Learning, dan arsitektur cloud native. Siswa dididik untuk menjadi Software Engineer tangguh yang siap terjun ke startup maupun perusahaan enterprise.',
    iconName: 'Code2',
    accentColor: '#023E8A',
    careerProspects: ['Full-Stack Web Developer', 'Mobile AI App Developer', 'Cloud Infrastructure Junior Engineer', 'QA Automation Engineer'],
    keySubjects: ['Algoritma & Struktur Data Pemrograman', 'Web & Mobile Application Engineering', 'Applied Artificial Intelligence & Prompt Engineering', 'Database Management & API Architecture'],
    partnerCompanies: ['Google Cloud Indonesia', 'Solivate Tech Group', 'AWS Academy', 'Tokopedia Tech'],
    quota: 72,
    accreditation: 'Unggul (A)',
    stats: {
      employedRate: '98%',
      avgSalary: 'Rp 6,5 Juta - Rp 12 Juta'
    }
  },
  {
    id: 'tjkt',
    code: 'TJKT',
    title: 'Teknik Jaringan Komputer & Telekomunikasi (Cybersecurity)',
    shortDesc: 'Keamanan siber jaringan, administrasi server cloud Linux, serat optik telekomunikasi modern, dan arsitektur Internet of Things (IoT).',
    fullDesc: 'Jurusan TJKT menyiapkan analis jaringan dan pakar keamanan siber tingkat pemula berstandar industri Cisco Networking Academy dan Mikrotik Academy. Pembelajaran mencakup pengamanan infrastruktur server terhadap ancaman siber modern serta otomatisasi jaringan.',
    iconName: 'ShieldCheck',
    accentColor: '#00B4D7',
    careerProspects: ['Network & SOC Security Analyst', 'Cloud Server Administrator', 'Fiber Optic Network Engineer', 'IoT Solutions Technician'],
    keySubjects: ['Network Routing & Switching Advanced', 'Ethical Hacking & Network Security Defense', 'Linux Server & Docker Virtualization', 'Fiber Optic & Wireless Infrastructure'],
    partnerCompanies: ['Cisco Networking Academy', 'Telkomsel Enterprise', 'Fortinet Security', 'Lintasarta'],
    quota: 72,
    accreditation: 'Unggul (A)',
    stats: {
      employedRate: '95%',
      avgSalary: 'Rp 6,0 Juta - Rp 10 Juta'
    }
  },
  {
    id: 'dkv',
    code: 'DKV',
    title: 'Desain Komunikasi Visual & UI/UX Product Design',
    shortDesc: 'Perancangan antarmuka aplikasi (UI/UX Design), branding identitas perusahaan, motion graphic, serta fotografi komersial.',
    fullDesc: 'DKV SMK Solivate 01 menggabungkan estetika desain grafis tradisional dengan keahlian digital masa depan seperti UI/UX Product Design menggunakan Figma, animasi interaktif, dan pemanfaatan AI Generatif untuk mendukung riset kreatif dan produksi iklan digital.',
    iconName: 'Palette',
    accentColor: '#FF5A60',
    careerProspects: ['UI/UX Product Designer', 'Brand Visual Identity Designer', 'Motion Graphic Artist', 'Creative Art Director'],
    keySubjects: ['User Interface & Experience (UI/UX) Prototyping', 'Digital Illustration & Vector Typography', 'Commercial Video & Photography Production', 'Brand Strategy & Interactive Motion Design'],
    partnerCompanies: ['Adobe Creative Campus', 'Gojek Design Team', 'Dentsu Creative Indonesia', 'Traveloka Product'],
    quota: 72,
    accreditation: 'Unggul (A)',
    stats: {
      employedRate: '93%',
      avgSalary: 'Rp 5,5 Juta - Rp 9,5 Juta'
    }
  },
  {
    id: 'bd',
    code: 'BD',
    title: 'Bisnis Digital & Digital Marketing Strategy',
    shortDesc: 'Strategi pemasaran digital, pengelolahan e-commerce, search engine optimization (SEO/SEM), serta analisis data bisnis (Data Analytics).',
    fullDesc: 'Jurusan Bisnis Digital mencetak wirausahawan dan digital marketer yang menguasai ekosistem marketplace global, social media advertising, pengolahan big data konsumen, dan CRM otomatisasi untuk memaksimalkan ROI bisnis.',
    iconName: 'TrendingUp',
    accentColor: '#D7FE3F',
    careerProspects: ['Digital Marketing & Performance Growth Lead', 'E-Commerce Marketplace Manager', 'Social Media Specialist & KOL Specialist', 'Junior Business Data Analyst'],
    keySubjects: ['Search Engine Optimization (SEO & SEM)', 'Social Media & Performance Ads Optimization', 'E-Commerce Marketplace Operations', 'Business Intelligence & Customer Data Analytics'],
    partnerCompanies: ['Shopee Indonesia', 'Meta Business Group', 'TikTok Shop Commerce', 'Sirclo Solutions'],
    quota: 72,
    accreditation: 'Unggul (A)',
    stats: {
      employedRate: '94%',
      avgSalary: 'Rp 5,5 Juta - Rp 11 Juta'
    }
  },
  {
    id: 'animasi',
    code: 'ANIMASI',
    title: 'Animasi 3D & Virtual Reality Production',
    shortDesc: 'Pemodelan karakter 3D, CGI visual effects (VFX), animasi film layar lebar, dan pengembangan teknologi Virtual/Augmented Reality.',
    fullDesc: 'Dilengkapi studio berstandar broadcast dengan motion capture suite dan rendering farm berkecepatan tinggi. Siswa belajar menciptakan aset game 3D (Unreal Engine 5 & Blender) serta animasi cerita sinematik berkelas internasional.',
    iconName: 'Clapperboard',
    accentColor: '#023E8A',
    careerProspects: ['3D Character Animator & Modeler', 'VFX & CGI Artist', 'Virtual Reality Environment Designer', 'Game Asset Artist'],
    keySubjects: ['3D Character Modeling & Rigging', 'Cinematography & Visual Effects (VFX)', 'Unreal Engine Virtual Production', 'Storyboarding & Concept Art Design'],
    partnerCompanies: ['MD Animation Studio', 'Agate Game Studio', 'Base FX Studio', 'Epic Games Academic'],
    quota: 36,
    accreditation: 'Unggul (A)',
    stats: {
      employedRate: '91%',
      avgSalary: 'Rp 6,0 Juta - Rp 11 Juta'
    }
  },
  {
    id: 'ori',
    code: 'ORI',
    title: 'Otomasi & Robotika Industri (Mechatronics & AI)',
    shortDesc: 'Pemrograman robot lengan industri, Programmable Logic Controller (PLC), sensor pintar IoT, dan otomasi pabrik pintar.',
    fullDesc: 'Jurusan unggulan yang menjawab tantangan otomatisasi pabrik cerdas di era Industri 4.0. Mengkombinasikan elektronika digital, mekanika presisi, dan pemrograman AI untuk mengendalikan robotika otomatis di lini produksi modern.',
    iconName: 'Cpu',
    accentColor: '#00B4D7',
    careerProspects: ['PLC & Industrial Automation Engineer', 'Robotics System Programmer', 'Mechatronics Maintenance Technician', 'Smart Factory System Specialist'],
    keySubjects: ['PLC Siemens & Mitsubishi Programming', 'Industrial Robot Arm Control & Calibration', 'Embedded Systems & Microcontroller AI', 'Pneumatics & Electro-Hydraulic Systems'],
    partnerCompanies: ['Schneider Electric', 'Toyota Motor Manufacturing', 'Omron Industrial Automation', 'Festo Indonesia'],
    quota: 36,
    accreditation: 'Unggul (A)',
    stats: {
      employedRate: '97%',
      avgSalary: 'Rp 6,5 Juta - Rp 13 Juta'
    }
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'f1',
    title: 'Solivate AI & High-Performance Computing Lab',
    category: 'Laboratorium',
    description: 'Laboratorium komputer spesifikasi tinggi dengan GPU NVIDIA RTX 4090 untuk riset Machine Learning, rendering 3D, dan pemrosesan big data.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    specs: ['40 Unit Workstation Core i9 / 64GB RAM / RTX 4090', 'Koneksi Fiber Optic Dedicated 10 Gbps', 'Smart Interactive Whiteboard 86 Inch', 'Pendingin Ruangan AC Presisi Server']
  },
  {
    id: 'f2',
    title: 'Cybersecurity & Cisco Networking Ops Center',
    category: 'Laboratorium',
    description: 'Simulasi Security Operations Center (SOC) dengan perangkat Cisco Router 4000 series, firewall keras Fortinet, dan rak server rackmount standar industri.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    specs: ['12 Rack Server Enterprise 42U', 'Simulator Fiber Optic Fusion Splicer Kit', 'Dual Screen SOC Monitoring Terminal', 'Sistem Peringatan Dini Keamanan Siber']
  },
  {
    id: 'f3',
    title: 'Apple iMac UI/UX & Motion Graphic Studio',
    category: 'Laboratorium',
    description: 'Ruang kreatif eksekutif berstandar internasional yang dilengkapi dengan iMac 24" M3, pen tablet Wacom Cintiq Pro, serta color-calibrated displays.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    specs: ['36 Unit Apple iMac M3 16GB', 'Wacom Cintiq Pro 24 Interactive Display', 'Studio Soundproofing Acoustic Panels', 'DLP 4K Laser Cinema Projector']
  },
  {
    id: 'f4',
    title: 'Robotics & Mechatronics Teaching Factory',
    category: 'Laboratorium',
    description: 'Fasilitas perakitan otomasi industri dengan modul latih PLC Siemens S7-1500, robot lengan industrial 6-axis, serta mesin 3D Printer resin berpresisi tinggi.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    specs: ['8 Unit Industrial Robot Lengan 6-Axis', 'PLC Training Bench Siemens & Omron', 'BambuLab X1-Carbon 3D Printers', 'Pneumatic & Hydraulic Station']
  },
  {
    id: 'f5',
    title: 'Podcast & Digital Broadcast Production Studio',
    category: 'Olahraga & Seni',
    description: 'Studio penyiaran multi-kamera 4K lengkap dengan green screen chroma key, mic Shure SM7B profesional, dan switcher panggung siaran langsung.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    specs: ['3x Sony FX3 Cinema Cameras', 'Shure SM7B Mics & Rodecaster Pro II', 'Aputure Professional Lighting Grid', 'Soundproof Vocal Recording Booth']
  },
  {
    id: 'f6',
    title: 'Solivate Smart Library & Co-Working Lounge',
    category: 'Akademik',
    description: 'Perpustakaan hibrida dengan ribuan e-book IEEE/ACM, ruang diskusi kelompok berkedap suara, kafe literasi, dan kursi ergonomis untuk bekerja mandiri.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    specs: ['Akses Digital E-Library 25.000+ Judul Buku', '6 Private Discussion Pods dengan Smart TV', 'High-Speed Wi-Fi 6 Mesh Everywhere', 'Pojok Baca Nyaman ber-AC']
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Tim PPLG SMK Solivate 01 Juara 1 Nasional Hackathon AI Innovation 2026',
    category: 'Prestasi',
    date: '3 Juli 2026',
    author: 'Humas SMK Solivate 01',
    readTime: '4 Min Baca',
    summary: 'Siswa SMK Solivate 01 berhasil mengalahkan 180 tim dari SMA/SMK se-Indonesia melalui inovasi aplikasi AI pendeteksi kualitas udara dan kesehatan masyarakat.',
    content: 'Jakarta - Prestasi membanggakan kembali ditorehkan oleh siswa Kompetensi Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) SMK Solivate 01. Dalam ajang bergengsi National AI Innovation Hackathon 2026 yang diselenggarakan di Jakarta Convention Center, tim yang terdiri dari Rafi Ahmad, Clarissa Wijaya, dan Kevin Darmawan berhasil merebut predikat Juara 1 Nasional.\n\nMereka mempresentasikan karya bertajuk "SoliAir Care", sebuah sistem pemantauan polusi udara mikro berbasis sensor IoT yang terhubung ke dashboard analisis Machine Learning di cloud. Aplikasi tersebut mampu memberikan rekomendasi rute perjalanan aman dan rute alternatif berpolusi rendah bagi pejalan kaki dan pesepeda.\n\nKepala SMK Solivate 01, Dr. Ir. H. Hendra Solivate, M.Kom., menyatakan kebanggaannya atas dedikasi para siswa dan guru pembimbing. "Ini bukti bahwa sistem Project-Based Learning dan keterlibatan langsung mentor dari Google Cloud benar-benar meningkatkan daya analisis kritis siswa kami," ungkapnya.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'news-2',
    title: 'SMK Solivate 01 Resmi Jalin Kerja Sama Strategis dengan Google Cloud & Adobe',
    category: 'Industri',
    date: '28 Juni 2026',
    author: 'Bagian Hubungan Industri',
    readTime: '5 Min Baca',
    summary: 'Kerja sama strategis ini memastikan seluruh siswa kelas XI dan XII mendapatkan voucher sertifikasi internasional gratis dan kurikulum cloud computing terkini.',
    content: 'Dalam upaya memperkuat program Link & Match berstandar global, SMK Solivate 01 resmi menandatangani Nota Kesepahaman (MoU) dengan perwakilan Google Cloud Indonesia dan Adobe Creative Campus. Acara penandatanganan ini dihadiri oleh jajaran pimpinan Dinas Pendidikan serta eksekutif industri di Auditorium SMK Solivate 01.\n\nMelalui kesepakatan ini, sekolah menerima hibah perangkat lunak dan kurikulum resmi, pelatihan dosen tamu berkala setiap bulan, serta jaminan program magang (internship) prioritas bagi 100 siswa terbaik setiap tahunnya.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'news-3',
    title: 'Pameran Karya Inovasi Teaching Factory 2026 Pukau Ratusan Investor & Perusahaan',
    category: 'Event',
    date: '15 Juni 2026',
    author: 'Tim Redaksi Solivate',
    readTime: '3 Min Baca',
    summary: 'Gelaran Solivate Innovation Expo 2026 menampilkan 45 produk nyata hasil karya siswa dari 6 jurusan, mulai dari robot pertanian hingga game virtual reality.',
    content: 'Pameran tahunan Solivate Innovation Expo kembali digelar dengan kemeriahan luar biasa. Pengunjung yang hadir dari berbagai kalangan industri teknologi terkesan dengan ketajaman ide dan eksekusi profesional karya siswa SMK Solivate 01.\n\nBeberapa karya unggulan yang langsung mendapatkan LOI (Letter of Intent) pembiayaan purwarupa antara lain robot otomatis penyortir limbah elektronik dari jurusan Robotika, serta game edukasi kebudayaan nusantara 3D karya jurusan Animasi dan PPLG.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'news-4',
    title: 'Panduan Sukses Lolos PPDB Gelombang Khusus Jalur Prestasi Digital 2026/2027',
    category: 'Akademik',
    date: '5 Juni 2026',
    author: 'Panitia PPDB SMK Solivate 01',
    readTime: '4 Min Baca',
    summary: 'Ketahui kriteria portofolio digital, persiapan wawancara minat bakat, dan keuntungan pembebasan biaya DPP bagi calon siswa berprestasi.',
    content: 'Penerimaan Peserta Didik Baru (PPDB) SMK Solivate 01 Tahun Ajaran 2026/2027 kini membuka Jalur Prestasi Digital. Calon siswa yang memiliki sertifikat kejuaraan coding, desain grafis, e-sports, atau kontes kepemimpinan organisasi dapat melampirkan portofolio mereka secara online.\n\nManfaatkan juga fitur Simulasi Tes Minat Bakat AI yang tersedia di website resmi ini untuk mengetahui jurusan mana yang paling cocok dengan kepribadian dan bakat alami kamu.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Muhammad Reyhan Pratama',
    role: 'Alumni PPLG Angkatan 2024',
    company: 'Software Engineer di GoTo Group',
    major: 'Pengembangan Perangkat Lunak & Gim',
    quote: '"Belajar di SMK Solivate 01 mengubah cara pandang saya tentang teknologi. Kurikulumnya sangat relevan karena mentor dari industri hadir langsung di kelas. Lulus sekolah saya langsung direkrut berkat sertifikasi internasional yang difasilitasi sekolah."',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Nadia Salsabila Putri',
    role: 'Alumni DKV Angkatan 2023',
    company: 'Senior UI/UX Designer di Traveloka',
    major: 'Desain Komunikasi Visual',
    quote: '"Lab iMac dan fasilitas Wacom di SMK Solivate 01 membuat standar desain saya setara profesional sejak usia 16 tahun. Budaya presentasi proyek dan kritik karya melatih kepercayaan diri saya saat berhadapan dengan klien global."',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Dimas Anggara Wibowo',
    role: 'Alumni TJKT Angkatan 2025',
    company: 'Cloud Security Specialist di Telkomsel',
    major: 'Teknik Jaringan Komputer',
    quote: '"Latihan harian di Cisco Networking Ops Center memberi saya keunggulan mutlak dibanding kandidat lain. SMK Solivate 01 bukan sekadar sekolah, tapi rumah bagi para future tech leader Indonesia."',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'tch-1',
    name: 'Aris Setiawan, S.Kom., M.T.',
    title: 'Kepala Program Keahlian PPLG',
    role: 'Google Certified Cloud Engineer & Expert Full-Stack Developer',
    department: 'PPLG',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tch-2',
    name: 'Diana Kartika, S.Ds., M.Sn.',
    title: 'Kepala Program Keahlian DKV',
    role: 'Ex-Creative Director Dentsu & Adobe Certified Expert',
    department: 'DKV',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tch-3',
    name: 'Ir. Bayu Nugroho, CCIE, CISSP',
    title: 'Kepala Program Keahlian TJKT',
    role: 'Cybersecurity Consultant & Cisco Networking Instructor',
    department: 'TJKT',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tch-4',
    name: 'Siti Maharani, S.E., M.M.',
    title: 'Kepala Program Keahlian Bisnis Digital',
    role: 'E-Commerce Specialist & Performance Marketing Mentor',
    department: 'Bisnis Digital',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  }
];

export const FAQS_DATA = [
  {
    question: 'Apa perbedaan utama SMK Solivate 01 dengan SMK atau SMA umum lainnya?',
    answer: 'SMK Solivate 01 menerapkan kurikulum Link & Match yang di-update setiap tahun bersama mitra industri global seperti Google, Cisco, Adobe, dan Schneider. Siswa belajar 70% praktik nyata di laboratorium modern dengan jaminan kesempatan sertifikasi profesi internasional sebelum lulus.'
  },
  {
    question: 'Bagaimana cara mendaftar PPDB SMK Solivate 01 Tahun Ajaran 2026/2027?',
    answer: 'Pendaftaran dapat dilakukan 100% online melalui menu PPDB di website ini. Calon siswa cukup mengisi formulir data diri, memilih kompetensi keahlian yang diminati, dan mengunduh Bukti Pendaftaran Digital untuk dilanjutkan ke tahap verifikasi berkas dan tes wawancara/minat bakat.'
  },
  {
    question: 'Apakah ada fasilitas beasiswa bagi calon siswa berprestasi atau kurang mampu?',
    answer: 'Ya, SMK Solivate 01 menyediakan Beasiswa Solivate Excellence berupa bebas uang pangkal (DPP) 100% serta subsidi SPP bulanan bagi siswa berprestasi akademik, kejuaraan digital/olahraga, serta jalur afirmasi ekonomi dengan persyaratan yang ditentukan panitia.'
  },
  {
    question: 'Apakah lulusan SMK Solivate 01 bisa melanjutkan kuliah ke Perguruan Tinggi Negeri (PTN)?',
    answer: 'Tentu saja! Lulusan kami dibekali dasar sains matematika & bahasa Inggris berstandar tinggi. Sekitar 40% lulusan kami melanjutkan studi ke perguruan tinggi top (ITB, UI, UGM, ITS) atau universitas luar negeri, sementara 60% langsung berkarier profesional atau membangun startup digital.'
  },
  {
    question: 'Bagaimana sekolah membantu penyaluran kerja lulusan?',
    answer: 'Kami memiliki Bursa Kerja Khusus (BKK Solivate Career Center) yang terhubung dengan 120+ perusahaan mitra. Pada semester akhir kelas XII, diadakan Campus Hiring eksklusif di mana perusahaan mitra melakukan rekrutmen langsung di lingkungan sekolah.'
  }
];
