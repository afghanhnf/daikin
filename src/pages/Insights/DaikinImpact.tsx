import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Heart, GraduationCap, Sun } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function DaikinImpact() {
  return (
    <PageTransition>
      <PageMeta title="Daikin Impact - CSR" canonical="/profile/csr" />

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
            <span className="text-white drop-shadow-md">CSR</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-white text-sm font-medium mb-6 shadow-sm">
                Corporate Social Responsibility
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Tanggung Jawab <br/> <span className="text-daikin-blue-light font-light">Sosial</span>
              </h1>
              <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow max-w-2xl">
                <p>
                  Daikin Group menawarkan produk-produk yang memanfaatkan teknologi baik dalam penyejuk udara dan fluorochemicals untuk memberikan kenyamanan dalam semua aspek kehidupan masyarakat di seluruh dunia.
                </p>
                <p>
                  Melalui kekuatan kami dalam teknologi hemat energi, kami secara proaktif mendukung inisiatif yang mendukung pengembangan komunitas.
                </p>
              </div>
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

      <div className="bg-gray-50/50 py-20 lg:py-32 overflow-hidden">
        
        {/* Section 1: Kemendikbud */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative z-10">
              <FadeInLeft>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 shadow-card flex items-center justify-center border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-widest text-sm font-bold">Kemendikbud Meeting<br/>Placeholder</span>
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-daikin-blue-100 rounded-full blur-3xl -z-10" />
              </FadeInLeft>
            </div>
            
            <div className="lg:col-span-5 relative z-20">
              <FadeInRight>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-card border border-gray-100 lg:-ml-24 relative mt-8 lg:mt-0">
                  <div className="w-12 h-12 rounded-full bg-daikin-blue-50 flex items-center justify-center mb-6">
                     <GraduationCap className="w-6 h-6 text-daikin-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal mb-6 leading-tight">
                    PT Daikin Airconditioning Indonesia dan <span className="text-daikin-blue">KEMENDIKBUD</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Tahun 2019, PT Daikin Airconditioning Indonesia (DID) memperluas pelatihan ke SMK karena sekolah adalah sumber utama untuk masa depan Indonesia. Dengan bekerjasama dengan pihak kementerian dan guru-guru SMK, DID ingin mempersiapkan generasi masa depan Indonesia, melatih mereka dan mempersiapkan mereka untuk situasi aktual di lapangan yang bisa menangani berbagai jenis produk AC secara konfiden dan profesionalisme.
                  </p>
                </div>
              </FadeInRight>
            </div>
          </div>
        </section>

        {/* Section 2: Origami Day (Alternating) */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 relative z-20">
              <FadeInLeft>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-card border border-gray-100 lg:-mr-24 relative mt-8 lg:mt-0">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                     <Sun className="w-6 h-6 text-orange-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal mb-6 leading-tight">
                    DAIKIN <span className="text-orange-500">Origami Day</span>
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      Masih dalam semangat Hari Anak Nasional tanggal 23 Juli. Daikin Origami Day yang diselenggarakan pada 04 Agustus 2019 mengusung dunia anak dan pendidikan sebagai tema besar acara kali ini. Dengan kincir angin sebagai simbolnya, melambangkan lini bisnis dari Daikin sendiri sekaligus menjadi lambang energi yang terus berputar sebagai sumber kehidupan.
                    </p>
                    <p>
                      Terima kasih kepada semua yang telah berpartisipasi dalam momen kebersamaan ini. Semoga Daikin tetap dapat berkomitmen dalam kepedulian terhadap dunia anak-anak dan pendidikan.
                    </p>
                  </div>
                </div>
              </FadeInLeft>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 relative z-10">
              <FadeInRight>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 shadow-card flex items-center justify-center border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-widest text-sm font-bold">Origami Day<br/>Placeholder</span>
                </div>
                {/* Decorative background element */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10" />
              </FadeInRight>
            </div>
            
          </div>
        </section>

        {/* Section 3: Roda-Roda Ramadan */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative z-10">
              <FadeInLeft>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 shadow-card flex items-center justify-center border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-widest text-sm font-bold">Roda-Roda Ramadan<br/>Placeholder</span>
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald-100 rounded-full blur-3xl -z-10" />
              </FadeInLeft>
            </div>
            
            <div className="lg:col-span-5 relative z-20">
              <FadeInRight>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-card border border-gray-100 lg:-ml-24 relative mt-8 lg:mt-0">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                     <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal mb-6 leading-tight">
                    DAIKIN <span className="text-emerald-600">Roda-Roda Ramadan</span>
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      DAIKIN Roda-Roda Ramadan sebagai agenda tahunan CSR DAIKIN mulai bergulir pada 2021. Bermitra dengan yayasan sosial terpercaya, sejumlah 17 lokasi di Sumatera, Jawa, Bali, Kalimantan dan Sulawesi menjadi area distribusi donasi.
                    </p>
                    <p>
                      Pada tahun ini tercatat sekurangnya 3,500 paket donasi didistribusikan bagi masyarakat pra sejahtera, warga usia lanjut, yatim piatu dan penyandang disabilitas, melibatkan dealer resmi dan juga asosiasi terkait dengan total nilai IDR 1,25 milyar.
                    </p>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </section>

      </div>

        {/* CTA Section */}
        <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
          <div className="absolute inset-0 bg-daikin-blue/5" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-daikin-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
            <FadeInUp>
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-8 border border-gray-100">
                <Heart className="w-8 h-8 text-daikin-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                Mari Berkolaborasi Bersama Kami
              </h2>
              <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Daikin selalu terbuka untuk menjalin kemitraan strategis demi menciptakan dampak sosial yang lebih luas. Punya program CSR inovatif? Mari wujudkan bersama.
              </p>
              <button className="bg-daikin-blue hover:bg-daikin-blue-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Diskusikan Program CSR
              </button>
            </FadeInUp>
          </div>
        </section>
    </PageTransition>
  )
}
