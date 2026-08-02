import React, { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap, Award, Clock, MapPin, CheckCircle2, Users,
  ArrowRight, X, BookOpen, Building2, Monitor, ShieldCheck,
  CheckCircle, FileText, Calendar, Sparkles, ExternalLink, PhoneCall, Download
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface CourseItem {
  id: string
  title: string
  description: string
  duration: string
  location: string
  category: 'reguler' | 'global'
  badge: string
  coverImage: string
  highlights: string[]
}

// ── Course Data (Kursus Reguler & Kursus Global) ──────────────────────────────
const regulerCourses: CourseItem[] = [
  {
    id: 'reg-1',
    title: 'INSTALASI RA',
    description:
      'Pelatihan ini berdasarkan teori dan praktik tentang cara memasang unit RA, prosedur flaring & vakum, dan cara mengisi ulang zat pendingin tambahan.',
    duration: '2 Hari',
    location: 'Daikin National Training Center',
    category: 'reguler',
    badge: 'Terbuka',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Standard Operating Procedure (SOP) Pemasangan RA',
      'Teknik flaring pipa tembaga anti bocor',
      'Prosedur vakum & pemvakuman ulang',
      'Pengisian zat pendingin (Refrigerant R32)'
    ]
  },
  {
    id: 'reg-2',
    title: 'SERVIS & TROUBLESHOOTING RA',
    description:
      'Mempelajari analisis kode error, pengukuran kelistrikan kompresor, dan diagnostik komponen inverter AC Residensial.',
    duration: '2 Hari',
    location: 'Daikin Training Center Jakarta',
    category: 'reguler',
    badge: 'Terbuka',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Pembacaan & identifikasi kode error remote',
      'Pemeriksaan tekanan freon & arus listrik ampere',
      'Troubleshooting PCB inverter & sensor thermistor',
      'Pembersihan & pemeliharaan unit indoor/outdoor'
    ]
  },
  {
    id: 'reg-3',
    title: 'INSTALASI & MAINTENANCE SKY AIR / CASSETTE',
    description:
      'Teknik pemasangan unit Commercial Sky Air, sistem pembuangan kondensat, dan perawatan rutin berkala.',
    duration: '3 Hari',
    location: 'Daikin Training Center Surabaya',
    category: 'reguler',
    badge: 'Terbuka',
    coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Pemasangan gantungan unit Cassette & Ducting',
      'Instalasi pompa drainase kondensat otomatis',
      'Setting airflow & louver otomatis',
      'Pencegahan kebocoran & pembekuan evaporator'
    ]
  },
  {
    id: 'reg-4',
    title: 'TROUBLESHOOTING INVERTER ADVANCED',
    description:
      'Pemeriksaan PCB kontroler, sensor thermistor, dan analisis masalah sirkuit elektronika inverter.',
    duration: '2 Hari',
    location: 'Daikin National Training Center',
    category: 'reguler',
    badge: 'Terbuka',
    coverImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Analisis sinyal komunikasi indoor-outdoor',
      'Pengujian modul daya IPM & kompresor inverter',
      'Pengukuran hambatan gulungan stator',
      'Perbaikan kesalahan tegangan listrik PLN'
    ]
  }
]

const globalCourses: CourseItem[] = [
  {
    id: 'glob-1',
    title: 'AC DASAR RESMI',
    description:
      'Peserta dapat menguasai dasar-dasar pengetahuan AC, untuk mendukung sebagai dasar pengambilan keputusan secara teoritis.',
    duration: '2 Hari',
    location: 'Daikin Global Academy',
    category: 'global',
    badge: 'Sertifikasi Global',
    coverImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Siklus refrigerasi & termodinamika dasar',
      'Prinsip perpindahan panas & psikrometrik',
      'Standar keselamatan kerja HVAC internasional',
      'Evaluasi performa efisiensi EER & COP'
    ]
  },
  {
    id: 'glob-2',
    title: 'DESAIN SISTEM VRV GLOBAL',
    description:
      'Perancangan kapasitas sistem VRV, perhitungan beban pendinginan ruangan, dan penggunaan software Daikin Select Pro.',
    duration: '3 Hari',
    location: 'Daikin Global Academy',
    category: 'global',
    badge: 'Sertifikasi Global',
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Perhitungan beban pendinginan Heat Load Calculation',
      'Pemilihan kombinasi unit VRV Outdoor & Indoor',
      'Desain skema perpipaan Refnet joint',
      'Simulasi software Daikin Select Pro Tool'
    ]
  },
  {
    id: 'glob-3',
    title: 'CHILLER & APPLIED SYSTEM',
    description:
      'Prinsip kerja water-cooled & air-cooled chiller, manajemen AHU/FCU, dan pengoperasian kontrol terpusat gedung.',
    duration: '3 Hari',
    location: 'Daikin Global Academy',
    category: 'global',
    badge: 'Sertifikasi Global',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Sistem sirkulasi Chilled Water & Condenser Water',
      'Operasi & perawatan kompresor Sentrifugal / Screw',
      'Integrasi kontrol AHU / FCU & BMS Building Management',
      'Manajemen efisiensi energi gedung berskala besar'
    ]
  },
  {
    id: 'glob-4',
    title: 'DAIKIN CERTIFIED ENGINEER LEVEL 1',
    description:
      'Sertifikasi keahlian teknis Daikin tingkat dasar hingga menengah dengan standar kualifikasi global Daikin Industries.',
    duration: '4 Hari',
    location: 'Daikin Global Certification Center',
    category: 'global',
    badge: 'Standar Global',
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Ujian teori & praktik teknis berstandar Jepang',
      'Validasi keahlian diagnostik tingkat lanjut',
      'Sertifikat kompetensi resmi terakreditasi',
      'Gelar Teknisi Tersertifikasi Daikin Global'
    ]
  }
]

// ── Data Pusat Pelatihan (Exact Details For 14 National Training Centers) ────
const trainingCentersData = [
  {
    id: 'jakarta',
    city: 'Jakarta',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'JL.Indokarya II Blok F.6 Papanggo - Tanjung Priok Jakarta Utara',
    phone: '021 - 650 5028-30',
    area: '2156 m2',
    capacity: '150 Kursi',
    rooms: '8 Ruangan',
    facilities: ['3 Ruang Kelas', '5 Ruang Praktek', 'Display Produk'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=JL.Indokarya+II+Blok+F.6+Papanggo+Tanjung+Priok+Jakarta+Utara'
  },
  {
    id: 'tangerang',
    city: 'Tangerang',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. Jalur Sutera Kav 29 D No. 36-37, Alam Sutera, Tangerang 15320 - Banten',
    phone: '021-5314 1195',
    area: '40 m2',
    capacity: '30 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Alam+Sutera+Tangerang'
  },
  {
    id: 'bekasi',
    city: 'Bekasi',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'CBD Boulevard, Kompleks Town Square Blok J No. 6, Margahayu, Bekasi Timur, Bekasi 17113 - Jawa Barat',
    phone: '021-2945 0585',
    area: '40 m2',
    capacity: '20 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=CBD+Boulevard+Bekasi'
  },
  {
    id: 'surabaya',
    city: 'Surabaya',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. Jawa No. 25 - Gubeng Surabaya 60281 - Jawa Timur',
    phone: '031-5031 138',
    area: '70 m2',
    capacity: '30 Kursi',
    rooms: '2 Ruangan',
    facilities: ['1 Ruang Kelas', '1 Ruang Praktek'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+Jawa+Gubeng+Surabaya'
  },
  {
    id: 'bali',
    city: 'Bali',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. Buluh Indah No. 51X - Pemecutan Kaja Denpasar 80118 - Bali',
    phone: '0361-9005 514',
    area: '40 m2',
    capacity: '20 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+Buluh+Indah+Denpasar+Bali'
  },
  {
    id: 'yogyakarta',
    city: 'Yogyakarta',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. Raya Magelang No. 76 Karangwaru - Tegalrejo Yogyakarta 55241',
    phone: '0274-551 321',
    area: '40 m2',
    capacity: '30 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+Raya+Magelang+Yogyakarta'
  },
  {
    id: 'bandung',
    city: 'Bandung',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. BKR No. 23 Pasirluyu Bandung 40254 - Jawa Barat',
    phone: '022-5225 150',
    area: '40 m2',
    capacity: '30 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+BKR+Bandung'
  },
  {
    id: 'semarang',
    city: 'Semarang',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. MT. Haryono No. 593 - Jagalan Semarang 50136 - Jawa Tengah',
    phone: '024-8412 695',
    area: '40 m2',
    capacity: '20 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+MT+Haryono+Semarang'
  },
  {
    id: 'palembang',
    city: 'Palembang',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. Veteran No. 88-89, Kuto Batu, Ilir Timur II, Palembang 30126 - Sumatera Selatan',
    phone: '0711-319 776',
    area: '40 m2',
    capacity: '20 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+Veteran+Palembang'
  },
  {
    id: 'makassar',
    city: 'Makassar',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. AP Pettarani No. 9 - Panakkukang Makassar 90222 - Sulawesi Selatan',
    phone: '0411-446 263',
    area: '40 m2',
    capacity: '20 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+AP+Pettarani+Makassar'
  },
  {
    id: 'pekanbaru',
    city: 'Pekanbaru',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. Soekarno Hatta No. 3-5 Tangkerang Barat, Marpoyan Damai, Pekanbaru 28282 - Riau',
    phone: '0761-561 139',
    area: '70 m2',
    capacity: '30 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+Soekarno+Hatta+Pekanbaru'
  },
  {
    id: 'samarinda',
    city: 'Samarinda',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. Wahid Hasyim II No. 8 Sempaja Selatan, Samarinda Utara 75243',
    phone: '0541-2522889',
    area: '70 m2',
    capacity: '30 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+Wahid+Hasyim+Samarinda'
  },
  {
    id: 'medan',
    city: 'Medan',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. H. Adam Malik No 18 E, Silalas, Medan Barat, Medan – Sumatera Utara 20114',
    phone: '061 - 4200 8866',
    area: '120 m2',
    capacity: '30 Kursi',
    rooms: '2 Ruangan',
    facilities: [
      '1 Ruang Kelas',
      '1 Ruang Praktikal',
      '4 Set Unit RA',
      '1 Set Unit SA',
      '8 Meja Brazing',
      '1 Sistem VRV'
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+Adam+Malik+Medan'
  },
  {
    id: 'manado',
    city: 'Manado',
    type: 'PUSAT PELATIHAN NASIONAL',
    address: 'Jl. Sam Ratulangi No. 151, Titiwungen Utara, Manado 95113 - Sulawesi Utara',
    phone: '(0431) 719 1199',
    area: '40 m2',
    capacity: '20 Kursi',
    rooms: '1 Ruangan',
    facilities: ['1 Ruang Kelas'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'https://maps.google.com/?q=Jl+Sam+Ratulangi+Manado'
  }
]

export default function TrainingCertification() {
  const [activeTab, setActiveTab] = useState<'kurikulum' | 'center' | 'online'>('kurikulum')
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null)
  const [selectedCityId, setSelectedCityId] = useState<string>('jakarta')
  
  // Registration modal form state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', batch: 'Gelombang 1 (Agustus 2026)' })
  const [isRegistered, setIsRegistered] = useState(false)

  const activeCenter = trainingCentersData.find(c => c.id === selectedCityId) || trainingCentersData[0]

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setIsRegistered(true)
    }
  }

  const closeModal = () => {
    setSelectedCourse(null)
    setIsRegistered(false)
    setFormData({ name: '', email: '', phone: '', company: '', batch: 'Gelombang 1 (Agustus 2026)' })
  }

  return (
    <PageTransition>
      <PageMeta
        title="Kurikulum Pelatihan & Sertifikasi | Daikin Indonesia"
        description="Program pelatihan teknis AC Daikin: Kurikulum Pelatihan Reguler & Global, Pusat Pelatihan Resmi, serta Sistem Pelatihan Online E-Learning."
        canonical="/insights/training"
      />

      {/* ── 1. HERO BANNER (MODEL PAGE BANNER) ────────────────────────────────── */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        {/* Radial dots grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }} 
        />

        {/* Ambient background glow */}
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Wawasan', path: '/insights' }, 
              { label: 'Berita & Informasi', path: '/insights/news' },
              { label: 'Kurikulum Pelatihan' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="max-w-3xl">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                <GraduationCap className="w-4 h-4 text-cyan-200" />
                Pusat Pelatihan Teknis Resmi
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                Kurikulum Pelatihan <br />
                <span className="text-daikin-blue-light font-light">Training & Certification</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                Daikin memberikan berbagai macam training yang mendukung pengembangan untuk kemampuan teknisi dealer dan partner dalam bidang AC.
              </p>
            </FadeInUp>
          </div>

        </div>
      </div>

      {/* ── 2. TOP TABS BAR (KURIKULUM | PUSAT PELATIHAN | SISTEM ONLINE) ─────── */}
      <section className="py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            
            {/* Tab 1: KURIKULUM */}
            <button
              onClick={() => setActiveTab('kurikulum')}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-3 group ${
                activeTab === 'kurikulum'
                  ? 'bg-sky-50/80 border-daikin-blue shadow-md text-daikin-blue'
                  : 'bg-slate-50/70 border-slate-200 text-slate-500 hover:border-sky-300 hover:bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                activeTab === 'kurikulum' ? 'bg-daikin-blue text-white shadow-sm' : 'bg-white text-daikin-blue border border-slate-200'
              }`}>
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase font-display">
                KURIKULUM
              </span>
            </button>

            {/* Tab 2: PUSAT PELATIHAN */}
            <button
              onClick={() => setActiveTab('center')}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-3 group ${
                activeTab === 'center'
                  ? 'bg-sky-50/80 border-daikin-blue shadow-md text-daikin-blue'
                  : 'bg-slate-50/70 border-slate-200 text-slate-500 hover:border-sky-300 hover:bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                activeTab === 'center' ? 'bg-daikin-blue text-white shadow-sm' : 'bg-white text-daikin-blue border border-slate-200'
              }`}>
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase font-display">
                PUSAT PELATIHAN
              </span>
            </button>

            {/* Tab 3: SISTEM PELATIHAN ONLINE */}
            <button
              onClick={() => setActiveTab('online')}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-3 group ${
                activeTab === 'online'
                  ? 'bg-sky-50/80 border-daikin-blue shadow-md text-daikin-blue'
                  : 'bg-slate-50/70 border-slate-200 text-slate-500 hover:border-sky-300 hover:bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                activeTab === 'online' ? 'bg-daikin-blue text-white shadow-sm' : 'bg-white text-daikin-blue border border-slate-200'
              }`}>
                <Monitor className="w-6 h-6" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase font-display">
                SISTEM PELATIHAN ONLINE
              </span>
            </button>

          </div>

        </div>
      </section>

      {/* ── 3. TAB CONTENT AREA ───────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-slate-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* ── TAB 1: KURIKULUM (KURSUS REGULER & KURSUS GLOBAL CARDS) ───────── */}
          {activeTab === 'kurikulum' && (
            <div className="space-y-20">
              
              {/* SECTION A: KURSUS REGULER */}
              <div className="space-y-8">
                <FadeInUp className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 inline-block">
                    Program Pelatihan Utama
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold font-display text-daikin-blue tracking-tight">
                    Kursus Reguler
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans font-light">
                    Pelatihan praktis dan teori komprehensif untuk penguasaan instalasi, servis, dan perawatan unit AC Residensial & Commercial Sky Air.
                  </p>
                </FadeInUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {regulerCourses.map((course, idx) => (
                    <FadeInUp key={course.id} delay={idx * 0.05}>
                      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col h-full group">
                        
                        {/* Course Image Banner */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                          <img
                            src={course.coverImage}
                            alt={course.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
                            }}
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-[#003B71] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
                              {course.badge}
                            </span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex flex-col flex-1 bg-white justify-between space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-extrabold font-display text-charcoal text-base leading-tight group-hover:text-daikin-blue transition-colors">
                              {course.title}
                            </h3>
                            <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 font-light">
                              {course.description}
                            </p>
                          </div>

                          <div className="space-y-3 pt-3 border-t border-slate-100">
                            <div className="flex items-center justify-between text-xs font-sans text-slate-500">
                              <div className="flex items-center gap-1.5 font-bold text-daikin-blue">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{course.duration}</span>
                              </div>
                              <span className="text-[11px] text-slate-400 font-medium">{course.location}</span>
                            </div>

                            <button
                              onClick={() => setSelectedCourse(course)}
                              className="w-full py-2.5 bg-daikin-blue hover:bg-daikin-blue-dark text-white text-xs font-bold rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2"
                            >
                              <GraduationCap className="w-4 h-4" />
                              <span>Daftar Sekarang</span>
                            </button>
                          </div>
                        </div>

                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>

              {/* SECTION B: KURSUS GLOBAL */}
              <div className="space-y-8 pt-6 border-t border-slate-200/80">
                <FadeInUp className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-100 inline-block">
                    Standar Sertifikasi Internasional
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold font-display text-daikin-blue tracking-tight">
                    Kursus Global
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans font-light">
                    Sertifikasi tingkat lanjut berstandar Daikin Industries Jepang untuk perancangan VRV, Chiller, dan kualifikasi engineer profesional.
                  </p>
                </FadeInUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {globalCourses.map((course, idx) => (
                    <FadeInUp key={course.id} delay={idx * 0.05}>
                      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col h-full group">
                        
                        {/* Course Image Banner */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                          <img
                            src={course.coverImage}
                            alt={course.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-cyan-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
                              {course.badge}
                            </span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex flex-col flex-1 bg-white justify-between space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-extrabold font-display text-charcoal text-base leading-tight group-hover:text-daikin-blue transition-colors">
                              {course.title}
                            </h3>
                            <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 font-light">
                              {course.description}
                            </p>
                          </div>

                          <div className="space-y-3 pt-3 border-t border-slate-100">
                            <div className="flex items-center justify-between text-xs font-sans text-slate-500">
                              <div className="flex items-center gap-1.5 font-bold text-daikin-blue">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{course.duration}</span>
                              </div>
                              <span className="text-[11px] text-slate-400 font-medium">Global Certified</span>
                            </div>

                            <button
                              onClick={() => setSelectedCourse(course)}
                              className="w-full py-2.5 bg-daikin-blue hover:bg-daikin-blue-dark text-white text-xs font-bold rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2"
                            >
                              <GraduationCap className="w-4 h-4" />
                              <span>Daftar Sekarang</span>
                            </button>
                          </div>
                        </div>

                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ── TAB 2: PUSAT PELATIHAN (EXACT EXTRACTED LAYOUT FROM USER IMAGE) ── */}
          {activeTab === 'center' && (
            <div className="space-y-12 max-w-6xl mx-auto">
              
              {/* Top Intro Section & Paragraphs Extracted from Image */}
              <FadeInUp className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-6 text-slate-700 font-sans">
                <div className="space-y-3">
                  <div className="inline-block bg-sky-50 text-daikin-blue text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border border-sky-100">
                    National Training Center
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold font-display text-charcoal">
                    Pusat Pelatihan Nasional Daikin
                  </h2>
                  <p className="text-daikin-blue font-semibold text-sm md:text-base italic">
                    "Menghadirkan Pengalaman Training Terbaik melalui Kurikulum Standar Global Daikin & Pelatihan Praktek Tingkat Tinggi"
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-100 pt-5">
                  <p className="font-semibold text-charcoal">
                    National Training Center diresmikan pada Kamis, 19 Juli 2018.
                  </p>
                  <p>
                    Di Daikin, kami sangat percaya bahwa pengetahuan dimaksudkan untuk dibagikan dan dipertukarkan agar tetap dapat mengikuti inovasi terbaru di pasar. Oleh karena itu, hidup dengan misi kami untuk menanamkan teknologi terbaru dan inovatif kami, kami berkomitmen penuh kepada orang-orang di industri yang sama.
                  </p>
                  <p>
                    National Training Center dirancang untuk meningkatkan kompetensi teknis & meningkatkan standar industri. Tempat ini akan membantu Anda mengembangkan keahlian produk dan layanan dengan melalui Pelatihan Praktek. Anda akan menerima pelatihan berkualitas tinggi melalui Kurikulum Standar Global Daikin. Ini berarti Anda akan mendapatkan tingkat pelatihan yang sama dengan praktisi Jepang dan Thailand.
                  </p>
                </div>

                <div className="pt-2 flex justify-center">
                  <button className="px-6 py-3 bg-daikin-blue text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-daikin-blue-dark transition-all shadow-md inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>National Training Covid-19 Prevention</span>
                  </button>
                </div>
              </FadeInUp>

              {/* City Sub-Tabs & Active Center Detail Box */}
              <FadeInUp className="space-y-6">
                
                {/* 1 Line City Sub-Tabs Without Scrollbar */}
                <div className="bg-white rounded-2xl p-1.5 border border-slate-200 shadow-2xs flex flex-wrap lg:flex-nowrap items-center justify-between gap-1">
                  {trainingCentersData.map((center) => {
                    const isActive = selectedCityId === center.id
                    return (
                      <button
                        key={center.id}
                        onClick={() => setSelectedCityId(center.id)}
                        className={`px-2 md:px-2.5 py-2 rounded-xl text-[11px] font-bold transition-all text-center flex-1 min-w-[65px] lg:min-w-0 ${
                          isActive
                            ? 'bg-daikin-blue text-white shadow-2xs'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-charcoal'
                        }`}
                      >
                        {center.city}
                      </button>
                    )
                  })}
                </div>

                {/* Selected City Location Box (Exact Screenshot Card Layout) */}
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden grid lg:grid-cols-12 gap-0">
                  
                  {/* Left Column Image */}
                  <div className="lg:col-span-5 relative min-h-[300px] bg-slate-100">
                    <img
                      src={activeCenter.image}
                      alt={activeCenter.city}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-daikin-blue text-white font-bold text-[11px] px-3 py-1 rounded-md uppercase tracking-wider shadow-2xs">
                      {activeCenter.city}
                    </div>
                  </div>

                  {/* Right Column Specifications */}
                  <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 space-y-6 flex flex-col justify-between bg-[#f8fafc]">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold font-display text-charcoal">
                          {activeCenter.city}
                        </h3>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-daikin-blue block mt-1">
                          {activeCenter.type}
                        </span>
                      </div>

                      {/* Detail Specification Table */}
                      <div className="space-y-2.5 text-xs sm:text-sm font-sans text-slate-700 border-t border-slate-200/80 pt-4">
                        <div className="grid grid-cols-12 gap-2">
                          <span className="col-span-4 font-semibold text-slate-500">Alamat</span>
                          <span className="col-span-8 font-medium text-slate-800">: {activeCenter.address}</span>
                        </div>
                        <div className="grid grid-cols-12 gap-2">
                          <span className="col-span-4 font-semibold text-slate-500">Nomor Telepon</span>
                          <span className="col-span-8 font-bold text-daikin-blue">: {activeCenter.phone}</span>
                        </div>
                        <div className="grid grid-cols-12 gap-2">
                          <span className="col-span-4 font-semibold text-slate-500">Luas Area</span>
                          <span className="col-span-8 font-medium text-slate-800">: {activeCenter.area}</span>
                        </div>
                        <div className="grid grid-cols-12 gap-2">
                          <span className="col-span-4 font-semibold text-slate-500">Kapasitas Pelatihan</span>
                          <span className="col-span-8 font-medium text-slate-800">: {activeCenter.capacity}</span>
                        </div>
                        <div className="grid grid-cols-12 gap-2">
                          <span className="col-span-4 font-semibold text-slate-500">Ruang Pelatihan</span>
                          <span className="col-span-8 font-medium text-slate-800">: {activeCenter.rooms}</span>
                        </div>

                        {/* Fasilitas List */}
                        <div className="pt-2">
                          <span className="font-semibold text-slate-500 block mb-1">Fasilitas Pelatihan:</span>
                          <ul className="space-y-1.5 pl-4 list-disc text-slate-700 font-medium">
                            {activeCenter.facilities.map((fac, fIdx) => (
                              <li key={fIdx}>{fac}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-slate-200/80">
                      <a
                        href={activeCenter.mapQuery}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md inline-flex items-center gap-2"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Lihat Peta</span>
                      </a>
                    </div>

                  </div>

                </div>

              </FadeInUp>

            </div>
          )}

          {/* ── TAB 3: SISTEM PELATIHAN ONLINE (EXACT EXTRACTED LAYOUT FROM USER IMAGE) ── */}
          {activeTab === 'online' && (
            <div className="space-y-12 max-w-6xl mx-auto">
              
              {/* Top Intro Card */}
              <FadeInUp className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 inline-block">
                  Sistem Pelatihan Online
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-charcoal">
                  Sistem Reservasi & E-Learning Daikin
                </h2>
                <p className="text-slate-600 text-sm md:text-base font-sans font-light leading-relaxed max-w-3xl">
                  Daikin mengembangkan reservasi pelatihan secara online menggunakan manajemen sistem data untuk mendukung program pelatihan atau pembelajaran.
                </p>
              </FadeInUp>

              {/* Section: Apa yang dapat dilakukan? */}
              <FadeInUp className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-6">
                <h3 className="text-2xl font-extrabold font-display text-daikin-blue">
                  Apa yang dapat dilakukan?
                </h3>
                <ol className="space-y-4 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                  <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                    <span className="w-6 h-6 rounded-full bg-daikin-blue text-white font-bold flex items-center justify-center text-xs flex-shrink-0">1</span>
                    <span>
                      Anda dapat mengoperasikan informasi dimana pun dan kapan pun dengan mudah. Anda dapat secara langsung mendaftar melalui ponsel atau website apabila Anda ingin mengikuti pelatihan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                    <span className="w-6 h-6 rounded-full bg-daikin-blue text-white font-bold flex items-center justify-center text-xs flex-shrink-0">2</span>
                    <span>
                      Tanpa perlu menunggu, Anda bisa mendapatkan informasi secara langsung terkait dengan produk Daikin.
                    </span>
                  </li>
                </ol>
              </FadeInUp>

              {/* Split Section: Keuntungan Apps (Left) & 8-Step Prosedur Pendaftaran (Right) */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Card: Keuntungan Mengunduh Aplikasi Daikin Training */}
                <FadeInUp className="lg:col-span-5 bg-gradient-to-br from-[#061730] via-daikin-blue-dark to-[#005580] rounded-3xl p-8 text-white border border-white/20 shadow-xl space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                      Aplikasi Mobile Resmi
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white leading-tight">
                      Keuntungan Mengunduh Aplikasi Daikin Training
                    </h3>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm font-sans text-blue-100/90 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                      <span>Reservasi Pelatihan Online</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                      <span>Lihat Jadwal Pelatihan dengan Mudah</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                      <span>Akses Hasil Pelatihan & Catatan Kehadiran Sejarah</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                      <span>Ulasan Daikin Trainers & Quality Training Directly</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                      <span>Sertifikat Elektronik yang dapat diunduh</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-white/15 flex flex-wrap gap-3">
                    <a
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-black text-white font-bold text-xs shadow-md border border-white/20 hover:bg-slate-900 transition-all inline-flex items-center gap-2"
                    >
                      <Download className="w-4 h-4 text-cyan-300" />
                      <span>GET IT ON Google Play</span>
                    </a>
                  </div>
                </FadeInUp>

                {/* Right Card: 8-Step Prosedur Pendaftaran Training */}
                <FadeInUp className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue">
                      Alur Pendaftaran
                    </span>
                    <h3 className="text-2xl font-extrabold font-display text-charcoal">
                      Prosedur Pendaftaran Training
                    </h3>
                  </div>

                  {/* 8 Step Cards Grid (Extracted from Image Diagram) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                    
                    {/* Step 1 */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 relative group hover:border-sky-300 transition-all">
                      <div className="w-6 h-6 rounded-full bg-daikin-blue text-white text-[11px] font-bold flex items-center justify-center mx-auto">
                        1
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-daikin-blue flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                        <Download className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-charcoal block leading-snug font-sans">
                        Daikin Training Apps Download
                      </span>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 relative group hover:border-sky-300 transition-all">
                      <div className="w-6 h-6 rounded-full bg-daikin-blue text-white text-[11px] font-bold flex items-center justify-center mx-auto">
                        2
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-charcoal block leading-snug font-sans">
                        User Activation & Account Activation
                      </span>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 relative group hover:border-sky-300 transition-all">
                      <div className="w-6 h-6 rounded-full bg-daikin-blue text-white text-[11px] font-bold flex items-center justify-center mx-auto">
                        3
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-daikin-blue flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-charcoal block leading-snug font-sans">
                        Log In to Training Online System
                      </span>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 relative group hover:border-sky-300 transition-all">
                      <div className="w-6 h-6 rounded-full bg-daikin-blue text-white text-[11px] font-bold flex items-center justify-center mx-auto">
                        4
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-daikin-blue flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-charcoal block leading-snug font-sans">
                        Browse Training Schedule
                      </span>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 relative group hover:border-sky-300 transition-all">
                      <div className="w-6 h-6 rounded-full bg-daikin-blue text-white text-[11px] font-bold flex items-center justify-center mx-auto">
                        5
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-charcoal block leading-snug font-sans">
                        Click "Join" to reserve Training
                      </span>
                    </div>

                    {/* Step 6 */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 relative group hover:border-sky-300 transition-all">
                      <div className="w-6 h-6 rounded-full bg-daikin-blue text-white text-[11px] font-bold flex items-center justify-center mx-auto">
                        6
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-daikin-blue flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-charcoal block leading-snug font-sans">
                        Upcoming & Past Training Recorded
                      </span>
                    </div>

                    {/* Step 7 */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 relative group hover:border-sky-300 transition-all">
                      <div className="w-6 h-6 rounded-full bg-daikin-blue text-white text-[11px] font-bold flex items-center justify-center mx-auto">
                        7
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-cyan-500 flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-charcoal block leading-snug font-sans">
                        Review Training Satisfaction
                      </span>
                    </div>

                    {/* Step 8 */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 relative group hover:border-sky-300 transition-all">
                      <div className="w-6 h-6 rounded-full bg-daikin-blue text-white text-[11px] font-bold flex items-center justify-center mx-auto">
                        8
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white text-daikin-blue flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-charcoal block leading-snug font-sans">
                        Get e-Certificate
                      </span>
                    </div>

                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveTab('kurikulum')}
                      className="px-6 py-3 border-2 border-daikin-blue text-daikin-blue hover:bg-daikin-blue hover:text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-2xs inline-flex items-center gap-2"
                    >
                      <span>Daftar Sekarang</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </FadeInUp>

              </div>

            </div>
          )}

        </div>
      </section>

      {/* ── 4. INTERACTIVE MODAL REGISTRATION ───────────────────────────────── */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {isRegistered ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black font-display text-charcoal">Pendaftaran Terkirim!</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-sans max-w-sm mx-auto leading-relaxed">
                    Terima kasih <strong>{formData.name}</strong>. Tim Daikin Training Center akan menghubungi Anda via email <strong>{formData.email}</strong> untuk verifikasi jadwal pelatihan <strong>{selectedCourse.title}</strong>.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-all shadow-md"
                  >
                    Selesai
                  </button>
                </div>
              ) : (
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-daikin-blue text-[11px] font-bold uppercase tracking-wider mb-3">
                    <GraduationCap className="w-3.5 h-3.5" /> Pendaftaran Pelatihan
                  </div>

                  <h3 className="text-xl font-extrabold font-display text-charcoal mb-2 leading-tight">
                    {selectedCourse.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-4">
                    {selectedCourse.description}
                  </p>

                  {/* Course Highlights */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-5 space-y-2">
                    <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-2">Materi Pembelajaran:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-sans">
                      {selectedCourse.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-daikin-blue flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold font-display text-charcoal mb-1">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        placeholder="Masukkan nama lengkap Anda"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-charcoal font-sans focus:outline-none focus:border-daikin-blue"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold font-display text-charcoal mb-1">Email Aktif *</label>
                        <input
                          type="email"
                          required
                          placeholder="nama@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-charcoal font-sans focus:outline-none focus:border-daikin-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold font-display text-charcoal mb-1">No. WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="0812xxxxxxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-charcoal font-sans focus:outline-none focus:border-daikin-blue"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-display text-charcoal mb-1">Pilihan Gelombang Pelatihan</label>
                      <select
                        value={formData.batch}
                        onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-charcoal font-sans focus:outline-none focus:border-daikin-blue"
                      >
                        <option value="Gelombang 1 (Agustus 2026)">Gelombang 1 (Agustus 2026)</option>
                        <option value="Gelombang 2 (September 2026)">Gelombang 2 (September 2026)</option>
                        <option value="Gelombang 3 (Oktober 2026)">Gelombang 3 (Oktober 2026)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-daikin-blue hover:bg-daikin-blue-dark text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-2"
                    >
                      <span>Kirim Pendaftaran Pelatihan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating PichonKun Assistant Helper */}
      <PichonKunHelper />
    </PageTransition>
  )
}
