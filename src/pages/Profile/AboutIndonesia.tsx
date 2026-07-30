import React, { useState, useRef, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, Globe, Clock, Leaf, Zap, Wind, Award, ShieldCheck, 
  Search, Phone, MapPin, CheckCircle2, ChevronRight, ArrowRight, 
  Play, Image as ImageIcon, Factory, Shield, Sparkles, Users, TrendingUp 
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import WaveBackground from '@/components/animations/WaveBackground'
import PichonKunHelper from '@/components/sections/PichonKunHelper'
import { cn } from '@/utils/cn'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// ─── Data: Network Cards & Table Content ────────────────────────────────────
interface NetworkDetail {
  label: string
  headers: string[]
  rows: string[][]
}

const networkData: Record<string, NetworkDetail> = {
  branch: {
    label: 'Daftar Kantor Cabang Regional (14 Cabang)',
    headers: ['No', 'Kota / Wilayah', 'Alamat Kantor Cabang', 'Kontak Telepon'],
    rows: [
      ['1',  'Jakarta (Headquarter)', 'Menara Astra Lt. 7 & 8, Jalan Jendral Sudirman Kav. 5-6, Karet Tengsin, Jakarta Pusat 10220', '+62 21 8665 6886'],
      ['2',  'Tangerang',              'Jl. BSD Boulevard Barat, Ruko Foresta Business Loft 3 No. 8, Tangerang',       '+62 21 537 9900'],
      ['3',  'Bekasi',                 'Jl. Ahmad Yani No. 88, Summarecon Bekasi, Bekasi Selatan',                     '+62 21 8945 1100'],
      ['4',  'Bandung',                'Jl. Soekarno-Hatta No. 123, Margacinta, Bandung',                              '+62 22 7512 0100'],
      ['5',  'Semarang',               'Jl. Pemuda No. 45, Semarang Tengah',                                           '+62 24 8419 0200'],
      ['6',  'Yogyakarta',             'Jl. Solo Km. 8, Maguwoharjo, Sleman, Yogyakarta',                              '+62 274 4321 300'],
      ['7',  'Surabaya',               'Jl. Ahmad Yani No. 56, Surabaya Selatan',                                      '+62 31 8291 0400'],
      ['8',  'Denpasar',               'Jl. Bypass Ngurah Rai No. 77, Sanur, Denpasar, Bali',                          '+62 361 8888 500'],
      ['9',  'Makassar',               'Jl. A.P. Pettarani No. 18, Panakkukang, Makassar',                             '+62 411 8811 600'],
      ['10', 'Palembang',              'Jl. Jend. Sudirman No. 99, Bukit Besar, Palembang',                            '+62 711 8810 700'],
      ['11', 'Pekanbaru',              'Jl. HR. Soebrantas No. 33, Tampan, Pekanbaru',                                 '+62 761 8809 800'],
      ['12', 'Medan',                  'Jl. Gatot Subroto No. 150, Sei Sikambing, Medan',                              '+62 61 8808 900'],
      ['13', 'Manado',                 'Jl. Sam Ratulangi No. 22, Tikala, Manado',                                     '+62 431 8807 010'],
      ['14', 'Batam',                  'Jl. Engku Putri No. 11, Batam Center, Batam',                                  '+62 778 8806 011'],
    ],
  },
  proshop: {
    label: 'Daftar Daikin ProShop & iShop Dealer Resmi',
    headers: ['No', 'Nama Dealer ProShop', 'Kota', 'Lokasi & Alamat'],
    rows: [
      ['1',  'Daikin ProShop Senayan City',         'Jakarta',    'Senayan City LG Floor, Jl. Asia Afrika, Jakarta Pusat'],
      ['2',  'Daikin iShop Grand Indonesia',         'Jakarta',    'Grand Indonesia West Mall Lt. 5, Jakarta Pusat'],
      ['3',  'Daikin ProShop Summarecon Serpong',    'Tangerang',  'Summarecon Mall Serpong Lt. 2, Serpong, Tangerang'],
      ['4',  'Daikin iShop Aeon Mall BSD',           'Bekasi',     'Aeon Mall BSD City Lt. 1, Tangerang Selatan'],
      ['5',  'Daikin ProShop Bandung Indah Plaza',   'Bandung',    'Bandung Indah Plaza Lt. 3, Jl. Merdeka, Bandung'],
      ['6',  'Daikin ProShop Paragon Mall',          'Semarang',   'Paragon Mall Lt. 2, Jl. Pemuda No. 118, Semarang'],
      ['7',  'Daikin ProShop Hartono Mall',          'Yogyakarta', 'Hartono Mall Lt. 1, Jl. Ring Road Utara, Yogyakarta'],
      ['8',  'Daikin ProShop Tunjungan Plaza',       'Surabaya',   'Tunjungan Plaza 6 Lt. 4, Jl. Basuki Rahmat, Surabaya'],
      ['9',  'Daikin iShop Discovery Mall Bali',     'Denpasar',   'Discovery Shopping Mall Lt. 2, Jl. Kartika Plaza, Kuta, Bali'],
      ['10', 'Daikin ProShop Lippo Plaza Medan',     'Medan',      'Lippo Plaza Medan Lt. 3, Jl. Gatot Subroto, Medan'],
      ['11', 'Daikin ProShop Trans Studio Makassar', 'Makassar',   'Trans Studio Mall Lt. 1, Jl. A.P. Pettarani, Makassar'],
      ['12', 'Daikin ProShop Mega Mall Batam',       'Batam',      'Mega Mall Batam Center Lt. 1, Jl. Engku Putri, Batam'],
    ],
  },
  zone: {
    label: 'Daftar Showroom Xperience Zone Daikin',
    headers: ['No', 'Nama Showroom Xperience', 'Kota', 'Lokasi'],
    rows: [
      ['1', 'Daikin Xperience Zone Jakarta',  'Jakarta',  'Menara Astra Lt. 7 & 8, Jalan Jendral Sudirman Kav. 5-6, Jakarta Pusat 10220'],
      ['2', 'Daikin Xperience Zone Surabaya', 'Surabaya', 'Pakuwon Mall Lt. 2, Jl. Puncak Indah Lontar, Surabaya Barat'],
      ['3', 'Daikin Xperience Zone Bandung',  'Bandung',  'Paris Van Java Mall Lt. 1, Jl. Sukajadi No. 137–139, Bandung'],
      ['4', 'Daikin Xperience Zone Medan',    'Medan',    'Sun Plaza Lt. 3, Jl. Zainul Arifin, Medan Petisah'],
      ['5', 'Daikin Xperience Zone Makassar', 'Makassar', 'Trans Studio Mall Lt. 1, Jl. Metro Tanjung Bunga, Makassar'],
      ['6', 'Daikin Xperience Zone Bali',     'Denpasar', 'Beachwalk Shopping Center Lt. 1, Jl. Pantai Kuta, Badung, Bali'],
    ],
  },
  service: {
    label: 'Daftar Service Station Terintegrasi (500+ Titik)',
    headers: ['No', 'Nama Service Station', 'Kota / Wilayah', 'Jam Operasional', 'Status Service'],
    rows: [
      ['1',  'Daikin Service Center Jakarta Pusat',    'Jakarta',    '08:00 – 17:00', 'Aktif Resmi'],
      ['2',  'Daikin Service Center Jakarta Selatan',  'Jakarta',    '08:00 – 17:00', 'Aktif Resmi'],
      ['3',  'Daikin Service Center Jakarta Barat',    'Jakarta',    '08:00 – 17:00', 'Aktif Resmi'],
      ['4',  'Daikin Service Center Tangerang',        'Tangerang',  '08:00 – 17:00', 'Aktif Resmi'],
      ['5',  'Daikin Service Center Bekasi',           'Bekasi',     '08:00 – 17:00', 'Aktif Resmi'],
      ['6',  'Daikin Service Center Bandung',          'Bandung',    '08:00 – 17:00', 'Aktif Resmi'],
      ['7',  'Daikin Service Center Semarang',         'Semarang',   '08:00 – 17:00', 'Aktif Resmi'],
      ['8',  'Daikin Service Center Yogyakarta',       'Yogyakarta', '08:00 – 17:00', 'Aktif Resmi'],
      ['9',  'Daikin Service Center Surabaya Utara',   'Surabaya',   '08:00 – 17:00', 'Aktif Resmi'],
      ['10', 'Daikin Service Center Surabaya Selatan', 'Surabaya',   '08:00 – 17:00', 'Aktif Resmi'],
      ['11', 'Daikin Service Center Denpasar',         'Denpasar',   '08:00 – 17:00', 'Aktif Resmi'],
      ['12', 'Daikin Service Center Makassar',         'Makassar',   '08:00 – 17:00', 'Aktif Resmi'],
      ['13', 'Daikin Service Center Palembang',        'Palembang',  '08:00 – 17:00', 'Aktif Resmi'],
      ['14', 'Daikin Service Center Pekanbaru',        'Pekanbaru',  '08:00 – 17:00', 'Aktif Resmi'],
      ['15', 'Daikin Service Center Medan',            'Medan',      '08:00 – 17:00', 'Aktif Resmi'],
      ['16', 'Daikin Service Center Manado',           'Manado',     '08:00 – 17:00', 'Aktif Resmi'],
      ['17', 'Daikin Service Center Batam',            'Batam',      '08:00 – 17:00', 'Aktif Resmi'],
    ],
  },
}

export default function AboutIndonesia() {
  const [activeNetworkTab, setActiveNetworkTab] = useState<string>('branch')
  const [branchSearch, setBranchSearch] = useState('')
  const tableRef = useRef<HTMLDivElement>(null)

  const selectedNetwork = networkData[activeNetworkTab] || networkData.branch
  const filteredRows = selectedNetwork.rows.filter(row =>
    row.some(cell => cell.toLowerCase().includes(branchSearch.toLowerCase()))
  )

  return (
    <PageTransition>
      <PageMeta
        title="Tentang Daikin Indonesia | PT Daikin Airconditioning Indonesia"
        description="Daikin Indonesia didirikan untuk memenuhi kebutuhan pasar pendingin udara di Indonesia dengan berbagai macam produk berkualitas tinggi buatan Jepang."
        canonical="/profile/about"
      />

      {/* ── 1. HERO HEADER ─────────────────────────────────────────────────── */}
      <div className="relative pt-28 pb-12 md:pt-36 md:pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue text-center">
        <Suspense fallback={null}><AirParticles /></Suspense>
        
        {/* Radial dots pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-daikin-blue-light/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-white/70 mb-6 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/all-about" className="hover:text-white transition-colors">Profil Perusahaan</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white drop-shadow-md">Tentang Daikin Indonesia</span>
          </nav>

          <FadeInUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              Tentang <span className="text-daikin-blue-light font-light">Daikin Indonesia</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow max-w-2xl mx-auto">
              Pelopor solusi tata udara tepercaya buatan Jepang untuk kenyamanan hunian dan bisnis di Indonesia.
            </p>
          </FadeInUp>
        </div>

        <WaveBackground inverted />
      </div>

      {/* ── 2. INTRO NARRATIVE & HEADQUARTER CONTACT CARD ──────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative Text */}
            <FadeInLeft className="lg:col-span-7 space-y-5 text-gray-700 font-sans text-base leading-relaxed font-light">
              <p className="text-lg md:text-xl font-medium text-charcoal leading-relaxed">
                Daikin Indonesia didirikan untuk memenuhi kebutuhan pasar pendingin udara di Indonesia dengan berbagai macam produk berkualitas tinggi.
              </p>
              <p>
                Pengalaman Daikin dalam mengembangkan pendingin udara berkualitas dunia dari Jepang ke berbagai penjuru dunia adalah fondasi yang kokoh bagi kesuksesan Daikin di Indonesia.
              </p>
              <p>
                Menyadari pentingnya pasar Indonesia, Daikin terus berinvestasi dan memperluas jaringan penjualan serta layanannya demi memberikan kenyamanan terbaik untuk seluruh pelanggan di Tanah Air.
              </p>
            </FadeInLeft>

            {/* Right Headquarter Contact Card */}
            <FadeInRight className="lg:col-span-5">
              <div className="bg-gradient-to-br from-sky-50 via-daikin-blue-50 to-blue-100/60 rounded-3xl p-6 sm:p-8 border border-daikin-blue/20 shadow-md space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-daikin-blue text-white flex items-center justify-center shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-charcoal text-base">
                      PT Daikin Airconditioning Indonesia
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-daikin-blue">
                      Head Quarter
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2 border-t border-daikin-blue/15 text-xs sm:text-sm font-sans text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-1" />
                    <span>
                      Menara Astra Lt. 7 & 8, Jalan Jendral Sudirman Kav. 5-6, Karet Tengsin, Tanah Abang, Jakarta Pusat 10220, Indonesia
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                    <span className="font-semibold text-charcoal">+62 21 8665 6886</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-daikin-blue/20 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Daikin Contact Center</span>
                      <span className="font-bold text-daikin-blue text-base">0800 1 081 081</span>
                    </div>
                    <span className="text-[11px] font-semibold text-daikin-blue bg-daikin-blue-50 px-2.5 py-1 rounded-md border border-daikin-blue/15">
                      Bebas Pulsa
                    </span>
                  </div>
                </div>
              </div>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* ── 3. SEKILAS DAIKIN INDONESIA (4 GRID STAT CARDS + VIDEO PLACEHOLDER) ── */}
      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
          
          <FadeInUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-3.5 py-1.5 rounded-full border border-daikin-blue/15">
              Statistik & Keunggulan Utama
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal">
              Sekilas Daikin Indonesia
            </h2>
            <p className="text-xs sm:text-sm font-sans text-gray-500">
              Empat pilar utama keunggulan PT Daikin Airconditioning Indonesia di Tanah Air.
            </p>
          </FadeInUp>

          {/* Grid Layout: Left Video Placeholder + Right 4 Cards Grid */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Large Video / Visual Card Placeholder */}
            <FadeInLeft className="lg:col-span-6 flex">
              <div className="w-full bg-gradient-to-br from-[#005580] to-daikin-blue rounded-3xl p-6 sm:p-8 border border-white/20 shadow-md flex flex-col items-center justify-center text-center text-white relative overflow-hidden group cursor-pointer min-h-[300px]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-7 h-7 ml-1" />
                  </div>
                  <h3 className="font-bold font-display text-lg text-white">
                    Video Sekilas Daikin Indonesia
                  </h3>
                  <p className="text-xs font-sans text-white/80 max-w-sm">
                    Saksikan perjalanan dan dedikasi Daikin menyempurnakan kualitas udara Indonesia.
                  </p>
                </div>
              </div>
            </FadeInLeft>

            {/* Right 4 Stat Cards */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {[
                { label: 'Cabang Regional', value: '14', unit: 'Cabang', desc: 'Tersebar di kota-kota strategis Indonesia', icon: MapPin },
                { label: 'Dealer Resmi', value: '1.200+', unit: 'Mitra', desc: 'Jaringan dealer terpercaya nasional', icon: Building2 },
                { label: 'Titik Service', value: '500+', unit: 'Lokasi', desc: 'Layanan purna jual siap melayani', icon: ShieldCheck },
                { label: 'Pabrik Resmi Berdiri', value: '2012', unit: 'Tahun', desc: 'Komitmen investasi manufaktur lokal', icon: Factory },
              ].map((stat, i) => {
                const IconComp = stat.icon
                return (
                  <FadeInUp key={stat.label} delay={i * 0.05}>
                    <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-200 space-y-2 h-full flex flex-col justify-between">
                      <div className="w-10 h-10 rounded-xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-2xl sm:text-3xl font-extrabold font-display text-daikin-blue">
                          {stat.value}
                        </span>
                        <h4 className="font-bold font-display text-charcoal text-xs sm:text-sm mt-0.5">
                          {stat.label}
                        </h4>
                        <p className="text-[11px] font-sans text-gray-500 leading-tight mt-1">
                          {stat.desc}
                        </p>
                      </div>
                    </div>
                  </FadeInUp>
                )
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. VISI & MISI KAMI ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Visi Kami Card */}
            <FadeInLeft>
              <div className="bg-gradient-to-br from-sky-50/70 to-white rounded-3xl p-8 border border-daikin-blue/20 shadow-sm space-y-4 h-full relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-daikin-blue text-white flex items-center justify-center shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal">
                  Visi Kami
                </h3>
                <p className="text-gray-700 font-sans text-base sm:text-lg leading-relaxed font-light">
                  Menjadi perusahaan pendingin udara nomor 1 di Indonesia yang terpercaya, terdepan dalam teknologi, dan berkelanjutan bagi masyarakat.
                </p>
              </div>
            </FadeInLeft>

            {/* Misi Kami Card */}
            <FadeInRight>
              <div className="bg-gradient-to-br from-blue-50/70 to-white rounded-3xl p-8 border border-daikin-blue/20 shadow-sm space-y-4 h-full relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-daikin-blue-dark text-white flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal">
                  Misi Kami
                </h3>
                <ul className="space-y-3 font-sans text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-1" />
                    <span>Berkontribusi kepada masyarakat Indonesia dengan menyediakan solusi dan produk AC yang mutakhir.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-1" />
                    <span>Melakukan hubungan bisnis yang baik dengan pelanggan, mitra dealer, dan penyedia eksternal.</span>
                  </li>
                </ul>
              </div>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* ── 5. KEBIJAKAN MUTU ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-3.5 py-1.5 rounded-full border border-daikin-blue/15">
                Komitmen Kualitas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal">
                Kebijakan Mutu
              </h2>
              <p className="text-xs sm:text-sm font-sans text-gray-500">
                Komitmen PT Daikin Airconditioning Indonesia terhadap standar kualitas dan kepuasan pelanggan.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* 5 Points List */}
              <div className="lg:col-span-7 space-y-3.5">
                {[
                  'Memenuhi persyaratan pelanggan untuk peningkatan kepuasan dan berkomitmen patuh terhadap regulasi yang berlaku di Indonesia.',
                  'Menyediakan produk yang bermutu, berteknologi tinggi dengan harga bersaing.',
                  'Menambah jaringan penjualan dan service di seluruh Indonesia.',
                  'Meningkatkan kualitas dan produktivitas sumber daya manusia.',
                  'Melakukan perbaikan terus-menerus terhadap pelayanan dan efektivitas penerapan Sistem Manajemen Mutu.'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-gray-150">
                    <div className="w-6 h-6 rounded-full bg-daikin-blue text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-sans text-gray-700 leading-relaxed font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Visual Box */}
              <div className="lg:col-span-5 aspect-[4/3] rounded-2xl border-2 border-dashed border-gray-200 bg-gradient-to-br from-sky-50 to-blue-50 flex flex-col items-center justify-center p-6 text-center">
                <ImageIcon className="w-12 h-12 text-daikin-blue mb-2" />
                <span className="text-xs font-bold text-gray-700">THUMBNAIL PLACEHOLDER</span>
                <span className="text-[11px] font-sans text-gray-500 mt-1">Visual Kebijakan Mutu Daikin Indonesia</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. DAIKIN GROUP SECTION (3 ENTITY CARDS) ─────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-2xl font-black font-display tracking-wider text-daikin-blue">
              DAIKIN <span className="font-light text-gray-700">Group</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal">
              Entitas Grup Daikin di Indonesia
            </h2>
            <p className="text-xs sm:text-sm font-sans text-gray-500">
              Sinergi grup dalam pemasaran, manufaktur pabrik, dan investasi berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'PT Daikin Airconditioning Indonesia',
                badge: 'Pemasaran & Penjualan',
                desc: 'Unit bisnis resmi purna jual, pemasaran, dan distribusi produk AC Daikin untuk hunian dan komersial di seluruh Indonesia.',
                path: '/profile/about',
                bg: 'from-sky-50 to-white'
              },
              {
                title: 'PT Daikin Manufacturing Indonesia',
                badge: 'Pabrik Manufaktur',
                desc: 'Fasilitas pabrik manufaktur produksi pendingin udara Daikin di Indonesia dengan standar mutu tinggi khas Jepang.',
                path: '/profile/about',
                bg: 'from-blue-50 to-white'
              },
              {
                title: 'PT Daikin Industries Indonesia',
                badge: 'Investasi & Pengembangan',
                desc: 'Entitas grup yang menaungi pengembangan investasi jangka panjang dan ekspansi pabrik industri hijau Daikin di Indonesia.',
                path: '/profile/daikin-group',
                bg: 'from-cyan-50 to-white'
              }
            ].map((unit) => (
              <div key={unit.title} className={cn('rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 bg-gradient-to-b', unit.bg)}>
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-daikin-blue bg-daikin-blue-50 px-2.5 py-1 rounded-md border border-daikin-blue/15">
                    {unit.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-charcoal">
                    {unit.title}
                  </h3>
                  <p className="text-xs font-sans text-gray-600 leading-relaxed">
                    {unit.desc}
                  </p>
                </div>

                <Link to={unit.path} className="inline-flex items-center gap-1.5 text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark transition-colors pt-2">
                  <span>PROFIL UNIT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. KANTOR CABANG (BRANCHES TABLE WITH SEARCH) ─────────────────── */}
      <section className="py-14 md:py-20 bg-[#F8FAFC]" ref={tableRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue">
                Jaringan Nasional
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal mt-1">
                {selectedNetwork.label}
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari lokasi / kota..."
                value={branchSearch}
                onChange={(e) => setBranchSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-200 text-xs font-sans focus:outline-none focus:border-daikin-blue transition-colors shadow-xs"
              />
            </div>
          </div>

          {/* Interactive Table Container */}
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-sans">
                <thead className="bg-daikin-blue-50 text-daikin-blue-dark font-bold font-display border-b border-daikin-blue/15">
                  <tr>
                    {selectedNetwork.headers.map((h, i) => (
                      <th key={i} className="px-5 py-3.5 uppercase tracking-wider text-[11px]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-sky-50/50 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className={cn('px-5 py-3.5', cIdx === 1 && 'font-bold text-charcoal')}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={selectedNetwork.headers.length} className="px-5 py-8 text-center text-gray-400 font-sans">
                        Tidak ada data cabang yang sesuai dengan pencarian "{branchSearch}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── 8. PUSAT LAYANAN & JARINGAN KAMI (4 TAB CARDS) ────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue">
              Layanan Purna Jual & Jaringan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal">
              Pusat Layanan & Jaringan Kami
            </h2>
            <p className="text-xs sm:text-sm font-sans text-gray-500">
              Pilih kategori jaringan di bawah ini untuk menampilkan daftar titik lokasi resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { id: 'branch', title: 'Kantor Cabang', subtitle: '14 Cabang Regional Indonesia', icon: MapPin },
              { id: 'proshop', title: 'Daikin PROSHOP', subtitle: 'ProShop & iShop Official Dealer', icon: Building2 },
              { id: 'zone', title: 'Xperience Zone', subtitle: 'Showroom Pengalaman Utama', icon: Sparkles },
              { id: 'service', title: 'Service Station', subtitle: '500+ Titik Service Resmi', icon: ShieldCheck },
            ].map((card) => {
              const Icon = card.icon
              const isActive = activeNetworkTab === card.id
              return (
                <button
                  key={card.id}
                  onClick={() => {
                    setActiveNetworkTab(card.id)
                    setTimeout(() => tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100)
                  }}
                  className={cn(
                    'p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-4 group',
                    isActive
                      ? 'bg-daikin-blue text-white border-daikin-blue shadow-md'
                      : 'bg-white text-charcoal border-gray-200/80 hover:border-daikin-blue/40 hover:bg-sky-50/50'
                  )}
                >
                  <div className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center transition-colors',
                    isActive ? 'bg-white/20 text-white' : 'bg-daikin-blue-50 text-daikin-blue'
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-bold font-display text-base mb-1">
                      {card.title}
                    </h3>
                    <p className={cn('text-xs font-sans', isActive ? 'text-white/80' : 'text-gray-500')}>
                      {card.subtitle}
                    </p>
                  </div>

                  <div className={cn('text-xs font-bold flex items-center gap-1 pt-2', isActive ? 'text-white' : 'text-daikin-blue')}>
                    <span>LIHAT DAFTAR</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 9. PT DAIKIN MANUFACTURING INDONESIA (DARK SECTION) ───────────── */}
      <section className="py-16 md:py-24 bg-[#0a1526] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              Pabrik Manufaktur Lokal
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
              PT Daikin Manufacturing Indonesia
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base font-sans font-light max-w-2xl mx-auto">
              Pabrik manufaktur AC Daikin di Indonesia – Menghadirkan kualitas mutu tinggi Jepang buatan anak bangsa.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-xs font-bold border border-white/20">
                SERTIFIKASI MUTU PABRIK
              </span>
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-xs font-bold border border-white/20">
                TENTANG PABRIK
              </span>
            </div>
          </div>

          {/* 2 Cards Grid: Tentang Pabrik & Fasilitas Produksi */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/15 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-daikin-blue text-white flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Tentang Pabrik
              </h3>
              <p className="text-xs sm:text-sm font-sans text-blue-100/90 leading-relaxed font-light">
                Fasilitas manufaktur modern Daikin di Indonesia memproduksi berbagai lini AC residensial dan komersial dengan standar kontrol mutu tertinggi khas Daikin Jepang.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/15 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Fasilitas Produksi
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-blue-100/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Mesin otomatisasi perakitan presisi tinggi.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Pengujian ketahanan suhu & kebocoran 100%.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Standar lingkungan ISO 14001 & TKDN resmi.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sertifikasi Resmi & Standar Mutu Badges */}
          <div className="space-y-6 pt-4 text-center">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-cyan-300">
              Sertifikasi Resmi & Standar Mutu Global
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { title: 'ISO 9001', desc: 'Manajemen Mutu Global' },
                { title: 'ISO 14001', desc: 'Manajemen Lingkungan' },
                { title: 'Standar SNI', desc: 'Sertifikasi Nasional Indonesia' },
                { title: 'TKDN Resmi', desc: 'Tingkat Komponen Dalam Negeri' },
                { title: 'ISO 45001', desc: 'Keselamatan & Kesehatan Kerja' },
              ].map((cert) => (
                <div key={cert.title} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center space-y-1">
                  <span className="block text-sm font-bold font-display text-white">{cert.title}</span>
                  <span className="block text-[10px] font-sans text-blue-100/70">{cert.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PichonKun Assistant Helper */}
      <PichonKunHelper />
    </PageTransition>
  )
}
