import React, { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown, Search, HelpCircle, PhoneCall, MessageCircle,
  Wind, Sparkles, MoreHorizontal, CheckCircle2, ArrowRight, ShieldCheck,
  FileText, Headphones, Info
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface FAQItem {
  id: string
  question: string
  answer: string
}

// ── Tab 1: SPLIT / MULTI-SPLIT (19 Questions extracted directly from image) ──
const splitFaqs: FAQItem[] = [
  {
    id: 'split-1',
    question: 'AC tidak mendinginkan atau memanaskan ruangan dengan baik.',
    answer:
      'Periksa apakah filter udara kotor atau tersumbat debu. Pastikan pengaturan suhu remote sudah sesuai (disarankan 22°C-24°C untuk pendinginan optimal). Periksa juga apakah pintu atau jendela ruangan dalam keadaan terbuka, atau ada sumber panas berlebih di dalam ruangan.'
  },
  {
    id: 'split-2',
    question: 'Udara hangat tidak mengalir segera setelah memulai operasi pemanasan.',
    answer:
      'Pada mode pemanasan (Heat Mode), unit melakukan proses prapemanasan (warm-up) sekitar 2-5 menit untuk mencegah hembusan udara dingin awal sebelum sistem mencapai suhu kerja yang stabil.'
  },
  {
    id: 'split-3',
    question: 'AC tidak beroperasi. (Lampu operasi mati.)',
    answer:
      'Periksa apakah pemutus arus listrik (MCB) trip atau sekring putus. Pastikan steker terpasang sempurna dan sumber listrik rumah tidak sedang mengalami pemadaman.'
  },
  {
    id: 'split-4',
    question: 'AC tidak beroperasi. (Lampu operasi berkedip)',
    answer:
      'Lampu operasi berkedip menandakan sistem keamanan mendeteksi indikasi error atau mode perlindungan mandiri. Tekan tombol CANCEL pada remote control selama 5 detik untuk membaca kode error, kemudian hubungi Call Center Daikin 0800 1 081 081.'
  },
  {
    id: 'split-5',
    question: 'Tombol ON/OFF pada unit utama atau pengendali jarak jauh tidak berfungsi.',
    answer:
      'Periksa baterai remote control dan ganti dengan baterai baru. Pastikan tidak ada penghalang antara sensor sinar inframerah pada unit indoor dan remote.'
  },
  {
    id: 'split-6',
    question: 'AC tidak segera beroperasi ketika unit dihidupkan selama atau setelah operasi pembersihan filter.',
    answer:
      'Fitur pembersihan filter otomatis (Auto Clean) membutuhkan waktu beberapa menit untuk menyelesaikan mekanisme pengereman dan penyelarasan posisi sikat filter sebelum operasi kompresor dimulai.'
  },
  {
    id: 'split-7',
    question: 'AC tidak beroperasi segera ketika operasi dimulai kembali segera setelah berhenti, atau mode operasi telah berubah.',
    answer:
      'Ini adalah sirkuit perlindungan otomatis kompresor (3-minute delay protection) untuk mencegah kerusakan pada sistem sirkulasi freon akibat tekanan tinggi tiba-tiba.'
  },
  {
    id: 'split-8',
    question: 'AC tidak segera beroperasi saat operasi kering atau pendinginan diaktifkan.',
    answer:
      'Pada mode Kering (Dry Mode) atau saat pergantian mode, unit menyesuaikan kelembaban udara dengan kecepatan kipas minimum sebelum hembusan pendinginan utama berjalan.'
  },
  {
    id: 'split-9',
    question: 'Operasi berhenti secara tak terduga. (Lampu operasi menyala.)',
    answer:
      'Hal ini dapat terjadi jika suhu target ruangan telah tercapai dan sistem Inverter menurunkan frekuensi kompresor ke tingkat minimum atau memasuki mode pembeku sementara.'
  },
  {
    id: 'split-10',
    question: 'Unit menyala dan mati berulang kali. (Lampu operasi menyala.)',
    answer:
      'Periksa apakah pengaturan timer ON/OFF aktif pada remote control. Hal ini juga dapat terjadi jika kapasitas PK AC terlalu besar untuk luas ruangan yang dipasang.'
  },
  {
    id: 'split-11',
    question: 'Pengoperasian berhenti secara tak terduga ketika penghitung waktu diatur dalam keadaan AKTIF.',
    answer:
      'Periksa kembali pengaturan jam aktual pada remote dan durasi TIMER ON/OFF yang dijadwalkan agar tidak saling berbenturan.'
  },
  {
    id: 'split-12',
    question: 'Operasi berhenti secara tak terduga. (Lampu operasi pada unit utama berkedip.)',
    answer:
      'Indikasi ini menandakan proteksi keselamatan aktif. Matikan saklar MCB AC selama 3 menit, lalu nyalakan kembali. Jika lampu berkedip berulang, hubungi tim teknis resmi Daikin.'
  },
  {
    id: 'split-13',
    question: 'Operasi pemanasan berhenti secara tak terduga, dan suara air mengalir terdengar.',
    answer:
      'Sistem sedang melakukan proses defrost otomatis untuk mencairkan bunga es pada unit luar (outdoor). Suara air mengalir adalah sirkulasi freon saat arah sirkulasi berbalik.'
  },
  {
    id: 'split-14',
    question: 'Operasi AC berhenti secara tiba-tiba, dan operasi pembersihan filter dimulai.',
    answer:
      'Jika diatur ke mode pembersihan filter otomatis (Auto Filter Cleaning), unit secara berkala akan menghentikan hembusan pendinginan untuk membersihkan jaring filter dari debu terakumulasi.'
  },
  {
    id: 'split-15',
    question: 'Operasi pembersihan filter tidak berhenti.',
    answer:
      'Pastikan kotak penampung debu filter terpasang dengan pas dan sikat pembersih tidak terganjal kotoran keras. Jika tetap berjalan terus menerus, lakukan reset melalui remote control.'
  },
  {
    id: 'split-16',
    question: 'AC terus beroperasi bahkan ketika operasi penurunan kelembaban, pendinginan kering, atau operasi pendinginan dimatikan.',
    answer:
      'Ini adalah fitur Mold Proof / Cleaning internal. Kipas indoor akan tetap berhembus rendah selama 15-30 menit setelah unit dimatikan untuk mengeringkan bagian dalam evaporator dari embun agar bebas jamur.'
  },
  {
    id: 'split-17',
    question: 'Unit dalam ruangan menghasilkan suara tidak normal selama operasi.',
    answer:
      'Suara gesekan halus atau deritan kecil dapat berasal dari pemuaian/penyusutan plastik casing akibat perubahan suhu dingin dan hangat. Ini merupakan hal yang normal.'
  },
  {
    id: 'split-18',
    question: 'Suara mengklik dihasilkan.',
    answer:
      'Suara klik dihasilkan oleh perpindahan katup katup ekspansi elektronik (Electronic Expansion Valve) atau saklar relay listrik pada papan sirkuit.'
  },
  {
    id: 'split-19',
    question: 'Suara berdengung dihasilkan.',
    answer:
      'Suara berdengung rendah adalah suara hembusan udara alami atau kerja generator teknologi Streamer / pemurni ionik yang aktif mengeliminasi bakteri.'
  }
]

// ── Tab 2: AIR PURIFIERS (27 Questions extracted directly from image) ─────────
const purifierFaqs: FAQItem[] = [
  {
    id: 'purifier-1',
    question: 'Pemurni udara tidak beroperasi ketika tombol ON / OFF ditekan.',
    answer:
      'Periksa apakah kabel daya terhubung dengan kuat ke stopkontak. Pastikan saklar daya utama rumah tidak bermasalah atau mengalami pemadaman listrik.'
  },
  {
    id: 'purifier-2',
    question: 'Pemurni udara tidak beroperasi saat dinyalakan.',
    answer:
      'Pastikan panel depan dan kait pengunci keselamatan (safety lock switch) telah terpasang dengan presisi dan terkunci sempurna pada tempatnya.'
  },
  {
    id: 'purifier-3',
    question: 'Pembersih udara tidak beroperasi ketika dinyalakan setelah pemasangan panel depan.',
    answer:
      'Panel depan dilengkapi dengan saklar mikro keselamatan. Jika panel depan sedikit longgar atau tidak terpasang rata, unit tidak akan menyala demi keamanan. Lepas dan pasang kembali hingga terdengar bunyi klik rapat.'
  },
  {
    id: 'purifier-4',
    question: 'Ketika kabel listrik dipindahkan, produk terkadang berhenti dan menyala.',
    answer:
      'Hal ini menandakan adanya kelonggaran atau kontak yang kurang stabil pada kabel listrik atau stopkontak. Segera hentikan penggunaan dan periksa steker atau ganti ke stopkontak lain.'
  },
  {
    id: 'purifier-5',
    question: 'Pembersih udara tidak mengeluarkan udara.',
    answer:
      'Periksa apakah kantong plastik pembungkus filter HEPA baru sudah dilepas sebelum penggunaan pertama. Periksa juga apakah lubang hembusan udara atas terhalang benda asing.'
  },
  {
    id: 'purifier-6',
    question: 'Kipas berhenti selama operasi.',
    answer:
      'Dalam mode Otomatis (Auto Mode) atau mode Hemat Energi (Eco Mode), kipas akan berhenti berputar secara otomatis jika kualitas udara ruangan sudah terdeteksi bersih sempurna.'
  },
  {
    id: 'purifier-7',
    question: 'Pembersih udara tidak membersihkan udara.',
    answer:
      'Periksa apakah filter HEPA / Pre-filter sudah sangat kotor dan tersumbat debu tebal. Lakukan pembersihan atau ganti filter jika sudah melebihi masa pakai. Pastikan juga kapasitas unit sesuai dengan luas ruangan.'
  },
  {
    id: 'purifier-8',
    question: 'Pembersih udara tidak meningkatkan kelembaban di dalam ruangan.',
    answer:
      'Untuk model yang memiliki fitur Humidifying (pelembab), pastikan tangki air telah terisi air bersih dan roda filter humidi terpasang dengan benar serta bebas dari kerak kapur.'
  },
  {
    id: 'purifier-9',
    question: 'Tangki air mengandung air, tetapi produk tidak melembabkan.',
    answer:
      'Periksa apakah katup penutup tangki air terpasang rapat dan nampan air (humidifying tray) terpasang sempurna pada posisinya sehingga air dapat mengalir turun ke elemen pelembab.'
  },
  {
    id: 'purifier-10',
    question: 'Pembersih udara menghasilkan suara atau getaran yang tidak normal.',
    answer:
      'Pastikan unit diletakkan di atas permukaan lantai yang datar dan kokoh. Periksa apakah ada benda asing yang terselip masuk ke dalam kisi-kisi kipas.'
  },
  {
    id: 'purifier-11',
    question: 'Suara pengoperasian keras.',
    answer:
      'Jika unit diatur pada mode Turbo atau Kipas Maksimal (High Speed), suara angin akan lebih kencang. Ubah kecepatan kipas ke mode Auto, Quiet, atau Low untuk pengoperasian yang senyap.'
  },
  {
    id: 'purifier-12',
    question: 'Suara mendesis dihasilkan selama operasi.',
    answer:
      'Suara mendesis halus adalah suara normal dari pelepasan plasma fitur Streamer Daikin saat menguraikan zat berbahaya dan virus di udara.'
  },
  {
    id: 'purifier-13',
    question: 'Suara berderak atau berdengung dihasilkan selama operasi.',
    answer:
      'Suara ini dihasilkan oleh sistem pembawa muatan listrik ionizer plasma aktif atau getaran halus dari dudukan filter saat beroperasi. Ini merupakan hal yang normal.'
  },
  {
    id: 'purifier-14',
    question: 'Suara percikan dihasilkan selama operasi pelembab.',
    answer:
      'Suara percikan air halus adalah suara normal sirkulasi air saat nampan dan roda elemen pelembab (humidifying filter) berputar mengambil air dari tangki.'
  },
  {
    id: 'purifier-15',
    question: 'Suara geraman atau gemuruh yang lembut dihasilkan selama operasi pelembab.',
    answer:
      'Suara ini berasal dari pompa pemutar air atau motor penggerak roda elemen humidi saat menyalurkan kelembaban ke aliran udara.'
  },
  {
    id: 'purifier-16',
    question: 'Suara menggelegak dihasilkan selama operasi pelembab.',
    answer:
      'Suara gelembung udara menggelegak terjadi saat gelembung udara masuk ke dalam tangki air sewaktu air mengalir turun ke nampan pelembab. Ini adalah hal yang normal.'
  },
  {
    id: 'purifier-17',
    question: 'Suara klik dihasilkan selama operasi pelembab.',
    answer:
      'Suara klik berasal dari saklar penunjuk level air (float switch) atau pengatur arah katup pasokan air saat mengontrol tinggi air nampan.'
  },
  {
    id: 'purifier-18',
    question: 'Ada bau di saluran keluar udara.',
    answer:
      'Jika filter penyerap bau (Deodorizing Filter) telah menyerap bau tajam dalam waktu lama (seperti rokok atau makanan), lepas filter dan angin-anginkan di tempat teduh. Jika bau bertahan, ganti filter baru.'
  },
  {
    id: 'purifier-19',
    question: 'Unit ini mengeluarkan air dari lubang udara.',
    answer:
      'Hal ini terjadi jika unit dimiringkan saat tangki air berisi penuh, atau pasokan air ke dalam nampan meluap. Segera matikan unit, cabut steker, dan miringkan untuk mengeringkan.'
  },
  {
    id: 'purifier-20',
    question: 'Ada air yang tumpah di lantai.',
    answer:
      'Periksa apakah tangki air bocor, tutup tangki tidak rapat, atau nampan pelembab terpasang miring. Pastikan unit berada di atas permukaan lantai yang benar-benar rata.'
  },
  {
    id: 'purifier-21',
    question: 'Lampu indikator panel depan tidak menyala.',
    answer:
      'Periksa apakah mode Malam (Dimmer/Night Mode) aktif yang meredupkan atau mematikan seluruh lampu indikator panel agar tidak mengganggu kualitas tidur.'
  },
  {
    id: 'purifier-22',
    question: 'Lampu pasokan air menyala.',
    answer:
      'Indikator ini menandakan air di dalam tangki pelembab telah habis. Isi kembali tangki air dengan air bersih (air minum/isi ulang).'
  },
  {
    id: 'purifier-23',
    question: 'Lampu pasokan air menyala bahkan setelah memasok air.',
    answer:
      'Periksa pelampung pendeteksi air (float switch) pada nampan pelembab. Bersihkan dari endapan kerak kapur jika pelampung tersangkut di posisi bawah.'
  },
  {
    id: 'purifier-24',
    question: 'Ada bau di ruangan, tetapi lampu sensor debu menyala (hijau).',
    answer:
      'Sensor debu dan sensor bau bekerja secara terpisah. Sensor debu mendeteksi partikel fisik (seperti debu/serbuk), sedangkan bau dideteksi oleh sensor bau terpisah (Odor sensor).'
  },
  {
    id: 'purifier-25',
    question: 'Bagaimana cara saya membersihkan unit Streamer?',
    answer:
      'Matikan daya dan cabut kabel. Lepaskan unit Streamer, rendam dalam air hangat suam kuku dengan deterjen netral selama 1 jam, sikat lembut dengan sikat gigi halus, bilas air bersih, dan keringkan total selama 24 jam sebelum dipasang.'
  },
  {
    id: 'purifier-26',
    question: 'Bagaimana cara membersihkan ionizer plasma aktif?',
    answer:
      'Lap bagian luar elemen ionizer dengan kain lembut dan kering. Jangan menyentuh jarum pemancar ion dengan tangan terbuka atau benda keras agar tidak membengkokkannya.'
  },
  {
    id: 'purifier-27',
    question: 'Bagaimana cara membersihkan saringan pengumpul debu?',
    answer:
      'Untuk saringan awal (Pre-filter), bersihkan debu dengan penyedot debu (vacuum cleaner) atau cuci dengan air mengalir lalu keringkan. Untuk filter HEPA elektrostatis, bersihkan permukaan depan dengan penyedot debu perlahan (jangan dicuci dengan air).'
  }
]

// ── Tab 3: LAINNYA (General / Installation / Warranty / Smart Controller FAQs) ──
const otherFaqs: FAQItem[] = [
  {
    id: 'other-1',
    question: 'Berapa lama masa garansi resmi produk Daikin?',
    answer:
      'Daikin memberikan garansi kompresor hingga 5 tahun dan garansi suku cadang/sparepart resmi selama 1 tahun sejak tanggal pembelian resmi di Indonesia.'
  },
  {
    id: 'other-2',
    question: 'Bagaimana cara menghubungkan AC Daikin ke aplikasi Daikin Mobile Controller (Wi-Fi)?',
    answer:
      'Pastikan modul adaptor Wi-Fi Daikin terpasang pada unit indoor. Unduh aplikasi Daikin Mobile Controller di Google Play / App Store, pastikan smartphone terhubung ke jaringan Wi-Fi 2.4GHz, dan ikuti langkah pairing pada manual aplikasi.'
  },
  {
    id: 'other-3',
    question: 'Berapa kali sebaiknya AC Daikin dicuci / dirawat secara berkala?',
    answer:
      'Untuk penggunaan harian rumah tangga, disarankan melakukan pencucian dan perawatan berkala setiap 3-4 bulan sekali oleh teknisi bersertifikat resmi Daikin.'
  },
  {
    id: 'other-4',
    question: 'Dimana saya bisa menemukan daftar spesifikasi teknis dan manual produk Daikin?',
    answer:
      'Anda dapat mengunduh manual produk dan spesifikasi teknis lengkap di halaman Spesifikasi & Data Teknis (/services/technical-data).'
  },
  {
    id: 'other-5',
    question: 'Bagaimana cara menemukan dealer atau service center resmi Daikin terdekat?',
    answer:
      'Gunakan fitur Cari Service Center (/services/service-center) atau hubungi Call Center bebas pulsa 0800 1 081 081 untuk petunjuk lokasi terdekat di kota Anda.'
  }
]

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<'split' | 'purifier' | 'other'>('split')
  const [openId, setOpenId] = useState<string | null>('split-1')
  const [searchQuery, setSearchQuery] = useState('')

  // Determine current active FAQ list
  const currentFaqs =
    activeTab === 'split' ? splitFaqs :
      activeTab === 'purifier' ? purifierFaqs : otherFaqs

  // Filter based on search query
  const filteredFaqs = currentFaqs.filter(
    item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <PageTransition>
      <PageMeta
        title="FAQ (Pertanyaan Sering Diajukan) | Daikin Indonesia"
        description="Pusat informasi dan jawaban lengkap pertanyaan umum pengguna AC Daikin, Air Purifier, penanganan kendala teknis, serta panduan operasional produk."
        canonical="/insights/faq"
      />

      {/* ── 1. MODERN PAGE BANNER MODEL ────────────────────────────────────────── */}
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
              { label: 'Wawasan', path: '/insights' },
              { label: 'Berita & Informasi', path: '/insights/news' },
              { label: 'FAQ' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="max-w-3xl">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                Pusat Informasi & Solusi Mandiri
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                <span className="text-daikin-blue-light font-light">Frequently Asked Questions</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                Informasi yang ada disini berkaitan dengan cara mengatasi masalah dalam penggunaan AC, pertanyaan berikut merupakan jawaban dari pertanyaan yang sering muncul.
              </p>
            </FadeInUp>
          </div>

        </div>
      </div>

      {/* ── 2. CATEGORY TABS & SEARCH BAR ────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-8">

          {/* 3 Icon Tabs (Matching Image Categories) */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">

            {/* Tab 1: SPLIT / MULTI-SPLIT */}
            <button
              onClick={() => {
                setActiveTab('split')
                setOpenId('split-1')
              }}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-3 group ${activeTab === 'split'
                  ? 'bg-sky-50/80 border-daikin-blue shadow-md text-daikin-blue'
                  : 'bg-slate-50/70 border-slate-200 text-slate-500 hover:border-sky-300 hover:bg-white'
                }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${activeTab === 'split' ? 'bg-daikin-blue text-white shadow-sm' : 'bg-white text-daikin-blue border border-slate-200'
                }`}>
                <Wind className="w-7 h-7" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase font-display">
                SPLIT / MULTI-SPLIT
              </span>
            </button>

            {/* Tab 2: AIR PURIFIERS */}
            <button
              onClick={() => {
                setActiveTab('purifier')
                setOpenId('purifier-1')
              }}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-3 group ${activeTab === 'purifier'
                  ? 'bg-sky-50/80 border-daikin-blue shadow-md text-daikin-blue'
                  : 'bg-slate-50/70 border-slate-200 text-slate-500 hover:border-sky-300 hover:bg-white'
                }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${activeTab === 'purifier' ? 'bg-daikin-blue text-white shadow-sm' : 'bg-white text-daikin-blue border border-slate-200'
                }`}>
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase font-display">
                AIR PURIFIERS
              </span>
            </button>

            {/* Tab 3: LAINNYA */}
            <button
              onClick={() => {
                setActiveTab('other')
                setOpenId('other-1')
              }}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-3 group ${activeTab === 'other'
                  ? 'bg-sky-50/80 border-daikin-blue shadow-md text-daikin-blue'
                  : 'bg-slate-50/70 border-slate-200 text-slate-500 hover:border-sky-300 hover:bg-white'
                }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${activeTab === 'other' ? 'bg-daikin-blue text-white shadow-sm' : 'bg-white text-daikin-blue border border-slate-200'
                }`}>
                <MoreHorizontal className="w-7 h-7" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase font-display">
                LAINNYA
              </span>
            </button>

          </div>

          {/* Search Bar Input */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari pertanyaan atau kata kunci (contoh: tidak dingin, indikator berkedip, remote...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue focus:bg-white transition-all shadow-xs"
            />
          </div>

        </div>
      </section>

      {/* ── 3. ACCORDION FAQ LIST ────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-4">

          <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs text-slate-500 font-sans">
            <span>
              Menampilkan <strong>{filteredFaqs.length}</strong> pertanyaan dalam kategori{' '}
              <strong className="text-daikin-blue uppercase">
                {activeTab === 'split' ? 'Split / Multi-Split' : activeTab === 'purifier' ? 'Air Purifiers' : 'Lainnya'}
              </strong>
            </span>
          </div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openId === faq.id
                return (
                  <FadeInUp key={faq.id} delay={idx * 0.02}>
                    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200 hover:border-sky-300">

                      {/* Accordion Question Bar */}
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 group cursor-pointer focus:outline-none"
                      >
                        <span className={`text-xs sm:text-sm font-bold font-sans leading-relaxed transition-colors ${isOpen ? 'text-daikin-blue' : 'text-slate-800 group-hover:text-daikin-blue'
                          }`}>
                          {faq.question}
                        </span>

                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-daikin-blue text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-daikin-blue'
                          }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Accordion Answer Content */}
                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm font-sans text-slate-600 leading-relaxed border-t border-slate-100 bg-sky-50/30">
                          <div className="pt-2 flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                            <div className="space-y-2">
                              <p>{faq.answer}</p>
                              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-daikin-blue">
                                <a href="tel:08001081081" className="hover:underline flex items-center gap-1">
                                  <PhoneCall className="w-3.5 h-3.5" />
                                  <span>Bantuan Call Center</span>
                                </a>
                                <span>•</span>
                                <Link to="/services/technical-data" className="hover:underline flex items-center gap-1">
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>Lihat Data Teknis</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </FadeInUp>
                )
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 border border-slate-200 text-center space-y-3">
              <Info className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-700">Pertanyaan Tidak Ditemukan</h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}". Coba gunakan kata kunci lain atau hubungi layanan bantuan Daikin.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ── 4. TERPUSAT CONTACT STRIP AT BOTTOM ───────────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          <div className="bg-gradient-to-br from-[#061730] via-daikin-blue-dark to-[#005580] rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                Butuh Bantuan Lebih Lanjut?
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Tim Ahli Teknisi Daikin Siap Membantu
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 font-sans max-w-xl font-light">
                Jika kendala Anda belum terselesaikan melalui FAQ, silakan hubungi Call Center bebas pulsa kami atau kirimkan pesan resmi.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <a
                href="tel:08001081081"
                className="px-6 py-3.5 rounded-xl bg-white text-daikin-blue font-bold text-xs sm:text-sm shadow-md hover:bg-sky-50 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-daikin-blue" />
                <span>0800 1 081 081 (Bebas Pulsa)</span>
              </a>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-daikin-blue text-white font-bold text-xs sm:text-sm shadow-md hover:bg-daikin-blue-dark border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Halaman Kontak</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Floating PichonKun Assistant Helper */}
      <PichonKunHelper />
    </PageTransition>
  )
}
