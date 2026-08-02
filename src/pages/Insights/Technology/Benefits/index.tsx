import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap,
  Leaf,
  Droplets,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  ChevronRight,
  Info,
  Lock,
  Sparkles,
  Gauge,
  TrendingDown,
  Globe,
  Sun,
  Recycle,
  Award
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface TechDetail {
  id: string
  title: string
  subtitle: string
  badge: string
  icon: any
  color: string
  bgColor: string
  borderColor: string
  image: string
  excerpt: string
  fullDetail: {
    overview: string
    advantages: string[]
    ecoImpact: string
  }
}

const THREE_TECH: TechDetail[] = [
  {
    id: 'inverter',
    title: 'Inverter',
    subtitle: 'Untuk Penghematan Energi',
    badge: 'Efisiensi Energi',
    icon: Zap,
    color: 'text-[#0097E0]',
    bgColor: 'bg-sky-50',
    borderColor: 'border-[#0097E0]',
    image: '/images/hero/slider-emura.jpeg',
    excerpt: 'Inverter adalah teknologi hemat energi yang meniadakan operasi yang sia-sia di AC dengan mengontrol kecepatan motor secara efisien tanpa mati-hidup berulang kali.',
    fullDetail: {
      overview: 'Inverter adalah teknologi hemat energi yang meniadakan operasi yang sia-sia di AC dengan mengontrol kecepatan motor secara efisien. Pada AC non-inverter, suhu diatur dengan mematikan dan menghidupkan motor yang memboroskan daya. Pada AC tipe inverter, suhu diatur dengan mengubah kecepatan motor secara presisi tanpa mati-hidup.',
      advantages: [
        'Menghemat konsumsi energi hingga 58% dibandingkan tipe non-inverter.',
        'Efisiensi tinggi seperti pelari lari konstan tanpa henti tiba-tiba.',
        'Dikendalikan dengan magnet permanen dan elektromagnet arus listrik.',
        'Kecepatan putaran motor diatur melalui pengontrolan kecepatan switching arah arus listrik secara cermat.'
      ],
      ecoImpact: 'Menghilangkan kehilangan daya yang sia-sia dan mengoptimalkan efisiensi energi harian.'
    }
  },
  {
    id: 'heat-pump',
    title: 'Heat Pump',
    subtitle: 'Energi terbarukan',
    badge: 'Energi Terbarukan',
    icon: Leaf,
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50/70',
    borderColor: 'border-emerald-600',
    image: '/images/hero/slider-perfecting.jpg',
    excerpt: 'Heat pump adalah teknologi hemat energi yang menyalurkan panas tanpa perlu menghasilkan panas, mentransfer energi alami dari udara luar.',
    fullDetail: {
      overview: 'Heat pump adalah teknologi hemat energi yang menyalurkan panas tanpa perlu menghasilkan panas. Teknologi ini mengontrol suhu ruangan dengan memindahkan panas dari luar ke dalam ruangan hanya dengan sedikit energi listrik.',
      advantages: [
        'Menyalurkan panas alami di udara (bahkan di tempat dingin seperti Kutub).',
        'Memindahkan panas dari luar ke dalam ruangan hanya dengan sedikit listrik.',
        'Panas dibawa dan disirkulasikan oleh media refrigeran antara unit indoor & outdoor.',
        'Memanfaatkan hukum fisika perpindahan kalor dari suhu tinggi ke suhu rendah.'
      ],
      ecoImpact: 'Sangat hemat energi dan mengurangi konsumsi daya listrik harian.'
    }
  },
  {
    id: 'r32',
    title: 'R-32',
    subtitle: 'Refrigeran Paling Seimbang',
    badge: 'Refrigeran Ramah Lingkungan',
    icon: Droplets,
    color: 'text-[#0097E0]',
    bgColor: 'bg-sky-50',
    borderColor: 'border-[#0097E0]',
    image: '/images/hero/slider-streamer.jpg',
    excerpt: 'R-32 adalah refrigeran paling seimbang dalam hal dampak lingkungan, energi efisiensi, keamanan, dan efektivitas biaya.',
    fullDetail: {
      overview: 'R-32 adalah refrigeran paling seimbang yang saat ini mendapat perhatian global. Karena R-32 secara efisien menghantarkan panas, konsumsi listrik dapat berkurang hingga 10% dibanding R-22 dengan potensi pemanasan global (GWP) 1/3 dari R-410A.',
      advantages: [
        'Mengurangi konsumsi listrik hingga sekitar 10% dibanding AC R-22.',
        'Potensi Pemanasan Global (GWP 675) sepertiga dari R-410A (GWP 2,090).',
        'Potensi Penipisan Ozon nol (ODP = 0).',
        'Daikin pelopor pertama di dunia yang meluncurkan AC R-32 rumah tangga.'
      ],
      ecoImpact: 'Refrigeran ramah lingkungan terbaik untuk meredam pemanasan global.'
    }
  }
]

export default function Benefits() {
  const [selectedTechModal, setSelectedTechModal] = useState<TechDetail | null>(null)

  return (
    <PageTransition>
      <PageMeta
        title="Manfaat Teknologi Daikin - Inverter, Heat Pump & R-32"
        description="Pelajari tiga pilar teknologi utama Daikin: Inverter untuk penghematan energi, Heat Pump energi terbarukan, dan Refrigeran R-32 ramah lingkungan."
        canonical="/insights/technology/benefits"
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
              { label: 'Benefits of Tech' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="max-w-3xl">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                <Sparkles className="w-4 h-4 text-cyan-200" />
                Inovasi Kelas Dunia Daikin
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                Benefits of Tech <br />
                <span className="text-daikin-blue-light font-light">Inverter, Heat Pump & R-32</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                Tiga Teknologi Utama Daikin untuk Penghematan Energi Maksimal, Efisiensi Tinggi, dan Kelestarian Lingkungan Hidup.
              </p>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* ── Page Body Content ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

          {/* Extracted Intro Paragraph Box */}
          <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p className="text-lg md:text-xl font-bold text-[#0097E0] border-l-4 border-[#0097E0] pl-4">
              Untuk terus Menyempurnakan Udara di seluruh dunia.
            </p>
            <p>
              Daikin telah berjuang dengan semangat yang kuat untuk mencari solusi bagi udara yang kita tinggali.
            </p>
            <p>
              Di sini, kami memperkenalkan <strong>tiga teknologi utama</strong> yang dikembangkan Daikin untuk menghadirkan lingkungan hidup yang nyaman bagi orang-orang di seluruh dunia.
            </p>
            <p className="pt-2 border-t border-gray-100 font-semibold text-gray-900">
              Daikin telah menyediakan dan akan terus menyediakan ruang berharga bagi pelanggan kami dengan teknologi AC kelas dunia.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════
              3 CORE TECHNOLOGIES CARDS GRID (3 Cards per Row)
             ══════════════════════════════════════════════════════════ */}
          <section className="space-y-6">

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Pilar Inovasi</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-snug">
                  Tiga Teknologi Utama Daikin
                </h2>
              </div>
            </div>

            <FadeInUp stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {THREE_TECH.map((tech) => {
                const Icon = tech.icon
                return (
                  <FadeInItem key={tech.id}>
                    <div className={cn(
                      'bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group border-t-4',
                      tech.borderColor
                    )}>

                      {/* Fixed Thumbnail Image Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                        <img
                          src={tech.image}
                          alt={tech.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />

                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="bg-[#003B71] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                            {tech.badge}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 flex flex-col flex-1 bg-white space-y-3">

                        {/* Title & Arrow */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={cn('p-1.5 rounded-lg', tech.bgColor, tech.color)}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 group-hover:text-[#0097E0] transition-colors">
                              {tech.title} <span className="text-[#0097E0] font-bold">&gt;</span>
                            </h3>
                          </div>
                        </div>

                        {/* Subtitle extracted from image */}
                        <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                          {tech.subtitle}
                        </h4>

                        {/* Description */}
                        <p className="text-xs text-gray-600 leading-relaxed flex-1">
                          {tech.excerpt}
                        </p>

                        {/* Card Actions */}
                        <div className="pt-4 border-t border-gray-100 space-y-2">

                          {/* Primary Button: Lihat Ringkasan Detail (Modal Reader) */}
                          <button
                            onClick={() => setSelectedTechModal(tech)}
                            className="w-full py-2.5 bg-sky-50 hover:bg-sky-100 text-[#0097E0] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                          >
                            <Info className="w-3.5 h-3.5" />
                            <span>Lihat Ringkasan Detail</span>
                          </button>

                          {/* Secondary Lite Button: Detail Halaman */}
                          {tech.id === 'inverter' ? (
                            <Link
                              to="/insights/technology/inverter"
                              className="w-full py-2 border border-sky-100 bg-white hover:bg-sky-50/50 text-[#0097E0] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1 group"
                            >
                              <span>Detail Inverter</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          ) : tech.id === 'heat-pump' ? (
                            <Link
                              to="/insights/technology/heat-pump"
                              className="w-full py-2 border border-emerald-100 bg-white hover:bg-emerald-50/50 text-emerald-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1 group"
                            >
                              <span>Detail Heat Pump</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          ) : (
                            <Link
                              to="/insights/technology/r32"
                              className="w-full py-2 border border-sky-100 bg-white hover:bg-sky-50/50 text-[#0097E0] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1 group"
                            >
                              <span>Detail R-32</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          )}

                        </div>

                      </div>

                    </div>
                  </FadeInItem>
                )
              })}
            </FadeInUp>

          </section>

          {/* ══════════════════════════════════════════════════════════
              IN-DEPTH TECHNOLOGY BREAKDOWN SECTIONS
             ══════════════════════════════════════════════════════════ */}
          <section className="space-y-8 pt-4">

            {/* 1. Inverter Section */}
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Teknologi 01</span>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                    Inverter- Untuk Penghematan Energi Maksimal
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Kompresor merupakan jantung dari sistem pendingin udara yang mengonsumsi energi paling besar. AC konvensional (non-inverter) beroperasi pada kecepatan tetap: menyala dengan konsumsi daya penuh, kemudian mati saat suhu tercapai, dan menyala lagi dengan lonjakan listrik tinggi.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                  <h4 className="font-bold text-[#003B71] text-xs md:text-sm flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-[#0097E0]" /> Hemat Listrik s/d 60%
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Pengaturan frekuensi otomatis menyesuaikan beban pendinginan tanpa perlu mati-hidup kompresor.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                  <h4 className="font-bold text-[#003B71] text-xs md:text-sm flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#0097E0]" /> Suhu Ruangan Stabil
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Fluktuasi suhu sangat minim (±0.5°C) sehingga tidur terasa lebih nyenyak dan nyaman.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Heat Pump Section */}
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase text-emerald-600 tracking-wider">Teknologi 02</span>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                    Heat Pump- Memanfaatkan Energi Terbarukan Alami
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Heat Pump Daikin adalah teknologi efisiensi energi yang mengambil energi kalor terbarukan yang tersedia di udara luar untuk menghasilkan pemanasan maupun pendinginan udara.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-emerald-800 text-xs md:text-sm flex items-center gap-2">
                    <Sun className="w-4 h-4 text-emerald-600" /> 75% Energi Bebas Emisi
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Hanya menggunakan 25% listrik untuk memindahkan 100% kapasitas panas alami dari udara luar.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-emerald-800 text-xs md:text-sm flex items-center gap-2">
                    <Recycle className="w-4 h-4 text-emerald-600" /> Pengurangan Karbon Masif
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Menggantikan pemanas berbahan bakar fosil tradisional untuk mendukung target netralitas karbon.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. R-32 Section */}
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase text-blue-600 tracking-wider">Teknologi 03</span>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                    R-32- Refrigeran Paling Seimbang Untuk Iklim Bumi
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Refrigeran berperan penting memindahkan panas dalam AC. Daikin menjadi produsen pertama di dunia yang menerapkan R-32 secara massal untuk menyeimbangkan efisiensi energi tinggi dan dampak lingkungan yang rendah.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                  <h4 className="font-bold text-blue-900 text-xs md:text-sm flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600" /> Potensi GWP 1/3 Lebih Rendah
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Global Warming Potential R-32 (675) jauh lebih rendah dibanding R-410A (2088) dengan ODP 0.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                  <h4 className="font-bold text-blue-900 text-xs md:text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600" /> Kapasitas Transfer Dingin Tinggi
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Meningkatkan efisiensi energi AC hingga 10% dengan volume bahan pengisi yang lebih sedikit.
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* Quick Detail Modal */}
          <AnimatePresence>
            {selectedTechModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0097E0] text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Info className="w-3.5 h-3.5" /> Detail Ringkas Teknologi
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-1">
                    {selectedTechModal.title}
                  </h3>
                  <p className="text-xs font-bold uppercase text-gray-500 mb-4">
                    {selectedTechModal.subtitle}
                  </p>

                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                    {selectedTechModal.fullDetail.overview}
                  </p>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2 mb-6">
                    <h4 className="text-xs font-extrabold uppercase text-gray-700 tracking-wider">Keunggulan Utama:</h4>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {selectedTechModal.fullDetail.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedTechModal(null)}
                    className="w-full py-3 bg-[#0097E0] hover:bg-[#0080BD] text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                  >
                    Tutup Detail
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>



        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Memiliki AC Dengan Teknologi Inverter & R-32 Ramah Lingkungan?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Dapatkan rekomendasi AC Daikin hemat listrik dan garansi kompresor resmi di dealer iShop terdekat di kota Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Lihat Produk AC Inverter</span>
            </Link>
            <Link
              to="/services/ishop"
              className="px-6 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-bold text-xs md:text-sm transition-all"
            >
              Cari Dealer Resmi iShop
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  )
}
