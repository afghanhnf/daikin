import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Download, BookOpen, ShieldCheck, 
  Wind, Sliders, Wifi, MoreHorizontal, Settings, Info, CheckCircle2, 
  Flame, Zap, Cpu, Layers, Link as LinkIcon, Check, Wrench
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function SmartConnection() {
  const [activeDgtStep, setActiveDgtStep] = useState(0)

  // DGT Specs Data
  const dgtModels = [
    { model: 'DGT-V-02', size: '1/4"' },
    { model: 'DGT-V-03', size: '3/8"' },
    { model: 'DGT-V-04', size: '1/2"' },
    { model: 'DGT-V-05', size: '5/8"' },
    { model: 'DGT-V-06', size: '3/4"' },
    { model: 'DGT-V-07', size: '7/8"' },
    { model: 'DGT-V-08', size: '1 1/8"' }
  ]

  const dgtGeneralSpecs = [
    { label: 'Refrigerant', value: 'R32 / R410A / R22' },
    { label: 'Tekanan Maksimum (Max Operating)', value: '4.3 MPa' },
    { label: 'Tekanan Minimum Ledakan (Burst Pressure)', value: '> 18.0 MPa' },
    { label: 'Temperatur Maksimum', value: '+120°C' },
    { label: 'Temperatur Minimum', value: '-45°C' },
    { label: 'Standar Pengujian', value: 'JIS B 8607' }
  ]

  // DGT Installation Steps
  const dgtSteps = [
    {
      title: 'Pemotongan & Pembersihan Pipa',
      desc: 'Potong pipa tembaga secara tegak lurus (90°) menggunakan pipe cutter. Bersihkan serpihan tembaga (deburring) di bagian dalam dan luar pipa secara menyeluruh.',
      tip: 'Pastikan tidak ada serbuk logam yang tertinggal di dalam pipa agar tidak menyumbat katup ekspansi.'
    },
    {
      title: 'Penandaan Kedalaman (Depth Marking)',
      desc: 'Gunakan gauge penanda Daikin untuk memberi tanda garis kedalaman pada ujung pipa tembaga sebelum dimasukkan ke dalam DGT joint.',
      tip: 'Garis kedalaman wajib terlihat sejajar dengan batas luar fitting DGT saat pemasangan.'
    },
    {
      title: 'Pemasangan Joint & Kunci Nut',
      desc: 'Masukkan pipa tembaga hingga menyentuh pembatas dalam. kencangkan nut pengunci dengan kunci pas torsi (torque wrench) sesuai nilai yang ditentukan.',
      tip: 'Gunakan dua kunci pas untuk menahan bodi DGT agar tidak terpuntir saat pengencangan.'
    },
    {
      title: 'Verifikasi Kerapian & Pengecekan Akhir',
      desc: 'Periksa indicator ring pada DGT. Pastikan nut sudah terkunci rapat hingga batas indikator visual menyatu sempurna.',
      tip: 'Lakukan uji tekanan nitrogen sebelum melakukan komisioning unit AC.'
    }
  ]

  // Header Pack Models Data
  const headerPackModels = [
    { model: 'HP-4', ports: '4 Port Indoor', desc: 'Cocok untuk cabang 4 unit indoor VRV' },
    { model: 'HP-6', ports: '6 Port Indoor', desc: 'Cocok untuk cabang 6 unit indoor VRV' },
    { model: 'HP-8', ports: '8 Port Indoor', desc: 'Cocok untuk cabang 8 unit indoor VRV' },
    { model: 'HP-10', ports: '10 Port Indoor', desc: 'Cocok untuk cabang 10 unit indoor VRV' }
  ]

  return (
    <PageTransition>
      <PageMeta 
        title="Daikin Smart Connection - Gas Tight Joint & Header Pack Resmi" 
        canonical="/products/accessories/smart-connection" 
      />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#0097e6] to-[#00b0f0]">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat" />
        
        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <nav className="flex items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide">
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-white transition-colors">Produk</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products/accessories" className="hover:text-white transition-colors">Aksesoris</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">Smart Connection</span>
            </nav>
            
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Inovasi Brazeless Connection Daikin
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                SMART CONNECTION
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Solusi sambungan pipa tembaga tanpa las (Daikin Gas Tight Joint) dan Header Pack modern untuk keamanan & kecepatan instalasi VRV tingkat tinggi.
              </p>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Thumbnail Container (Clean glassmorphic, no text/icons inside) */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-[2rem] border border-white/30 backdrop-blur-sm overflow-hidden" />
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Section 1: Daikin Gas Tight Joint (DGT) */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Brazeless Technology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35] mb-4">
              Daikin Gas Tight Joint (DGT)
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              <strong>Daikin Gas Tight Joint (DGT)</strong> adalah koneksi pipa tembaga yang digunakan tanpa proses pengelasan (<em>brazeless</em>), dirancang untuk memberikan kemudahan, kecepatan, dan keamanan pemasangan di lapangan.
            </p>
          </FadeInUp>

          {/* Keunggulan DGT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: 'Cepat & Tanpa Las', desc: 'Pemasangan cepat tanpa membutuhkan alat las (Brazeless).', icon: Zap },
              { title: 'Bebas Risiko Api & Asap', desc: 'Mencegah risiko kebakaran dan asap berlebih di lokasi kerja.', icon: Flame },
              { title: 'Tahan Tekanan Tinggi', desc: 'Tekanan operasional hingga 4.3 MPa & ledakan > 18.0 MPa.', icon: ShieldCheck },
              { title: 'Bebas Kebocoran', desc: 'Kualitas sambungan terjamin presisi untuk mencegah kebocoran freon.', icon: CheckCircle2 }
            ].map((item, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Model & Spesifikasi DGT */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-sm mb-20">
            <FadeInUp className="mb-8">
              <h3 className="text-2xl font-bold text-charcoal mb-2">Model & Spesifikasi DGT</h3>
              <p className="text-gray-500 text-sm">Ukuran diameter dan standar teknis resmi Daikin Gas Tight Joint.</p>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-8">
              {/* Models Table */}
              <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="bg-daikin-blue text-white px-6 py-3 font-bold text-sm flex justify-between">
                  <span>Nama Model</span>
                  <span>Ukuran (inch)</span>
                </div>
                <div className="divide-y divide-gray-100 text-sm">
                  {dgtModels.map((row, i) => (
                    <div key={i} className="px-6 py-3 flex justify-between items-center text-gray-700 hover:bg-gray-50">
                      <span className="font-mono font-bold text-charcoal">{row.model}</span>
                      <span className="font-semibold text-daikin-blue bg-blue-50 px-2.5 py-0.5 rounded text-xs">{row.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Technical Specs */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-4">
                <h4 className="font-bold text-charcoal text-base border-b border-gray-100 pb-3">Spesifikasi Teknis Umum</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {dgtGeneralSpecs.map((spec, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-1">
                      <span className="text-gray-400 font-medium">{spec.label}</span>
                      <div className="font-bold text-charcoal text-sm">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Sample Image Thumbnail Box (DGT) */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs aspect-[16/7] w-full flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50/40 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-medium text-xs">Sample Image Placeholder (Daikin Gas Tight Joint / DGT)</span>
              </div>
            </div>
          </div>

          {/* Interactive DGT Installation SOP */}
          <div>
            <FadeInUp className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">Cara Pemasangan DGT</h3>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">Langkah mudah dan aman pemasangan tanpa las (Brazeless) sesuai panduan resmi Daikin.</p>
            </FadeInUp>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {dgtSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDgtStep(idx)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                    activeDgtStep === idx
                      ? 'bg-daikin-blue text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                    activeDgtStep === idx ? 'bg-white text-daikin-blue' : 'bg-gray-300 text-gray-700'
                  }`}>
                    {idx + 1}
                  </span>
                  {step.title.split('&')[0]}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 max-w-3xl mx-auto flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-20 h-20 rounded-2xl bg-daikin-blue text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md">
                0{activeDgtStep + 1}
              </div>
              <div className="space-y-3 text-left">
                <h4 className="font-bold text-charcoal text-xl">{dgtSteps[activeDgtStep].title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{dgtSteps[activeDgtStep].desc}</p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-xl text-amber-900 text-xs font-medium flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Perhatian:</strong> {dgtSteps[activeDgtStep].tip}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: Daikin Header Pack */}
      <div className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              VRV Piping Manifold Innovation
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35] mb-4">
              Daikin Header Pack
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              <strong>Header Pack</strong> merupakan sistem konektor manifold modern untuk cabang pipa refrigerant VRV. Memungkinkan cabang pipa dengan tingkat kerapian tinggi, efisiensi pengerjaan maksimal, dan kemudahan dalam penyambungan unit indoor VRV.
            </p>
          </FadeInUp>

          {/* Keunggulan Header Pack */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Kerapian Luar Biasa', desc: 'Pemasangan pipa bercabang rapi dan tertata presisi pada sistem VRV.', icon: Layers },
              { title: 'Kurangi Titik Las 70%', desc: 'Mengurangi jumlah sambungan las dan meminimalkan potensi kebocoran.', icon: ShieldCheck },
              { title: 'Pemasangan Cepat', desc: 'Proses penyambungan ke unit indoor jauh lebih praktis & efisien.', icon: Zap },
              { title: 'Hemat Ruang & Biaya', desc: 'Menghemat area instalasi plafon dan biaya pipa per meter.', icon: CheckCircle2 }
            ].map((item, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Model & Spesifikasi Header Pack */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-sm mb-16">
            <FadeInUp className="mb-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-charcoal mb-2">Model & Kapasitas Header Pack</h3>
              <p className="text-gray-500 text-sm">Pilihan model manifold percabangan untuk berbagai skala sistem VRV.</p>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {headerPackModels.map((item, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-daikin-blue transition-all space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-xl text-daikin-blue">{item.model}</span>
                      <span className="px-2.5 py-1 bg-white border border-gray-200 font-bold text-xs text-charcoal rounded-lg shadow-2xs">
                        {item.ports}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Product Sample Image Thumbnail Box (Header Pack) */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/80 shadow-xs aspect-[16/7] w-full flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-white rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-medium text-xs">Sample Image Placeholder (Daikin Header Pack Manifold)</span>
              </div>
            </div>
          </div>

          {/* Skema Cara Pemasangan Header Pack */}
          <div className="bg-gradient-to-br from-daikin-blue/10 to-cyan-50/50 rounded-3xl p-8 md:p-12 border border-daikin-blue/20 text-center">
            <FadeInUp>
              <h3 className="text-2xl font-bold text-charcoal mb-2">Cara Pemasangan & Skema Koneksi Header Pack</h3>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-8">
                Header Pack ditempatkan di antara unit Outdoor VRV dan deretan unit Indoor. Penyambungan yang tersentralisasi mempermudah servis dan penataan pipa di area plafon gedung.
              </p>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto shadow-sm flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-4 text-daikin-blue font-bold text-sm sm:text-base">
                  <span className="px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">Outdoor Unit</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="px-4 py-2 bg-daikin-blue text-white rounded-xl shadow-xs">Header Pack Manifold</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">Indoor Units (4-10 Unit)</span>
                </div>
                <span className="text-gray-400 text-xs mt-2">Diagram Alur Koneksi VRV Smart Connection</span>
              </div>
            </FadeInUp>
          </div>

        </div>
      </div>

      {/* Brochure Section */}
      <div className="pt-24 pb-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <FadeInUp>
                <h2 className="text-3xl font-bold text-charcoal mb-6">View brochure &<br />certificates</h2>
                <button className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl group">
                  DOWNLOAD BROCHURE
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </button>
              </FadeInUp>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm aspect-[3/4] flex items-center justify-center cursor-pointer hover:border-daikin-blue hover:shadow-md transition-all">
                    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-gray-300" />
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bottom Button (Lite Style) */}
      <div className="py-16 text-center bg-white">
        <FadeInUp>
          <Link 
            to="/dealers" 
            className="inline-flex items-center gap-3 bg-white text-daikin-blue border-2 border-daikin-blue px-10 py-4 rounded-full font-bold hover:bg-daikin-blue hover:text-white transition-all hover:shadow-lg group text-lg shadow-sm"
          >
            Temukan Daikin Part Shop
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeInUp>
      </div>

      {/* Other Categories Section (Accessories Specific) */}
      <div className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">Kategori Lainnya</h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Pipa AC */}
            <FadeInUp delay={0.1}>
              <Link to="/products/accessories/pipa" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Pipa AC</h3>
                  <p className="text-gray-500 text-xs">DSP & RIFO Multilayer</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Refrigerant */}
            <FadeInUp delay={0.2}>
              <Link to="/products/accessories/refrigerant" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Refrigerant</h3>
                  <p className="text-gray-500 text-xs">R-32 & R-410A</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Insulasi AC */}
            <FadeInUp delay={0.3}>
              <Link to="/products/accessories/insulasi" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Insulasi AC</h3>
                  <p className="text-gray-500 text-xs">DSP Insulation</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Recommend Tools */}
            <FadeInUp delay={0.4}>
              <Link to="/products/accessories/tools" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Daikin Recommend Tools</h3>
                  <p className="text-gray-500 text-xs">Toolkit Resmi Tasco</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Air Filter */}
            <FadeInUp delay={0.5}>
              <Link to="/products/accessories/filter" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Sliders className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Air Filter</h3>
                  <p className="text-gray-500 text-xs">Sakura & AAF</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Aksesoris Lainnya */}
            <FadeInUp delay={0.6}>
              <Link to="/products/accessories/others" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <MoreHorizontal className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Aksesoris Lainnya</h3>
                  <p className="text-gray-500 text-xs">Pipa Protektif & Fitting RIIFO</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>

    </PageTransition>
  )
}
