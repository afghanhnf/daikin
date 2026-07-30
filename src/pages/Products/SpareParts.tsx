import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Settings, Book, FileText, Search, ShieldCheck, MapPin, Phone, Truck, Wrench, PlayCircle, Download, ArrowRight, Filter, Store, Navigation, ChevronDown, Check, Home, Building2, BookOpen, MonitorPlay } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

export default function SpareParts() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSeries, setSelectedSeries] = useState('Semua')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [partPage, setPartPage] = useState(1)
  const partsPerPage = 9
  
  const [dpsSearch, setDpsSearch] = useState('')
  const [dpsProvince, setDpsProvince] = useState('Semua')
  const [dpsPage, setDpsPage] = useState(1)
  const dpsPerPage = 12

  // QUICK LINKS
  const quickLinks = [
    { icon: <Book className="w-6 h-6" />, label: "Buku Katalog", href: "/products/e-catalogue" },
    { icon: <FileText className="w-6 h-6" />, label: "Pricelist", href: "/services/technical-data" },
    { icon: <Wrench className="w-6 h-6" />, label: "Petunjuk Penggunaan", href: "/solutions/maintenance-tips" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Sertifikasi", href: "/profile/tkdn" },
    { icon: <Download className="w-6 h-6" />, label: "Brosur", href: "/products/e-catalogue" },
    { icon: <PlayCircle className="w-6 h-6" />, label: "Video Tutorial", href: "/insights/training" },
  ]

  const seriesList = ["Semua", "FLASH INVERTER", "LITE", "SMS", "URUSARA"]
  const categoryList = ["COMPRESSOR ASSY.", "EVAPORATOR", "FAN MOTOR INDOOR", "PCB MAIN INDOOR", "REMOTE CONTROLLER"]

  const sparePartsData = [
    { id: 1, image: "https://images.unsplash.com/photo-1592503254549-ceb5c1081699?q=80&w=800", partCode: "RKQ60SVM4", model: "PCB Assy Main", series: "FLASH INVERTER", category: "PCB MAIN INDOOR", desc: "Main control board untuk unit indoor Split Wall." },
    { id: 2, image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800", partCode: "FTKQ25SVM4", model: "Fan Motor DC", series: "URUSARA", category: "FAN MOTOR INDOOR", desc: "Motor kipas DC presisi tinggi dengan efisiensi energi optimal." },
    { id: 3, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800", partCode: "RXQ10AYM", model: "Compressor Inverter", series: "FLASH INVERTER", category: "COMPRESSOR ASSY.", desc: "Kompresor scroll inverter orisinal Daikin." },
    { id: 4, image: "https://images.unsplash.com/photo-1592503254549-ceb5c1081699?q=80&w=800", partCode: "FTNE15JEV14", model: "Evaporator Coil", series: "LITE", category: "EVAPORATOR", desc: "Coil evaporator dengan lapisan anti-karat." },
    { id: 5, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", partCode: "BRC1E63", model: "Remote Controller Wireless", series: "SMS", category: "REMOTE CONTROLLER", desc: "Remote control wireless orisinal." },
    { id: 6, image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800", partCode: "FTKC25TVM4", model: "Fan Motor AC", series: "LITE", category: "FAN MOTOR INDOOR", desc: "Motor kipas AC standar." },
    { id: 7, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800", partCode: "JT160BCBY1L", model: "Scroll Compressor", series: "SMS", category: "COMPRESSOR ASSY.", desc: "Kompresor scroll performa tinggi untuk AC komersial." },
    { id: 8, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", partCode: "BRC1H62W", model: "Madoka Wired Remote", series: "URUSARA", category: "REMOTE CONTROLLER", desc: "Remote control berkabel dengan desain elegan dan modern." },
    { id: 9, image: "https://images.unsplash.com/photo-1592503254549-ceb5c1081699?q=80&w=800", partCode: "KRP4A51", model: "Wiring Adaptor", series: "FLASH INVERTER", category: "PCB MAIN INDOOR", desc: "Adaptor PCB untuk koneksi sistem eksternal." },
    { id: 10, image: "https://images.unsplash.com/photo-1592503254549-ceb5c1081699?q=80&w=800", partCode: "EKRP1C2", model: "PCB Demand Control", series: "LITE", category: "PCB MAIN INDOOR", desc: "Modul kontrol permintaan energi." },
  ]

  const dpsData = [
    { id: 1, name: "CV. PESONA MITRATAMA ELEKTRINDO", province: "Jawa Barat", address: "Jl. Raya Deparpostel No.5 RT.001 RW.002 Jati Luhur, Jatiasih Kota Bekasi - Jawa Barat" },
    { id: 2, name: "CV. CENTRAL JAYA TEKNIK", province: "Banten", address: "Ruko Bukit Dago AA 4 No. 17 Rawa Kalong, Serpong" },
    { id: 3, name: "CV. PRONINDO DAWISHA TEKNIK", province: "Banten", address: "Jl. Raden Patah No.71B Ciledug, Tangerang 15153" },
    { id: 4, name: "CV. PARADISE JAYA AIRCON", province: "DKI Jakarta", address: "Ruko Paradise Raya Barat II Blok C No.35 Sunter Jakarta Utara 14350" },
    { id: 5, name: "PRO TECHNIK", province: "DKI Jakarta", address: "Jl. Nurul No. 37 Komp. DPR I, Kebon Jeruk, Jakarta Barat" },
    { id: 6, name: "UD. HARCO ELEKTRONIK", province: "Jawa Tengah", address: "Jl Raya Kudus-Pati Km 8 Kudus" },
    { id: 7, name: "CV SYAILENDRA ELEKTRONIK", province: "Jawa Tengah", address: "Jl. Tlogo Biru II No.28 Kelurahan Tlogosari Kulon, Kecamaran Pedurungan, Semarang" },
    { id: 8, name: "CV. DUTA BARU TEHNIK", province: "Kalimantan Selatan", address: "Jl. Pramuka Komp. Semanda 2 No.43 RT.020 RW.002 Sungai Lulut - Banjarmasin Timur Banjarmasin – Kalimantan Selatan" },
    { id: 9, name: "CV. MITRA DUTA", province: "Jawa Timur", address: "Jl. Trijaya IV No.02 Kel.Klegen, Kec.Kartoharjo - Madiun / Slamet Riyadi No.42 Madiun" },
    { id: 10, name: "CV. PANCA JAYA SENTOSA", province: "Jawa Timur", address: "Perum Pertama Siwalan Indah Blok G4-12 RT 022 RW 006, Siwalanpanji, Buduran Sidoarjo" },
    { id: 11, name: "PT. SEJAHTERA TEKNIK", province: "DKI Jakarta", address: "Jl. Mangga Dua Raya No.10, Jakarta Pusat" },
    { id: 12, name: "CV. BERKAH AIRCON", province: "Jawa Barat", address: "Jl. Soekarno Hatta No.45, Bandung" },
    { id: 13, name: "UD. MAJU JAYA AC", province: "Banten", address: "Jl. Raya Serpong KM 7, Tangerang Selatan" },
    { id: 14, name: "CV. SURYA DINGIN", province: "Jawa Tengah", address: "Jl. Pemuda No.112, Surakarta" },
  ]

  const provinces = ["Semua", "DKI Jakarta", "Jawa Barat", "Banten", "Jawa Tengah", "Jawa Timur", "Kalimantan Selatan"]

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat))
    } else {
      setSelectedCategories([...selectedCategories, cat])
    }
    setPartPage(1)
  }

  const filteredParts = useMemo(() => {
    return sparePartsData.filter(part => {
      const search = searchTerm.toLowerCase()
      const matchesSearch = part.model.toLowerCase().includes(search) || part.desc.toLowerCase().includes(search) || part.partCode.toLowerCase().includes(search)
      const matchesSeries = selectedSeries === 'Semua' || part.series === selectedSeries
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(part.category)
      return matchesSearch && matchesSeries && matchesCategory
    })
  }, [searchTerm, selectedSeries, selectedCategories])

  const totalPartPages = Math.ceil(filteredParts.length / partsPerPage)
  const paginatedParts = filteredParts.slice((partPage - 1) * partsPerPage, partPage * partsPerPage)

  const filteredDps = useMemo(() => {
    return dpsData.filter(dps => {
      const matchesSearch = dps.name.toLowerCase().includes(dpsSearch.toLowerCase()) || dps.address.toLowerCase().includes(dpsSearch.toLowerCase())
      const matchesProvince = dpsProvince === 'Semua' || dps.province === dpsProvince
      return matchesSearch && matchesProvince
    })
  }, [dpsSearch, dpsProvince])

  const totalDpsPages = Math.ceil(filteredDps.length / dpsPerPage)
  const paginatedDps = filteredDps.slice((dpsPage - 1) * dpsPerPage, dpsPage * dpsPerPage)

  return (
    <PageTransition>
      <PageMeta title="Spare Parts Resmi Daikin" canonical="/products/spare-parts" />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-daikin-blue-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-transparent z-10" />
          <div className="w-full h-full flex items-center justify-end pr-20 relative">
            <div className="absolute inset-0 bg-[url('/images/category_ac/spareparts.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
          </div>
        </div>

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-white/50 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/70">Produk</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Spare Parts</span>
          </nav>

          <FadeInUp>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-daikin-blue bg-white rounded-full tracking-wider">SUKU CADANG ASLI</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              SPARE <span className="text-daikin-blue-light">PARTS</span> AC
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow">
              Suku cadang orisinal Daikin menjamin performa jangka panjang dan efisiensi energi yang tiada duanya untuk investasi pendingin ruangan Anda.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="py-12 bg-white border-b border-gray-100 relative z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            {quickLinks.map((link, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <Link to={link.href} className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-daikin-blue transition-colors text-center w-24 leading-tight">{link.label}</span>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>

      {/* Zig Zag Highlights */}
      <div className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-24">

          {/* Suku Cadang */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
            <FadeInLeft className="order-2 lg:order-1 relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200" alt="Suku Cadang" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-daikin-blue text-white p-8 rounded-3xl shadow-xl w-64 hidden md:block">
                <Settings className="w-10 h-10 mb-4 opacity-50" />
                <h3 className="text-xl font-bold mb-2">Presisi Tinggi</h3>
                <p className="text-white/80 text-sm">Standar pabrikan Jepang menjamin ketepatan komponen.</p>
              </div>
            </FadeInLeft>
            <FadeInRight className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-daikin-blue transition-colors duration-300">Suku Cadang Asli</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Gunakan selalu suku cadang orisinal Daikin untuk mempertahankan efisiensi operasional dan mencegah kerusakan beruntun pada sistem sentral unit Anda. Setiap part kami dirancang untuk daya tahan maksimal.
              </p>
            </FadeInRight>
          </div>

          {/* Pengiriman */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
            <FadeInLeft className="order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-daikin-blue transition-colors duration-300">Pengiriman Cepat</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Dengan jaringan distribusi nasional yang luas, suku cadang yang Anda butuhkan dapat dikirim secara kilat langsung ke titik lokasi, memastikan waktu operasional terhenti minimal (minimum downtime).
              </p>
              <div className="hidden">
                {/* Button removed as per request: Cek Status Pengiriman */}
              </div>
            </FadeInLeft>
            <FadeInRight className="order-2 relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200" alt="Pengiriman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl w-64 border border-gray-100 hidden md:block">
                <Truck className="w-10 h-10 mb-4 text-daikin-blue" />
                <h3 className="text-xl font-bold mb-2 text-charcoal">Jaringan Luas</h3>
                <p className="text-gray-500 text-sm">Menjangkau seluruh wilayah Indonesia dengan aman.</p>
              </div>
            </FadeInRight>
          </div>

          {/* Layanan Purna Jual */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
            <FadeInLeft className="order-2 lg:order-1 relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200" alt="Layanan Purna Jual" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-charcoal text-white p-8 rounded-3xl shadow-xl w-64 hidden md:block">
                <ShieldCheck className="w-10 h-10 mb-4 opacity-50" />
                <h3 className="text-xl font-bold mb-2">Garansi Resmi</h3>
                <p className="text-white/80 text-sm">Dukungan komprehensif setelah masa pemasangan.</p>
              </div>
            </FadeInLeft>
            <FadeInRight className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-daikin-blue transition-colors duration-300">Layanan Purna Jual</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Teknisi ahli kami siap memberikan diagnosa yang akurat serta layanan perbaikan berstandar internasional. Keandalan jangka panjang unit Anda adalah komitmen utama kami.
              </p>
              <button className="flex items-center gap-3 text-daikin-blue font-semibold hover:text-daikin-blue-dark group-hover:translate-x-2 transition-all">
                Hubungi Kami <ArrowRight className="w-5 h-5" />
              </button>
            </FadeInRight>
          </div>

        </div>
      </div>

      {/* Sparepart List (Cards with Search/Filter) */}
      <div className="py-24 bg-gray-50 relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">List Sparepart</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Temukan sparepart original Daikin yang Anda butuhkan untuk kenyamanan maksimal.</p>
          </FadeInUp>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="w-full lg:w-1/4 shrink-0">
              <FadeInUp delay={0.1} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
                
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-charcoal mb-3">Search Model</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Cari..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-daikin-blue/50 focus:border-daikin-blue transition-all bg-gray-50 text-sm"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setPartPage(1)
                      }}
                    />
                  </div>
                </div>

                {/* Series Dropdown */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-charcoal mb-3">Select Series Name</label>
                  <div className="relative group">
                    <select
                      className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-daikin-blue/50 focus:border-daikin-blue transition-all bg-gray-50 text-sm cursor-pointer hover:border-daikin-blue"
                      value={selectedSeries}
                      onChange={(e) => {
                        setSelectedSeries(e.target.value)
                        setPartPage(1)
                      }}
                    >
                      {seriesList.map(series => (
                        <option key={series} value={series}>{series}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-daikin-blue transition-colors" />
                  </div>
                </div>

                {/* Categories Checkboxes */}
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-4">Category</label>
                  <div className="space-y-3">
                    {categoryList.map(cat => (
                      <div key={cat} className="flex items-start gap-3 cursor-pointer group" onClick={() => toggleCategory(cat)}>
                        <div className={`w-5 h-5 rounded border flex shrink-0 items-center justify-center transition-colors mt-0.5 ${
                          selectedCategories.includes(cat) ? 'bg-daikin-blue border-daikin-blue text-white' : 'border-gray-300 bg-gray-50 group-hover:border-daikin-blue'
                        }`}>
                          {selectedCategories.includes(cat) && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className={`text-sm transition-colors select-none ${
                          selectedCategories.includes(cat) ? 'text-daikin-blue font-semibold' : 'text-gray-600 group-hover:text-charcoal'
                        }`}>
                          {cat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </FadeInUp>
            </div>

            {/* Grid */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedParts.length > 0 ? paginatedParts.map((part, idx) => (
                  <FadeInUp key={part.id} delay={idx * 0.05} className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                      <img src={part.image} alt={part.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-daikin-blue/10 px-2 py-1 rounded text-[9px] font-bold text-daikin-blue uppercase tracking-wider">
                          {part.series}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-[9px] font-bold text-charcoal uppercase tracking-wider">
                          {part.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-charcoal mb-0.5">{part.model}</h3>
                      <p className="text-xs font-mono text-daikin-blue font-semibold mb-3">
                        <span className="text-gray-400 font-sans font-normal">Model:</span> {part.partCode}
                      </p>
                      <p className="text-gray-500 text-xs mb-5 flex-grow line-clamp-2 leading-relaxed">{part.desc}</p>
                      <Link to={`/dealers?sparepart=${part.partCode}&name=${encodeURIComponent(part.model)}`} className="mt-auto w-max px-4 py-2 rounded-lg bg-daikin-blue/10 text-daikin-blue text-xs font-bold group-hover:bg-daikin-blue group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <Settings className="w-3.5 h-3.5" />
                        Cek Ketersediaan
                      </Link>
                    </div>
                  </FadeInUp>
                )) : (
                  <div className="col-span-full py-20 text-center bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <Search className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold text-gray-500 mb-2">Sparepart Tidak Ditemukan</h3>
                    <p className="text-gray-400">Silakan ubah filter kategori atau kata kunci pencarian Anda.</p>
                  </div>
                )}
              </div>

              {/* Pagination Controls */}
              {totalPartPages > 1 && (
                <FadeInUp className="flex justify-center mt-12 gap-2">
                  {Array.from({ length: totalPartPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPartPage(idx + 1)}
                      className={`w-10 h-10 rounded-xl font-bold transition-all flex items-center justify-center ${
                        partPage === idx + 1 
                          ? 'bg-daikin-blue text-white shadow-md scale-110' 
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </FadeInUp>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Daikin Parts Shop (DPS) */}
      <div className="py-24 bg-gray-50 relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          <FadeInUp className="bg-daikin-blue text-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Daikin Parts Shop (DPS)</h2>
              <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
                Dengan jaringan distribusi yang tersebar secara nasional. Kami terus memperluas jaringan Daikin Parts Shop (DPS) untuk mempercepat distribusi suku cadang dan ketersedian stock. Kami menunjuk secara selektif mitra kami untuk bergabung menjadi DPS.
              </p>
            </div>
            <div className="relative z-10 w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shrink-0">
              <Store className="w-12 h-12 text-white" />
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2} className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/3 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Cari nama atau alamat DPS..." 
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-daikin-blue/50 focus:border-daikin-blue transition-all bg-white shadow-sm"
                  value={dpsSearch}
                  onChange={(e) => {
                    setDpsSearch(e.target.value)
                    setDpsPage(1)
                  }}
                />
              </div>
              <div className="w-full md:w-64 relative group">
                <select
                  className="w-full appearance-none pl-4 pr-10 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-daikin-blue/50 focus:border-daikin-blue transition-all bg-white shadow-sm cursor-pointer"
                  value={dpsProvince}
                  onChange={(e) => {
                    setDpsProvince(e.target.value)
                    setDpsPage(1)
                  }}
                >
                  {provinces.map(prov => (
                    <option key={prov} value={prov}>{prov}</option>
                  ))}
                </select>
              </div>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedDps.length > 0 ? paginatedDps.map((dps, idx) => (
              <FadeInUp key={dps.id} delay={idx * 0.05} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue mb-6 group-hover:scale-110 group-hover:bg-daikin-blue group-hover:text-white transition-all duration-300">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{dps.name}</h3>
                <span className="text-xs font-bold text-daikin-blue uppercase tracking-wider mb-4 block">{dps.province}</span>
                <div className="space-y-4 mt-auto border-t border-gray-100 pt-6">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-gray-400" />
                    <p className="text-sm leading-relaxed">{dps.address}</p>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dps.name + ' ' + dps.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-daikin-blue hover:text-daikin-blue-dark transition-colors group/link mt-2"
                  >
                    <Navigation className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    Petunjuk Arah
                  </a>
                </div>
              </FadeInUp>
            )) : (
              <div className="col-span-full py-20 text-center">
                <Store className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-2xl font-bold text-gray-500 mb-2">DPS Tidak Ditemukan</h3>
                <p className="text-gray-400">Silakan coba dengan kata kunci atau provinsi lain.</p>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalDpsPages > 1 && (
            <FadeInUp className="flex justify-center mt-12 gap-2">
              {Array.from({ length: totalDpsPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDpsPage(idx + 1)
                  }}
                  className={`w-10 h-10 rounded-xl font-bold transition-all flex items-center justify-center ${
                    dpsPage === idx + 1 
                      ? 'bg-daikin-blue text-white shadow-md scale-110' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </FadeInUp>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-daikin-blue text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-daikin-blue-dark/20 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Dukungan Optimal Pelanggan</h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Dengan Jaringan Daikin Part Shop yang tersebar secara nasional menawarkan layanan dan dukungan yang optimal bagi pelanggan. Gunakan pencarian lokasi kami untuk menemukan toko suku cadang Daikin terdekat.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-daikin-blue px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl group"
            >
              Hubungi Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInUp>
        </div>
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
