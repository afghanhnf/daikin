import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Download, BookOpen, ShieldCheck, 
  Wind, Sliders, Wifi, MoreHorizontal, Settings, Info, CheckCircle2, 
  Flame, Wrench, Layers, Check, Shield
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function OthersPage() {
  // Protective Pipe Component Items
  const componentsList = [
    { name: 'Protective Pipe', code: 'RP5001', desc: 'Pipa utama pelindung saluran pipa AC' },
    { name: 'Universal Straight Pipe', code: 'RP5002', desc: 'Pipa lurus universal sambungan flexible' },
    { name: 'Straight Coupling', code: 'RP5003', desc: 'Penyambung lurus antar dua protective pipe' },
    { name: '90° Elbow', code: 'RP5004', desc: 'Penyambung sudut belokan tegak lurus 90°' },
    { name: 'Entry Wall Cover', code: 'RP5005', desc: 'Penutup titik penetrasi dinding luar' },
    { name: '90° Flat Elbow', code: 'RP5006', desc: 'Penyambung belokan pipih 90° pada permukaan rata' },
    { name: 'Reducer End Cap', code: 'RP5007', desc: 'Penutup ujung pipa protektif reducer' },
    { name: '90° Entry Wall Cover', code: 'RP5008', desc: 'Penutup masukan dinding 90°' }
  ]

  // Performance Parameters Data
  const perfParameters = [
    { param: 'Density (Kerapatan)', norm: 'ISO 1183', val: '1.42 g/cm³' },
    { param: 'Thermal Conductivity', norm: 'ASTM C177', val: '0.15 W/m.K' },
    { param: 'Water Absorption', norm: 'ISO 62', val: '< 0.1%' },
    { param: 'Tensile Strength', norm: 'ISO 527', val: '> 45 MPa' },
    { param: 'Elongation at Break', norm: 'ISO 527', val: '> 80%' },
    { param: 'Bending Strength', norm: 'ISO 178', val: '> 75 MPa' },
    { param: 'Impact Strength (23°C)', norm: 'ISO 179/1eA', val: '> 10 kJ/m²' },
    { param: 'Vicat Softening Temp', norm: 'ISO 306', val: '> 80°C' }
  ]

  // Brass Fitting Models Data
  const brassModels = [
    { model: 'RF13112', type: 'Brass Fitting Connector In-Line', size: '1/2"' },
    { model: 'RF13113', type: 'Brass Fitting Connector In-Line', size: '5/8"' },
    { model: 'RF13114', type: 'Brass Fitting Connector In-Line', size: '3/4"' },
    { model: 'RF131620', type: 'Brass Fitting Connector Pipe', size: 'F16 x 1/2 - 20' },
    { model: 'RF131625', type: 'Brass Fitting Connector Pipe', size: 'F16 x 5/8 - 25' },
    { model: 'RF131632', type: 'Brass Fitting Connector Pipe', size: 'F20 x 5/8 - 32' },
    { model: 'RF131640', type: 'Brass Fitting Connector Pipe', size: 'F25 x 3/4 - 40' },
    { model: 'RF131650', type: 'Brass Fitting Connector Pipe', size: 'F32 x 1 - 50' }
  ]

  return (
    <PageTransition>
      <PageMeta 
        title="Aksesoris Lainnya (RIIFO) - Pipa Protektif & Brass Fitting" 
        canonical="/products/accessories/others" 
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
              <span className="text-white font-semibold">Aksesoris Lainnya</span>
            </nav>
            
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                RIIFO Piping & Fitting System
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                AKSESORIS LAINNYA
              </h1>
              <p className="text-white font-bold text-lg tracking-widest uppercase mb-6 text-cyan-100">
                RIIFO • PIPA PROTEKTIF • TOOLS • FITTING
              </p>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Solusi perlindungan pipa protektif PVC, penyambung kuningan presisi (Brass Fitting), dan alat perangkai pipa RIIFO standar internasional.
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

      {/* Section 1: Pipa Protektif (Protective Pipe) */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              RIIFO Protective System
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35] mb-4">
              PIPA PROTEKTIF (PROTECTIVE PIPE)
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Sistem pipa pelindung AC terbuat dari bahan PVC berkualitas tinggi untuk perlindungan kabel & saluran pipa AC. Dengan rancangan modular yang rapi, dapat disesuaikan dengan titik penyambungan serta berbagai lekukan instalasi udara. Melindungi dari kerusakan akibat cuaca & paparan sinar matahari, memberikan estetika terbaik pada sisi luar gedung/bangunan.
            </p>
          </FadeInUp>

          {/* Keunggulan Produk Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Bahan Berkualitas High Grade', desc: 'PVC tidak berbau, tahan karat, tahan benturan, serta tidak mudah pecah.', icon: Shield },
              { title: 'Tahan Api & Kimia', desc: 'Bahan tahan api (Flame Retardant) serta tahan terhadap paparan asam & alkali.', icon: Flame },
              { title: 'UV Protection', desc: 'Melindungi saluran pipa dari paparan sinar UV matahari agar tidak aus/getas.', icon: Wind },
              { title: 'Instalasi Praktis & Rapi', desc: 'Mempermudah perawatan pipa AC dan memberikan kerapian pada dinding gedung.', icon: Layers }
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

          {/* Performance Parameters Table */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-sm mb-20">
            <FadeInUp className="mb-8">
              <h3 className="text-2xl font-bold text-charcoal mb-2">Performance Parameter Pipa Protektif RIIFO</h3>
              <p className="text-gray-500 text-sm">Standar pengujian material PVC protektif sesuai pengujian internasional.</p>
            </FadeInUp>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-max">
                  <thead>
                    <tr className="bg-daikin-blue text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-6 font-bold">Characteristic</th>
                      <th className="py-3.5 px-6 font-bold text-center">Testing Method</th>
                      <th className="py-3.5 px-6 font-bold text-center">Value / Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {perfParameters.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/80">
                        <td className="py-3 px-6 font-semibold text-charcoal">{row.param}</td>
                        <td className="py-3 px-6 text-center font-mono text-xs text-gray-500">{row.norm}</td>
                        <td className="py-3 px-6 text-center font-bold text-daikin-blue">{row.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Komponen Sistem Pipa Protektif (8 Items Grid with Sample Image Thumbnail Cards) */}
          <div>
            <FadeInUp className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">Komponen Sistem Pipa Protektif</h3>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">Rangkaian fitting modular RIIFO untuk mendukung segala bentuk sudut dan tikungan pemipaan.</p>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {componentsList.map((comp, idx) => (
                <FadeInUp key={idx} delay={idx * 0.05}>
                  <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all group flex flex-col justify-between h-full">
                    <div>
                      {/* Product Sample Image Thumbnail Box */}
                      <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-4 border border-gray-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                        <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center p-2 text-center">
                          <span className="text-[10px] font-medium text-gray-400">Sample Image ({comp.code})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono font-bold text-xs text-daikin-blue bg-blue-50 px-2 py-0.5 rounded">
                          {comp.code}
                        </span>
                      </div>
                      <h4 className="font-bold text-charcoal text-base mb-1 group-hover:text-daikin-blue transition-colors">
                        {comp.name}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: BRASS FITTING (CONNECTOR) */}
      <div className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Precision Brass Connector
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35] mb-4">
              BRASS FITTING (CONNECTOR)
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              <strong>Brass Fitting</strong> adalah bagian penting dari metode pemipaan yang berfungsi sebagai penyambung antar pipa atau pipa ke unit AC. Digunakan untuk menyambung dua buah pipa atau lebih dan sebagai bagian akhir pemipaan (<em>Outlet Fitting</em>).
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
            {/* Table Brass Models */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-4">Tabel Model & Ukuran Brass Fitting RIIFO</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-max">
                  <thead>
                    <tr className="bg-daikin-blue text-white text-xs uppercase tracking-wider">
                      <th className="py-3 px-4 font-bold">Nomor Model</th>
                      <th className="py-3 px-4 font-bold">Tipe Connector</th>
                      <th className="py-3 px-4 font-bold text-center">Ukuran (Inch)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {brassModels.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="py-2.5 px-4 font-mono font-bold text-charcoal">{row.model}</td>
                        <td className="py-2.5 px-4 text-gray-600 font-medium">{row.type}</td>
                        <td className="py-2.5 px-4 text-center font-bold text-daikin-blue">{row.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Product Sample Image Thumbnail Box (Brass Fitting) */}
            <div className="lg:col-span-1 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm aspect-[4/3] flex items-center justify-center">
              <div className="w-full h-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-gray-400 font-medium text-xs">Sample Image Placeholder<br/>(Brass Fitting RIIFO)</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section 3: REAMER & TOOLS */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Specialized Installation Tool
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35] mb-4">
              REAMER & TOOLS
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Alat pemotongan pipa, deburring, dan pemekar untuk mendukung pemasangan pipa AC RIIFO secara presisi dan cepat.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Reamer 1 */}
            <FadeInUp delay={0.1}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full">
                <div>
                  {/* Sample Photo Thumbnail */}
                  <div className="w-full aspect-[4/3] bg-white rounded-2xl mb-6 border border-gray-200/80 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center p-2 text-center">
                      <span className="text-gray-400 font-medium text-xs">Sample Image Placeholder (Reamer 14 - 32)</span>
                    </div>
                  </div>

                  <span className="font-mono font-bold text-xs text-daikin-blue bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                    RF0070
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Multilayer Reamer For 14 - 32</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Alat pembuat bundar dan deburring khusus pipa multilayer RIIFO diameter 14mm hingga 32mm.</p>
                </div>
              </div>
            </FadeInUp>

            {/* Reamer 2 */}
            <FadeInUp delay={0.2}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full">
                <div>
                  {/* Sample Photo Thumbnail */}
                  <div className="w-full aspect-[4/3] bg-white rounded-2xl mb-6 border border-gray-200/80 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center p-2 text-center">
                      <span className="text-gray-400 font-medium text-xs">Sample Image Placeholder (Reamer 36 - 50 / 63)</span>
                    </div>
                  </div>

                  <span className="font-mono font-bold text-xs text-daikin-blue bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                    RF0090
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Multilayer Reamer For 36 - 50 / 63</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Alat pembuat bundar dan deburring heavy duty untuk pipa multilayer RIIFO diameter 36mm hingga 63mm.</p>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Quality & Certification Logos Section */}
          <div className="bg-gradient-to-r from-blue-50/40 via-white to-cyan-50/40 rounded-3xl p-8 border border-gray-200/80 text-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-8">Sertifikasi & Standar Mutu Internasional RIIFO</h4>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="h-16 px-6 py-2 bg-white rounded-2xl border border-gray-200/80 shadow-2xs flex items-center justify-center hover:shadow-md transition-all">
                <img src="/images/logo/ak-lainnya/riifo.webp" alt="RIIFO Logo" className="h-full object-contain max-w-[130px]" />
              </div>
              <div className="h-16 px-6 py-2 bg-white rounded-2xl border border-gray-200/80 shadow-2xs flex items-center justify-center hover:shadow-md transition-all">
                <img src="/images/logo/ak-lainnya/es.webp" alt="ICC-ES Logo" className="h-full object-contain max-w-[130px]" />
              </div>
              <div className="h-16 px-6 py-2 bg-white rounded-2xl border border-gray-200/80 shadow-2xs flex items-center justify-center hover:shadow-md transition-all">
                <img src="/images/logo/ak-lainnya/sucofindo.webp" alt="SUCOFINDO Logo" className="h-full object-contain max-w-[130px]" />
              </div>
            </div>
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
            Temukan Daikin Part Supplier
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

            {/* Smart Connection */}
            <FadeInUp delay={0.6}>
              <Link to="/products/accessories/smart-connection" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wifi className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Smart Connection</h3>
                  <p className="text-gray-500 text-xs">DGT & Header Pack</p>
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
