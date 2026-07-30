import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  X,
  Image as ImageIcon,
  ChevronRight,
  Moon,
  Heart,
  SlidersHorizontal,
  Home,
  Baby,
  Activity,
  Settings,
  Sun,
  Sparkles,
  Wind,
  Maximize2,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Zap
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'
import { cn } from '@/utils/cn'

interface IdealAirCard {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
  bgColor: string
  description: string
  details: string[]
}

const idealAirCards: IdealAirCard[] = [
  {
    id: 'tidur-nyenyak',
    title: 'Udara yang Menghadirkan Tidur Malam Lebih Nyenyak',
    subtitle: 'Kualitas tidur lebih baik dengan suhu dan kelembaban optimal',
    icon: Moon,
    color: 'text-daikin-blue',
    bgColor: 'bg-sky-50',
    description: 'Suhu ruangan yang terlalu panas atau terlalu dingin dapat mengganggu kualitas tidur. Daikin menciptakan udara dengan suhu dan kelembaban yang ideal agar Anda mendapatkan tidur malam yang nyenyak dan bangun dengan segar.',
    details: [
      'Pengaturan suhu presisi untuk kenyamanan tidur optimal (24-26°C).',
      'Kontrol kelembaban otomatis menjaga kulit tetap lembut saat tidur.',
      'Mode senyap (quiet mode) agar tidur tidak terganggu suara kompresor.',
      'Timer otomatis yang menyesuaikan suhu sepanjang malam.'
    ]
  },
  {
    id: 'ketenangan',
    title: 'Udara yang Mampu Memberikan Ketenangan',
    subtitle: 'Ciptakan suasana tenang dan rileks di rumah',
    icon: Heart,
    color: 'text-daikin-blue-dark',
    bgColor: 'bg-blue-50',
    description: 'Setelah seharian beraktivitas, rumah seharusnya menjadi tempat berlindung yang menenangkan. Udara yang bersih, segar, dan bersuhu nyaman memberikan ketenangan jiwa dan raga bagi seluruh keluarga.',
    details: [
      'Teknologi Streamer memurnikan udara dari bakteri dan virus hingga 99,9%.',
      'Aliran udara lembut (Coanda Airflow) tidak menghembus langsung ke tubuh.',
      'Operasi sangat senyap mulai dari 19 dB, lebih sunyi dari bisikan.',
      'Pemurnian bau dan asap secara kontinu tanpa henti.'
    ]
  },
  {
    id: 'kontrol',
    title: 'Udara yang Memperhatikan Kontrol',
    subtitle: 'Kendali penuh dari mana saja',
    icon: SlidersHorizontal,
    color: 'text-daikin-blue',
    bgColor: 'bg-sky-50',
    description: 'Dengan teknologi smart control Daikin, Anda dapat mengatur suhu, mode, dan jadwal AC dari smartphone di mana pun Anda berada. Pulang ke rumah yang sudah sejuk menjadi kenyataan.',
    details: [
      'Kontrol jarak jauh via Daikin Smart App (iOS & Android).',
      'Penjadwalan mingguan otomatis sesuai rutinitas keluarga.',
      'Kompatibel dengan Google Assistant dan Amazon Alexa.',
      'Pemantauan konsumsi energi real-time dari genggaman tangan.'
    ]
  },
  {
    id: 'jenis-ruang',
    title: 'Udara Nyaman Sesuai Jenis Ruang',
    subtitle: 'Solusi tepat untuk setiap ruangan',
    icon: Home,
    color: 'text-daikin-blue-dark',
    bgColor: 'bg-sky-50',
    description: 'Setiap ruangan memiliki kebutuhan pendinginan yang berbeda. Ruang tamu yang luas, kamar tidur yang intim, atau dapur yang hangat, Daikin menyediakan tipe AC yang paling cocok untuk setiap ruangan.',
    details: [
      'Wall-mounted untuk kamar tidur dan ruang keluarga standar.',
      'Ceiling cassette untuk ruang tamu luas dan ruang komersial.',
      'Floor-standing untuk ruangan dengan plafon rendah atau kaca besar.',
      'Multi-split: 1 outdoor unit melayani beberapa ruangan sekaligus.'
    ]
  },
  {
    id: 'anak-fokus',
    title: 'Udara yang Cocok Membuat Anak-Anak Fokus',
    subtitle: 'Lingkungan belajar sehat untuk si kecil',
    icon: Baby,
    color: 'text-daikin-blue',
    bgColor: 'bg-blue-50',
    description: 'Anak-anak membutuhkan udara bersih dan suhu yang stabil agar tetap fokus saat belajar. Daikin menjaga kualitas udara di ruang belajar anak agar bebas dari alergen, debu, dan virus.',
    details: [
      'Filter anti-alergen menangkap debu halus, serbuk sari, dan jamur.',
      'Streamer Discharge mendekomposisi virus dan bakteri di udara.',
      'Suhu stabil tanpa fluktuasi untuk konsentrasi belajar optimal.',
      'Kelembaban terjaga agar saluran pernapasan anak tetap sehat.'
    ]
  },
  {
    id: 'menyegarkan',
    title: 'Udara yang Menyegarkan Kegiatan Bersama',
    subtitle: 'Aktivitas keluarga lebih menyenangkan',
    icon: Activity,
    color: 'text-daikin-blue-dark',
    bgColor: 'bg-sky-50',
    description: 'Berkumpul bersama keluarga di ruang tamu, menonton film, atau bermain bersama anak-anak, semuanya menjadi lebih menyenangkan saat udara di sekitar terasa segar dan nyaman.',
    details: [
      'Powerful mode mendinginkan ruangan besar dengan cepat saat banyak tamu.',
      'Distribusi udara merata ke seluruh sudut ruangan (3D Airflow).',
      'Sensor gerak cerdas mendeteksi keberadaan orang di ruangan.',
      'Hemat energi dengan Eco mode saat ruangan sudah mencapai suhu target.'
    ]
  },
  {
    id: 'kebutuhan',
    title: 'Udara yang Menyesuaikan Dengan Kebutuhan',
    subtitle: 'Personalisasi kenyamanan',
    icon: Settings,
    color: 'text-daikin-blue-dark',
    bgColor: 'bg-blue-50',
    description: 'Setiap orang punya preferensi kenyamanan yang berbeda. Daikin menyediakan beragam mode dan pengaturan canggih yang dapat disesuaikan dengan kebutuhan unik setiap penghuni rumah.',
    details: [
      'Mode Auto menyesuaikan pendinginan atau pemanasan otomatis berdasar suhu ruangan.',
      'Pengaturan arah hembusan vertikal dan horizontal presisi.',
      'Dry mode untuk mengontrol kelembaban tanpa mendinginkan berlebih.',
      'Komfort mode menjaga suhu stabil ±0.5°C dari target.'
    ]
  },
  {
    id: 'siang-hari',
    title: 'Udara yang Dapat Dinikmati Bersama Siang Hari',
    subtitle: 'Produktivitas siang hari meningkat',
    icon: Sun,
    color: 'text-daikin-blue',
    bgColor: 'bg-sky-50',
    description: 'Siang hari yang terik seringkali membuat aktivitas di dalam rumah terasa berat. Daikin memastikan udara tetap sejuk dan bersih sehingga produktivitas dan kegiatan siang hari tetap optimal.',
    details: [
      'Kapasitas pendinginan tinggi untuk mengatasi terik matahari siang.',
      'Teknologi inverter hemat listrik meskipun AC menyala seharian.',
      'Filter udara multi-layer menangkap polusi dari luar.',
      'Desain unit yang elegan dan tidak mengganggu interior ruangan.'
    ]
  },
  {
    id: 'setiap-musim',
    title: 'Udara yang Disesuaikan di Setiap Waktu',
    subtitle: 'Kenyamanan sepanjang musim',
    icon: Sparkles,
    color: 'text-daikin-blue',
    bgColor: 'bg-sky-50',
    description: 'Indonesia memiliki musim hujan dan kemarau yang mempengaruhi kualitas udara. Daikin menyediakan teknologi yang menyesuaikan diri otomatis dengan perubahan cuaca dan kondisi lingkungan.',
    details: [
      'Mode Dry ideal untuk musim hujan mengurangi kelembaban berlebih.',
      'Cooling mode efisien untuk musim kemarau yang panas.',
      'Streamer aktif sepanjang musim membersihkan udara dari polutan.',
      'Self-cleaning otomatis menjaga performa filter dari jamur musim hujan.'
    ]
  }
]

export default function IdealAir() {
  const [selectedCard, setSelectedCard] = useState<IdealAirCard | null>(null)

  return (
    <PageTransition>
      <PageMeta
        title="The Ideal Air by Daikin | Kampanye Udara Ideal"
        description="Udara yang mampu meningkatkan kualitas hidup manusia, ini adalah udara yang ideal. Temukan bagaimana Daikin menciptakan udara ideal untuk setiap momen kehidupan."
        canonical="/campaign/ideal-air"
      />

      {/* ── Hero Section with Animated Air Particles & Floating Bubbles ── */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#003B71] to-[#0072CE]">
        
        {/* Air Particles Component */}
        <AirParticles color="white" />

        {/* Custom Animated Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-tr from-cyan-300/35 via-white/20 to-transparent border border-white/30 backdrop-blur-[1px]"
              style={{
                width: `${18 + (i * 9) % 36}px`,
                height: `${18 + (i * 9) % 36}px`,
                left: `${(i * 15 + 5) % 94}%`,
                bottom: '-50px',
              }}
              animate={{
                y: [0, -500, -950],
                x: [0, i % 2 === 0 ? 30 : -30, i % 2 === 0 ? -20 : 20],
                opacity: [0, 0.75, 0],
                scale: [0.8, 1.25, 0.85],
              }}
              transition={{
                duration: 6.5 + (i % 5) * 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Ambient Glow Effects */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0097E0]/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          <Breadcrumb
            items={[
              { label: 'Campaign', path: '/campaign' },
              { label: 'The Ideal Air' }
            ]}
            className="text-white/70 mb-8"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-6 text-sky-100 border border-white/20 shadow-sm">
                <Wind className="w-4 h-4 text-cyan-300" /> DAIKIN GLOBAL CAMPAIGN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white mb-6 tracking-tight leading-tight uppercase drop-shadow-lg">
                The Ideal Air <br /><span className="text-[#0097E0] font-light">by Daikin</span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl font-sans font-light leading-relaxed drop-shadow max-w-2xl">
                Udara yang mampu meningkatkan kualitas hidup manusia, ini adalah udara yang ideal. Daikin menciptakan kenyamanan untuk setiap momen kehidupan Anda.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2} className="hidden lg:block">
              {/* Floating Image Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0097E0]/20 to-transparent z-0" />
                <div className="aspect-[4/3] w-full bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 relative z-10">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <ImageIcon className="w-10 h-10 text-white/40" />
                    <span className="text-white/50 tracking-widest text-xs uppercase font-medium">Campaign Visual Placeholder</span>
                    <span className="text-white/30 text-[10px]">Keluarga menikmati udara ideal di rumah modern</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* ── Main Content Container ──────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10 md:space-y-12">

          {/* ══════════════════════════════════════════════════════════
              VIDEO PLACEMENT 1 (CAMPAIGN OPENING VIDEO)
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/80 shadow-xs space-y-4">
            <div className="w-full aspect-video bg-gradient-to-br from-[#003B71] to-[#0097E0] rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-7 h-7 ml-1" />
                </div>
                <h4 className="text-sm font-bold font-display text-white mb-0.5">
                  [Video Placement 1: Campaign Opening]
                </h4>
                <p className="text-xs font-sans text-white/80 max-w-md">
                  Video Kampanye "The Ideal Air by Daikin": Keluarga menikmati kenyamanan udara ideal di rumah modern
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 1: NARASI UTAMA KAMPANYE - APA ITU UDARA IDEAL? (CLEAN LITE SECTION)
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl border border-gray-200/80 shadow-sm relative overflow-hidden">
            
            {/* Subtle Top Blue Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-daikin-blue to-cyan-400" />

            <div className="max-w-3xl mx-auto text-center space-y-5">
              <FadeInUp>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-daikin-blue bg-daikin-blue-50 px-3.5 py-1.5 rounded-full border border-daikin-blue/20">
                  <Sparkles className="w-3.5 h-3.5 text-daikin-blue" />
                  Filosofi Udara Ideal Daikin
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight leading-snug mt-3">
                  Apa Itu Udara yang Ideal?
                </h2>

                <p className="text-base sm:text-lg font-sans text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
                  Udara yang mampu meningkatkan kualitas hidup manusia, ini adalah udara yang ideal.
                </p>

                <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Membuat hidup lebih sehat secara mental dan fisik, mendampingi setiap langkah belajar dan bekerja, serta menciptakan kehangatan keluarga yang penuh dengan senyuman.
                </p>

                <div className="p-5 sm:p-6 rounded-xl bg-daikin-blue-50/70 border border-daikin-blue/20 text-daikin-blue-dark text-xs sm:text-sm font-bold font-display leading-relaxed mt-4 max-w-2xl mx-auto shadow-2xs">
                  "DAIKIN akan terus mewujudkan visi ini dengan menciptakan udara yang ideal untuk setiap ruang kehidupan."
                </div>
              </FadeInUp>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              VIDEO PLACEMENT 2 (MID-CONTENT LIFESTYLE VIDEO)
             ══════════════════════════════════════════════════════════ */}
          <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/80 shadow-xs space-y-4">
            <div>
              <span className="text-xs font-bold uppercase text-daikin-blue tracking-wider">Inspirasi Gaya Hidup</span>
              <h3 className="text-lg md:text-xl font-bold font-display text-charcoal leading-snug mt-0.5">
                Rasakan Udara Ideal di Setiap Momen
              </h3>
            </div>

            <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-sky-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center group hover:border-daikin-blue transition-colors relative overflow-hidden cursor-pointer">
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-daikin-blue-50 text-daikin-blue flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 ml-1" />
                </div>
                <h4 className="text-sm font-bold font-display text-gray-800 mb-0.5">
                  [Video Placement 2: Lifestyle Showcase]
                </h4>
                <p className="text-xs font-sans text-gray-500 max-w-md">
                  Video Keluarga di Ruang Tamu Modern dengan Pemandangan Kota: Udara Ideal Daikin untuk Setiap Momen Kehidupan
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 2: CARDS - UDARA TINGKATKAN KEHIDUPAN OLEH DAIKIN
             ══════════════════════════════════════════════════════════ */}
          <section className="space-y-6">

            <div className="text-center max-w-2xl mx-auto space-y-1.5">
              <span className="text-xs font-bold uppercase text-daikin-blue tracking-wider">Jelajahi Setiap Momen</span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-charcoal leading-snug">
                Udara Tingkatkan Kehidupan oleh DAIKIN
              </h2>
              <p className="text-xs sm:text-sm font-sans text-gray-500">
                Klik kartu di bawah untuk melihat bagaimana Daikin menghadirkan udara ideal di berbagai aspek kehidupan Anda.
              </p>
            </div>

            <FadeInUp stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {idealAirCards.map((card) => {
                const IconComponent = card.icon
                return (
                  <FadeInItem key={card.id}>
                    <div
                      onClick={() => setSelectedCard(card)}
                      className="bg-white rounded-2xl p-6 md:p-7 border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-daikin-blue/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full relative overflow-hidden"
                    >
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-daikin-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                      <div className="space-y-3.5">
                        {/* Icon & Category Tag */}
                        <div className="flex items-center justify-between">
                          <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs', card.bgColor)}>
                            <IconComponent className={cn('w-6 h-6', card.color)} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200">
                            Ideal Air
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base md:text-lg font-bold font-display text-charcoal group-hover:text-daikin-blue transition-colors leading-snug">
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs font-sans text-gray-600 leading-relaxed line-clamp-3">
                          {card.description}
                        </p>
                      </div>

                      {/* Card Footer Action */}
                      <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-daikin-blue">
                        <span>Pelajari Selengkapnya</span>
                        <div className="w-7 h-7 rounded-full bg-daikin-blue-50 group-hover:bg-daikin-blue group-hover:text-white flex items-center justify-center transition-colors">
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </FadeInItem>
                )
              })}
            </FadeInUp>
          </section>

        </div>
      </div>

      {/* ── POPUP MODAL DETAIL CARD ────────────────────────────────── */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-sm">

            <div
              className="absolute inset-0"
              onClick={() => setSelectedCard(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full z-10 border border-gray-100"
            >
              {/* Modal Header */}
              <div className="p-6 bg-gradient-to-r from-[#003B71] to-[#0097E0] text-white flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <selectedCard.icon className="w-5 h-5 text-sky-200" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-200">
                      The Ideal Air
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold font-display text-white leading-tight">
                    {selectedCard.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCard(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">

                {/* Image Placeholder */}
                <div className={cn('w-full aspect-[16/9] rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-4', selectedCard.bgColor)}>
                  <ImageIcon className={cn('w-10 h-10 mb-2', selectedCard.color)} />
                  <span className="text-xs font-bold text-gray-700">[Detail Image Placeholder]</span>
                  <span className="text-[10px] font-sans text-gray-400 mt-0.5">{selectedCard.subtitle}</span>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm font-sans text-gray-700 leading-relaxed">
                  {selectedCard.description}
                </p>

                {/* Detail Points */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-display uppercase text-daikin-blue tracking-wider">
                    Keunggulan Utama:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedCard.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-gray-700">
                        <span className={cn('w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white mt-0.5', selectedCard.color === 'text-daikin-blue' ? 'bg-daikin-blue' : 'bg-gray-700')}>
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-6 py-2.5 rounded-xl bg-daikin-blue hover:bg-daikin-blue-dark text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Tutup
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PageTransition>
  )
}
