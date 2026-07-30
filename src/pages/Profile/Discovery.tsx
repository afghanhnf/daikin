import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ShieldCheck, Beaker, Globe2 } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function Discovery() {
  return (
    <PageTransition>
      <PageMeta title="Perfecting the Air - Daikin Discovery" canonical="/profile/discovery" />

      {/* Modern Premium Hero Banner */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#005a87] to-[#0097e6]">
        <Suspense fallback={null}><AirParticles /></Suspense>
        
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Abstract shape overlay */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-center">
          
          {/* Active Clickable Breadcrumbs */}
          <nav className="flex items-center justify-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/profile/about" className="hover:text-white transition-colors">Tentang Kami</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white drop-shadow-md">Perfecting the Air</span>
          </nav>

          <FadeInUp>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
              Perfecting <span className="text-daikin-blue-light font-light">the Air</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow max-w-3xl mx-auto">
              Kita hidup dalam dunia dimana tindakan pencegahan harian semakin penting. Dengan memanfaatkan penelitian dan keahlian di bidang udara selama bertahun-tahun, Daikin menciptakan nilai baru dari udara di lingkungan dalam ruangan, memberikan ketenangan bagi pikiran kita.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Discovery Sections */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-40 right-0 w-[800px] h-[800px] bg-daikin-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
        <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-daikin-blue-50/50 rounded-full blur-3xl -z-10 opacity-60" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-32">
          
          {/* Section 1 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-daikin-blue-light to-daikin-blue rounded-3xl opacity-5 blur-lg group-hover:opacity-15 transition-opacity duration-500" />
                <div className="w-full aspect-[4/3] bg-gray-100 border border-gray-200 shadow-card flex items-center justify-center rounded-3xl overflow-hidden relative z-10">
                  <span className="text-gray-400 uppercase tracking-widest text-sm text-center font-bold">Hospital Air Image<br/>Placeholder</span>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div>
                <div className="w-12 h-12 rounded-xl bg-daikin-blue-50 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-daikin-blue" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 leading-tight">Hidup Berdampingan<br/><span className="text-daikin-blue font-light">dengan Penyakit Menular</span></h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Udara akan lebih penting dalam waktu dekat. Daikin menempatkan nilai tertinggi pada setiap tantangan yang dihadapi oleh udara di rumah sakit, dengan memastikan kualitas udara yang sehat dan menekan penyebaran penyakit menular dari satu tempat ke tempat lain. Dan Daikin dapat membantu para profesional mengendalikan penyebaran penyakit melalui udara.
                </p>
              </div>
            </FadeInRight>
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft className="order-2 lg:order-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-daikin-blue-50 flex items-center justify-center mb-6">
                  <Beaker className="w-6 h-6 text-daikin-blue" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 leading-tight">Tantangan Bagi<br/><span className="text-daikin-blue font-light">Para Ahli</span></h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Penelitian dan keahlian Daikin yang dilakukan bersama peneliti dari berbagai Universitas dan lembaga di Jepang membuktikan bahwa teknologi Streamer yang telah kami kembangkan selama bertahun-tahun mampu menonaktifkan lebih dari 60 jenis virus dan bakteri*1, termasuk SARS-CoV-2*2.
                </p>
                
                {/* Disclaimer box in glassmorphism style */}
                <div className="bg-gray-50/80 backdrop-blur border border-gray-100 p-5 rounded-2xl">
                  <div className="text-sm text-gray-500 space-y-2 font-medium">
                    <p>*1: Validasi yang dilakukan oleh lembaga pengujian publik.</p>
                    <p>*2: Tes ditugaskan pada universitas dan lembaga penelitian.</p>
                  </div>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-daikin-blue to-daikin-blue-dark rounded-3xl opacity-5 blur-lg group-hover:opacity-15 transition-opacity duration-500" />
                <div className="w-full aspect-[4/3] bg-gray-100 border border-gray-200 shadow-card flex items-center justify-center rounded-3xl overflow-hidden relative z-10">
                  <span className="text-gray-400 uppercase tracking-widest text-sm text-center font-bold">Experts Image<br/>Placeholder</span>
                </div>
              </div>
            </FadeInRight>
          </div>

          {/* Section 3 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#005a87] to-[#0097e6] rounded-3xl opacity-5 blur-lg group-hover:opacity-15 transition-opacity duration-500" />
                <div className="w-full aspect-[4/3] bg-gray-100 border border-gray-200 shadow-card flex items-center justify-center rounded-3xl overflow-hidden relative z-10">
                  <span className="text-gray-400 uppercase tracking-widest text-sm text-center font-bold">Earth Air Image<br/>Placeholder</span>
                </div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div>
                <div className="w-12 h-12 rounded-xl bg-daikin-blue-50 flex items-center justify-center mb-6">
                  <Globe2 className="w-6 h-6 text-daikin-blue" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 leading-tight">Mengubah Dunia<br/><span className="text-daikin-blue font-light">dengan Udara</span></h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Tujuan Daikin adalah untuk memastikan kualitas hidup pelanggan di seluruh dunia melalui udara sehat. Untuk mewujudkan hal ini, kami percaya bahwa inovasi adalah solusi atas masalah lingkungan. Dengan cara ini, kami ingin menciptakan teknologi yang belum pernah ada sebelumnya. Kami akan secara aktif berkolaborasi dengan institusi eksternal untuk mengembangkan teknologi perintis di era baru dan menyediakan udara yang aman dan andal ke seluruh dunia.
                </p>
              </div>
            </FadeInRight>
          </div>

        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">Kenali Lebih Dalam</h2>
              <p className="text-gray-600 text-lg">Saksikan bagaimana Daikin mewujudkan "Perfecting the Air" di seluruh dunia.</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="w-full aspect-video bg-white rounded-3xl flex items-center justify-center relative overflow-hidden shadow-card border border-gray-100 group">
                <div className="absolute inset-0 bg-gray-100/50" />
                
                {/* Abstract decorative circles inside video placeholder */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-daikin-blue/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-daikin-blue-light/5 rounded-full blur-2xl" />
                
                <span className="text-gray-400 font-bold uppercase tracking-widest z-10 text-center relative">
                  Video Presentation<br/>Placeholder
                </span>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-daikin-blue cursor-pointer group-hover:scale-110 group-hover:bg-daikin-blue group-hover:text-white transition-all duration-300 border border-white/20">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </PageTransition>
  )
}
