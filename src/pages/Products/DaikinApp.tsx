import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  Smartphone, Home, Globe, Calendar, CheckCircle2, ChevronRight, 
  ArrowRight, Download, Cpu, Sparkles, FileText, Wrench, ShieldCheck 
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function DaikinApp() {
  return (
    <PageTransition>
      <PageMeta
        title="Perangkat Lunak & Aplikasi Daikin | Mobile Controller & eQuts"
        description="Aplikasi pengontrol seluler Daikin memungkinkan kontrol penuh AC dari mana saja - Operasi di rumah, di luar rumah, penjadwalan mingguan, dan aplikasi eQuts."
        canonical="/products/daikin-app"
      />

      {/* ── 1. HERO BANNER (PAGE BANNER MODEL) ────────────────────────────────── */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        {/* Radial dots grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }} 
        />

        {/* Ambient background glow */}
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Produk', path: '/products' }, 
              { label: 'Perangkat Lunak & Aplikasi Daikin' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Card Extracted From Image */}
            <div className="lg:col-span-7 space-y-6">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md border border-white/20 text-white">
                  <Smartphone className="w-4 h-4 text-cyan-200" />
                  Solusi Perangkat Lunak Daikin
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                  Perangkat Lunak <br />
                  <span className="text-daikin-blue-light font-light">Aplikasi Daikin</span>
                </h1>

                <div className="space-y-4 text-white/90 text-sm md:text-base font-light leading-relaxed max-w-2xl font-sans">
                  <p>
                    Aplikasi pengontrol seluler Daikin memungkinkan Anda mengontrol Daikin, Urusara 7, Desain Eropa, AC Multi Split dari mana saja - membantu menjaga lingkungan rumah yang nyaman sekaligus menghemat energi.
                  </p>
                  <p className="text-xs md:text-sm text-white/80 font-light">
                    Aplikasi yang nyaman ini memberi Anda kendali penuh atas fungsi-fungsi inti seperti start/stop, mode operasi dan atur suhu serta fitur canggih seperti penjadwalan mingguan. Aplikasi ini juga memungkinkan Anda memantau sistem Anda untuk memastikan kinerjanya sesuai yang diinginkan. Setiap saat dan tempat. Setelah mengunduh perangkat lunak, Anda hanya perlu terhubung ke jaringan nirkabel pribadi di dalam rumah atau jaringan seluler di luar.
                  </p>
                </div>

                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <a 
                    href="#download-section"
                    className="px-6 py-3.5 bg-gradient-to-r from-daikin-blue-light to-daikin-blue text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:from-sky-300 hover:to-daikin-blue transition-all inline-flex items-center gap-2 group"
                  >
                    <Download className="w-4 h-4" />
                    <span>Unduh Katalog & Aplikasi</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <Link 
                    to="/products"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all inline-flex items-center gap-2"
                  >
                    <span>Kembali ke Produk</span>
                  </Link>
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md">
                <div className="bg-gradient-to-br from-slate-900/90 via-daikin-blue-dark/90 to-[#005580] rounded-3xl p-8 border border-white/20 shadow-2xl text-white space-y-6 relative overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-cyan-300">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-200 block mb-1">
                      Kontrol IoT Pintar
                    </span>
                    <h3 className="text-xl font-bold font-display text-white">
                      Daikin Mobile Controller
                    </h3>
                    <p className="text-xs text-blue-100/80 leading-relaxed font-sans mt-2">
                      Kendali penuh suhu, kelembaban, dan jadwal AC secara real-time dari perangkat smartphone Anda.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100/80">Konektivitas</span>
                      <span className="font-bold text-cyan-300">Wi-Fi & Seluler</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100/80">Kompatibilitas</span>
                      <span className="font-bold text-white">iOS & Android</span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>

          </div>

        </div>
      </div>

      {/* ── 2. 3 TIPE OPERASI UTAMA ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">
          
          <FadeInUp className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
              Fitur Utama Aplikasi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-charcoal tracking-tight">
              Mode Pengontrolan Seluler Daikin
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-sans font-light leading-relaxed">
              Dukungan pengoperasian pintar untuk memberikan kenyamanan total di setiap situasi.
            </p>
          </FadeInUp>

          {/* Feature 1: Operasi Di Rumah */}
          <div className="grid md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
            <FadeInLeft className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200/80 flex flex-col items-center justify-center p-6 text-center text-daikin-blue">
                <Home className="w-16 h-16 mb-3 text-daikin-blue" />
                <span className="text-xs font-bold font-display uppercase tracking-wider text-charcoal">Operasi Di Rumah</span>
              </div>
            </FadeInLeft>

            <FadeInRight className="md:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-daikin-blue flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-2xl font-bold font-display text-charcoal">
                Operasi Di Rumah
              </h3>
              <p className="text-slate-600 text-sm font-sans leading-relaxed font-light">
                Setel AC saat menjadi sangat fleksibel dari jauh yang terpusat. Hanya perlu beberapa klik mudah untuk menyalakan dan menyesuaikan suhu di kamar tidur di lantai dua dari ruang tamu Anda. Anda dapat menyalakan dan mematikan AC di ruang tamu dari kamar tidur Anda.
              </p>
              <ul className="space-y-2 text-xs font-sans text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                  <span>Pengaturan terpusat seluruh unit AC dalam satu rumah</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                  <span>Penyesuaian suhu individual per ruangan</span>
                </li>
              </ul>
            </FadeInRight>
          </div>

          {/* Feature 2: Operasi Diluar Rumah */}
          <div className="grid md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
            <FadeInLeft className="md:col-span-7 space-y-4 order-2 md:order-1">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-daikin-blue flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-2xl font-bold font-display text-charcoal">
                Operasi Diluar Rumah
              </h3>
              <p className="text-slate-600 text-sm font-sans leading-relaxed font-light">
                Aplikasi pengontrol seluler Daikin mengakhiri kekhawatiran yang mengganggu tentang apakah Anda mematikan AC dan memastikan lingkungan iklim AC yang nyaman menunggu ketika Anda kembali ke rumah. Bahkan di luar rumah Anda, Anda dapat dengan mudah memantau dan menyesuaikan status seperti status operasi dan suhu kompresor, memulai dan menghentikan semua unit.
              </p>
              <ul className="space-y-2 text-xs font-sans text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                  <span>Kenyamanan udara dingin menyambut saat tiba di rumah</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                  <span>Pemantauan status ON/OFF secara komprehensif</span>
                </li>
              </ul>
            </FadeInLeft>

            <FadeInRight className="md:col-span-5 flex justify-center order-1 md:order-2">
              <div className="w-full max-w-sm aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 border border-sky-200/80 flex flex-col items-center justify-center p-6 text-center text-daikin-blue">
                <Globe className="w-16 h-16 mb-3 text-daikin-blue" />
                <span className="text-xs font-bold font-display uppercase tracking-wider text-charcoal">Operasi Diluar Rumah</span>
              </div>
            </FadeInRight>
          </div>

          {/* Feature 3: Operasi Penjadwalan */}
          <div className="grid md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
            <FadeInLeft className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-100 border border-sky-200/80 flex flex-col items-center justify-center p-6 text-center text-daikin-blue">
                <Calendar className="w-16 h-16 mb-3 text-daikin-blue" />
                <span className="text-xs font-bold font-display uppercase tracking-wider text-charcoal">Penjadwalan Otomatis</span>
              </div>
            </FadeInLeft>

            <FadeInRight className="md:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-daikin-blue flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-2xl font-bold font-display text-charcoal">
                Pengoperasian Penjadwalan (Weekly Timer)
              </h3>
              <p className="text-slate-600 text-sm font-sans leading-relaxed font-light">
                Pengoperasian Penjadwalan Mingguan: Anda dapat mengatur hingga 4 pola pemantauan bulanan dan mingguan AC Anda. Anda dapat mengatur pengoperasian AC Anda tepat pada jam saat Anda terbangun atau kembali rumah atau mematikannya saat Anda bepergian. Pengoperasian AC dapat diatur harian / mingguan.
              </p>
              <ul className="space-y-2 text-xs font-sans text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                  <span>Pengaturan hingga 4 pola pemantauan otomatis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                  <span>Otomatisasi mati/nyala sesuai jam aktivitas harian</span>
                </li>
              </ul>
            </FadeInRight>
          </div>

        </div>
      </section>

      {/* ── 3. DAIKIN eQuts / eQatalog APP SECTION ──────────────────────────── */}
      <section id="download-section" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          
          <div className="bg-gradient-to-br from-[#061730] via-daikin-blue-dark to-[#005580] rounded-3xl p-8 md:p-12 text-white border border-white/20 shadow-2xl relative overflow-hidden">
            
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 inline-block">
                  Aplikasi Konsultasi & Teknisi
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
                  Daikin eQuts (eQatalog)
                </h2>

                <p className="text-blue-100/90 text-sm font-sans font-light leading-relaxed">
                  Daikin eQuts adalah aplikasi perangkat lunak yang dirancang untuk ponsel cerdas dan tablet yang menawarkan berbagai informasi mengenai produk Daikin. Daikin eQuts dirancang untuk konsultan, kontraktor, dan teknisi. Apakah Anda seorang mitra Daikin, kontraktor, atau hanya tertarik pada produk Daikin, Anda dapat menggunakan aplikasi ini.
                </p>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                    Informasi & Fitur Utama eQuts:
                  </span>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs font-sans text-blue-100">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                      <span>Spesifikasi lengkap unit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                      <span>Daftar Kompatibilitas Sistem</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                      <span>Tool Kumpulan Kode Error</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                      <span>Tambahan Perhitungan Refrigeran</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-blue-100/80 font-sans leading-relaxed">
                  Unduh dokumen Daikin yang paling sering direferensikan untuk proyek masa depan yang cepat dan mudah. Kirim informasi melalui email atau pesan teks SMS untuk segera dibagikan. Terima pembaruan instan setiap kali dokumen diperbarui.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-black text-white font-bold text-xs shadow-md border border-white/20 hover:bg-slate-900 transition-all inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-cyan-300" />
                    <span>Download on App Store</span>
                  </a>

                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-black text-white font-bold text-xs shadow-md border border-white/20 hover:bg-slate-900 transition-all inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-cyan-300" />
                    <span>GET IT ON Google Play</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 text-center text-white space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-daikin-blue text-white flex items-center justify-center mx-auto shadow-md">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold font-display text-lg text-white">e-Data & Catalogue</h4>
                  <p className="text-xs text-blue-100/80 font-sans">
                    Akses dokumen teknis, e-catalogue, dan data submittal resmi Daikin Indonesia secara digital.
                  </p>
                  <Link
                    to="/products/e-catalogue"
                    className="w-full py-3 bg-white text-daikin-blue font-bold text-xs rounded-xl hover:bg-sky-50 transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Buka E-Catalogue</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Floating PichonKun Assistant Helper */}
      <PichonKunHelper />
    </PageTransition>
  )
}
