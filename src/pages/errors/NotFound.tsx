import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Lightbulb, PhoneCall, ArrowLeft, Wind, Sparkles } from 'lucide-react'
import PageMeta from '@/components/seo/PageMeta'
import { cn } from '@/utils/cn'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] text-white p-4 sm:p-6">
      <PageMeta title="404 - Halaman Tidak Ditemukan | Daikin Indonesia" noIndex />
      <Suspense fallback={null}><AirParticles color="white" /></Suspense>

      {/* Background Glows & Dot Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center space-y-6">
        
        {/* Pichon-kun Mascot & Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -12, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <img
              src="/images/mascot/icon-daikin-2.png"
              alt="Pichon-kun Mascot"
              className="h-36 sm:h-44 w-auto mx-auto drop-shadow-2xl"
              loading="eager"
            />
          </motion.div>

          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20">
            <Wind className="w-3.5 h-3.5 text-cyan-300" />
            404 PAGE NOT FOUND
          </div>
        </motion.div>

        {/* Speech Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative bg-white text-charcoal rounded-2xl p-5 shadow-2xl border border-white/30 max-w-sm mx-auto space-y-1"
        >
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 border-t border-l border-white/30" />
          <p className="text-xs sm:text-sm font-bold font-display text-charcoal">
            Waduh, Halaman Tidak Ditemukan! 💧
          </p>
          <p className="text-[11px] sm:text-xs font-sans text-gray-500">
            Halaman yang Anda cari mungkin telah dipindahkan, diubah, atau sedang tidak tersedia saat ini.
          </p>
        </motion.div>

        {/* Big 404 & Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <div className="text-6xl sm:text-8xl font-black font-display text-cyan-200/90 tracking-widest drop-shadow-lg">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Ups! Alamat Halaman Salah
          </h1>
          <p className="text-xs sm:text-sm font-sans text-blue-100/90 max-w-md mx-auto font-light leading-relaxed">
            Jangan khawatir, Anda dapat kembali ke beranda utama atau menemukan solusi produk & layanan Daikin di bawah ini.
          </p>
        </motion.div>

        {/* Action Buttons Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          {/* Button 1: Kembali ke Website (Home) */}
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-white text-daikin-blue hover:bg-cyan-50 rounded-xl font-bold font-display text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Website</span>
          </Link>

          {/* Button 2: Cari Solusi (Redirects to /information/solutions or /solutions) */}
          <Link
            to="/information/solutions"
            className="w-full sm:w-auto px-6 py-3 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25 rounded-xl font-bold font-display text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Lightbulb className="w-4 h-4 text-cyan-300" />
            <span>Cari Solusi AC</span>
          </Link>

          {/* Button 3: Hubungi (Redirects to /contact) */}
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl font-bold font-display text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
