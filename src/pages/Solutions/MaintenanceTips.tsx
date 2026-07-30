import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Wrench, Clock, ShieldCheck, CheckCircle2, AlertTriangle,
  RefreshCw, Zap, Wind, Droplets, Sparkles,
  ArrowRight, Phone, Thermometer
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const maintenanceSchedules = [
  {
    freq: 'Setiap 2 Minggu',
    tagline: 'Perawatan Mandiri Pengguna',
    badge: 'Mandiri / DIY',
    tasks: [
      'Bersihkan filter udara indoor dengan air mengalir & keringkan di tempat teduh',
      'Lap debu permukaan casing & louver hembusan angin unit indoor',
      'Periksa layar remote control & ganti baterai jika daya mulai melemah'
    ],
    benefit: 'Mencegah penumpukan debu, menjaga debit udara tetap kencang & hemat listrik.'
  },
  {
    freq: 'Setiap 3–4 Bulan',
    tagline: 'Cuci AC Berkala',
    badge: 'Servis Berkala',
    tasks: [
      'Cuci sirip evaporator (indoor coil) dengan pompa air tekanan terukur',
      'Bersihkan saluran penampungan drainase air agar tidak menyumbat/bocor',
      'Periksa tekanan freon & deteksi keborosan arus kompresor'
    ],
    benefit: 'Mengembalikan kesegaran hembusan dingin & mencegah kebocoran air indoor.'
  },
  {
    freq: 'Setiap 6 Bulan',
    tagline: 'Servis Komprehensif Outdoor',
    badge: 'Servis Outdoor',
    tasks: [
      'Cuci sirip kondensor & kipas pendingin unit outdoor dari kotoran jalanan',
      'Periksa kekencangan baut dudukan & isolasi pembungkus pipa tembaga',
      'Inspeksi kelistrikan, kapasitor, & stabilitas beban daya kompresor'
    ],
    benefit: 'Memastikan pelepasan panas outdoor optimal & memperpanjang umur kompresor.'
  },
  {
    freq: 'Setiap 1 Tahun',
    tagline: 'Overhaul & Tune-Up Total',
    badge: 'Teknisi Resmi Daikin',
    tasks: [
      'Pemeriksaan kesehatan sistem pendingin secara menyeluruh oleh teknisi Daikin',
      'Pembersihan kimiawi halus jika terdapat endapan minyak pada evaporator',
      'Uji performa delta suhu (suhu masuk vs keluar) untuk efisiensi puncak'
    ],
    benefit: 'Menjamin AC bekerja layaknya unit baru dengan garansi ketenangan penuh.'
  }
]

const warningSigns = [
  {
    icon: Wind,
    title: 'AC Hanyalah Angin Biasa',
    desc: 'Hembusan angin terasa kencang namun udara ruangan tidak kunjung dingin meski suhu remote disetel rendah.',
    action: 'Filter tersumbat tebal atau tekanan freon berkurang.'
  },
  {
    icon: Droplets,
    title: 'Tetesan Air dari Indoor',
    desc: 'Air menetes atau bocor dari bawah unit indoor membasa selimut atau lantai di bawah AC.',
    action: 'Saluran drainase tersumbat lumut/debu dan butuh pencucian air tekanan tinggi.'
  },
  {
    icon: AlertTriangle,
    title: 'Bau Apek / Tidak Sedap',
    desc: 'Muncul bau kurang menyenangkan atau berjamur saat AC pertama kali dinyalakan.',
    action: 'Penumpukan spora jamur pada sirip evaporator & butuh pembersihan antibakteri.'
  },
  {
    icon: RefreshCw,
    title: 'Suara Berisik / Bergetar',
    desc: 'Unit outdoor atau indoor mengeluarkan bunyi dengung, derit, atau getaran tidak wajar.',
    action: 'Kipas terhalang kotoran atau dudukan mesin perlu dikencangkan oleh teknisi.'
  },
  {
    icon: Zap,
    title: 'Tagihan Listrik Melonjak',
    desc: 'Penggunaan harian sama seperti biasa namun biaya listrik meningkat drastis.',
    action: 'Kompresor bekerja terengah-engah akibat kompresor & kondensor kotor.'
  },
  {
    icon: Thermometer,
    title: 'AC Mati Sendiri / Lampu Berkedip',
    desc: 'Unit AC sering mendadak mati otomatis beberapa menit setelah dinyalakan atau lampu indikator daya berkedip terus-menerus.',
    action: 'Overheating kompresor atau sensor termistor butuh kalibrasi teknisi.'
  }
]

const diySteps = [
  {
    step: '01',
    title: 'Matikan AC & Cabut Listrik',
    desc: 'Pastikan AC dalam kondisi OFF melalui remote control lalu matikan MCB/stopkontak utama demi keamanan kerja.'
  },
  {
    step: '02',
    title: 'Buka Panel Depan Indoor',
    desc: 'Pegang kedua sisi panel depan unit indoor, lalu tarik perlahan ke atas hingga terkunci di posisi terbuka.'
  },
  {
    step: '03',
    title: 'Lepas & Cuci Filter',
    desc: 'Tarik filter ke luar. Cuci dengan mengucurkan air dari sisi bersih ke sisi kotor. Sikat halus bila perlu.'
  },
  {
    step: '04',
    title: 'Keringkan & Pasang Kembali',
    desc: 'Angin-anginkan filter di tempat teduh hingga kering sempurna (jangan di bawah sinar matahari langsung), lalu pasang kembali.'
  }
]

export default function MaintenanceTips() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <PageTransition>
      <PageMeta
        title="Tips & Panduan Perawatan AC Daikin"
        description="Ikuti panduan jadwal perawatan rutin AC Daikin untuk menjaga efisiensi energi, memperpanjang usia pakai kompresor, dan memastikan hembusan dingin maksimal."
        canonical="/solutions/maintenance-tips"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[{ label: 'Solusi Tata Udara', path: '/solutions' }, { label: 'Tips Perawatan' }]}
            className="text-cyan-200/90 mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-sm">
                  Panduan Perawatan AC • Daikin Care
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight">
                  Tips Perawatan & Pemeliharaan AC <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
                    Performa Dingin & Hemat Listrik
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-base sm:text-lg text-blue-100/90 font-light leading-relaxed max-w-2xl">
                  AC yang terawat secara teratur mampu menghemat energi hingga <span className="font-bold text-cyan-300">30%</span>, memiliki usia pakai kompresor 2x lebih lama, serta menghembuskan udara yang bersih dan higienis.
                </p>
              </FadeInUp>

              {/* Quick Stat Pills */}
              <FadeInUp delay={0.3}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-300">2 Minggu</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Cuci Filter Rutin</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-300">30%</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Hemat Energi</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-cyan-200">2x Awet</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Usia Pakai Mesin</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                    <span className="block text-xl font-extrabold text-white">Resmi</span>
                    <span className="text-[11px] text-blue-100/80 font-medium">Teknisi Daikin</span>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5">
              <FadeInRight delay={0.2}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center border border-cyan-300/30">
                        <Wrench className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-white">Kesehatan Unit AC</h3>
                        <p className="text-xs text-blue-200/80">Indikator Kondisi Performa</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      Optimal 100%
                    </span>
                  </div>

                  {/* Health Progress Indicators */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-blue-200">Kebersihan Filter & Evaporator</span>
                        <span className="text-cyan-300 font-bold">100% Bersih</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-daikin-blue-light rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-blue-200">Tekanan Freon & Kompresor</span>
                        <span className="text-cyan-300 font-bold">Normal Presisi</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '96%' }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-blue-100/90">Layanan Pemeliharaan:</span>
                    <span className="text-xs font-extrabold text-cyan-300 bg-cyan-400/10 px-3 py-1.5 rounded-lg border border-cyan-300/30 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                      Garansi Servis Resmi
                    </span>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. JADWAL PERAWATAN BERKALA (TIMELINE GRID) ─────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Jadwal Perawatan Berkala
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Panduan Jadwal Pemeliharaan AC
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Ikuti interval perawatan di bawah ini untuk menjaga efisiensi energi tetap hemat dan mencegah kerusakan mendadak.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maintenanceSchedules.map((item, idx) => (
            <FadeInItem key={idx}>
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-daikin-blue/30 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-sky-50 text-daikin-blue border border-sky-100">
                      {item.badge}
                    </span>
                    <Clock className="w-4 h-4 text-daikin-blue" />
                  </div>

                  <h3 className="text-lg font-extrabold text-charcoal mb-1 group-hover:text-daikin-blue transition-colors">
                    {item.freq}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mb-4">{item.tagline}</p>

                  <ul className="space-y-2.5 mb-5">
                    {item.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-daikin-blue shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 text-[11px] text-daikin-blue font-semibold bg-daikin-blue-50/50 p-3 rounded-xl">
                  <span className="font-bold">Dampak:</span> {item.benefit}
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInUp>
      </section>

      {/* ── 3. DIY STEP-BY-STEP FILTER CLEANING ───────────────────────────────── */}
      <section className="py-16 bg-gray-50/80 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
                Panduan Praktis DIY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                4 Langkah Mudah Membersihkan Filter AC Sendiri
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                Pembersihan filter rutin setiap 2 minggu sangat mudah dan bisa dilakukan sendiri di rumah tanpa alat khusus.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diySteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  activeStep === idx
                    ? 'bg-daikin-blue text-white border-daikin-blue shadow-xl scale-[1.02]'
                    : 'bg-white text-charcoal border-gray-200/80 hover:border-daikin-blue/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black ${activeStep === idx ? 'text-cyan-300' : 'text-daikin-blue'}`}>
                    {step.step}
                  </span>
                  <Sparkles className={`w-5 h-5 ${activeStep === idx ? 'text-cyan-300' : 'text-gray-300'}`} />
                </div>
                <h3 className="font-extrabold text-base mb-2">{step.title}</h3>
                <p className={`text-xs leading-relaxed ${activeStep === idx ? 'text-blue-100/90' : 'text-gray-600'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 5 TANDA AC BUTUH SERVIS SEGERA (WARNING SIGNS GRID) ────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Deteksi Dini Kendala
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              6 Tanda AC Anda Membutuhkan Servis Segera
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Jika mengalami gejala di bawah ini, segera hubungi teknisi resmi Daikin untuk penanganan sebelum timbul kerusakan parah.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warningSigns.map((item, idx) => {
            const IconComp = item.icon
            return (
              <FadeInItem key={idx}>
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-daikin-blue/30 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 text-xs font-semibold text-daikin-blue flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-daikin-blue" />
                    <span>{item.action}</span>
                  </div>
                </div>
              </FadeInItem>
            )
          })}
        </FadeInUp>
      </section>

      {/* ── 5. CALLOUT BANNER ─────────────────────────────────────────────────── */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="bg-gradient-to-r from-daikin-blue-dark via-daikin-blue to-cyan-600 rounded-3xl text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl text-center lg:text-left">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                  Layanan Pemeliharaan Bersertifikasi
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Jadwalkan Servis Perawatan Resmi Daikin Sekarang
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
                  Serahkan perawatan AC Anda kepada teknisi terlatih Daikin Indonesia untuk jaminan kualitas dingin optimal & garansi purnajual resmi.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <Link
                  to="/services/maintenance"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-daikin-blue-dark rounded-xl font-extrabold text-xs hover:bg-cyan-50 transition-colors shadow-lg"
                >
                  <Wrench className="w-4 h-4 text-daikin-blue" />
                  <span>Kontrak Servis Perawatan</span>
                </Link>
                <Link
                  to="/services/service-center"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-100 border border-cyan-300/40 rounded-xl font-extrabold text-xs transition-colors shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Cari Service Center Resmi</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* PichonKun Mascot Helper */}
      <PichonKunHelper message="Ingat ya! Filter kotor bikin AC boros listrik hingga 30%. Bersihkan filter setiap 2 minggu sekali agar hembusan udara selalu dingin & segar! 🧹" />
    </PageTransition>
  )
}
