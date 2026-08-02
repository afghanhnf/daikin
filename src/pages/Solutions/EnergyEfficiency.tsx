import { useState, useMemo, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Zap, Wind, Calculator, ArrowRight,
  Clock, Volume2, ShieldCheck, Thermometer, Moon,
  Filter, DoorClosed, Sparkles,
  TrendingDown, Layers
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const tips = [
  {
    icon: Thermometer,
    title: 'Set Suhu 24–26°C',
    stat: 'Hemat ~6% / 1°C',
    desc: 'Setiap 1°C lebih rendah meningkatkan konsumsi energi ~6%. Suhu 24-26°C sudah sangat nyaman untuk iklim tropis dan jauh lebih efisien.',
    color: 'from-daikin-blue to-cyan-500',
    bgColor: 'bg-daikin-blue-50 text-daikin-blue',
    badge: 'Suhu Ideal'
  },
  {
    icon: Moon,
    title: 'Gunakan Mode Auto / Sleep',
    stat: 'Hemat Hingga 25%',
    desc: 'Mode Sleep secara otomatis menyesuaikan suhu saat Anda tidur, menghemat energi hingga 25% tanpa mengurangi kenyamanan istirahat.',
    color: 'from-daikin-blue to-cyan-500',
    bgColor: 'bg-daikin-blue-50 text-daikin-blue',
    badge: 'Fitur Pintar'
  },
  {
    icon: Filter,
    title: 'Bersihkan Filter Rutin',
    stat: 'Setiap 2–4 Minggu',
    desc: 'Filter kotor menghambat sirkulasi dan meningkatkan beban kerja kompresor. Bersihkan filter secara berkala 2-4 minggu sekali.',
    color: 'from-daikin-blue to-cyan-500',
    bgColor: 'bg-daikin-blue-50 text-daikin-blue',
    badge: 'Perawatan'
  },
  {
    icon: DoorClosed,
    title: 'Tutup Pintu & Jendela',
    stat: 'Pendinginan Maksimal',
    desc: 'Minimalkan masuknya udara panas dari luar agar beban pendinginan kompresor tidak berlebihan dan suhu ruangan cepat stabil.',
    color: 'from-daikin-blue to-cyan-500',
    bgColor: 'bg-daikin-blue-50 text-daikin-blue',
    badge: 'Isolasi Ruang'
  },
  {
    icon: Clock,
    title: 'Manfaatkan Timer Otomatis',
    stat: 'Hemat 30 Menit Listrik',
    desc: 'Jadwalkan AC mati 30 menit sebelum Anda bangun tidur - sisa suhu ruangan masih tetap dingin nyaman saat Anda mulai beraktivitas.',
    color: 'from-daikin-blue to-cyan-500',
    bgColor: 'bg-daikin-blue-50 text-daikin-blue',
    badge: 'Penjadwalan'
  },
  {
    icon: ShieldCheck,
    title: 'Periksa Kondisi Freon',
    stat: 'Servis Berjangka 2 Tahun',
    desc: 'Freon yang kurang membuat AC bekerja keras tanpa memberikan hawa dingin optimal. Lakukan pemeriksaan berkala oleh teknisi resmi Daikin.',
    color: 'from-daikin-blue to-cyan-500',
    bgColor: 'bg-daikin-blue-50 text-daikin-blue',
    badge: 'Pemeriksaan'
  },
]

export default function EnergyEfficiency() {
  // Interactive Savings Estimator State
  const [selectedPk, setSelectedPk] = useState<number>(1.0)
  const [dailyHours, setDailyHours] = useState<number>(8)

  // Tariff electricity per kWh (PLN R1 / 2200VA standard = Rp 1.444,70)
  const TARIFF_PER_KWH = 144570 / 100 // Rp 1.444.70

  // Calculations
  const estimationData = useMemo(() => {
    // Wattage ratios based on PK
    // 1 PK Baseline: Non-Inverter = 900 kWh/mo for 10h -> 90kW avg; Inverter = 360 kWh/mo
    const nonInverterWatt = selectedPk * 900
    const inverterWatt = selectedPk * 360

    // Monthly kWh (30 days)
    const nonInverterKwh = Math.round((nonInverterWatt * dailyHours * 30) / 1000)
    const inverterKwh = Math.round((inverterWatt * dailyHours * 30) / 1000)
    const savedKwh = Math.max(0, nonInverterKwh - inverterKwh)

    // Cost calculations (Rupiah / month)
    const nonInverterCost = Math.round(nonInverterKwh * TARIFF_PER_KWH)
    const inverterCost = Math.round(inverterKwh * TARIFF_PER_KWH)
    const monthlySavingsCost = Math.max(0, nonInverterCost - inverterCost)
    const yearlySavingsCost = monthlySavingsCost * 12

    const savingsPercentage = Math.round((savedKwh / Math.max(1, nonInverterKwh)) * 100)

    return {
      nonInverterKwh,
      inverterKwh,
      savedKwh,
      nonInverterCost,
      inverterCost,
      monthlySavingsCost,
      yearlySavingsCost,
      savingsPercentage: Math.min(60, Math.max(40, savingsPercentage))
    }
  }, [selectedPk, dailyHours])

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val)
  }

  return (
    <PageTransition>
      <PageMeta
        title="Panduan Efisiensi Energi & Inverter Daikin"
        description="Maksimalkan penghematan listrik hingga 60% dengan memahami teknologi Inverter cerdas Daikin dan pola penggunaan energi optimal."
        canonical="/solutions/energy-efficiency"
      />

      {/* ── 1. HERO BANNER SECTION ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#041d33] via-daikin-blue-dark to-[#005a9c] text-white pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 overflow-hidden">
        {/* Dynamic Background Particles */}
        <Suspense fallback={null}>
          <AirParticles />
        </Suspense>

        {/* Decorative Radial Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <Breadcrumb
            items={[{ label: 'Solusi Tata Udara', path: '/solutions' }, { label: 'Efisiensi Energi' }]}
            className="text-cyan-200/90 mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-sm">
                  Edukasi & Hemat Listrik Daikin
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Panduan Efisiensi Energi <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
                    & Teknologi Inverter
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-base sm:text-lg text-blue-100/90 font-light leading-relaxed max-w-2xl">
                  Maksimalkan penghematan tagihan listrik rumah Anda hingga <span className="font-bold text-cyan-300">60%</span> dengan memahami mekanisme kompresor Inverter cerdas Daikin serta kebiasaan penggunaan energi yang tepat.
                </p>
              </FadeInUp>

              {/* Quick Spec Pills */}
              <FadeInUp delay={0.3}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-300">60%</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Hemat Listrik</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-300">25%</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Pendinginan Cepat</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-200">Senyap</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Tanpa Kejut Suara</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-white">Awet</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Kompresor Tahan Lama</span>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Hero Right Visual Graphic */}
            <div className="lg:col-span-5">
              <FadeInRight delay={0.2}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center border border-cyan-300/30">
                        <TrendingDown className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-white">Komparasi Konsumsi</h3>
                        <p className="text-xs text-blue-200/80">Tagihan Bulanan AC</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      R1/2200VA PLN
                    </span>
                  </div>

                  {/* Meter Comparison Visualization */}
                  <div className="space-y-5">
                    {/* Non-Inverter Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-blue-200">AC Konvensional (Non-Inverter)</span>
                        <span className="text-blue-200 font-bold">100% Beban Listrik</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                        <div className="h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full w-full" />
                      </div>
                    </div>

                    {/* Inverter Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-white font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> AC Inverter Daikin
                        </span>
                        <span className="text-cyan-300 font-extrabold">Hanya 40% Beban Listrik</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '40%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-daikin-blue-light rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-blue-100/90">Selisih Penghematan Energi:</span>
                    <span className="text-sm font-extrabold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-lg border border-cyan-300/30">
                      Hemat Listrik Hingga 60%
                    </span>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. INVERTER VS NON-INVERTER COMPARISON & CALCULATOR SECTION ──────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Perbandingan Mekanisme Kerja
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Mengapa AC Inverter Daikin Jauh Lebih Efisien?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              AC Inverter secara fleksibel menyesuaikan rotasi kompresor sesuai suhu ruangan, berlawanan dengan AC konvensional yang bekerja dengan sistem mati-nyala berulang.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Feature Comparison */}
          <div className="lg:col-span-6 space-y-6">
            <FadeInLeft>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-daikin-blue-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-daikin-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Keunggulan Teknologi Inverter</h3>
                    <p className="text-xs text-gray-500">Daikin Premium Compressor Control</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  AC inverter Daikin bekerja seperti akselerator kendaraan. Saat ruangan panas, kompresor bekerja maksimal. Ketika suhu ideal tercapai, kecepatan kompresor turun otomatis ke daya minimum untuk menjaga suhu tetap stabil.
                </p>

                {/* Feature Comparison List */}
                <div className="space-y-4 pt-2">
                  {[
                    {
                      title: 'Hemat Energi',
                      desc: 'Hingga 60% lebih hemat dibanding AC Non-Inverter konvensional.',
                      icon: TrendingDown,
                      color: 'text-daikin-blue',
                      badge: '60% Hemat'
                    },
                    {
                      title: 'Pendinginan Cepat (Powerful Mode)',
                      desc: '25% lebih cepat mencapai suhu set-point awal ruangan.',
                      icon: Wind,
                      color: 'text-daikin-blue',
                      badge: '25% Lebih Cepat'
                    },
                    {
                      title: 'Suara Kompresor Senyap',
                      desc: 'Kompresor berputar halus tanpa suara hentakan mati-nyala.',
                      icon: Volume2,
                      color: 'text-daikin-blue',
                      badge: 'Whisper Quiet'
                    },
                    {
                      title: 'Daya Tahan Kompresor Panjang',
                      desc: 'Bebas dari lonjakan arus kejut awal yang dapat memicu keausan mesin.',
                      icon: ShieldCheck,
                      color: 'text-daikin-blue',
                      badge: 'Panjang Umur'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-daikin-blue/30 transition-colors">
                      <div className={`p-2.5 rounded-xl bg-daikin-blue-50 shrink-0 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="text-sm font-bold text-charcoal">{item.title}</h4>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-daikin-blue-50 text-daikin-blue">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>
          </div>

          {/* Right Column: Interactive Energy Savings Calculator */}
          <div className="lg:col-span-6">
            <FadeInRight>
              <div className="bg-gradient-to-br from-daikin-blue-dark to-[#003d63] rounded-3xl p-6 sm:p-8 text-white shadow-xl h-full flex flex-col justify-between border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center border border-cyan-300/30">
                        <Calculator className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Simulasi Estimasi Hemat Listrik</h3>
                        <p className="text-xs text-blue-200/80">Hitung Perkiraan Tagihan Bulanan</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-cyan-300 bg-cyan-400/15 px-3 py-1 rounded-full border border-cyan-300/30">
                      Interaktif
                    </span>
                  </div>

                  {/* Calculator Form Controls */}
                  <div className="space-y-5">
                    {/* Select PK Capacity */}
                    <div>
                      <label className="block text-xs font-semibold text-blue-100 mb-2">
                        Pilih Kapasitas AC (PK):
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {[0.5, 1.0, 1.5, 2.0].map((pk) => (
                          <button
                            key={pk}
                            onClick={() => setSelectedPk(pk)}
                            className={`py-2 px-3 rounded-xl text-xs font-extrabold transition-all border ${
                              selectedPk === pk
                                ? 'bg-white text-daikin-blue-dark shadow-md border-white'
                                : 'bg-white/10 hover:bg-white/20 text-white border-white/15'
                            }`}
                          >
                            {pk} PK
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Select Daily Usage Hours */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-blue-100 mb-2">
                        <span>Durasi Pemakaian Harian:</span>
                        <span className="font-bold text-cyan-300">{dailyHours} Jam / Hari</span>
                      </div>
                      <input
                        type="range"
                        min={4}
                        max={24}
                        step={1}
                        value={dailyHours}
                        onChange={(e) => setDailyHours(Number(e.target.value))}
                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-300"
                      />
                      <div className="flex justify-between text-[10px] text-blue-200/60 mt-1 font-medium">
                        <span>4 Jam</span>
                        <span>12 Jam</span>
                        <span>24 Jam</span>
                      </div>
                    </div>

                    {/* Calculation Results Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3 mt-6">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-blue-100/90">Non-Inverter ({selectedPk} PK):</span>
                        <span className="font-bold text-blue-200">{estimationData.nonInverterKwh} kWh/bln ({formatRupiah(estimationData.nonInverterCost)})</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-blue-100/90">Inverter Daikin ({selectedPk} PK):</span>
                        <span className="font-bold text-cyan-300">{estimationData.inverterKwh} kWh/bln ({formatRupiah(estimationData.inverterCost)})</span>
                      </div>

                      <div className="pt-3 border-t border-white/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                          <span className="text-[10px] text-cyan-300 uppercase tracking-widest font-extrabold block">Total Penghematan Anda</span>
                          <span className="text-2xl font-extrabold text-white">{formatRupiah(estimationData.monthlySavingsCost)} <span className="text-xs font-normal text-blue-200">/ bulan</span></span>
                        </div>
                        <div className="text-right sm:text-right">
                          <span className="text-[10px] text-blue-200 block">Proyeksi 1 Tahun:</span>
                          <span className="text-sm font-extrabold text-cyan-300">{formatRupiah(estimationData.yearlySavingsCost)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-blue-200/70 mt-6 italic">
                  *Estimasi dihitung berdasarkan standar tarif PLN R1/2200VA (Rp 1.444,70/kWh) untuk pemakaian {dailyHours} jam/hari selama 30 hari.
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* ── 3. 6 TIPS HEMAT LISTRIK SECTION ───────────────────────────────────── */}
      <section className="py-16 bg-gray-50/80 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
                Kebiasaan Penggunaan Bijak
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                6 Tips Praktis Menghemat Listrik AC
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Penerapan kebiasaan sederhana harian dapat semakin mengoptimalkan efisiensi pendinginan dan memperpanjang usia pakai unit AC Anda.
              </p>
            </div>
          </FadeInUp>

          {/* 6 Tips Cards Grid */}
          <FadeInUp stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, idx) => {
              const IconComp = tip.icon
              return (
                <FadeInItem key={idx}>
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tip.bgColor} group-hover:scale-110 transition-transform`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-sky-50 text-daikin-blue border border-sky-100">
                          {tip.badge}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold text-daikin-blue uppercase tracking-widest block mb-1">
                        Tips #{idx + 1}
                      </span>
                      <h3 className="text-lg font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                        {tip.title}
                      </h3>

                      <div className="inline-block text-xs font-bold text-daikin-blue bg-daikin-blue-50 px-2.5 py-1 rounded-lg border border-daikin-blue/20 mb-3">
                        {tip.stat}
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              )
            })}
          </FadeInUp>
        </div>
      </section>

      {/* ── 4. AC RECOMMENDATION & CALCULATOR CALLOUT BANNER ─────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="bg-gradient-to-r from-daikin-blue-dark via-daikin-blue to-cyan-600 rounded-3xl text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl text-center lg:text-left">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                  Temukan AC Inverter Ideal Anda
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Bingung Memilih Produk AC Inverter yang Tepat?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
                  Gunakan simulator kalkulator rekomendasi AC pintar Daikin atau telusuri katalog produk lengkap kami untuk hunian dan bisnis Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <Link
                  to="/solutions/ac-calculator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-daikin-blue-dark rounded-xl font-extrabold text-xs hover:bg-cyan-50 transition-colors shadow-lg"
                >
                  <Calculator className="w-4 h-4 text-daikin-blue" />
                  <span>Kalkulator AC Pintar</span>
                </Link>
                <Link
                  to="/solutions/ac-recommendation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-100 border border-cyan-300/40 rounded-xl font-extrabold text-xs transition-colors shadow-lg"
                >
                  <span>Katalog Produk Daikin</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* PichonKun Mascot Helper */}
      <PichonKunHelper message="Dengan memilih AC Inverter Daikin, Anda bisa menghemat tagihan listrik hingga 60% setiap bulannya!" />
    </PageTransition>
  )
}
