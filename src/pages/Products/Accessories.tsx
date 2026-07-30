import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Fan, Wind, PenTool, Battery, VolumeX, Leaf, Shield, CheckCircle2, Home, Building2, Wrench, Settings, BookOpen, MonitorPlay, Thermometer, Plug, MoreHorizontal, Wifi, Package, Sliders, MapPin } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function Accessories() {
  const accessoryCategories = [
    {
      title: "Refrigerant",
      subtitle: "R-32 & R-410A",
      icon: <Thermometer className="w-16 h-16 stroke-1" />,
      smallIcon: <Thermometer className="w-4 h-4" />,
      gradient: "from-blue-600 to-blue-800",
      link: "/products/accessories/refrigerant"
    },
    {
      title: "Pipa AC",
      subtitle: "Copper & Flare",
      icon: <Plug className="w-16 h-16 stroke-1" />,
      smallIcon: <Plug className="w-4 h-4" />,
      gradient: "from-gray-700 to-gray-900",
      link: "/products/accessories/pipa"
    },
    {
      title: "Insulasi AC",
      subtitle: "Armaflex & Foam",
      icon: <Wind className="w-16 h-16 stroke-1" />,
      smallIcon: <Wind className="w-4 h-4" />,
      gradient: "from-[#0097e6] to-[#0070ab]",
      link: "/products/accessories/insulasi"
    },
    {
      title: "Daikin Recommend Tools",
      subtitle: "Toolkit Resmi",
      icon: <Settings className="w-16 h-16 stroke-1" />,
      smallIcon: <Settings className="w-4 h-4" />,
      gradient: "from-slate-800 to-slate-950",
      link: "/products/accessories/tools"
    },
    {
      title: "Filter",
      subtitle: "HEPA & PM2.5",
      icon: <Sliders className="w-16 h-16 stroke-1" />,
      smallIcon: <Sliders className="w-4 h-4" />,
      gradient: "from-[#005a87] to-[#0097e6]",
      link: "/products/accessories/filter"
    },
    {
      title: "Smart Connection",
      subtitle: "WiFi & BMS",
      icon: <Wifi className="w-16 h-16 stroke-1" />,
      smallIcon: <Wifi className="w-4 h-4" />,
      gradient: "from-[#0097e6] to-[#0070ab]",
      link: "/products/accessories/smart-connection"
    },
    {
      title: "Lainnya",
      subtitle: "Produk Lainnya",
      icon: <MoreHorizontal className="w-16 h-16 stroke-1" />,
      smallIcon: <MoreHorizontal className="w-4 h-4" />,
      gradient: "from-gray-700 to-gray-900",
      link: "/products/accessories/lainnya"
    }
  ]

  return (
    <PageTransition>
      <PageMeta title="Aksesoris AC Resmi - Daikin" canonical="/products/accessories" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-daikin-blue-dark">
        <Suspense fallback={null}><AirParticles /></Suspense>
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-transparent z-10" />
          <div className="w-full h-full flex items-center justify-end pr-20 relative">
            <div className="absolute inset-0 bg-[url('/images/category_ac/acc.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
          </div>
        </div>
        
        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-white/50 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/70">Produk</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Aksesoris AC</span>
          </nav>
          
          <FadeInUp>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-daikin-blue bg-white rounded-full tracking-wider">PREMIUM DAIKIN QUALITY</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              AKSESORIS <span className="text-daikin-blue-light">AC</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow">
              Lengkapi performa AC Daikin Anda dengan rangkaian aksesoris resmi berkualitas tinggi untuk memastikan daya tahan, efisiensi, dan hasil pendinginan yang optimal di setiap saat.
            </p>
          </FadeInUp>
        </div>
      </div>
      
      {/* Intro Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInUp className="text-left">
              <Package className="w-16 h-16 text-daikin-blue mb-8 opacity-20" />
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">Pilihan Material Terbaik untuk Performa Maksimal</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Memilih AC Daikin yang tepat hanyalah langkah pertama. Menggunakan suku cadang dan material instalasi yang direkomendasikan adalah jaminan atas kinerja pendinginan yang stabil, hemat energi, dan umur pemakaian unit yang jauh lebih panjang.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100">
                <div className="absolute inset-0 bg-gray-200" />
                <div className="absolute inset-0 bg-[url('/images/category_ac/acc.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-daikin-blue/10 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-daikin-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Standard Daikin</p>
                    <p className="font-bold text-charcoal">Resmi & Orisinal</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Accessories Grid */}
      <div className="py-24 bg-gray-50 relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-daikin-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">Jelajahi Produk Aksesoris</h2>
              <p className="text-gray-600">Temukan perlengkapan instalasi dan aksesoris AC orisinal dengan standar industri.</p>
            </div>
          </FadeInUp>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {accessoryCategories.map((item, index) => (
              <FadeInUp 
                key={index} 
                delay={index * 0.1} 
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <Link to={item.link} className={`group block h-[280px] lg:h-[320px] relative overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br ${item.gradient}`}>
                  
                  {/* Dotted pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}
                  />
                  
                  {/* Main large centered icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-6 left-5 right-5 flex flex-col items-start z-10">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4 backdrop-blur-sm">
                      {item.smallIcon}
                    </div>
                    <h3 className="text-base font-bold text-white mb-1 leading-tight">{item.title}</h3>
                    <p className="text-white/70 text-xs">{item.subtitle}</p>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-[#1c242b] opacity-80 z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Pusat Solusi Instalasi AC
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Tonton panduan penggunaan material dan alat-alat esensial dari tenaga profesional Daikin.
              </p>
            </div>
            
            <div className="aspect-[21/9] w-full max-w-5xl mx-auto bg-black/40 rounded-3xl overflow-hidden relative shadow-2xl group border border-white/10 backdrop-blur-sm cursor-pointer flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/images/zone/demo-area.jpg')] bg-cover bg-center opacity-40 transition-transform duration-1000 group-hover:scale-105" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-daikin-blue/90 flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white group-hover:border-l-daikin-blue border-b-[10px] border-b-transparent ml-2 transition-colors duration-300" />
                </div>
                <span className="mt-4 text-white font-medium tracking-wide">Tonton Video</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
      
      {/* Other Categories Section (Matching the template) */}
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
            
            {/* Spare Parts */}
            <FadeInUp delay={0.3}>
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
            
            {/* E-Catalogue */}
            <FadeInUp delay={0.4}>
              <Link to="/products/e-catalogue" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">E-Catalogue</h3>
                  <p className="text-gray-500 text-xs">Unduh Katalog Digital</p>
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
