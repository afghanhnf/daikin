import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Wind,
  Droplets,
  Coffee,
  Brain,
  Zap,
  Thermometer,
  Activity,
  Sparkles,
  ShieldCheck,
  Quote,
  ArrowRight,
  User,
  Gauge,
  Info,
  CheckCircle,
  Clock,
  Layers,
  FlaskConical,
  Award,
  Utensils,
  Smile,
  HeartPulse,
  Building2,
  Sparkle
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

// ─── SVG Diagram 1: Asupan Harian Tubuh Manusia ───────────────────────

function AirConsumptionSvg() {
  return (
    <svg viewBox="0 0 800 330" className="w-full h-auto max-w-3xl mx-auto" fill="none">
      <defs>
        <linearGradient id="airGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0097E0" />
          <stop offset="100%" stopColor="#003B71" />
        </linearGradient>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="foodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      <rect x="10" y="10" width="780" height="310" rx="24" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

      <text x="40" y="48" fill="#0F172A" fontSize="15" fontWeight="bold" fontFamily="sans-serif">
        Perbandingan Asupan Konsumsi Harian Manusia (per Hari)
      </text>

      {/* Row 1: Udara (20 kg) - 87% */}
      <g transform="translate(40, 75)">
        <text x="0" y="24" fill="#0F172A" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
          Udara (Air)
        </text>
        <rect x="140" y="4" width="480" height="32" rx="10" fill="#E2E8F0" />
        <motion.rect
          x="140"
          y="4"
          width="480"
          height="32"
          rx="10"
          fill="url(#airGradient)"
          initial={{ width: 0 }}
          animate={{ width: 480 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <text x="635" y="26" fill="#0097E0" fontSize="18" fontWeight="900" fontFamily="sans-serif">
          20.0 kg <tspan fontSize="12" fill="#64748B" fontWeight="bold">(87%)</tspan>
        </text>
      </g>

      {/* Row 2: Makanan (1.3 kg) - 5.6% */}
      <g transform="translate(40, 140)">
        <text x="0" y="24" fill="#0F172A" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
          Makanan (Food)
        </text>
        <rect x="140" y="4" width="480" height="32" rx="10" fill="#E2E8F0" />
        <motion.rect
          x="140"
          y="4"
          width="32"
          height="32"
          rx="10"
          fill="url(#foodGradient)"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        />
        <text x="185" y="26" fill="#D97706" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
          1.3 kg <tspan fontSize="12" fill="#64748B" fontWeight="bold">(5.6%)</tspan>
        </text>
      </g>

      {/* Row 3: Air Minum (1.2 kg) - 5.2% */}
      <g transform="translate(40, 205)">
        <text x="0" y="24" fill="#0F172A" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
          Cairan (Water)
        </text>
        <rect x="140" y="4" width="480" height="32" rx="10" fill="#E2E8F0" />
        <motion.rect
          x="140"
          y="4"
          width="28"
          height="32"
          rx="10"
          fill="url(#waterGradient)"
          initial={{ width: 0 }}
          animate={{ width: 28 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
        />
        <text x="180" y="26" fill="#0284C7" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
          1.2 kg <tspan fontSize="12" fill="#64748B" fontWeight="bold">(5.2%)</tspan>
        </text>
      </g>

      <text x="40" y="280" fill="#475569" fontSize="12" fontStyle="italic" fontFamily="sans-serif">
        *1 Sumber Data: Penelitian Fisiologi & Neurosains Daikin Industries, Ltd.
      </text>
    </svg>
  )
}

// ─── SVG Diagram 2: Mekanisme Persepsi Rasa & Udara ───────────────────

function FlavorMechanismSvg() {
  return (
    <svg viewBox="0 0 700 360" className="w-full h-auto max-w-2xl mx-auto" fill="none">
      <defs>
        <linearGradient id="flavorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0097E0" />
          <stop offset="100%" stopColor="#003B71" />
        </linearGradient>
      </defs>

      {/* Outer Card Container */}
      <rect x="10" y="10" width="680" height="340" rx="24" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="2" />

      {/* Outer Layer: Lingkungan Udara */}
      <rect x="40" y="40" width="600" height="280" rx="20" fill="#FFFFFF" stroke="#0097E0" strokeWidth="2" strokeDasharray="6 6" />
      <text x="350" y="68" textAnchor="middle" fill="#0097E0" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
        LINGKUNGAN UDARA TERKONTROL (Suhu, Kelembapan, Aliran Angin, Aromatik)
      </text>

      {/* Middle Layer: Indra Hidung & Lidah */}
      <rect x="80" y="90" width="520" height="150" rx="16" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Box 1: Hidung (Retro-Nasal Olfaction) */}
      <g transform="translate(110, 110)">
        <rect x="0" y="0" width="210" height="110" rx="12" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
        <text x="105" y="35" textAnchor="middle" fill="#0369A1" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
          Retro-Nasal Olfaction
        </text>
        <text x="105" y="60" textAnchor="middle" fill="#0C4A6E" fontSize="11" fontFamily="sans-serif">
          Aroma Makanan Dihirup
        </text>
        <text x="105" y="80" textAnchor="middle" fill="#0C4A6E" fontSize="11" fontFamily="sans-serif">
          Melalui Hidung (+20% Intensitas)
        </text>
      </g>

      {/* Plus Icon */}
      <text x="350" y="170" textAnchor="middle" fill="#0097E0" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
        +
      </text>

      {/* Box 2: Lidah (Taste Buds) */}
      <g transform="translate(380, 110)">
        <rect x="0" y="0" width="210" height="110" rx="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <text x="105" y="35" textAnchor="middle" fill="#B45309" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
          Indra Pengecap Lidah
        </text>
        <text x="105" y="60" textAnchor="middle" fill="#78350F" fontSize="11" fontFamily="sans-serif">
          Manis, Asin, Asam,
        </text>
        <text x="105" y="80" textAnchor="middle" fill="#78350F" fontSize="11" fontFamily="sans-serif">
          Pahit, Umami
        </text>
      </g>

      {/* Result Layer */}
      <g transform="translate(140, 260)">
        <rect x="0" y="0" width="420" height="46" rx="12" fill="url(#flavorGradient)" />
        <text x="210" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
          Persepsi Otak: Makanan Terasa Jauh Lebih Lezat
        </text>
      </g>
    </svg>
  )
}

// ─── Main Page Component ───────────────────────────────────────────────

export default function Research() {
  return (
    <PageTransition>
      <PageMeta
        title="Tujuan Penelitian Neurosains Daikin: Udara yang Menghambat Kelelahan"
        description="Membongkar rahasia bagaimana udara memengaruhi kelelahan, produktivitas, dan persepsi rasa secara fundamental melalui penelitian neurosains Daikin Industries."
        canonical="/insights/research"
      />

      {/* ── Page Hero Header ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#003B71] via-[#0072CE] to-[#0097E0] text-white pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[{ label: 'Insights', path: '/insights' }, { label: 'Riset Neurosains' }]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-sky-100 border border-white/10">
                <FlaskConical className="w-4 h-4 text-[#0097E0] bg-white rounded-full p-0.5" /> Daikin Industries, Ltd.
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-white/90 border border-white/10">
                Produksi Konten: TOYO KEIZAI BRAND STUDIO
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight max-w-5xl">
              TUJUAN PENELITIAN NEUROSAINS DI DAIKIN INDUSTRIES: UDARA YANG MENGHAMBAT KELELAHAN
            </h1>

            <p className="text-white/85 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
              Apa nilai dari udara selain untuk pemanasan dan pendinginan?
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── Main Body Content ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Main Article Column */}
            <main className="lg:col-span-8 space-y-10">

              {/* Featured Hero Photo & Opening Narrative Box */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                  <img
                    src="/images/hero/slider-emura.jpeg"
                    alt="Riset Neurosains Udara Daikin"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 md:p-8">
                    <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      Riset Laboratorium Neurosains Daikin Japan
                    </span>
                  </div>
                </div>

                {/* Extracted Opening Paragraph */}
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    Belakangan ini, kualitas udara semakin menarik perhatian besar. Hal ini karena potensi udara jauh melampaui sekadar memberikan kenyamanan melalui pemanasan dan pendinginan.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    Dengan mengubah elemen-elemen dalam udara, nilai baru dapat diciptakan—sesuatu yang sebelumnya belum pernah ada—seperti menciptakan <strong className="text-[#0097E0]">"udara yang membuat makanan terasa lebih lezat,"</strong> <strong className="text-[#0097E0]">"udara yang meningkatkan konsentrasi saat bekerja,"</strong> hingga <strong className="text-[#0097E0]">"udara yang membantu mengurangi kelelahan."</strong>
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium pt-2 border-t border-gray-100">
                    Lalu, bagaimana kehidupan kita bisa menjadi lebih baik dengan berfokus pada kualitas udara? Kami mewawancarai dua peneliti dari Daikin Industries yang telah melakukan penelitian untuk menghadirkan nilai baru dari udara bagi para pelanggan.
                  </p>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  SECTION 1: UDARA MEMENGARUHI KELELAHAN, PRODUKTIVITAS, DAN RASA
                 ══════════════════════════════════════════════════════════ */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Bagian 1</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      UDARA MEMENGARUHI KELELAHAN, PRODUKTIVITAS, DAN RASA
                    </h2>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Sekitar <strong className="text-2xl font-black text-[#0097E0]">20 kilogram</strong>. Tahukah Anda apa arti angka ini? Ini adalah jumlah udara yang dihirup manusia setiap harinya.*<sup className="text-xs">1</sup> Asupan air sekitar 1,2 kilogram, dan makanan sekitar 1,3 kilogram, yang berarti penggunaan udara kita sehari-hari jauh lebih besar dibandingkan makanan dan air. Dengan memahami hal ini, kita dapat dengan mudah menyadari bahwa <strong className="text-gray-900">kualitas udara sama pentingnya dengan kualitas makanan dan air.</strong>
                </p>

                {/* Quote Callout */}
                <div className="bg-gradient-to-r from-[#003B71] to-[#0097E0] text-white p-6 md:p-8 rounded-2xl relative overflow-hidden my-6 shadow-md">
                  <Quote className="absolute top-4 right-4 w-20 h-20 text-white/10" />
                  <p className="text-lg md:text-2xl font-extrabold italic leading-snug relative z-10">
                    "Air is the substance that people take into their bodies the most in a day."
                  </p>
                  <p className="text-xs text-white/80 mt-2 font-medium">
                    (Udara adalah zat paling banyak yang dimasukkan manusia ke dalam tubuhnya setiap hari)
                  </p>
                </div>

                {/* SVG 1: Diagram 20kg Air */}
                <div className="my-8 pt-4">
                  <AirConsumptionSvg />
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Daikin Industries telah melakukan berbagai riset tentang udara sejak berdiri. Namun, saat ini perusahaan berupaya menciptakan nilai baru udara yang melampaui sekadar kontrol suhu dan kelembapan, seperti <strong className="text-gray-900">"menghambat kelelahan"</strong> dan <strong className="text-gray-900">"meningkatkan efisiensi kerja."</strong>
                </p>

                <p className="text-sm md:text-base text-gray-900 font-bold leading-relaxed">
                  Mengapa Daikin berfokus pada riset 'kelelahan' dan 'konsentrasi'?
                </p>

                {/* RESEARCHER 1 CARD: YOSHIDA */}
                <div className="mt-6 p-6 rounded-3xl bg-gradient-to-br from-sky-50/80 to-blue-50/50 border border-sky-100 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#003B71] text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      Y
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-base">Yoshida</h4>
                      <p className="text-xs text-[#0097E0] font-bold">Peneliti Senior- Pusat Inovasi Teknologi, Daikin Industries, Ltd.</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed pt-3 border-t border-sky-200/60">
                    <p className="italic">
                      "Kurang tidur dan stres berlebihan dapat menyebabkan kelelahan kronis. Penelitian menunjukkan bahwa udara yang tepat dapat menstimulasi saraf otonom untuk mengurangi kelelahan otak dan menjaga tingkat konsentrasi tetap tinggi."
                    </p>
                    <p>
                      "Kami mengembangkan lingkungan udara yang secara aktif mengendalikan elemen suhu, kelembapan, aliran udara, dan kadar CO2 secara dinamis. Hasil pengujian menunjukkan penurunan tingkat kelelahan mental yang signifikan pada pekerja kantor."
                    </p>
                    <p>
                      "Penelitian ini dilakukan dengan mengukur gelombang otak (EEG) dan denyut jantung saat subjek melakukan tugas-tugas kognitif yang intensif di ruang kontrol udara khusus."
                    </p>
                    <p className="font-semibold text-gray-900">
                      "Tujuan kami bukan hanya membuat udara terasa dingin atau hangat, tetapi menciptakan udara yang mendukung fungsi biologis dan kesehatan otak secara optimal."
                    </p>
                  </div>
                </div>

              </section>

              {/* ══════════════════════════════════════════════════════════
                  SECTION 2: UDARA YANG MEMENGARUHI KELELAHAN DAN CARA KITA MERASAKAN RASA
                 ══════════════════════════════════════════════════════════ */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-amber-600 tracking-wider">Bagian 2</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      UDARA YANG MEMENGARUHI KELELAHAN DAN CARA KITA MERASAKAN RASA
                    </h2>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Selain kelelahan dan konsentrasi, Daikin juga melakukan penelitian mengejutkan tentang bagaimana udara mempengaruhi persepsi rasa pada makanan dan minuman.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Sensasi rasa tidak hanya berasal dari lidah, tetapi sangat dipengaruhi oleh aroma yang dihirup melalui hidung (<em className="text-gray-900 font-semibold">retro-nasal olfaction</em>) serta kelembapan dan suhu udara di sekitar kita.
                </p>

                <p className="text-sm md:text-base text-gray-900 font-bold leading-relaxed">
                  Bagaimana kelembapan dan aroma udara menciptakan rasa yang lebih kaya?
                </p>

                {/* RESEARCHER 2 CARD: INUI */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50/70 to-orange-50/40 border border-amber-100 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-700 text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      I
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-base">Inui</h4>
                      <p className="text-xs text-amber-700 font-bold">Peneliti Utama / Spesialis Kualitas Udara- Pusat Inovasi Teknologi, Daikin Industries, Ltd.</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed pt-3 border-t border-amber-200/60">
                    <p className="italic">
                      "Kami menemukan bahwa mengontrol kelembapan dan aliran udara dapat meningkatkan intensitas aroma makanan hingga 20%. Hal ini membuat pengalaman makan terasa jauh lebih lezat tanpa mengubah resep makanan."
                    </p>
                    <p>
                      "Restoran dan tempat makan yang menggunakan kontrol udara presisi kami melaporkan tingkat kepuasan pelanggan yang lebih tinggi terhadap cita rasa hidangan mereka."
                    </p>
                    <p className="font-semibold text-gray-900">
                      "Ini membuktikan bahwa udara adalah elemen 'bumbu tak kasat mata' yang memainkan peran sangat penting dalam kehidupan sehari-hari."
                    </p>
                  </div>
                </div>

                {/* SVG 2: Flavor Mechanism Diagram */}
                <div className="my-8 pt-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 text-center">
                    Mekanisme Pengaruh Udara Terhadap Persepsi Rasa Makanan
                  </h3>
                  <FlavorMechanismSvg />
                </div>

              </section>

              {/* ══════════════════════════════════════════════════════════
                  SECTION 3: LINGKUNGAN UDARA YANG MENDORONG KESEJAHTERAAN
                 ══════════════════════════════════════════════════════════ */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-emerald-600 tracking-wider">Bagian 3</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      LINGKUNGAN UDARA YANG MENDORONG KESEJAHTERAAN
                    </h2>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Daikin berkomitmen untuk terus mengembangkan teknologi tata udara berbasis riset neurosains yang mendukung kesejahteraan (<em className="text-gray-900 font-semibold">well-being</em>) manusia di berbagai ruang kehidupan.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Pengaplikasian teknologi ini tidak hanya terbatas pada perkantoran dan ruang kerja, tetapi juga rumah tinggal, sekolah, fasilitas kesehatan, hingga industri kuliner.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Di masa depan, AC Daikin tidak hanya mendinginkan ruangan, tetapi secara cerdas beradaptasi dengan aktivitas dan kondisi fisiologis penghuninya—membantu Anda bekerja lebih fokus, beristirahat lebih nyenyak, dan menikmati hidup lebih berkualitas.
                </p>

                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-900 font-extrabold text-sm md:text-base text-center">
                  "Udara yang baik adalah investasi terbaik untuk kesehatan dan masa depan kita semua."
                </div>

                <div className="text-center pt-2 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  Daikin Industries, Ltd.- Creating New Value with Air
                </div>

              </section>

            </main>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Executive Summary Card */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0097E0]" /> Ringkasan Riset
                </h4>

                <div className="space-y-3 text-xs text-gray-600">
                  <div className="pb-2 border-b border-gray-100">
                    <span className="text-gray-400 block mb-0.5">Lembaga Riset:</span>
                    <strong className="text-gray-900">Daikin Technology Innovation Center Japan</strong>
                  </div>
                  <div className="pb-2 border-b border-gray-100">
                    <span className="text-gray-400 block mb-0.5">Mitra Media:</span>
                    <strong className="text-gray-900">TOYO KEIZAI BRAND STUDIO</strong>
                  </div>
                  <div className="pb-2 border-b border-gray-100">
                    <span className="text-gray-400 block mb-0.5">Peneliti Utama:</span>
                    <strong className="text-gray-900">Yoshida & Inui (Daikin Industries)</strong>
                  </div>
                  <div className="pb-2 border-b border-gray-100">
                    <span className="text-gray-400 block mb-0.5">Konsumsi Udara Harian:</span>
                    <strong className="text-[#0097E0] text-sm">20 Kg / Orang / Hari</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-0.5">Fokus Inovasi:</span>
                    <strong className="text-gray-900">Udara Anti-Kelelahan, Peningkat Konsentrasi & Cita Rasa Makanan</strong>
                  </div>
                </div>
              </div>

              {/* Related Tech Links */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#0097E0]" /> Teknologi Terkait
                </h4>

                <div className="space-y-3">
                  <Link
                    to="/profile/streamer"
                    className="group block p-3 rounded-xl border border-gray-100 hover:border-[#0097E0] hover:bg-sky-50/50 transition-all"
                  >
                    <h5 className="text-xs font-bold text-gray-800 group-hover:text-[#0097E0] transition-colors">
                      Teknologi Streamer Daikin
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Mengeliminasi 99.9% virus, bakteri & alergen dengan plasma discharge.
                    </p>
                  </Link>

                  <Link
                    to="/solutions/air-quality"
                    className="group block p-3 rounded-xl border border-gray-100 hover:border-[#0097E0] hover:bg-sky-50/50 transition-all"
                  >
                    <h5 className="text-xs font-bold text-gray-800 group-hover:text-[#0097E0] transition-colors">
                      Solusi Kualitas Udara Indoor (IAQ)
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Metode ventilasi ahli untuk hunian dan perkantoran modern.
                    </p>
                  </Link>
                </div>
              </div>

            </aside>

          </div>

        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Merasakan Udara Sehat & Anti-Kelelahan Daikin Di Rumah Atau Kantor Anda?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Dapatkan konsultasi gratis mengenai teknologi tata udara Daikin Inverter & Streamer bersama tim spesialis kami.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/profile/streamer"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Pelajari Teknologi Streamer</span>
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
