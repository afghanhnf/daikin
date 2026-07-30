import { useState, useMemo, lazy, Suspense } from 'react'
import { 
  MapPin, Phone, Clock, Search, Building2, 
  ExternalLink, List, Grid, ShieldCheck, CheckCircle2,
  Navigation, PhoneCall, Sparkles
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface ServiceCenterLocation {
  id: string
  area: string
  address: string
  phone: string
  region: 'Jabodetabek' | 'Jawa' | 'Sumatera' | 'Kalimantan' | 'Sulawesi' | 'Bali & Nusa Tenggara'
}

const serviceCenterData: ServiceCenterLocation[] = [
  // Jabodetabek
  {
    id: 'north-jakarta',
    area: 'North Jakarta',
    address: 'Jl. Indo Karya, RT.7/RW.4, Papanggo, Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14340',
    phone: '(021) 650 5028',
    region: 'Jabodetabek'
  },
  {
    id: 'south-jakarta',
    area: 'South Jakarta',
    address: 'Jl. Ciputat Raya No.16, RT.6/RW.8, Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310',
    phone: '(021) 2782 5545',
    region: 'Jabodetabek'
  },
  {
    id: 'tangerang',
    area: 'Tangerang',
    address: 'JL. Jalur Sutera Kav 29 D No.36-37 Alam Sutera Tangerang - 15320',
    phone: '(021) 5314 1195',
    region: 'Jabodetabek'
  },
  {
    id: 'bekasi',
    area: 'Bekasi',
    address: 'CBD Boulevard, Kompleks, Town Square Blok J No. 6, Margahayu, Bekasi 17113',
    phone: '(021) 2945 0585',
    region: 'Jabodetabek'
  },

  // Sumatera & Batam
  {
    id: 'medan',
    area: 'Medan',
    address: 'JL. H. Adam Malik No.18, Medan Barat, Medan - 20114',
    phone: '(061) 4200 8866',
    region: 'Sumatera'
  },
  {
    id: 'aceh',
    area: 'Aceh',
    address: 'Jl. Soekarno Hatta, Kel. Lamreung, Kec. Darul Imarah, Kab. Aceh Besar 23352 - Aceh',
    phone: '(0651) 7318 036',
    region: 'Sumatera'
  },
  {
    id: 'pekanbaru',
    area: 'Pekanbaru',
    address: 'JL. Soekarno Hatta No. 3 -5, Tangkerang Barat, Pekanbaru 28282',
    phone: '(0761) 561 139',
    region: 'Sumatera'
  },
  {
    id: 'padang',
    area: 'Padang',
    address: 'KM. 12 Bypass No. 14, Kel. Sungai Sapih Kec. Kuranji, Padang 25157 - Sumatera Barat',
    phone: '(0751) 896 2684',
    region: 'Sumatera'
  },
  {
    id: 'palembang',
    area: 'Palembang',
    address: 'Jl. Veteran No. 88 - 89, KutoBatu - Ilir Timur II, Palembang 30115',
    phone: '(0711) 573 2282',
    region: 'Sumatera'
  },
  {
    id: 'jambi',
    area: 'Jambi',
    address: 'Jl. RB Siagian RT 33 No. 52, Tambak Sari Jambi Selatan 36138 - Jambi',
    phone: '(0741) 3066 790',
    region: 'Sumatera'
  },
  {
    id: 'batam',
    area: 'Batam',
    address: 'Kompleks Ruko Palm Spring Blok A4 No. 12 & 12A, Jl. Raja Haji Fisabilillah, Taman Baloi, Kecamatan Batam Kota, Batam Kepulauan Riau 29444',
    phone: '(0778) 4171 445',
    region: 'Sumatera'
  },

  // Jawa
  {
    id: 'bandung',
    area: 'Bandung',
    address: 'Jl. BKR No.23 Pasirluyu, Bandung 40254',
    phone: '(022) 5225 150',
    region: 'Jawa'
  },
  {
    id: 'cirebon',
    area: 'Cirebon',
    address: 'Jl. Evakuasi No. 9A RT 005 RW 002 Kelurahan Sunyaragi, Kecamatan Kesambi Kota Cirebon 45132',
    phone: '(0231) 8817 512',
    region: 'Jawa'
  },
  {
    id: 'semarang',
    area: 'Semarang',
    address: 'Jl. Brigjen Sudiarto No. 285, Semarang - Jawa Tengah',
    phone: '(024) 7660 3221',
    region: 'Jawa'
  },
  {
    id: 'yogyakarta',
    area: 'Yogyakarta',
    address: 'Jl. Raya Magelang No. 76 Karangwangwaru, Tegalrejo, Yogyakarta - 55241',
    phone: '(0274) 551 321',
    region: 'Jawa'
  },
  {
    id: 'surabaya',
    area: 'Surabaya',
    address: 'Jl. Kombes Pol. Moh. Duryat No.29-31, Tegalsari, Kec. Tegalsari, Surabaya, Jawa Timur 60262, Indonesia',
    phone: '(031) 2971 2098',
    region: 'Jawa'
  },

  // Kalimantan (2 Data Tambahan Khusus)
  {
    id: 'samarinda',
    area: 'Samarinda',
    address: 'Jl. Wahid Hasyim II No. 8 Sempaja Selatan, Samarinda Utara, Kalimantan Timur - 75243',
    phone: '(0541) 2522 889',
    region: 'Kalimantan'
  },
  {
    id: 'banjarmasin',
    area: 'Banjarmasin',
    address: 'Jl. Ahmad Yani KM. 7,8, Citraland Iwalk 2 No. 21 Pemurus Luar, Banjarmasin 70654 - Kalimantan Selatan',
    phone: '(0511) 6776 838',
    region: 'Kalimantan'
  },

  // Bali & Nusa Tenggara
  {
    id: 'denpasar',
    area: 'Denpasar',
    address: 'Jl. Gatot Subroto Barat No 378 Ubung, Kec. Denpasar Utara, Kota Denpasar, Bali',
    phone: '(0361) 9005514',
    region: 'Bali & Nusa Tenggara'
  },
  {
    id: 'lombok',
    area: 'Lombok',
    address: 'Jl. Sriwijaya No. 3 Ruko Blok 6 Sapta Marga Cakra Negara, Mataram - Nusa Tenggara Barat',
    phone: '(0370) 7843 231',
    region: 'Bali & Nusa Tenggara'
  },

  // Sulawesi
  {
    id: 'makassar',
    area: 'Makassar',
    address: 'JL. Veteran Selatan No. 455, Makassar, Sulawesi - 90135',
    phone: '(0411) 805 2691',
    region: 'Sulawesi'
  },
  {
    id: 'manado',
    area: 'Manado',
    address: 'Jl. Sam Ratulangi No. 151 Sario, Manado - 95113',
    phone: '(0431) 719 1199',
    region: 'Sulawesi'
  }
]

const regions = ['Semua Wilayah', 'Jabodetabek', 'Jawa', 'Sumatera', 'Kalimantan', 'Sulawesi', 'Bali & Nusa Tenggara']

export default function ServiceCenter() {
  const [selectedRegion, setSelectedRegion] = useState('Semua Wilayah')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')

  const filteredLocations = useMemo(() => {
    return serviceCenterData.filter(loc => {
      const matchesRegion = selectedRegion === 'Semua Wilayah' || loc.region === selectedRegion
      const matchesSearch = loc.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            loc.phone.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesRegion && matchesSearch
    })
  }, [selectedRegion, searchQuery])

  return (
    <PageTransition>
      <PageMeta 
        title="Jaringan Service Center Resmi - PT Daikin Airconditioning Indonesia" 
        canonical="/services/service-center" 
      />

      {/* Modern Premium Hero Banner */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Layanan', path: '/services' }, 
              { label: 'Service Center' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="max-w-3xl">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                Jaringan Layanan Resmi Seluruh Indonesia
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Daikin Service Center <br />
                <span className="text-daikin-blue-light font-light">Official Directory</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8">
                Temukan alamat lengkap dan nomor telepon cabang Service Center resmi Daikin terdekat di kota Anda untuk layanan perbaikan, perawatan, dan ketersediaan suku cadang original.
              </p>
            </FadeInUp>
          </div>

        </div>
      </div>

      {/* Main Content Directory Section */}
      <div className="bg-slate-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Controls & Filter Bar */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Cari Kota, Alamat, atau Telepon Service Center..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/10 transition-all font-medium"
                />
              </div>

              {/* View Mode Switcher (Grid / List) */}
              <div className="flex items-center gap-2 self-end md:self-auto">
                <span className="text-xs text-slate-400 font-medium mr-2">Tampilan:</span>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    viewMode === 'list' 
                      ? 'bg-daikin-blue text-white border-daikin-blue shadow-xs' 
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                  title="Tampilan Tabel / List"
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">Tabel / List</span>
                </button>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    viewMode === 'grid' 
                      ? 'bg-daikin-blue text-white border-daikin-blue shadow-xs' 
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                  title="Tampilan Kartu / Grid"
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:inline">Kartu / Grid</span>
                </button>
              </div>

            </div>

            {/* Region Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                    selectedRegion === region
                      ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs font-bold'
                      : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* List View (Table Format like in reference screenshot) */}
          {viewMode === 'list' && (
            <FadeInUp className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-daikin-blue to-daikin-blue-dark text-white text-xs font-bold uppercase tracking-wider">
                      <th className="py-4 px-6 w-44">AREA</th>
                      <th className="py-4 px-6">ALAMAT</th>
                      <th className="py-4 px-6 text-right w-56">NO. TELP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredLocations.map((loc) => (
                      <tr key={loc.id} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="py-4 px-6 font-bold text-slate-800 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-daikin-blue shrink-0" />
                            <span className="text-charcoal font-extrabold group-hover:text-daikin-blue transition-colors">
                              {loc.area}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                            {loc.region}
                          </span>
                        </td>

                        <td className="py-4 px-6 text-slate-600 leading-relaxed font-medium">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span>{loc.address}</span>
                          </div>
                        </td>

                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          <a 
                            href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 hover:bg-emerald-500 hover:text-white text-daikin-blue font-bold rounded-xl transition-all border border-sky-100 shadow-2xs"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>{loc.phone}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-6">
                <span>Showing {filteredLocations.length} of {serviceCenterData.length} service centers</span>
                <span className="font-semibold text-slate-600">PT Daikin Airconditioning Indonesia Service Network</span>
              </div>
            </FadeInUp>
          )}

          {/* Grid View (Card Format) */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((loc, idx) => (
                <FadeInUp key={loc.id} delay={idx * 0.04}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 bg-sky-50 text-daikin-blue font-extrabold text-[11px] rounded-full border border-sky-100">
                          {loc.area}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Service Center Resmi
                        </span>
                      </div>

                      <h3 className="text-base font-extrabold text-charcoal mb-3 group-hover:text-daikin-blue transition-colors">
                        Daikin Service Center {loc.area}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed mb-6 flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      <a 
                        href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                        className="flex-1 py-2.5 bg-daikin-blue hover:bg-daikin-blue-dark text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>{loc.phone}</span>
                      </a>

                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Daikin Service Center ${loc.area} ${loc.address}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                        title="Buka di Google Maps"
                      >
                        <Navigation className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          )}

          {/* Empty Search State */}
          {filteredLocations.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-charcoal mb-2">Service Center Tidak Ditemukan</h3>
              <p className="text-xs text-slate-500 mb-6">Tidak ada Service Center yang sesuai dengan pencarian "{searchQuery}".</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedRegion('Semua Wilayah'); }}
                className="px-5 py-2.5 bg-daikin-blue text-white font-bold text-xs rounded-xl"
              >
                Reset Pencarian
              </button>
            </div>
          )}

        </div>
      </div>

    </PageTransition>
  )
}
