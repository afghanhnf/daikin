import { useState, useMemo, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, MapPin, Phone, ShieldCheck, Award, 
  Play, Gift, Clock, Sparkles, ExternalLink, Search, 
  Wrench, CheckCircle2, ChevronRight, Compass, Cpu, Layers
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface ProShopDealerItem {
  id: string
  name: string
  area: string
  address: string
  phone: string
}

const proshopDealersData: ProShopDealerItem[] = [
  {
    id: '1',
    name: 'PT AIRCON PRATAMA MANDIRI',
    area: 'JAKARTA',
    address: 'Kompleks Ruko Pengampon Square Blok G No. 10-12, Mangga Besar, Jakarta Barat',
    phone: '(021) 6268888'
  },
  {
    id: '2',
    name: 'PT CHANDRA SEJAHTERA TEKNIK',
    area: 'TANGERANG',
    address: 'Jl. Jalur Sutera Kav 29D No. 36-37, Alam Sutera, Tangerang - 15320',
    phone: '(021) 53141195'
  },
  {
    id: '3',
    name: 'PT DUA PUTRA UTAMA',
    area: 'SURABAYA',
    address: 'Jl. Mayjend Sungkono No. 180, Ruko Darmo Park II Blok III No. 5-6, Surabaya',
    phone: '(031) 5678901'
  },
  {
    id: '4',
    name: 'PT FORMU PERKASA',
    area: 'BANDUNG',
    address: 'Jl. Soekarno Hatta No. 450, Ruko Bandung Center Blok B No. 8, Bandung',
    phone: '(022) 5225150'
  },
  {
    id: '5',
    name: 'PT MITRA SEJAHTERA',
    area: 'TANGERANG',
    address: 'Ruko Bulevar Gading Serpong Blok M5 No. 12, Gading Serpong, Tangerang',
    phone: '(021) 54210088'
  },
  {
    id: '6',
    name: 'PT MITRA NUSA JAYA SEJAHTERA',
    area: 'TANGERANG',
    address: 'Ruko Bulevar Gading Serpong Blok M5 No. 15, Gading Serpong, Tangerang',
    phone: '(021) 54210099'
  },
  {
    id: '7',
    name: 'PT PRADIPA CITRA UTAMA',
    area: 'JAKARTA',
    address: 'Ruko Mutiara Taman Palem Blok C No. 8, Cengkareng, Jakarta Barat',
    phone: '(021) 54350123'
  },
  {
    id: '8',
    name: 'PT SUMBER MAKMUR',
    area: 'JAKARTA',
    address: 'Jl. Suryopranoto No. 52, Petojo Selatan, Gambir, Jakarta Pusat',
    phone: '(021) 3845678'
  },
  {
    id: '9',
    name: 'PT AURA TEKNIK MANDIRI',
    area: 'JAKARTA',
    address: 'Ruko Mega Grosir Cempaka Mas Blok L No. 12, Jakarta Pusat',
    phone: '(021) 42887654'
  },
  {
    id: '10',
    name: 'PT SURYA AGUNG SERVICE MANDIRI',
    area: 'JAKARTA',
    address: 'Jl. Raya Kelapa Gading Blok LB 1 No. 5, Jakarta Utara',
    phone: '(021) 45841234'
  }
]

const proshopPillars = [
  {
    id: 'program-power',
    title: 'Program Power',
    desc: 'Perencanaan tata udara yang matang dan terintegrasi dari tahap awal desain arsitektur.'
  },
  {
    id: 'installation-power',
    title: 'Installation Power',
    desc: 'Teknik instalasi presisi menggunakan alat dan spesifikasi material standar pabrikan Daikin.'
  },
  {
    id: 'tools-power',
    title: 'Tools Power',
    desc: 'Dukungan peralatan khusus dan pengujian tingkat lanjut untuk memastikan bebas kebocoran dan kehandalan jangka panjang.'
  },
  {
    id: 'after-sales-power',
    title: 'After Sales Power',
    desc: 'Layanan purna jual resmi dengan garansi perbaikan cepat dan suku cadang original.'
  }
]

const cardBenefits = [
  { id: '1', title: '5 Years Compressor Warranty', icon: ShieldCheck },
  { id: '2', title: '1x24 Hours After Sales Service', icon: Clock },
  { id: '3', title: 'Free Gift', icon: Gift },
  { id: '4', title: 'Referral Program', icon: Award },
  { id: '5', title: 'Special Offer from Brand Partners', icon: Sparkles }
]

const projectVideos = [
  { id: '1', title: 'The Gard PIK Project Reference' },
  { id: '2', title: 'Youthful Attic Residence Project' },
  { id: '3', title: 'Modern Residential Project' },
  { id: '4', title: 'ProShop Success Story Project' }
]

export default function ProShop() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArea, setSelectedArea] = useState('Semua')

  const filteredDealers = useMemo(() => {
    return proshopDealersData.filter(d => {
      const matchesArea = selectedArea === 'Semua' || d.area === selectedArea
      const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            d.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            d.area.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesArea && matchesSearch
    })
  }, [selectedArea, searchQuery])

  return (
    <PageTransition>
      <PageMeta 
        title="Daikin ProShop - Speciality Store for Air Conditioning" 
        canonical="/services/proshop" 
      />

      {/* Modern Premium Hero Banner */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Layanan', path: '/services' }, 
              { label: 'ProShop' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-amber-400/15 text-amber-300 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6 backdrop-blur-md border border-amber-400/30 shadow-sm">
                  DAIKIN PROSHOP SPECIALIST STORE
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Apa itu <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-white font-light">
                    DAIKIN ProShop?
                  </span>
                </h1>

                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                  Daikin ProShop merupakan toko spesialis AC resmi Daikin yang menyediakan solusi tata udara terintegrasi untuk hunian dan bangunan komersial, mulai dari konsultasi, desain, instalasi, hingga perawatan.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#designer-awards"
                    className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg hover:from-amber-300 hover:to-amber-400 transition-all flex items-center gap-2 group"
                  >
                    <span>Eksplorasi Daikin ProShop</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a 
                    href="#proshop-dealers"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Temukan Dealer ProShop
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Sample Image Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/10 rounded-3xl border border-amber-400/30 backdrop-blur-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center text-white shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mb-4 text-amber-300">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-sm tracking-wider uppercase text-amber-300">Sample Image Placeholder</span>
                  <span className="text-xs text-white/70 mt-1">(Daikin ProShop Specialist Showroom)</span>
                </div>
              </FadeInUp>
            </div>

          </div>

        </div>
      </div>

      {/* Main Content Body */}
      <div className="bg-slate-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Daikin Designer Awards & Guarantee Badges Section */}
          <section id="designer-awards" className="scroll-mt-32">
            <FadeInUp className="bg-gradient-to-br from-[#0a121e] via-[#141e30] to-[#0c1626] rounded-3xl p-8 md:p-12 border border-amber-400/30 shadow-xl text-white relative overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                
                <div className="inline-flex items-center gap-2 bg-amber-400/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 border border-amber-400/40">
                  DAIKIN DESIGNER AWARDS 2026
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  GLOBAL INNOVATION <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 font-light">
                    MEETS DESIGN EXCELLENCE
                  </span>
                </h2>

                <p className="text-white/85 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto font-light">
                  Daikin ProShop bekerja sama dengan desainer interior dan arsitek terkemuka untuk menciptakan ruang yang estetis dan nyaman. Kami berkomitmen memberikan solusi tata udara terbaik dengan standar kualitas Jepang.
                </p>

                <div className="pt-2">
                  <a 
                    href="https://daikindesignerawards.daikin.co.id/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all uppercase tracking-wider"
                  >
                    <span>HUBUNGI KAMI UNTUK INFORMASI DILOKASI DAIKIN PROSHOP</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* 4 Guarantee Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                  {[
                    { label: '5 Years Compressor Warranty' },
                    { label: '1 Year General Warranty' },
                    { label: 'Certified Expert Team' },
                    { label: '1x24 Hours Response Time' }
                  ].map((b, idx) => (
                    <div key={idx} className="bg-white/10 rounded-2xl p-4 border border-white/15 backdrop-blur-md flex flex-col items-center justify-center text-center">
                      <ShieldCheck className="w-6 h-6 text-amber-300 mb-2" />
                      <span className="text-xs font-bold text-white/90">{b.label}</span>
                    </div>
                  ))}
                </div>

                {/* 2 Bottom Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a 
                    href="#proshop-dealers"
                    className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all uppercase tracking-wider"
                  >
                    CARIKAN PROSHOP DIKOTA SAYA
                  </a>
                  <a 
                    href="#proshop-dealers"
                    className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-bold text-xs rounded-xl border border-white/20 transition-all uppercase tracking-wider"
                  >
                    TEMUKAN PROSHOP TERDEKAT
                  </a>
                </div>

              </div>
            </FadeInUp>
          </section>

          {/* Mengapa Memilih Daikin ProShop? (4 Pillars Grid) */}
          <section id="mengapa-proshop" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block">
                Keunggulan Eksklusif
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">
                Mengapa Memilih Daikin ProShop?
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                4 pilar utama yang menjadikan Daikin ProShop sebagai mitra terbaik perancangan sistem pendingin udara.
              </p>
            </FadeInUp>

            {/* 4 Pillars Grid with Empty Thumbnail Placeholder Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proshopPillars.map((pillar, idx) => (
                <FadeInUp key={pillar.id} delay={idx * 0.1}>
                  <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-400/40 transition-all flex flex-col justify-between h-full group overflow-hidden">
                    
                    {/* Glassmorphic Empty Thumbnail Placeholder Box */}
                    <div className="w-full aspect-[16/9] bg-slate-900 rounded-2xl p-5 mb-6 flex items-center justify-center relative overflow-hidden border border-amber-400/20">
                      <div className="w-full h-full bg-white/10 rounded-xl border border-white/20 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center text-white">
                        <span className="font-bold text-xs tracking-wider uppercase text-amber-300">Sample Image Placeholder</span>
                        <span className="text-[10px] text-white/70 mt-1">({pillar.title})</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed mb-4">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-700">
                      <span>Standar Kualitas Daikin ProShop</span>
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    </div>

                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* 2 Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <a 
                href="#proshop-dealers"
                className="px-6 py-3.5 bg-slate-900 hover:bg-daikin-blue text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                Lokasi Showroom Daikin ProShop
              </a>
              <Link 
                to="/virtual-tour" 
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 transition-colors flex items-center gap-2"
              >
                <span>Virtual Tour Showroom</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* DAIKIN PROSHOP CARD Section */}
          <section id="proshop-card" className="scroll-mt-32">
            <FadeInUp className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-2xs">
              <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
                <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block">
                  FEATURING
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 tracking-wider uppercase">
                  DAIKIN PROSHOP CARD
                </h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Daikin ProShop Card merupakan kartu keanggotaan eksklusif bagi pelanggan Daikin ProShop yang memberikan berbagai keuntungan khusus mulai dari garansi panjang, penanganan purna jual prioritas, hingga berbagai penawaran menarik dari brand partner ternama.
                </p>
              </div>

              {/* 5 Card Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                {cardBenefits.map((b) => (
                  <div key={b.id} className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/70 text-center flex flex-col items-center justify-between h-full hover:border-amber-400 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-3 shadow-xs font-bold">
                      <b.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-charcoal">{b.title}</span>
                  </div>
                ))}
              </div>

              {/* Featured Daikin ProShop Card Video (Empty Thumbnail Placeholder Box as requested) */}
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-amber-400/30 shadow-2xl flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mb-4 shadow-lg">
                    <Play className="w-7 h-7 fill-slate-950 ml-1" />
                  </div>
                  <span className="font-extrabold text-sm tracking-wider uppercase text-amber-300">Sample Video Placeholder</span>
                  <span className="text-xs text-white/70 mt-1">(Featured Daikin ProShop Card Video)</span>
                </div>
              </div>
            </FadeInUp>
          </section>

          {/* PROSHOP DEALER Directory Table Section */}
          <section id="proshop-dealers" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block">
                Direktori Resmi
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal uppercase tracking-wide">
                PROSHOP DEALER
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Temukan alamat dealer resmi Daikin ProShop terdekat di kota Anda.
              </p>
            </FadeInUp>

            {/* Filter & Search Bar */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs mb-8 space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Search Box */}
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    placeholder="Cari ProShop Dealer, Area, atau Alamat..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/10 transition-all font-medium"
                  />
                </div>

                {/* Area Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {['Semua', 'JAKARTA', 'TANGERANG', 'BANDUNG', 'SURABAYA'].map(area => (
                    <button
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedArea === area
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-2xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {/* ProShop Table View */}
            <FadeInUp className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                      <th className="py-4 px-6 w-72">ProShop Dealer</th>
                      <th className="py-4 px-6 w-32">Area</th>
                      <th className="py-4 px-6">Alamat</th>
                      <th className="py-4 px-6 text-right w-44">No. Telepon</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredDealers.map((d) => (
                      <tr key={d.id} className="hover:bg-amber-50/30 transition-colors group">
                        <td className="py-4 px-6 font-bold text-charcoal group-hover:text-amber-700 transition-colors">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{d.name}</span>
                          </div>
                        </td>

                        <td className="py-4 px-6 font-bold text-slate-700">
                          <span className="px-2.5 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200 text-[10px] font-extrabold">
                            {d.area}
                          </span>
                        </td>

                        <td className="py-4 px-6 text-slate-600 leading-relaxed font-medium">
                          <div className="flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span>{d.address}</span>
                          </div>
                        </td>

                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          <a 
                            href={`tel:${d.phone.replace(/[^0-9]/g, '')}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-800 font-bold rounded-xl transition-all border border-slate-200/70"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>{d.phone}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-6">
                <span>Showing {filteredDealers.length} of {proshopDealersData.length} ProShop dealers</span>
                <span className="font-semibold text-slate-600">Daikin ProShop Official Specialist Network</span>
              </div>
            </FadeInUp>
          </section>

          {/* DAIKIN PROSHOP PROJECT REFERENCE VIDEO Section (4 Empty Thumbnail Placeholder Boxes as requested) */}
          <section id="project-videos" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block">
                Galeri Proyek Khusus
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-charcoal tracking-wide uppercase">
                DAIKIN PROSHOP PROJECT REFERENCE VIDEO
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Kumpulan referensi video proyek pemasangan AC komersial &amp; residensial mewah oleh Daikin ProShop.
              </p>
            </FadeInUp>

            {/* 4 Empty Video Thumbnail Placeholder Boxes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectVideos.map((vid) => (
                <FadeInUp key={vid.id}>
                  <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-400/40 transition-all flex flex-col justify-between h-full group">
                    
                    {/* Empty Video Thumbnail Placeholder Frame */}
                    <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden mb-4 border border-amber-400/20 flex flex-col items-center justify-center p-4 text-center text-white">
                      <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mb-2 shadow-md">
                        <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                      </div>
                      <span className="font-bold text-[10px] tracking-wider uppercase text-amber-300">Sample Video Placeholder</span>
                      <span className="text-[9px] text-white/70 mt-0.5">({vid.title})</span>
                    </div>

                    <div className="p-1">
                      <h4 className="font-extrabold text-xs text-charcoal group-hover:text-amber-700 transition-colors line-clamp-2">
                        {vid.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-semibold block mt-1">Daikin ProShop Indonesia Project</span>
                    </div>

                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>

        </div>
      </div>

    </PageTransition>
  )
}
