import { useState, useMemo, lazy, Suspense } from 'react'
import { 
  FileText, Search, Download, Youtube, Wrench, 
  HelpCircle, AlertTriangle, CheckCircle2, ChevronRight,
  BookOpen, Calendar, PhoneCall, ShieldAlert, Cpu, Layers, Filter
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface ServiceManualItem {
  id: string
  type: 'PA' | 'RA' | 'SA' | 'VRV'
  code: string
  model: string
  fileSize: string
}

const serviceManualsData: ServiceManualItem[] = [
  { id: '1', type: 'PA', code: 'Si40-503', model: 'Duct Connection FDMG-AV1(S)', fileSize: '4.2 MB' },
  { id: '2', type: 'PA', code: 'Si41-402', model: 'Duct Connection FDBG-A', fileSize: '3.8 MB' },
  { id: '3', type: 'PA', code: 'Si41-901', model: 'Floor Standing & Duct Connection', fileSize: '5.1 MB' },
  { id: '4', type: 'PA', code: 'SiID411022', model: 'AC Paket Tipe Duct Connection', fileSize: '6.0 MB' },
  { id: '5', type: 'RA', code: 'TM-3WMN-SL-ID-A1', model: 'Panduan Servis Unit Air Conditioner Split Seri A Wall Mounted Seri FTV-A', fileSize: '2.9 MB' },
  { id: '6', type: 'RA', code: 'TM-5WMY-J-ST-A1', model: 'Panduan Teknis Air Conditioner Seri FTK-J, FTXN M', fileSize: '4.5 MB' },
  { id: '7', type: 'RA', code: 'TM-5WMY-J-ST-A2', model: 'Panduan Teknis Unit Air Conditioner Seri FTK-J, FTXN-J', fileSize: '4.8 MB' },
  { id: '8', type: 'RA', code: 'SIMT041604E', model: 'Service Manual Inverter Pair Tipe Wall Mounted Seri FTKC-Q', fileSize: '3.4 MB' },
  { id: '9', type: 'RA', code: 'SIBE041401E', model: 'Service Manual Inverter Pair Tipe Wall Mounted Seri L', fileSize: '5.6 MB' },
  { id: '10', type: 'RA', code: 'SiID011417E', model: 'FTNE-M Tipe Wall Mounted', fileSize: '2.1 MB' },
  { id: '11', type: 'SA', code: 'SiUS28-801', model: 'SkyAir Split System Outdoor Unit', fileSize: '7.2 MB' },
  { id: '12', type: 'VRV', code: 'SiUS30-705', model: 'VRV IV Heat Recovery Series Technical Manual', fileSize: '12.4 MB' },
]

const errorCodesList = [
  { code: 'A1', component: 'Indoor PCB Unit', symptom: 'Kerusakan pada mikrokomputer / PCB indoor', solution: 'Periksa koneksi kabel soket PCB atau lakukan penggantian modul PCB indoor resmi.' },
  { code: 'A5', component: 'High Pressure / Frost Control', symptom: 'Pencegahan pembekuan es atau kontrol tekanan tinggi indoor aktif', solution: 'Bersihkan filter udara yang kotor atau periksa aliran sirkulasi freon.' },
  { code: 'E7', component: 'Outdoor Fan Motor', symptom: 'Gangguan pada motor kipas unit outdoor', solution: 'Periksa kebersihan baling-baling kipas outdoor dan koneksi kabel motor kipas.' },
  { code: 'F3', component: 'Discharge Pipe Temp', symptom: 'Suhu pipa buang kompresor abnormal / terlalu panas', solution: 'Cek kecukupan freon (refrigerant) dan pastikan tidak ada kebocoran pipa.' },
  { code: 'H9', component: 'Thermistor Udara Outdoor', symptom: 'Sensor suhu udara luar ruangan terputus / korslet', solution: 'Periksa posisi dan koneksi konektor thermistor udara pada unit outdoor.' },
  { code: 'J6', component: 'Heat Exchanger Thermistor', symptom: 'Sensor suhu kondensor outdoor mengalami kelainan', solution: 'Ganti thermistor pipa kondensor dengan suku cadang asli Daikin.' },
  { code: 'L5', component: 'Inverter Compressor Overcurrent', symptom: 'Arus berlebih pada kompresor inverter', solution: 'Matikan daya utama 5 menit lalu nyalakan kembali. Jika berulang, hubungi teknisi Daikin.' },
  { code: 'U0', component: 'Refrigerant Shortage', symptom: 'Kekurangan gas freon / tekanan sistem terlalu rendah', solution: 'Lakukan tes kebocoran sistem perpipaan dan lakukan pengisian ulang freon.' },
  { code: 'U4', component: 'Communication Error', symptom: 'Gangguan transmisi sinyal antara unit Indoor & Outdoor', solution: 'Periksa kerapihan kabel komunikasi inter-unit (kabel 3-core) dan koneksi terminal.' },
  { code: 'UA', component: 'Combination Error', symptom: 'Ketidaksesuaian kombinasi kapasitas indoor dan outdoor', solution: 'Pastikan model unit indoor dan outdoor memiliki pasangan daya PK yang sesuai.' },
]

const quickNavCards = [
  {
    title: 'CUSTOMER GUIDE',
    subtitle: 'Panduan & Petunjuk Pelanggan',
    icon: BookOpen,
    href: '#manual-servis',
    color: 'from-sky-500 to-daikin-blue'
  },
  {
    title: 'ERROR CODE',
    subtitle: 'Kode Error & Remote Diagnosis',
    icon: AlertTriangle,
    href: '#kode-error',
    color: 'from-blue-600 to-[#0c1e38]'
  },
  {
    title: 'CONTACT US',
    subtitle: 'Bantuan Layanan Teknis',
    icon: PhoneCall,
    href: '/contact',
    color: 'from-[#0097E0] to-sky-600'
  },
  {
    title: 'SCHEDULING & REPAIR',
    subtitle: 'Penjadwalan Servis Resmi',
    icon: Calendar,
    href: '/services/service-center',
    color: 'from-slate-800 to-slate-950'
  }
]

export default function TechnicalData() {
  const [selectedType, setSelectedType] = useState<string>('ALL')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedErrorCode, setSelectedErrorCode] = useState<string>('U4')

  const filteredManuals = useMemo(() => {
    return serviceManualsData.filter(item => {
      const matchesType = selectedType === 'ALL' || item.type === selectedType
      const matchesQuery = item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.model.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesType && matchesQuery
    })
  }, [selectedType, searchQuery])

  const activeErrorDetail = useMemo(() => {
    return errorCodesList.find(e => e.code === selectedErrorCode) || errorCodesList[0]
  }, [selectedErrorCode])

  return (
    <PageTransition>
      <PageMeta 
        title="Spesifikasi & Data Teknis - PT Daikin Airconditioning Indonesia" 
        canonical="/services/technical-data" 
      />

      {/* Modern Premium Hero Banner */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#07172e] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Layanan', path: '/services' }, 
              { label: 'Spesifikasi & Data Teknis' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="max-w-3xl mb-12">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                Dokumen &amp; Referensi Teknis Resmi
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Spesifikasi &amp; <br />
                <span className="text-daikin-blue-light font-light">Data Teknis Daikin</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed">
                Pusat informasi teknis lengkap untuk panduan pengguna, diagnosis kode error remote control, serta unduhan buku manual servis resmi produk AC Daikin.
              </p>
            </FadeInUp>
          </div>

          {/* Quick Jump Bar (Extracted 4 Navigation Badges from Image) */}
          <FadeInUp delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {quickNavCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className={`bg-gradient-to-r ${card.color} p-5 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl hover:scale-102 transition-all flex items-center justify-between group`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs tracking-wider text-white uppercase">{card.title}</h4>
                      <p className="text-[11px] text-white/80">{card.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </FadeInUp>

        </div>
      </div>

      {/* Main Content Body */}
      <div className="bg-slate-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Seksi Kode Error AC Daikin */}
          <section id="kode-error" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
                Diagnosis Mandiri Remote Control
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Kode Error AC Daikin
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Periksa kode Error dengan cara yang mudah untuk membantu kami mengidentifikasi masalah yang terjadi pada unit AC Daikin Anda.
              </p>
            </FadeInUp>

            {/* Error Code Diagnostic Tool & Buttons */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
              
              {/* Left Diagnostic Card */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-daikin-blue bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                      METODE DIAGNOSIS
                    </span>
                    <Wrench className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    Mencari Kode Error dengan Remote Wireless
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Pilih kode error yang muncul pada layar remote control AC Daikin Anda untuk melihat gejala dan langkah perbaikannya:
                  </p>

                  {/* Code Selector Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {errorCodesList.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => setSelectedErrorCode(item.code)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                          selectedErrorCode === item.code
                            ? 'bg-daikin-blue text-white border-daikin-blue shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        Kode {item.code}
                      </button>
                    ))}
                  </div>

                  {/* Active Code Detail Box */}
                  <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-amber-400">
                        KODE {activeErrorDetail.code}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full text-sky-300">
                        {activeErrorDetail.component}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Indikasi Kerusakan:</span>
                      <p className="text-xs font-medium text-white/90">{activeErrorDetail.symptom}</p>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block">Solusi Penanganan:</span>
                      <p className="text-xs text-white/80">{activeErrorDetail.solution}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Embedded YouTube Video */}
              <div id="video-tutorial" className="lg:col-span-7 scroll-mt-32 flex flex-col">
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex-grow flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-4">
                    <Youtube className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-charcoal text-base">
                      Tutorial Cara Periksa Kode Error Untuk AC Daikin
                    </h3>
                  </div>

                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/CBIylkdapj0?si=41CqrUW5GTmLgtDX" 
                      title="Tutorial Cara Periksa Kode Error Untuk AC Daikin | Daikin Indonesia" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    />
                  </div>

                  <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                    Saksikan video resmi Daikin Indonesia di atas untuk panduan langkah demi langkah memeriksa kode error menggunakan tombol CANCEL pada remote wireless AC Daikin Anda.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Seksi Buku Manual Servis Directory */}
          <section id="manual-servis" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
                Dokumentasi Teknis
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Buku Manual Servis
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Buku panduan dari Daikin untuk membantu teknisi melakukan pengecekan dan perbaikan. Silakan pilih jenis produk untuk melihat detailnya.
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
                    placeholder="Type a keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/10 transition-all font-medium"
                  />
                </div>

                {/* Category Type Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { label: 'Semua Produk', value: 'ALL' },
                    { label: 'PA (Packaged Air)', value: 'PA' },
                    { label: 'RA (Residential Air)', value: 'RA' },
                    { label: 'SA (SkyAir Commercial)', value: 'SA' },
                    { label: 'VRV Systems', value: 'VRV' },
                  ].map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedType(cat.value)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                        selectedType === cat.value
                          ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs font-bold'
                          : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {/* Service Manuals Table */}
            <FadeInUp className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-daikin-blue to-daikin-blue-dark text-white text-xs font-bold uppercase tracking-wider">
                      <th className="py-4 px-6 w-24">Type</th>
                      <th className="py-4 px-6 w-48">Service Manual Code</th>
                      <th className="py-4 px-6">Model(s) &amp; Description</th>
                      <th className="py-4 px-6 text-right w-44">Download</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredManuals.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full font-extrabold text-[11px] ${
                            item.type === 'VRV' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                            item.type === 'PA' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' :
                            item.type === 'SA' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                            'bg-sky-50 text-daikin-blue border border-sky-200'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-bold text-charcoal group-hover:text-daikin-blue transition-colors font-mono">
                          {item.code}
                        </td>
                        <td className="py-4 px-6 text-slate-700 leading-relaxed font-medium">
                          {item.model}
                        </td>
                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          <a 
                            href="#"
                            onClick={(e) => { e.preventDefault(); alert(`Mengunduh berkas ${item.code} (${item.fileSize})...`); }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-daikin-blue hover:text-white text-daikin-blue font-bold rounded-xl transition-colors border border-slate-200/70"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download ({item.fileSize})</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer info */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-6">
                <span>Showing {filteredManuals.length} of {serviceManualsData.length} service manuals</span>
                <span className="font-semibold text-slate-600">PT Daikin Airconditioning Indonesia Technical Library</span>
              </div>
            </FadeInUp>
          </section>

        </div>
      </div>

    </PageTransition>
  )
}
