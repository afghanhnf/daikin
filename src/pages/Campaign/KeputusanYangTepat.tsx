import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Wind, Heart, PlayCircle, Quote, Sparkles, CheckCircle2, ArrowRight,
  ShieldCheck, Zap, Image as ImageIcon, ChevronLeft, ChevronRight,
  Calculator, HelpCircle, ChevronDown, Calendar, Newspaper, BookOpen,
  Clock, Award, History, Play
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// ── 1. Timeline Data (Inovasi 100 Tahun) ────────────────────────────────────
const timelineData = [
  {
    era: "1924 – 1949",
    events: [
      "1924: Pendirian Osaka Kinzoku Kogyosho Inc.",
      "1934: Produksi Refrigeran Pertama",
      "1942: Produksi Massal Fluorocarbon Dimulai",
    ]
  },
  {
    era: "1950 – 1974",
    events: [
      "1951: Produksi Packaged AC Pertama Mulai Dipasarkan",
      "1958: Window AC Mulai Dipasarkan",
      "1963: Berganti nama menjadi Daikin Kogyo Co., Ltd",
      "1969: Pengembangan Sistem Multi Split Pertama",
      "1970: Daikin Hadir di Indonesia",
    ]
  },
  {
    era: "1975 – 1998 & Masa Kini",
    events: [
      "1978: AC SkyAir untuk Ruko dan Kantor Mulai Dipasarkan",
      "1982: Peluncuran Pertama Variable Refrigerant Volume (VRV)",
      "1986: Penerapan VRV Pertama di Indonesia",
      "1997: Adopsi Refrigeran Ramah Lingkungan R410A & R32",
    ]
  }
]

// ── 2. Testimonials Data ────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "Memilih AC untuk rumah keluarga baru sempat membuat kami ragu. Namun beralih ke DAIKIN Nusantara Prestige adalah #KeputusanYangTepat. Udaranya sejuk merata dan operasinya sangat tenang.",
    author: "Budi Harisman",
    role: "Pemilik Rumah / Pengguna DAIKIN",
    location: "Jakarta Selatan",
  },
  {
    quote: "Ketenangan pikiran berawal dari udara segar di rumah. Metode pernapasan dikombinasikan dengan hembusan bersih Daikin membantu saya mengambil keputusan bisnis dengan lebih bijak.",
    author: "Siti Rahmawati",
    role: "Entrepreneur & Ibu Rumah Tangga",
    location: "Bandung, Jawa Barat",
  },
  {
    quote: "Desainnya sangat modern dan teknologi Inverter-nya super hemat energi. Pilihan terbaik untuk hunian masa kini yang membutuhkan kenyamanan tanpa batas.",
    author: "Rian Pratama",
    role: "Arsitek & Konsultan Interior",
    location: "Surabaya, Jawa Timur",
  },
  {
    quote: "Kualitas pendingin udara Daikin terbukti memberikan kenyamanan maksimal bagi para tamu kami. Memilih DAIKIN Nusantara Prestige adalah #KeputusanYangTepat.",
    author: "Hendra Kusuma",
    role: "Pemilik Villa & Resort",
    location: "Badung, Bali",
  },
  {
    quote: "Kualitas udara dalam ruangan yang bersih dan senyap sangat membantu kualitas tidur dan relaksasi keluarga setelah seharian beraktivitas tinggi.",
    author: "Dr. Amanda Putri",
    role: "Dokter Spesialis & Pengguna Daikin",
    location: "Tangerang, Banten",
  },
]

// ── 3. FAQ Data ─────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "Apa keunggulan AC Inverter DAIKIN?",
    answer: "Keunggulan utama AC Inverter DAIKIN terletak pada kemampuannya mengatur kecepatan kompresor secara otomatis yang berfungsi untuk menghemat energi hingga 60%. Selain itu, AC Inverter DAIKIN dilengkapi dengan filter udara Streamer untuk meningkatkan kualitas udara yang lebih baik dan mengeliminasi polutan dalam ruangan. Tingkat kebisingannya yang sangat rendah (hingga 19-21 dB) memastikan lingkungan yang tenang untuk tidur atau bekerja.",
  },
  {
    question: "Apa beda AC Inverter dan AC Non-Inverter?",
    answer: "AC Inverter menyesuaikan daya listrik secara fleksibel sesuai beban pendinginan ruangan sehingga hembusan tetap stabil dan jauh lebih hemat daya. Sebaliknya, AC Non-Inverter bekerja dengan sistem mati-hidup kompresor secara berulang yang memicu lonjakan daya listrik setiap kali kompresor menyala.",
  },
  {
    question: "Berapa lama perawatan berkala unit AC?",
    answer: "Pembersihan filter udara mandiri disarankan setiap 2–3 minggu sekali. Sedangkan pencucian AC secara menyeluruh oleh teknisi resmi terdekat disarankan setiap 3–6 bulan sekali untuk menjaga efisiensi pendinginan dan kebersihan unit.",
  },
  {
    question: "Bagaimana cara menghitung kapasitas pendingin yang dibutuhkan untuk ruangan?",
    answer: "Kapasitas pendingin dihitung dari Luas Ruangan (Panjang × Lebar dalam meter) dikalikan 500 BTU/h. Hasil total BTU kemudian disesuaikan dengan kapasitas PK (misal: 5.000 BTU = ½ PK, 9.000 BTU = 1 PK, 18.000 BTU = 2 PK).",
  },
]

// ── 4. Articles Data ────────────────────────────────────────────────────────
const articlesData = [
  {
    id: 1,
    category: "Berita",
    date: "9 Juli 2025",
    title: "DAIKIN Mulai Pengiriman Perdana AC Nusantara Prestige Ke Seluruh Indonesia",
    snippet: "Jakarta, 9 Juli 2025 — Langkah resmi dipelopori oleh PT Daikin Airconditioning Indonesia untuk mendistribusikan produk lini terbaru buatan anak bangsa secara nasional.",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    id: 2,
    category: "Berita",
    date: "30 Juni 2025",
    title: "Jadi AC Perdana DAIKIN Produksi Indonesia, Nusantara Prestige Resmi Dipasarkan",
    snippet: "Jakarta, 30 Juni 2025 — Seri perdana AC buatan DAIKIN Lini Indonesia resmi diproduksi dan dipasarkan dengan standar kualitas tinggi khas pabrikan Jepang.",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    id: 3,
    category: "Berita",
    date: "2 Juni 2025",
    title: "Wujud Komitmen Pemberdayaan Talenta Lokal, DAIKIN Buka Rekrutmen Pabrik Baru",
    snippet: "Cikarang, 2 Juni 2025 — Menyerap puluhan tenaga kerja lokal profesional untuk mendukung operasional pabrik AC modern Daikin di Cikarang.",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    id: 4,
    category: "Tips",
    date: "20 Mei 2025",
    title: "Kapan Waktu yang Tepat untuk Servis AC?",
    snippet: "Rawat AC Daikin Anda secara berkala demi menjamin performa hembusan yang dingin sempurna, kualitas udara bersih, dan penggunaan daya hemat harian.",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 5,
    category: "Berita",
    date: "14 Mei 2025",
    title: "Pabrik AC Hunian Skala Penuh Pertama di Indonesia Milik DAIKIN Mulai Beroperasi",
    snippet: "Cikarang, 14 Mei 2025 — Daikin secara resmi memulai operasional pabrik AC hunian skala penuh pertamanya di Indonesia untuk memasok kebutuhan nasional.",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    id: 6,
    category: "Tips",
    date: "5 Mei 2025",
    title: "Penyebab Udara AC Tidak Dingin dan Cara Mengatasinya",
    snippet: "Filter kotor atau kebocoran kompresor bisa menjadi penyebab utama. Simak panduan penanganan awal yang tepat untuk menjaga AC tetap sejuk maksimal.",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
]

// ── 5. Inspirasi Shorts / Reels Data ───────────────────────────────────────
const reelsData = [
  {
    id: 1,
    title: "Pipa AC terlalu panjang? Bikin Boros?",
    desc: "Tips penting instalasi jarak pipa outdoor ke indoor.",
    duration: "0:45",
  },
  {
    id: 2,
    title: "Kucing Favorit Penghuni Apartemen",
    desc: "Ukur kenyamanan anabul dengan udara sejuk bersih Streamer.",
    duration: "0:30",
  },
  {
    id: 3,
    title: "Trik Hemat Listrik AC Inverter Saat Cuaca Panas",
    desc: "Atur suhu 24-25°C untuk efisiensi tagihan bulanan.",
    duration: "0:55",
  },
  {
    id: 4,
    title: "Pentingnya Filter Streamer Bagi Kesehatan",
    desc: "Teknologi pengurai virus & polutan berbahaya Daikin.",
    duration: "0:40",
  },
]

export default function KeputusanYangTepat() {
  // ── Testimonials Carousel State ───────────────────────────────────────────
  const [activeSlide, setActiveSlide] = useState(0)

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((prev) => (prev + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [])

  // ── Breathing Exercise State ──────────────────────────────────────────────
  const [isBreathingActive, setIsBreathingActive] = useState(false)
  const [breathingPhase, setBreathingPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle')
  const [timerSeconds, setTimerSeconds] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (!isBreathingActive) {
      setBreathingPhase('idle')
      setTimerSeconds(0)
      return
    }
    let elapsed = 0
    setBreathingPhase('inhale')
    setTimerSeconds(4)

    interval = setInterval(() => {
      elapsed += 1
      const cycleTime = elapsed % 19
      if (cycleTime < 4) {
        setBreathingPhase('inhale')
        setTimerSeconds(4 - cycleTime)
      } else if (cycleTime < 11) {
        setBreathingPhase('hold')
        setTimerSeconds(11 - cycleTime)
      } else {
        setBreathingPhase('exhale')
        setTimerSeconds(19 - cycleTime)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [isBreathingActive])

  // ── Room Size Calculator State ───────────────────────────────────────────
  const [lengthVal, setLengthVal] = useState<number>(4)
  const [widthVal, setWidthVal] = useState<number>(4)
  const [calcResult, setCalcResult] = useState<{ area: number; btu: number; pk: string } | null>(null)

  function handleCalculate() {
    const area = lengthVal * widthVal
    const btu = area * 500
    let pk = '½ PK'
    if (btu > 18000) pk = '2.5 PK – 3 PK'
    else if (btu > 14000) pk = '2 PK'
    else if (btu > 10000) pk = '1.5 PK'
    else if (btu > 7000) pk = '1 PK'
    else if (btu > 5000) pk = '¾ PK'

    setCalcResult({ area, btu, pk })
  }

  // ── FAQ Accordion State ───────────────────────────────────────────────────
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // ── Articles Category Filter State ────────────────────────────────────────
  const [articleTab, setArticleTab] = useState<'Semua' | 'Berita' | 'Tips'>('Semua')

  const filteredArticles = articlesData.filter(item => {
    if (articleTab === 'Semua') return true
    return item.category === articleTab
  })

  return (
    <PageTransition>
      <PageMeta
        title="Udara Nyaman untuk Ketenangan - #KeputusanYangTepat Daikin"
        description="Teknologi ramah lingkungan dari DAIKIN menghadirkan ketenangan dan menjernihkan pikiran untuk menuntunmu pada #KeputusanYangTepat."
        canonical="/campaign/keputusan-yang-tepat"
      />

      {/* ── 1. PAGES BANNER (Model Page Banner) ─────────────────────────────── */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Wawasan', path: '/insights' },
              { label: 'Kampanye', path: '/campaign' },
              { label: '#KeputusanYangTepat' }
            ]}
            className="text-white/80 mb-8"
          />

          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 text-cyan-200">
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  DAIKIN Nusantara Prestige
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display tracking-tight">
                  #KeputusanYangTepat <br />
                  <span className="text-daikin-blue-light font-light">untuk kenyamanan tanpa batas.</span>
                </h1>

                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                  Teknologi ramah lingkungan dari DAIKIN menghadirkan ketenangan dan menjernihkan pikiran untuk menuntunmu pada <strong className="font-semibold text-cyan-200">#KeputusanYangTepat</strong>.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="w-full aspect-[4/3] bg-white/10 backdrop-blur-md rounded-3xl border-2 border-dashed border-white/25 p-6 flex flex-col items-center justify-center text-center group hover:border-white/40 transition-all shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 text-cyan-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xs md:text-sm font-extrabold text-white mb-1 tracking-wider uppercase font-display">
                    [Banner Image Placeholder]
                  </h4>
                  <p className="text-[11px] text-white/70 max-w-xs leading-relaxed font-sans font-light">
                    Kenyamanan Berudara Bersama DAIKIN Nusantara Prestige
                  </p>
                </div>
              </div>

            </div>
          </FadeInUp>
        </div>
      </div>

      {/* ── 2. COPY STORYTELLING & FITUR TARIK NAPAS (RELAKSASI 4-7-8) ──────── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#061834] via-[#004f7a] to-[#0a82c4] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 space-y-12">

          <FadeInUp className="space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display leading-snug tracking-tight text-white">
              Membuat keputusan <br />
              <span className="text-cyan-200 font-light">tidak pernah mudah.</span>
            </h2>
            <p className="text-xl sm:text-2xl font-light text-blue-100/90 leading-relaxed font-sans">
              Bahkan ketika pilihan sudah ada di hadapan kita.<br />
              <span className="italic text-cyan-300 font-medium">Menentukan mana yang tepat seringkali terasa berat.</span>
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2} className="bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <p className="text-lg sm:text-2xl font-light text-white leading-relaxed font-sans">
              Tanpa disadari, <span className="font-bold text-cyan-200">udaralah</span> yang selama ini mendorong kita mampu membuat keputusan besar dalam hidup.
            </p>
            <p className="text-base sm:text-xl font-light text-blue-100 leading-relaxed font-sans">
              Dengan udara nyaman, hati menjadi tenang dan semua keputusan dapat kita buat dengan tepat.
            </p>
          </FadeInUp>

          {/* Interactive Breathing Tool (4-7-8 Method) */}
          <FadeInUp delay={0.3} className="pt-4 space-y-6">
            <div className="inline-block bg-slate-900/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-cyan-500/30 w-full max-w-xl mx-auto shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
                Fitur Tarik Napas Relaksasi
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-3">Sebelum memutuskan, tarik nafas dalam, hembuskan perlahan.</h3>

              <div className="flex justify-center py-8">
                <button
                  onClick={() => setIsBreathingActive(!isBreathingActive)}
                  className={`w-44 h-44 sm:w-48 sm:h-48 rounded-full border-4 border-white/30 flex flex-col items-center justify-center gap-1 transition-all duration-700 shadow-2xl ${breathingPhase === 'inhale' ? 'scale-110 bg-cyan-500/40 border-cyan-300' :
                      breathingPhase === 'hold' ? 'scale-110 bg-sky-600/50 border-cyan-200 animate-pulse' :
                        breathingPhase === 'exhale' ? 'scale-95 bg-blue-700/30 border-cyan-400' :
                          'bg-gradient-to-br from-[#0097E0] to-daikin-blue-dark hover:scale-105'
                    }`}
                >
                  {!isBreathingActive ? (
                    <>
                      <Wind className="w-8 h-8 text-cyan-200" />
                      <span className="text-lg font-black tracking-wider">MULAI</span>
                      <span className="text-[10px] text-white/70">Klik untuk Relaksasi</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs uppercase font-bold text-cyan-200">
                        {breathingPhase === 'inhale' && 'Tarik Napas...'}
                        {breathingPhase === 'hold' && 'Tahan Napas...'}
                        {breathingPhase === 'exhale' && 'Hembuskan...'}
                      </span>
                      <span className="text-3xl font-black">{timerSeconds}s</span>
                      <span className="text-[10px] text-white/70">Klik Berhenti</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                💡 <em>Berdasarkan metode Dr. Andrew Weil (1980) yang terinspirasi dari Pranayama untuk relaksasi dan meredakan stres.</em>
              </p>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-sky-300">
              Temukan #KeputusanYangTepat untuk hidupmu.
            </h3>
          </FadeInUp>

        </div>
      </section>

      {/* ── 3. MENGAPA MEMILIH DAIKIN ADALAH #KEPUTUSANYANGTEPAT? (100 TAHUN) ── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12">

          <FadeInUp className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-charcoal tracking-tight">
              Mengapa Memilih DAIKIN adalah <br />
              <span className="text-daikin-blue">#KeputusanYangTepat?</span>
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-gray-700 font-sans">
              Inovasi 100 Tahun sebagai Spesialis Tata Udara
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed">
              Selama lebih dari satu abad, DAIKIN telah menjadi solusi terpercaya dalam menyediakan kebutuhan tata udara di setiap momen berharga dalam hidupmu. Temukan perjalanan kami yang terus berkembang dan berinovasi untuk memenuhi segala kebutuhan udaramu.
            </p>
          </FadeInUp>

          {/* Timeline Cards Grid */}
          <FadeInUp stagger className="grid md:grid-cols-3 gap-8">
            {timelineData.map((item, idx) => (
              <FadeInItem key={idx}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-lg hover:border-daikin-blue/40 transition-all duration-300 space-y-6 h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 text-daikin-blue text-xs font-bold font-display border border-daikin-blue/15">
                      <History className="w-3.5 h-3.5" />
                      {item.era}
                    </div>
                    <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
                      {item.events.map((evt, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                          <span>{evt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

        </div>
      </section>

      {/* ── 4. SIMULASI MEMILIH AC SESUAI UKURAN RUANG (KALKULATOR) ─────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-sky-50 to-blue-50/60 border-b border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8">

          <FadeInUp className="space-y-3">
            <p className="text-gray-600 text-xs sm:text-sm font-sans max-w-2xl mx-auto">
              Kini saatnya kenali kebutuhanmu akan udara nyaman agar kamu dapat mengambil <strong className="text-daikin-blue">#KeputusanYangTepat</strong>. Temukan solusi tata udara yang tepat sesuai dengan ukuran ruanganmu di sini!
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-charcoal tracking-tight">
              Simulasi Memilih AC Sesuai Ukuran Ruang
            </h2>
          </FadeInUp>

          {/* Calculator Card */}
          <FadeInUp delay={0.2} className="bg-white p-8 sm:p-10 rounded-3xl border border-sky-200/80 shadow-xl space-y-6">
            <h3 className="text-base sm:text-lg font-bold font-display text-charcoal">
              Berapa Ukuran Ruanganmu? (m²)
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="w-full">
                <label className="block text-[11px] font-bold text-gray-500 mb-1">Panjang Ruangan (meter)</label>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={lengthVal}
                  onChange={(e) => setLengthVal(Number(e.target.value))}
                  className="w-full text-center px-4 py-3 bg-slate-50 rounded-xl border border-gray-200 font-bold text-charcoal text-base focus:outline-none focus:border-daikin-blue"
                />
              </div>

              <span className="text-xl font-bold text-gray-400">×</span>

              <div className="w-full">
                <label className="block text-[11px] font-bold text-gray-500 mb-1">Lebar Ruangan (meter)</label>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={widthVal}
                  onChange={(e) => setWidthVal(Number(e.target.value))}
                  className="w-full text-center px-4 py-3 bg-slate-50 rounded-xl border border-gray-200 font-bold text-charcoal text-base focus:outline-none focus:border-daikin-blue"
                />
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="px-8 py-3.5 bg-[#0097E0] hover:bg-daikin-blue-dark text-white font-bold font-display text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" /> HITUNG UKURAN
            </button>

            {calcResult && (
              <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl text-center space-y-2 mt-4">
                <span className="text-xs text-gray-500 font-sans block">Hasil Simulasi Rekomendasi Kapasitas AC:</span>
                <div className="text-2xl sm:text-3xl font-black font-display text-daikin-blue">
                  {calcResult.pk} <span className="text-base font-normal text-gray-600">({calcResult.btu.toLocaleString()} BTU/h)</span>
                </div>
                <p className="text-xs text-gray-500 font-sans">
                  Luas Ruang: <strong>{calcResult.area} m²</strong> (Kapasitas ideal untuk kenyamanan maksimal).
                </p>
                <Link to="/solutions/ac-recommendation" className="inline-flex items-center gap-1.5 text-xs font-bold text-daikin-blue hover:underline pt-2">
                  <span>Lihat Produk Sesuai Kapasitas ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
              *Keterangan: Perhitungan ini berdasarkan estimasi standar. Konsultasikan dengan teknisi Daikin untuk hasil akhir.
            </p>
          </FadeInUp>

        </div>
      </section>

      {/* ── 5. TESTIMONI SECTION (SLIDE CAROUSEL) ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-10">

          <FadeInUp className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-3.5 py-1.5 rounded-full border border-daikin-blue/15">
              Kisah Pengalaman (Slide Carousel)
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-charcoal tracking-tight">
              Testimoni #KeputusanYangTepat
            </h2>
            <p className="text-gray-500 text-sm font-sans">
              Pengalaman nyata mereka yang telah merasakan ketenangan bersama DAIKIN Nusantara Prestige.
            </p>
          </FadeInUp>

          {/* Slide Carousel Container */}
          <FadeInUp delay={0.2} className="relative">
            <div className="bg-white p-8 sm:p-12 md:p-14 rounded-3xl border border-gray-200/80 shadow-lg relative min-h-[260px] flex flex-col justify-between transition-all duration-500">
              <Quote className="w-12 h-12 text-daikin-blue/20 mb-4" />

              <div className="space-y-6">
                <p className="text-gray-700 text-base sm:text-lg md:text-xl font-sans leading-relaxed italic font-light">
                  "{testimonials[activeSlide].quote}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-100 pt-6 gap-2">
                  <div>
                    <h4 className="font-bold font-display text-charcoal text-base sm:text-lg">
                      {testimonials[activeSlide].author}
                    </h4>
                    <p className="text-xs text-daikin-blue font-semibold font-sans">
                      {testimonials[activeSlide].role} • <span className="text-gray-400 font-normal">{testimonials[activeSlide].location}</span>
                    </p>
                  </div>

                  <span className="text-xs font-bold text-gray-400 font-mono tracking-widest">
                    {String(activeSlide + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="absolute left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md text-charcoal hover:bg-daikin-blue hover:text-white hover:border-daikin-blue flex items-center justify-center transition-all duration-300 active:scale-95 z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="absolute right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md text-charcoal hover:bg-daikin-blue hover:text-white hover:border-daikin-blue flex items-center justify-center transition-all duration-300 active:scale-95 z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-8 bg-daikin-blue' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </FadeInUp>

        </div>
      </section>

      {/* ── 6. INFORMASIKU & FAQ ACCORDION ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-10">

          <FadeInUp className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-3.5 py-1.5 rounded-full border border-daikin-blue/15">
              Tanya Jawab Solutif
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-charcoal tracking-tight">
              Temukan semua solusi dari pertanyaanmu di sini!
            </h2>
          </FadeInUp>

          {/* FAQ Accordion */}
          <FadeInUp delay={0.2} className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold font-display text-charcoal text-sm sm:text-base hover:text-daikin-blue transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-daikin-blue transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm font-sans text-gray-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </FadeInUp>

        </div>
      </section>

      {/* ── 7. INFORMASI AKURAT UNTUK KEPUTUSAN YANG TEPAT (ARTICLES GRID) ── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-10">

          <FadeInUp className="text-left space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-charcoal tracking-tight">
              Informasi Akurat untuk Keputusan yang Tepat
            </h2>
            <p className="text-gray-500 text-sm font-sans">
              Temukan <strong className="text-daikin-blue">#KeputusanYangTepat</strong> dengan tips dan informasi akurat dari DAIKIN untuk menciptakan udara yang nyaman.
            </p>

            {/* Filter Tabs: Semua, Berita, Tips */}
            <div className="flex items-center gap-2 pt-4">
              {(['Semua', 'Berita', 'Tips'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setArticleTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${articleTab === tab
                      ? 'bg-[#0097E0] text-white shadow-xs'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </FadeInUp>

          {/* Articles Cards Grid */}
          <FadeInUp stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((item) => (
              <FadeInItem key={item.id}>
                <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group">
                  {/* Article Image Placeholder Container */}
                  <div className="w-full aspect-[16/9] bg-slate-100 flex flex-col items-center justify-center p-4 border-b border-gray-100 group-hover:bg-slate-200/60 transition-colors">
                    <BookOpen className="w-8 h-8 text-slate-300 mb-1 group-hover:text-daikin-blue transition-colors" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-display">[ Image Placeholder ]</span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${item.badgeColor}`}>
                          {item.category}
                        </span>
                        <span className="text-[11px] text-gray-400 font-sans flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {item.date}
                        </span>
                      </div>

                      <h3 className="font-bold font-display text-charcoal text-base group-hover:text-daikin-blue transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-3">
                        {item.snippet}
                      </p>
                    </div>

                    <Link
                      to="/insights/news"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark pt-2 transition-colors"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

        </div>
      </section>

      {/* ── 8. CERITA #KEPUTUSANYANGTEPAT DARI DAIKIN (MAIN VIDEO SECTION) ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-sky-50/70 to-blue-50/60 border-t border-sky-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-10">

          <FadeInUp className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-charcoal tracking-tight">
              Cerita <span className="text-daikin-blue">#KeputusanYangTepat</span> dari DAIKIN
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-sans max-w-3xl mx-auto leading-relaxed">
              Komitmen global <em>Perfecting The Air DAIKIN</em> tecermin dari bagaimana kami membantu keluarga dan wirausaha di seluruh dunia untuk membuat keputusan yang tepat demi kualitas hidup yang lebih mantap. Jangan lupa untuk saksikan Seri Video Podcast #KeputusanYangTepat di kanal YouTube DAIKIN Indonesia.
            </p>
          </FadeInUp>

          {/* Embedded YouTube Video Container */}
          <FadeInUp delay={0.2} className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/19bozvkoA9c?autoplay=0&rel=0"
              title="Misteri Rumah Nenek, Sebuah Cerita dari DAIKIN - #KeputusanYangTepat"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </FadeInUp>

        </div>
      </section>

      {/* ── 9. INSPIRASI MENUJU #KEPUTUSANYANGTEPAT (REELS CAROUSEL) ───────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-10">

          <FadeInUp className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-charcoal tracking-tight">
              Inspirasi Menuju <span className="text-daikin-blue">#KeputusanYangTepat</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-sans">
              Temukan #KeputusanYangTepat dari berbagai ide kreatif dan inspirasi menarik membuat pilihanmu!
            </p>
          </FadeInUp>

          {/* Reels / Short Video Cards Grid */}
          <FadeInUp stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reelsData.map((reel) => (
              <FadeInItem key={reel.id}>
                <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-lg group relative aspect-[9/16] flex flex-col justify-between p-6 text-white cursor-pointer hover:border-cyan-400 transition-all">
                  {/* Background overlay with play icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 z-10" />

                  {/* Top Badge */}
                  <div className="relative z-20 flex items-center justify-between">
                    <span className="text-[10px] font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-cyan-200 border border-white/20">
                      Reels / Shorts
                    </span>
                    <span className="text-[10px] font-mono text-white/70">{reel.duration}</span>
                  </div>

                  {/* Center Play Button */}
                  <div className="relative z-20 flex items-center justify-center my-auto">
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="relative z-20 space-y-1">
                    <h4 className="font-bold font-display text-base text-white leading-snug group-hover:text-cyan-200 transition-colors">
                      {reel.title}
                    </h4>
                    <p className="text-[11px] text-white/70 font-sans line-clamp-2">
                      {reel.desc}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

        </div>
      </section>

    </PageTransition>
  )
}
