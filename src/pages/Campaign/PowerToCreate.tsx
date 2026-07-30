import { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Play, ChevronRight, ArrowRight, Thermometer, Droplets, Sparkles, Wind,
  ShieldCheck, VolumeX, Zap, Activity, Eye, RefreshCw, Leaf, Globe,
  Building2, Users, CheckCircle2, Heart, Award, Compass, FileText, MapPin,
  Image as ImageIcon
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// 4 Core Air Elements
const FOUR_ELEMENTS = [
  {
    id: 'temperature',
    title: 'Temperatur (Suhu)',
    subtitle: 'Kesejukan Presisi & Stabil',
    icon: Thermometer,
    color: 'text-[#0097e6]',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    gradient: 'from-[#0080cb] to-[#00b0f0]',
    desc: 'Pengaturan suhu dingin presisi tinggi yang sejuk dan stabil tanpa lonjakan panas drastis, memberikan kenyamanan beristirahat di setiap sudut ruangan.',
    image: '/images/hero/slider-perfecting.jpg'
  },
  {
    id: 'humidity',
    title: 'Kelembapan',
    subtitle: 'Keseimbangan Kelembaban Udara',
    icon: Droplets,
    color: 'text-[#0080cb]',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    gradient: 'from-[#005a87] to-[#0080cb]',
    desc: 'Kontrol kelembaban udara ideal otomatis untuk menjaga kelembutan kulit, mencegah tenggorokan kering, dan menghindari pengembunan uap air berlebih.',
    image: '/images/kenali/kualitas-produk.webp'
  },
  {
    id: 'hygiene',
    title: 'Kebersihan Udara',
    subtitle: 'Streamer Technology & Filtrasi',
    icon: Sparkles,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    gradient: 'from-[#0097e6] to-cyan-500',
    desc: 'Filtrasi plasma tingkat tinggi & Streamer Technology eksklusif yang aktif menghancurkan 99.9% virus, bakteri, debu PM2.5, dan bau tidak sedap.',
    image: '/images/hero/slider-streamer.jpg'
  },
  {
    id: 'airflow',
    title: 'Aliran Udara',
    subtitle: 'Hembusan 3D Airflow Lembut',
    icon: Wind,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50/80',
    borderColor: 'border-sky-200',
    gradient: 'from-sky-500 to-[#0080cb]',
    desc: 'Hembusan angin 3D cerdas yang tersebar menyeluruh tanpa memberikan hembusan angin langsung yang menusuk tubuh, memberikan suasana sejuk alami.',
    image: '/images/hero/slider-emura.jpeg'
  }
]

// 8 Sub-Elements Beyond the 4 Elements
const BEYOND_ELEMENTS = [
  { icon: ShieldCheck, title: 'Pencegahan Bau', desc: 'Deodorizing filter menyerap bau tak sedap' },
  { icon: Sparkles, title: 'Pembersihan Udara', desc: 'Streamer Technology membunuh mikroba' },
  { icon: VolumeX, title: 'Hening / Quiet 19dB', desc: 'Operasi super silent tanpa kebisingan' },
  { icon: Zap, title: 'Hemat Energi', desc: 'Teknologi Inverter DC hemat hingga 60%' },
  { icon: Activity, title: 'Filter Anti-Bakteri', desc: 'Perlindungan ekstra dari jamur & kuman' },
  { icon: Droplets, title: 'Kelembapan Otomatis', desc: 'Sensoring kelembaban pintar 24/7' },
  { icon: RefreshCw, title: 'Ventilasi Segar', desc: 'Sirkulasi Oksigen segar outdoor' },
  { icon: Eye, title: 'Sensor Manusia', desc: 'Intelligent Eye mendeteksi gerakan manusia' },
]

export default function PowerToCreate() {
  const [activeElementIndex, setActiveElementIndex] = useState(0)
  const activeElem = FOUR_ELEMENTS[activeElementIndex]

  return (
    <PageTransition>
      <PageMeta
        title="The Power to Create The Air of The Future - Kampanye Daikin"
        description="Melalui inovasi 4 Elemen Udara (Suhu, Kelembapan, Kebersihan, Aliran Udara), Daikin berkomitmen menciptakan masa depan udara yang sehat, efisien, dan ramah lingkungan."
        canonical="/campaign/power-to-create"
      />

      {/* Hero Header Section */}
      <div className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#005a87] via-[#0080cb] to-[#00b0f0] text-white">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-7/12">
            <nav className="flex items-center space-x-2 text-white/80 mb-6 text-xs md:text-sm font-medium tracking-wide flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/insights" className="hover:text-white transition-colors">Wawasan</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-semibold">Power to Create</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/25">
                KAMPANYE GLOBAL DAIKIN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                The Power to Create
              </h1>

              <h2 className="text-2xl md:text-4xl font-bold text-sky-100 mb-6 tracking-tight">
                The Air of The Future
              </h2>

              <p className="text-white/95 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-8 drop-shadow-sm">
                Udara adalah elemen vital kehidupan kita. Melalui inovasi teknologi, Daikin berkomitmen untuk menyempurnakan kualitas udara demi kesehatan, efisiensi, dan kenyamanan hidup generasi masa depan.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#four-elements"
                  className="px-7 py-3.5 bg-white text-[#0080cb] rounded-xl font-bold text-xs md:text-sm hover:bg-sky-50 transition-all shadow-lg flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#0080cb]" />
                  <span>Pelajari 4 Elemen</span>
                </a>

                <Link
                  to="/products"
                  className="px-7 py-3.5 bg-white/15 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-xs md:text-sm hover:bg-white hover:text-[#0080cb] transition-all shadow-sm flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Lihat Inovasi Produk</span>
                </Link>
              </div>
            </FadeInUp>
          </div>

          {/* Campaign Hero Visual Placeholder Box */}
          <FadeInUp delay={0.2} className="lg:w-5/12 flex justify-center lg:justify-end w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0097E0]/20 to-transparent z-0" />
              <div className="aspect-[4/3] w-full bg-white/10 rounded-2xl flex items-center justify-center border border-white/15 relative z-10 p-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <ImageIcon className="w-10 h-10 text-white/50 mb-1" />
                  <span className="text-white/60 tracking-widest text-xs uppercase font-bold">Campaign Visual Placeholder</span>
                  <span className="text-white/40 text-[11px] font-sans">The Power to Create - Campaign Visual Area</span>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Section 1: 4 Elemen Utama Udara */}
      <section id="four-elements" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          <FadeInUp className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#0080cb] font-bold text-xs uppercase tracking-widest bg-sky-100/80 px-4 py-1.5 rounded-full inline-block border border-sky-200/60">
              Inovasi Tata Udara Terpadu
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              4 Elemen
            </h2>
            <div className="w-16 h-1 bg-[#0097e6] mx-auto rounded-full"></div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed pt-2 font-light">
              Pengaturan 4 elemen utama udara (Suhu, Kelembapan, Kebersihan, Aliran Udara) menciptakan kenyamanan udara sempurna di setiap ruang.
            </p>
          </FadeInUp>

          {/* Video Placement (Campaign Opening Video Placeholder) */}
          <FadeInUp delay={0.1} className="mb-14">
            <section className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <div className="w-full aspect-video bg-gradient-to-br from-[#005a87] via-[#0080cb] to-[#00b0f0] rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center group hover:border-[#0080cb] transition-colors relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold font-display text-white mb-1">
                    [Video Placement - Power to Create Campaign]
                  </h4>
                  <p className="text-xs font-sans text-white/80 max-w-md">
                    Video Kampanye "The Power to Create The Air of The Future" oleh Daikin Indonesia
                  </p>
                </div>
              </div>
            </section>
          </FadeInUp>

          {/* 4 Cards Grid Showcase with Empty Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_ELEMENTS.map((elem, idx) => {
              const Icon = elem.icon
              return (
                <FadeInUp key={elem.id} delay={0.1 * (idx + 1)}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                    
                    {/* Empty Thumbnail Placeholder */}
                    <div className="w-full aspect-[4/3] bg-slate-50 border-b border-slate-200/60 flex flex-col items-center justify-center p-4 relative group-hover:bg-sky-50/50 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-[#0080cb] flex items-center justify-center mb-2">
                        <ImageIcon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Thumbnail Placeholder</span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#0080cb] transition-colors">{elem.title}</h4>
                          <div className={`w-7 h-7 rounded-full ${elem.bgColor} ${elem.color} flex items-center justify-center`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-light">
                          {elem.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveElementIndex(idx)}
                        className="text-xs font-bold text-[#0080cb] flex items-center gap-1 group-hover:gap-2 transition-all pt-2"
                      >
                        <span>Pelajari Lebih Lanjut</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </FadeInUp>
              )
            })}
          </div>

          <FadeInUp delay={0.5} className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-slate-600 text-sm md:text-base font-light italic bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              "Dengan mengendalikan 4 elemen udara secara terpadu, Daikin tidak hanya mendinginkan ruangan, tetapi menciptakan ekosistem udara yang sehat dan disesuaikan dengan kebutuhan setiap individu."
            </p>
          </FadeInUp>

        </div>
      </section>

      {/* Section 2: Multigenerational Banner & Hal-hal Di Samping 4 Elemen */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          {/* Family Banner Image */}
          <FadeInUp className="mb-16 rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[21/9] bg-slate-900">
            <img
              src="/images/hero/slider-perfecting.jpg"
              alt="Multigenerational Happy Family"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-8 md:p-12">
              <div className="text-white max-w-2xl space-y-2">
                <span className="text-sky-300 text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  Kenyamanan Keluarga Mulai Dari Udara
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold leading-tight">
                  Kualitas Udara Sempurna Untuk Setiap Generasi
                </h3>
              </div>
            </div>
          </FadeInUp>

          {/* Section Heading: Hal-hal Di Samping 4 Elemen */}
          <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-[#0080cb] font-bold text-xs uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full inline-block border border-sky-100">
              Perhatian Komprehensif
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Hal-hal Di Samping 4 Elemen
            </h2>
            <div className="w-16 h-1 bg-[#0097e6] mx-auto rounded-full"></div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              Selain 4 elemen utama, Daikin juga memperhatikan berbagai aspek lingkungan dan kesehatan secara menyeluruh. Mulai dari pencegahan bau, eliminasi virus dan bakteri, kontrol tingkat kebisingan, hingga efisiensi konsumsi listrik secara hemat dan ramah lingkungan.
            </p>
          </FadeInUp>

          {/* 8 Sub-Elements Grid Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BEYOND_ELEMENTS.map((item, idx) => {
              const Icon = item.icon
              return (
                <FadeInUp key={item.title} delay={0.05 * (idx + 1)}>
                  <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 hover:border-[#0080cb] hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4 group h-full">
                    <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-[#0080cb] group-hover:bg-[#0080cb] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-[#0080cb] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              )
            })}
          </div>

        </div>
      </section>

      {/* Section 3: Meningkatkan Nilai Ruangan */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Engineering Collaboration Image */}
            <FadeInLeft className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
                <img
                  src="/images/kenali/mitra.jpg"
                  alt="Daikin Engineers Collaborating"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-sky-300 font-bold text-xs uppercase tracking-wider block mb-1">
                      Konsultasi Teknik & Tata Udara
                    </span>
                    <h4 className="text-lg font-bold">Desain Sistem Kustom untuk Berbagai Ruang</h4>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Content Text */}
            <FadeInRight className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-[#0080cb] font-bold text-xs uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full inline-block">
                  Nilai Tambah Properti
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
                  Meningkatkan Nilai Ruangan
                </h2>
                <div className="w-16 h-1 bg-[#0097e6] rounded-full"></div>
              </div>

              <div className="space-y-4 text-slate-600 text-base font-light leading-relaxed">
                <p>
                  Daikin terus berinovasi untuk memberikan nilai tambah pada setiap tipe ruangan. Baik ruang hunian, perkantoran, fasilitas kesehatan, maupun ruang komersial.
                </p>
                <p>
                  Kami menciptakan solusi tata udara kustom yang tidak hanya memenuhi standar fungsional tetapi juga meningkatkan kualitas hidup, efisiensi kerja, dan estetika interior secara keseluruhan.
                </p>
              </div>

              {/* Room Applications List */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Hunian & Penthouse Mewah',
                  'Gedung Perkantoran & BMS',
                  'Klinik & Fasilitas Kesehatan',
                  'Restoran & Area Komersial'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeInRight>
          </div>

        </div>
      </section>

      {/* Section 4: Komitmen Berkelanjutan untuk Masa Depan Udara (Net Zero & Green Energy) */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <FadeInLeft className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-sky-300 font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/20">
                  Target Karbon Netral 2050
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Komitmen Berkelanjutan<br />
                  <span className="text-sky-300">untuk Masa Depan Udara</span>
                </h2>
                <div className="w-16 h-1 bg-sky-400 rounded-full"></div>
              </div>

              <p className="text-sky-100/90 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Daikin terus melangkah lebih jauh dalam mewujudkan masa depan udara yang lebih bersih, hijau, dan berkelanjutan. Dengan menerapkan teknologi energi terbarukan, refrigeran ramah lingkungan R-32, serta target Net Zero Emission 2050, kami berdedikasi menjaga kelestarian bumi bagi generasi mendatang.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center">
                  <Leaf className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="block text-2xl font-extrabold text-white">2050</span>
                  <span className="text-[11px] text-sky-200">Target Net Zero Karbon</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center">
                  <Globe className="w-6 h-6 text-sky-400 mx-auto mb-2" />
                  <span className="block text-2xl font-extrabold text-white">R-32</span>
                  <span className="text-[11px] text-sky-200">Lower GWP Refrigerant</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center">
                  <Zap className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <span className="block text-2xl font-extrabold text-white">60%</span>
                  <span className="text-[11px] text-sky-200">Hemat Energi Inverter</span>
                </div>
              </div>
            </FadeInLeft>

            {/* City Skyline Visual Frame */}
            <FadeInRight className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] bg-slate-900 group">
                <img
                  src="/images/inovasi/green-manufacturing.png"
                  alt="Modern Green City Skyline"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block">
                      Lingkungan & Udara Bersih
                    </span>
                    <h4 className="text-base font-bold">Teknologi Manufaktur Hijau Daikin</h4>
                  </div>
                </div>
              </div>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* Section 5: Bottom Links & Dealer CTA */}
      <div className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          <div className="bg-gradient-to-r from-[#0080cb] to-[#00b0f0] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Wujudkan Masa Depan Udara di Rumah Anda
              </h3>
              <p className="text-sky-100 text-sm md:text-base font-light max-w-xl">
                Jelajahi produk Daikin atau hubungi konsultan resmi kami untuk rekomendasi sistem tata udara yang tepat.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Link
                to="/products"
                className="px-6 py-3.5 bg-white text-[#0080cb] rounded-xl font-extrabold text-xs md:text-sm hover:bg-sky-50 transition-all shadow-md flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#0080cb]" />
                <span>Koleksi Produk</span>
              </Link>

              <Link
                to="/services/proshop"
                className="px-6 py-3.5 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-xl font-extrabold text-xs md:text-sm hover:bg-white hover:text-[#0080cb] transition-all shadow-sm flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Temukan Dealer</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </PageTransition>
  )
}
