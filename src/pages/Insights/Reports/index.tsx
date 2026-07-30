import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe,
  MapPin,
  Calendar,
  ChevronDown,
  Info,
  Building,
  Image as ImageIcon,
  CheckCircle,
  BarChart3,
  Thermometer,
  Wind,
  ShieldCheck,
  Search,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

// ─── 8 Survey Questions Data ───────────────────────────────────────────

interface SurveyQuestion {
  id: string
  num: string
  question: string
  summary: string
  details: string
  statBadge?: string
}

const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 'sq-1',
    num: '01',
    question: 'Berapa Bulan Orang Menggunakan AC (Pendingin) dalam Setahun?',
    summary: 'Rata-rata kota beriklim tropis seperti Bangkok & New Delhi menggunakan AC sepanjang 12 bulan penuh, sementara kota-kota di Eropa (Paris & Madrid) berkisar 3-4 bulan pada puncak musim panas.',
    details: 'Di kota-kota tropis dan sub-tropis seperti Bangkok (Thailand), New Delhi (India), dan Houston (AS), lebih dari 88% responden menyalakan AC hampir setiap hari sepanjang tahun. Sebaliknya di kota-kota Eropa seperti Paris dan Madrid, penggunaan AC terkonsentrasi pada bulan Juni hingga Agustus saat gelombang panas (heatwave) melanda.',
    statBadge: 'Tropis: 12 Bulan | Eropa: 3-4 Bulan'
  },
  {
    id: 'sq-2',
    num: '02',
    question: 'Apakah Suhu yang Disetel untuk AC Berbeda dari Kota ke Kota?',
    summary: 'Ya, setel suhu bervariasi dari 22°C di Amerika Serikat hingga 25°C-27°C di Jepang & Asia Tenggara demi keseimbangan kenyamanan dan efisiensi energi.',
    details: 'Responden di Houston dan New York cenderung menyetel termostat pada suhu dingin 21°C - 23°C. Di sisi lain, responden di Tokyo dan Shanghai mematuhi anjuran efisiensi energi nasional dengan menyetel suhu 26°C - 28°C yang dipadukan dengan kipas sirkulasi aliran udara.',
    statBadge: 'Rata-rata Global: 24.2°C'
  },
  {
    id: 'sq-3',
    num: '03',
    question: 'Kota Manakah yang Memiliki Perbedaan Terbesar Antara "Suhu Tersetel" dan "Suhu Udara Luar" di Musim Panas?',
    summary: 'Riyadh (Arab Saudi) dan New Delhi (India) mencatatkan perbedaan suhu terekstrem hingga 25°C selisih antara luar ruangan (47°C) dan dalam ruangan (22°C).',
    details: 'Pada puncak musim panas bulan Juli 2024, suhu udara luar di Riyadh dapat melampaui 48°C. Hal ini menciptakan perbedaan ekstrem dengan suhu nyaman AC di dalam rumah, menjadikan keandalan kompresor Daikin dan efisiensi inverter sebagai faktor vital keselamatan penghuni.',
    statBadge: 'Selisih Maksimal: 25°C'
  },
  {
    id: 'sq-4',
    num: '04',
    question: 'Siapa Mayoritas, Yang Suka Terkena Aliran Udara AC atau Yang Tidak Suka?',
    summary: 'Mayoritas responden (64%) lebih menyukai aliran udara tidak langsung (indirect airflow) yang lembut dan merata untuk mencegah kulit kering dan angin malam yang menyengat.',
    details: 'Responden di Tokyo (78%) dan Paris (71%) sangat menghindari terpaan angin AC langsung ke tubuh saat bekerja atau tidur. Hal ini mendorong tingginya permintaan terhadap fitur Daikin Coanda Airflow dan 3D Airflow yang mengarahkan angin menyusuri langit-langit ruangan.',
    statBadge: '64% Suka Indirect Airflow'
  },
  {
    id: 'sq-[#5]',
    num: '05',
    question: 'Faktor Apa yang Paling Penting Saat Membeli AC?',
    summary: 'Efisiensi Energi (Inverter/Hemat Listrik) menduduki peringkat #1 di seluruh 12 kota, disusul oleh Keandalan/Ketahanan Produk dan Kualitas Pemurnian Udara.',
    details: 'Tingginya harga energi global menjadikan label hemat energi dan teknologi Inverter Daikin sebagai syarat utama pembeli. Di Asia dan Timur Tengah, kemampuan filtrasi debu PM2.5 & pemurni udara Streamer menjadi prioritas kedua terbesar.',
    statBadge: '#1 Hemat Listrik / Inverter'
  },
  {
    id: 'sq-6',
    num: '06',
    question: 'Bagaimana Perubahan Kebutuhan AC Dibandingkan 10 Tahun Lalu?',
    summary: 'Pengguna kini menganggap AC bukan lagi barang mewah biasa, melainkan infrastruktur kesehatan utama untuk kualitas udara harian dan filtrasi polusi.',
    details: 'Dibandingkan dekade lalu, konsumen saat ini menuntut AC yang dilengkapi modul WiFi pintar, pemantauan konsumsi listrik real-time via aplikasi HP, serta filter anti-bakteri dan anti-virus untuk menjaga kesehatan keluarga.',
    statBadge: 'Shift ke Kesehatan & IoT'
  },
  {
    id: 'sq-7',
    num: '07',
    question: 'Seberapa Pentingkah Kualitas Udara dalam Kehidupan Sehari-hari?',
    summary: 'Lebih dari 91% responden menyatakan kualitas udara dalam ruangan sama pentingnya dengan kualitas makanan dan air minum yang dikonsumsi.',
    details: 'Kesadaran akan Indoor Air Quality (IAQ) meningkat secara drastis secara global. Responden menyadari bahwa polusi tak kasat mata, bakteri, dan kadar CO2 yang tinggi berdampak langsung pada kelelahan fisik, kualitas tidur, dan produktivitas kerja.',
    statBadge: '91% Responden Peduli IAQ'
  },
  {
    id: 'sq-8',
    num: '08',
    question: 'Jenis Kekhawatiran Terkait Udara Apa yang Ada di Dunia?',
    summary: 'Kekhawatiran utama berkisar pada gelombang panas ekstrem (heatwaves), lonjakan tagihan listrik, polusi debu PM2.5, serta kelembapan berlebih yang memicu jamur.',
    details: 'Responden di Shanghai & New Delhi paling mengkhawatirkan polusi partikulat PM2.5. Responden di Sao Paulo & Lagos mengkhawatirkan kelembapan dan bau timbal balik, sedangkan responden di Eropa mengkhawatirkan lonjakan energi akibat perubahan iklim.',
    statBadge: 'Polusi, Heatwave & Listrik'
  }
]

// ─── Survey Overview Table Data ────────────────────────────────────────

const SURVEY_CITIES = [
  { city: 'Houston (DMA Houston)', country: 'U.S.', period: '24 Mei hingga 6 Juni 2024' },
  { city: 'New York (DMA New York)', country: 'U.S.', period: '24 Mei hingga 6 Juni 2024' },
  { city: 'Bangkok (Greater Bangkok)', country: 'Thailand', period: '24 Mei hingga 29 Mei 2024' },
  { city: 'Istanbul (Istanbul Province)', country: 'Turkey', period: '30 Mei hingga 31 Mei 2024' },
  { city: 'Lagos', country: 'Nigeria', period: '24 Mei hingga 29 Mei 2024' },
  { city: 'Madrid (Provinces of Madrid)', country: 'Spain', period: '24 Mei hingga 29 Mei 2024' },
  { city: 'New Delhi (Delhi Capital Territory)', country: 'India', period: '24 Mei hingga 30 Mei 2024' },
  { city: 'Paris (Île-de-France)', country: 'France', period: '28 Mei hingga 29 Mei 2024' },
  { city: 'Riyadh (Riyadh Province)', country: 'Saudi Arabia', period: '31 Mei hingga 5 Juni 2024' },
  { city: 'Sao Paulo (State of Sao Paulo)', country: 'Brazil', period: '24 Mei hingga 29 Mei 2024' },
  { city: 'Shanghai', country: 'China', period: '24 Mei hingga 6 Juni 2024' },
  { city: 'Tokyo', country: 'Japan', period: '10 Mei hingga 21 Mei 2024' },
]

export default function Reports() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('sq-1')

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }

  return (
    <PageTransition>
      <PageMeta
        title="Survei Udara DAIKIN di Dunia - Laporan Global"
        description="Hasil Survei Udara Daikin di Dunia 2024: Kesadaran dan Budaya Terkait Air Conditioners & Udara di antara 1.200 Orang di 12 Kota Besar Dunia."
        canonical="/insights/reports"
      />

      {/* ── Page Hero Header ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#003B71] via-[#0072CE] to-[#0097E0] text-white pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[{ label: 'Insights', path: '/insights' }, { label: 'Survei Udara Dunia' }]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3 text-sky-100 border border-white/10">
              <Globe className="w-4 h-4 text-[#0097E0] bg-white rounded-full p-0.5" /> Laporan Riset Global Daikin 2024
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight max-w-4xl">
              Survei Udara DAIKIN di Dunia
            </h1>

            <p className="text-white/85 text-base md:text-xl font-medium max-w-3xl leading-relaxed">
              "Kesadaran dan Budaya Terkait dengan Air Conditioners dan Udara" Di antara 1.200 Orang di 12 Kota di Dunia
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── Main Page Content ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          {/* Executive Intro Narrative Box */}
          <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p className="font-semibold text-gray-900">
              DAIKIN mengadakan <strong>"Survei Udara DAIKIN di Dunia"</strong> pada tahun 2024. Survei ini terutama menyoroti bagaimana masyarakat di 12 kota di seluruh dunia memandang dan menggunakan AC dalam kehidupan sehari-hari, mengeksplorasi perbedaan dan kesamaan antar kota.
            </p>
            <p>
              Pendingin udara, ditemukan di AS sekitar 100 tahun yang lalu, berperan sebagai infrastruktur sosial yang penting untuk kehidupan yang nyaman dan sehat. Pada bulan Juli 2024, suhu rata-rata global mencapai nilai tertinggi yang pernah tercatat<sup>*1</sup>, menjadikan AC semakin penting. Berdasarkan latar belakang ini, Daikin bertujuan untuk meningkatkan kesadaran akan AC dan udara di kalangan masyarakat global.
            </p>
            <p>
              Daikin menyediakan udara ideal untuk setiap wilayah di 175 negara dan wilayah. Dalam upaya untuk mewujudkan <strong>"Menyempurnakan Udara"</strong> di dunia, perusahaan ini terus bergulat dengan keberagaman lingkungan dan kebutuhan di berbagai negara serta berkontribusi pada penyebaran AC yang berkelanjutan.
            </p>
            <div className="pt-2 text-xs text-gray-400 font-medium">
              *1 Sumber: The Copernicus Climate Change Service
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              MAPS SECTION (Placeholder Box As Requested)
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Pemetaan Geografis 12 Kota</span>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  Daikin World Air Survey Map
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Awareness and Cultures Related to Air Conditioners and Air among 1,200 people in 12 cities around the World
                </p>
              </div>

              <div className="flex items-center gap-2 bg-sky-50 text-[#0097E0] px-3.5 py-1.5 rounded-full text-xs font-bold self-start md:self-auto">
                <Globe className="w-4 h-4" />
                <span>12 Kota | 1.200 Responden</span>
              </div>
            </div>

            {/* Empty Image Thumbnail Container (Ready for User Image Insertion) */}
            <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-gray-50 via-sky-50/40 to-slate-100 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group hover:border-[#0097E0] transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-white text-[#0097E0] flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                Thumbnail Gambar Peta Survei Udara Dunia (World Air Survey Map)
              </h4>
              <p className="text-xs text-gray-500 max-w-md leading-relaxed">
                Area thumbnail peta siap pakai untuk gambar Daikin World Air Survey.
              </p>

              {/* Decorative 12 Cities Chips overlay */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 max-w-3xl">
                {[
                  'Houston (U.S.)', 'New York (U.S.)', 'Sao Paulo (Brazil)', 'Paris (France)',
                  'Madrid (Spain)', 'Lagos (Nigeria)', 'Istanbul (Turkey)', 'Riyadh (Saudi Arabia)',
                  'New Delhi (India)', 'Bangkok (Thailand)', 'Shanghai (China)', 'Tokyo (Japan)'
                ].map((cityName, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-white/90 backdrop-blur-xs border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-lg shadow-2xs">
                    📍 {cityName}
                  </span>
                ))}
              </div>
            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              ACCORDION SECTION: 8 SURVEI QUESTIONS
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            
            <div>
              <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Hasil Kuesioner Global</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Temuan Utama 8 Pertanyaan Survei Udara Dunia
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Klik pertanyaan di bawah ini untuk melihat analisis lengkap budaya penggunaan AC di 12 kota.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {SURVEY_QUESTIONS.map((sq) => {
                const isOpen = openAccordion === sq.id
                return (
                  <div
                    key={sq.id}
                    className="border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleAccordion(sq.id)}
                      className={cn(
                        'w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 transition-colors',
                        isOpen ? 'bg-sky-50/60 text-[#0097E0]' : 'bg-white hover:bg-gray-50 text-gray-800'
                      )}
                    >
                      <div className="flex items-center gap-3 md:gap-4 min-w-0">
                        <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600 flex-shrink-0">
                          {sq.num}
                        </span>
                        <h3 className="text-sm md:text-base font-extrabold leading-snug line-clamp-2">
                          {sq.question}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {sq.statBadge && (
                          <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-gray-200 text-[#0097E0] shadow-2xs">
                            {sq.statBadge}
                          </span>
                        )}
                        <div className={cn('p-1.5 rounded-full transition-transform', isOpen ? 'rotate-180 bg-[#0097E0] text-white' : 'bg-gray-100 text-gray-500')}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-gray-100 bg-white p-5 md:p-6 space-y-3"
                        >
                          <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-xs md:text-sm font-semibold text-[#003B71]">
                            💡 Ringkasan: {sq.summary}
                          </div>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            {sq.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                )
              })}
            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION: TENTANG SUBYEK KOTA UNTUK SURVEI
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            
            <div>
              <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Metodologi & Sampel</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                Tentang Subyek Kota untuk Survei
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Cara penggunaan AC sangat bervariasi tergantung pada iklim, gaya perumahan, dll di area tersebut, termasuk suhu udara rata-rata dan suhu udara tertinggi dan terendah sepanjang tahun. Dalam survei ini, kami memilih kota-kota yang akan disurvei dengan mempertimbangkan keseimbangan iklim dan geografis.
            </p>

            {/* ══════════════════════════════════════════════════════════
                TABLE SECTION: GARIS BESAR SURVEI
               ══════════════════════════════════════════════════════════ */}
            <div className="pt-4 space-y-4">
              <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#0097E0]" /> Garis Besar Survei (Survey Overview)
              </h3>

              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full text-left text-xs md:text-sm">
                  <tbody>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-bold text-gray-700 w-1/3 border-r border-gray-200">Badan utama yang melakukan survei</td>
                      <td className="p-4 font-semibold text-gray-900">Daikin Industries, Ltd.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-gray-700 border-r border-gray-200">Metode survei</td>
                      <td className="p-4 text-gray-700">Kuesioner berbasis internet</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-bold text-gray-700 border-r border-gray-200">Subyek survei</td>
                      <td className="p-4 text-gray-700">100 orang berusia 20-an hingga 60-an di setiap kota yang memiliki AC di rumah (Total: 1.200 responden)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-700 border-r border-gray-200 align-top">Subyek kota dan periode</td>
                      <td className="p-4 text-gray-700">
                        <div className="grid sm:grid-cols-2 gap-2 text-xs">
                          {SURVEY_CITIES.map((c, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 space-y-0.5">
                              <div className="font-bold text-gray-900">{c.city}, {c.country}</div>
                              <div className="text-[11px] text-gray-500 font-medium">🗓️ {c.period}</div>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </section>

        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Mengetahui Solusi AC Daikin Terbaik Untuk Iklim Kota Anda?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Temukan jajaran AC Daikin Inverter hemat listrik dan bebas polusi yang dirancang khusus untuk kenyamanan hunian dan bisnis Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Wind className="w-4 h-4" />
              <span>Jelajahi Produk AC Daikin</span>
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
