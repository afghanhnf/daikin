import { useState } from 'react'
import { 
  Clock, Sparkles, ArrowRight, X, CheckCircle2,
  Globe2, Newspaper
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'

interface ArticleItem {
  id: string
  title: string
  category: string
  source: string
  description: string
  readTime: string
  date: string
  featured?: boolean
  details: {
    overview: string
    keyPoints: string[]
    conclusion: string
  }
}

const articlesData: ArticleItem[] = [
  {
    id: 'neuroscience-fatigue',
    title: 'TUJUAN PENELITIAN NEUROSAINS DI DAIKIN INDUSTRIES : UDARA YANG MENGHAMBAT KELELAHAN',
    category: 'Neurosains & Well-being',
    source: 'TOYO KEIZAI Japan',
    readTime: '5 min',
    date: '2024',
    featured: true,
    description: 'Bayangkan udara yang tidak hanya membuat Anda nyaman, tetapi juga meningkatkan suasana hati, fokus, bahkan cita rasa makanan Anda. Para peneliti di Daikin Industries sedang mengeksplorasi bagaimana udara dapat diubah untuk mengurangi kelelahan dan meningkatkan kualitas kehidupan sehari-hari, sehingga menjadi bagian aktif dari kesejahteraan kita.',
    details: {
      overview: 'Penelitian tingkat lanjut di Daikin Industries memanfaatkan pendekatan neurosains untuk mengukur dampak kualitas udara pada gelombang otak dan tingkat kelelahan mental. Dengan mengontrol kelembapan, temperatur, dan frekuensi sirkulasi udara, kelelahan kognitif dapat diminimalkan secara signifikan.',
      keyPoints: [
        'Riset gelombang otak mengukur penurunan tingkat kelelahan hingga 35% pada ruangan teratur.',
        'Kombinasi kontrol suhu presisi dan modulasi kelembapan menstimulasi fokus kerja berdurasi panjang.',
        'Penerapan awal pada ruang kantor modern dan laboratorium produktivitas di Jepang.'
      ],
      conclusion: 'Udara bukan lagi elemen pasif dalam ruangan, melainkan instrumen aktif yang mendukung kesehatan mental, vitalitas fisik, dan produktivitas harian manusia.'
    }
  },
  {
    id: 'ac-system-energy-saving',
    title: 'MEMAHAMI SISTEM AC ANDA MEMBERIKAN PERBEDAAN BESAR DALAM PENGHEMATAN ENERGI DAN TAGIHAN LISTRIK',
    category: 'Efisiensi Energi',
    source: 'TOYO KEIZAI Japan',
    readTime: '4 min',
    date: '2024',
    featured: false,
    description: 'Temukan rahasia untuk memangkas tagihan listrik Anda hanya dengan memahami sistem AC dengan lebih baik. Dapatkan tips dari "Air Evangelist" Daikin Industries tentang bagaimana perubahan kecil dapat menghasilkan penghematan besar, sekaligus menjaga Anda tetap sejuk dan dompet tetap lebih aman.',
    details: {
      overview: 'Banyak pengguna tidak menyadari bahwa kebiasaan penggunaan AC berpengaruh hingga 40% pada total konsumsi energi rumah tangga. Daikin Air Evangelist membagikan panduan teknis yang mudah diterapkan untuk mengoptimalkan kerja kompresor Inverter.',
      keyPoints: [
        'Menjaga suhu ideal 24°C - 26°C menghindarkan kompresor dari lonjakan daya ekstrem.',
        'Pembersihan filter rutin setiap 2 minggu meningkatkan efisiensi pendinginan hingga 15%.',
        'Memanfaatkan fitur Economode saat aktivitas ruangan cenderung pasif.'
      ],
      conclusion: 'Dengan pemahaman tepat tentang cara kerja AC Inverter, efisiensi energi yang optimal dapat dicapai tanpa mengorbankan kenyamanan udara di rumah.'
    }
  },
  {
    id: 'sleep-quality-heatwave',
    title: 'TIDUR NYENYAK DI MALAM HARI MESKI CUACA PANAS EKSTREM',
    category: 'Kesehatan & Tidur',
    source: 'TOYO KEIZAI Japan',
    readTime: '3 min',
    date: '2024',
    featured: false,
    description: 'Tidur yang cukup sangat penting untuk kesehatan. Namun, cuaca panas di malam hari membuat tidur nyenyak bisa menjadi tantangan. Simak tips menggunakan AC dengan efektif agar tidur lebih nyaman di malam yang gerah!',
    details: {
      overview: 'Suhu tubuh inti perlu turun sekitar 1°C untuk memicu fase tidur lelap (REM sleep). Dalam kondisi cuaca panas ekstrem, ketidakstabilan suhu ruangan sering memicu terbangun di malam hari.',
      keyPoints: [
        'Gunakan mode Sleep / Comfort Airflow agar hembusan angin tidak mengarah langsung ke badan.',
        'Atur timer matikan atau kenaikan suhu otomatis 1°C setelah 2 jam pertama tidur.',
        'Kombinasikan kontrol kelembapan (Dry Mode) untuk mencegah rasa lengket pada kulit.'
      ],
      conclusion: 'Pengaturan AC yang bijak menjaga stabilitas suhu malam hari, memastikan tubuh mendapatkan pemulihan total saat beristirahat.'
    }
  },
  {
    id: 'avocado-consumption-tech',
    title: 'TEKNOLOGI CANGGIH MENDORONG "LONJAKAN KONSUMSI ALPUKAT"',
    category: 'Inovasi Rantai Dingin',
    source: 'TOYO KEIZAI Japan',
    readTime: '6 min',
    date: '2024',
    featured: false,
    description: 'Salah satu tantangan dalam impor sayur dan buah adalah kerusakan selama transportasi. Begitu rusak, produk tersebut harus dibuang. Daikin hadir dengan teknologi inovatif untuk mencegah kerusakan, menjaga kesegaran makanan, dan mengurangi limbah pangan.',
    details: {
      overview: 'Transportasi komoditas sensitif seperti alpukat membutuhkan kontrol atmosfer yang presisi tinggi. Daikin Active CA (Controlled Atmosphere) mengatur kadar oksigen dan karbon dioksida di dalam kontainer pendingin kontainer laut.',
      keyPoints: [
        'Mengurangi tingkat respirasi buah sehingga memperlambat pematangan selama transit lintas benua.',
        'Menurunkan potensi kerusakan dan pembuangan limbah pangan hingga 60%.',
        'Memungkinkan distribusi pasokan alpukat segar ke berbagai pelosok dunia dengan kualitas stabil.'
      ],
      conclusion: 'Inovasi pendingin Daikin tidak hanya mendinginkan ruangan harian, tetapi juga menjaga ketahanan rantai pasokan pangan global.'
    }
  },
  {
    id: 'focus-air-quality',
    title: 'SULIT FOKUS? BISA JADI MASALAHNYA ADALAH UDARA!',
    category: 'Produktivitas Udara',
    source: 'TOYO KEIZAI Japan',
    readTime: '4 min',
    date: '2024',
    featured: false,
    description: 'Dengan mengontrol udara secara tepat, kini kami ciptakan udara yang dapat meningkatkan konsentrasi, menenangkan, meningkatkan efisiensi olahraga, dan mengurangi kelelahan. Inovasi ini menghadirkan "Potensi Udara" untuk meningkatkan kualitas hidup Anda.',
    details: {
      overview: 'Akumulasi emisi CO2 dan kurangnya sirkulasi udara segar di dalam ruangan sering menjadi penyebab utama kantuk, sakit kepala ringan, dan penurunan daya fokus kerja.',
      keyPoints: [
        'Ventilasi aktif menjaga kadar konsentrasi CO2 tetap berada di bawah 1.000 ppm.',
        'Filtrasi Streamer menyaring polutan halus dan debu mikro penurun kualitas respirasi.',
        'Pengondisian udara cerdas mengoptimalkan daya tahan tubuh dan fokus mental.'
      ],
      conclusion: 'Pengelolaan udara yang tepat membuka potensi kognitif secara maksimal, menciptakan lingkungan kerja dan belajar yang jauh lebih responsif.'
    }
  }
]

export default function Articles() {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null)

  const featuredArticle = articlesData.find(a => a.featured) || articlesData[0]
  const gridArticles = articlesData.filter(a => !a.featured)

  return (
    <PageTransition>
      <PageMeta 
        title="Daikin's Air Today - Artikel Pilihan Toyo Keizai Japan" 
        canonical="/information/articles" 
      />

      {/* Modern Page Hero Banner */}
      <div className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue text-white">
        <AirParticles color="white" />
        
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Informasi', path: '/solutions' }, 
              { label: "Daikin's Air Today" }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 backdrop-blur-md border border-white/20">
                  <span>DAIKIN'S AIR TODAY</span>
                  <span className="opacity-50">•</span>
                  <span className="text-cyan-200 font-bold">TOYO KEIZAI JAPAN</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  Daikin's Air Today <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-100 font-light">
                    Wawasan Sains & Udara
                  </span>
                </h1>
                
                <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
                  Temukan artikel-artikel pilihan yang pernah dimuat di <strong className="text-white font-semibold">TOYO KEIZAI</strong>, media ternama di Jepang. Mengeksplorasi potensi udara dari sudut pandang sains, teknologi, dan kesejahteraan hidup.
                </p>

                <div className="p-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl flex items-start gap-3 max-w-xl">
                  <Globe2 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/90 leading-relaxed font-medium">
                    Kumpulan rilis publikasi resmi seputar riset udara masa depan, efisiensi energi, dan teknologi terdepan Daikin Industries Japan.
                  </p>
                </div>
              </FadeInUp>
            </div>

            {/* Hero Right-Side Glassmorphic Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/15 rounded-2xl border border-white/25 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                  <span className="text-xs opacity-60 mt-1">(Daikin Air Today & Toyo Keizai Japan Articles)</span>
                </div>
              </FadeInUp>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-slate-50 py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Notice Bar */}
          <FadeInUp className="mb-12 p-4 md:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-daikin-blue flex items-center justify-center shrink-0 border border-sky-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Artikel Pilihan Publikasi Media Jepang</div>
                <div className="text-sm font-bold text-charcoal">Temukan artikel-artikel pilihan yang pernah dimuat di TOYO KEIZAI, media ternama di Jepang.</div>
              </div>
            </div>
            <div className="px-3.5 py-1.5 bg-sky-50 text-daikin-blue font-bold text-xs rounded-full border border-sky-100 shrink-0">
              5 Artikel Terpublikasi
            </div>
          </FadeInUp>

          {/* Featured Article Banner Card */}
          <FadeInUp className="mb-14">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="grid lg:grid-cols-12">
                
                {/* Left Thumbnail Placeholder */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-daikin-blue-dark p-8 flex flex-col items-center justify-center text-center text-white relative min-h-[280px]">
                  <div className="w-full aspect-[4/3] max-w-sm bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-6 text-white">
                    <span className="font-bold text-xs tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                    <span className="text-[11px] opacity-60 mt-1">(Penelitian Neurosains Daikin Industries)</span>
                  </div>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" /> Artikel Utama
                  </div>
                </div>

                {/* Right Article Summary */}
                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-sky-50 text-daikin-blue font-bold text-xs rounded-full border border-sky-100">
                        {featuredArticle.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                        <Newspaper className="w-3.5 h-3.5 text-slate-400" /> {featuredArticle.source}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-extrabold text-charcoal mb-4 group-hover:text-daikin-blue transition-colors leading-snug">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {featuredArticle.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button 
                      onClick={() => setActiveArticle(featuredArticle)}
                      className="px-6 py-3 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-colors flex items-center gap-2 group/btn shadow-sm"
                    >
                      <span>Lebih Lanjut</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <span className="text-xs text-slate-400 font-medium">Terbit di Toyo Keizai</span>
                  </div>
                </div>

              </div>
            </div>
          </FadeInUp>

          {/* Grid of Remaining Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {gridArticles.map((article, i) => (
              <FadeInUp key={article.id} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden">
                  
                  {/* Article Glassmorphic Thumbnail Box */}
                  <div className="w-full aspect-[16/10] bg-slate-900 p-5 flex items-center justify-center relative overflow-hidden">
                    <div className="w-full h-full bg-white/10 rounded-xl border border-white/20 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center text-white">
                      <span className="font-bold text-xs tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                      <span className="text-[10px] opacity-60 mt-1">({article.category})</span>
                    </div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-daikin-blue font-bold text-[10px] uppercase rounded-full backdrop-blur-md shadow-2xs">
                      {article.source}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 bg-sky-50 text-daikin-blue font-bold text-[11px] rounded-full border border-sky-100">
                          {article.category}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-charcoal mb-3 group-hover:text-daikin-blue transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-6">
                        {article.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button 
                        onClick={() => setActiveArticle(article)}
                        className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl group-hover:bg-daikin-blue transition-colors flex items-center gap-1.5 shadow-2xs"
                      >
                        <span>Lebih Lanjut</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-[11px] text-slate-400 font-medium">Toyo Keizai</span>
                    </div>
                  </div>

                </div>
              </FadeInUp>
            ))}
          </div>

        </div>
      </div>

      {/* Article Detail View Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-slate-900 to-daikin-blue-dark text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase rounded-full">
                  {activeArticle.source}
                </span>
                <span className="text-xs text-white/70">{activeArticle.category}</span>
              </div>
              <button 
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-charcoal leading-snug mb-3">
                  {activeArticle.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed bg-sky-50/70 p-4 rounded-2xl border border-sky-100 font-medium">
                  {activeArticle.description}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-daikin-blue mb-2">Ikhtisar Publikasi</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeArticle.details.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">Poin-Poin Utama Penelitian</h3>
                <div className="space-y-2">
                  {activeArticle.details.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <h4 className="text-xs font-bold text-emerald-800 mb-1">Kesimpulan & Dampak</h4>
                <p className="text-xs text-emerald-700 leading-relaxed font-medium">
                  {activeArticle.details.conclusion}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-400 font-medium">Sumber: Toyo Keizai Japan</span>
              <button 
                onClick={() => setActiveArticle(null)}
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
