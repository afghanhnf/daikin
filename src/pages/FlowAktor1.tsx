import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home as HomeIcon, Building2, Building, Store, MoreHorizontal, 
  Square, Box, Users, Sun, Armchair, Layers, Flame, Snowflake, 
  Check, ArrowRight, ArrowDown, MapPin, MessageSquare, Download, CheckCircle2, User,
  ChevronRight, ExternalLink, Sliders, ShieldCheck, Sparkles, Zap, ArrowDownRight,
  Printer, Info, RotateCcw, ShoppingCart
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

export default function FlowAktor1() {
  const [selectedBuilding, setSelectedBuilding] = useState('Rumah')
  const [selectedProduct, setSelectedProduct] = useState('ftkm')

  return (
    <PageTransition>
      <PageMeta 
        title="User Journey Flow - Aktor 1: Rekomendasi AC | Daikin Indonesia"
        description="Pemetaan visual alur User Journey Flow Aktor 1 (Rekomendasi & Kalkulator AC Daikin) disesuaikan dengan fitur website Daikin Indonesia."
        canonical="/flow-aktor-1"
      />

      <div className="min-h-screen bg-slate-50/70 pt-28 pb-20 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Banner */}
          <FadeInUp className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-[#0080cb] text-white font-extrabold text-sm md:text-base rounded-xl shadow-md tracking-wider uppercase">
                AKTOR 1
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  User ingin rekomendasi AC
                </h1>
                <p className="text-slate-500 text-sm font-semibold mt-0.5">
                  User Journey Flow & Visual Diagram System
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <Link 
                to="/flow-aktor-3" 
                className="px-4 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl transition-all border border-slate-200 flex items-center gap-1.5"
              >
                <span>Flow Aktor 3 →</span>
              </Link>
              <Link 
                to="/solutions/ac-calculator" 
                className="px-4 py-2.5 bg-sky-50 text-[#0080cb] hover:bg-sky-100 rounded-xl transition-all border border-sky-200 flex items-center gap-2 shadow-2xs"
              >
                <span>Uji Coba Live ACCalculator</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/solutions/ac-recommendation" 
                className="px-4 py-2.5 bg-[#0080cb] text-white hover:bg-[#005a87] rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Katalog Rekomendasi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeInUp>

          {/* Flow Container */}
          <div className="space-y-6">

            {/* ROW 1: STEPS 1 TO 5 */}
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
                        <div className="flex items-center justify-between">
                          <span className="font-black text-xs text-[#0080cb] tracking-wider">DAIKIN</span>
                          <div className="flex gap-1">
                            <div className="w-3 h-1 bg-slate-300 rounded"></div>
                            <div className="w-3 h-1 bg-slate-300 rounded"></div>
                          </div>
                        </div>
                        <div className="aspect-[16/9] bg-gradient-to-br from-[#0080cb] to-sky-400 rounded-lg flex flex-col items-center justify-center text-white p-2 text-center shadow-inner">
                          <span className="text-[9px] font-extrabold uppercase tracking-wide drop-shadow-2xs">Perfecting The Air</span>
                          <span className="text-[8px] opacity-90 font-light">Solusi Pendingin Udara Daikin</span>
                        </div>
                        <div className="h-1.5 bg-slate-200 rounded-full w-3/4"></div>
                        <div className="h-1.5 bg-slate-200 rounded-full w-1/2"></div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User membuka website resmi Daikin Indonesia
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

                      {/* Menu selection visual */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 mb-4 text-center space-y-3 flex flex-col items-center justify-center min-h-[165px]">
                        <div className="w-11 h-11 rounded-2xl bg-white border border-sky-200 shadow-2xs flex items-center justify-center text-[#0080cb]">
                          <HomeIcon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-extrabold text-xs text-slate-800 block">
                            Saya ingin membeli AC
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium block">
                            (Bantu Saya Memilih)
                          </span>
                        </div>
                        <button className="px-5 py-1.5 bg-[#0080cb] text-white font-bold text-xs rounded-lg shadow-sm hover:bg-[#005a87] transition-colors flex items-center gap-1">
                          <span>Mulai Simulasi</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memilih menu "Saya ingin membeli AC"
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
                          <h3 className="font-extrabold text-sm text-slate-800">Pilih Bangunan</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 3</span>
                      </div>

                      {/* Interactive building selector */}
                      <div className="space-y-1.5 mb-4">
                        {[
                          { id: 'Rumah', icon: HomeIcon, label: 'Rumah Hunian' },
                          { id: 'Apartemen', icon: Building, label: 'Apartemen (Multi-Split)' },
                          { id: 'Kantor', icon: Building2, label: 'Gedung Perkantoran' },
                          { id: 'Komersial', icon: Store, label: 'Ruko / Toko Commercial' },
                          { id: 'Lainnya', icon: MoreHorizontal, label: 'Fasilitas Lainnya' },
                        ].map((b) => {
                          const IconComp = b.icon
                          const isSelected = selectedBuilding === b.id
                          return (
                            <button
                              key={b.id}
                              onClick={() => setSelectedBuilding(b.id)}
                              className={`w-full p-2 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                                isSelected 
                                  ? 'bg-sky-50 border-[#0080cb] text-[#0080cb] font-extrabold shadow-2xs' 
                                  : 'bg-slate-50 border-slate-200 text-slate-600 font-medium hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0080cb]' : 'text-slate-400'}`} />
                                <span className="truncate">{b.label}</span>
                              </div>
                              {isSelected && (
                                <div className="w-4 h-4 rounded-full bg-[#0080cb] text-white flex items-center justify-center shrink-0">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memilih jenis bangunan / lokasi
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
                          <h3 className="font-extrabold text-sm text-slate-800">Input Ruangan</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 4</span>
                      </div>

                      {/* Room Data Fields */}
                      <div className="space-y-2.5 mb-4">
                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-lg bg-sky-50 text-[#0080cb] flex items-center justify-center shrink-0 border border-sky-100">
                            <Square className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1">
                            <span className="text-[11px] font-bold text-slate-700 block">Luas Ruangan (m²)</span>
                            <div className="mt-1 px-2.5 py-1 bg-slate-50 rounded-md border border-slate-200 text-[11px] font-semibold text-slate-800 flex justify-between">
                              <span>18.5 m²</span>
                              <span className="text-slate-400 text-[10px]">p x l</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-lg bg-sky-50 text-[#0080cb] flex items-center justify-center shrink-0 border border-sky-100">
                            <Box className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1">
                            <span className="text-[11px] font-bold text-slate-700 block">Tinggi Plafon (m)</span>
                            <div className="mt-1 px-2.5 py-1 bg-slate-50 rounded-md border border-slate-200 text-[11px] font-semibold text-slate-800 flex justify-between">
                              <span>3.0 m</span>
                              <span className="text-slate-400 text-[10px]">standar</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-lg bg-sky-50 text-[#0080cb] flex items-center justify-center shrink-0 border border-sky-100">
                            <Users className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1">
                            <span className="text-[11px] font-bold text-slate-700 block">Jumlah Orang</span>
                            <div className="mt-1 px-2.5 py-1 bg-slate-50 rounded-md border border-slate-200 text-[11px] font-semibold text-slate-800 flex justify-between">
                              <span>3 Orang</span>
                              <span className="text-slate-400 text-[10px]">penghuni</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User mengisi dimensi & jumlah penghuni
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
                          <h3 className="font-extrabold text-sm text-slate-800">Kondisi Ruang</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 5</span>
                      </div>

                      {/* Conditions list */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-medium">
                            <Sun className="w-3.5 h-3.5 text-amber-500" />
                            <span>Arah Matahari</span>
                          </div>
                          <span className="text-[11px] font-extrabold text-[#0080cb]">Timur ▾</span>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-medium">
                            <Armchair className="w-3.5 h-3.5 text-sky-500" />
                            <span>Aktivitas</span>
                          </div>
                          <span className="text-[11px] font-extrabold text-[#0080cb]">Ruang Tamu ▾</span>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-medium">
                            <Layers className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Posisi Lantai</span>
                          </div>
                          <span className="text-[11px] font-extrabold text-[#0080cb]">Lantai 1 ▾</span>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-medium">
                            <Flame className="w-3.5 h-3.5 text-orange-500" />
                            <span>Paparan Panas</span>
                          </div>
                          <span className="text-[11px] font-extrabold text-[#0080cb]">Sedang ▾</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User mengisi kondisi & preferensi
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

            {/* CURVED CONNECTOR ROW 1 TO ROW 2 (STEP 5 -> STEP 6) */}
            <div className="flex items-center justify-center my-2 lg:my-4">
              <div className="w-full bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 h-0.5 relative flex items-center justify-center">
                <div className="bg-white border-2 border-[#0080cb] text-[#0080cb] px-4 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-2 shadow-sm">
                  <span>Kalkulasi Otomatis Sistem Daikin</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>

            {/* ROW 2: STEPS 6 TO 10 */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                
                {/* STEP 6 */}
                <FadeInUp delay={0.3} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">6</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Hasil Kalkulator</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 6</span>
                      </div>

                      {/* Gauge Indicator Result */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 mb-4 text-center space-y-2 flex flex-col items-center justify-center min-h-[165px]">
                        <div className="relative w-22 h-22 rounded-full border-4 border-sky-400 border-t-[#0080cb] flex flex-col items-center justify-center bg-white shadow-2xs p-1">
                          <Snowflake className="w-5 h-5 text-[#0080cb] animate-spin" style={{ animationDuration: '15s' }} />
                          <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Rekomendasi</span>
                          <span className="font-black text-sm text-[#0080cb]">1.5 PK</span>
                        </div>
                        <span className="text-[10px] text-slate-600 font-bold leading-tight block px-1">
                          11.900 BTU/h (Kapasitas Optimal)
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      Sistem menghitung PK yang sesuai
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 7 */}
                <FadeInUp delay={0.35} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">7</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Rekomendasi</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 7</span>
                      </div>

                      {/* Product Recommendations */}
                      <div className="space-y-2 mb-4">
                        {/* FTKM Alpha */}
                        <div 
                          onClick={() => setSelectedProduct('ftkm')}
                          className={`p-2 rounded-xl border cursor-pointer transition-all relative ${
                            selectedProduct === 'ftkm' 
                              ? 'bg-sky-50 border-[#0080cb] shadow-2xs' 
                              : 'bg-slate-50 border-slate-200 hover:border-sky-200'
                          }`}
                        >
                          <span className="absolute -top-2 right-2 px-1.5 py-0.5 bg-emerald-500 text-white text-[8px] font-extrabold rounded-full shadow-2xs">
                            Rekomendasi Utama
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                              <Sparkles className="w-4 h-4 text-[#0080cb]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-extrabold text-xs text-slate-800 block truncate">FTKM Alpha Inverter</span>
                              <span className="text-[9px] text-slate-500 font-semibold block">1.5 PK • Premium</span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-[#0080cb]" />
                          </div>
                        </div>

                        {/* FTKQ Flash */}
                        <div 
                          onClick={() => setSelectedProduct('ftkq')}
                          className={`p-2 rounded-xl border cursor-pointer transition-all ${
                            selectedProduct === 'ftkq' 
                              ? 'bg-sky-50 border-[#0080cb] shadow-2xs' 
                              : 'bg-slate-50 border-slate-200 hover:border-sky-200'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                              <Zap className="w-4 h-4 text-sky-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs text-slate-700 block truncate">FTKQ Flash Inverter</span>
                              <span className="text-[9px] text-slate-400 font-medium block">1.5 PK • Super Hemat</span>
                            </div>
                          </div>
                        </div>

                        {/* FTKC Smile */}
                        <div 
                          onClick={() => setSelectedProduct('ftkc')}
                          className={`p-2 rounded-xl border cursor-pointer transition-all ${
                            selectedProduct === 'ftkc' 
                              ? 'bg-sky-50 border-[#0080cb] shadow-2xs' 
                              : 'bg-slate-50 border-slate-200 hover:border-sky-200'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                              <Snowflake className="w-4 h-4 text-cyan-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs text-slate-700 block truncate">FTKC Comfort Inverter</span>
                              <span className="text-[9px] text-slate-400 font-medium block">1.5 PK • Comfort</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User melihat opsi produk Daikin
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 8 */}
                <FadeInUp delay={0.4} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">8</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Detail Produk</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 8</span>
                      </div>

                      {/* Product Detail Card */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-4 space-y-2">
                        <div className="bg-gradient-to-r from-[#0080cb] to-sky-400 rounded-lg p-2 text-white text-center">
                          <span className="font-extrabold text-xs block">FTKM Alpha Series</span>
                          <span className="text-[9px] opacity-90 block font-medium">1.5 PK Inverter (FTKM35)</span>
                        </div>

                        <div className="space-y-1 text-[10px] font-medium text-slate-700 pt-0.5">
                          <div className="flex items-center gap-1.5 text-emerald-600">
                            <Check className="w-3 h-3 stroke-[3] shrink-0" />
                            <span>Streamer Tech Air Purifier</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-emerald-600">
                            <Check className="w-3 h-3 stroke-[3] shrink-0" />
                            <span>Intelligent Eye 2 Area</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-emerald-600">
                            <Check className="w-3 h-3 stroke-[3] shrink-0" />
                            <span>Super Quiet 19 dB</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-emerald-600">
                            <Check className="w-3 h-3 stroke-[3] shrink-0" />
                            <span>Refrigeran R-32 Ramah Ozon</span>
                          </div>
                        </div>

                        <div className="pt-1.5 flex flex-col gap-1">
                          <Link 
                            to="/products/residential/alpha-inverter"
                            className="w-full py-1.5 bg-[#0080cb] text-white font-extrabold text-[10px] rounded-lg text-center shadow-2xs hover:bg-[#005a87] transition-colors"
                          >
                            Lihat Spesifikasi Detail
                          </Link>
                          <Link 
                            to="/solutions/ac-recommendation"
                            className="w-full py-1 text-slate-500 font-bold text-[10px] text-center hover:text-[#0080cb] transition-colors"
                          >
                            Bandingkan Seri Lain
                          </Link>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User melihat spesifikasi & keunggulan
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 9 */}
                <FadeInUp delay={0.45} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">9</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Aksi Lanjutan</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 9</span>
                      </div>

                      {/* Next Actions */}
                      <div className="space-y-1.5 mb-4">
                        <Link 
                          to="/services/proshop" 
                          className="p-2 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-all flex items-center gap-2 group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center shrink-0">
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-extrabold text-xs text-slate-800 block group-hover:text-[#0080cb] truncate">Temukan Dealer</span>
                            <span className="text-[9px] text-slate-500 block truncate">Dealer ProShop resmi</span>
                          </div>
                        </Link>

                        <a 
                          href="https://wa.me/6281212345678" 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-all flex items-center gap-2 group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                            <MessageSquare className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-extrabold text-xs text-emerald-800 block truncate">Chat WhatsApp Sales</span>
                            <span className="text-[9px] text-emerald-600 block truncate">Tanya harga & konsultasi</span>
                          </div>
                        </a>

                        <a 
                          href="https://tokopedia.com" 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 bg-sky-50 hover:bg-sky-100 rounded-xl border border-sky-200 transition-all flex items-center gap-2 group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#0080cb] text-white flex items-center justify-center shrink-0">
                            <ShoppingCart className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-extrabold text-xs text-[#0080cb] block truncate">Official Marketplace</span>
                            <span className="text-[9px] text-slate-500 block truncate">Beli via Tokopedia / Shopee</span>
                          </div>
                        </a>

                        <Link 
                          to="/products/e-catalogue" 
                          className="p-2 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-all flex items-center gap-2 group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center shrink-0">
                            <Download className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-extrabold text-xs text-slate-800 block group-hover:text-[#0080cb] truncate">Unduh E-Katalog</span>
                            <span className="text-[9px] text-slate-500 block truncate">Lihat brosur produk PDF</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memilih langkah eksekusi
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 10 */}
                <FadeInUp delay={0.5} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">10</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Selesai</h3>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Selesai</span>
                      </div>

                      {/* Success box */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 mb-4 text-center space-y-2 flex flex-col items-center justify-center min-h-[165px]">
                        <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-0.5 shadow-2xs">
                          <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                        </div>
                        <h4 className="font-extrabold text-sm text-slate-900">Terima kasih!</h4>
                        <p className="text-[10px] text-slate-500 leading-snug font-medium max-w-[140px]">
                          Kami siap membantu Anda mendapatkan solusi AC terbaik.
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User menyelesaikan journey
                    </p>
                  </div>
                </FadeInUp>

              </div>

              {/* Desktop Connectors for Row 2 */}
              <div className="hidden lg:block">
                {/* Arrow 6->7 */}
                <div className="absolute left-[19.2%] top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                {/* Arrow 7->8 */}
                <div className="absolute left-[39.2%] top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                {/* Arrow 8->9 */}
                <div className="absolute left-[59.2%] top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                {/* Arrow 9->10 */}
                <div className="absolute left-[79.2%] top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Goal Banner */}
          <FadeInUp delay={0.55} className="bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-2xl border border-sky-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#0080cb] text-white flex items-center justify-center shrink-0 shadow-md">
                <User className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-0.5">
                <span className="font-extrabold text-xs text-[#0080cb] uppercase tracking-wider block">
                  Tujuan Utama Aktor 1:
                </span>
                <p className="text-sm font-bold text-slate-800">
                  Mendapatkan rekomendasi AC yang sesuai dengan kebutuhan ruangan secara mudah, cepat, dan presisi.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <Link 
                to="/solutions/ac-calculator"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0080cb] text-white font-extrabold text-xs rounded-xl hover:bg-[#005a87] transition-all text-center shadow-sm"
              >
                Coba Fitur Kalkulator Daikin
              </Link>
            </div>
          </FadeInUp>

        </div>
      </div>
    </PageTransition>
  )
}
