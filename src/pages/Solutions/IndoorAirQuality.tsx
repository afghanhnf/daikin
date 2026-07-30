import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Wind, ShieldCheck, Sparkles, Filter, Activity,
  Zap, ArrowRight, Calculator, AlertTriangle, CheckCircle2,
  RefreshCw, Layers
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const pollutantsList = [
  {
    name: 'PM2.5 & Debu Halus',
    size: '2.5 µm',
    source: 'Asap kendaraan, pembakaran, debu mikro luar ruangan',
    effect: 'Masuk ke saluran pernapasan dalam, meningkatkan risiko asma & gangguan kardiovaskular',
    solution: 'Filter Electrostatic HEPA',
    efficacy: 'Menangkap 99.97% partikel halus'
  },
  {
    name: 'VOC & Gas Kimia',
    size: 'Molekuler',
    source: 'Cat dinding, mebel baru, pembersih bahan kimia, asap rokok',
    effect: 'Sakit kepala, iritasi mata, mual, & reaksi alergi kronis',
    solution: 'Streamer Technology & Filter Deodorizing',
    efficacy: 'Mendekomposisi molekul bau & racun'
  },
  {
    name: 'Jamur, Bakteri & Spora',
    size: '0.5 – 5 µm',
    source: 'Kelembaban ruangan tinggi, sudut AC basah, dinding lembab',
    effect: 'Infeksi saluran pernapasan, bau apek ruangan, reaksi bersin kronis',
    solution: 'Pembersihan Otomatis (Mold Proof) & Streamer',
    efficacy: 'Menghentikan pertumbuhan spora jamur'
  },
  {
    name: 'Virus & Bakteri Udara',
    size: '0.02 – 0.3 µm',
    source: 'Percikan droplet pernapasan dari orang yang bersin / batuk',
    effect: 'Penularan flu, penyakit virus musiman, dan infeksi menular',
    solution: 'Twin Streamer & Plasma Ion',
    efficacy: 'Inaktivasi 99.9% virus dalam 1-4 jam'
  },
  {
    name: 'Alergen Bulu Hewan & Tungau',
    size: '5 – 10 µm',
    source: 'Bulu kucing/anjing, serpihan kulit mati, debu kasur',
    effect: 'Rinitis alergi, mata gatal, hidung tersumbat saat tidur',
    solution: 'Filter Deodorizing Anti-Alergen',
    efficacy: 'Meneutralkan alergen organik secara efektif'
  }
]

const iaqPillars = [
  {
    title: 'Streamer Technology',
    tagline: 'Mekanisme Pelepasan Plasma Cerdas',
    desc: 'Teknologi eksklusif Daikin memancarkan elektron berkecepatan tinggi yang secara aktif membunuh 99.9% virus, bakteri, dan mendekomposisi bau tak sedap secara terus-menerus.',
    icon: Sparkles,
    badge: 'Paten Daikin'
  },
  {
    title: 'Filter Electrostatic HEPA',
    tagline: 'Penyaringan Partikel Mikro Presisi',
    desc: 'Menangkap 99.97% partikel mikroskopis berukuran hingga 0.3 mikron dengan medan listrik statis, menjaga sirkulasi udara bebas hambatan.',
    icon: Filter,
    badge: 'Efisiensi 99.97%'
  },
  {
    title: 'Ion Plasma Aktif',
    tagline: 'Pembersihan Udara dalam Ruangan',
    desc: 'Melepaskan ion plasma aktif ke seluruh sudut ruangan untuk menetralkan jamur dan bakteri yang menempel di permukaan dinding maupun perabot.',
    icon: Zap,
    badge: 'Perlindungan Area'
  },
  {
    title: 'Fitur Mold-Proof & Auto-Clean',
    tagline: 'Pencegahan Jamur Internal Unit',
    desc: 'Pengeringan otomatis kumparan kondensor setelah operasi AC mati guna mencegah pengembunan dan pertumbuhan spora jamur di dalam unit.',
    icon: RefreshCw,
    badge: 'Higienis Internal'
  }
]

const roomPresets = [
  {
    id: 'bedroom',
    title: 'Kamar Tidur Utama',
    riskLevel: 'Rendah - Sedang',
    riskColor: 'text-cyan-300',
    threats: ['Tungau Debu Kasur', 'Bakteri Ruang Ber-AC', 'Kelembaban Berlebih'],
    solutionDesc: 'AC Inverter Daikin dengan Streamer Technology menjaga kelembaban ideal serta membunuh alergen saat tidur tanpa suara bising.'
  },
  {
    id: 'living',
    title: 'Ruang Keluarga / Tamu',
    riskLevel: 'Tinggi (Lalu Lintas Udara Tinggi)',
    riskColor: 'text-cyan-300',
    threats: ['PM2.5 Luar Ruangan', 'Virus Udara Terbawa Tamu', 'Bau Masakan / Rokok'],
    solutionDesc: 'Kombinasi AC Daikin Multi-Split dan Daikin Air Purifier MC80ZVM7 memastikan pembersihan udara 24 jam di area berkumpul.'
  },
  {
    id: 'office',
    title: 'Ruang Kerja / Kantor',
    riskLevel: 'Sedang - Tinggi',
    riskColor: 'text-cyan-300',
    threats: ['Gas VOC dari Perabot Baru', 'Karbon Dioksida Tinggi', 'Debu Kertas / Karpet'],
    solutionDesc: 'Sistem ventilasi berteknologi Streamer menyegarkan sirkulasi O2 dan menyaring debu kimia agar konsentrasi kerja tetap maksimal.'
  }
]

export default function IndoorAirQuality() {
  const [activeRoom, setActiveRoom] = useState<string>('bedroom')

  const currentRoomData = roomPresets.find(r => r.id === activeRoom) || roomPresets[0]

  return (
    <PageTransition>
      <PageMeta
        title="Kualitas Udara Dalam Ruangan (IAQ) & Solusi Streamer Daikin"
        description="Pelajari pentingnya kualitas udara indoor (IAQ) dan teknologi Streamer Daikin yang mampu membunuh 99.9% virus, bakteri, serta mengeliminasi polutan PM2.5."
        canonical="/solutions/air-quality"
      />

      {/* ── 1. HERO BANNER SECTION ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#041d33] via-daikin-blue-dark to-[#005a9c] text-white pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 overflow-hidden">
        {/* Dynamic Background Particles */}
        <Suspense fallback={null}>
          <AirParticles />
        </Suspense>

        {/* Decorative Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[{ label: 'Solusi Tata Udara', path: '/solutions' }, { label: 'Kualitas Udara (IAQ)' }]}
            className="text-cyan-200/90 mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-sm">
                  Solusi Kualitas Udara Total • Daikin IAQ
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight">
                  Kualitas Udara Dalam Ruangan <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
                    (Indoor Air Quality)
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-base sm:text-lg text-blue-100/90 font-light leading-relaxed max-w-2xl">
                  Udara dalam ruangan bisa <span className="font-bold text-cyan-300">5x lebih tercemar</span> dibanding udara luar. Teknologi pemurni udara & Streamer Daikin secara aktif menyaring partikel berbahaya dan membunuh mikroorganisme demi kesehatan keluarga Anda.
                </p>
              </FadeInUp>

              {/* Quick Spec Pills */}
              <FadeInUp delay={0.3}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-300">99.9%</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Inaktivasi Virus</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-300">PM2.5</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Filter HEPA Presisi</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-200">0.3 µm</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Partikel Terurai</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-white">24/7</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Udara Murni Proteksi</span>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right Visual Card Graphic */}
            <div className="lg:col-span-5">
              <FadeInRight delay={0.2}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center border border-cyan-300/30">
                        <Wind className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-white">Status Indeks Udara IAQ</h3>
                        <p className="text-xs text-blue-200/80">Pemantauan Pembersihan Udara</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      Aktif Bersih
                    </span>
                  </div>

                  {/* Purification Status Bar Visual */}
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-blue-200">Polutan PM2.5 & Gas VOC</span>
                        <span className="text-cyan-300 font-bold">Terurai 99.9%</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '99.9%' }}
                          transition={{ duration: 1.2, delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-daikin-blue-light rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-blue-200">Kuman, Virus & Spora Jamur</span>
                        <span className="text-cyan-300 font-bold">Inaktivasi Total</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '98%' }}
                          transition={{ duration: 1.2, delay: 0.6 }}
                          className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-blue-100/90">Teknologi Perlindungan:</span>
                    <span className="text-xs font-extrabold text-cyan-300 bg-cyan-400/10 px-3 py-1.5 rounded-lg border border-cyan-300/30 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      Streamer & HEPA Filter
                    </span>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. INTERACTIVE ROOM IAQ PRESET CHECKER ──────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Simulasi Risiko Udara Ruangan
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Kenali Risiko Kualitas Udara di Hunian Anda
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Pilihlah ruangan di bawah ini untuk melihat potensi polutan tak kasat mata dan penanganan terbaik dari Daikin.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Room Selector Buttons */}
          <div className="lg:col-span-4 space-y-3">
            {roomPresets.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                  activeRoom === room.id
                    ? 'bg-daikin-blue text-white border-daikin-blue shadow-lg scale-[1.02]'
                    : 'bg-white text-charcoal border-gray-200/80 hover:border-daikin-blue/40 hover:bg-gray-50'
                }`}
              >
                <div>
                  <h3 className="font-bold text-base">{room.title}</h3>
                  <span className={`text-xs ${activeRoom === room.id ? 'text-blue-100' : 'text-gray-500'}`}>
                    Tingkat Risiko: {room.riskLevel}
                  </span>
                </div>
                <ArrowRight className={`w-5 h-5 transition-transform ${activeRoom === room.id ? 'translate-x-1 text-white' : 'text-gray-400'}`} />
              </button>
            ))}
          </div>

          {/* Active Room Detail Panel */}
          <div className="lg:col-span-8">
            <FadeInLeft key={currentRoomData.id}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md h-full flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                    <div>
                      <span className="text-xs font-bold text-daikin-blue uppercase tracking-wider block">Analisis Ruangan</span>
                      <h3 className="text-xl font-bold text-charcoal">{currentRoomData.title}</h3>
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-daikin-blue-50 text-daikin-blue border border-daikin-blue/20">
                      {currentRoomData.riskLevel}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Ancaman Polutan Utama:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {currentRoomData.threats.map((threat, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                          <AlertTriangle className="w-4 h-4 text-daikin-blue shrink-0" />
                          <span className="text-xs font-semibold text-charcoal">{threat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Solusi Proteksi Daikin:</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-daikin-blue-50/60 p-4 rounded-2xl border border-daikin-blue/20">
                      {currentRoomData.solutionDesc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/products/residential/air-purifier"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-daikin-blue text-white rounded-xl text-xs font-bold hover:bg-daikin-blue-dark transition-colors shadow-sm"
                  >
                    <span>Lihat Air Purifier Daikin</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeInLeft>
          </div>
        </div>
      </section>

      {/* ── 3. 4 CORE IAQ PILLARS GRID ────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50/80 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
                Teknologi Pemurnian Udara Paten
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                4 Pilar Utama Perlindungan Udara Daikin
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Sistem pemurnian multi-tahap Daikin dirancang untuk menghilangkan polutan padat, gas kimia, hingga kuman berukuran mikroskopis.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {iaqPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon
              return (
                <FadeInItem key={idx}>
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-daikin-blue/30 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-sky-50 text-daikin-blue border border-sky-100">
                          {pillar.badge}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold text-daikin-blue uppercase tracking-widest block mb-1">
                        Pilar #{idx + 1}
                      </span>
                      <h3 className="text-lg font-extrabold text-charcoal mb-1 group-hover:text-daikin-blue transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-semibold text-gray-500 mb-3">{pillar.tagline}</p>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              )
            })}
          </FadeInUp>
        </div>
      </section>

      {/* ── 4. DETAILED POLLUTANTS & SOLUTIONS TABLE ──────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Tabel Komparasi Efektivitas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Matriks Polutan Udara & Solusi Penanganan
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Perbandingan lengkap jenis pencemar udara dalam ruangan dan teknologi pemurnian Daikin yang mengatasinya.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp>
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-daikin-blue text-white text-xs uppercase tracking-wider font-extrabold">
                    <th className="p-4 sm:p-5">Polutan & Ukuran</th>
                    <th className="p-4 sm:p-5">Sumber Utama</th>
                    <th className="p-4 sm:p-5">Dampak Kesehatan</th>
                    <th className="p-4 sm:p-5">Solusi Daikin</th>
                    <th className="p-4 sm:p-5">Efektivitas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                  {pollutantsList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-charcoal">
                        <div>{item.name}</div>
                        <span className="text-[10px] font-semibold text-daikin-blue bg-daikin-blue-50 px-2 py-0.5 rounded-md inline-block mt-1">
                          Ukuran: {item.size}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-gray-600 leading-relaxed">{item.source}</td>
                      <td className="p-4 sm:p-5 text-gray-600 leading-relaxed">{item.effect}</td>
                      <td className="p-4 sm:p-5 font-bold text-daikin-blue">{item.solution}</td>
                      <td className="p-4 sm:p-5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-daikin-blue bg-daikin-blue-50 px-2.5 py-1 rounded-lg border border-daikin-blue/20">
                          <CheckCircle2 className="w-3.5 h-3.5 text-daikin-blue" />
                          {item.efficacy}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* ── 5. CALLOUT BANNER ─────────────────────────────────────────────────── */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="bg-gradient-to-r from-daikin-blue-dark via-daikin-blue to-cyan-600 rounded-3xl text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl text-center lg:text-left">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                  Lindungi Udara Bersih Keluarga Anda
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Konsultasikan Kebutuhan Air Purifier & AC Streamer Daikin
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
                  Gunakan simulator kalkulator AC pintar Daikin atau telusuri katalog produk lengkap pemurni udara kami.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <Link
                  to="/products/residential/air-purifier"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-daikin-blue-dark rounded-xl font-extrabold text-xs hover:bg-cyan-50 transition-colors shadow-lg"
                >
                  <Wind className="w-4 h-4 text-daikin-blue" />
                  <span>Katalog Air Purifier</span>
                </Link>
                <Link
                  to="/solutions/how-to-choose"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-100 border border-cyan-300/40 rounded-xl font-extrabold text-xs transition-colors shadow-lg"
                >
                  <span>Panduan Memilih AC</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* PichonKun Mascot Helper */}
      <PichonKunHelper message="Udara bersih itu investasi kesehatan utama! AC & Air Purifier Daikin dengan Streamer Technology menjaga kebersihan udara keluarga 24 jam nonstop. 🌬️" />
    </PageTransition>
  )
}
