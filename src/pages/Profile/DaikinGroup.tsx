import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Download, Globe2, Building2, Users, Star, Target, HeartHandshake, ShieldCheck, Zap, Handshake, Network, UserCheck } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function DaikinGroup() {
  return (
    <PageTransition>
      <PageMeta title="Filosofi Grup Daikin" canonical="/profile/daikin-group" />

      {/* Modern Premium Hero Banner */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue">
        <Suspense fallback={null}><AirParticles /></Suspense>
        
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="absolute -left-64 top-0 w-[800px] h-[800px] bg-daikin-blue-light/10 rounded-full blur-3xl" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          
          <nav className="flex items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/profile/about" className="hover:text-white transition-colors">Tentang Kami</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white drop-shadow-md">Filosofi Brand</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-4">
                Filosofi Grup Daikin
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Bersama, Kita Mencapai <br/> <span className="text-daikin-blue-light font-light">Masa Depan yang Cerah</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed drop-shadow">
                Misi dan tanggung jawab Daikin adalah menciptakan kenyamanan dan ketenangan bagi seluruh manusia di dunia. Kami percaya pada potensi manusia yang tak terbatas.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2} className="hidden lg:block">
              {/* Floating video container mimicking a modern UI card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/20 p-4 rounded-3xl shadow-2xl relative overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#009be0]/20 to-transparent z-0" />
                <div className="aspect-video w-full bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 relative z-10 overflow-hidden group">
                  <video src="/images/video/satu-misi.mp4" controls className="w-full h-full object-cover" poster="/images/daikin-group.jpg"></video>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Skala Global & Latar Belakang */}
      <section className="py-24 bg-gray-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Stats Grid overlapping hero */}
          <div className="grid md:grid-cols-3 gap-6 -mt-40 mb-20">
            <FadeInUp delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 flex flex-col items-center text-center h-full group hover:shadow-card-hover transition-all">
                <div className="w-16 h-16 bg-daikin-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-daikin-blue transition-all duration-300">
                  <Building2 className="w-8 h-8 text-daikin-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-4xl font-black text-charcoal mb-2">370+</h3>
                <p className="text-gray-500 font-medium">Perusahaan Global</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 flex flex-col items-center text-center h-full group hover:shadow-card-hover transition-all">
                <div className="w-16 h-16 bg-daikin-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-daikin-blue transition-all duration-300">
                  <Users className="w-8 h-8 text-daikin-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-4xl font-black text-charcoal mb-2">100,000+</h3>
                <p className="text-gray-500 font-medium">Karyawan Seluruh Dunia</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 flex flex-col items-center text-center h-full group hover:shadow-card-hover transition-all">
                <div className="w-16 h-16 bg-daikin-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-daikin-blue transition-all duration-300">
                  <Globe2 className="w-8 h-8 text-daikin-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-4xl font-black text-charcoal mb-2">170+</h3>
                <p className="text-gray-500 font-medium">Negara Operasional</p>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Latar Belakang</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Sudah 20 tahun berlalu sejak dirumuskannya "Filosofi Grup Daikin" pada tahun 2002. Grup kami berkembang pesat menjadi perusahaan global yang memajukan lingkungan dan diakui oleh masyarakat. Filosofi ini diperbaiki sebagai pedoman untuk mendukung pertumbuhan dan perkembangan manajemen, mewariskan kekuatan daya saing kepada generasi selanjutnya, serta memastikan setiap anggota grup mengambil keputusan yang tepat.
              </p>
              <p className="text-gray-400 font-medium italic mt-8">— Masanori Togawa, Presiden dan CEO (Mei 2024)</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Brand Identity / Logo */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Identitas Brand & Logo Daikin</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Logo Daikin bukan sekadar simbol, melainkan representasi dari komitmen kami terhadap inovasi, keandalan, dan kualitas tingkat global. Warna biru khas Daikin melambangkan profesionalisme dan teknologi tinggi yang ramah lingkungan.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Bentuk geometris yang solid menegaskan kestabilan grup kami, sementara filosofi desain minimalis mencerminkan kejelasan visi kami dalam menciptakan masa depan yang lebih baik melalui solusi udara yang menyegarkan.
              </p>
              <Link to="/profile/about" className="inline-block px-6 py-3 bg-daikin-blue text-white font-semibold rounded-full hover:bg-daikin-blue-dark transition-colors">
                Pelajari Tentang Kami
              </Link>
            </FadeInLeft>
            <FadeInRight>
              <div className="flex items-center justify-center h-full relative group p-8">
                <div className="absolute inset-0 bg-daikin-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                <img src="/images/logo/logo-daikin.svg" alt="Daikin Logo" className="w-[300px] md:w-[450px] lg:w-[500px] h-auto relative z-10 group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl" />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Nilai Utama (Core Values) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Nilai Utama <span className="text-daikin-blue font-light">(Core Values)</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tiga pondasi utama yang mengarahkan setiap tindakan dan budaya kerja di dalam Grup Daikin.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Kredibilitas Mutlak', subtitle: 'Absolute Credibility', icon: ShieldCheck, desc: 'Membangun dan menjaga kepercayaan penuh dalam setiap interaksi bisnis maupun sosial.' },
              { title: 'Manajemen yang Berjiwa Wirausaha', subtitle: 'Enterprising Management', icon: Target, desc: 'Mendorong inovasi, fleksibilitas, dan proaktivitas dalam merespon kebutuhan pasar.' },
              { title: 'Keharmonisan Hubungan Personal', subtitle: 'Harmonious Personal Relations', icon: HeartHandshake, desc: 'Menghargai keragaman, saling menghormati, dan berkolaborasi demi kesuksesan bersama.' }
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-daikin-blue/5 rounded-full blur-2xl group-hover:bg-daikin-blue/10 transition-colors" />
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 relative z-10">
                      <Icon className="w-6 h-6 text-daikin-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-1 relative z-10">{value.title}</h3>
                    <p className="text-daikin-blue font-medium text-sm mb-4 relative z-10">{value.subtitle}</p>
                    <p className="text-gray-600 relative z-10 leading-relaxed">{value.desc}</p>
                  </div>
                </FadeInUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6 Pilar Filosofi Grup */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">6 Pilar Filosofi Grup Daikin</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Prinsip dasar yang membimbing operasional, inovasi, dan tanggung jawab Daikin kepada dunia.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: 'Menyelesaikan permasalahan sosial dan meningkatkan nilai perusahaan', icon: Globe2 },
              { id: 2, title: 'Menciptakan nilai baru dengan mengantisipasi "kebutuhan masa depan"', icon: Zap },
              { id: 3, title: 'Mewujudkan dunia yang lebih baik melalui teknologi terdepan', icon: Star },
              { id: 4, title: 'Mempertahankan kepercayaan masyarakat melalui komunikasi dan hubungan baik', icon: Handshake },
              { id: 5, title: 'Berpikir skala global agar terus menjadi grup yang fleksibel dan dinamis', icon: Network },
              { id: 6, title: 'Mempraktikkan People-Centered Management (PCM) secara menyeluruh', icon: UserCheck }
            ].map((pilar, i) => {
              const Icon = pilar.icon
              return (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-daikin-blue/30 hover:shadow-md transition-all h-full flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-daikin-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-daikin-blue transition-colors">
                      <Icon className="w-6 h-6 text-daikin-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-daikin-blue/50 mb-1 block">Pilar {pilar.id}</span>
                      <h4 className="font-bold text-charcoal leading-snug group-hover:text-daikin-blue transition-colors">{pilar.title}</h4>
                    </div>
                  </div>
                </FadeInUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* PCM & Lingkungan */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* PCM Section */}
            <FadeInLeft>
              <div className="bg-daikin-blue-50 rounded-3xl p-8 md:p-12 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <h2 className="text-3xl font-bold text-charcoal mb-4 relative z-10">Dasar Keyakinan PCM</h2>
                <p className="text-daikin-blue font-medium mb-8 relative z-10">People-Centered Management</p>
                <div className="space-y-6 relative z-10">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
                    <h4 className="font-bold text-charcoal mb-1">Terus Menghadapi Tantangan & Berkembang</h4>
                    <p className="text-sm text-gray-600">Berani berinovasi dan tidak takut gagal menghadapi "shuraba" (situasi menantang).</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
                    <h4 className="font-bold text-charcoal mb-1">Hubungan & Kerja Sama Tim Tulus</h4>
                    <p className="text-sm text-gray-600">Diskusi bebas dengan rasa memiliki (sense of ownership) dan Fast & Flat Management.</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
                    <h4 className="font-bold text-charcoal mb-1">Kegigihan Untuk Mencapai Hasil</h4>
                    <p className="text-sm text-gray-600">Tindakan kreatif tanpa terikat kesuksesan masa lalu, memecahkan masalah dengan tekad kuat.</p>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Lingkungan Section */}
            <FadeInRight>
              <div className="bg-[#E8F3EB] rounded-3xl p-8 md:p-12 h-full relative overflow-hidden flex flex-col justify-between group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                
                <div className="relative z-10 mb-8">
                  <h2 className="text-3xl font-bold text-charcoal mb-4">Kebijakan Lingkungan</h2>
                  <p className="text-[#2E7D32] font-medium text-lg mb-6">Menjadi Perusahaan yang Memimpin Penerapan Praktik Ramah Lingkungan.</p>
                  <p className="text-gray-700 leading-relaxed">
                    Daikin proaktif mengembangkan inisiatif merespon isu lingkungan. Menggabungkan inisiatif lingkungan dalam manajemen adalah prioritas utama. Mulai dari pengembangan produk, manufaktur, distribusi hingga daur ulang, kami mempromosikan produk baru dan inovasi teknologi yang memimpin dunia menjadi lingkungan yang lebih sehat.
                  </p>
                </div>

                {/* Full Image inside card */}
                <div className="relative z-10 w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg mt-auto group-hover:shadow-xl transition-shadow duration-500">
                  <img src="/images/daikin-group.jpg" alt="Praktik Ramah Lingkungan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </FadeInRight>

          </div>
        </div>
      </section>

      {/* Download Section (Blue Banner Tone) */}
      <section className="py-24 bg-[#eef7fd]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp>
            <div className="bg-[#009be0] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg relative overflow-hidden">
              {/* Subtle background dots/pattern to match the screenshot vibe */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
                backgroundSize: '30px 30px',
              }} />
              
              <div className="max-w-2xl text-left text-white relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold tracking-wide mb-6">
                  <Download className="w-3.5 h-3.5" />
                  Dokumen Resmi Daikin
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">Pelajari Lebih Dalam</h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Unduh dokumen resmi "Filosofi Grup Daikin" untuk membaca rincian panduan perilaku PCM (PCM Behaviors) dan Panduan Tindakan Lingkungan secara menyeluruh.
                </p>
              </div>
              
              <div className="shrink-0 relative z-10 w-full md:w-auto">
                <a 
                  href="/documents/filosofi-grup-daikin.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#009be0] font-bold rounded-full hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  Unduh PDF Filosofi <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

    </PageTransition>
  )
}
