import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Plug, Wind, Settings, Sliders, Wifi, MoreHorizontal, Download, BookOpen } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function PipaAC() {
  const [activeTab, setActiveTab] = useState('dsp-pipa')

  const tabs = [
    { id: 'dsp-pipa', label: 'DSP PIPA (ASTM B280)' },
    { id: 'dsp-pair-coil', label: 'DSP PAIR COIL' },
    { id: 'aub-pair-coil', label: 'PIPA AUB PAIR COIL 0.66' },
    { id: 'rifo-multi-layer', label: 'RIFO MULTI LAYER PIPA' }
  ]

  return (
    <PageTransition>
      <PageMeta title="Pipa AC - Aksesoris AC Resmi" canonical="/products/accessories/pipa" />

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
              <span className="text-white font-semibold">Pipa AC</span>
            </nav>
            
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                PIPA AC
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Tembaga berkualitas tinggi (Copper & Flare) dirancang untuk menahan tekanan tinggi sistem refrigeran masa kini.
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

      {/* Tabs Section */}
      <div className="py-12 bg-white border-b border-gray-100 shadow-sm relative z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-center overflow-x-auto hide-scrollbar gap-2 lg:gap-4 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-bold text-sm lg:text-base transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#0097e6] text-white shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-charcoal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Tab 1: DSP PIPA (ASTM B280) */}
          {activeTab === 'dsp-pipa' && (
            <FadeInUp>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0097e6] mb-6 flex items-center gap-4">
                  DSP PIPA (ASTM B280)
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                  DSP Pancake dan Straight diproduksi dengan standar kualitas yang sangat ketat, diproduksi sesuai dengan ASTM B280 dengan tujuan untuk digunakan dalam sambungan, perbaikan atau pergantian unit pendingin udara atau pendingin di lapangan. Untuk memastikan kinerja ac yang sangat baik, tembaga katoda kualitas tertinggi pipa ini menggunakan 99,9% Cu. Ditawarkan dengan berbagai macam ukuran.
                </p>
              </div>

              <div className="flex flex-col gap-12 mb-16">
                
                {/* Pancake Pipe Section */}
                <div>
                  <h3 className="text-xl font-bold text-[#0097e6] mb-4 uppercase">PANCAKE PIPE</h3>
                  <div className="grid lg:grid-cols-3 gap-8 items-start mb-8">
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                              <tr className="bg-[#0097e6] text-white">
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider border-r border-white/20" rowSpan={2}>Model</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" colSpan={2}>Diameter</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" rowSpan={2}>Thickness (mm)</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center" rowSpan={2}>Length [m]</th>
                              </tr>
                              <tr className="bg-[#0070ab] text-white">
                                <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">Inch</th>
                                <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">mm</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm">
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-1/4-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1/4</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">6.4</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.76</td><td className="py-3 px-4 border-t text-center" rowSpan={5}>15</td></tr>
                              <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-3/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">3/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">9.5</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.81</td></tr>
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-1/2-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1/2</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">12.7</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.81</td></tr>
                              <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-5/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">15.9</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.89</td></tr>
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-3/4-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">3/4</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">19.1</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.89</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center p-4">
                      {/* Image Placeholder */}
                      <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                        <span className="text-gray-400 font-medium text-center">Pancake Pipe<br/>Image</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">SAFE INTERNAL WORKING PRESSURE</h4>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6] text-white">
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider border-r border-white/20" rowSpan={2}>Model</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" colSpan={2}>Outside Diameter</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" rowSpan={2}>Wall Thickness<br/>(mm)</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" rowSpan={2}>Length (m)</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" colSpan={2}>Safe Working<br/>Pressure at 50°C</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center" colSpan={2}>Safe Working<br/>Pressure at 70°C</th>
                          </tr>
                          <tr className="bg-[#0070ab] text-white">
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">Inch</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">mm</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">Psi</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">Bar</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">Psi</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-white/20">kPa</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-1/4-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1/4</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">6.4</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.76</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">15</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1065</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">73</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">753</td><td className="py-3 px-4 border-t text-center">52</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-3/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">3/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">9.5</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.81</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">15</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1209</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">83</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">864</td><td className="py-3 px-4 border-t text-center">60</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-1/2-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1/2</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">12.7</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.81</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">15</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1622</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">112</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1161</td><td className="py-3 px-4 border-t text-center">80</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-5/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">15.9</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.89</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">15</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">2006</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">138</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1433</td><td className="py-3 px-4 border-t text-center">99</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">PCC-3/4-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">3/4</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">19.1</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.89</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">15</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">2508</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">173</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1791</td><td className="py-3 px-4 border-t text-center">124</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">CHEMICAL PROPERTIES</h4>
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                              <tr className="bg-[#0097e6] text-white">
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Standard</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Grade</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Copper CU (%)</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Phosphorus P(%)</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm">
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium">ASTMB B280</td><td className="py-3 px-4 border-t text-center">C12200</td><td className="py-3 px-4 border-t text-center">99.99</td><td className="py-3 px-4 border-t text-center">0.015-0.04</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">MECHANICAL PROPERTIES</h4>
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                              <tr className="bg-[#0097e6] text-white">
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Temper</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Tensile Strength (Mpa)</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Elongation (%)</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Hardness</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Average Grain Size (mm)</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm">
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium">H80</td><td className="py-3 px-4 border-t text-center">min 250</td><td className="py-3 px-4 border-t text-center">0</td><td className="py-3 px-4 border-t text-center">0</td><td className="py-3 px-4 border-t text-center">0</td></tr>
                              <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium">O60</td><td className="py-3 px-4 border-t text-center">min 205</td><td className="py-3 px-4 border-t text-center">min 40</td><td className="py-3 px-4 border-t text-center">0</td><td className="py-3 px-4 border-t text-center">min 0.04</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Straight Tube Pipe Section */}
                <div>
                  <h3 className="text-xl font-bold text-[#0097e6] mb-4 uppercase">STRAIGHT TUBE PIPE</h3>
                  <div className="grid lg:grid-cols-3 gap-8 items-start mb-8">
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                              <tr className="bg-[#0097e6] text-white">
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider border-r border-white/20" rowSpan={2}>Model</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" colSpan={2}>Diameter</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" rowSpan={2}>Thickness (mm)</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center" rowSpan={2}>Length [m]</th>
                              </tr>
                              <tr className="bg-[#0070ab] text-white">
                                <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">inch</th>
                                <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">mm</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm">
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-7/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">7/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">22.2</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.14</td><td className="py-3 px-4 border-t text-center" rowSpan={5}>5.8</td></tr>
                              <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-1-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">25.4</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.21</td></tr>
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-1 1/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1 1/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">28.6</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.27</td></tr>
                              <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-1 3/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1 3/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">34.9</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.40</td></tr>
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-1 5/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1 5/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">41.3</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.52</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center p-4">
                      {/* Image Placeholder */}
                      <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                        <span className="text-gray-400 font-medium text-center">Straight Tube<br/>Image</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">SAFE INTERNAL WORKING PRESSURE</h4>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6] text-white">
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider border-r border-white/20" rowSpan={2}>Model</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" colSpan={2}>Outside Diameter</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" rowSpan={2}>Wall Thickness<br/>(mm)</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" rowSpan={2}>Length (m)</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20" colSpan={2}>Safe Working<br/>Pressure at 50°C</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center" colSpan={2}>Safe Working<br/>Pressure at 70°C</th>
                          </tr>
                          <tr className="bg-[#0070ab] text-white">
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">inch</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">mm</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">Psi</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">Bar</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-r border-white/20">Psi</th>
                            <th className="py-2 px-4 font-bold text-xs uppercase tracking-wider text-center border-t border-white/20">kPa</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-7/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">7/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">22.2</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.14</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5.8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1272</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">88</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">909</td><td className="py-3 px-4 border-t text-center">63</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-1-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">25.4</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.21</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5.8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1626</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">112</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1162</td><td className="py-3 px-4 border-t text-center">80</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-1 1/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1 1/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">28.6</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.27</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5.8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1966</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">136</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1404</td><td className="py-3 px-4 border-t text-center">97</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-1 3/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1 3/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">34.9</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.40</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5.8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">2582</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">177</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1830</td><td className="py-3 px-4 border-t text-center">126</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">SCP-1 5/8-ASTM</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1 5/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">41.3</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1.52</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5.8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">3287</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">227</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">2348</td><td className="py-3 px-4 border-t text-center">162</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          )}

          {/* Tab 2: DSP PAIR COIL */}
          {activeTab === 'dsp-pair-coil' && (
            <FadeInUp>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0097e6] mb-6">DSP PAIR COIL</h2>
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                  DSP Insulated Pair Coil dibuat dengan tembaga kelas ASTM B280 yang dibungkus dengan busa polyethylene sel tertutup yang berkualitas tinggi untuk memastikan kuallitas dan keamanan. Lapisan berinsulasi tahan lama dan tahan terhadap lecet. Lebih mudah dipasang di ruang sempit dan mengurangi waktu pemasangan.
                </p>
              </div>

              <div className="flex flex-col gap-12 mb-16">
                
                {/* PAIR COIL PIPE Section */}
                <div>
                  <h3 className="text-xl font-bold text-[#0097e6] mb-4 uppercase">PAIR COIL PIPE</h3>
                  <div className="grid lg:grid-cols-3 gap-8 items-start mb-8">
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                              <tr className="bg-[#0097e6] text-white">
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider border-r border-white/20">Nomor Model</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20">Satuan</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20">IPC-23-ASTM</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20">IPC-24-ASTM</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20">IPC-25-ASTM</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20">IPC-35-ASTM</th>
                                <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">IPC-36-ASTM</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm">
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100" rowSpan={2}>Diameter</td><td className="py-3 px-4 border-t text-center font-bold border-r border-gray-100 bg-gray-50/50">mm</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">6.4 - 9.5</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">6.4 - 12.7</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">6.4 - 15.9</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">9.5 - 15.9</td><td className="py-3 px-4 border-t text-center">9.5 - 19.1</td></tr>
                              <tr className="bg-white"><td className="py-3 px-4 border-t text-center font-bold border-r border-gray-100 bg-gray-50/50">inch</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1/4 - 3/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1/4 - 1/2</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">1/4 - 5/8</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">3/8 - 5/8</td><td className="py-3 px-4 border-t text-center">3/8 - 3/4</td></tr>
                              <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Ketebalan Pipa</td><td className="py-3 px-4 border-t text-center font-bold border-r border-gray-100 bg-gray-50/50">mm</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.76 - 0.81</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.76 - 0.81</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.76 - 0.89</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">0.81 - 0.89</td><td className="py-3 px-4 border-t text-center">0.81 - 0.89</td></tr>
                              <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Ketebalan Insulasi</td><td className="py-3 px-4 border-t text-center font-bold border-r border-gray-100 bg-gray-50/50">mm</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">10</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">10</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">10</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">10</td><td className="py-3 px-4 border-t text-center">10</td></tr>
                              <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Panjang Pipa & Insulasi</td><td className="py-3 px-4 border-t text-center font-bold border-r border-gray-100 bg-gray-50/50">m</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">30</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">30</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">30</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">15</td><td className="py-3 px-4 border-t text-center">15</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center p-4">
                      {/* Image Placeholder */}
                      <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                        <span className="text-gray-400 font-medium text-center">Pair Coil Pipe<br/>Image</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SAFETY COMPLIANCE Section */}
                <div>
                  <h3 className="text-xl font-bold text-[#0097e6] mb-4 uppercase">SAFETY COMPLIANCE</h3>
                  
                  <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Cooper Tube Safeworking Pressure</h4>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6] text-white">
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider border-r border-white/20">Cooper Tube Dimensions Metric (mm)</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20">@ 50°C</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center border-r border-white/20">SWP (kPa) @ 65°C</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">@ 75°C</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">6.35 x 0.81</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">10635</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">10635</td><td className="py-3 px-4 border-t text-center">8820</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">9.52 x 0.81</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">6800</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">6800</td><td className="py-3 px-4 border-t text-center">5640</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">12.70 x 0.81</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">4995</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">4995</td><td className="py-3 px-4 border-t text-center">4140</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">15.88 x 1.02</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5030</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">5030</td><td className="py-3 px-4 border-t text-center">4170</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">19.05 x 1.14</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">4697</td><td className="py-3 px-4 border-t text-center border-r border-gray-100">4697</td><td className="py-3 px-4 border-t text-center">3895</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Insulation Properties</h4>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6] text-white">
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider border-r border-white/20 w-1/3">Material</th>
                            <th className="py-3 px-4 font-bold text-xs tracking-wider">Highly flexible paired, Cross Linked, Closed cell polyethylene</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Thermal Conductivity</td><td className="py-3 px-4 border-t">0.037 W/m.K at 20°C</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Tensile Strength</td><td className="py-3 px-4 border-t">34.2 (3.49) m/n N/cm² (kgf/cm²)</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Water Absorption</td><td className="py-3 px-4 border-t">0.0076 max g/100cm²</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Thickness Shrinkage (%)</td><td className="py-3 px-4 border-t">5% max @120 ± 5°C</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Coefficient of Moisture Permeability</td><td className="py-3 px-4 border-t">10 (0.005) max, (per 25mm in thickness)</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t font-medium border-r border-gray-100">Working Temprature</td><td className="py-3 px-4 border-t">Up to 120°C</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
            </FadeInUp>
          )}

          {/* Tab 3: PIPA AUB PAIR COIL 0.66 */}
          {activeTab === 'aub-pair-coil' && (
            <FadeInUp>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0097e6] mb-6">PIPA AUB PAIR COIL 0.66</h2>
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                  Pipa AUB 0.66 merupakan produk baru berupa Pipa tembaga berukuran 0.66 dilapisi insulasi yang menggunakan busa polietilen sel tertutup berlapis ganda dan pipa tembaga yang berkualitas. Sehingga memudahkan para teknisi profesional untuk memasang pipa dengan nyaman dan efisien tinggi. Pipa lebih mudah ditekuk. lebih mudah di flaring dan efisien untuk pemasangan AC Split.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                <div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#0097e6] text-white">
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Model</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Ukuran Pipa</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Ketebalan Pipa</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Panjang (m)</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 border-t">AUB 2330</td><td className="py-3 px-4 border-t text-center">1/4" & 3/8"</td><td className="py-3 px-4 border-t text-center">0.66 x 0.66</td><td className="py-3 px-4 border-t text-center">30</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t">AUB 2430</td><td className="py-3 px-4 border-t text-center">1/4" & 1/2"</td><td className="py-3 px-4 border-t text-center">0.66 x 0.66</td><td className="py-3 px-4 border-t text-center">30</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t">AUB 2530</td><td className="py-3 px-4 border-t text-center">1/4" & 5/8"</td><td className="py-3 px-4 border-t text-center">0.66 x 0.71</td><td className="py-3 px-4 border-t text-center">30</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-4">Spesifikasi Insulasi Pipa AUR</h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#0097e6] text-white">
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Item</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Standard</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 border-t">Material</td><td className="py-3 px-4 border-t text-center">Polyethylene Foam</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t">Density</td><td className="py-3 px-4 border-t text-center">20-30 kg/m3</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t">Thermal Conductivity</td><td className="py-3 px-4 border-t text-center">0.035 W/mK</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t">Insulation Thickness</td><td className="py-3 px-4 border-t text-center">8mm (1/4" - 3/8"), 10mm (1/2" - 5/8")</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 aspect-[4/3] flex items-center justify-center shadow-sm border border-gray-100">
                  <div className="w-full h-full bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                    <span className="text-gray-400 font-medium">Image Placeholder</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          )}

          {/* Tab 4: RIFO MULTI LAYER PIPA */}
          {activeTab === 'rifo-multi-layer' && (
            <FadeInUp>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0097e6] mb-6">RIFO MULTI LAYER PIPA</h2>
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                  Pipa Multilayer RIIFO adalah pipa komposit lima lapis yang menggabungkan keunggulan pipa plastik dan alumunium. Pipa multilayer AC RIIFO meminimalkan kondensasi dan memberikan efek sejuk yang lebih dibandingkan dengan pipa tembaga. Pipa AC Rifo Multi Layer juga menawarkan fleksibilitas tinggi dan ketahanan benturan. Struktur multi layernya memberikan isolasi termal ekstra yang dapat diandalkan, dan sangat mudah untuk ditekuk tanpa merusak lapisan dalam pipa.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                
                <div className="order-2 lg:order-1 flex flex-col gap-8">
                  {/* Image Placeholder */}
                  <div className="bg-white rounded-3xl p-6 aspect-[4/3] flex items-center justify-center shadow-sm border border-gray-100">
                    <div className="w-full h-full bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                      <span className="text-gray-400 font-medium text-center">RIIFO Multilayer Pipe<br/>Structure Image</span>
                    </div>
                  </div>

                  {/* Lite Features List */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-[#0097e6] mb-6 uppercase border-b border-gray-100 pb-3">Keunggulan Utama</h3>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#0097e6] mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-charcoal block mb-1 text-sm md:text-base">Pemasangan Mudah</strong>
                          <span className="text-sm text-gray-600 leading-relaxed block">Memudahkan proses instalasi di jalur sulit dan meminimalkan resiko tertekuk.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#0097e6] mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-charcoal block mb-1 text-sm md:text-base">Garansi</strong>
                          <span className="text-sm text-gray-600 leading-relaxed block">Garansi cacat produk dari Allianz.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#0097e6] mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-charcoal block mb-1 text-sm md:text-base">Tahan Korosi</strong>
                          <span className="text-sm text-gray-600 leading-relaxed block">Perlindungan multilayer terhadap masalah korosi (alam & kondensasi).</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#0097e6] mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-charcoal block mb-1 text-sm md:text-base">Kondensasi Rendah</strong>
                          <span className="text-sm text-gray-600 leading-relaxed block">Terbuat dari PEX-AL-PEX yang meminimkan terjadinya kondensasi.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Spesifikasi Ukuran Pipa</h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6] text-white">
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Model</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Ukuran (Inch)</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Outer Dia (mm)</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Inner Dia (mm)</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 border-t">RIFO ML 1/4"</td><td className="py-3 px-4 border-t text-center">1/4"</td><td className="py-3 px-4 border-t text-center">6.35</td><td className="py-3 px-4 border-t text-center">4.35</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t">RIFO ML 3/8"</td><td className="py-3 px-4 border-t text-center">3/8"</td><td className="py-3 px-4 border-t text-center">9.52</td><td className="py-3 px-4 border-t text-center">7.52</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t">RIFO ML 1/2"</td><td className="py-3 px-4 border-t text-center">1/2"</td><td className="py-3 px-4 border-t text-center">12.70</td><td className="py-3 px-4 border-t text-center">10.30</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t">RIFO ML 5/8"</td><td className="py-3 px-4 border-t text-center">5/8"</td><td className="py-3 px-4 border-t text-center">15.88</td><td className="py-3 px-4 border-t text-center">13.08</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t">RIFO ML 3/4"</td><td className="py-3 px-4 border-t text-center">3/4"</td><td className="py-3 px-4 border-t text-center">19.05</td><td className="py-3 px-4 border-t text-center">16.05</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-4">Insulation Properties</h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                          <tr className="bg-[#0097e6] text-white">
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Item</th>
                            <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center">Value</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                          <tr className="bg-white"><td className="py-3 px-4 border-t">Material</td><td className="py-3 px-4 border-t text-center">PE + Aluminum</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t">Kompatibilitas</td><td className="py-3 px-4 border-t text-center">R22, R410A, R32</td></tr>
                          <tr className="bg-white"><td className="py-3 px-4 border-t">Max Pressure</td><td className="py-3 px-4 border-t text-center">3.8 MPa (551 psi)</td></tr>
                          <tr className="bg-gray-50/80"><td className="py-3 px-4 border-t">Temperature Range</td><td className="py-3 px-4 border-t text-center">-40°C ~ 60°C</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          )}

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
            
            {/* Refrigerant */}
            <FadeInUp delay={0.1}>
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
            <FadeInUp delay={0.2}>
              <Link to="/products/accessories/insulasi" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Insulasi AC</h3>
                  <p className="text-gray-500 text-xs">Armaflex & Foam</p>
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
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Filter</h3>
                  <p className="text-gray-500 text-xs">HEPA & PM2.5</p>
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
                  <p className="text-gray-500 text-xs">WiFi & BMS</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Lainnya */}
            <FadeInUp delay={0.6}>
              <Link to="/products/accessories/lainnya" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <MoreHorizontal className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Lainnya</h3>
                  <p className="text-gray-500 text-xs">Produk Lainnya</p>
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
