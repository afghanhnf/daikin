import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ChevronDown, Download, Wind, Fan, Settings, Layers, Package, Home, Cloud, Building2, Search, ArrowRight, Filter, FileText, Wrench, MonitorPlay, MapPin } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

export default function ECatalogue() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const topCatalogues = [
    { id: 1, title: "AIR PURIFIERS", desc: "Solusi udara bersih bebas virus & bakteri", icon: <Wind className="w-16 h-16" />, file: "Katalog_Air_Purifier_2026.pdf" },
    { id: 2, title: "AIR TREATMENT", desc: "Kontrol kelembapan untuk kenyamanan ekstra", icon: <Fan className="w-16 h-16" />, file: "Katalog_Air_Treatment_2026.pdf" },
    { id: 3, title: "CONTROLLER & ACCESSORIES", desc: "Sistem kendali pintar & aksesori resmi", icon: <Settings className="w-16 h-16" />, file: "Katalog_Controller_2026.pdf" },
    { id: 4, title: "MULTI SPLIT", desc: "Satu outdoor untuk multi indoor unit", icon: <Layers className="w-16 h-16" />, file: "Katalog_Multi_Split_2026.pdf" },
    { id: 5, title: "PACKAGED", desc: "AC komersial tangguh berkapasitas besar", icon: <Package className="w-16 h-16" />, file: "Katalog_Packaged_2026.pdf" },
    { id: 6, title: "ROOM AIR", desc: "Kesejukan maksimal untuk hunian Anda", icon: <Home className="w-16 h-16" />, file: "Katalog_Room_Air_2026.pdf" },
    { id: 7, title: "SKY AIR", desc: "Desain elegan untuk ruang usaha & ruko", icon: <Cloud className="w-16 h-16" />, file: "Katalog_Sky_Air_2026.pdf" },
    { id: 8, title: "VRV", desc: "Sistem AC sentral hemat energi skala besar", icon: <Building2 className="w-16 h-16" />, file: "Katalog_VRV_2026.pdf" },
  ]

  const allCatalogues = [
    { id: 1, title: "Katalog Air Purifier 2026", category: "Air Purifier", image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=400", file: "Katalog_Air_Purifier.pdf" },
    { id: 2, title: "Katalog Multi Split", category: "Residential", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400", file: "Katalog_Multi_Split.pdf" },
    { id: 3, title: "Katalog VRV System", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400", file: "Katalog_VRV.pdf" },
    { id: 4, title: "Katalog Sky Air", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400", file: "Katalog_Sky_Air.pdf" },
    { id: 5, title: "Katalog Packaged", category: "Industrial", image: "https://images.unsplash.com/photo-1565515268310-8fd592d348a4?q=80&w=400", file: "Katalog_Packaged.pdf" },
    { id: 6, title: "Katalog Room Air", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400", file: "Katalog_Room_Air.pdf" },
    { id: 7, title: "Katalog Controller", category: "Accessories", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400", file: "Katalog_Controller.pdf" },
    { id: 8, title: "Katalog Air Treatment", category: "Air Purifier", image: "https://images.unsplash.com/photo-1522771731470-31383cd8198f?q=80&w=400", file: "Katalog_Air_Treatment.pdf" },
    { id: 9, title: "Katalog Chiller", category: "Industrial", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400", file: "Katalog_Chiller.pdf" },
    { id: 10, title: "Katalog Marine HVAC", category: "Specialized", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=400", file: "Katalog_Marine.pdf" },
    { id: 11, title: "Katalog Altherma", category: "Residential", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400", file: "Katalog_Altherma.pdf" },
    { id: 12, title: "Katalog Applied Systems", category: "Commercial", image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=400", file: "Katalog_Applied.pdf" },
    { id: 13, title: "Katalog Refrigeration", category: "Industrial", image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=400", file: "Katalog_Refrigeration.pdf" },
    { id: 14, title: "Katalog Spare Parts", category: "Accessories", image: "https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&w=400", file: "Katalog_Spare_Parts.pdf" },
  ]

  const categories = ["Semua", "Residential", "Commercial", "Industrial", "Air Purifier", "Accessories", "Specialized"]

  const filteredTopCatalogues = topCatalogues.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredAllCatalogues = allCatalogues.filter(cat => 
    (activeCategory === 'Semua' || cat.category === activeCategory) &&
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredAllCatalogues.length / itemsPerPage)
  const paginatedCatalogues = filteredAllCatalogues.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <PageTransition>
      <PageMeta title="E-Catalogue Resmi Daikin" canonical="/products/e-catalogue" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 flex flex-col justify-center overflow-hidden bg-daikin-blue-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005a87] via-[#0080cb] to-[#0097e6] opacity-90 z-10" />
          <div className="w-full h-full flex items-center justify-end pr-20 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200')] bg-cover bg-center opacity-40 mix-blend-overlay" />
          </div>
        </div>
        
        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-white/50 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/70">Produk</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">E-Catalogue</span>
          </nav>
          
          <FadeInUp>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-daikin-blue bg-white rounded-full tracking-wider shadow-lg">DIGITAL BROCHURE</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              E-CATALOGUE <span className="text-daikin-blue-light">DAIKIN</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow mb-12">
              Jelajahi spesifikasi teknis, fitur premium, dan rentang produk unggulan kami melalui katalog digital interaktif. 
              Keputusan yang tepat berawal dari informasi yang akurat.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-24 bg-gray-50 relative min-h-screen">
        
        {showAll ? (
          /* All Catalogues View */
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 -mt-40">
            {/* Filter and Search Bar for All Catalogues */}
            <FadeInUp delay={0.1} className="mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center justify-between border border-gray-100">
                <div className="w-full md:w-1/2 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Cari nama katalog..." 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-daikin-blue/50 focus:border-daikin-blue transition-all bg-gray-50/50"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setCurrentPage(1)
                    }}
                  />
                </div>
                <div className="w-full md:w-64 flex items-center gap-3">
                  <Filter className="w-5 h-5 text-gray-400 shrink-0" />
                  <div className="relative w-full group">
                    <select
                      value={activeCategory}
                      onChange={(e) => {
                        setActiveCategory(e.target.value)
                        setCurrentPage(1)
                      }}
                      className="w-full appearance-none pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-daikin-blue/50 focus:border-daikin-blue transition-all bg-gray-50/50 cursor-pointer group-hover:bg-gray-100/80 group-hover:border-daikin-blue text-charcoal font-medium shadow-sm"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-hover:text-daikin-blue transition-colors" />
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Grid for All Catalogues */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
              {paginatedCatalogues.length > 0 ? paginatedCatalogues.map((cat, idx) => (
                <FadeInUp key={cat.id} delay={idx * 0.05} className="flex flex-col group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur text-daikin-blue text-xs font-bold rounded-full shadow-sm">
                        {cat.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-charcoal text-sm mb-4 line-clamp-2 group-hover:text-daikin-blue transition-colors">
                      {cat.title}
                    </h3>
                    <button className="mt-auto w-full py-2.5 rounded-lg bg-daikin-blue hover:bg-daikin-blue-dark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" /> Unduh PDF
                    </button>
                  </div>
                </FadeInUp>
              )) : (
                <div className="col-span-full py-32 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <FileText className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-gray-500 mb-2">Katalog Tidak Ditemukan</h3>
                  <p className="text-gray-400">Silakan coba dengan kata kunci atau kategori lain.</p>
                </div>
              )}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <FadeInUp className="flex justify-center mt-12 gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx + 1)
                      window.scrollTo({ top: 300, behavior: 'smooth' })
                    }}
                    className={`w-10 h-10 rounded-xl font-bold transition-all flex items-center justify-center ${
                      currentPage === idx + 1 
                        ? 'bg-daikin-blue text-white shadow-md scale-110' 
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </FadeInUp>
            )}

            <div className="mt-16 text-center">
              <button 
                onClick={() => setShowAll(false)}
                className="inline-flex items-center justify-center gap-2 text-daikin-blue font-bold hover:text-daikin-blue-dark transition-colors"
              >
                Kembali ke Katalog Utama
              </button>
            </div>
          </div>
        ) : (
          /* Top Catalogues View */
          <>
            {/* Floating Search Bar */}
            <div className="max-w-4xl mx-auto px-4 relative z-30 -mt-40 mb-16">
              <FadeInUp delay={0.2}>
                <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full relative flex-grow">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Cari nama atau kategori katalog..." 
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-daikin-blue focus:bg-white transition-all text-gray-700"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <button className="w-full md:w-auto px-8 py-4 bg-daikin-blue hover:bg-daikin-blue-dark text-white rounded-xl font-bold transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" /> Temukan
                  </button>
                </div>
              </FadeInUp>
            </div>

            {/* Catalogue Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {filteredTopCatalogues.length > 0 ? filteredTopCatalogues.map((cat, idx) => (
                  <FadeInUp key={cat.id} delay={idx * 0.1}>
                    <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-daikin-blue/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                      
                      {/* Subtle Background pattern on hover */}
                      <div className="absolute -right-12 -top-12 w-48 h-48 bg-daikin-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative z-10 flex flex-col h-full items-center text-center">
                        <div className="w-24 h-24 mb-8 flex items-center justify-center text-daikin-blue group-hover:scale-110 group-hover:text-daikin-blue-dark transition-all duration-500">
                          {cat.icon}
                        </div>
                        
                        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-daikin-blue transition-colors">
                          {cat.title}
                        </h3>

                        <p className="text-sm text-gray-500 mb-6 flex-grow">
                          {cat.desc}
                        </p>
                        
                        <div className="w-12 h-1 bg-gray-200 rounded-full mb-8 group-hover:w-24 group-hover:bg-daikin-blue transition-all duration-500" />
                        
                        <button className="mt-auto w-full py-3.5 px-6 rounded-xl bg-daikin-blue/10 text-daikin-blue font-bold group-hover:bg-daikin-blue group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                          <Download className="w-5 h-5" />
                          Lihat Katalog
                        </button>
                      </div>
                    </div>
                  </FadeInUp>
                )) : (
                  <div className="col-span-full py-20 text-center">
                    <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-500 mb-2">Katalog Tidak Ditemukan</h3>
                    <p className="text-gray-400">Silakan coba dengan kata kunci lain.</p>
                  </div>
                )}
              </div>
              
              {/* Load More Button */}
              {filteredTopCatalogues.length > 0 && (
                <FadeInUp delay={0.4} className="mt-16 text-center">
                  <button 
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl group"
                  >
                    Lihat Semua Katalog <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </FadeInUp>
              )}

            </div>
          </>
        )}
      </div>

      {/* Other Categories Section */}
      <div className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">Kategori Lainnya</h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Residential Solutions */}
            <FadeInUp delay={0.1}>
              <Link to="/products/residential" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Home className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Residential Solutions</h3>
                  <p className="text-gray-500 text-xs">AC Hunian & Hunian Premium</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Commercial Solutions */}
            <FadeInUp delay={0.2}>
              <Link to="/products/commercial" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Commercial Solutions</h3>
                  <p className="text-gray-500 text-xs">AC Komersial & Industrial</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Accessories */}
            <FadeInUp delay={0.3}>
              <Link to="/products/accessories" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Accessories</h3>
                  <p className="text-gray-500 text-xs">Aksesori Pelengkap</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Spare Parts */}
            <FadeInUp delay={0.4}>
              <Link to="/products/spare-parts" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Spare Parts</h3>
                  <p className="text-gray-500 text-xs">Suku Cadang Resmi</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Virtual Tour */}
            <FadeInUp delay={0.5}>
              <Link to="/virtual-tour" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <MonitorPlay className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Virtual Tour</h3>
                  <p className="text-gray-500 text-xs">Showroom Online</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Temukan Dealer */}
            <FadeInUp delay={0.6}>
              <Link to="/dealers" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Temukan Dealer</h3>
                  <p className="text-gray-500 text-xs">Dealer Resmi Daikin</p>
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
