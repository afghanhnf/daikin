import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  Zap,
  Layers,
  Thermometer,
  ArrowLeft,
  ArrowRight,
  Image as ImageIcon,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Settings,
  Globe,
  Cpu,
  Wind
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

const vrvTimeline = [
  {
    year: '1982',
    title: 'Era Baru Dimulai',
    subtitle: 'Sistem VRV Pertama di Dunia',
    description: 'Daikin merilis sistem VRV (Variable Refrigerant Volume) pertama di dunia. Konsep revolusioner ini memungkinkan pengaturan suhu secara individual untuk tiap ruangan, mematahkan tradisi AC sentral yang mendinginkan seluruh gedung tanpa pandang bulu.',
    specs: ['Hemat Energi Skala Gedung', 'Kontrol Individual Presisi']
  },
  {
    year: '1986',
    title: 'Evolusi Kompresor',
    subtitle: 'Pengembangan Kompresor Inverter',
    description: 'Integrasi teknologi inverter pada sistem VRV. Kemampuan menyesuaikan putaran kompresor secara instan mengurangi lonjakan arus listrik awal secara drastis, menjadikannya standar baku untuk bangunan modern.',
    specs: ['Lonjakan Arus Start Berkurang', 'Fluktuasi Suhu Ekstra Rendah']
  },
  {
    year: '1990',
    title: 'Pemulihan Panas (Heat Recovery)',
    subtitle: 'Mendinginkan & Memanaskan Bersamaan',
    description: 'Peluncuran sistem VRV Heat Recovery. Sistem ini mampu mendinginkan dan memanaskan ruangan berbeda pada waktu yang bersamaan. Memanfaatkan panas buangan dari ruang server untuk memanaskan ruang direksi.',
    specs: ['Daya Guna Ganda', 'Pemanfaatan Energi Terbuang']
  },
  {
    year: '1999',
    title: 'Refrigeran Alternatif',
    subtitle: 'Transisi ke Refrigeran R-410A',
    description: 'Menghadapi isu penipisan lapisan ozon, Daikin beralih dari R-22 menuju R-410A yang tidak merusak ozon. Ini menandai komitmen Daikin dalam memproduksi sistem skala besar yang peduli lingkungan.',
    specs: ['Ozone Depletion Potential (ODP) Nol', 'Peningkatan Kapasitas Perpindahan Panas']
  },
  {
    year: '2007',
    title: 'Modularitas Ekstrim',
    subtitle: 'Kapasitas Tanpa Batas',
    description: 'Pengembangan desain VRV modular di mana unit outdoor dapat dirangkai untuk menciptakan kapasitas raksasa. Menjawab tantangan gedung pencakar langit yang membutuhkan sistem kompak namun berkapasitas ultra.',
    specs: ['Ekspansi Kapasitas Fleksibel', 'Hemat Ruang Instalasi']
  }
]

export default function Vrv() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextStep = () => setActiveIndex(prev => Math.min(prev + 1, vrvTimeline.length - 1))
  const prevStep = () => setActiveIndex(prev => Math.max(prev - 1, 0))

  return (
    <PageTransition>
      <PageMeta
        title="Sistem VRV Daikin | Teknologi AC Komersial Terdepan"
        description="Jelajahi evolusi teknologi VRV (Variable Refrigerant Volume) Daikin sejak 1982 yang mengubah sejarah AC komersial dunia."
        canonical="/insights/technology/vrv"
      />

      {/* ── Page Hero Header ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#003B71] via-[#0072CE] to-[#0097E0] text-white pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Insights', path: '/insights' },
              { label: 'Teknologi', path: '/insights/technology/benefits' },
              { label: 'Sistem VRV' }
            ]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-4 text-sky-100 border border-white/10">
                  <Building2 className="w-4 h-4 text-[#0097E0] bg-white rounded-full p-0.5" /> Daikin VRV Commercial System
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                  Membuka Era Baru VRV
                </h1>

                <p className="text-white/90 text-lg md:text-xl font-bold leading-relaxed text-sky-100">
                  Mendinginkan Hanya di Tempat yang Membutuhkan. Sebuah sejarah bagaimana Daikin mengubah standar AC komersial dunia sejak 1982.
                </p>
              </div>

              {/* Hero Image Placeholder */}
              <div className="lg:col-span-5">
                <div className="w-full aspect-[4/3] bg-white/10 backdrop-blur-md rounded-3xl border-2 border-dashed border-white/20 p-6 flex flex-col items-center justify-center text-center group hover:border-white/40 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xs md:text-sm font-extrabold text-white mb-1">
                    [Hero Product Image Placeholder]
                  </h4>
                  <p className="text-[11px] text-white/60 max-w-xs leading-relaxed">
                    Foto Produk Outdoor Unit VRV IV / VRV 5 Daikin di Rooftop Gedung Perkantoran
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* ── Page Body Content ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

          {/* ══════════════════════════════════════════════════════════
              SECTION 1: APA ITU SISTEM VRV?
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Narrative Text Left */}
              <div className="lg:col-span-7 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  Apa itu Sistem VRV (Variable Refrigerant Volume)?
                </h2>

                <p>
                  VRV (Variable Refrigerant Volume) adalah sistem tata udara komersial yang dikembangkan oleh Daikin sejak tahun 1982. Sistem ini memungkinkan satu unit outdoor melayani banyak unit indoor secara bersamaan dengan kontrol suhu individual per ruangan.
                </p>

                <p>
                  Berbeda dengan AC sentral konvensional yang mendinginkan seluruh gedung secara seragam, VRV Daikin mengontrol volume refrigeran secara presisi ke setiap ruangan sesuai kebutuhan, menghemat energi hingga 30% atau lebih.
                </p>

                <p className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold">
                  Satu unit outdoor VRV Daikin mampu menghubungkan hingga 64 unit indoor berbagai tipe (cassette, ducted, wall-mounted, floor-standing) dengan jarak pipa hingga 1.000 meter.
                </p>
              </div>

              {/* IMAGE PLACEHOLDER 1: System Diagram */}
              <div className="lg:col-span-5">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-sky-50 to-slate-100 rounded-3xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center text-center relative group hover:border-[#0097E0] transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#0097E0] flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xs md:text-sm font-extrabold text-gray-800 mb-1">
                    [Thumbnail Image Placeholder 1]
                  </h4>
                  <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">
                    Diagram Sistem VRV: <strong>1 Outdoor Unit → Banyak Indoor Unit (Cassette, Ducted, Wall) per Lantai</strong>
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 2: KEUNGGULAN UTAMA VRV
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

            <div>
              <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Keunggulan Utama</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Mengapa VRV Daikin Menjadi Standar Gedung Modern?
              </h2>
            </div>

            <div className="space-y-8">

              {/* Point 1: Kontrol Individual */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                {/* IMAGE LEFT */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                    <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 2]</h4>
                    <p className="text-[10px] text-gray-400">Diagram Kontrol Suhu Individual per Ruangan (Meeting Room 22°C, Server Room 18°C, Lobby 25°C)</p>
                  </div>
                </div>

                {/* TEXT RIGHT */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="text-[#0097E0] font-black">1.</span> Kontrol Suhu Individual Per Ruangan
                  </h3>
                  <p>
                    Setiap unit indoor dapat diatur suhunya secara independen. Ruang server dapat diset 18°C sementara ruang meeting di 24°C. Tidak ada lagi pemborosan energi untuk mendinginkan ruangan kosong.
                  </p>
                </div>
              </div>

              {/* Point 2: Heat Recovery */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                {/* IMAGE LEFT */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                    <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 3]</h4>
                    <p className="text-[10px] text-gray-400">Diagram VRV Heat Recovery: Satu Ruangan Dingin & Ruangan Lain Hangat Bersamaan</p>
                  </div>
                </div>

                {/* TEXT RIGHT */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="text-[#0097E0] font-black">2.</span> Heat Recovery- Mendinginkan & Memanaskan Bersamaan
                  </h3>
                  <p>
                    Sistem VRV Heat Recovery mampu mendinginkan dan memanaskan ruangan berbeda pada waktu yang bersamaan. Panas buangan dari proses pendinginan di satu ruangan dialihkan untuk memanaskan ruangan lain, sehingga tidak ada energi yang terbuang.
                  </p>
                  <p className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold">
                    Memanfaatkan panas buangan dari ruang server untuk memanaskan ruang kantor- efisiensi energi maksimal.
                  </p>
                </div>
              </div>

              {/* Point 3: Desain Modular */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                {/* IMAGE LEFT */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                    <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 4]</h4>
                    <p className="text-[10px] text-gray-400">Diagram Unit Outdoor Modular Daikin VRV Dirangkai untuk Kapasitas Gedung Pencakar Langit</p>
                  </div>
                </div>

                {/* TEXT RIGHT */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="text-[#0097E0] font-black">3.</span> Desain Modular- Kapasitas Fleksibel Tanpa Batas
                  </h3>
                  <p>
                    Unit outdoor VRV Daikin dapat dirangkai secara modular untuk menciptakan kapasitas pendinginan raksasa. Satu sistem modular mampu melayani gedung pencakar langit dengan efisiensi ruang instalasi yang sangat tinggi.
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 3: EVOLUSI TIMELINE VRV
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-[#003B71] p-6 md:p-10 rounded-3xl shadow-sm space-y-8 text-white">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase text-sky-300 tracking-wider">Perjalanan Inovasi</span>
                <h2 className="text-xl md:text-2xl font-black text-white leading-snug">
                  Evolusi VRV Daikin Sejak 1982
                </h2>
              </div>

              {/* Timeline Dots */}
              <div className="flex items-center gap-4">
                {vrvTimeline.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <div className={cn(
                      'w-3 h-3 rounded-full transition-all duration-300',
                      activeIndex === i ? 'bg-[#0097E0] scale-150 shadow-[0_0_12px_rgba(0,151,224,0.5)]' : 'bg-white/20 group-hover:bg-white/50'
                    )} />
                    <span className={cn(
                      'text-[10px] font-bold transition-colors',
                      activeIndex === i ? 'text-[#0097E0]' : 'text-white/40'
                    )}>{item.year}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Timeline Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 min-h-[280px] flex flex-col relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-grow flex flex-col md:flex-row gap-8"
                >
                  <div className="md:w-1/3">
                    <span className="text-5xl md:text-7xl font-black text-white/10 block leading-none mb-3 tracking-tighter">
                      {vrvTimeline[activeIndex].year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold mb-1 text-white">
                      {vrvTimeline[activeIndex].title}
                    </h3>
                    <h4 className="text-[#0097E0] font-bold uppercase tracking-wider text-xs mb-4">
                      {vrvTimeline[activeIndex].subtitle}
                    </h4>
                  </div>

                  <div className="md:w-2/3 flex flex-col justify-center">
                    <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6">
                      {vrvTimeline[activeIndex].description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      {vrvTimeline[activeIndex].specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
                          <Building2 className="w-4 h-4 text-[#0097E0] flex-shrink-0" />
                          <span className="text-xs font-medium text-white/90">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute bottom-6 right-6 flex items-center gap-3">
                <button
                  onClick={prevStep}
                  disabled={activeIndex === 0}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStep}
                  disabled={activeIndex === vrvTimeline.length - 1}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 4: SPESIFIKASI & KONTROL CERDAS
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

            <div>
              <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Teknologi Cerdas</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Sistem Kontrol & Manajemen Gedung Terintegrasi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
              {/* IMAGE LEFT */}
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                  <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                  <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 5]</h4>
                  <p className="text-[10px] text-gray-400">Diagram Dashboard i-Manager / Intelligent Touch Manager Daikin (Kontrol via Web/App)</p>
                </div>
              </div>

              {/* TEXT RIGHT */}
              <div className="md:col-span-7 order-1 md:order-2 space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                <p>
                  Sistem VRV Daikin dilengkapi dengan platform kontrol terpusat <strong>Intelligent Touch Manager (iTM)</strong> dan <strong>Daikin i-Manager</strong> yang memungkinkan pengelola gedung memantau dan mengatur seluruh unit AC dari satu dashboard.
                </p>

                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold space-y-1.5">
                  <p>• Pemantauan konsumsi energi real-time per zona/lantai.</p>
                  <p>• Penjadwalan otomatis on/off per ruangan sesuai jam kerja.</p>
                  <p>• Diagnostik jarak jauh & pelaporan error otomatis ke teknisi Daikin.</p>
                  <p>• Integrasi BACnet/LonWorks untuk Building Management System (BMS).</p>
                </div>
              </div>
            </div>

          </section>

        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Siap Mengaplikasikan Sistem VRV Daikin di Gedung Anda?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Konsultasikan kebutuhan pendinginan gedung komersial Anda bersama tim engineering Daikin Indonesia.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              to="/products/commercial/vrv"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>Jelajahi Produk VRV</span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-bold text-xs md:text-sm transition-all"
            >
              Hubungi Engineering Daikin
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  )
}
