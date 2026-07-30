import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Zap,
  TrendingDown,
  Activity,
  Gauge,
  Image as ImageIcon,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle,
  HelpCircle,
  RotateCw,
  ZapOff,
  SlidersHorizontal,
  Info
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

export default function InverterDetail() {
  return (
    <PageTransition>
      <PageMeta
        title="Apa itu Inverter? Teknologi Hemat Energi Daikin"
        description="Pelajari bagaimana teknologi Inverter Daikin mengontrol kecepatan motor secara efisien untuk menghemat listrik hingga 58% dan meniadakan operasi sia-sia."
        canonical="/insights/technology/inverter"
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
              { label: 'Apa itu Inverter?' }
            ]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-4 text-sky-100 border border-white/10">
              <Zap className="w-4 h-4 text-[#0097E0] bg-white rounded-full p-0.5" /> Teknologi Hemat Energi Daikin
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight max-w-4xl">
              Apa itu Inverter?
            </h1>

            <p className="text-white/90 text-lg md:text-2xl font-bold max-w-3xl leading-relaxed text-sky-100">
              Inverter adalah teknologi hemat energi yang meniadakan operasi yang sia-sia di AC dengan mengontrol kecepatan motor secara efisien.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── Page Body Content ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

          {/* ══════════════════════════════════════════════════════════
              SECTION 1: APA ITU INVERTER & DUAL COLUMN WITH GRAPHIC
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Text Narrative Left */}
              <div className="lg:col-span-7 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  Mekanisme Dasar Pengaturan Suhu
                </h2>

                <p>
                  Pendingin udara mempertahankan suhu yang disetel dengan mendinginkan saat suhu ruangan naik di atas suhu yang disetel dan memanaskan saat suhu ruangan turun di bawah suhu yang disetel.
                </p>

                <p>
                  Kecepatan motor pada AC tipe non-inverter tetap konstan dan suhu diatur dengan menghidupkan dan mematikan motor, yang menghabiskan lebih banyak energi.
                </p>

                <p className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold">
                  Pada AC tipe inverter, suhu diatur dengan mengubah kecepatan motor tanpa menghidupkan dan mematikan motor.
                </p>

                <p className="font-bold text-gray-900">
                  Dibandingkan dengan AC tipe non-inverter, AC dengan inverter lebih sedikit kehilangan daya dan dapat menghemat energi secara signifikan.
                </p>
              </div>

              {/* IMAGE PLACEHOLDER 1: Energy Consumption Graphic */}
              <div className="lg:col-span-5">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-sky-50 to-slate-100 rounded-3xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center text-center relative group hover:border-[#0097E0] transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#0097E0] flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xs md:text-sm font-extrabold text-gray-800 mb-1">
                    [Thumbnail Image Placeholder 1]
                  </h4>
                  <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">
                    Diagram Grafik Perbandingan Konsumsi Energi: <strong>Non-Inverter (100%) vs Inverter (42%)- Saves 58%</strong>
                  </p>

                  <div className="mt-3 text-[10px] text-gray-400 italic">
                    *Energy consumption calculated complying with JIS C 9612:2013 model SSRC140BA.
                  </div>
                </div>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 2: JIKA DIBANDINGKAN DENGAN PRIA YANG SEDANG BERLARI
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

            <div>
              <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Analogi Sederhana</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Jika dibandingkan dengan pria yang sedang berlari
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Column 1: Non-Inverter Runner */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center">1</span>
                  <h3 className="text-base font-extrabold text-gray-900">
                    Pendingin Udara Tipe Non-Inverter
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed min-h-[48px]">
                  Memulai dan berhenti secara tiba-tiba, istirahat, lalu memulai dan berhenti sekali lagi menggunakan lebih banyak energi.
                </p>

                {/* IMAGE PLACEHOLDER 2: Runner Lari-Berhenti */}
                <div className="w-full aspect-[16/10] bg-white rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-red-400 transition-colors">
                  <ImageIcon className="w-8 h-8 text-gray-400 mb-2 group-hover:text-red-500 transition-colors" />
                  <h4 className="text-xs font-bold text-gray-800 mb-0.5">
                    [Thumbnail Image Placeholder 2]
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    Ilustrasi Pelari: Start - Stop - Start - Stop (Lari Berhenti Tiba-tiba)
                  </p>
                </div>
              </div>

              {/* Column 2: Inverter Runner */}
              <div className="p-6 rounded-3xl bg-sky-50/60 border border-sky-100 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0097E0] text-white text-xs font-bold flex items-center justify-center">2</span>
                  <h3 className="text-base font-extrabold text-[#003B71]">
                    AC Tipe Inverter
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-gray-700 leading-relaxed min-h-[48px]">
                  Ketika kecepatan yang tepat dipertahankan, seorang pelari dapat melanjutkan tanpa membuang energi.
                </p>

                {/* IMAGE PLACEHOLDER 3: Runner Inverter Smooth */}
                <div className="w-full aspect-[16/10] bg-white rounded-2xl border-2 border-dashed border-sky-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                  <ImageIcon className="w-8 h-8 text-[#0097E0] mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-bold text-gray-800 mb-0.5">
                    [Thumbnail Image Placeholder 3]
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    Ilustrasi Pelari: Kecepatan Stabil Gelombang Halus (Tanpa Membuang Energi)
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 3: BAGAIMANA KECEPATAN MOTOR DIKENDALIKAN?
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

            <div>
              <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Prinsip Kerja Elektro-Teknis</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Bagaimana kecepatan motor dikendalikan?
              </h2>
            </div>

            <div className="space-y-8">

              {/* Point 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                {/* IMAGE PLACEHOLDER 4 (LEFT) */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                    <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 4]</h4>
                    <p className="text-[10px] text-gray-400">Diagram Magnet Permanen (N S) & Elektromagnet</p>
                  </div>
                </div>

                {/* TEXT NARRATIVE (RIGHT) */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-2">
                  <h3 className="text-base md:text-lg font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="text-[#0097E0] font-black">1.</span> Motor beroperasi dengan magnet dan arus listrik.
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Motor terdiri dari dua jenis magnet. Salah satunya adalah magnet permanen yang memiliki gaya magnet alami. Yang lainnya adalah elektromagnet yang menghasilkan gaya magnet dengan listrik.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                {/* IMAGE PLACEHOLDER 5 (LEFT) */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                    <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 5]</h4>
                    <p className="text-[10px] text-gray-400">Diagram Pembalikan Arah Arus Listrik & Polaritas Magnet</p>
                  </div>
                </div>

                {/* TEXT NARRATIVE (RIGHT) */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-2">
                  <h3 className="text-base md:text-lg font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="text-[#0097E0] font-black">2.</span> Arah arus listrik menentukan polaritas elektromagnet.
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Kutub utara (N) dan selatan (S) elektromagnet ditentukan oleh arah arus listrik. Ketika arah arus listrik dibalik, kutub utara (N) dan selatan (S) juga terbalik.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                {/* IMAGE PLACEHOLDER 6 (LEFT) */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                    <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 6]</h4>
                    <p className="text-[10px] text-gray-400">Diagram Gaya Tarik (Attractive) & Gaya Tolak (Repulsive)</p>
                  </div>
                </div>

                {/* TEXT NARRATIVE (RIGHT) */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-2">
                  <h3 className="text-base md:text-lg font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="text-[#0097E0] font-black">3.</span> Motor berputar dengan mengalihkan arah arus listrik.
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Ketika magnet bersentuhan, gaya tarik-menarik terjadi antara kutub N dan S magnet dan gaya tolak terjadi antara kutub N dan N dan kutub S dan S. Motor berputar dari gaya tarik dan tolak yang disebabkan oleh perubahan polaritas elektromagnet.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="pt-6 border-t border-gray-100 space-y-3 bg-sky-50/60 p-6 rounded-2xl border border-sky-100">
                <h3 className="text-base md:text-lg font-extrabold text-[#003B71] flex items-center gap-2">
                  <span className="text-[#0097E0] font-black">4.</span> Inverter digunakan untuk mengatur kecepatan perpindahan arah arus listrik, dan ini mengatur kecepatan putaran motor.
                </h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Inverter memutar motor dengan mengalihkan arah arus listrik elektromagnet. Selain itu, pengaturan kecepatan putaran pada motor juga dilakukan dengan mengontrol kecepatan switching secara cermat.
                </p>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              FOOTER PAGINATION & NEXT NAVIGATION
             ══════════════════════════════════════════════════════════ */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">

            {/* Page Number Chips */}
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#0097E0] text-white text-xs font-bold shadow-xs">
                1
              </span>
              <Link
                to="/insights/technology/heat-pump"
                className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] text-xs font-bold transition-all"
              >
                2
              </Link>
              <Link
                to="/insights/technology/r32"
                className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] text-xs font-bold transition-all"
              >
                3
              </Link>
            </div>

            {/* Next Chapter Button */}
            <Link
              to="/insights/technology/heat-pump"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold text-[#0097E0] hover:text-[#0072CE] transition-colors"
            >
              <span>BERIKUTNYA: Heat Pump, Energi Terbarukan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Memiliki AC Daikin Inverter Hemat Energi Untuk Rumah Anda?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Dapatkan rekomendasi produk AC Daikin Inverter hemat listrik hingga 60% dari dealer resmi Daikin iShop.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              to="/products/residential"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Jelajahi AC Inverter</span>
            </Link>
            <Link
              to="/services/ishop"
              className="px-6 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-bold text-xs md:text-sm transition-all"
            >
              Cari Dealer Terdekat
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  )
}
