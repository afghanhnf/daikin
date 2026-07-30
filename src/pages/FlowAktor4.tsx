import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home as HomeIcon, Building2, Megaphone, Lightbulb, BookOpen, 
  Leaf, Briefcase, FileText, Download, Award, Share2, Bookmark, 
  Mail, CheckCircle2, ChevronRight, ExternalLink, ArrowRight, 
  ArrowDown, User, Check, Globe, Sparkles, ShieldCheck, Heart, Info,
  TrendingUp, Users, Compass, HelpCircle, Layers, Cpu, Radio
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

export default function FlowAktor4() {
  const [selectedTopic, setSelectedTopic] = useState('informasi')

  return (
    <PageTransition>
      <PageMeta 
        title="User Journey Flow - Aktor 4: Pencarian Informasi & Wawasan | Daikin Indonesia"
        description="Pemetaan visual alur User Journey Flow Aktor 4 (Mencari Informasi Perusahaan, Menu Informasi, Wawasan, Campaign, Teknologi, & Karir) disesuaikan dengan fitur website Daikin Indonesia."
        canonical="/flow-aktor-4"
      />

      <div className="min-h-screen bg-slate-50/70 pt-28 pb-20 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Banner */}
          <FadeInUp className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-[#0080cb] text-white font-extrabold text-sm md:text-base rounded-xl shadow-md tracking-wider uppercase">
                AKTOR 4
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  USER JOURNEY – AKTOR 4
                </h1>
                <p className="text-slate-500 text-sm font-semibold mt-0.5">
                  User ingin mencari informasi (Menu Informasi, Wawasan, Campaign, Teknologi, Karir, dll)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <Link 
                to="/insights" 
                className="px-4 py-2.5 bg-sky-50 text-[#0080cb] hover:bg-sky-100 rounded-xl transition-all border border-sky-200 flex items-center gap-2 shadow-2xs"
              >
                <span>Pusat Wawasan & Insights</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/information/solutions" 
                className="px-4 py-2.5 bg-[#0080cb] text-white hover:bg-[#005a87] rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Pusat Informasi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeInUp>

          {/* MAIN FLOW STEPS (ROW 1: STEPS 1 TO 6) */}
          <div className="space-y-6">

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                
                {/* STEP 1 */}
                <FadeInUp delay={0.05} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">1</span>
                          <h3 className="font-extrabold text-xs text-slate-800">Homepage</h3>
                        </div>
                        <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-full border border-sky-100">Step 1</span>
                      </div>

                      {/* Mock Website Preview */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 space-y-1.5">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                          </div>
                          <span className="text-[8px] text-slate-400 font-bold font-mono">daikin.co.id</span>
                        </div>
                        <div className="font-black text-[10px] text-[#0080cb] tracking-wider">DAIKIN</div>
                        
                        <div className="aspect-[16/9] bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 relative overflow-hidden">
                          <div className="w-7 h-7 rounded-full bg-white text-[#0080cb] flex items-center justify-center shadow-2xs">
                            <HomeIcon className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Menu Card Banner */}
                        <div className="p-1.5 bg-sky-50 rounded-lg border border-sky-200 flex items-center gap-1.5 text-[9px] font-extrabold text-[#0080cb]">
                          <Building2 className="w-3 h-3" />
                          <span className="truncate">Informasi & Wawasan</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium text-center pt-2 border-t border-slate-100 leading-tight">
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
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">2</span>
                          <h3 className="font-extrabold text-xs text-slate-800">Pilih Journey</h3>
                        </div>
                        <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-full border border-sky-100">Step 2</span>
                      </div>

                      {/* Journey card */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 text-center space-y-2 flex flex-col items-center justify-center min-h-[145px]">
                        <div className="w-10 h-10 rounded-2xl bg-sky-100 text-[#0080cb] border border-sky-200 flex items-center justify-center shadow-2xs">
                          <Compass className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-extrabold text-[11px] text-slate-800 block leading-tight">
                            Eksplorasi Informasi & Wawasan
                          </span>
                          <span className="text-[8px] text-slate-500 font-medium block">
                            Solusi, Berita, & Riset
                          </span>
                        </div>
                        <Link 
                          to="/insights" 
                          className="px-4 py-1 bg-[#0080cb] text-white font-bold text-[10px] rounded-lg shadow-sm hover:bg-[#005a87] transition-colors inline-block"
                        >
                          Jelajahi
                        </Link>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium text-center pt-2 border-t border-slate-100 leading-tight">
                      User memilih menu Informasi / Wawasan
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 3 */}
                <FadeInUp delay={0.15} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">3</span>
                          <h3 className="font-extrabold text-xs text-slate-800">Topik Informasi</h3>
                        </div>
                        <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-full border border-sky-100">Step 3</span>
                      </div>

                      {/* 3x3 Topics Grid Matrix */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-1.5 mb-3">
                        <span className="text-[9px] font-extrabold text-slate-700 block mb-1 text-center">Pilih topik jelajah:</span>
                        <div className="grid grid-cols-3 gap-1 text-[8px] font-extrabold text-center">
                          {[
                            { id: 'informasi', icon: FileText, label: 'Informasi' },
                            { id: 'wawasan', icon: Lightbulb, label: 'Wawasan' },
                            { id: 'about', icon: Building2, label: 'Perusahaan' },
                            { id: 'campaign', icon: Megaphone, label: 'Campaign' },
                            { id: 'tech', icon: Cpu, label: 'Teknologi' },
                            { id: 'news', icon: BookOpen, label: 'Berita' },
                            { id: 'csr', icon: Leaf, label: 'CSR' },
                            { id: 'careers', icon: Briefcase, label: 'Karir' },
                            { id: 'download', icon: Download, label: 'Unduhan' },
                          ].map((t) => {
                            const IconComp = t.icon
                            const isSelected = selectedTopic === t.id
                            return (
                              <button
                                key={t.id}
                                onClick={() => setSelectedTopic(t.id)}
                                className={`p-1 rounded flex flex-col items-center justify-center transition-all ${
                                  isSelected ? 'bg-[#0080cb] text-white shadow-2xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-sky-50'
                                }`}
                              >
                                <IconComp className="w-3 h-3 mb-0.5" />
                                <span className="truncate w-full leading-tight">{t.label}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium text-center pt-2 border-t border-slate-100 leading-tight">
                      User memilih topik yang ingin diakses
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 4 */}
                <FadeInUp delay={0.2} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">4</span>
                          <h3 className="font-extrabold text-xs text-slate-800">Halaman Konten</h3>
                        </div>
                        <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-full border border-sky-100">Step 4</span>
                      </div>

                      {/* Mock Article View */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2 mb-3 space-y-2 text-[9px]">
                        <div className="aspect-[16/8] bg-[#0080cb] rounded-lg p-2 text-white flex flex-col justify-end">
                          <span className="font-extrabold leading-tight text-[10px]">Pusat Informasi & Wawasan</span>
                          <span className="text-[8px] opacity-80 font-light">Artikel, Riset & Panduan</span>
                        </div>

                        {/* Content Format Tags */}
                        <div className="flex flex-wrap gap-1 text-[7px] font-bold">
                          <span className="bg-sky-100 text-[#0080cb] px-1 py-0.5 rounded">Solusi AC</span>
                          <span className="bg-[#0080cb] text-white px-1 py-0.5 rounded">Riset</span>
                          <span className="bg-slate-200 text-slate-700 px-1 py-0.5 rounded">Berita</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium text-center pt-2 border-t border-slate-100 leading-tight">
                      User membaca konten informasi / wawasan
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 5 */}
                <FadeInUp delay={0.25} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">5</span>
                          <h3 className="font-extrabold text-xs text-slate-800">Interaksi Konten</h3>
                        </div>
                        <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-full border border-sky-100">Step 5</span>
                      </div>

                      {/* Content Actions */}
                      <div className="space-y-1 mb-3 text-[9px]">
                        <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-1.5">
                          <Bookmark className="w-3 h-3 text-[#0080cb] shrink-0" />
                          <div>
                            <span className="font-bold text-slate-800 block text-[9px]">Simpan Artikel</span>
                            <span className="text-[7px] text-slate-400 block">Dibaca nanti</span>
                          </div>
                        </div>

                        <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-1.5">
                          <Share2 className="w-3 h-3 text-sky-500 shrink-0" />
                          <div>
                            <span className="font-bold text-slate-800 block text-[9px]">Bagikan Konten</span>
                            <span className="text-[7px] text-slate-400 block">Media sosial</span>
                          </div>
                        </div>

                        <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-1.5">
                          <Download className="w-3 h-3 text-emerald-600 shrink-0" />
                          <div>
                            <span className="font-bold text-slate-800 block text-[9px]">Unduh Dokumen</span>
                            <span className="text-[7px] text-slate-400 block">PDF terkait</span>
                          </div>
                        </div>

                        <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-amber-500 shrink-0" />
                          <div>
                            <span className="font-bold text-slate-800 block text-[9px]">Newsletter</span>
                            <span className="text-[7px] text-slate-400 block">Berlangganan info</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium text-center pt-2 border-t border-slate-100 leading-tight">
                      User berinteraksi dengan konten
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* STEP 6 */}
                <FadeInUp delay={0.3} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#0080cb] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">6</span>
                          <h3 className="font-extrabold text-xs text-slate-800">Selesai</h3>
                        </div>
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100">Selesai</span>
                      </div>

                      {/* Success Box */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-3 text-center space-y-2 flex flex-col items-center justify-center min-h-[145px]">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-0.5">
                          <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                        </div>
                        <h4 className="font-extrabold text-xs text-slate-900">Terima kasih!</h4>
                        <p className="text-[9px] text-slate-500 leading-snug font-medium">
                          Terus ikuti informasi terbaru seputar Daikin Indonesia.
                        </p>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium text-center pt-2 border-t border-slate-100 leading-tight">
                      User menyelesaikan pencarian
                    </p>
                  </div>
                </FadeInUp>

              </div>

              {/* Desktop Connectors for Row 1 */}
              <div className="hidden lg:block">
                <div className="absolute left-[15.8%] top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </div>
                <div className="absolute left-[32.5%] top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </div>
                <div className="absolute left-[49.1%] top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div className="absolute left-[65.8%] top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div className="absolute left-[82.5%] top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-[#0080cb]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>

          </div>

          {/* SECTION 2: HALAMAN DETAIL PER TOPIK (DISESUAIKAN DENGAN STRUKTUR MENU INFORMASI & WAWASAN) */}
          <div className="space-y-6 pt-4 border-t border-slate-200">
            <div className="text-center space-y-1 mb-6">
              <span className="px-3.5 py-1 bg-sky-100 text-[#0080cb] font-extrabold text-xs uppercase tracking-wider rounded-full border border-sky-200">
                Rincian Menu Informasi & Wawasan (Ekosistem Daikin)
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Struktur Sub-Menu & Konten Detail
              </h2>
            </div>

            {/* HIGH-LEVEL CATEGORY 1: MENU INFORMASI */}
            <div className="bg-sky-50/60 p-5 rounded-3xl border border-sky-200/80 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#0080cb] text-white flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">1. Rincian Menu INFORMASI</h3>
                  <p className="text-xs text-slate-500 font-medium">Panduan solusi tata udara, kalkulator, & pencapaian perusahaan</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* SUB-CARD A: SOLUSI TATA UDARA */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <span className="text-[10px] font-extrabold text-[#0080cb] bg-sky-50 px-2 py-0.5 rounded uppercase">Solusi Tata Udara</span>
                  <ul className="space-y-1 text-xs text-slate-700 font-medium pt-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/solutions/ac-calculator" className="hover:text-[#0080cb] hover:underline font-bold">Kalkulator PK & Daya AC</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/solutions/how-to-choose" className="hover:text-[#0080cb] hover:underline">Panduan Memilih AC</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/solutions/energy-efficiency" className="hover:text-[#0080cb] hover:underline">Hemat Energi dengan Inverter</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/solutions/air-quality" className="hover:text-[#0080cb] hover:underline">Kualitas Udara Dalam Ruangan</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/solutions/maintenance-tips" className="hover:text-[#0080cb] hover:underline">Tips Perawatan AC</Link>
                    </li>
                  </ul>
                </div>

                {/* SUB-CARD B: PENCAPAIAN & BERITA */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <span className="text-[10px] font-extrabold text-[#0080cb] bg-sky-50 px-2 py-0.5 rounded uppercase">Pencapaian & Berita</span>
                  <ul className="space-y-1 text-xs text-slate-700 font-medium pt-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/about/achievements" className="hover:text-[#0080cb] hover:underline">AC Subscription (Berlangganan)</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/information/articles" className="hover:text-[#0080cb] hover:underline">Daikin's Air Today (Artikel)</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/information/solutions" className="hover:text-[#0080cb] hover:underline">For All Your Needs (Panduan)</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/information/carbon-neutrality" className="hover:text-[#0080cb] hover:underline">Carbon Neutrality 2050</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/information/portfolio" className="hover:text-[#0080cb] hover:underline">Studi Kasus & Portofolio</Link>
                    </li>
                  </ul>
                </div>

                {/* SUB-CARD C: KEMITRAAN & DEALER */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <span className="text-[10px] font-extrabold text-[#0080cb] bg-sky-50 px-2 py-0.5 rounded uppercase">Kemitraan Bisnis</span>
                  <ul className="space-y-1 text-xs text-slate-700 font-medium pt-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/information/dealer" className="hover:text-[#0080cb] hover:underline font-bold">Bergabung Menjadi Dealer Daikin</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/services/vrv-dealer" className="hover:text-[#0080cb] hover:underline">VRV Certified Dealer</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/services/proshop" className="hover:text-[#0080cb] hover:underline">Daikin ProShop Partnership</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* HIGH-LEVEL CATEGORY 2: MENU WAWASAN (INSIGHTS) */}
            <div className="bg-amber-50/50 p-5 rounded-3xl border border-amber-200/80 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">2. Rincian Menu WAWASAN (INSIGHTS)</h3>
                  <p className="text-xs text-slate-500 font-medium">Pusat riset teknologi terkini, berita acara, & kampanye global</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* SUB-CARD A: RISET & TEKNOLOGI TERKINI */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded uppercase">Riset & Teknologi Terkini</span>
                  <ul className="space-y-1 text-xs text-slate-700 font-medium pt-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/insights/research" className="hover:text-[#0080cb] hover:underline font-bold">Riset Neurosains Udara</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/insights/reports" className="hover:text-[#0080cb] hover:underline">World Air Survey Daikin</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/insights/technology/benefits" className="hover:text-[#0080cb] hover:underline">Benefits of Tech (Inverter & R-32)</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/insights/technology/ventilation" className="hover:text-[#0080cb] hover:underline">Expert Ventilation Method</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/insights/technology/vrv" className="hover:text-[#0080cb] hover:underline">VRV Era (Evolusi VRV)</Link>
                    </li>
                  </ul>
                </div>

                {/* SUB-CARD B: KAMPANYE GLOBAL (CAMPAIGN) */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <span className="text-[10px] font-extrabold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded uppercase">Kampanye (Campaign)</span>
                  <ul className="space-y-1 text-xs text-slate-700 font-medium pt-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <Link to="/campaign/ideal-air" className="hover:text-[#0080cb] hover:underline font-bold">Perfecting the Air - Ideal Air</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <Link to="/campaign/power-to-create" className="hover:text-[#0080cb] hover:underline font-bold">The Power to Create</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <Link to="/campaign/perfecting-air" className="hover:text-[#0080cb] hover:underline">Perfecting Air Stories</Link>
                    </li>
                  </ul>
                </div>

                {/* SUB-CARD C: BERITA & ACARA */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <span className="text-[10px] font-extrabold text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase">Berita & Acara</span>
                  <ul className="space-y-1 text-xs text-slate-700 font-medium pt-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <Link to="/insights/news" className="hover:text-[#0080cb] hover:underline">Berita Terbaru Daikin</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <Link to="/insights/promotions" className="hover:text-[#0080cb] hover:underline">Promo Spesial</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <Link to="/insights/events" className="hover:text-[#0080cb] hover:underline">Event & Kegiatan Resmi</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <Link to="/insights/training" className="hover:text-[#0080cb] hover:underline">Pelatihan & Sertifikasi</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* EXISTING 7 TOPIC CARDS MATRIX */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              
              {/* CARD 1: TENTANG DAIKIN (PERUSAHAAN) */}
              <FadeInUp delay={0.1} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0080cb] flex items-center justify-center shrink-0 font-bold">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900">Tentang Daikin</h3>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/about/glance" className="hover:text-[#0080cb] hover:underline">Sekilas Daikin (9 Facts)</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/profile/about" className="hover:text-[#0080cb] hover:underline">Profil Daikin Indonesia</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/profile/daikin-group" className="hover:text-[#0080cb] hover:underline">Filosofi & Daikin Global</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/profile/history" className="hover:text-[#0080cb] hover:underline">Perjalanan Sejarah (1924)</Link>
                    </li>
                  </ul>
                </div>

                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img 
                    src="/images/profile/head-office.jpg" 
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none' }} 
                    alt="Daikin Building" 
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full flex flex-col items-center justify-center bg-sky-50 text-[#0080cb] p-2 text-center">
                    <Building2 className="w-6 h-6 mb-1" />
                    <span className="font-extrabold text-[10px]">Profil & Filosofi Daikin</span>
                  </div>
                </div>
              </FadeInUp>

              {/* CARD 2: CAMPAIGN */}
              <FadeInUp delay={0.15} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 font-bold">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900">Campaign</h3>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                      <Link to="/campaign/ideal-air" className="hover:text-[#0080cb] hover:underline">Perfecting the Air - Ideal Air</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                      <Link to="/campaign/power-to-create" className="hover:text-[#0080cb] hover:underline">The Power to Create</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                      <Link to="/campaign/perfecting-air" className="hover:text-[#0080cb] hover:underline">Perfecting Air Stories</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                      <Link to="/insights/promotions" className="hover:text-[#0080cb] hover:underline">Promo & Program Aktif</Link>
                    </li>
                  </ul>
                </div>

                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-3 flex flex-col justify-between">
                  <span className="text-[9px] font-extrabold uppercase bg-white/20 px-2 py-0.5 rounded w-fit">Kampanye Global</span>
                  <span className="font-black text-xs leading-snug">GARANSI PANJANG MAKIN TENANG</span>
                </div>
              </FadeInUp>

              {/* CARD 3: TEKNOLOGI & INOVASI */}
              <FadeInUp delay={0.2} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900">Teknologi & Inovasi</h3>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/profile/technology" className="hover:text-[#0080cb] hover:underline">Inovasi Teknologi Daikin</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/profile/streamer" className="hover:text-[#0080cb] hover:underline">Streamer Air Purifier</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/profile/tkdn" className="hover:text-[#0080cb] hover:underline">Kandungan Lokal (TKDN)</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <Link to="/insights/technology/benefits" className="hover:text-[#0080cb] hover:underline">Inverter, Heat Pump & R-32</Link>
                    </li>
                  </ul>
                </div>

                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-r from-blue-900 via-sky-800 to-indigo-900 text-white p-3 flex flex-col justify-between">
                  <span className="text-[9px] font-extrabold uppercase text-amber-300">Pioneer Tech</span>
                  <span className="font-black text-xs leading-snug">DAIKIN INVERTER TECHNOLOGY</span>
                </div>
              </FadeInUp>

              {/* CARD 4: UNDUHAN (DOWNLOAD) */}
              <FadeInUp delay={0.25} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#0080cb] text-white flex items-center justify-center shrink-0 font-bold">
                      <Download className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900">Unduhan (Download)</h3>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/products/e-catalogue" className="hover:text-[#0080cb] hover:underline">E-Katalog Produk PDF</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/services/technical-data" className="hover:text-[#0080cb] hover:underline">Brosur & Data Teknis</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/services/technical-data" className="hover:text-[#0080cb] hover:underline">Manual Book AC Daikin</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0080cb]"></span>
                      <Link to="/services/warranty" className="hover:text-[#0080cb] hover:underline">Syarat Garansi & Dokumen</Link>
                    </li>
                  </ul>
                </div>

                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-sky-50 flex flex-col items-center justify-center p-3 text-center border-dashed border-[#0080cb]/40">
                  <FileText className="w-8 h-8 text-[#0080cb] mb-1" />
                  <span className="font-extrabold text-xs text-[#0080cb]">Download Center</span>
                  <span className="text-[9px] text-slate-400">PDF & Brosur Produk</span>
                </div>
              </FadeInUp>

            </div>
          </div>

          {/* FOOTER GOAL & MANFAAT BANNER */}
          <FadeInUp delay={0.45} className="bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-2xl border border-sky-200 p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-2xl bg-[#0080cb] text-white flex items-center justify-center shrink-0 shadow-md">
                <Info className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <span className="font-extrabold text-xs text-[#0080cb] uppercase tracking-wider block">
                  Tujuan Utama Aktor 4:
                </span>
                <p className="text-sm font-bold text-slate-800 leading-relaxed">
                  Memberikan kemudahan bagi user untuk mengakses berbagai informasi mengenai Daikin, seperti campaign, teknologi, berita, karir, dan informasi perusahaan lainnya.
                </p>
              </div>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-sky-200 pt-4 lg:pt-0 lg:pl-6 space-y-1 text-xs text-slate-600 font-medium shrink-0">
              <span className="font-extrabold text-slate-800 block text-xs mb-1">Manfaat Utama:</span>
              <p>• Meningkatkan brand awareness</p>
              <p>• Menyediakan informasi yang relevan & terpercaya</p>
              <p>• Mendukung transparansi & komunikasi perusahaan</p>
            </div>
          </FadeInUp>

          {/* Bottom Navigation Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <Link 
              to="/flow-aktor-3" 
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all"
            >
              ← Flow Aktor 3
            </Link>
            <div className="flex gap-2">
              <Link 
                to="/flow-aktor-1" 
                className="px-4 py-2 bg-sky-50 text-[#0080cb] hover:bg-sky-100 font-extrabold text-xs rounded-xl transition-all border border-sky-200"
              >
                Flow Aktor 1
              </Link>
              <Link 
                to="/flow-aktor-2" 
                className="px-4 py-2 bg-[#0080cb] hover:bg-[#005a87] text-white font-extrabold text-xs rounded-xl transition-all shadow-sm"
              >
                Flow Aktor 2
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}
