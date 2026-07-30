import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Building, Laptop, Settings, 
  Building2, Factory, Home, Wrench, BookOpen, MonitorPlay, MapPin
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

export default function CommercialSolutions() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#controllersystem' || location.hash === '#control-system') {
      const el = document.getElementById('controllersystem')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [location])
  return (
    <PageTransition>
      <PageMeta title="AC Bangunan Komersial & Industrial - Daikin" canonical="/products/commercial" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-daikin-blue-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-transparent z-10" />
          <div className="w-full h-full flex items-center justify-end pr-20 relative">
            <div className="absolute inset-0 bg-[url('/images/hero/commercial_building_hero.png')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          </div>
        </div>
        
        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-white/60 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/70">Produk</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Bangunan Komersial</span>
          </nav>
          
          <FadeInUp>
            <span className="inline-block px-3.5 py-1 mb-6 text-xs font-bold text-daikin-blue bg-white rounded-lg tracking-wider uppercase border border-white/20">
              EXCELLENT SUPPORT FOR HVAC SOLUTION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              BANGUNAN <span className="text-daikin-blue-light">KOMERSIAL</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow">
              Sistem pendingin udara inovatif dari Daikin dapat memberikan solusi tata udara terpadu yang efisien, canggih, dan dapat disesuaikan untuk segala jenis kebutuhan bisnis dan proyek Anda.
            </p>
          </FadeInUp>
        </div>
      </div>
      
      {/* Intro Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <FadeInUp>
            <Building className="w-14 h-14 mx-auto text-daikin-blue mb-6 opacity-20" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5 leading-[1.35]">
              AC Daikin Untuk Bangunan Komersial
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              AC Daikin dan sistem HVAC memberikan pilihan luas dengan mensinergikan kebutuhan mulai dari pengaturan unit indoor, kapasitas pendinginan, hingga solusi efisiensi energi terpadu yang tepat untuk tata ruang komersial Anda.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Main Categories */}
      <div className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-24 relative z-10">
          
          {/* SkyAir */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center group">
            <FadeInLeft>
              <div className="w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden relative shadow-xs border border-gray-200/80 p-6 flex items-center justify-center">
                {/* Empty Image Thumbnail Card */}
                <div className="w-full h-full bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-gray-400 font-medium text-xs">Sample Image Placeholder (Daikin SkyAir)</span>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue">
                    <Building className="w-5 h-5" />
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-charcoal leading-[1.35] group-hover:text-daikin-blue transition-colors">
                    AC Daikin SkyAir
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                  AC SkyAir Daikin memberikan solusi pendinginan yang ideal, hemat ruang, dan efisiensi energi yang luar biasa. Sangat sesuai untuk digunakan di restoran, kantor, ritel pertokoan, perhotelan, dan ruang publik besar lainnya yang membutuhkan kenyamanan tanpa kompromi.
                </p>
                <Link 
                  to="/products/commercial/skyair" 
                  className="inline-flex items-center gap-2 bg-white text-daikin-blue border-2 border-daikin-blue px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs group"
                >
                  Jelajahi SkyAir 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInRight>
          </div>
          
          {/* VRV */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center group">
            <FadeInLeft className="order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue">
                    <Settings className="w-5 h-5" />
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-charcoal leading-[1.35] group-hover:text-daikin-blue transition-colors">
                    AC Daikin VRV
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                  Daikin VRV (Variable Refrigerant Volume) memberikan solusi AC sentral terkemuka di dunia. Menggunakan kontrol cerdas aliran refrigeran yang dikembangkan khusus untuk menawarkan efisiensi tinggi, desain yang sangat fleksibel (hemat ruang), dan kemudahan operasional instalasi untuk gedung pencakar langit maupun komersial.
                </p>
                <Link 
                  to="/products/commercial/vrv" 
                  className="inline-flex items-center gap-2 bg-white text-daikin-blue border-2 border-daikin-blue px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs group"
                >
                  Jelajahi Sistem VRV 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInLeft>
            <FadeInRight className="order-1 lg:order-2">
              <div className="w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden relative shadow-xs border border-gray-200/80 p-6 flex items-center justify-center">
                {/* Empty Image Thumbnail Card */}
                <div className="w-full h-full bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-gray-400 font-medium text-xs">Sample Image Placeholder (Daikin VRV System)</span>
                </div>
              </div>
            </FadeInRight>
          </div>

          {/* Industrial / Packaged */}
          <div className="space-y-12">
            <FadeInUp className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-daikin-blue mb-4 leading-[1.35]">
                AC BANGUNAN INDUSTRIAL
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Bagi Anda dengan kebutuhan kendali ketat tingkat suhu dan kualitas udara pada fasilitas produksi maupun pendukungnya. Sistem AC Packaged Daikin dibuat cermat dengan kontrol suhu presisi untuk mendukung kebutuhan Anda mempertahankan hasil akurat dalam menjaga kualitas produk.
              </p>
            </FadeInUp>

            <div className="grid lg:grid-cols-2 gap-0 items-stretch bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-200/80">
              <FadeInLeft className="h-full">
                <div className="w-full h-full min-h-[300px] lg:min-h-[400px] p-6 bg-gray-50 flex items-center justify-center border-r border-gray-200/80">
                  {/* Empty Image Thumbnail Card */}
                  <div className="w-full h-full bg-white rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center">
                    <span className="text-gray-400 font-medium text-xs">Sample Image Placeholder (AC Packaged Industrial)</span>
                  </div>
                </div>
              </FadeInLeft>
              
              <FadeInRight className="flex flex-col justify-center p-8 md:p-12 bg-gray-50/60">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0097e6] mb-4 leading-[1.35]">
                  Packaged Air Conditioner
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-8">
                  Keberhasilan pada fasilitas penelitian dan pabrik sering bergantung pada kontrol ketat terhadap suhu dan kualitas udara. Berdasarkan hal tersebut, Daikin menawarkan sistem AC Packaged untuk kontrol udara dan suhu yang tepat dalam membantu mempertahankan hasil yang akurat dan kualitas produk.
                </p>
                <div>
                  <Link 
                    to="/products/commercial/packaged" 
                    className="inline-flex items-center gap-2 bg-white text-daikin-blue border-2 border-daikin-blue px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs group"
                  >
                    Lihat Detail
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeInRight>
            </div>
          </div>
          
        </div>
      </div>

      {/* Control System Section */}
      <div id="controllersystem" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4 leading-[1.35]">
              Daikin Control System
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Sistem kendali pintar yang mengintegrasikan seluruh perangkat HVAC Anda dalam satu manajemen sentral.
            </p>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 h-full flex flex-col hover:border-daikin-blue hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue mb-6">
                  <Laptop className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Intelligent Touch Manager (iTM)</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow mb-6">
                  iTM Daikin merupakan sistem canggih dengan layar sentuh untuk memudahkan pengaturan suhu ruangan dan mengontrol konsumsi energi listrik pada gedung Anda dari satu titik pusat.
                </p>
                <Link to="/products/commercial/control-system/itm" className="text-daikin-blue font-bold text-xs inline-flex items-center gap-1.5 hover:text-daikin-blue-dark transition-colors group/link">
                  Lebih Lengkap <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 h-full flex flex-col hover:border-daikin-blue hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue mb-6">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Reiri (Office | Hotel | Home)</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow mb-6">
                  Reiri menawarkan solusi manajemen gedung yang otomatis dan efisien. Ideal untuk memonitor skala komersial, hotel, atau rumah Anda dalam genggaman dan meminimalkan biaya operasional.
                </p>
                <Link to="/products/commercial/control-system/reiri" className="text-daikin-blue font-bold text-xs inline-flex items-center gap-1.5 hover:text-daikin-blue-dark transition-colors group/link">
                  Lebih Lengkap <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 h-full flex flex-col hover:border-daikin-blue hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue mb-6">
                  <Building className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">MARUTTO</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow mb-6">
                  MARUTTO merupakan layanan manajemen berbasis cloud (IoT) Daikin. Dengan fitur ini, Anda tidak perlu khawatir tentang operasional HVAC karena dipantau 24/7 dan perbaikan berkala dikelola Daikin.
                </p>
                <Link to="/products/commercial/control-system/marutto" className="text-daikin-blue font-bold text-xs inline-flex items-center gap-1.5 hover:text-daikin-blue-dark transition-colors group/link">
                  Lebih Lengkap <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="bg-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-[#1c242b] opacity-80 z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Pusat Solusi Commercial Anda
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Lihat bagaimana sistem Daikin dirancang untuk mencapai efisiensi tertinggi dan mendukung operasional harian gedung komersial Anda.
              </p>
            </div>
            
            {/* Clean Video Preview Container (No background photo) */}
            <div className="aspect-[21/9] w-full max-w-5xl mx-auto bg-white/10 rounded-2xl overflow-hidden relative shadow-md group border border-white/20 backdrop-blur-xs cursor-pointer flex items-center justify-center">
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-daikin-blue text-white flex items-center justify-center shadow-md group-hover:bg-white group-hover:text-daikin-blue group-hover:scale-110 transition-all duration-300">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-current border-b-[8px] border-b-transparent ml-1" />
                </div>
                <span className="mt-3 text-white text-xs font-bold tracking-wider uppercase">Tonton Video Demo</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
      
      {/* Other Categories Section */}
      <div className="py-20 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
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
            
            {/* Accessories */}
            <FadeInUp delay={0.2}>
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
