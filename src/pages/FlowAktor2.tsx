import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home as HomeIcon, Wrench, ShieldCheck, Calendar, Download, 
  HelpCircle, MessageSquare, PhoneCall, MapPin, CheckCircle2, 
  ExternalLink, ChevronRight, ArrowRight, ArrowDown, User, Check,
  FileText, Headphones, Sparkles, AlertCircle, Info, BadgeCheck
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

export default function FlowAktor2() {
  const [selectedNeed, setSelectedNeed] = useState('garansi')

  return (
    <PageTransition>
      <PageMeta 
        title="User Journey Flow - Aktor 2: Jaminan & Layanan Purna Jual | Daikin Indonesia"
        description="Pemetaan visual alur User Journey Flow Aktor 2 (Informasi Garansi & Layanan Purna Jual Daikin) disesuaikan dengan fitur website Daikin Indonesia."
        canonical="/flow-aktor-2"
      />

      <div className="min-h-screen bg-slate-50/70 pt-28 pb-20 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Banner */}
          <FadeInUp className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-[#0080cb] text-white font-extrabold text-sm md:text-base rounded-xl shadow-md tracking-wider uppercase">
                AKTOR 2
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  USER JOURNEY – AKTOR 2
                </h1>
                <p className="text-slate-500 text-sm font-semibold mt-0.5">
                  User sudah memiliki AC Daikin dan ingin tahu jaminan & layanan purna jual
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <Link 
                to="/services/warranty" 
                className="px-4 py-2.5 bg-sky-50 text-[#0080cb] hover:bg-sky-100 rounded-xl transition-all border border-sky-200 flex items-center gap-2 shadow-2xs"
              >
                <span>Halaman Garansi Resmi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/services/service-center" 
                className="px-4 py-2.5 bg-[#0080cb] text-white hover:bg-[#005a87] rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Service Center</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeInUp>

          {/* Flow Container */}
          <div className="space-y-6">

            {/* ROW 1: STEPS 1 TO 5 (UTAMA & GARANSI) */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                
                {/* STEP 1 */}
                <FadeInUp delay={0.05} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">1</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Homepage</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 1</span>
                      </div>

                      {/* Mock Website Preview */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 mb-4 space-y-2">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-1.5">
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                          </div>
                          <span className="text-[9px] text-slate-400 font-bold font-mono">daikin.co.id</span>
                        </div>
                        <div className="font-black text-xs text-[#0080cb] tracking-wider">DAIKIN</div>
                        
                        <div className="aspect-[16/9] bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 relative overflow-hidden">
                          <div className="w-8 h-8 rounded-full bg-white text-[#0080cb] flex items-center justify-center shadow-2xs">
                            <HomeIcon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Customer Care Banner */}
                        <div className="p-2 bg-sky-50 rounded-lg border border-sky-200 flex items-center gap-2 text-[10px] font-extrabold text-[#0080cb]">
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Layanan & Garansi</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User membuka website Daikin Indonesia
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 2 */}
                <FadeInUp delay={0.1} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">2</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Pilih Journey</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 2</span>
                      </div>

                      {/* Journey card */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 mb-4 text-center space-y-3 flex flex-col items-center justify-center min-h-[165px]">
                        <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0080cb] border border-sky-200 flex items-center justify-center shadow-2xs">
                          <Wrench className="w-6 h-6 stroke-[2]" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-extrabold text-xs text-slate-800 block leading-tight">
                            Saya sudah memiliki AC Daikin
                          </span>
                          <span className="text-[9px] text-slate-500 font-medium block">
                            (Informasi & Purnajual)
                          </span>
                        </div>
                        <Link 
                          to="/services/warranty" 
                          className="px-5 py-1.5 bg-[#0080cb] text-white font-bold text-xs rounded-lg shadow-sm hover:bg-[#005a87] transition-colors inline-block"
                        >
                          Masuk
                        </Link>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memilih "Saya sudah memiliki AC Daikin"
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 3 */}
                <FadeInUp delay={0.15} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">3</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Pilih Kebutuhan</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 3</span>
                      </div>

                      {/* Needs selection list */}
                      <div className="space-y-1.5 mb-4 text-xs">
                        {[
                          { id: 'garansi', icon: ShieldCheck, label: 'Informasi Garansi' },
                          { id: 'booking', icon: Calendar, label: 'Booking Servis' },
                          { id: 'manual', icon: Download, label: 'Manual & Download' },
                          { id: 'trouble', icon: HelpCircle, label: 'Troubleshooting' },
                          { id: 'faq', icon: MessageSquare, label: 'FAQ & Layanan' },
                        ].map((n) => {
                          const IconComp = n.icon
                          const isSelected = selectedNeed === n.id
                          return (
                            <button
                              key={n.id}
                              onClick={() => setSelectedNeed(n.id)}
                              className={`w-full p-2 rounded-lg border text-left flex items-center justify-between transition-all ${
                                isSelected 
                                  ? 'bg-sky-50 border-[#0080cb] text-[#0080cb] font-extrabold shadow-2xs' 
                                  : 'bg-slate-50 border-slate-200 text-slate-600 font-medium hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <IconComp className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#0080cb]' : 'text-slate-400'}`} />
                                <span className="truncate text-[11px]">{n.label}</span>
                              </div>
                              <ChevronRight className="w-3 h-3 shrink-0" />
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memilih "Informasi Garansi"
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 4 */}
                <FadeInUp delay={0.2} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">4</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Informasi Garansi</h3>
                        </div>
                        <span className="text-[10px] font-bold text-[#0080cb] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Info Resmi</span>
                      </div>

                      {/* Informational Warranty Terms Box (No Serial Form Verification) */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-4 space-y-2 text-[10px]">
                        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 p-2 rounded-lg border border-emerald-200 font-extrabold">
                          <BadgeCheck className="w-4 h-4 shrink-0" />
                          <span>Garansi Resmi Daikin Indonesia</span>
                        </div>

                        <div className="space-y-1.5 text-slate-600 font-medium pt-1">
                          <div className="p-1.5 bg-white rounded border border-slate-200 flex items-start gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-[#0080cb] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-extrabold text-slate-800 block text-[9px]">Ketentuan Kartu Garansi</span>
                              <span className="text-[8px] text-slate-500 block leading-tight">Masa berlaku dihitung berdasarkan tanggal nota pembelian resmi.</span>
                            </div>
                          </div>

                          <div className="p-1.5 bg-white rounded border border-slate-200 flex items-start gap-1.5">
                            <Info className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-extrabold text-slate-800 block text-[9px]">Tanpa Input Serial Number</span>
                              <span className="text-[8px] text-slate-500 block leading-tight">Website menampilkan panduan garansi & klaim langsung via Call/WA.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User membaca syarat & ketentuan garansi
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 5 */}
                <FadeInUp delay={0.25} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">5</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Cakupan Garansi</h3>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Detail Masa</span>
                      </div>

                      {/* Official Warranty Periods Display */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-4 space-y-2 text-[10px]">
                        <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800 font-extrabold flex items-center justify-between">
                          <span>Garansi Aktif Produk</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </div>

                        <div className="space-y-1 bg-white p-2 rounded-lg border border-slate-200 text-[9px]">
                          <div className="flex justify-between py-0.5 border-b border-slate-100">
                            <span className="text-slate-500">Garansi Unit & PCB:</span>
                            <span className="font-extrabold text-slate-800">1 Tahun</span>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-100">
                            <span className="text-slate-500">Garansi Kompresor Inverter:</span>
                            <span className="font-extrabold text-[#0080cb]">3 - 5 Tahun</span>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-100">
                            <span className="text-slate-500">Garansi Extended VRV:</span>
                            <span className="font-extrabold text-slate-800">Hingga 10 Tahun</span>
                          </div>
                          <div className="flex justify-between pt-0.5 text-emerald-700 font-bold">
                            <span>Jasa Servis Garansi:</span>
                            <span>100% Gratis</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User melihat detail masa & cakupan garansi
                    </p>
                  </div>
                </FadeInUp>

              </div>

              {/* Desktop Connectors for Row 1 */}
              <div className="hidden lg:block">
                {/* Arrow 1->2 */}
                <div className="absolute left-[19.2%] top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                {/* Arrow 2->3 */}
                <div className="absolute left-[39.2%] top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                {/* Arrow 3->4 */}
                <div className="absolute left-[59.2%] top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                {/* Arrow 4->5 */}
                <div className="absolute left-[79.2%] top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* CURVED CONNECTOR ROW 1 TO ROW 2 (AKSI LANJUTAN OPSIONAL) */}
            <div className="flex items-center justify-center my-2 lg:my-4">
              <div className="w-full bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 h-0.5 relative flex items-center justify-center">
                <div className="bg-white border-2 border-[#0080cb] text-[#0080cb] px-4 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-2 shadow-sm uppercase tracking-wider">
                  <span>Aksi Lanjutan (Opsional)</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>

            {/* ROW 2: STEPS 6 TO 11 (AKSI LANJUTAN OPSIONAL) */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
              
              {/* STEP 6 */}
              <FadeInUp delay={0.3} className="flex flex-col h-full relative group">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">6</span>
                      <h3 className="font-extrabold text-xs text-slate-800 truncate">Booking Servis</h3>
                    </div>

                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 text-center space-y-2 min-h-[125px] flex flex-col items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight font-medium">
                        Pilih tanggal, waktu, dan jenis layanan servis
                      </p>
                    </div>
                  </div>

                  <Link 
                    to="/services/maintenance"
                    className="w-full py-1.5 bg-[#0080cb] text-white font-extrabold text-[10px] rounded-lg text-center shadow-2xs hover:bg-[#005a87] transition-colors"
                  >
                    Booking Sekarang
                  </Link>
                </div>
              </FadeInUp>

              {/* STEP 7 */}
              <FadeInUp delay={0.35} className="flex flex-col h-full relative group">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">7</span>
                      <h3 className="font-extrabold text-xs text-slate-800 truncate">Service Center</h3>
                    </div>

                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 text-center space-y-2 min-h-[125px] flex flex-col items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight font-medium">
                        Cari Service Center terdekat di kota Anda
                      </p>
                    </div>
                  </div>

                  <Link 
                    to="/services/service-center"
                    className="w-full py-1.5 bg-[#0080cb] text-white font-extrabold text-[10px] rounded-lg text-center shadow-2xs hover:bg-[#005a87] transition-colors"
                  >
                    Lihat Lokasi
                  </Link>
                </div>
              </FadeInUp>

              {/* STEP 8 */}
              <FadeInUp delay={0.4} className="flex flex-col h-full relative group">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">8</span>
                      <h3 className="font-extrabold text-xs text-slate-800 truncate">Download Manual</h3>
                    </div>

                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 text-center space-y-2 min-h-[125px] flex flex-col items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center">
                        <Download className="w-4 h-4" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight font-medium">
                        Unduh buku manual sesuai model produk
                      </p>
                    </div>
                  </div>

                  <Link 
                    to="/products/e-catalogue"
                    className="w-full py-1.5 bg-[#0080cb] text-white font-extrabold text-[10px] rounded-lg text-center shadow-2xs hover:bg-[#005a87] transition-colors"
                  >
                    Download
                  </Link>
                </div>
              </FadeInUp>

              {/* STEP 9 */}
              <FadeInUp delay={0.45} className="flex flex-col h-full relative group">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">9</span>
                      <h3 className="font-extrabold text-xs text-slate-800 truncate">Troubleshooting</h3>
                    </div>

                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 text-center space-y-2 min-h-[125px] flex flex-col items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight font-medium">
                        Temukan solusi masalah umum pada AC Anda
                      </p>
                    </div>
                  </div>

                  <Link 
                    to="/solutions/maintenance-tips"
                    className="w-full py-1.5 bg-[#0080cb] text-white font-extrabold text-[10px] rounded-lg text-center shadow-2xs hover:bg-[#005a87] transition-colors"
                  >
                    Lihat Solusi
                  </Link>
                </div>
              </FadeInUp>

              {/* STEP 10 */}
              <FadeInUp delay={0.5} className="flex flex-col h-full relative group">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">10</span>
                      <h3 className="font-extrabold text-xs text-slate-800 truncate">FAQ</h3>
                    </div>

                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 text-center space-y-2 min-h-[125px] flex flex-col items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight font-medium">
                        Temukan jawaban atas pertanyaan seputar AC
                      </p>
                    </div>
                  </div>

                  <Link 
                    to="/solutions/how-to-choose"
                    className="w-full py-1.5 bg-[#0080cb] text-white font-extrabold text-[10px] rounded-lg text-center shadow-2xs hover:bg-[#005a87] transition-colors"
                  >
                    Lihat FAQ
                  </Link>
                </div>
              </FadeInUp>

              {/* STEP 11 */}
              <FadeInUp delay={0.55} className="flex flex-col h-full relative group">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">11</span>
                      <h3 className="font-extrabold text-xs text-slate-800 truncate">Hubungi Kami</h3>
                    </div>

                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 text-center space-y-2 min-h-[125px] flex flex-col items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight font-medium">
                        Butuh bantuan lebih lanjut? Hubungi tim Daikin
                      </p>
                    </div>
                  </div>

                  <Link 
                    to="/contact"
                    className="w-full py-1.5 bg-[#0080cb] text-white font-extrabold text-[10px] rounded-lg text-center shadow-2xs hover:bg-[#005a87] transition-colors"
                  >
                    Hubungi Sekarang
                  </Link>
                </div>
              </FadeInUp>

            </div>

          </div>

          {/* Footer Goal Banner */}
          <FadeInUp delay={0.6} className="bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-2xl border border-sky-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#0080cb] text-white flex items-center justify-center shrink-0 shadow-md">
                <User className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-0.5">
                <span className="font-extrabold text-xs text-[#0080cb] uppercase tracking-wider block">
                  TUJUAN AKTOR 2:
                </span>
                <p className="text-sm font-bold text-slate-800">
                  Mendapatkan informasi garansi produk dan mengakses layanan purna jual Daikin dengan mudah, cepat, dan terpercaya.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link 
                to="/flow-aktor-1" 
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all"
              >
                ← Flow Aktor 1
              </Link>
              <Link 
                to="/flow-aktor-3" 
                className="px-4 py-2 bg-[#0080cb] hover:bg-[#005a87] text-white font-extrabold text-xs rounded-xl transition-all shadow-sm"
              >
                Flow Aktor 3 →
              </Link>
            </div>
          </FadeInUp>

        </div>
      </div>
    </PageTransition>
  )
}
