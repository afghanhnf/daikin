import { useState, useMemo } from 'react'
import { 
  Building2, Phone, MapPin, Search, ShieldCheck, 
  Award, UserCheck, Compass, CheckCircle2, ChevronRight,
  ExternalLink, Sparkles, Filter, Grid, List, ArrowRight
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'

interface DealerItem {
  id: string
  city: string
  name: string
  address: string
  phone: string
  verified: boolean
}

const vrvDealerData: DealerItem[] = [
  {
    id: 'medan-1',
    city: 'Medan',
    name: 'PT FREN COOL GROUP',
    address: 'Jl Tuan Guru Suman, Tembung, Kec. Percut Sei Tuan, Kabupaten Deli Serdang - Sumatera Utara 20371',
    phone: '0811-6178-800',
    verified: true
  },
  {
    id: 'batam-1',
    city: 'Batam',
    name: 'CV TOPCOOL SERVIS BATAM',
    address: 'Pasar Mega Legenda, Jalan Mega Legenda, Baloi Permai, Kec. Batam Kota, Kota Batam',
    phone: '0811-7008-847',
    verified: true
  },
  {
    id: 'batam-2',
    city: 'Batam',
    name: 'CV TECHNOAIR SUNJAYA',
    address: 'Jl Alam Raya II, Belian, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29433',
    phone: '0812-7721-921',
    verified: true
  },
  {
    id: 'batam-3',
    city: 'Batam',
    name: 'PT WAHANA BINTANG LIMA',
    address: 'Jl Brigjen Katamso, Ruko Senawangi Asri Blok C No.10, Buliang, Kec. Batu Aji, Kota Batam, Kepulauan Riau 29424',
    phone: '0812-6132-584',
    verified: true
  },
  {
    id: 'jakarta-1',
    city: 'DKI Jakarta',
    name: 'CV AOYAMA TEKNIK MANDIRI',
    address: 'Jl Kayumanis Barat Raya No.59 Rt.01/05 Kayumanis Matraman Jakarta Timur',
    phone: '0813-1828-3635',
    verified: true
  },
  {
    id: 'bogor-1',
    city: 'Bogor',
    name: 'CV MANDALA MAHARDIKA',
    address: 'Jl Sirnagalih RT 2 Rw 7, Kelurahan Loji, Kecamatan Bogor Barat, Bogor 16117',
    phone: '0853-3611-1168',
    verified: true
  },
  {
    id: 'surabaya-1',
    city: 'Surabaya',
    name: 'PT DAIKIN VRV CENTER JAWA TIMUR',
    address: 'Jl Raya Darmo Permai II No. 88, Sambikerep, Kota Surabaya - Jawa Timur 60189',
    phone: '0812-3456-7890',
    verified: true
  },
  {
    id: 'bandung-1',
    city: 'Bandung',
    name: 'PT SINAR KLIMA UTAMA',
    address: 'Jl Soekarno Hatta No. 450, Batununggal, Kota Bandung - Jawa Barat 40266',
    phone: '0811-2233-445',
    verified: true
  },
  {
    id: 'bali-1',
    city: 'Bali',
    name: 'CV BALI AIRCONDITIONING PRO',
    address: 'Jl Sunset Road No. 100, Kuta, Kabupaten Badung - Bali 80361',
    phone: '0819-9988-7766',
    verified: true
  }
]

const serviceRoles = [
  {
    title: 'SALES ENGINEER',
    subtitle: 'Konsultasi Varian Produk & Spesifikasi',
    description: 'Pengetahuan varian produk lengkap yang siap membantu solusi tata udara sesuai kebutuhan bangunan.',
    icon: UserCheck
  },
  {
    title: 'DESIGN ENGINEER',
    subtitle: 'Perancangan Heat Load & Kelistrikan',
    description: 'Merancang desain AC keseluruhan dengan pertimbangan kapasitas beban ruang, heat load, pasokan tinggi kelistrikan dan lainnya.',
    icon: Compass
  },
  {
    title: 'PROJECT SUPERVISION',
    subtitle: 'Pengawasan Instalasi Standar Pabrikan',
    description: 'Keahlian tinggi pada aspek instalasi yang juga melakukan pengawasan untuk memastikan proses instalasi sesuai standar tinggi.',
    icon: ShieldCheck
  }
]

const cities = ['Semua Kota', 'Medan', 'Batam', 'DKI Jakarta', 'Bogor', 'Surabaya', 'Bandung', 'Bali']

export default function VRVDealer() {
  const [selectedCity, setSelectedCity] = useState('Semua Kota')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table')

  const filteredDealers = useMemo(() => {
    return vrvDealerData.filter(dealer => {
      const matchesCity = selectedCity === 'Semua Kota' || dealer.city === selectedCity
      const matchesSearch = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dealer.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dealer.city.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCity && matchesSearch
    })
  }, [selectedCity, searchQuery])

  return (
    <PageTransition>
      <PageMeta 
        title="VRV Certified Dealer - PT Daikin Airconditioning Indonesia" 
        canonical="/services/vrv-dealer" 
      />

      {/* Premium Hero Banner (Dark VRV Gold Accent Tone) */}
      <div className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-[#0c121e] via-[#151d2a] to-[#0a101b] text-white">
        <AirParticles color="white" />
        
        {/* Subtle metallic gold grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Layanan', path: '/services' }, 
              { label: 'VRV Certified Dealer' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-amber-400/15 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-amber-400/30 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> VRV CERTIFIED DEALER
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  VRV Certified <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-white font-light">
                    Dealer Network
                  </span>
                </h1>
                
                <div className="text-xs font-bold uppercase tracking-widest text-amber-400/90 mb-6">
                  PT DAIKIN AIRCONDITIONING INDONESIA
                </div>

                <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
                  Jaringan resmi dealer komersial tersertifikasi Daikin Indonesia. Menghadirkan jaminan keahlian tinggi dari tahap konsultasi, perancangan desain, instalasi presisi, hingga layanan purna jual untuk sistem pendingin udara VRV.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#dealer-directory"
                    className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg hover:from-amber-300 hover:to-amber-400 transition-all flex items-center gap-2 group"
                  >
                    <span>Cari VRV Certified Dealer</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a 
                    href="#layanan-keahlian"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Standar Layanan &amp; Tenaga Ahli
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Side Empty Thumbnail Image Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/10 rounded-2xl border border-amber-400/30 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white shadow-2xl">
                  <span className="font-bold text-sm tracking-wider uppercase text-amber-300 opacity-90">Sample Image Placeholder</span>
                  <span className="text-xs text-white/70 mt-1">(VRV Certified Dealer PT Daikin Airconditioning Indonesia)</span>
                </div>
              </FadeInUp>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Body */}
      <div className="bg-slate-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Deskripsi Section (Z-Pattern Card) */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-2xs">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Placeholder Image Card */}
              <div className="lg:col-span-6">
                <FadeInUp>
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-800 to-[#101827] rounded-2xl p-6 border border-amber-400/20 shadow-md flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
                    <div className="w-full h-full bg-white/10 rounded-xl border border-white/15 backdrop-blur-md flex flex-col items-center justify-center p-6">
                      <span className="font-bold text-sm tracking-wider uppercase text-amber-300">Sample Image Placeholder</span>
                      <span className="text-xs text-white/70 mt-1">(Sertifikasi Tenaga Ahli VRV Daikin Indonesia)</span>
                    </div>
                  </div>
                </FadeInUp>
              </div>

              {/* Right Description Content */}
              <div className="lg:col-span-6 space-y-6">
                <FadeInUp delay={0.1}>
                  <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
                    Jaminan Kualitas Komersial
                  </span>
                  
                  <h2 className="text-3xl font-bold text-charcoal">
                    Tentang <span className="text-daikin-blue">VRV Certified Dealer</span>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong className="text-charcoal font-semibold">VRV Certified Dealer</strong> merupakan hak khusus bagi para dealer yang tergabung didalamnya untuk menawarkan dan mendistribusikan produk VRV DAIKIN. Setiap dealer dalam daftar ini memiliki tenaga ahli tersertifikasi sesuai kompetensinya setelah melalui serangkaian pengujian dengan standar perusahaan.
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    Memastikan tiap pengguna mendapatkan layanan menyeluruh untuk mulai dari konsultasi produk, dukungan rancang desain AC, proses instalasi terbaik hingga layanan purna jual dalam standar tinggi.
                  </p>

                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">Tenaga Ahli Tersertifikasi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">Garansi Pabrikan Resmi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">Desain Heat Load Presisi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">Pengawasan Proyek Khusus</span>
                    </div>
                  </div>
                </FadeInUp>
              </div>

            </div>
          </section>

          {/* Layanan Section (3 Roles Cards) */}
          <section id="layanan-keahlian" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
                Standar Layanan Komprehensif
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                3 Pilar Tenaga Ahli Tersertifikasi
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Percayakan kebutuhan solusi tata udara bangunan komersial pada VRV Certified Dealer. Selain purna jual terbaik, kami memberikan layanan menyeluruh meliputi tiap tahap dengan tenaga ahli tersertifikasi sesuai standar DAIKIN.
              </p>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {serviceRoles.map((role, idx) => (
                <FadeInUp key={role.title} delay={idx * 0.1}>
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden">
                    
                    {/* Glassmorphic Thumbnail Placeholder */}
                    <div className="w-full aspect-[16/10] bg-slate-900 p-5 flex items-center justify-center relative overflow-hidden">
                      <div className="w-full h-full bg-white/10 rounded-xl border border-white/20 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center text-white">
                        <span className="font-bold text-xs tracking-wider uppercase text-amber-300 opacity-90">Sample Image Placeholder</span>
                        <span className="text-[10px] opacity-70 mt-1">({role.title})</span>
                      </div>
                    </div>

                    {/* Role Description Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">
                            <role.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Keahlian Khusus</span>
                            <h3 className="text-lg font-extrabold text-charcoal group-hover:text-daikin-blue transition-colors">
                              {role.title}
                            </h3>
                          </div>
                        </div>

                        <div className="text-xs font-semibold text-daikin-blue mb-2">{role.subtitle}</div>
                        <p className="text-slate-600 text-xs leading-relaxed mb-6">
                          {role.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                        <span>Standar Sertifikasi Daikin</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>

                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>

          {/* List VRV Certified Dealer Directory Table & Cards Section */}
          <section id="dealer-directory" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block">
                Direktori Resmi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                LIST VRV CERTIFIED DEALER
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Cari dan temukan daftar VRV Certified Dealer resmi Daikin terdekat di kota Anda.
              </p>
            </FadeInUp>

            {/* Filter & Search Bar */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs mb-8 space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Search Input */}
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    placeholder="Cari VRV Certified Dealer atau Alamat..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/10 transition-all font-medium"
                  />
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center gap-2 self-end md:self-auto">
                  <span className="text-xs text-slate-400 font-medium mr-2">Tampilan:</span>
                  <button 
                    onClick={() => setViewMode('table')}
                    className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
                      viewMode === 'table' 
                        ? 'bg-daikin-blue text-white border-daikin-blue shadow-xs' 
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                    title="Tampilan Tabel"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('cards')}
                    className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
                      viewMode === 'cards' 
                        ? 'bg-daikin-blue text-white border-daikin-blue shadow-xs' 
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                    title="Tampilan Kartu"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* City Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                {cities.map(city => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      selectedCity === city
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-2xs font-bold'
                        : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Table View */}
            {viewMode === 'table' && (
              <FadeInUp className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-daikin-blue to-daikin-blue-dark text-white text-xs font-bold uppercase tracking-wider">
                        <th className="py-4 px-6">Kota</th>
                        <th className="py-4 px-6">VRV Certified Dealer</th>
                        <th className="py-4 px-6">Alamat Lengkap</th>
                        <th className="py-4 px-6 text-right">Nomor Telepon</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {filteredDealers.map((dealer) => (
                        <tr key={dealer.id} className="hover:bg-slate-50/80 transition-colors group">
                          <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">
                            <span className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full border border-amber-200 font-extrabold text-[11px]">
                              {dealer.city}
                            </span>
                          </td>
                          <td className="py-4 px-6 font-bold text-charcoal group-hover:text-daikin-blue transition-colors">
                            <div className="flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-daikin-blue shrink-0" />
                              <span>{dealer.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-slate-600 leading-relaxed max-w-md">
                            {dealer.address}
                          </td>
                          <td className="py-4 px-6 text-right whitespace-nowrap">
                            <a 
                              href={`tel:${dealer.phone.replace(/[^0-9]/g, '')}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-emerald-500 hover:text-white text-slate-800 font-bold rounded-xl transition-colors border border-slate-200/70"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>{dealer.phone}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeInUp>
            )}

            {/* Card Grid View */}
            {viewMode === 'cards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDealers.map((dealer, idx) => (
                  <FadeInUp key={dealer.id} delay={idx * 0.05}>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-400/40 transition-all flex flex-col justify-between h-full group">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-amber-50 text-amber-700 font-extrabold text-xs rounded-full border border-amber-200">
                            {dealer.city}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> VRV Certified
                          </span>
                        </div>

                        <h3 className="text-base font-extrabold text-charcoal mb-3 group-hover:text-daikin-blue transition-colors">
                          {dealer.name}
                        </h3>

                        <p className="text-slate-600 text-xs leading-relaxed mb-6 flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span>{dealer.address}</span>
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <a 
                          href={`tel:${dealer.phone.replace(/[^0-9]/g, '')}`}
                          className="w-full py-2.5 bg-slate-900 hover:bg-daikin-blue text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-2xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Hubungi Dealer ({dealer.phone})</span>
                        </a>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            )}

            {/* Empty Search Result */}
            {filteredDealers.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 p-8">
                <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-charcoal mb-2">Dealer Tidak Ditemukan</h3>
                <p className="text-xs text-slate-500 mb-6">Tidak ada VRV Certified Dealer yang sesuai dengan kriteria "{searchQuery}".</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCity('Semua Kota'); }}
                  className="px-4 py-2 bg-daikin-blue text-white font-bold text-xs rounded-xl"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </section>

        </div>
      </div>

    </PageTransition>
  )
}
