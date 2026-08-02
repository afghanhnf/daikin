import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wind,
  Home,
  Building2,
  Fan,
  Image as ImageIcon,
  Clock,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  Info,
  ArrowRight,
  ShieldCheck,
  Zap,
  SlidersHorizontal,
  ChevronRight,
  Users,
  Gauge,
  Activity,
  X,
  Maximize2,
  Layers
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface GalleryItem {
  id: string
  title: string
  subtitle: string
  placeholderText: string
  description: string
  category: string
}

const residentialGallery: GalleryItem[] = [
  {
    id: 'res-1',
    title: 'Penempatan Kipas & Jendela di Kamar Utama',
    subtitle: 'Sirkulasi Angin Silang Diagonal',
    placeholderText: '[Gallery Thumbnail Placement 1]',
    description: 'Dokumentasi penempatan dua jendela berseberangan dan kipas sirkulasi untuk menciptakan pola angin silang alami di kamar tidur utama.',
    category: 'Rumah Tinggal'
  },
  {
    id: 'res-2',
    title: 'Exhaust Fan 24 Jam di Kamar Mandi Apartemen',
    subtitle: 'Ventilasi Mekanis Tekanan Negatif',
    placeholderText: '[Gallery Thumbnail Placement 2]',
    description: 'Instalasi exhaust fan tipe plafon (ceiling mounted) yang beroperasi 24 jam penuh untuk menyedot kelembapan dan polutan dari apartemen.',
    category: 'Apartemen'
  },
  {
    id: 'res-3',
    title: 'Integrasi AC Daikin Urusara Udara Segar',
    subtitle: 'Pasokan Oksigen Alami & Pendinginan',
    placeholderText: '[Gallery Thumbnail Placement 3]',
    description: 'Posisi outdoor & indoor unit Daikin Urusara yang dilengkapi selang khusus penyalur udara segar dari luar ruangan tanpa perlu membuka jendela.',
    category: 'Rumah & Apartemen'
  }
]

const commercialGallery: GalleryItem[] = [
  {
    id: 'com-1',
    title: 'Instalasi Daikin VAM Series (HRV) di Plafond Kantor',
    subtitle: 'Heat Reclaim Ventilation Tersembunyi',
    placeholderText: '[Gallery Thumbnail Placement 1]',
    description: 'Dokumentasi pemasangan tersembunyi unit Daikin VAM (HRV) di atas ceiling perkantoran untuk memulihkan 77% energi dingin sebelum udara dibuang.',
    category: 'Gedung Perkantoran'
  },
  {
    id: 'com-2',
    title: 'Sensor CO2 Cerdas di Ruang Meeting',
    subtitle: 'Kontrol Otomatis Kualitas Udara',
    placeholderText: '[Gallery Thumbnail Placement 2]',
    description: 'Posisi pemasangan sensor CO2 pintar pada dinding ruang rapat yang terhubung langsung ke sistem kontrol terpusat Daikin VRV & VAM.',
    category: 'Ruang Rapat'
  },
  {
    id: 'com-3',
    title: 'Sistem Pressurization Dapur & Toilet Restoran',
    subtitle: 'Zonasi Tekanan Negatif vs Positif',
    placeholderText: '[Gallery Thumbnail Placement 3]',
    description: 'Layout saluran ducting exhaust dan pasokan udara segar untuk mengisolasi bau dapur dan mengalirkan udara bersih ke ruang makan pelanggan.',
    category: 'Restoran & Retail'
  }
]

export default function Ventilation() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential')
  const [subFilter, setSubFilter] = useState<'house' | 'apartment'>('house')

  // Lightbox Modal State
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<GalleryItem | null>(null)

  return (
    <PageTransition>
      <PageMeta
        title="Metode Ahli Ventilasi Residensial & Komersial | Daikin Indonesia"
        description="Panduan lengkap dan praktis cara pertukaran udara efektif di rumah, apartemen, kantor, dan toko dari pakar tata udara Daikin Industries."
        canonical="/insights/technology/ventilation"
      />

      {/* ── 1. HERO BANNER (MODEL PAGE BANNER) ────────────────────────────────── */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        {/* Radial dots grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }} 
        />

        {/* Ambient background glow */}
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Wawasan', path: '/insights' },
              { label: 'Berita & Informasi', path: '/insights/news' },
              { label: 'Expert Ventilation' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="max-w-3xl">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                <Wind className="w-4 h-4 text-cyan-200" />
                Expert Ventilation Guide
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                Expert Ventilation <br />
                <span className="text-daikin-blue-light font-light">Metode Ventilasi Ahli</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                Panduan Lengkap Sirkulasi Udara Segar & Sistem Mekanis untuk Hunian, Perkantoran, dan Ruang Komersial dari Pakar Daikin.
              </p>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* ── Main Content Area ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">

          {/* Main Category Tabs: Rumah & Apartemen vs Kantor & Toko */}
          <div className="flex items-center justify-center">
            <div className="bg-white p-1.5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-2 max-w-md w-full">
              <button
                onClick={() => setActiveTab('residential')}
                className={cn(
                  'flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-extrabold transition-all flex items-center justify-center gap-2',
                  activeTab === 'residential'
                    ? 'bg-[#0097E0] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <Home className="w-4 h-4" />
                <span>Rumah & Apartemen</span>
              </button>

              <button
                onClick={() => setActiveTab('commercial')}
                className={cn(
                  'flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-extrabold transition-all flex items-center justify-center gap-2',
                  activeTab === 'commercial'
                    ? 'bg-[#0097E0] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <Building2 className="w-4 h-4" />
                <span>Kantor & Toko</span>
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              TAB CONTENT 1: RUMAH & APARTEMEN
             ══════════════════════════════════════════════════════════ */}
          {activeTab === 'residential' && (
            <div className="space-y-10">

              {/* Sub-filter Navigation: Rumah Tinggal vs Apartemen */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Panduan Spesifik Hunian</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      Pilih Tipe Hunian Anda
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl self-start sm:self-auto">
                    <button
                      onClick={() => setSubFilter('house')}
                      className={cn(
                        'px-4 py-2 rounded-lg text-xs font-bold transition-all',
                        subFilter === 'house' ? 'bg-[#003B71] text-white shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                      )}
                    >
                      🏡 Rumah Tinggal (House)
                    </button>
                    <button
                      onClick={() => setSubFilter('apartment')}
                      className={cn(
                        'px-4 py-2 rounded-lg text-xs font-bold transition-all',
                        subFilter === 'apartment' ? 'bg-[#003B71] text-white shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                      )}
                    >
                      🏢 Apartemen & Kondominium
                    </button>
                  </div>
                </div>

                {/* Intro Narrative */}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  Pertukaran udara yang benar di rumah dan apartemen sangat penting untuk kesehatan keluarga Anda. Daikin membagikan panduan praktis dan ilmiah tentang cara ventilasi ruangan.
                </p>

              </div>

              {/* Bagian 1: Apa itu Ventilasi */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Bagian 1</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      1. Apa itu Ventilasi dan Mengapa itu Penting?
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Column Narrative */}
                  <div className="lg:col-span-7 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                    <p className="text-sm md:text-base font-bold text-gray-900">
                      Ventilasi adalah proses mengganti udara kotor di dalam ruangan dengan udara segar dari luar ruangan.
                    </p>

                    <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                      <h4 className="font-extrabold text-[#003B71] text-xs uppercase tracking-wider">Mengapa penting?</h4>
                      <p>
                        Di dalam ruangan tertutup, berbagai polutan seperti zat berbahaya (CO2, CO, formaldehida), debu, jamur, virus, dan bau menumpuk dari aktivitas sehari-hari manusia dan barang-barang rumah tangga.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <h4 className="font-extrabold text-gray-900 text-sm">Apakah AC mendinginkan dan melakukan ventilasi sekaligus?</h4>
                      <p>
                        Banyak orang mengira AC melakukan ventilasi saat mendinginkan ruangan. Padahal, sebagian besar AC biasa hanya menyedot udara dalam ruangan, mendinginkan atau memanaskannya, lalu mengembuskannya kembali. <strong className="text-gray-900">AC biasa TIDAK menukar udara dengan udara luar.</strong>
                      </p>
                      <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600">
                        💡 <strong>Catatan Daikin:</strong> Beberapa model AC Daikin khusus seperti tipe Urusara dilengkapi fungsi ventilasi udara segar terintegrasi.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-[#003B71] space-y-1.5">
                      <div className="font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#0097E0]" /> Standar Durasi & Frekuensi Ventilasi:
                      </div>
                      <p className="font-semibold">
                        Lakukan ventilasi 5 hingga 10 menit setiap 1 jam sekali. Melakukan ventilasi dua kali selama 5 menit per jam jauh lebih efektif daripada satu kali 10 menit per 2 jam.
                      </p>
                    </div>

                  </div>

                  {/* Right Column Image Placeholder 1 */}
                  <div className="lg:col-span-5">
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-sky-50 to-slate-100 rounded-3xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center text-center relative group hover:border-[#0097E0] transition-colors">
                      <div className="w-14 h-14 rounded-2xl bg-white text-[#0097E0] flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform">
                        <ImageIcon className="w-7 h-7" />
                      </div>
                      <h4 className="text-xs md:text-sm font-extrabold text-gray-800 mb-1">
                        [Thumbnail Image Placeholder 1]
                      </h4>
                      <p className="text-[11px] text-gray-500 max-w-xs leading-relaxed">
                        Diagram Perbedaan: <strong>AC Biasa (Mendinginkan Udara Dalam Saja) vs Sistem Ventilasi (Menukar Udara Segar Luar Ruangan)</strong>
                      </p>
                    </div>
                  </div>

                </div>

              </section>

              {/* Bagian 2: Cara Ventilasi Rumah Tinggal */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Bagian 2</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      2. Cara Ventilasi Rumah Tinggal
                    </h2>
                  </div>
                </div>

                <div className="space-y-8">

                  {/* Point 2.1 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 2]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Aliran Udara 2 Jendela Diagonal (Benar) vs 2 Jendela Berdampingan (Salah)</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">2.1</span> Buka Dua Jendela yang Saling Berlawanan (Diagonally)
                      </h3>
                      <p>
                        Cara paling dasar dan efektif untuk ventilasi adalah membuka dua jendela. Buka dua jendela yang terletak secara diagonal (berseberangan) di dalam ruangan. Ini menciptakan jalur udara masuk dan jalur udara keluar, membuat aliran angin berhembus lancar.
                      </p>
                      <p className="text-gray-500 font-medium">
                        Jika dua jendela bersebelahan dibuka, udara hanya berputar di area kecil dan tidak membuat sirkulasi di seluruh ruangan.
                      </p>
                    </div>
                  </div>

                  {/* Point 2.2 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 3]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Kipas Angin Diarahkan ke Luar Jendela untuk Mendorong Udara Keluar</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">2.2</span> Jika Hanya Ada Satu Jendela- Gunakan Kipas Angin (Circulator)
                      </h3>
                      <p>
                        Jika ruangan hanya memiliki 1 jendela, buka jendela tersebut dan arahkan kipas angin ke arah <strong>LUAR</strong> jendela.
                      </p>
                      <p className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold">
                        Kipas angin akan mendorong udara kotor dari dalam ruangan keluar melalui jendela, dan secara alami menarik udara segar masuk dari celah pintu atau ruangan lain.
                      </p>
                    </div>
                  </div>

                  {/* Point 2.3 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 4]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Aliran Udara Ruangan Tanpa Jendela Menuju Ruang Utama & Exhaust Fan</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">2.3</span> Ventilasi Ruangan Tanpa Jendela
                      </h3>
                      <p>
                        Untuk ruangan tanpa jendela (seperti kamar tidur tengah atau ruang kerja dalam):
                      </p>
                      <ol className="list-decimal pl-4 space-y-1 font-semibold text-gray-900">
                        <li>Buka pintu ruangan.</li>
                        <li>Nyalakan kipas angin di dalam ruangan mengarah ke luar pintu.</li>
                        <li>Buka jendela di ruangan terdekat (seperti ruang tamu) dan nyalakan exhaust fan kamar mandi atau dapur.</li>
                      </ol>
                    </div>
                  </div>

                </div>

              </section>

              {/* Bagian 3: Cara Ventilasi Apartemen */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Bagian 3</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      3. Cara Ventilasi Apartemen & KondominIUM
                    </h2>
                  </div>
                </div>

                <div className="space-y-8">

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2 text-xs md:text-sm text-gray-700">
                    <h4 className="font-extrabold text-gray-900">3.1 Karakteristik Kedap Udara pada Apartemen</h4>
                    <p>
                      Apartemen modern memiliki tingkat kedap udara (airtightness) yang tinggi. Hal ini membuat sirkulasi udara alami lebih sulit dibandingkan rumah tapak jika tidak menggunakan ventilasi mekanis.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 5]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Aliran Udara Apartemen dari Balkon ke Celah Pintu Menuju Exhaust Fan 24 Jam</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">3.2</span> Manfaatkan Exhaust Fan Kamar Mandi & Dapur (Ventilasi 24 Jam)
                      </h3>
                      <p>
                        Di apartemen, exhaust fan di kamar mandi, toilet, dan dapur memainkan peran paling penting. Biarkan exhaust fan kamar mandi menyala terus-menerus (24 jam).
                      </p>
                      <p className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold">
                        Exhaust fan akan terus-menerus menyedot udara keluar, menciptakan tekanan negatif lembut yang menarik udara segar masuk melalui ventilasi celah pintu atau balkon.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 6]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Ventilasi Jendela Terbuka 10 cm Saat AC Tetap Menyala</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">3.3</span> Ventilasi Saat AC Menyala (Musim Panas / Hujan)
                      </h3>
                      <p className="font-bold text-gray-900">
                        Apakah harus mematikan AC saat melakukan ventilasi?
                      </p>
                      <p>
                        Tidak perlu mematikan AC! Mematikan dan menghidupkan AC berulang kali justru mengonsumsi lebih banyak listrik. Biarkan AC tetap menyala saat Anda membuka jendela selama 5-10 menit untuk ventilasi.
                      </p>
                      <p className="text-gray-600">
                        Buka jendela sedikit (sekitar 10 cm) agar pertukaran udara berlangsung bertahap tanpa membuat beban kerja AC melonjak terlalu tinggi.
                      </p>
                    </div>
                  </div>

                </div>

              </section>

              {/* ══════════════════════════════════════════════════════════
                  GALERI PLACEMENT THUMBNAIL (GRID 3) - RESIDENSIAL
                 ══════════════════════════════════════════════════════════ */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Galeri Ilustrasi</span>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                    Placement Dokumentasi Ventilasi Residensial
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Klik pada gambar thumbnail untuk menampilkan pop-up instruksi detail & ilustrasi placement.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {residentialGallery.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedGalleryImage(item)}
                      className="bg-gray-50 border-2 border-dashed border-gray-200 hover:border-[#0097E0] rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between group shadow-xs"
                    >
                      <div className="space-y-3">
                        <div className="w-full aspect-[16/10] bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center p-3 group-hover:bg-sky-50/50 transition-colors relative">
                          <ImageIcon className="w-8 h-8 text-[#0097E0] mb-2 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-gray-800 mb-0.5">{item.placeholderText}</span>
                          <span className="text-[10px] text-gray-400">Klik untuk Pratinjau Detail</span>

                          <div className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-lg text-[#0097E0] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 text-[#003B71] font-bold text-[10px] mb-1 border border-sky-100">
                            {item.category}
                          </span>
                          <h4 className="text-xs md:text-sm font-extrabold text-gray-900 group-hover:text-[#0097E0] transition-colors leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-gray-500 line-clamp-2 mt-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-extrabold text-[#0097E0]">
                        <span>Lihat Placement</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Banner Ringkasan 4 Aturan */}
              <div className="bg-gradient-to-r from-[#003B71] to-[#0097E0] text-white p-6 md:p-8 rounded-3xl space-y-4 shadow-md">
                <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sky-200" /> Ringkasan 4 Aturan Utama Ventilasi Residensial
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-2xl font-black text-sky-200 block mb-1">01</span>
                    <h4 className="font-bold text-xs md:text-sm mb-1">Durasi 5-10 Menit</h4>
                    <p className="text-[11px] text-white/80">Lakukan ventilasi 5-10 menit setiap 1 jam sekali.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-2xl font-black text-sky-200 block mb-1">02</span>
                    <h4 className="font-bold text-xs md:text-sm mb-1">2 Jendela Diagonal</h4>
                    <p className="text-[11px] text-white/80">Buka 2 jendela berseberangan untuk aliran udara lancar.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-2xl font-black text-sky-200 block mb-1">03</span>
                    <h4 className="font-bold text-xs md:text-sm mb-1">Kipas Menghadap Luar</h4>
                    <p className="text-[11px] text-white/80">Arahkan kipas ke jendela jika hanya ada 1 jendela.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-2xl font-black text-sky-200 block mb-1">04</span>
                    <h4 className="font-bold text-xs md:text-sm mb-1">Exhaust 24 Jam</h4>
                    <p className="text-[11px] text-white/80">Nyalakan exhaust fan kamar mandi terus-menerus di apartemen.</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB CONTENT 2: KANTOR & TOKO (COMMERCIAL)
             ══════════════════════════════════════════════════════════ */}
          {activeTab === 'commercial' && (
            <div className="space-y-10">

              {/* Intro Banner for Commercial */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Panduan Ruang Komersial</span>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  METODE EXPERT VENTILASI UNTUK KANTOR & TOKO
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  Ruang komersial seperti gedung perkantoran, toko, restoran, dan ruang meeting memiliki kepadatan manusia yang tinggi. Penumpukan gas CO2 dan polutan udara dapat menurunkan konsentrasi kerja dan menyebabkan kelelahan. Daikin menyediakan metode ventilasi mekanis dan alami yang direkomendasikan untuk ruang komersial.
                </p>
              </div>

              {/* 1. Standar Regulasi & Sistem Ventilasi Gedung */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Bagian 1</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      1. Standar Regulasi & Sistem Ventilasi Gedung Komersial
                    </h2>
                  </div>
                </div>

                <div className="space-y-8">

                  {/* Point 1.1 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 7]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Sistem Ventilasi Mekanis Gedung Komersial (Air Intake & Exhaust Ducting)</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">1.1</span> Regulasi Pertukaran Udara Gedung (20 - 30 m³/jam per Orang)
                      </h3>
                      <p>
                        Menurut standar keselamatan kesehatan bangunan gedung, ruang perkantoran dan toko diwajibkan melakukan pertukaran udara minimal <strong>20 hingga 30 m³ per jam per orang</strong>.
                      </p>
                      <p className="text-gray-500 font-medium">
                        Gedung komersial modern umumnya dilengkapi dengan sistem ventilasi mekanis terpusat yang bekerja mengambil udara luar dan membuang udara dalam secara terus-menerus.
                      </p>
                    </div>
                  </div>

                  {/* Point 1.2 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 8]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Kombinasi AC VRV Daikin & Unit HRV VAM Series (Pertukaran Udara Segar)</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">1.2</span> Perbedaan AC Sentral Biasa vs Sistem Ventilasi HRV/VAM
                      </h3>
                      <p>
                        AC sentral (seperti VRV/VRF atau Chiller) memproses pendinginan udara dalam ruangan. Untuk menukar udara segar, gedung membutuhkan unit <strong>Heat Reclaim Ventilator (HRV Daikin VAM)</strong> yang terhubung ke saluran udara luar.
                      </p>
                    </div>
                  </div>

                </div>

              </section>

              {/* 2. Metode Ventilasi di Kantor & Toko */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Bagian 2</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      2. Metode Ventilasi di Kantor & Toko
                    </h2>
                  </div>
                </div>

                <div className="space-y-8">

                  {/* Point 2.1 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 9]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Aliran Angin Silang (Cross-Ventilation) Pintu Depan Toko ke Pintu Belakang</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">2.1</span> Buka Pintu Utama & Jendela Berseberangan Secara Berkala
                      </h3>
                      <p>
                        Untuk toko atau ruko di lantai dasar, buka pintu masuk utama dan pintu belakang/jendela secara berkala selama 5-10 menit per jam untuk menciptakan dorongan angin silang (<em>cross-ventilation</em>).
                      </p>
                    </div>
                  </div>

                  {/* Point 2.2 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 10]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Sirkulasi Udara Ruang Rapat / Meeting Room Menuju Lorong Utama</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">2.2</span> Kipas Exhaust Fan & Circulator Fan di Ruang Meeting
                      </h3>
                      <p>
                        Ruang rapat/meeting yang tertutup cepat mengalami penumpukan CO2 saat terisi penuh. Buka pintu ruang rapat di sela-sela sesi meeting dan nyalakan kipas sirkulasi menuju lorong utama yang memiliki ventilasi udara luar.
                      </p>
                    </div>
                  </div>

                </div>

              </section>

              {/* 3. Teknologi Daikin VAM (Heat Reclaim Ventilator) */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Bagian 3</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      3. Teknologi Daikin VAM (Heat Reclaim Ventilator / HRV)
                    </h2>
                  </div>
                </div>

                <div className="space-y-8">

                  {/* Point 3.1 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 11]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Prinsip Kerja Element Heat Exchanger Daikin VAM Series (77% Energy Recovery)</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">3.1</span> Pemulihan Panas / Dingin (Energy Heat Recovery s/d 77%)
                      </h3>
                      <p>
                        Membuang udara AC dingin keluar gedung berarti membuang energi secara sia-sia. Unit Daikin VAM (HRV) memanfaatkan suhu udara dingin yang dibuang untuk mendinginkan awal udara segar panas yang baru masuk dari luar.
                      </p>
                      <p className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 text-[#003B71] font-semibold">
                        Sistem ini memulihkan hingga 77% energi kalor/dingin, mengurangi beban pendinginan AC dan menghemat biaya listrik gedung hingga 28%.
                      </p>
                    </div>
                  </div>

                  {/* Point 3.2 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-gray-100">
                    <div className="md:col-span-5 order-2 md:order-1">
                      <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                        <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 12]</h4>
                        <p className="text-[10px] text-gray-400">Diagram Sensor CO2 Cerdas Terhubung ke Pengontrol AC Daikin VRV & VAM</p>
                      </div>
                    </div>

                    <div className="md:col-span-7 order-1 md:order-2 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-[#0097E0] font-black">3.2</span> Pengendalian Kadar CO2 Otomatis (CO2 Sensor Integration)
                      </h3>
                      <p>
                        Ketika tingkat CO2 melampaui 1.000 ppm, sensor CO2 cerdas Daikin secara otomatis meningkatkan laju pertukaran udara segar pada unit VAM tanpa perlu campur tangan manual.
                      </p>
                    </div>
                  </div>

                </div>

              </section>

              {/* 4. Zonasi Tekanan Udara */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0097E0] flex items-center justify-center font-bold flex-shrink-0">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Bagian 4</span>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                      4. Zonasi Tekanan Udara (Positive & Negative Pressure)
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                  <div className="md:col-span-5 order-2 md:order-1">
                    <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-center group hover:border-[#0097E0] transition-colors">
                      <ImageIcon className="w-6 h-6 text-[#0097E0] mb-1" />
                      <h4 className="text-xs font-bold text-gray-800 mb-0.5">[Thumbnail Image Placeholder 13]</h4>
                      <p className="text-[10px] text-gray-400">Diagram Kontrol Tekanan Positif vs Tekanan Negatif di Restoran & Perkantoran</p>
                    </div>
                  </div>

                  <div className="md:col-span-7 order-1 md:order-2 space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                    <p className="font-bold text-gray-900">
                      Untuk area khusus seperti restoran, klinik, atau dapur kantor:
                    </p>
                    <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                      <strong className="text-[#003B71]">• Tekanan Negatif (Negative Pressure):</strong>
                      <p>Diterapkan di dapur & toilet agar bau atau polutan kotor terhisap keluar dan tidak menyebar ke area pelanggan/kantor.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 space-y-1">
                      <strong className="text-[#0097E0]">• Tekanan Positif (Positive Pressure):</strong>
                      <p>Diterapkan di ruang makan/area kerja steril agar udara kotor luar tidak menerobos masuk.</p>
                    </div>
                  </div>
                </div>

              </section>

              {/* ══════════════════════════════════════════════════════════
                  GALERI PLACEMENT THUMBNAIL (GRID 3) - KOMERSIAL
                 ══════════════════════════════════════════════════════════ */}
              <section className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">Galeri Ilustrasi</span>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                    Placement Dokumentasi Ventilasi Komersial
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Klik pada gambar thumbnail untuk menampilkan pop-up instruksi detail & ilustrasi placement.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {commercialGallery.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedGalleryImage(item)}
                      className="bg-gray-50 border-2 border-dashed border-gray-200 hover:border-[#0097E0] rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between group shadow-xs"
                    >
                      <div className="space-y-3">
                        <div className="w-full aspect-[16/10] bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center p-3 group-hover:bg-sky-50/50 transition-colors relative">
                          <ImageIcon className="w-8 h-8 text-[#0097E0] mb-2 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-gray-800 mb-0.5">{item.placeholderText}</span>
                          <span className="text-[10px] text-gray-400">Klik untuk Pratinjau Detail</span>

                          <div className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-lg text-[#0097E0] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 text-[#003B71] font-bold text-[10px] mb-1 border border-sky-100">
                            {item.category}
                          </span>
                          <h4 className="text-xs md:text-sm font-extrabold text-gray-900 group-hover:text-[#0097E0] transition-colors leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-gray-500 line-clamp-2 mt-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-extrabold text-[#0097E0]">
                        <span>Lihat Placement</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Banner Ringkasan 4 Aturan Komersial */}
              <div className="bg-gradient-to-r from-[#003B71] to-[#0097E0] text-white p-6 md:p-8 rounded-3xl space-y-4 shadow-md">
                <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sky-200" /> Ringkasan 4 Aturan Utama Ventilasi Komersial
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-2xl font-black text-sky-200 block mb-1">01</span>
                    <h4 className="font-bold text-xs md:text-sm mb-1">20 - 30 m³/Jam</h4>
                    <p className="text-[11px] text-white/80">Pasokan udara segar minimal 20-30 m³/jam per orang.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-2xl font-black text-sky-200 block mb-1">02</span>
                    <h4 className="font-bold text-xs md:text-sm mb-1">Daikin VAM (HRV)</h4>
                    <p className="text-[11px] text-white/80">Hemat listrik 28% dengan pemulihan panas s/d 77%.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-2xl font-black text-sky-200 block mb-1">03</span>
                    <h4 className="font-bold text-xs md:text-sm mb-1">Sensor CO2 Otomatis</h4>
                    <p className="text-[11px] text-white/80">Jaga tingkat CO2 di bawah 1.000 ppm otomatis.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <span className="text-2xl font-black text-sky-200 block mb-1">04</span>
                    <h4 className="font-bold text-xs md:text-sm mb-1">Zonasi Tekanan</h4>
                    <p className="text-[11px] text-white/80">Tekanan negatif di dapur/toilet & positif di area kerja.</p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Mengaplikasikan Sistem Ventilasi Daikin VAM (HRV) Di Gedung Atau Toko Anda?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Konsultasikan kebutuhan sistem pemurni udara & ventilasi mekanis komersial Daikin bersama tim engineering kami.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/products/commercial/vrv"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>Solusi Komersial VRV & VAM</span>
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

      {/* ── POPUP LIGHTBOX MODAL UNTUK GALERI THUMBNAIL ────────────────── */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">

            {/* Backdrop click dismiss */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedGalleryImage(null)}
            />

            {/* Modal Card Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full z-10 border border-gray-100 space-y-0"
            >
              {/* Header Modal */}
              <div className="p-6 bg-gradient-to-r from-[#003B71] to-[#0097E0] text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-sky-100">
                    {selectedGalleryImage.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-black mt-1 text-white">
                    {selectedGalleryImage.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedGalleryImage(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Modal Image Preview Box */}
              <div className="p-6 md:p-8 space-y-6">

                <div className="w-full aspect-[16/10] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center text-center group">
                  <ImageIcon className="w-12 h-12 text-[#0097E0] mb-3" />
                  <h4 className="text-sm font-extrabold text-gray-800 mb-1">
                    {selectedGalleryImage.placeholderText}
                  </h4>
                  <p className="text-xs text-gray-400 max-w-sm">
                    {selectedGalleryImage.subtitle}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-[#0097E0] tracking-wider">
                    Instruksi Placement & Detail Penjelasan:
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium bg-sky-50/60 p-4 rounded-2xl border border-sky-100">
                    {selectedGalleryImage.description}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedGalleryImage(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#003B71] hover:bg-[#00284d] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Tutup Pratinjau
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
