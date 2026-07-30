import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, FileText, MapPin, Wind, Eye, 
  CheckCircle2, Compass, Sliders
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// Specification table dataset extracted strictly from official catalog screenshot
const SPEC_MODELS = [
  {
    model: 'FQC22AVM1',
    powerSupply: '1-Phase, 220-240 V, 50 Hz',
    coolingCapacityKw: '2.2 kW',
    coolingCapacityBtuh: '7,500 Btu/h',
    powerConsumption: '21 W',
    airflowRate: '8.5 / 7.0 / 5.5 m³/min',
    soundLevel: '35 / 31 / 28 dB(A)',
    dimensions: '200 x 700 x 620 mm',
    weight: '19 kg',
    pipingLiquidGas: 'ø6.4 mm / ø12.7 mm',
    pipingDrain: 'VP25 (O.D. ø32 / I.D. ø25 mm)',
    remoteController: 'BRC1E63'
  },
  {
    model: 'FQC28AVM1',
    powerSupply: '1-Phase, 220-240 V, 50 Hz',
    coolingCapacityKw: '2.8 kW',
    coolingCapacityBtuh: '9,600 Btu/h',
    powerConsumption: '23 W',
    airflowRate: '10.5 / 8.5 / 6.5 m³/min',
    soundLevel: '36 / 32 / 29 dB(A)',
    dimensions: '200 x 700 x 620 mm',
    weight: '21 kg',
    pipingLiquidGas: 'ø6.4 mm / ø12.7 mm',
    pipingDrain: 'VP25 (O.D. ø32 / I.D. ø25 mm)',
    remoteController: 'BRC1E63'
  },
  {
    model: 'FQC36AVM1',
    powerSupply: '1-Phase, 220-240 V, 50 Hz',
    coolingCapacityKw: '3.6 kW',
    coolingCapacityBtuh: '12,300 Btu/h',
    powerConsumption: '35 W',
    airflowRate: '13.5 / 11.0 / 8.5 m³/min',
    soundLevel: '37 / 33 / 30 dB(A)',
    dimensions: '200 x 900 x 620 mm',
    weight: '24 kg',
    pipingLiquidGas: 'ø6.4 mm / ø12.7 mm',
    pipingDrain: 'VP25 (O.D. ø32 / I.D. ø25 mm)',
    remoteController: 'BRC1E63'
  },
  {
    model: 'FQC45AVM1',
    powerSupply: '1-Phase, 220-240 V, 50 Hz',
    coolingCapacityKw: '4.5 kW',
    coolingCapacityBtuh: '15,400 Btu/h',
    powerConsumption: '41 W',
    airflowRate: '16.0 / 13.5 / 10.5 m³/min',
    soundLevel: '38 / 34 / 31 dB(A)',
    dimensions: '200 x 900 x 620 mm',
    weight: '26 kg',
    pipingLiquidGas: 'ø6.4 mm / ø12.7 mm',
    pipingDrain: 'VP25 (O.D. ø32 / I.D. ø25 mm)',
    remoteController: 'BRC1E63'
  },
  {
    model: 'FQC56AVM1',
    powerSupply: '1-Phase, 220-240 V, 50 Hz',
    coolingCapacityKw: '5.6 kW',
    coolingCapacityBtuh: '19,100 Btu/h',
    powerConsumption: '47 W',
    airflowRate: '19.0 / 15.5 / 12.0 m³/min',
    soundLevel: '40 / 35 / 31 dB(A)',
    dimensions: '200 x 1100 x 620 mm',
    weight: '31 kg',
    pipingLiquidGas: 'ø6.4 mm / ø12.7 mm',
    pipingDrain: 'VP25 (O.D. ø32 / I.D. ø25 mm)',
    remoteController: 'BRC1E63'
  },
  {
    model: 'FQC71AVM1',
    powerSupply: '1-Phase, 220-240 V, 50 Hz',
    coolingCapacityKw: '7.1 kW',
    coolingCapacityBtuh: '24,200 Btu/h',
    powerConsumption: '77 W',
    airflowRate: '23.5 / 19.5 / 15.5 m³/min',
    soundLevel: '43 / 38 / 33 dB(A)',
    dimensions: '200 x 1100 x 620 mm',
    weight: '31 kg',
    pipingLiquidGas: 'ø9.5 mm / ø15.9 mm',
    pipingDrain: 'VP25 (O.D. ø32 / I.D. ø25 mm)',
    remoteController: 'BRC1E63'
  }
]

export default function Indoor3DiPage() {
  return (
    <PageTransition>
      <PageMeta 
        title="Indoor - 3Di (Intelligent Air 3-Way Flow) - VRV Home Series Daikin" 
        description="Unit Indoor 3Di Daikin VRV Home Series dengan 3-Way Airflow Intelligent Swing, Dual Intelligent Eye Sensor, dan Wide Air Distribution untuk hunian mewah Anda."
        canonical="/products/residential/vrv-home/indoor-3di" 
      />

      {/* Hero Header Section with Brand Colors */}
      <div className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#0080cb] via-[#0097e6] to-[#00b0f0] text-white">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>
        <div className="absolute inset-0 z-0 opacity-15 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-7/12">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-white/80 mb-6 text-xs md:text-sm font-medium tracking-wide flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/products" className="hover:text-white transition-colors">Produk</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/products/residential" className="hover:text-white transition-colors">AC Hunian</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/products/residential/vrv-home" className="hover:text-white transition-colors">VRV Home Series</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-semibold">Indoor - 3Di</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold tracking-wider mb-4 border border-white/25">
                Semua Produk / AC Perumahan / VRV Home Series
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight drop-shadow-sm">
                Indoor - 3Di
              </h1>

              <h2 className="text-lg md:text-2xl font-semibold text-sky-100 mb-6 leading-snug">
                Intelligent Air 3-Way Flow Ceiling Mounted Duct
              </h2>

              <div className="space-y-3 text-white/95 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-8">
                <p>
                  Hadirkan kenyamanan yang inovatif! Mampu melepaskan udara dingin secara presisi pada setiap ruangan Anda dengan mengandalkan 3-Way Airflow Intelligent Swing yang fleksibel.
                </p>
                <p>
                  Aliran udara 3D dapat menciptakan aliran udara di dalam ruangan yang optimal dan nyaman.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/products/e-catalogue"
                  className="px-7 py-3.5 bg-white text-[#0080cb] rounded-xl font-bold text-xs md:text-sm hover:bg-sky-50 transition-all shadow-lg flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#0080cb]" />
                  <span>Lihat Katalog</span>
                </Link>

                <Link
                  to="/services/proshop"
                  className="px-7 py-3.5 bg-white/15 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-xs md:text-sm hover:bg-white hover:text-[#0080cb] transition-all shadow-sm flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Temukan Dealer</span>
                </Link>
              </div>
            </FadeInUp>
          </div>

          {/* Hero Visual Card Showcase */}
          <FadeInUp delay={0.2} className="lg:w-5/12 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md bg-white/15 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-300/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#0080cb] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider border border-white/20">
                    VRV HOME CENTRAL
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Product Image Frame */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-white/90 to-sky-50 rounded-2xl border border-white/50 flex flex-col items-center justify-center p-6 mb-4 text-center shadow-inner relative overflow-hidden">
                  <Wind className="w-16 h-16 text-[#0097e6] mb-2 animate-pulse" />
                  <h3 className="font-bold text-[#0080cb] text-lg">3Di Airflow System</h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium">Ceiling Mounted Duct Unit</p>
                  
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg py-1.5 px-3 border border-sky-100 text-[11px] text-slate-600 font-semibold flex items-center justify-between">
                    <span>3-Way Intelligent Swing</span>
                    <span className="text-[#0080cb] font-bold">Inverter</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="bg-white/10 rounded-xl p-2.5 border border-white/20">
                    <span className="block text-sky-100 text-[10px] uppercase">Rentan Kapasitas</span>
                    <span className="font-bold text-white">2.2 - 7.1 kW</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2.5 border border-white/20">
                    <span className="block text-sky-100 text-[10px] uppercase">Sound Level</span>
                    <span className="font-bold text-white">28 - 43 dB(A)</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="py-4 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#0080cb] text-sm md:text-base tracking-tight">INDOOR - 3Di</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 text-xs md:text-sm font-medium">Intelligent 3-Way Flow</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 bg-sky-50 text-[#0080cb] font-semibold rounded-full border border-sky-100">
              3Di Airflow
            </span>
            <span className="px-3 py-1 bg-sky-50 text-[#0080cb] font-semibold rounded-full border border-sky-100">
              Wide Air Distribution
            </span>
            <span className="px-3 py-1 bg-sky-50 text-[#0080cb] font-semibold rounded-full border border-sky-100">
              Dual Intelligent Eye Sensor
            </span>
          </div>
        </div>
      </div>

      {/* Main Features Section - Fitur Utama */}
      <div className="py-20 bg-slate-50/70 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-[#0080cb] font-bold text-xs uppercase tracking-widest bg-sky-100/80 px-4 py-1.5 rounded-full inline-block">
              Teknologi & Kenyamanan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Fitur Utama
            </h2>
            <div className="w-16 h-1 bg-[#0097e6] mx-auto rounded-full mt-3"></div>
          </FadeInUp>

          {/* Feature 1: 3Di Airflow */}
          <FadeInUp delay={0.1} className="mb-16">
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Feature Image Frame */}
              <div className="lg:col-span-6 relative aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 group">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 to-sky-50 flex flex-col items-center justify-center p-6 text-center">
                  {/* Visual Representation of 3Di Airflow in Living Room */}
                  <div className="w-full h-full border-2 border-dashed border-[#0097e6]/30 rounded-xl p-4 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                    <Sliders className="w-12 h-12 text-[#0080cb] mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-800 text-lg">3Di Airflow</span>
                    <p className="text-slate-500 text-xs max-w-xs mt-1">
                      DAIKIN's Intelligent 3-Way Airflow delivers air flow to maximum distance with multi directional ceiling airflow controller.
                    </p>
                    <span className="mt-3 text-[10px] uppercase font-bold tracking-wider text-[#0080cb] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      Multi Directional Ceiling Airflow
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature Text */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-[#0080cb] bg-sky-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Wind className="w-4 h-4" />
                  Hembusan 3 Arah Otomatis
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0080cb]">
                  3Di Airflow
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                  Daikin Intelligent 3D Airflow menghadirkan aliran udara yang bergerak secara otomatis ke 3 arah intelligent swing yang fleksibel dan efisien untuk memberi aliran kenyamanan udara di dapat merata dengan kualitas kelembaban ruang yang optimal.
                </p>
                
                <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Auto 3-Way Swing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Presisi Tinggi
                  </span>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Feature 2: Wide Air Distribution */}
          <FadeInUp delay={0.2} className="mb-16">
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Feature Text (Reversed for visual harmony) */}
              <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-[#0080cb] bg-sky-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  Cakupan Ruang Maksimal
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0080cb]">
                  Wide Air Distribution
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                  Memiliki kontrol vertikal dan horizontal dari dua sudut kisi-kisi vertikal yang dapat berputar bebas. Membuat hembusan aliran udara lebih presisi dan dapat tersebar merata sehingga dapat menciptakan udara di dalam ruangan yang jauh lebih nyaman.
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Kontrol Vertikal & Horizontal
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sebar Merata
                  </span>
                </div>
              </div>

              {/* Feature Image Frame */}
              <div className="lg:col-span-6 relative aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 group order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 to-sky-50 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-full h-full border-2 border-dashed border-[#0097e6]/30 rounded-xl p-4 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                    <Wind className="w-12 h-12 text-[#0080cb] mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-800 text-lg">Wide Air Distribution</span>
                    <p className="text-slate-500 text-xs max-w-xs mt-1">
                      Kemudi ganda kisi-kisi vertikal berputar bebas untuk sirkulasi udara menyeluruh tanpa sudut mati.
                    </p>
                    <span className="mt-3 text-[10px] uppercase font-bold tracking-wider text-[#0080cb] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      Dual Louver Control
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Feature 3: Dual Intelligent Eye Sensor */}
          <FadeInUp delay={0.3}>
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Feature Image Frame */}
              <div className="lg:col-span-6 relative aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 group">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 to-sky-50 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-full h-full border-2 border-dashed border-[#0097e6]/30 rounded-xl p-4 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                    <Eye className="w-12 h-12 text-[#0080cb] mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-800 text-lg">Dual Intelligent Eye Sensor</span>
                    <p className="text-slate-500 text-xs max-w-xs mt-1">
                      Sensor inframerah cerdas mendeteksi posisi manusia & suhu permukaan ruang secara real-time.
                    </p>
                    <span className="mt-3 text-[10px] uppercase font-bold tracking-wider text-[#0080cb] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      Infrared Surface & Human Motion Detection
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature Text */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-[#0080cb] bg-sky-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Eye className="w-4 h-4" />
                  Sensor Inframerah Pintar
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0080cb]">
                  Dual Intelligent Eye Sensor
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                  Fitur ini menggunakan sistem dua-bintang (Dual) sensor inframerah berkualitas tinggi untuk mendeteksi keberadaan manusia serta suhu permukaan yang tepat sekaligus. Tiap-tiap hembusan dapat otomatis disesuaikan sehingga udara segar terarah secara nyaman ke seluruh ruangan.
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sensor Keberadaan Manusia
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Deteksi Suhu Permukaan
                  </span>
                </div>
              </div>
            </div>
          </FadeInUp>

        </div>
      </div>

      {/* Specifications Section - Spesifikasi Table */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-[#0080cb] font-bold text-xs uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full inline-block border border-sky-100">
              Data Teknis Resmi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Spesifikasi
            </h2>
            <div className="w-16 h-1 bg-[#0097e6] mx-auto rounded-full mt-3"></div>
            <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto pt-2">
              Tabel spesifikasi lengkap unit Indoor 3Di VRV Home Series berdasarkan kapasitas dan ukuran ruangan.
            </p>
          </FadeInUp>

          {/* Desktop & Mobile Responsive Spec Table */}
          <FadeInUp delay={0.2} className="overflow-x-auto rounded-3xl border border-slate-200 shadow-lg">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#0080cb] to-[#00b0f0] text-white text-xs md:text-sm uppercase tracking-wider">
                  <th className="py-4 px-5 font-bold border-r border-white/20 w-48">Parameter / Model</th>
                  {SPEC_MODELS.map((item) => (
                    <th key={item.model} className="py-4 px-4 font-extrabold text-center border-r border-white/20 last:border-r-0">
                      {item.model}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs md:text-sm text-slate-700 bg-white">
                
                {/* Power Supply */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Catu Daya (Power Supply)
                  </td>
                  <td colSpan={6} className="py-3.5 px-4 text-center font-medium text-slate-800 bg-slate-50/30">
                    1-Phase, 220-240 V, 50 Hz
                  </td>
                </tr>

                {/* Cooling Capacity kW */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Kapasitas Pendinginan (kW)
                  </td>
                  {SPEC_MODELS.map((item) => (
                    <td key={item.model} className="py-3.5 px-4 text-center font-bold text-[#0080cb] border-r border-slate-100 last:border-r-0">
                      {item.coolingCapacityKw}
                    </td>
                  ))}
                </tr>

                {/* Cooling Capacity Btu/h */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Kapasitas Pendinginan (Btu/h)
                  </td>
                  {SPEC_MODELS.map((item) => (
                    <td key={item.model} className="py-3.5 px-4 text-center font-medium border-r border-slate-100 last:border-r-0">
                      {item.coolingCapacityBtuh}
                    </td>
                  ))}
                </tr>

                {/* Power Consumption */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Konsumsi Daya (Power)
                  </td>
                  {SPEC_MODELS.map((item) => (
                    <td key={item.model} className="py-3.5 px-4 text-center font-semibold text-slate-800 border-r border-slate-100 last:border-r-0">
                      {item.powerConsumption}
                    </td>
                  ))}
                </tr>

                {/* Airflow Rate */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Hembusan Udara Fan (H/M/L)
                  </td>
                  {SPEC_MODELS.map((item) => (
                    <td key={item.model} className="py-3.5 px-4 text-center text-xs font-mono border-r border-slate-100 last:border-r-0">
                      {item.airflowRate}
                    </td>
                  ))}
                </tr>

                {/* Sound Level */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Tingkat Kebisingan (H/M/L)
                  </td>
                  {SPEC_MODELS.map((item) => (
                    <td key={item.model} className="py-3.5 px-4 text-center text-xs font-mono font-medium border-r border-slate-100 last:border-r-0">
                      {item.soundLevel}
                    </td>
                  ))}
                </tr>

                {/* Dimensions */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Dimensi Unit (H x W x D)
                  </td>
                  {SPEC_MODELS.map((item) => (
                    <td key={item.model} className="py-3.5 px-4 text-center text-xs font-medium border-r border-slate-100 last:border-r-0">
                      {item.dimensions}
                    </td>
                  ))}
                </tr>

                {/* Weight */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Berat Mesin (Machine Weight)
                  </td>
                  {SPEC_MODELS.map((item) => (
                    <td key={item.model} className="py-3.5 px-4 text-center font-medium border-r border-slate-100 last:border-r-0">
                      {item.weight}
                    </td>
                  ))}
                </tr>

                {/* Piping Liquid/Gas */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Ukuran Pipa (Liquid / Gas)
                  </td>
                  {SPEC_MODELS.map((item) => (
                    <td key={item.model} className="py-3.5 px-4 text-center text-xs font-medium border-r border-slate-100 last:border-r-0">
                      {item.pipingLiquidGas}
                    </td>
                  ))}
                </tr>

                {/* Drain Pipe */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Pipa Drain (Saluran Air)
                  </td>
                  <td colSpan={6} className="py-3.5 px-4 text-center text-xs font-medium text-slate-700 bg-slate-50/30">
                    VP25 (O.D. ø32 mm / I.D. ø25 mm)
                  </td>
                </tr>

                {/* Remote Controller */}
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900 bg-slate-50/80 border-r border-slate-200">
                    Remote Controller
                  </td>
                  <td colSpan={6} className="py-3.5 px-4 text-center font-bold text-[#0080cb] bg-slate-50/30">
                    BRC1E63 (Wired Remote Controller)
                  </td>
                </tr>

              </tbody>
            </table>
          </FadeInUp>
        </div>
      </div>

      {/* Dealer Action Button Banner (As per bottom of reference screenshot) */}
      <div className="py-12 bg-[#0097e6] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">
              Tertarik dengan Unit Indoor - 3Di?
            </h3>
            <p className="text-sky-100 text-xs md:text-sm">
              Dapatkan konsultasi tata letak AC & penawaran resmi dari konsultan ProShop Daikin.
            </p>
          </div>
          <Link
            to="/services/proshop"
            className="px-8 py-3.5 bg-white text-[#0080cb] rounded-xl font-extrabold text-sm hover:bg-sky-50 transition-all shadow-md flex items-center gap-2 shrink-0 border border-white"
          >
            <span>Temukan Dealer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Related VRV Home Indoor Lineup Navigation */}
      <div className="py-16 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Lini Produk VRV Home Series Lainnya</h2>
              <p className="text-slate-500 text-xs md:text-sm">Jelajahi varian unit indoorCentral Daikin sesuai fungsi ruangan</p>
            </div>
            <Link 
              to="/products/residential/vrv-home"
              className="text-[#0080cb] font-bold text-xs md:text-sm flex items-center gap-1 hover:underline"
            >
              <span>Lihat Semua VRV Home</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/products/residential/vrv-home"
              className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#0080cb] hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold text-[#0080cb] uppercase tracking-wider block mb-1">Indoor - 3DI+</span>
              <h3 className="text-sm font-semibold text-slate-800 group-hover:text-[#0080cb] transition-colors mb-2">
                Moisture Control 3-Way Flow
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">Pengatur kelembapan terintegrasi untuk kamar tidur & living area.</p>
            </Link>

            <Link
              to="/products/residential/vrv-home"
              className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#0080cb] hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold text-[#0080cb] uppercase tracking-wider block mb-1">Indoor - Compact</span>
              <h3 className="text-sm font-semibold text-slate-800 group-hover:text-[#0080cb] transition-colors mb-2">
                Compact Ceiling Duct
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">Desain ultra-slim menghemat tinggi plafon tanpa bising.</p>
            </Link>

            <Link
              to="/products/residential/vrv-home"
              className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#0080cb] hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold text-[#0080cb] uppercase tracking-wider block mb-1">Indoor - Bathroom</span>
              <h3 className="text-sm font-semibold text-slate-800 group-hover:text-[#0080cb] transition-colors mb-2">
                Ventilating Moisture Control
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">Mencegah jamur & bau lembap khusus kamar mandi & spa.</p>
            </Link>

            <Link
              to="/products/residential/vrv-home"
              className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#0080cb] hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold text-[#0080cb] uppercase tracking-wider block mb-1">Outdoor Unit</span>
              <h3 className="text-sm font-semibold text-slate-800 group-hover:text-[#0080cb] transition-colors mb-2">
                Compact VRV Outdoor
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">1 unit outdoor ringkas melayani hingga 8+ ruangan sekaligus.</p>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
