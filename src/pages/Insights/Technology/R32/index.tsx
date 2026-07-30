import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Droplets,
  ShieldCheck,
  Globe,
  Award,
  Zap,
  Image as ImageIcon,
  ArrowLeft,
  ArrowRight,
  Info,
  CheckCircle,
  TrendingDown,
  Sparkles
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

export default function R32Detail() {
  return (
    <PageTransition>
      <PageMeta
        title="Apa itu R-32? Refrigeran Ramah Lingkungan Daikin"
        description="Pelajari bagaimana Refrigeran R-32 Daikin memberikan keseimbangan terbaik dalam efisiensi energi, keamanan, dan potensi pemanasan global 1/3 lebih rendah."
        canonical="/insights/technology/r32"
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
              { label: 'Apa itu R-32?' }
            ]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-4 text-sky-100 border border-white/10">
              <Droplets className="w-4 h-4 text-[#0097E0] bg-white rounded-full p-0.5" /> Refrigeran Paling Seimbang Global
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight max-w-4xl">
              Apa itu R-32?
            </h1>

            <p className="text-white/90 text-lg md:text-2xl font-bold max-w-4xl leading-relaxed text-sky-100">
              R-32 adalah refrigeran paling seimbang dalam hal dampak lingkungan, energi efisiensi, keamanan, dan efektivitas biaya.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── Page Body Content ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

          {/* ══════════════════════════════════════════════════════════
              SECTION 1: APA ITU R-32 & EFISIENSI HANTARAN PANAS
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Narrative Text Left */}
              <div className="lg:col-span-7 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  Mekanisme Hantaran Panas & Dampak Lingkungan
                </h2>

                <p>
                  Refrigerant adalah media untuk menyampaikan panas. AC mentransfer panas saat mensirkulasikan refrigeran antara unit dalam dan luar ruangan.
                </p>

                <p>
                  Meskipun ada berbagai jenis refrigeran, R-32 merupakan refrigeran seimbang yang saat ini mendapat perhatian.
                </p>

                <p className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold">
                  Karena R-32 secara efisien menghantarkan panas, dapat mengurangi konsumsi listrik hingga sekitar 10% dibandingkan dengan AC yang menggunakan refrigeran R-22.
                </p>

                <p className="font-semibold text-gray-900">
                  Selain itu, dibandingkan dengan refrigeran yang banyak digunakan saat ini seperti R-22 dan R-410A, R-32 memiliki potensi pemanasan global (GWP) sepertiga lebih rendah dan luar biasa karena dampak lingkungannya yang rendah.
                </p>
              </div>

              {/* IMAGE PLACEHOLDER 1: 100 Year GWP Chart */}
              <div className="lg:col-span-5">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-sky-50 to-slate-100 rounded-3xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center text-center relative group hover:border-[#0097E0] transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#0097E0] flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xs md:text-sm font-extrabold text-gray-800 mb-1">
                    [Thumbnail Image Placeholder 1]
                  </h4>
                  <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">
                    Diagram Grafik GWP 100 Tahun & Hemat Listrik 10%: <strong>CO2 (1), R-32 (675), R-22 (1,810), R-410A (2,090)</strong>
                  </p>
                  <div className="mt-3 text-[10px] text-gray-400 italic">
                    *Sumber: Laporan Penilaian Keempat IPCC GWP 100 tahun.
                  </div>
                </div>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 2: PELOPOR R-32 PERTAMA DI DUNIA UNTUK RUMAH TANGGA
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            
            <div>
              <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Inovasi Manufaktur</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Sebagai satu-satunya pabrikan yang mengembangkan dan memproduksi AC dan refrigeran, Daikin meluncurkan AC pertama di dunia yang digunakan untuk rumah tangga menggunakan R-32.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
              
              {/* IMAGE PLACEHOLDER 2 (LEFT) */}
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                  <ImageIcon className="w-8 h-8 text-[#0097E0] mb-2" />
                  <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 2]</h4>
                  <p className="text-[11px] text-gray-400">
                    Tabel Tren ODP & GWP: R12 (ODP 1.0, GWP 10,900) → R410A (ODP 0, GWP 2,090) → R32 (ODP 0, GWP 675)
                  </p>
                </div>
              </div>

              {/* TEXT NARRATIVE (RIGHT) */}
              <div className="md:col-span-7 order-1 md:order-2 space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                <h3 className="text-base font-extrabold text-gray-900">
                  Tren Refrigeran Dunia
                </h3>

                <p>
                  Berbagai refrigeran telah digunakan pada AC hingga saat ini. Peraturan semakin ketat karena pertimbangan yang lebih besar untuk lingkungan global karena Protokol Montreal pada tahun 1987 dan Protokol Kyoto pada tahun 1997, mengakibatkan peralihan ke refrigeran dengan dampak lingkungan yang lebih rendah.
                </p>

                <p>
                  Meskipun refrigeran arus utama R-410A memiliki potensi penipisan ozon (ODP) 0, potensi pemanasan globalnya (GWP) masih menjadi masalah.
                </p>

                <p>
                  Sementara R-32 juga memiliki potensi penipisan ozon 0, refrigeran hanya memiliki sekitar 1/3 dari GWP R-410A. Akibatnya, penyelidikan R-32 telah meningkat sebagai refrigeran yang menjanjikan dengan dampak lingkungan yang lebih kecil.
                </p>

                <p className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold">
                  Namun, karena R-32 merupakan refrigeran yang sangat sulit ditangani, penggunaannya tidak praktis sampai sekarang. Daikin menjadi perusahaan pertama di dunia yang berhasil menerapkan R-32 pada AC dengan memanfaatkan keahliannya sebagai satu-satunya pabrikan yang mengembangkan dan memproduksi AC dan refrigeran.
                </p>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 3: KERJASAMA GLOBAL & PENGHARGAAN INTERNASIONAL
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            
            <div>
              <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Kemitraan Global</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Kerjasama dengan pemerintah dan organisasi internasional telah memperluas bantuan teknis untuk negara berkembang ke setiap wilayah dan bertujuan untuk meluaskan penggunaan refrigeran R-32 di seluruh dunia.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
              
              {/* IMAGE PLACEHOLDER 3 (LEFT) */}
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                  <ImageIcon className="w-8 h-8 text-[#0097E0] mb-2" />
                  <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 3]</h4>
                  <p className="text-[11px] text-gray-400">
                    Tabel Penghargaan Lingkungan: 2014 (FIVE STAR ZEAS), 2015 (METI Japan Prize), 2016 (Environment Commendation)
                  </p>
                </div>
              </div>

              {/* TEXT NARRATIVE (RIGHT) */}
              <div className="md:col-span-7 order-1 md:order-2 space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                <p>
                  Bertujuan untuk digunakan secara luas di seluruh dunia, Daikin tidak hanya memproduksi dan menjual R-32, tetapi juga memberikan bantuan teknis di negara-negara berkembang bekerja sama dengan pemerintah dan organisasi internasional.
                </p>

                <p>
                  Di India, uji verifikasi dilakukan untuk AC tipe inverter R-32. Dalam melaksanakan pelatihan untuk penanganan R-32 yang tepat, tingkat teknis juga ditingkatkan. Akibatnya, Daikin telah menerima permintaan dari berbagai pemerintah, termasuk pemerintah Thailand dan Malaysia, dan perusahaan mulai menargetkan produsen lokal untuk bantuan teknis untuk konversi ke R-32.
                </p>

                <p className="font-bold text-gray-900 pt-1">
                  Upaya seperti yang disebutkan di atas telah mendapatkan pengakuan tinggi Daikin dan berbagai penghargaan internasional.
                </p>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              FOOTER PAGINATION & NAVIGATION
             ══════════════════════════════════════════════════════════ */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">
            
            {/* Previous Link */}
            <Link
              to="/insights/technology/heat-pump"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold text-gray-600 hover:text-[#0097E0] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>SEBELUMNYA: Heat Pump, Energi Terbarukan</span>
            </Link>

            {/* Page Number Chips */}
            <div className="flex items-center gap-2">
              <Link
                to="/insights/technology/inverter"
                className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] text-xs font-bold transition-all"
              >
                1
              </Link>
              <Link
                to="/insights/technology/heat-pump"
                className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] text-xs font-bold transition-all"
              >
                2
              </Link>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#0097E0] text-white text-xs font-bold shadow-xs">
                3
              </span>
            </div>

            {/* Back to Overview */}
            <Link
              to="/insights/technology/benefits"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold text-[#0097E0] hover:text-[#0072CE] transition-colors"
            >
              <span>Kembali ke Ringkasan Teknologi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Menggunakan AC Daikin Dengan Refrigeran R-32 Ramah Lingkungan?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Dapatkan garansi resmi Daikin dan pilihan produk AC rumah tangga berbasis R-32 terbaik di dealer terdekat.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Droplets className="w-4 h-4" />
              <span>Jelajahi AC R-32</span>
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
