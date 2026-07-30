import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Calendar } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

import { MilestoneTimeline } from '@/components/ui/MilestoneTimeline'

const historyMilestones = [
  { year: 1970, events: [{ title: "Daikin memasuki pasar Indonesia", images: ["/images/daikin-group.jpg", "/images/daikin-group.jpg"] }] },
  { year: 1985, events: [{ title: "Pengaplikasian VRV perdana di Indonesia" }] },
  { year: 2012, events: [{ date: "Jun 2012", title: "PT. Daikin Airconditioning Indonesia berdiri", images: ["/images/daikin-group.jpg", "/images/daikin-group.jpg"] }] },
  { 
    year: 2013, 
    events: [
      { date: "Mar 2013", title: "Jaringan dealer nasional mencapai 500 titik" },
      { date: "Jun 2013", title: "Daikin cabang Bandung didirikan" },
      { date: "Oct 2013", title: "Peluncuran produk VRV IV", images: ["/images/daikin-group.jpg", "/images/daikin-group.jpg"] },
      { date: "Dec 2013", title: "Penjualan VRV mencapai 10.000 unit" },
    ]
  },
  {
    year: 2014,
    events: [
      { date: "Jan 2014", title: "Daikin cabang Makassar didirikan" },
      { date: "Apr 2014", title: "Peluncuran Single Split R32 pertama kali di Indonesia", images: ["/images/daikin-group.jpg", "/images/daikin-group.jpg"] },
      { date: "Jun 2014", title: "Daikin Contact Center didirikan" },
      { date: "Jul 2014", title: "Rempoa Service & Training center fully operated, Daikin Head Office move to Wisma Keiai 18th Fl." },
      { date: "Aug 2014", title: "Daikin cabang Surabaya menempati lokasi kantor baru" },
      { date: "Nov 2014", title: "Peluncuran produk Urusara 7 dan European Design" },
      { date: "Dec 2014", title: "Daikin cabang Palembang didirikan" }
    ]
  },
  {
    year: 2015,
    events: [
      { date: "Mar 2015", title: "Daikin menjadi peringkat no. 2 untuk penjualan di Indonesia" },
      { date: "Apr 2015", title: "Daikin Yogyakarta didirikan" }
    ]
  },
  {
    year: 2016,
    events: [
      { date: "Feb 2016", title: "Daikin Tangerang didirikan" },
      { date: "Sep 2016", title: "Peluncuran produk Multi-S" }
    ]
  },
  {
    year: 2017,
    events: [
      { date: "Feb 2017", title: "Pembukaan Daikin Xperience Zone Pekanbaru" },
      { date: "Mar 2017", title: "Mendapatkan penghargaan dari Makassar Master Brand Award 2017" },
      { date: "May 2017", title: "Daikin cabang Bekasi didirikan" },
      { date: "Oct 2017", title: "Daikin Service Center Samarinda didirikan" },
      { date: "Nov 2017", title: "Peluncuran produk Hi-Inverter, Flash, Lite, Multi-S 3 Connection, Air purifier, Sky Air Super Inverter, VRV X Series and VRV A Series" },
      { date: "Dec 2017", title: "Pembukaan Daikin cabang dan Xperience Zone Palembang" }
    ]
  },
  {
    year: 2018,
    events: [
      { date: "May 2018", title: "Daikin cabang Medan didirikan" },
      { date: "Jul 2018", title: "Daikin National Training Center didirikan" },
      { date: "Oct 2018", title: "Pembukaan Daikin Pro-Shop CV. Davindo Anugerah Unggul & Multi Makmur Solusi" }
    ]
  },
  {
    year: 2019,
    events: [
      { date: "Mar 2019", title: "Daikin Xperience Zone Makassar didirikan" },
      { date: "Sep 2019", title: "Daikin Xperience Zone Semarang didirikan" },
      { date: "Dec 2019", title: "Daikin cabang Manado didirikan" }
    ]
  },
  {
    year: 2020,
    events: [
      { date: "Nov 2020", title: "Daikin 50th Anniversary" }
    ]
  }
]


export default function OurHistory() {
  return (
    <PageTransition>
      <PageMeta title="Sejarah Inovasi Daikin" canonical="/profile/history" />

      {/* Modern Premium Hero Banner */}
      <div className="relative h-[450px] flex items-center justify-start overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue">
        <Suspense fallback={null}><AirParticles /></Suspense>
        
        {/* Subtle grid pattern for depth */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mt-16 text-left">
          
          {/* Active Clickable Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-white/70 mb-6 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/profile/about" className="hover:text-white transition-colors">Tentang Kami</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white drop-shadow-md">Sejarah Inovasi</span>
          </nav>

          <FadeInUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Sejarah Inovasi <br/><span className="text-daikin-blue-light font-light">Daikin</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed drop-shadow">
              90 tahun sejarah Daikin, industri produsen AC sesungguhnya dengan begitu banyak episode titik balik yang menginspirasi.
            </p>
          </FadeInUp>
        </div>
      </div>

      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <FadeInUp>
            <div className="w-10 h-1 bg-daikin-blue rounded-full mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
              90 Tahun Sejarah<br/>
              <span className="text-daikin-blue font-light">Industri Daikin</span>
            </h2>
            <div className="text-gray-600 leading-relaxed text-lg space-y-6">
              <p>
                Memperingati ulang tahun Daikin ke 90, kami menerbitkan <strong className="text-charcoal font-semibold">"The 90 Year History of Daikin Industries."</strong> Buku ini berisi catatan dari bisnis kami dan perubahan yang kami lakukan untuk menjadi selangkah lebih maju dalam memberikan kualitas udara terbaik.
              </p>
              <p>
                Sejak tahun 2012 PT. Daikin Airconditioning Indonesia terus berkembang dengan tujuan untuk menjadi pioner dalam bidang industri AC, dan secara resmi menjadi bagian dari Grup Daikin. PT Daikin Airconditioning Indonesia kini diakui sebagai salah satu perusahaan terkemuka dalam bidang industri AC di Tanah Air.
              </p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.2} className="flex justify-center lg:justify-end relative">
            {/* Decorative background behind the image */}
            <div className="absolute inset-0 bg-daikin-blue-50/50 transform rotate-3 rounded-2xl scale-105" />
            <div className="relative w-full max-w-md aspect-[3/4] bg-white border border-gray-100 shadow-card flex flex-col items-center justify-center rounded-2xl p-8 z-10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-card-hover">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm text-center">Book Image<br/>Placeholder</span>
            </div>
          </FadeInUp>
        </div>

        {/* Milestone Timeline Component */}
        <div className="relative w-full">
          <MilestoneTimeline items={historyMilestones} />
        </div>
      </section>

    </PageTransition>
  )
}
