import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  X,
  Image as ImageIcon,
  ChevronRight,
  Globe,
  Wind,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  FileText
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'
import { cn } from '@/utils/cn'

interface CountryStory {
  id: string
  country: string
  flag: string
  title: string
  description: string
  details: string[]
  illustrationText: string
  imageBg: string
}

const COUNTRY_STORIES: CountryStory[] = [
  {
    id: 'jepang',
    country: 'Jepang',
    flag: '🇯🇵',
    title: 'Kenyamanan Presisi & Efisiensi Energi Inverter',
    description: 'Udara nyaman berkat teknologi Inverter Daikin yang menjaga suhu ruangan tetap stabil, hemat energi, serta menciptakan suasana tenang dan berkualitas.',
    details: [
      'Pengembangan teknologi kompresor Inverter pertama di Osaka, Jepang.',
      'Suhu ruangan tetap seimbang tanpa fluktuasi drastis.',
      'Operasi super senyap hingga 19 dB untuk kenyamanan tidur maksimal.'
    ],
    illustrationText: 'Visual Ruang Indoor & Sistem Inverter Jepang',
    imageBg: 'from-[#e0f2fe] to-sky-50'
  },
  {
    id: 'italia',
    country: 'Italia',
    flag: '🇮🇹',
    title: 'Solusi Pendinginan Musim Panas Ekstrem di Eropa',
    description: 'Menjawab kebutuhan udara dingin di Eropa saat musim panas yang kian ekstrem dengan teknologi pendinginan presisi tinggi dan kendali aplikasi pintar.',
    details: [
      'Teknologi pendinginan efisien tinggi sesuai regulasi ketat Uni Eropa.',
      'Integrasi kontrol nirkabel smartphone untuk kenyamanan jarak jauh.',
      'Desain estetis khas Eropa yang menyatu dengan arsitektur klasik & modern.'
    ],
    illustrationText: 'Visual Smart Control App & AC Hunian Eropa',
    imageBg: 'from-sky-50 to-blue-50'
  },
  {
    id: 'india',
    country: 'India',
    flag: '🇮🇳',
    title: 'Filtrasi Canggih & Pemurnian Udara Cuaca Tropis Ekstrem',
    description: 'Menghadapi cuaca ekstrem dan kualitas udara tercemar dengan filtrasi canggih Streamer Daikin untuk udara bersih dan sehat.',
    details: [
      'Teknologi Streamer Discharge membasmi 99.9% virus, bakteri, dan polutan PM2.5.',
      'Unit pendingin tahan suhu terik matahari gurun & tropis hingga 52°C.',
      'Perlindungan filter anti-bakteri berlapis untuk saluran pernapasan.'
    ],
    illustrationText: 'Visual Filter Streamer & Pemurni Udara',
    imageBg: 'from-cyan-50 to-sky-50'
  },
  {
    id: 'singapura',
    country: 'Singapura',
    flag: '🇸🇬',
    title: 'Sistem Tata Udara Gedung Perkotaan Skala Tinggi',
    description: 'Solusi tata udara efisien tinggi untuk gedung tinggi dan ruang terbatas di pusat perkotaan yang padat.',
    details: [
      'Sistem central chilled water & VRV untuk gedung pencakar langit.',
      'Efisiensi tempat outdoor dengan rasio hemat energi tinggi.',
      'Sertifikasi bangunan hijau (Green Mark Certified) standar Singapura.'
    ],
    illustrationText: 'Visual Cloud Chiller & Server Network Building',
    imageBg: 'from-sky-50 to-blue-100'
  },
  {
    id: 'filipina',
    country: 'Filipina',
    flag: '🇵🇭',
    title: 'Kemitraan & Pelatihan Teknisi Berstandar Jepang',
    description: 'Kemitraan pelatihan teknisi lokal untuk memastikan instalasi dan servis AC berstandar kualitas tinggi khas Daikin Jepang.',
    details: [
      'Akademi pelatihan teknisi resmi Daikin Training Center.',
      'Standar kerja presisi tinggi untuk mencegah kebocoran freon & korsleting.',
      'Dukungan purna jual & jaringan dealer resmi terpercaya.'
    ],
    illustrationText: 'Visual Akademi Pelatihan & Teknisi Daikin',
    imageBg: 'from-amber-50/60 to-sky-50'
  },
  {
    id: 'pantai-gading',
    country: 'Pantai Gading',
    flag: '🇨🇮',
    title: 'Kesegaran Pendinginan di Tropis Afrika Barat',
    description: 'Membawa kesegaran pendinginan Daikin ke wilayah Afrika Barat yang beriklim tropis kering dengan daya tahan tinggi.',
    details: [
      'Unit outdoor tahan korosi & cuaca ekstrem tropis kering.',
      'Kemudahan perawatan di area terpencil dengan suku cadang handal.',
      'Solusi pendingin komersial & residensial terjangkau.'
    ],
    illustrationText: 'Visual Rute Distribusi Global Jepang - Dubai - Afrika',
    imageBg: 'from-sky-50 to-blue-50'
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    flag: '🇲🇾',
    title: 'Inovasi AC Tahan Lembab & Cuaca Panas Tropis',
    description: 'Inovasi AC tahan cuaca lembab dan panas dengan daya tahan tinggi serta operasi hemat energi untuk iklim Asia Tenggara.',
    details: [
      'Lapisan Blue Fin anti-karat pada kisi-kisi kondensor outdoor.',
      'Pengatur kelembaban udara otomatis mencegah pertumbuhan jamur.',
      'Daya tahan tegangan listrik fleksibel untuk wilayah berkembang.'
    ],
    illustrationText: 'Visual AC Outdoor Tropis & Pemandangan Jendela',
    imageBg: 'from-blue-50 to-sky-100'
  },
  {
    id: 'uea',
    country: 'UEA (Uni Emirat Arab)',
    flag: '🇦🇪',
    title: 'Pendinginan Skala Besar Pencakar Langit Gurun',
    description: 'Pendinginan terpusat skala besar untuk pencakar langit di tengah cuaca gurun panas yang sangat ekstrem.',
    details: [
      'Sistem Daikin VRV kapasitas raksasa untuk temperatur di atas 50°C.',
      'Penghematan konsumsi energi puncak pada masa beban tinggi.',
      'Pengontrolan terpusat pintar berbasis sistem BMS (Building Management System).'
    ],
    illustrationText: 'Visual Pencakar Langit Dubai & Modern Skyline',
    imageBg: 'from-sky-100 to-cyan-50'
  },
  {
    id: 'cina',
    country: 'Cina',
    flag: '🇨🇳',
    title: 'Standardisasi Mutu & Pengujian Kualitas Ketat',
    description: 'Standardisasi mutu produksi pabrik dan pengujian kualitas ketat untuk memastikan keandalan tiap unit Daikin di seluruh dunia.',
    details: [
      'Fasilitas manufaktur berteknologi robotik canggih.',
      'Pengujian ketahanan suhu, getaran, dan keheningan 100% komprehensif.',
      'Pasokan suku cadang presisi tinggi sesuai standar Daikin Jepang.'
    ],
    illustrationText: 'Visual Inspeksi Kualitas & Pabrik Manufaktur',
    imageBg: 'from-blue-50 to-sky-50'
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    title: 'Pendingin Hemat Energi untuk Iklim Panas Australia',
    description: 'Solusi pendingin hemat energi yang mampu bertahan di lingkungan ekosistem cuaca panas tinggi dan angin pesisir.',
    details: [
      'Inverter cerdas yang menghemat biaya listrik energi rumah tangga.',
      'Perlindungan tahan garam laut (anti-corrosion protection) area pesisir.',
      'Solusi tata udara ramah lingkungan dengan refrigeran R-32.'
    ],
    illustrationText: 'Visual Instalasi AC Rumah Tinggal Australia',
    imageBg: 'from-sky-50 to-cyan-100'
  }
]

export default function PerfectingAirStories() {
  const [selectedStory, setSelectedStory] = useState<CountryStory | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const storiesContainerRef = useRef<HTMLDivElement>(null)

  const filteredStories = COUNTRY_STORIES.filter(s => {
    if (activeFilter === 'all') return true
    return s.id === activeFilter
  })

  return (
    <PageTransition>
      <PageMeta
        title="Cerita Perfecting The Air | Daikin Indonesia"
        description="Kisah tentang tantangan tata udara di berbagai belahan dunia dan bagaimana Daikin menjawabnya dengan teknologi udara ideal."
        canonical="/campaign/perfecting-air"
      />

      {/* ── 1. HERO BANNER (Global Earth / Sky Theme in Daikin Blue) ───── */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] text-white">
        <AirParticles color="white" />

        {/* Ambient Glows & Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-300/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-center">
          <Breadcrumb
            items={[
              { label: 'Campaign', path: '/campaign' },
              { label: 'Cerita Perfecting The Air' }
            ]}
            className="text-white/70 mb-8 justify-center"
          />

          <FadeInUp className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20 shadow-sm">
              <Globe className="w-4 h-4 text-cyan-300" />
              GLOBAL STORIES BY DAIKIN
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight uppercase drop-shadow-lg">
              Cerita Perfecting The Air
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Kisah tentang tantangan tata udara di berbagai belahan dunia dan bagaimana Daikin menjawabnya dengan teknologi udara ideal.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── 2. MAIN CONTENT WRAPPER ────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">

          {/* ══════════════════════════════════════════════════════════
              VIDEO PLACEMENT SECTION (TOP CAMPAIGN VIDEO PLACEHOLDER)
             ══════════════════════════════════════════════════════════ */}
          <FadeInUp>
            <section className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase text-daikin-blue tracking-wider">Video Utama Kampanye</span>
                <h3 className="text-xl md:text-2xl font-bold font-display text-charcoal leading-snug mt-1">
                  Perfecting The Air Video Showcase
                </h3>
              </div>

              <div className="w-full aspect-video bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] rounded-2xl border-2 border-dashed border-white/30 flex flex-col items-center justify-center text-center group hover:border-cyan-300 transition-colors relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold font-display text-white mb-1">
                    [Video Placement - Perfecting The Air Global Stories]
                  </h4>
                  <p className="text-xs font-sans text-white/80 max-w-md">
                    Video Dokumentasi "Cerita Perfecting The Air di Berbagai Belahan Dunia" oleh Daikin
                  </p>
                </div>
              </div>
            </section>
          </FadeInUp>

          {/* ══════════════════════════════════════════════════════════
              3. COUNTRY SELECTOR / NAVIGATION PILLS
             ══════════════════════════════════════════════════════════ */}
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase text-daikin-blue tracking-widest">
                Eksplorasi Global
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal">
                Pelajari tentang kisah masing-masing negara
              </h2>
              <p className="text-xs sm:text-sm font-sans text-gray-500">
                Pilih bendera atau negara di bawah ini untuk membaca bagaimana inovasi Daikin menyempurnakan kualitas udara lokal.
              </p>
            </div>

            {/* Country Pills Horizontal Bar */}
            <div className="flex items-center justify-center gap-2 flex-wrap max-w-5xl mx-auto pt-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-daikin-blue text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                🌐 Semua Negara (10)
              </button>

              {COUNTRY_STORIES.map((item) => {
                const isActive = activeFilter === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFilter(item.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 ${
                      isActive
                        ? 'bg-daikin-blue text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-daikin-blue/40 hover:bg-sky-50/50'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.country}</span>
                  </button>
                )
              })}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              4. COUNTRY STORIES LIST / CARDS GRID
             ══════════════════════════════════════════════════════════ */}
          <section ref={storiesContainerRef} className="space-y-8">
            <FadeInUp stagger className="space-y-6">
              {filteredStories.map((story, index) => {
                const isEven = index % 2 === 0
                return (
                  <FadeInItem key={story.id}>
                    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-daikin-blue/30 transition-all duration-300 overflow-hidden group flex flex-col lg:flex-row items-stretch">
                      
                      {/* Story Text Content */}
                      <div className={`p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{story.flag}</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-daikin-blue bg-daikin-blue-50 px-3 py-1 rounded-lg border border-daikin-blue/10">
                              {story.country}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal group-hover:text-daikin-blue transition-colors leading-snug">
                            {story.title}
                          </h3>

                          <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
                            {story.description}
                          </p>

                          {/* Highlights */}
                          <div className="pt-2 space-y-1.5">
                            {story.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs font-sans text-gray-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-daikin-blue mt-0.5 flex-shrink-0" />
                                <span className="leading-tight">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                          <button
                            onClick={() => setSelectedStory(story)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-daikin-blue hover:bg-daikin-blue-dark text-white rounded-xl font-bold text-xs transition-colors shadow-sm"
                          >
                            <span>BACA CERITA SELENGKAPNYA</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>

                      {/* Empty Thumbnail Visual Box */}
                      <div className={`w-full lg:w-[460px] bg-gradient-to-br ${story.imageBg} p-8 flex flex-col items-center justify-center text-center border-t lg:border-t-0 ${isEven ? 'lg:border-l lg:order-2' : 'lg:border-r lg:order-1'} border-gray-150 relative overflow-hidden flex-shrink-0 min-h-[220px]`}>
                        <div className="w-14 h-14 rounded-2xl bg-white text-daikin-blue flex items-center justify-center mb-3 shadow-sm border border-daikin-blue/15">
                          <ImageIcon className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                          THUMBNAIL PLACEHOLDER
                        </span>
                        <span className="text-[11px] font-sans text-gray-500 mt-1 max-w-xs leading-tight">
                          {story.illustrationText}
                        </span>
                      </div>

                    </div>
                  </FadeInItem>
                )
              })}
            </FadeInUp>
          </section>

          {/* ══════════════════════════════════════════════════════════
              5. CLOSING NARRATIVE BANNER (Earth Horizon Footer Narrative)
             ══════════════════════════════════════════════════════════ */}
          <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] text-white p-8 sm:p-12 md:p-16 shadow-2xl text-center">
            {/* Ambient Background Pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <FadeInUp>
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md text-cyan-300 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Globe className="w-6 h-6" />
                </div>

                <p className="text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed text-blue-100/95 italic">
                  "Udara mempunyai karakteristik yang berbeda di setiap belahan bumi. Di mana pun Daikin berada, kami selalu berkomitmen untuk menciptakan udara yang memberikan kenyamanan bagi setiap individu."
                </p>

                <div className="pt-4 border-t border-white/15">
                  <h3 className="text-lg sm:text-2xl font-black font-display text-white uppercase tracking-wider">
                    PERFECTING THE AIR — KAMI MENCIPTAKAN UDARA YANG SEMPURNA UNTUK ANDA.
                  </h3>
                </div>
              </FadeInUp>
            </div>
          </section>

        </div>
      </div>

      {/* ── 6. QUICK DETAIL MODAL (CERITA SELENGKAPNYA) ───────────────────── */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-sm">
            <div
              className="absolute inset-0"
              onClick={() => setSelectedStory(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full z-10 border border-gray-100"
            >
              {/* Modal Header */}
              <div className="p-6 bg-gradient-to-r from-[#0a1526] via-daikin-blue-dark to-[#0080cb] text-white flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{selectedStory.flag}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                      Cerita {selectedStory.country}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white leading-tight mt-1">
                    {selectedStory.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                {/* Visual Box */}
                <div className={`w-full aspect-[16/9] rounded-2xl border-2 border-dashed border-gray-200 bg-gradient-to-br ${selectedStory.imageBg} flex flex-col items-center justify-center text-center p-4`}>
                  <ImageIcon className="w-10 h-10 text-daikin-blue mb-2" />
                  <span className="text-xs font-bold text-gray-700">THUMBNAIL PLACEHOLDER</span>
                  <span className="text-[10px] font-sans text-gray-500 mt-0.5">{selectedStory.illustrationText}</span>
                </div>

                <p className="text-xs md:text-sm font-sans text-gray-700 leading-relaxed">
                  {selectedStory.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-display uppercase text-daikin-blue tracking-wider">
                    Sorotan Inovasi Lokal:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedStory.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="px-6 py-2.5 rounded-xl bg-daikin-blue hover:bg-daikin-blue-dark text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PageTransition>
  )
}
