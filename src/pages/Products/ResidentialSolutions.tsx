import { Link } from 'react-router-dom'
import { ChevronRight, Wind, Shield, Zap, Snowflake, Home, Factory, ArrowRight, CheckCircle2, ChevronDown, Wrench, Settings, BookOpen, MonitorPlay, Building2, MapPin } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

export default function ResidentialSolutions() {
  return (
    <PageTransition>
      <PageMeta title="AC Hunian & Premium - Daikin" canonical="/products/residential" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-daikin-blue-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-transparent z-10" />
          {/* Family Image Placeholder */}
          <div className="w-full h-full flex items-center justify-end pr-20 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070')] bg-cover bg-center opacity-50 mix-blend-overlay" />
            <span className="text-white font-bold uppercase tracking-widest text-xl opacity-30 hidden md:block relative z-20">Family Kitchen<br/>Image Placeholder</span>
          </div>
        </div>
        
        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90">Produk</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">AC Hunian</span>
          </nav>
          
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              AC HUNIAN
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow">
              Pilihan AC single split, multi split, dan air purifier yang didesain untuk kenyamanan ruangan Anda. Nikmati udara bersih, hemat energi, dan desain yang elegan untuk berbagai jenis hunian mulai dari apartemen hingga rumah premium.
            </p>
          </FadeInUp>
        </div>
      </div>
      
      {/* Categories Content */}
      <div className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-daikin-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-daikin-blue-light/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-32 relative z-10">
          
          {/* Single Split - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
            <FadeInLeft>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-daikin-blue-light to-daikin-blue rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700" />
                <div className="w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Living Room Single Split<br/>Image Placeholder</span>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-daikin-blue transition-colors">Single Split</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Sistem tipe AC single split DAIKIN memberikan performa yang baik, energi yang efisien dan kenyamanan dalam ruang ideal untuk set-up rumah Anda. Rasakan kenyamanan maksimal dengan pengeluaran energi seminimal mungkin yang sejalan dengan gaya hidup ramah lingkungan.
                </p>
                <Link to="/products/residential/single-split" className="inline-flex items-center gap-2.5 bg-white text-daikin-blue border-2 border-daikin-blue px-7 py-3 rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs group">
                  Lihat Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInRight>
          </div>
          
          {/* Multi Split - Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
            <FadeInLeft className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-daikin-blue transition-colors">Multi Split</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Sistem pendingin udara tipe multi split DAIKIN menawarkan kinerja yang unggul, efisiensi energi, dan kenyamanan dalam gaya hidup sesuai dengan rumah impian. Fleksibilitas pemasangan dengan banyak pilihan unit indoor yang terhubung ke satu unit outdoor, ideal untuk ruangan dengan ruang outdoor terbatas.
                </p>
                <Link to="/products/residential/multi-split" className="inline-flex items-center gap-2.5 bg-white text-daikin-blue border-2 border-daikin-blue px-7 py-3 rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs group">
                  Lihat Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInLeft>
            <FadeInRight className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-daikin-blue to-daikin-blue-dark rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700" />
                <div className="w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-sm text-center">Bedroom Multi Split<br/>Image Placeholder</span>
                </div>
              </div>
            </FadeInRight>
          </div>
          
          {/* Air Purifier - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
            <FadeInLeft>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#005a87] to-[#0097e6] rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700" />
                <div className="w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Room Air Purifier<br/>Image Placeholder</span>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-daikin-blue transition-colors">Air Purifier</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Pembersih udara DAIKIN terbukti efektif mengurangi debu, bau, asap, bakteri, dan gangguan alergi lainnya yang tidak diinginkan. Anda bisa menyegarkan udara ruangan secara rutin agar hidup lebih sehat dengan teknologi Streamer eksklusif kami.
                </p>
                <Link to="/products/residential/air-purifier" className="inline-flex items-center gap-2.5 bg-white text-daikin-blue border-2 border-daikin-blue px-7 py-3 rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs group">
                  Lihat Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInRight>
          </div>
          
          {/* VRV Home Series - Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
            <FadeInLeft className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-daikin-blue transition-colors">VRV Home Series</h2>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-white bg-gradient-to-r from-daikin-blue to-daikin-blue-dark rounded-full tracking-wider">HUNIAN PREMIUM</span>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Solusi AC sentral premium untuk hunian mewah. Sistem VRV Home menawarkan desain unit indoor yang elegan dan tak terlihat (ducted), teknologi inverter canggih, dan kendali individual untuk kenyamanan sempurna di setiap ruangan rumah Anda.
                </p>
                <Link to="/products/residential/vrv-home" className="inline-flex items-center gap-2.5 bg-white text-daikin-blue border-2 border-daikin-blue px-7 py-3 rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs group">
                  Lihat Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInLeft>
            <FadeInRight className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700" />
                <div className="w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-sm text-center">VRV Home System<br/>Image Placeholder</span>
                </div>
              </div>
            </FadeInRight>
          </div>
          
          {/* Super Multi NX R32 - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
            <FadeInLeft>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700" />
                <div className="w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-sm text-center">Super Multi NX<br/>Image Placeholder</span>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-daikin-blue transition-colors">Super Multi NX R32</h2>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-white bg-gradient-to-r from-daikin-blue to-daikin-blue-dark rounded-full tracking-wider">HUNIAN PREMIUM</span>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Pilihan AC multi split premium dengan refrigeran R32 ramah lingkungan. Super Multi NX memberikan efisiensi luar biasa untuk menghubungkan hingga 5 unit indoor hanya dengan 1 unit outdoor, menjaga estetika eksterior hunian Anda tanpa mengorbankan performa.
                </p>
                <Link to="/products/residential/super-multi-nx" className="inline-flex items-center gap-2.5 bg-white text-daikin-blue border-2 border-daikin-blue px-7 py-3 rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs group">
                  Lihat Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInRight>
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
                Pusat Solusi Hunian Anda
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Lihat bagaimana inovasi teknologi AC Daikin dirancang untuk menghadirkan kesejukan sempurna, udara bersih, dan kenyamanan optimal di rumah Anda.
              </p>
            </div>
            
            <div className="aspect-[21/9] w-full max-w-5xl mx-auto bg-black/40 rounded-3xl overflow-hidden relative shadow-2xl group border border-white/10 backdrop-blur-sm cursor-pointer flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/images/hero/slider-emura.jpeg')] bg-cover bg-center opacity-40 transition-transform duration-1000 group-hover:scale-105" />
              
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
      
      {/* Other Categories Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">Kategori Lainnya</h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Commercial Solutions */}
            <FadeInUp delay={0.1}>
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
              <Link to="/services/ishop" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
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
