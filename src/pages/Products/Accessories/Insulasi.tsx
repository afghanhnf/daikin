import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Download, BookOpen, Wind, Settings, Sliders, Wifi, MoreHorizontal, Leaf } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function Insulasi() {
  const tableSpecs = [
    { property: "Density", rating: "60 kg/m³ to 80 kg/m³", method: "ASTM D1667" },
    { property: "Temperature Limit", rating: "-40°C to +105°C", method: "-" },
    { property: "Water Vapour Resistance u Factor", rating: "> 5000", method: "DIN 52615 - 73" },
    { property: "Average Fire Propagation", rating: "Class 0", method: "BS 476 Part 6" },
    { property: "Average Surface Spread of Flame", rating: "Class 1", method: "BS 476 Part 7" },
    { property: "Average Time of Burning", rating: "Less than 5 seconds", method: "ASTM D635 - 91" },
    { property: "Reaction To Fire", rating: "V-0, 5VA, HF-1, Self-Extinguishing, No Dripping", method: "UL 94" }
  ]

  return (
    <PageTransition>
      <PageMeta title="Daikin Insulasi AC - Aksesoris Resmi" canonical="/products/accessories/insulasi" />

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
              <span className="text-white font-semibold">Insulasi AC</span>
            </nav>
            
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                DAIKIN INSULASI AC
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Produk khusus dengan kualitas dan detail tinggi untuk memenuhi kebutuhan insulasi, mengurangi konsumsi energi, dan mencegah kondensasi serta korosi.
              </p>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Thumbnail Container */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-[2rem] border border-white/30 backdrop-blur-sm overflow-hidden" />
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* DSP INSULATION */}
          <FadeInUp>
            <div className="mb-16">
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <h2 className="text-4xl font-bold text-[#0097e6]">DSP INSULATION</h2>
                <img src="/images/logo/insulasi/dsp.webp" alt="DSP Insulation" className="h-10 md:h-14 w-auto object-contain" loading="lazy" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-4xl text-lg mb-12">
                Produk ini dibuat secara khusus dengan kualitas dan detail yang tinggi, untuk memenuhi kebutuhan insulasi dalam rangka mengurangi konsumsi energi dan mencegah kondensasi serta korosi. Tersedia dalam 2 pilihan ketebalan (0.75mm & 1mm).
              </p>
              
              <div className="space-y-12">
                {/* Table 3/4 Inch */}
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-4 uppercase tracking-wider">Produk Insulasi Ketebalan 3/4 Inch</h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-center border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6]/10 text-charcoal">
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">Model</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">INS1-1/4-0.75</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">INS1-3/8-0.75</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">INS1-1/2-0.75</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">INS1-5/8-0.75</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-gray-200">INS1-3/4-0.75</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 font-semibold text-left border-r border-gray-100">Diameter (inch)</td><td className="py-3 px-4 border-r border-gray-100">1/4</td><td className="py-3 px-4 border-r border-gray-100">3/8</td><td className="py-3 px-4 border-r border-gray-100">1/2</td><td className="py-3 px-4 border-r border-gray-100">5/8</td><td className="py-3 px-4">3/4</td></tr>
                          <tr className="bg-[#0097e6]/5"><td className="py-3 px-4 font-semibold text-left border-r border-gray-100 border-t">Ketebalan Insulasi (mm)</td><td className="py-3 px-4 border-r border-gray-100 border-t">0,75</td><td className="py-3 px-4 border-r border-gray-100 border-t">0,75</td><td className="py-3 px-4 border-r border-gray-100 border-t">0,75</td><td className="py-3 px-4 border-r border-gray-100 border-t">0,75</td><td className="py-3 px-4 border-t">0,75</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 font-semibold text-left border-r border-gray-100 border-t">Panjang Insulasi (m)</td><td className="py-3 px-4 border-r border-gray-100 border-t">1,8</td><td className="py-3 px-4 border-r border-gray-100 border-t">1,8</td><td className="py-3 px-4 border-r border-gray-100 border-t">1,8</td><td className="py-3 px-4 border-r border-gray-100 border-t">1,8</td><td className="py-3 px-4 border-t">1,8</td></tr>
                          <tr className="bg-[#0097e6]/5"><td className="py-3 px-4 font-semibold text-left border-r border-gray-100 border-t">Qty/Box (pcs)</td><td className="py-3 px-4 border-r border-gray-100 border-t">48</td><td className="py-3 px-4 border-r border-gray-100 border-t">36</td><td className="py-3 px-4 border-r border-gray-100 border-t">30</td><td className="py-3 px-4 border-r border-gray-100 border-t">30</td><td className="py-3 px-4 border-t">26</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Table 1 Inch */}
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-4 uppercase tracking-wider">Produk Insulasi Ketebalan 1 Inch</h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-center border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6]/10 text-charcoal">
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">Model</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">INS1-7/8-1.0</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">INS1-1-1.0</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">INS1-11/8-1.0</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-r border-gray-200">INS1-1 3/8-1.0</th>
                            <th className="py-3 px-4 font-bold text-sm border-b border-gray-200">INS1-1 5/8-1.0</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 font-semibold text-left border-r border-gray-100">Diameter (inch)</td><td className="py-3 px-4 border-r border-gray-100">7/8</td><td className="py-3 px-4 border-r border-gray-100">1</td><td className="py-3 px-4 border-r border-gray-100">1 1/8</td><td className="py-3 px-4 border-r border-gray-100">1 3/8</td><td className="py-3 px-4">1 5/8</td></tr>
                          <tr className="bg-[#0097e6]/5"><td className="py-3 px-4 font-semibold text-left border-r border-gray-100 border-t">Ketebalan Insulasi (mm)</td><td className="py-3 px-4 border-r border-gray-100 border-t">1.00</td><td className="py-3 px-4 border-r border-gray-100 border-t">1.00</td><td className="py-3 px-4 border-r border-gray-100 border-t">1.00</td><td className="py-3 px-4 border-r border-gray-100 border-t">1.00</td><td className="py-3 px-4 border-t">1.00</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 font-semibold text-left border-r border-gray-100 border-t">Panjang Insulasi (m)</td><td className="py-3 px-4 border-r border-gray-100 border-t">1,8</td><td className="py-3 px-4 border-r border-gray-100 border-t">1,8</td><td className="py-3 px-4 border-r border-gray-100 border-t">1,8</td><td className="py-3 px-4 border-r border-gray-100 border-t">1,8</td><td className="py-3 px-4 border-t">1,8</td></tr>
                          <tr className="bg-[#0097e6]/5"><td className="py-3 px-4 font-semibold text-left border-r border-gray-100 border-t">Qty/Box (pcs)</td><td className="py-3 px-4 border-r border-gray-100 border-t">20</td><td className="py-3 px-4 border-r border-gray-100 border-t">18</td><td className="py-3 px-4 border-r border-gray-100 border-t">18</td><td className="py-3 px-4 border-r border-gray-100 border-t">15</td><td className="py-3 px-4 border-t">12</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Table Specifications */}
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-4 uppercase tracking-wider">Spesifikasi</h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6]/10 text-charcoal">
                            <th className="py-4 px-6 font-bold text-sm tracking-wider">Average Physical Properties</th>
                            <th className="py-4 px-6 font-bold text-sm tracking-wider text-center border-l border-white/20">Rating</th>
                            <th className="py-4 px-6 font-bold text-sm tracking-wider text-center border-l border-white/20">Test Method</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          {tableSpecs.map((spec, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#0097e6]/5'}>
                              <td className="py-4 px-6 font-semibold border-t border-gray-100">{spec.property}</td>
                              <td className="py-4 px-6 text-center border-l border-t border-gray-100">{spec.rating}</td>
                              <td className="py-4 px-6 text-center border-l border-t border-gray-100">{spec.method}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Certification Logos */}
                <div className="pt-8 flex flex-wrap justify-center items-center gap-12 md:gap-24">
                  <img src="/images/logo/insulasi/bsi.webp" alt="BSI" className="h-16 md:h-24 w-auto object-contain" loading="lazy" />
                  <img src="/images/logo/insulasi/tuv.webp" alt="TÜV SÜD" className="h-16 md:h-24 w-auto object-contain" loading="lazy" />
                  <img src="/images/logo/insulasi/green.webp" alt="Singapore Green Building Product" className="h-16 md:h-24 w-auto object-contain" loading="lazy" />
                </div>

              </div>
            </div>
          </FadeInUp>
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

      {/* CTA Bottom */}
      <div className="pb-16 text-center">
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
            
            {/* Daikin Recommend Tools */}
            <FadeInUp delay={0.3}>
              <Link to="/products/accessories/tools" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Daikin Recommend Tools</h3>
                  <p className="text-gray-500 text-xs">Toolkit Resmi</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Filter */}
            <FadeInUp delay={0.4}>
              <Link to="/products/accessories/filter" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Sliders className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Air Filter</h3>
                  <p className="text-gray-500 text-xs">Saringan Udara</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Smart Connection */}
            <FadeInUp delay={0.5}>
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

            {/* Lainnya */}
            <FadeInUp delay={0.6}>
              <Link to="/products/accessories/others" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <MoreHorizontal className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Lainnya</h3>
                  <p className="text-gray-500 text-xs">Aksesoris Lain</p>
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
