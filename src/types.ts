export type PageType = 'beranda' | 'profil' | 'jurusan' | 'fasilitas' | 'ppdb' | 'berita' | 'kontak' | 'dashboard';

export interface Major {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  accentColor: string;
  careerProspects: string[];
  keySubjects: string[];
  partnerCompanies: string[];
  quota: number;
  accreditation: string;
  stats: {
    employedRate: string;
    avgSalary: string;
  };
}

export interface Facility {
  id: string;
  title: string;
  category: 'Laboratorium' | 'Olahraga & Seni' | 'Akademik' | 'Layanan Umum';
  description: string;
  image: string;
  specs: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Prestasi' | 'Akademik' | 'Industri' | 'Event';
  date: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  major: string;
  quote: string;
  avatar: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  role: string;
  department: string;
  image: string;
}

export interface PpdbApplication {
  fullName: string;
  nisn: string;
  gender: 'L' | 'P';
  birthDate: string;
  phone: string;
  email: string;
  previousSchool: string;
  selectedMajorId: string;
  parentName: string;
  parentPhone: string;
}

export interface SpmbSubmission extends PpdbApplication {
  regNumber: string;
  submittedAt: string;
}
