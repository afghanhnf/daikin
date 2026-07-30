import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ChevronLeft, ArrowRight, Sparkles, 
  MapPin, X, Home, Wind, Layers, Zap, CheckCircle2, ImageIcon, FileText
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface VRVProductItem {
  id: string
  type: string
  name: string
  description: string
  specs: Record<string, string>
  app: string
  badge?: string
  link?: string
}

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Unit Indoor VRV Home Series (Duct & Cassette)',
    subtitle: 'Beragam variasi unit indoor seperti 3DI, Compact Duct, Kitchen & Bathroom Cassette yang menyatu dengan estetika interior.'
  },
  {
    id: 2,
    title: 'Unit Outdoor Ringkas VRV Home',
    subtitle: 'Hanya menggunakan 1 unit outdoor compact efisiensi tinggi untuk melayani hingga 8+ ruangan sekaligus.'
  },
  {
    id: 3,
    title: 'Sistem Terintegrasi Moisture Control & Ventilasi',
    subtitle: 'Kontrol kelembapan udara otomatis dan sirkulasi udara bersih untuk ruang keluarga, kamar tidur, dapur, dan closet.'
  }
]

const VRV_HOME_PRODUCTS: VRVProductItem[] = [
  {
    id: '3di',
    type: 'Indoor - 3DI',
    name: 'Intelligent Air 3-Way Flow Ceiling',
    description: 'Unit indoor fleksibel dengan 3 arah hembusan angin otomatis yang dapat diatur sesuai kenyamanan penghuni ruangan.',
    specs: {
      'Tipe Airflow': '3-Way Airflow Intelligent Swing',
      'Desain': 'Ceiling Mounted / Concealed',
      'Fitur Utama': 'Sensor Suhu Presisi, Auto Airflow Adjust'
    },
    app: 'Ruang Tamu & Ruang Keluarga',
    badge: 'Intelligent Air',
    link: '/products/residential/vrv-home/indoor-3di'
  },
  {
    id: '3di-plus',
    type: 'Indoor - 3DI+',
    name: 'Moisture Control Intelligent 3-Way Flow Ceiling Mounted Duct',
    description: 'Teknologi pengatur kelembapan (Moisture Control) terintegrasi dengan 3 arah hembusan angin untuk kenyamanan hembusan udara optimal.',
    specs: {
      'Tipe Airflow': '3-Way Intelligent Duct Flow',
      'Pengontrol Kelembapan': 'Moisture & Humidity Sensor Auto',
      'Fitur Utama': 'Filter Anti-Bakteri & Auto Dehumidify'
    },
    app: 'Kamar Tidur Utama & Living Area',
    badge: 'Moisture Control',
    link: '/products/residential/vrv-home/indoor-3di'
  },
  {
    id: 'compact',
    type: 'Indoor - Compact',
    name: 'Compact Ceiling Mounted Duct',
    description: 'Desain unit tersembunyi berukuran ringkas yang menghemat tinggi plafon tanpa mengurangi estetika interior rumah.',
    specs: {
      'Profil': 'Ultra Slim & Compact Height (200mm)',
      'Tekanan Statis': 'Low Static Pressure (Quiet Operation)',
      'Fitur Utama': 'Built-in Drain Pump, Super Silent 23dB'
    },
    app: 'Kamar Tidur & Ruang Kerja',
    badge: 'Ultra Compact',
    link: '/products/residential/vrv-home/indoor-3di'
  },
  {
    id: 'bathroom',
    type: 'Indoor - Bathroom',
    name: 'Ventilating Moisture Control Ceiling Mounted Duct',
    description: 'Khusus area kamar mandi dengan fitur kontrol kelembapan dan sirkulasi udara segar untuk mencegah timbulnya jamur dan bau lembap.',
    specs: {
      'Proteksi Jamur': 'Anti-Mold Moisture Control Unit',
      'Ventilasi': 'Fresh Air Ventilation System',
      'Fitur Utama': 'Housing Tahan Uap Air, Rapid Dehumidification'
    },
    app: 'Kamar Mandi & Spa Room',
    badge: 'Bathroom Special',
    link: '/products/residential/vrv-home/indoor-3di'
  },
  {
    id: 'kitchen',
    type: 'Indoor - Kitchen',
    name: 'Durability Moisture Control Ceiling Mounted Cassette',
    description: 'Filter minyak tahan debu dan minyak (Oil Resistant Filter) khusus area dapur untuk daya tahan ekstra tinggi.',
    specs: {
      'Filtrasi Khusus': 'Oil & Grease Resistant Metal Mesh Filter',
      'Material Body': 'Durable Stainless Accent Housing',
      'Fitur Utama': 'Kipas Tahan Asap & Kemudahan Cleaning'
    },
    app: 'Dapur & Dining Area',
    badge: 'Kitchen Special',
    link: '/products/residential/vrv-home/indoor-3di'
  },
  {
    id: 'closet',
    type: 'Indoor - Closet',
    name: 'Moisture Control Ceiling Mounted Cassette',
    description: 'Perlindungan pakaian mewah, tas, dan sepatu dari kelembapan berlebih dengan kontrol kelembapan otomatis 24 jam.',
    specs: {
      'Fungsi Proteksi': 'Auto Dehumidification & Closet Protect',
      'Format Cassette': 'Mini Compact Ceiling Cassette',
      'Fitur Utama': 'Bebas Bau Apek & Jamur, Operation Hening'
    },
    app: 'Walk-in Closet & Ruang Wardrobe',
    badge: 'Closet Protect',
    link: '/products/residential/vrv-home/indoor-3di'
  },
  {
    id: 'long-duct',
    type: 'Indoor - Long Duct',
    name: 'Medium Static Ceiling Mounted Duct',
    description: 'Unit ducted bertekanan statis sedang untuk distribusi udara yang merata di ruangan yang luas dan memanjang.',
    specs: {
      'Tekanan Statis': 'Medium Static Pressure (up to 150 Pa)',
      'Cakupan Ruang': 'Wide Open Area Coverage',
      'Fitur Utama': 'Koneksi Duct Panjang, Kapasitas Tinggi'
    },
    app: 'Ruang Utama & Penthouse Area',
    badge: 'Medium Static',
    link: '/products/residential/vrv-home/indoor-3di'
  },
  {
    id: 'outdoor',
    type: 'Outdoor',
    name: 'RXYQ-A / VRV Home Outdoor Unit',
    description: 'Unit luar ruangan hemat tempat berkapasitas tinggi, mampu melayani hingga 8+ unit indoor sekaligus dengan 1 outdoor saja.',
    specs: {
      'Kapasitas': 'Single Outdoor Unit melayani Multi-Indoor',
      'Teknologi': 'Full DC Inverter Compressor',
      'Fitur Utama': 'Quiet Night Operation, Compact Footprint, Piping Panjang'
    },
    app: 'Balkon / Area Utility / Atap Rumah',
    badge: 'High Efficiency Outdoor',
    link: '/products/residential/vrv-home/indoor-3di'
  }
]

export default function VRVHome() {
  const [selectedProduct, setSelectedProduct] = useState<VRVProductItem | null>(null)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)

  const handleNextSlide = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % GALLERY_ITEMS.length)
  }

  const handlePrevSlide = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
  }

  return (
    <PageTransition>
      <PageMeta 
        title="VRV Home Series - AC Home Central Premium Daikin" 
        description="Solusi AC central VRV Home Series ringkas dan fleksibel untuk kenyamanan dan estetika hunian mewah Anda."
        canonical="/products/residential/vrv-home" 
      />

      {/* Hero Banner Header Section */}
      <div className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#0080cb] via-[#0097e6] to-[#00b0f0] text-white">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>
        <div className="absolute inset-0 z-0 opacity-15 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <nav className="flex items-center space-x-2 text-white/80 mb-6 text-sm font-medium tracking-wide">
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-white transition-colors">Produk</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products/residential" className="hover:text-white transition-colors">AC Hunian</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">VRV Home Series</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Solusi AC Home Central Premium
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                VRV Home Series
              </h1>
              <p className="text-white/95 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Unit ini ringkas dan cukup ramping, memberi Anda lebih banyak ruang serta lebih fleksibel untuk menciptakan rumah yang sempurna sesuai dengan keinginan Anda. Sekarang, fungsi dan estetika dapat hidup dalam hunian Anda.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/products/e-catalogue"
                  className="px-6 py-3 bg-white text-daikin-blue rounded-xl font-bold text-xs md:text-sm hover:bg-blue-50 transition-all shadow-md flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Lihat Katalog</span>
                </Link>

                <Link
                  to="/products/residential/vrv-home/indoor-3di"
                  className="px-6 py-3 bg-white/15 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-xs md:text-sm hover:bg-white hover:text-[#0080cb] transition-all shadow-sm flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Detail Indoor - 3Di</span>
                </Link>
              </div>
            </FadeInUp>
          </div>

          {/* Hero Right-Side Thumbnail Image Box */}
          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Clean Empty Thumbnail Box Placeholder */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(VRV Home Series AC Home Central System & Outdoor Unit)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Sub-Hero Badge Bar */}
      <div className="py-5 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-daikin-blue text-base md:text-lg tracking-tight uppercase">VRV HOME SERIES</span>
            <span className="text-slate-300 font-light">|</span>
            <span className="font-semibold text-slate-500 text-xs md:text-sm tracking-wider uppercase">AC Home Central</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Compact Outdoor
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              8+ Indoor Connectable
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Moisture Control
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Duct & Cassette
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Inverter High Efficiency
            </span>
          </div>
        </div>
      </div>

      {/* Photo Gallery & Visual Slider Section */}
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block">
              Galeri Produk & Visualisasi
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-charcoal">
              Galeri Foto <span className="text-daikin-blue">VRV Home Series</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">
              Geser untuk melihat detail tampilan unit indoor, unit outdoor compact, dan integrasi estetika interior hunian.
            </p>
          </FadeInUp>

          {/* Interactive Slide Gallery Component */}
          <div className="relative w-full aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 group">
            {/* Gallery Slide Area */}
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="w-full h-full rounded-2xl border-2 border-dashed border-daikin-blue/30 flex flex-col items-center justify-center p-6 text-daikin-blue">
                <ImageIcon className="w-12 h-12 mb-3 text-daikin-blue/60" />
                <h3 className="font-bold text-lg text-charcoal mb-1">
                  {GALLERY_ITEMS[activeGalleryIndex].title}
                </h3>
                <p className="text-gray-500 text-xs max-w-md">
                  {GALLERY_ITEMS[activeGalleryIndex].subtitle}
                </p>
                <span className="mt-4 px-3 py-1 bg-daikin-blue/10 text-daikin-blue text-[11px] font-bold rounded-full">
                  Foto Slide {activeGalleryIndex + 1} dari {GALLERY_ITEMS.length}
                </span>
              </div>
            </div>

            {/* Arrows Controls */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md text-charcoal hover:bg-daikin-blue hover:text-white flex items-center justify-center transition-all border border-gray-100 z-10"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md text-charcoal hover:bg-daikin-blue hover:text-white flex items-center justify-center transition-all border border-gray-100 z-10"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {GALLERY_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeGalleryIndex 
                      ? 'w-8 bg-daikin-blue' 
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Models Grid (Extracted exactly from layout screenshot) */}
      <div className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Jajaran Unit VRV Home Series
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Pilihan lengkap unit indoor khusus sesuai fungsi ruangan (ruang keluarga, dapur, kamar mandi, closet) dan unit outdoor ringkas efisiensi tinggi.
            </p>
          </FadeInUp>

          {/* Row 1 & Row 2: 6 Cards (Grid 3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8">
            {VRV_HOME_PRODUCTS.slice(0, 6).map((product, idx) => (
              <FadeInUp key={product.id} delay={0.1 * (idx + 1)} className="h-full">
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-daikin-blue/50 transition-all duration-300 h-full flex flex-col justify-between group">
                  
                  <div>
                    {/* Placeholder Box Image */}
                    <div className="aspect-[4/3] w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 mb-6 group-hover:border-daikin-blue/40 group-hover:bg-blue-50/30 transition-colors relative overflow-hidden">
                      <Wind className="w-12 h-12 text-daikin-blue/40 group-hover:scale-110 transition-transform mb-2" />
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
                        {product.type}
                      </span>
                      <span className="text-[11px] text-gray-400 text-center mt-1 font-medium">
                        Unit Image Placeholder
                      </span>
                      {product.badge && (
                        <span className="absolute top-3 right-3 bg-daikin-blue/10 text-daikin-blue text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="text-center px-2">
                      <span className="text-daikin-blue font-bold text-base block mb-1">
                        {product.type}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-700 min-h-[40px] flex items-center justify-center leading-snug mb-3">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <Link
                    to={product.link || '/products/residential/vrv-home/indoor-3di'}
                    className="w-full mt-4 bg-[#0097e6] text-white py-3 px-6 rounded-xl font-bold text-xs hover:bg-[#0080cb] transition-colors shadow-sm text-center block"
                  >
                    Lihat Produk
                  </Link>

                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Row 3: 2 Cards Centered (Indoor Long Duct & Outdoor) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {VRV_HOME_PRODUCTS.slice(6, 8).map((product, idx) => (
              <FadeInUp key={product.id} delay={0.7 + (idx * 0.1)} className="h-full">
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-daikin-blue/50 transition-all duration-300 h-full flex flex-col justify-between group">
                  
                  <div>
                    {/* Placeholder Box Image */}
                    <div className="aspect-[4/3] w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 mb-6 group-hover:border-daikin-blue/40 group-hover:bg-blue-50/30 transition-colors relative overflow-hidden">
                      <Zap className="w-12 h-12 text-daikin-blue/40 group-hover:scale-110 transition-transform mb-2" />
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
                        {product.type}
                      </span>
                      <span className="text-[11px] text-gray-400 text-center mt-1 font-medium">
                        Unit Image Placeholder
                      </span>
                      {product.badge && (
                        <span className="absolute top-3 right-3 bg-daikin-blue/10 text-daikin-blue text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="text-center px-2">
                      <span className="text-daikin-blue font-bold text-base block mb-1">
                        {product.type}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-700 min-h-[40px] flex items-center justify-center leading-snug mb-3">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <Link
                    to={product.link || '/products/residential/vrv-home/indoor-3di'}
                    className="w-full mt-4 bg-[#0097e6] text-white py-3 px-6 rounded-xl font-bold text-xs hover:bg-[#0080cb] transition-colors shadow-sm text-center block"
                  >
                    Lihat Produk
                  </Link>

                </div>
              </FadeInUp>
            ))}
          </div>

        </div>
      </div>

      {/* CTA Soft Blue Banner (Matching layout footer button in screenshot) */}
      <div className="py-16 bg-gradient-to-r from-[#0080cb] to-[#00b0f0] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ingin Mengaplikasikan VRV Home Series di Rumah Anda?
          </h3>
          <p className="text-white/90 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Konsultasikan kebutuhan AC Home Central Anda dengan konsultan teknik & dealer ProShop Daikin terdekat.
          </p>
          <Link 
            to="/services/proshop" 
            className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-daikin-blue transition-all shadow-md"
          >
            Temukan Dealer &gt;
          </Link>
        </div>
      </div>

      {/* Bottom Category Grid Navigation (6 Cards) */}
      <div className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">Lihat Kategori Lainnya</h2>
            <p className="text-gray-500 text-sm">Jelajahi lini produk pendingin udara dan pemurni udara Daikin</p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInUp delay={0.1}>
              <Link to="/products/residential/single-split" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Single Split</h3>
                  <p className="text-gray-500 text-xs">AC 1 Indoor + 1 Outdoor</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Link to="/products/residential/multi-split" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Multi Split (Multi-S)</h3>
                  <p className="text-gray-500 text-xs">1 Outdoor hingga 3 Indoor</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <Link to="/products/residential/air-purifier" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Air Purifier</h3>
                  <p className="text-gray-500 text-xs">Pemurni Udara Streamer</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <Link to="/products/commercial" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Solusi Komersial</h3>
                  <p className="text-gray-500 text-xs">SkyAir & VRV Skala Besar</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <Link to="/products/accessories" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Aksesori & Sparepart</h3>
                  <p className="text-gray-500 text-xs">Pipa, Filter & Komponen</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <Link to="/services/proshop" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">ProShop & Dealer</h3>
                  <p className="text-gray-500 text-xs">Konsultasi & Instalasi Resmi</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Product Spec Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 relative border border-gray-100 shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 text-gray-400 hover:text-charcoal p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-daikin-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                {selectedProduct.type}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2">
              {selectedProduct.name}
            </h3>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {selectedProduct.description}
            </p>

            <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                Aplikasi Rekomendasi Ruangan
              </h4>
              <p className="text-sm font-semibold text-daikin-blue flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {selectedProduct.app}
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Spesifikasi & Keunggulan
              </h4>
              {Object.entries(selectedProduct.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between items-center text-xs md:text-sm py-2 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">{key}</span>
                  <span className="text-charcoal font-semibold text-right">{val}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold text-xs hover:bg-gray-200 transition-colors"
              >
                Tutup
              </button>
              <Link
                to="/services/proshop"
                className="flex-1 bg-daikin-blue text-white text-center py-3 rounded-xl font-bold text-xs hover:bg-daikin-blue-dark transition-colors shadow-sm"
              >
                Konsultasikan Unit
              </Link>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
