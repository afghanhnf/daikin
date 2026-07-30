import { useState, useMemo } from 'react'
import {
  Globe2, Building2, MapPin, Sparkles, ArrowRight, X,
  CheckCircle2, Layers, ShieldCheck, Search
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'

interface CaseStudyItem {
  id: string
  title: string
  location: string
  country: string
  region: 'Asia-Pasifik' | 'Eropa' | 'Amerika' | 'Timur Tengah & Afrika'
  type: string
  systemUsed: string
  description: string
  featured?: boolean
  details: {
    challenge: string
    solution: string
    result: string
  }
}

const featureCaseStudiesData: CaseStudyItem[] = [
  {
    id: 'tic-japan',
    title: 'Aiming for a Net Zero Energy Building with Daikin VRV & Heat Pump',
    location: 'Technology & Innovation Center',
    country: 'Jepang',
    region: 'Asia-Pasifik',
    type: 'Pusat Riset & Inovasi',
    systemUsed: 'Daikin VRV Heat Recovery & High-Efficiency Chiller',
    featured: true,
    description: 'The Technology and Innovation Center achieves extreme energy efficiency by combining Daikin VRV heat recovery system and high-efficiency Chiller with renewable energy integration.',
    details: {
      challenge: 'Mencapai standar Net Zero Energy Building (NZEB) pada fasilitas riset berukuran besar dengan beban pendinginan ruangan yang berfluktuasi tinggi.',
      solution: 'Penerapan integrasi sistem pendingin VRV Heat Recovery Daikin yang memanfaatkan panas sisa, dikombinasikan dengan sistem Chiller magnetik ber-efisiensi ultra tinggi.',
      result: 'Penurunan konsumsi energi sebesar 55% dibanding gedung standar dan berhasil meraih sertifikasi Net Zero Energy Building secara resmi.'
    }
  },
  {
    id: 'technocenter-brazil',
    title: 'Realizing Energy Savings, Space Savings and Silence in Tropical Climate',
    location: 'Technocenter',
    country: 'Brasil',
    region: 'Amerika',
    type: 'Menara Komersial & Kantor',
    systemUsed: 'Daikin VRV Outdoor System & Central Controller',
    featured: true,
    description: 'The Technocenter adopted Daikin VRV outdoor system to achieve high-efficiency cooling, silent operation, and space savings in Brazil demanding tropical climate.',
    details: {
      challenge: 'Kapasitas atap gedung yang sangat terbatas serta kebutuhan pengondisian udara bersuara rendah di iklim tropis ekstrim.',
      solution: 'Penggunaan unit outdoor Daikin VRV berspesifikasi ringkas dengan rancangan aliran udara hening dan pipa fleksibel bertekanan statis tinggi.',
      result: 'Penghematan area peletakan mesin di atap hingga 40% serta penurunan tingkat kebisingan di ruang kerja hingga di bawah 45 dB.'
    }
  },
  {
    id: 'willis-tower-usa',
    title: 'Installing 16,000 HP of Efficient Water Chiller System',
    location: 'Willis Tower (Sears Tower), Chicago',
    country: 'Amerika Serikat',
    region: 'Amerika',
    type: 'Pencakar Langit 110 Lantai',
    systemUsed: 'Daikin Magnetic-Bearing Centrifugal Water Chiller',
    featured: true,
    description: 'Upgrading Chicago iconic 110-story skyscraper with Daikin magnetic-bearing centrifugal chillers to achieve substantial energy reduction and reliable climate control.',
    details: {
      challenge: 'Peremajaan total sistem HVAC pada gedung ikonik 110 lantai tanpa mengganggu aktivitas bisnis harian ribuan tenant.',
      solution: 'Instalasi sistem Chiller Sentrifugal berpasak bantalan magnetik (Magnetic Bearing Water Chiller) berkapasitas total 16.000 HP.',
      result: 'Efisiensi konsumsi daya listrik meningkat drastis hingga 35% dengan keandalan operasional nonstop 24/7.'
    }
  },
  {
    id: 'highrise-limited-space-japan',
    title: 'Challenging Energy Savings in High-Rise Building with Limited Space',
    location: 'High-Rise Commercial Tower',
    country: 'Jepang',
    region: 'Asia-Pasifik',
    type: 'Gedung Komersial Tinggi',
    systemUsed: 'Modular Daikin VRV Systems',
    featured: true,
    description: 'Daikin VRV system provided flexible piping and compact modular design for high-rise installations with restricted roof footprint.',
    details: {
      challenge: 'Struktur fasad kaca tinggi dengan ruang mekanikal atap yang sangat sempit dan batasan jalur perpipaan vertikal.',
      solution: 'Penerapan modul VRV berdesain ramping dengan perbedaan ketinggian perpipaan fleksibel hingga 90 meter.',
      result: 'Integrasi tata udara yang menyatu harmonis tanpa mengorbankan estetika arsitektur luar gedung.'
    }
  },
  {
    id: 'heritage-uk',
    title: 'Combining Architectural Heritage Protection with Modern Air Efficiency',
    location: 'Palace of Westminster & Tate Modern',
    country: 'Inggris',
    region: 'Eropa',
    type: 'Bangunan Bersejarah & Landmark',
    systemUsed: 'Custom Non-Invasive Daikin VRV & Ducting',
    featured: true,
    description: 'Installing quiet, non-invasive Daikin climate systems into historic landmarks without altering architectural aesthetics or structural integrity.',
    details: {
      challenge: 'Pemasangan sistem AC modern pada cagar budaya berusia ratusan tahun yang melarang keras perusakan dinding asli atau fasad bersejarah.',
      solution: 'Penggunaan saluran udara tersembunyi berteknologi operasi hening dengan unit indoor berdesain kustom tak kasat mata.',
      result: 'Kenyamanan termal modern tercapai secara penuh tanpa sedikit pun merusak nilai historis dan estetika arsitektur bangunan.'
    }
  },
  {
    id: 'istanbul-airport-turkey',
    title: 'Custom Air Quality Management for Mega Transportation Hubs',
    location: 'Bandara Internasional Istanbul',
    country: 'Turki',
    region: 'Timur Tengah & Afrika',
    type: 'Bandara Mega Transit',
    systemUsed: 'Daikin Air Handling Units (AHU) & Chiller',
    featured: true,
    description: 'Daikin custom AHU and Chiller technology delivering continuous air filtration and thermal comfort for millions of international passengers.',
    details: {
      challenge: 'Pengelolaan sirkulasi udara bersih dan temperatur stabil pada ruang terminal penumpang seluas jutaan meter persegi.',
      solution: 'Pemasangan ratusan unit Air Handling Unit (AHU) Daikin kustom berspesifikasi filtrasi udara bertingkat tinggi.',
      result: 'Kualitas udara dalam ruangan (IAQ) terjamin bersih dan nyaman bagi puluhan juta penumpang internasional setiap tahunnya.'
    }
  }
]

const globalCaseStudiesData: CaseStudyItem[] = [
  {
    id: 'australia-complex',
    title: 'Australia Residential & Commercial Complex',
    location: 'Sydney',
    country: 'Australia',
    region: 'Asia-Pasifik',
    type: 'Mixed-Use Residential',
    systemUsed: 'Daikin Super Multi NX & VRV',
    description: 'Solusi tata udara terpadu untuk apartemen mewah dan kawasan komersial pedesaan modern.',
    details: {
      challenge: 'Kebutuhan kontrol suhu mandiri di tiap unit hunian dengan unit outdoor hemat tempat.',
      solution: 'Penerapan sistem Multi-Split Daikin yang menghubungkan beberapa unit indoor ke satu outdoor.',
      result: 'Efisiensi daya tinggi dan fasad balkon tetap rapi.'
    }
  },
  {
    id: 'belgium-residence',
    title: '707 Residence Belgium',
    location: 'Brussels',
    country: 'Belgia',
    region: 'Eropa',
    type: 'Hunian Modern',
    systemUsed: 'Daikin Altherma Heat Pump',
    description: 'Sistem pompa panas terbarukan untuk pemanas ruangan dan air mandi beremisi karbon ultra rendah.',
    details: {
      challenge: 'Iklim dingin Belgia dengan target penurunan emisi karbon hunian mandiri.',
      solution: 'Instalasi Daikin Altherma yang mengoperasikan pemanas ruangan berbasis energi terbarukan.',
      result: 'Konsumsi energi terbarukan optimal sepanjang tahun.'
    }
  },
  {
    id: 'brazil-maracana',
    title: 'Stadion Maracanã Brazil',
    location: 'Rio de Janeiro',
    country: 'Brasil',
    region: 'Amerika',
    type: 'Stadion Sepakbola Dunia',
    systemUsed: 'Daikin Central Chiller & VRV',
    description: 'Pendinginan area VIP, ruang ganti atlet, dan pusat media pada stadion paling legendaris di dunia.',
    details: {
      challenge: 'Fluktuasi beban pendinginan ekstrem saat pertandingan besar dihadiri puluhan ribu penonton.',
      solution: 'Integrasi sistem Chiller pendingin air dan VRV Daikin berefisiensi tinggi.',
      result: 'Kenyamanan penuh bagi atlit dan tamu VIP sepanjang turnamen dunia.'
    }
  },
  {
    id: 'chile-costanera',
    title: 'Costanera Center Chile',
    location: 'Santiago',
    country: 'Chile',
    region: 'Amerika',
    type: 'Menara Komersial 300m',
    systemUsed: 'Daikin Centrifugal Water Chiller',
    description: 'Menara tertinggi di Amerika Selatan yang mengandalkan pendinginan terpusat Daikin.',
    details: {
      challenge: 'Tekanan pendinginan pada ketinggian 300 meter dengan efisiensi tinggi.',
      solution: 'Instalasi Chiller sentrifugal Daikin dengan kontrol beban presisi.',
      result: 'Penghematan biaya listrik bulanan secara signifikan.'
    }
  },
  {
    id: 'china-wfc',
    title: 'World Financial Center China',
    location: 'Shanghai',
    country: 'Tiongkok',
    region: 'Asia-Pasifik',
    type: 'Pencakar Langit Finansial',
    systemUsed: 'Daikin VRV & Air Handling Unit',
    description: 'Pengondisian udara presisi di pusat keuangan utama Shanghai dengan standar efisiensi hijau.',
    details: {
      challenge: 'Kebutuhan sirkulasi udara bersih di ruang kerja berkepadatan tinggi.',
      solution: 'Integrasi VRV Daikin dengan sistem AHU filtrasi udara tingkat tinggi.',
      result: 'Kualitas udara sehat dan konsumsi energi yang hemat.'
    }
  },
  {
    id: 'france-metro',
    title: 'Paris Metro Station Infrastructure',
    location: 'Paris',
    country: 'Prancis',
    region: 'Eropa',
    type: 'Transportasi Publik Subway',
    systemUsed: 'Daikin Industrial AHU & Heavy Chiller',
    description: 'Ventilasi dan pendinginan stasiun bawah tanah dengan keandalan operasional nonstop.',
    details: {
      challenge: 'Ruang terowongan bawah tanah dengan sirkulasi udara terbatas dan suhu tinggi.',
      solution: 'Pemasangan AHU berat Daikin yang memompa udara segar secara kontinu.',
      result: 'Suhu stasiun bawah tanah tetap sejuk dan aman bagi penumpang.'
    }
  },
  {
    id: 'germany-port-hotel',
    title: 'Port Hotel Hamburg Germany',
    location: 'Hamburg',
    country: 'Jerman',
    region: 'Eropa',
    type: 'Hotel Pelabuhan Bintang 5',
    systemUsed: 'Daikin VRV Heat Recovery',
    description: 'Kenyamanan suhu kamar hotel yang dapat diatur mandiri dengan operasi bersuara sangat hening.',
    details: {
      challenge: 'Tingkat kebisingan AC harus sangat rendah demi istirahat tamu hotel.',
      solution: 'Daikin VRV Heat Recovery beroperasi di bawah 25 dB.',
      result: 'Kenyamanan termal eksklusif tanpa gangguan suara.'
    }
  },
  {
    id: 'indonesia-noble-house',
    title: 'Menara Noble House & Tendean Indonesia',
    location: 'Jakarta',
    country: 'Indonesia',
    region: 'Asia-Pasifik',
    type: 'High-Rise Office Tower',
    systemUsed: 'Daikin VRV Systems & AHU',
    description: 'Gedung komersial berstandar hijau di Jakarta yang memanfaatkan sistem VRV Daikin secara penuh.',
    details: {
      challenge: 'Kelembapan dan suhu tinggi khas Jakarta dengan target sertifikasi green building.',
      solution: 'Penerapan VRV Daikin berfitur dehumidifikasi presisi.',
      result: 'Raihan sertifikasi gedung hijau dengan penghematan listrik signifikan.'
    }
  },
  {
    id: 'italy-restaurant',
    title: 'Italian Historic Restaurant & Plaza',
    location: 'Milan',
    country: 'Italia',
    region: 'Eropa',
    type: 'Restoran & Area Komersial',
    systemUsed: 'Daikin Compact VRV & Inverter',
    description: 'Integrasi pendingin udara tersembunyi pada arsitektur klasik Italia.',
    details: {
      challenge: 'Pemasangan AC tanpa mengubah estetika ruangan bersejarah.',
      solution: 'Unit indoor ducting tersembunyi di balik langit-langit kustom.',
      result: 'Suhu sejuk sempurna tanpa mengganggu interior antik.'
    }
  },
  {
    id: 'thailand-samyan',
    title: 'Samyan Mitrtown Thailand',
    location: 'Bangkok',
    country: 'Thailand',
    region: 'Asia-Pasifik',
    type: 'Mixed-Use Commercial & Retail',
    systemUsed: 'Daikin Chiller & VRV Hybrid',
    description: 'Kawasan belanja dan perkantoran 24 jam di Bangkok dengan beban pendinginan dinamis.',
    details: {
      challenge: 'Pengoperasian 24 jam dengan kepadatan pengunjung yang sangat fluktuatif.',
      solution: 'Kombinasi Chiller dan VRV Daikin berefisiensi tinggi.',
      result: 'Kinerja pendinginan stabil dengan tagihan energi terkontrol.'
    }
  },
  {
    id: 'usa-variety-winery',
    title: 'Variety Winery California USA',
    location: 'California',
    country: 'Amerika Serikat',
    region: 'Amerika',
    type: 'Fasilitas Pengolahan Anggur',
    systemUsed: 'Daikin Process Cooling Chiller',
    description: 'Kontrol suhu dan kelembapan presisi tinggi untuk fermentasi dan penyimpanan minuman kualitas dunia.',
    details: {
      challenge: 'Toleransi perubahan suhu di bawah 0.5°C demi kualitas penyimpanan rasa.',
      solution: 'Chiller industri Daikin bersistem pemantauan digital presisi tinggi.',
      result: 'Kualitas hasil fermentasi terjaga sempurna di setiap musim.'
    }
  },
  {
    id: 'vietnam-sapa-resort',
    title: 'Sapa Valley Resort Vietnam',
    location: 'Sapa Valley',
    country: 'Vietnam',
    region: 'Asia-Pasifik',
    type: 'Resort Pegunungan Mewah',
    systemUsed: 'Daikin VRV Heat Pump System',
    description: 'Solusi pendingin saat musim panas dan pemanas saat musim dingin pegunungan.',
    details: {
      challenge: 'Perubahan suhu ekstrim antara musim dingin bersalju dan musim panas.',
      solution: 'Daikin VRV Heat Pump yang mampu mendinginkan dan memanaskan ruangan secara efisien.',
      result: 'Kenyamanan 4 musim bagi para tamu resort.'
    }
  }
]

const regions = ['Semua Wilayah', 'Asia-Pasifik', 'Eropa', 'Amerika', 'Timur Tengah & Afrika']

export default function Portfolio() {
  const [selectedRegion, setSelectedRegion] = useState('Semua Wilayah')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyItem | null>(null)

  const filteredGlobalStudies = useMemo(() => {
    return globalCaseStudiesData.filter(study => {
      const matchesRegion = selectedRegion === 'Semua Wilayah' || study.region === selectedRegion
      const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.type.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesRegion && matchesSearch
    })
  }, [selectedRegion, searchQuery])

  return (
    <PageTransition>
      <PageMeta
        title="Around the World with Daikin - Studi Kasus Global &amp; Portofolio"
        canonical="/information/portfolio"
      />

      {/* Modern Page Hero Banner */}
      <div className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue text-white">
        <AirParticles color="white" />

        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          <Breadcrumb
            items={[
              { label: 'Informasi', path: '/solutions' },
              { label: 'Studi Kasus Global' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20">
                  DAIKIN GLOBAL CASE STUDY
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  Around the World <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-100 font-light">
                    with Daikin Products
                  </span>
                </h1>

                <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
                  From historic cultural landmarks to ultra-tall skyscrapers, residential housing to mega airports- Daikin is chosen time and again across 160+ countries for reliability, efficiency, and climate perfection.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#feature-case-studies"
                    className="px-6 py-3.5 bg-white text-daikin-blue font-bold text-sm rounded-xl shadow-md hover:bg-sky-50 transition-all flex items-center gap-2 group"
                  >
                    <span>Jelajahi Feature Case Studies</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#global-grid"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Studi Kasus Internasional
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Hero Right Side Glassmorphic Thumbnail Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/15 rounded-2xl border border-white/25 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                  <span className="text-xs opacity-60 mt-1">(Daikin Global Portfolio &amp; Case Studies)</span>
                </div>
              </FadeInUp>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-slate-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Section 1: Feature Case Studies (In-Depth Spotlights) */}
          <section id="feature-case-studies" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
                Sorotan Utama Riset &amp; Landmark
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Feature Case Studies
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Proyek-proyek representatif di mana solusi mutakhir Daikin berhasil menaklukkan tantangan arsitektural ekstrim, efisiensi energi Net Zero, dan pelestarian cagar budaya.
              </p>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureCaseStudiesData.map((study, idx) => (
                <FadeInUp key={study.id} delay={idx * 0.08}>
                  <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden">

                    {/* Glassmorphic Thumbnail Placeholder */}
                    <div className="w-full aspect-[16/10] bg-slate-900 p-5 flex items-center justify-center relative overflow-hidden">
                      <div className="w-full h-full bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center text-white">
                        <span className="font-bold text-xs tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                        <span className="text-[10px] opacity-60 mt-1">({study.location})</span>
                      </div>
                      <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase rounded-full shadow-2xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> {study.country}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="px-2.5 py-0.5 bg-sky-50 text-daikin-blue font-bold rounded-full border border-sky-100">
                            {study.type}
                          </span>
                          <span className="text-slate-400 font-semibold text-[11px] flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" /> {study.location}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-daikin-blue transition-colors leading-snug line-clamp-2">
                          {study.title}
                        </h3>

                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-6">
                          {study.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setActiveCaseStudy(study)}
                          className="px-4 py-2 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-colors flex items-center gap-1.5 shadow-2xs"
                        >
                          <span>Detail Studi Kasus</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <span className="text-[11px] text-slate-400 font-medium">{study.systemUsed.split('&')[0]}</span>
                      </div>
                    </div>

                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>

          {/* Section 2: Global Case Studies Grid */}
          <section id="global-grid" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 inline-block">
                Jejak Teruji di 160+ Negara
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Global Case Studies
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Jelajahi pengalaman keberhasilan Daikin dalam mendukung berbagai instalasi tata udara di benua Asia-Pasifik, Eropa, Amerika, hingga Timur Tengah.
              </p>
            </FadeInUp>

            {/* Region Filter & Search Controls */}
            <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {regions.map(r => (
                  <button
                    key={r}
                    onClick={() => setSelectedRegion(r)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${selectedRegion === r
                        ? 'bg-daikin-blue text-white border-daikin-blue shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200/80 hover:bg-slate-100'
                      }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari negara atau jenis gedung..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200/80 rounded-xl text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/10 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Global Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGlobalStudies.map((study, idx) => (
                <FadeInUp key={study.id} delay={idx * 0.05}>
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden">

                    {/* Glassmorphic Thumbnail Placeholder */}
                    <div className="w-full aspect-[16/10] bg-slate-900 p-4 flex items-center justify-center relative overflow-hidden">
                      <div className="w-full h-full bg-white/10 rounded-xl border border-white/20 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center text-white">
                        <span className="font-bold text-[11px] tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                        <span className="text-[9px] opacity-60 mt-1">({study.country})</span>
                      </div>
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-white/90 text-daikin-blue font-bold text-[10px] uppercase rounded-full shadow-2xs">
                        {study.country}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="text-[11px] font-bold text-daikin-blue mb-1">{study.type}</div>
                        <h4 className="text-sm font-bold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors leading-snug line-clamp-2">
                          {study.title}
                        </h4>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                          {study.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setActiveCaseStudy(study)}
                          className="px-3 py-1.5 bg-slate-900 text-white font-bold text-[11px] rounded-lg group-hover:bg-daikin-blue transition-colors flex items-center gap-1"
                        >
                          <span>Detail</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <span className="text-[10px] text-slate-400 font-medium">{study.location}</span>
                      </div>
                    </div>

                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Empty Search Result */}
            {filteredGlobalStudies.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 p-8">
                <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-charcoal mb-2">Studi Kasus Tidak Ditemukan</h3>
                <p className="text-xs text-slate-500 mb-6">Tidak ada studi kasus yang sesuai dengan kriteria "{searchQuery}".</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedRegion('Semua Wilayah'); }}
                  className="px-4 py-2 bg-daikin-blue text-white font-bold text-xs rounded-xl"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </section>

        </div>
      </div>

      {/* Case Study Detail Modal View */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-100 animate-in fade-in zoom-in-95 duration-200">

            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-slate-900 to-daikin-blue-dark text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase rounded-full">
                  {activeCaseStudy.country}
                </span>
                <span className="text-xs text-white/70">{activeCaseStudy.type}</span>
              </div>
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-charcoal leading-snug mb-2">
                  {activeCaseStudy.title}
                </h2>
                <div className="flex items-center gap-2 text-xs font-semibold text-daikin-blue">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeCaseStudy.location}, {activeCaseStudy.country}</span>
                </div>
              </div>

              <div className="p-4 bg-sky-50/70 border border-sky-100 rounded-2xl">
                <div className="text-[11px] font-bold uppercase tracking-wider text-daikin-blue mb-1">Sistem Daikin Terpasang</div>
                <div className="text-sm font-bold text-charcoal">{activeCaseStudy.systemUsed}</div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                  <h4 className="text-xs font-bold text-amber-700 mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Tantangan Proyek
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{activeCaseStudy.details.challenge}</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                  <h4 className="text-xs font-bold text-daikin-blue mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-daikin-blue" /> Solusi Daikin
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{activeCaseStudy.details.solution}</p>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <h4 className="text-xs font-bold text-emerald-800 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Hasil &amp; Dampak Efisiensi
                  </h4>
                  <p className="text-xs text-emerald-700 leading-relaxed font-medium">{activeCaseStudy.details.result}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-400 font-medium">Daikin Global Case Study</span>
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="px-5 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-daikin-blue transition-colors"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </PageTransition>
  )
}
