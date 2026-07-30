import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Leaf, ShieldCheck, Droplet, ThumbsUp, MapPin, Download, BookOpen, Plug, Wind, Settings, Sliders, Wifi, MoreHorizontal } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function Refrigerant() {
  const tableData = [
    { name: "R-32", odp: "0", gwp: "675", flammability: "Rendah" },
    { name: "R-410A", odp: "0", gwp: "2090", flammability: "Tidak" },
    { name: "R-134a", odp: "0", gwp: "1430", flammability: "Tidak" },
    { name: "R-404A", odp: "0", gwp: "3920", flammability: "Tidak" }
  ]

  const reasons = [
    {
      icon: <Leaf className="w-8 h-8 text-[#0097e6]" />,
      title: "Ramah Lingkungan",
      desc: "Daikin Refrigerant (khususnya R-32) memiliki nilai GWP (Global Warming Potential) yang lebih rendah dan tidak merusak fungsi ozon."
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#0097e6]" />,
      title: "Kemurnian Refrigerant",
      desc: "Daikin Refrigerant memiliki tingkat kemurnian 99.9% dan tidak dicampur zat/bahan lainnya."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0097e6]" />,
      title: "Menjaga Performa Unit",
      desc: "Menggunakan Daikin Refrigerant membantu untuk menjaga performa AC dan memperpanjang umur masa pakainya."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-[#0097e6]" />,
      title: "Tersertifikasi dan Aman",
      desc: "Telah lulus uji kelayakan dari pihak ahli (Sertifikasi MSDS dan ARI) sehingga aman digunakan."
    }
  ]

  const variants = [
    {
      id: "r32",
      title: "Tersedia dalam kemasan 3 KG & 9.5 KG",
      desc: "R-32 adalah refrigeran ramah lingkungan yang memiliki angka potensi penipisan ozon 0 (Nol) dan potensi pemanasan global yang lebih rendah.",
      image: "https://images.unsplash.com/photo-1584942368913-b88bf2b30748?q=80&w=800", // Placeholder
      reverse: false
    },
    {
      id: "r410a",
      title: "Tersedia dalam kemasan 10 KG",
      desc: "R-410A adalah refrigeran ramah lingkungan yang memiliki angka ODP 0, yang banyak digunakan untuk unit AC rumahan maupun komersial.",
      image: "https://images.unsplash.com/photo-1585250019688-69cb45c5520e?q=80&w=800", // Placeholder
      reverse: true
    },
    {
      id: "r134a",
      title: "Tersedia dalam kemasan 13.3 KG",
      desc: "Refrigerant HFC (R-134a) menawarkan efisiensi tinggi serta merupakan refrigeran alternatif yang ramah lingkungan untuk menggantikan refrigeran yang dapat merusak ozon.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800", // Placeholder
      reverse: false
    },
    {
      id: "r404a",
      title: "Tersedia dalam kemasan 10 KG",
      desc: "Refrigerant R-404A merupakan campuran HFC yang aman bagi lapisan ozon dan dapat digunakan untuk aplikasi pendingin bersuhu rendah dan komersial.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800", // Placeholder
      reverse: true
    }
  ]

  return (
    <PageTransition>
      <PageMeta title="Daikin Refrigerant - Aksesoris AC Resmi" canonical="/products/accessories/refrigerant" />

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
              <span className="text-white font-semibold">Refrigerant</span>
            </nav>
            
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                DAIKIN REFRIGERANT
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Solusi refrigeran ramah lingkungan dengan kemurnian 99.9% untuk performa maksimal unit AC Anda.
              </p>
            </FadeInUp>
          </div>

          <FadeInRight delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Thumbnail Container */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-[2rem] border border-white/30 backdrop-blur-sm overflow-hidden" />
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <FadeInUp>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              <span className="font-semibold text-charcoal">Daikin merupakan produsen AC di dunia</span> yang memproduksi mesin dan bahan refrigerannya. 
              Daikin memastikan ketersediaan suku cadang Daikin part original, agar mesin anda tetap dingin dengan suku cadang original Daikin untuk meminimalisir kemungkinan kebocoran.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Table Section */}
      <div className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <FadeInLeft className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0097e6] text-white">
                      <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">Refrigerant</th>
                      <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">ODP</th>
                      <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">GWP</th>
                      <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">Flammability</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {tableData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}>
                        <td className="py-4 px-6 font-semibold text-charcoal border-t border-gray-100">{row.name}</td>
                        <td className="py-4 px-6 border-t border-gray-100">{row.odp}</td>
                        <td className="py-4 px-6 border-t border-gray-100">{row.gwp}</td>
                        <td className="py-4 px-6 border-t border-gray-100">{row.flammability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeInLeft>

          <FadeInRight delay={0.2} className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-charcoal mb-4">Keterangan</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-daikin-blue min-w-[40px]">ODP:</span>
                  <span>Ozone Depletion Potential (Potensi Penipisan Ozon)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-daikin-blue min-w-[40px]">GWP:</span>
                  <span>Global Warming Potential (Potensi Pemanasan Global)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-daikin-blue min-w-[40px] whitespace-nowrap">Flammability:</span>
                  <span>Tingkat Kemudahan Terbakar</span>
                </li>
              </ul>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Mengapa Daikin Refrigerant */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0097e6] uppercase tracking-wide">
              Mengapa Harus Menggunakan Daikin Refrigerant?
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {reasons.map((reason, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>

      {/* Variants List */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-24 py-12">
          {variants.map((item, idx) => (
            <div key={item.id} className="grid md:grid-cols-2 gap-12 items-center group">
              <FadeInLeft delay={0.1} className={item.reverse ? "md:order-2" : "md:order-1"}>
                <div className="bg-white rounded-3xl p-8 aspect-square flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                  <div className="w-full h-full bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                    <span className="text-gray-400 font-medium">Image Placeholder</span>
                  </div>
                </div>
              </FadeInLeft>
              <FadeInRight delay={0.2} className={item.reverse ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </FadeInRight>
            </div>
          ))}
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
                    {/* Placeholder for certificate/brochure thumbnail */}
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
                  <Plug className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Pipa AC</h3>
                  <p className="text-gray-500 text-xs">Copper & Flare</p>
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
