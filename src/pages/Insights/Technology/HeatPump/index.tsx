import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Leaf,
  Thermometer,
  Sun,
  Flame,
  Snowflake,
  Image as ImageIcon,
  ArrowLeft,
  ArrowRight,
  Info,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Zap,
  Globe
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

export default function HeatPumpDetail() {
  return (
    <PageTransition>
      <PageMeta
        title="Apa itu Heat Pump? Teknologi Energi Terbarukan Daikin"
        description="Pelajari bagaimana teknologi Heat Pump Daikin mentransfer energi panas dari udara alami untuk efisiensi energi tinggi tanpa menghasilkan panas dari awal."
        canonical="/insights/technology/heat-pump"
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
              { label: 'Apa itu Heat Pump?' }
            ]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-4 text-emerald-100 border border-white/10">
              <Leaf className="w-4 h-4 text-emerald-400 bg-white rounded-full p-0.5" /> Teknologi Energi Terbarukan Daikin
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight max-w-4xl">
              Apa itu heat pump?
            </h1>

            <p className="text-white/90 text-lg md:text-2xl font-bold max-w-3xl leading-relaxed text-sky-100">
              Heat pump adalah teknologi hemat energi yang menyalurkan panas tanpa perlu menghasilkan panas.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── Page Body Content ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

          {/* ══════════════════════════════════════════════════════════
              SECTION 1: APA ITU HEAT PUMP & PRINSIP PENYALURAN PANAS
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Narrative Text Left */}
              <div className="lg:col-span-7 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  Prinsip Keberadaan Panas di Udara
                </h2>

                <p>
                  Ada panas di udara bahkan di tempat-tempat yang umumnya dianggap dingin: misalnya Kutub Utara dan Selatan. Namun, karena jumlah panasnya kecil, tempat-tempat ini terasa dingin.
                </p>

                <p className="font-semibold text-gray-900">
                  Ketika jumlah panasnya besar, suhunya tinggi. Ketika jumlah panasnya kecil, suhunya rendah.
                </p>

                <p>
                  Heat pump adalah teknologi yang mengontrol suhu dengan mentransfer panas.
                </p>

                <p className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-900 font-semibold">
                  Misalnya, karena pemanasan dilakukan dengan memindahkan panas dari luar ke dalam ruangan, hanya diperlukan sedikit listrik. Ini memberikan penghematan energi.
                </p>

                {/* Important Notice Box */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs md:text-sm font-medium flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Catatan Resmi:</strong> PT Daikin Airconditioning Indonesia hanya menyediakan produk air conditioning dengan tipe <em>cooling only</em> (CO).
                  </div>
                </div>
              </div>

              {/* Right Side Column Image Placeholders 1 & 2 */}
              <div className="lg:col-span-5 space-y-4">

                {/* IMAGE PLACEHOLDER 1: Amount of Heat Large vs Small */}
                <div className="w-full aspect-[16/10] bg-gradient-to-br from-emerald-50 to-slate-100 rounded-3xl border-2 border-dashed border-gray-200 p-5 flex flex-col items-center justify-center text-center relative group hover:border-emerald-500 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-md mb-2 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-extrabold text-gray-800 mb-0.5">
                    [Thumbnail Image Placeholder 1]
                  </h4>
                  <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">
                    Ilustrasi Kuantitas Panas: <strong>When amount of heat is large (Pantai) vs When amount of heat is small (Penguin di Salju)</strong>
                  </p>
                </div>

                {/* IMAGE PLACEHOLDER 2: Heating Operation Heat Pump */}
                <div className="w-full aspect-[16/10] bg-gradient-to-br from-emerald-50 to-slate-100 rounded-3xl border-2 border-dashed border-gray-200 p-5 flex flex-col items-center justify-center text-center relative group hover:border-emerald-500 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-md mb-2 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-extrabold text-gray-800 mb-0.5">
                    [Thumbnail Image Placeholder 2]
                  </h4>
                  <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">
                    Diagram Operasi Pemanasan: <strong>Heating Operation (Heat Pump Memindahkan Panas dari Luar ke Dalam Ruangan)</strong>
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 2: BAGAIMANA PANAS DIPINDAHKAN?
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

            <div>
              <span className="text-xs font-extrabold uppercase text-emerald-600 tracking-wider">Mekanisme Fisika</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Bagaimana panas dipindahkan?
              </h2>
            </div>

            <div className="space-y-8">

              {/* Point 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                {/* IMAGE PLACEHOLDER 3 (LEFT) */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-emerald-500 transition-colors">
                    <ImageIcon className="w-6 h-6 text-emerald-600 mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 3]</h4>
                    <p className="text-[10px] text-gray-400">Diagram Refrigerant Pembawa Heat (Sirkulasi Media Panas)</p>
                  </div>
                </div>

                {/* TEXT NARRATIVE (RIGHT) */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-2">
                  <h3 className="text-base md:text-lg font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="text-emerald-600 font-black">1.</span> Panas dibawa oleh refrigeran.
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Refrigerant adalah media untuk menyampaikan panas. AC mentransfer panas saat mensirkulasikan refrigeran antara unit dalam dan luar ruangan.
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-emerald-800">
                    Refrigeran sangat penting untuk AC dan bertindak sebagai sumber kehidupannya.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                {/* IMAGE PLACEHOLDER 4 & 5 (LEFT) */}
                <div className="md:col-span-5 order-2 md:order-1 space-y-3">
                  <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-3 flex flex-col items-center justify-center text-center group hover:border-emerald-500 transition-colors">
                    <ImageIcon className="w-5 h-5 text-emerald-600 mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 4]</h4>
                    <p className="text-[10px] text-gray-400">Diagram High Temp → Low Temp (Heat Transferred)</p>
                  </div>
                  <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-3 flex flex-col items-center justify-center text-center group hover:border-emerald-500 transition-colors">
                    <ImageIcon className="w-5 h-5 text-emerald-600 mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 5]</h4>
                    <p className="text-[10px] text-gray-400">Ilustrasi Dua Sendok Bersentuhan (Sendok Panas & Dingin)</p>
                  </div>
                </div>

                {/* TEXT NARRATIVE (RIGHT) */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-3">
                  <h3 className="text-base md:text-lg font-extrabold text-gray-900 flex items-center gap-2">
                    <span className="text-emerald-600 font-black">2.</span> Perpindahan panas (Hukum Fisika Kalor).
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Hukum fisika menyatakan kalor berpindah dari daerah bersuhu tinggi ke daerah bersuhu rendah.
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Misalnya, ketika sendok panas diletakkan di atas sendok dingin, sendok dingin menjadi hangat. Panas dipindahkan dari sendok panas ke sendok dingin. Perpindahan panas berhenti ketika kedua suhu menjadi sama.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                {/* IMAGE PLACEHOLDER 6 (LEFT) */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-emerald-500 transition-colors">
                    <ImageIcon className="w-6 h-6 text-emerald-600 mb-1" />
                    <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 6]</h4>
                    <p className="text-[10px] text-gray-400">Diagram Siklus Refrigeran Indoor & Outdoor Unit (Heating Operation)</p>
                  </div>
                </div>

                {/* TEXT NARRATIVE (RIGHT) */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-3">
                  <h3 className="text-base md:text-lg font-extrabold text-gray-900 leading-snug">
                    <span className="text-emerald-600 font-black">3.</span> Memanfaatkan sifat fisik panas, refrigeran membawa panas dan dalam proses kondisi refrigeran perubahan untuk memberikan pemanasan dan pendinginan.
                  </h3>
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs md:text-sm text-emerald-900 space-y-1.5">
                    <div className="font-bold">Operasi Pemanasan</div>
                    <p>Panas dikumpulkan dari luar dipindahkan di dalam ruangan.</p>
                    <ol className="list-decimal pl-4 space-y-1 font-medium">
                      <li>The refrigerant absorbs heat from air (Refrigeran menyerap panas dari udara)</li>
                      <li>The refrigerant releases heat to air (Refrigeran melepaskan panas ke udara)</li>
                    </ol>
                  </div>
                </div>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              FOOTER PAGINATION & NAVIGATION
             ══════════════════════════════════════════════════════════ */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">

            {/* Previous Link */}
            <Link
              to="/insights/technology/inverter"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold text-gray-600 hover:text-[#0097E0] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>SEBELUMNYA: Inverter untuk Penghematan Energi</span>
            </Link>

            {/* Page Number Chips */}
            <div className="flex items-center gap-2">
              <Link
                to="/insights/technology/inverter"
                className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] text-xs font-bold transition-all"
              >
                1
              </Link>
              <span className="px-3.5 py-1.5 rounded-xl bg-emerald-700 text-white text-xs font-bold shadow-xs">
                2
              </span>
              <Link
                to="/insights/technology/r32"
                className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] text-xs font-bold transition-all"
              >
                3
              </Link>
            </div>

            {/* Next Link */}
            <Link
              to="/insights/technology/r32"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold text-[#0097E0] hover:text-[#0072CE] transition-colors"
            >
              <span>BERIKUTNYA: R-32, Refrigeran Paling Seimbang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Menggunakan Sistem Tata Udara Daikin Ramah Lingkungan?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Dapatkan saran teknis dari spesialis Daikin mengenai teknologi efisiensi energi dan sistem tata udara berkelanjutan.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              to="/solutions/energy-efficiency"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Leaf className="w-4 h-4" />
              <span>Solusi Efisiensi Energi</span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-bold text-xs md:text-sm transition-all"
            >
              Hubungi Spesialis Daikin
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  )
}
