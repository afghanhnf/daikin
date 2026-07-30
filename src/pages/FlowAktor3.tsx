import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home as HomeIcon, MapPin, Phone, MessageCircle, Clock, ExternalLink, 
  Search, CheckCircle2, ChevronRight, Filter, ShieldCheck, Star, 
  Navigation, ArrowRight, ArrowDown, User, Check, Building2, Store,
  MessageSquare, ShoppingCart, Info, Eye, CheckSquare, Square
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

export default function FlowAktor3() {
  const [activeTab, setActiveTab] = useState<'gps' | 'select'>('gps')
  const [filterDealerType, setFilterDealerType] = useState<string[]>(['semua', 'resmi', 'proshop'])
  const [selectedDealerId, setSelectedDealerId] = useState('dealer-1')

  const toggleFilter = (type: string) => {
    if (filterDealerType.includes(type)) {
      setFilterDealerType(filterDealerType.filter((t) => t !== type))
    } else {
      setFilterDealerType([...filterDealerType, type])
    }
  }

  return (
    <PageTransition>
      <PageMeta 
        title="User Journey Flow - Aktor 3: Cari Dealer Resmi | Daikin Indonesia"
        description="Pemetaan visual alur User Journey Flow Aktor 3 (Cari Dealer Resmi & Pembelian Offline) disesuaikan dengan fitur website Daikin Indonesia."
        canonical="/flow-aktor-3"
      />

      <div className="min-h-screen bg-slate-50/70 pt-28 pb-20 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Banner */}
          <FadeInUp className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-[#0080cb] text-white font-extrabold text-sm md:text-base rounded-xl shadow-md tracking-wider uppercase">
                AKTOR 3
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  USER JOURNEY – AKTOR 3
                </h1>
                <p className="text-slate-500 text-sm font-semibold mt-0.5">
                  User ingin mencari dan mengunjungi dealer resmi Daikin (pembelian offline)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <Link 
                to="/services/proshop" 
                className="px-4 py-2.5 bg-sky-50 text-[#0080cb] hover:bg-sky-100 rounded-xl transition-all border border-sky-200 flex items-center gap-2 shadow-2xs"
              >
                <span>Halaman Daikin ProShop</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/services/ishop" 
                className="px-4 py-2.5 bg-[#0080cb] text-white hover:bg-[#005a87] rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Cari Dealer (IShop)</span>
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
                        <div className="font-black text-xs text-[#0080cb] tracking-wider">DAIKIN</div>
                        
                        <div className="aspect-[16/9] bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 relative overflow-hidden">
                          <div className="w-8 h-8 rounded-full bg-white text-[#0080cb] flex items-center justify-center shadow-2xs">
                            <HomeIcon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Dealer Button Card Banner */}
                        <div className="p-2 bg-sky-50 rounded-lg border border-sky-200 flex items-center gap-2 text-[10px] font-extrabold text-[#0080cb]">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Cari Dealer Resmi</span>
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
                        <div className="w-12 h-12 rounded-full bg-sky-100 text-[#0080cb] border border-sky-200 flex items-center justify-center shadow-2xs">
                          <MapPin className="w-6 h-6 stroke-[2]" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-extrabold text-xs text-slate-800 block">
                            Cari dealer resmi
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium block leading-tight">
                            Temukan dealer terdekat di kota Anda.
                          </span>
                        </div>
                        <Link 
                          to="/services/proshop" 
                          className="px-5 py-1.5 bg-[#0080cb] text-white font-bold text-xs rounded-lg shadow-sm hover:bg-[#005a87] transition-colors inline-block"
                        >
                          Cari Dealer
                        </Link>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memilih menu "Cari Dealer Resmi"
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
                          <h3 className="font-extrabold text-sm text-slate-800">Pilih Lokasi</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 3</span>
                      </div>

                      {/* Location Selector */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-4 space-y-2">
                        <span className="text-[11px] font-extrabold text-slate-700 block">Cari dealer di area Anda</span>

                        {/* Location Tab Buttons */}
                        <div className="grid grid-cols-2 gap-1 bg-white p-1 rounded-lg border border-slate-200 text-[10px] font-bold">
                          <button 
                            onClick={() => setActiveTab('gps')}
                            className={`py-1 rounded flex items-center justify-center gap-1 transition-all ${
                              activeTab === 'gps' ? 'bg-[#0080cb] text-white shadow-2xs' : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <Navigation className="w-3 h-3" />
                            <span>Lokasi Saya</span>
                          </button>
                          <button 
                            onClick={() => setActiveTab('select')}
                            className={`py-1 rounded flex items-center justify-center gap-1 transition-all ${
                              activeTab === 'select' ? 'bg-[#0080cb] text-white shadow-2xs' : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <span>Pilih Lokasi</span>
                          </button>
                        </div>

                        {/* Detected Location Status */}
                        <div className="p-2 bg-sky-50 rounded-lg border border-sky-200 flex items-center justify-between text-[10px]">
                          <div>
                            <span className="text-slate-400 block text-[9px]">Lokasi terdeteksi</span>
                            <span className="font-extrabold text-slate-800 block truncate">Jakarta Selatan, DKI Jakarta</span>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        </div>

                        <div className="relative text-center">
                          <span className="bg-slate-50 px-2 text-[9px] text-slate-400 font-bold uppercase relative z-10">atau</span>
                          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                        </div>

                        {/* Location Dropdowns */}
                        <div className="grid grid-cols-2 gap-1 text-[10px]">
                          <div>
                            <span className="text-slate-500 font-semibold text-[9px] block">Provinsi</span>
                            <div className="px-2 py-1 bg-white rounded border border-slate-200 font-bold text-slate-700 truncate">
                              DKI Jakarta ▾
                            </div>
                          </div>
                          <div>
                            <span className="text-slate-500 font-semibold text-[9px] block">Kota / Kab</span>
                            <div className="px-2 py-1 bg-white rounded border border-slate-200 font-bold text-slate-700 truncate">
                              Jakarta Selatan ▾
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memilih lokasi atau deteksi GPS
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
                          <h3 className="font-extrabold text-sm text-slate-800">Hasil Pencarian</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 4</span>
                      </div>

                      {/* Map View & List */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2 mb-4 space-y-2">
                        {/* Mock Map Graphic */}
                        <div className="aspect-[16/8] bg-gradient-to-br from-slate-200 via-sky-100 to-slate-200 rounded-lg border border-slate-300 relative flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(#0080cb_1px,transparent_1px)] [background-size:12px_12px] opacity-20"></div>
                          {/* Map Pin Dots */}
                          <div className="absolute top-2 left-4 text-[#0080cb] animate-bounce"><MapPin className="w-4 h-4 fill-[#0080cb] text-white" /></div>
                          <div className="absolute top-5 right-6 text-[#0080cb]"><MapPin className="w-3.5 h-3.5 fill-[#0080cb] text-white" /></div>
                          <div className="absolute bottom-2 left-1/2 text-[#0080cb]"><MapPin className="w-3.5 h-3.5 fill-[#0080cb] text-white" /></div>
                        </div>

                        {/* Dealers List */}
                        <div className="space-y-1">
                          {[
                            { id: 'dealer-1', name: 'Daikin ProShop Jakarta Selatan', dist: '2.1 km', type: 'Dealer Resmi' },
                            { id: 'dealer-2', name: 'Daikin Dealer Pondok Indah', dist: '3.4 km', type: 'Dealer Resmi' },
                            { id: 'dealer-3', name: 'Daikin ProShop Kemang', dist: '4.2 km', type: 'Dealer Resmi' },
                          ].map((d) => (
                            <div 
                              key={d.id}
                              onClick={() => setSelectedDealerId(d.id)}
                              className={`p-1.5 rounded-lg border text-[10px] flex items-center justify-between transition-all cursor-pointer ${
                                selectedDealerId === d.id ? 'bg-sky-50 border-[#0080cb] shadow-2xs font-bold' : 'bg-white border-slate-200 text-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 min-w-0">
                                <MapPin className="w-3.5 h-3.5 text-[#0080cb] shrink-0" />
                                <div className="truncate">
                                  <span className="block truncate text-[10px] text-slate-800">{d.name}</span>
                                  <span className="text-[8px] text-slate-400 font-medium">{d.dist} • {d.type}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User melihat daftar dealer pada map
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
                          <h3 className="font-extrabold text-sm text-slate-800">Filter Dealer</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 5</span>
                      </div>

                      {/* Filter Options */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-4 space-y-3">
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-700 block mb-1.5">Tipe Dealer</span>
                          <div className="space-y-1">
                            {[
                              { id: 'semua', label: 'Semua' },
                              { id: 'resmi', label: 'Dealer Resmi' },
                              { id: 'proshop', label: 'ProShop' },
                              { id: 'service', label: 'Service Center' },
                            ].map((f) => {
                              const isChecked = filterDealerType.includes(f.id)
                              return (
                                <button 
                                  key={f.id}
                                  onClick={() => toggleFilter(f.id)}
                                  className="flex items-center gap-2 text-[10px] font-medium text-slate-700 w-full text-left"
                                >
                                  <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                                    isChecked ? 'bg-[#0080cb] border-[#0080cb] text-white' : 'bg-white border-slate-300'
                                  }`}>
                                    {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                  </div>
                                  <span>{f.label}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        <div className="pt-1 border-t border-slate-200">
                          <span className="text-[10px] font-extrabold text-slate-700 block mb-1">Kategori Layanan</span>
                          <div className="px-2 py-1 bg-white rounded border border-slate-200 text-[10px] font-bold text-slate-700 flex justify-between items-center">
                            <span>Semua Produk</span>
                            <ChevronRight className="w-3 h-3 text-slate-400 rotate-90" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memfilter dealer sesuai kebutuhan
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
                  <span>Pilih & Lihat Informasi Dealer Detail</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>

            {/* ROW 2: STEPS 6 TO 9 + GOAL BOX */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                
                {/* STEP 6 */}
                <FadeInUp delay={0.3} className="flex flex-col h-full relative group">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex-1 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0080cb] text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-2xs">6</span>
                          <h3 className="font-extrabold text-sm text-slate-800">Detail Dealer</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 6</span>
                      </div>

                      {/* Store Detail Content */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 mb-4 space-y-2 text-[10px]">
                        {/* Store Front Photo */}
                        <div className="aspect-[16/9] rounded-lg overflow-hidden relative bg-slate-800 border border-slate-300">
                          <img 
                            src="/images/services/proshop-store.png" 
                            onError={(e) => { (e.target as HTMLElement).style.display = 'none' }}
                            alt="Daikin ProShop" 
                            className="w-full h-full object-cover opacity-90"
                          />
                          <div className="absolute top-1.5 right-1.5 bg-[#0080cb] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded">
                            Dealer Resmi
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-2 text-white">
                            <span className="font-extrabold text-xs leading-tight">Daikin ProShop Jakarta Selatan</span>
                          </div>
                        </div>

                        <div className="space-y-1 text-slate-600 font-medium">
                          <p className="text-[9px] leading-tight">
                            Jl. RS. Fatmawati No. 15, Cilandak, Jakarta Selatan 12430
                          </p>
                          <div className="flex items-center gap-1 text-[9px]">
                            <Clock className="w-3 h-3 text-[#0080cb] shrink-0" />
                            <span>Senin - Sabtu: 08.30 - 17.30</span>
                          </div>
                          <div className="flex items-center gap-1 text-[9px]">
                            <Phone className="w-3 h-3 text-[#0080cb] shrink-0" />
                            <span>(021) 7654 3210 / 0812 1234 5678</span>
                          </div>
                          <a 
                            href="https://maps.google.com" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-[#0080cb] font-extrabold flex items-center gap-1 pt-0.5 hover:underline text-[9px]"
                          >
                            <span>Lihat di Google Maps</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User melihat informasi lengkap dealer
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
                          <h3 className="font-extrabold text-sm text-slate-800">Pilih Aksi</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 7</span>
                      </div>

                      {/* Action buttons list (Real Daikin Flow: WhatsApp, Marketplace, Maps) */}
                      <div className="space-y-1.5 mb-4 text-[10px]">
                        <a 
                          href="https://wa.me/6281212345678" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full p-2 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 text-left flex items-center gap-2 transition-all shadow-2xs"
                        >
                          <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                            <MessageCircle className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-extrabold text-emerald-800 block leading-tight">Chat WhatsApp Dealer</span>
                            <span className="text-[8px] text-emerald-600">Tanya harga & penawaran instan</span>
                          </div>
                        </a>

                        <a 
                          href="https://tokopedia.com" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full p-2 bg-sky-50 hover:bg-sky-100 rounded-xl border border-sky-200 text-left flex items-center gap-2 transition-all"
                        >
                          <div className="w-6 h-6 rounded-lg bg-[#0080cb] text-white flex items-center justify-center shrink-0">
                            <ShoppingCart className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-extrabold text-[#0080cb] block leading-tight">Kunjungi Official Marketplace</span>
                            <span className="text-[8px] text-slate-500">Tokopedia / Shopee Store</span>
                          </div>
                        </a>

                        <a 
                          href="tel:02176543210" 
                          className="w-full p-2 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 text-left flex items-center gap-2 transition-all"
                        >
                          <div className="w-6 h-6 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center shrink-0">
                            <Phone className="w-3 h-3" />
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-800 block leading-tight">Hubungi Telepon Dealer</span>
                            <span className="text-[8px] text-slate-400">Panggilan suara langsung</span>
                          </div>
                        </a>

                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full p-2 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 text-left flex items-center gap-2 transition-all"
                        >
                          <div className="w-6 h-6 rounded-lg bg-sky-100 text-[#0080cb] flex items-center justify-center shrink-0">
                            <Navigation className="w-3 h-3" />
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-800 block leading-tight">Rute Navigasi Google Maps</span>
                            <span className="text-[8px] text-slate-400">Petunjuk jalan ke toko</span>
                          </div>
                        </a>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User memilih kanal WA / Marketplace / Telepon
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
                          <h3 className="font-extrabold text-sm text-slate-800">Pengalihan Aksi</h3>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Direct Link</span>
                      </div>

                      {/* Direct Redirection Info Box */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 mb-4 space-y-2 text-[10px]">
                        <div className="flex flex-col items-center justify-center text-center p-2 bg-white rounded-lg border border-slate-200">
                          <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1">
                            <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                          </div>
                          <h4 className="font-extrabold text-xs text-slate-900">Terhubung ke Aplikasi!</h4>
                          <p className="text-[9px] text-slate-500 leading-tight mt-0.5">
                            User langsung diarahkan ke WA Business dealer / Marketplace tanpa mengisi form di website.
                          </p>
                        </div>

                        {/* Request Summary */}
                        <div className="space-y-1 pt-1 font-medium">
                          <span className="font-extrabold text-[9px] text-slate-500 uppercase block">Detail Pengalihan</span>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-slate-400">Target Store:</span>
                            <span className="font-bold text-slate-800 truncate max-w-[110px]">Daikin ProShop South JKT</span>
                          </div>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-slate-400">Kanal Aksi:</span>
                            <span className="font-bold text-emerald-600">WhatsApp / Tokopedia</span>
                          </div>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-slate-400">Tipe Akses:</span>
                            <span className="font-bold text-[#0080cb]">Direct Link (Tanpa Form)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User terhubung ke aplikasi komunikasi / belanja
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
                          <h3 className="font-extrabold text-sm text-slate-800">Kunjungan</h3>
                        </div>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Langkah 9</span>
                      </div>

                      {/* Store Visit Visual */}
                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-2 mb-4 space-y-2 text-[10px]">
                        <div className="aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 bg-gradient-to-br from-sky-100 to-blue-200 flex flex-col items-center justify-center text-center p-2">
                          <Building2 className="w-7 h-7 text-[#0080cb] mb-1" />
                          <span className="font-black text-xs text-slate-800">Showroom Daikin</span>
                          <span className="text-[9px] text-slate-500 font-medium">Kunjungan Langsung</span>
                        </div>

                        {/* 3 Pillars */}
                        <div className="grid grid-cols-3 gap-1 text-[8px] text-center font-extrabold">
                          <div className="p-1 bg-white rounded border border-slate-200 flex flex-col items-center">
                            <User className="w-3 h-3 text-[#0080cb] mb-0.5" />
                            <span>Konsultasi</span>
                          </div>
                          <div className="p-1 bg-white rounded border border-slate-200 flex flex-col items-center">
                            <Eye className="w-3 h-3 text-[#0080cb] mb-0.5" />
                            <span>Cek Unit</span>
                          </div>
                          <div className="p-1 bg-white rounded border border-slate-200 flex flex-col items-center">
                            <ShoppingCart className="w-3 h-3 text-[#0080cb] mb-0.5" />
                            <span>Pembelian</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium text-center pt-2.5 border-t border-slate-100 leading-tight">
                      User mengunjungi dealer langsung
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="lg:hidden flex justify-center py-2 text-[#0080cb]">
                    <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </FadeInUp>

                {/* GOALS & NOTES CARD (CARD 10 / SIDE BOX) */}
                <FadeInUp delay={0.5} className="flex flex-col h-full relative group">
                  <div className="bg-gradient-to-br from-sky-50/90 to-blue-50/50 rounded-2xl border-2 border-dashed border-[#0080cb]/40 shadow-sm p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-[#0080cb] text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <Star className="w-3.5 h-3.5 fill-white" />
                        </div>
                        <h3 className="font-extrabold text-sm text-[#0080cb]">Tujuan Aktor 3</h3>
                      </div>

                      <p className="text-xs font-bold text-slate-800 mb-3 leading-relaxed">
                        Menemukan dealer resmi Daikin terdekat dan melakukan komunikasi / kunjungan untuk pembelian produk secara offline.
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-sky-200/80 text-[10px] text-slate-600 font-medium">
                        <span className="font-extrabold text-slate-700 block uppercase tracking-wider text-[9px]">Catatan:</span>
                        <p className="leading-tight">• Data dealer terhubung dengan database resmi Daikin.</p>
                        <p className="leading-tight">• Informasi jam operasional, kontak, dan layanan dapat berubah secara real-time.</p>
                        <p className="leading-tight">• Tersedia fitur untuk simpan dealer favorit (opsional).</p>
                      </div>
                    </div>

                    <div className="pt-3">
                      <Link 
                        to="/services/proshop" 
                        className="w-full py-2 bg-[#0080cb] text-white font-extrabold text-xs rounded-xl shadow-sm hover:bg-[#005a87] transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Jelajahi Dealer ProShop</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
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
              </div>
            </div>

          </div>

          {/* Footer Navigation Banner */}
          <FadeInUp delay={0.55} className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0080cb] border border-sky-200 flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-sm text-slate-900 block">Lihat Diagram User Journey Lainnya</span>
                <span className="text-xs text-slate-500">Navigasi antar halaman pemetaan flow sistem Daikin</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link 
                to="/flow-aktor-1" 
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all flex items-center gap-1.5"
              >
                <span>← Buka Flow Aktor 1</span>
              </Link>
              <Link 
                to="/services/proshop" 
                className="px-4 py-2 bg-[#0080cb] hover:bg-[#005a87] text-white font-extrabold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Buka Daikin ProShop</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeInUp>

        </div>
      </div>
    </PageTransition>
  )
}
