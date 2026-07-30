export interface PromotionArticle {
  id: string
  slug: string
  title: { id: string; en: string }
  excerpt: { id: string; en: string }
  content: { id: string; en: string }
  coverImage: string
  publishedAt: string
  validUntil: string
  badge: string
  discount?: string
  category: 'inverter' | 'cashback' | 'tradein' | 'bundle'
  code?: string
  terms: string[]
}

export const promotionArticles: PromotionArticle[] = [
  {
    id: 'promo-001',
    slug: 'mid-year-sale-daikin-inverter-2026',
    category: 'inverter',
    title: {
      id: 'Promo Mid-Year Sale Daikin Inverter 2026',
      en: 'Mid-Year Sale Promo Daikin Inverter 2026',
    },
    excerpt: {
      id: 'Nikmati potongan harga hingga 30% dan garansi ekstra untuk jajaran AC Inverter Daikin Smile & Aurora Series di seluruh dealer iShop resmi.',
      en: 'Enjoy up to 30% discount and extra warranty for Daikin Smile & Aurora Series Inverter AC line at official iShop dealers.',
    },
    content: {
      id: `# Promo Mid-Year Sale Daikin Inverter 2026

Daikin Indonesia dengan bangga menghadirkan **Mid-Year Sale 2026** khusus untuk produk AC hunian hemat listrik berteknologi Inverter. Program ini dirancang untuk memberikan kenyamanan maksimal bagi keluarga Indonesia dengan harga terjangkau.

## Keuntungan Promo Mid-Year Sale

1. **Diskon Spesial Hingga 30%**: Berlaku untuk pembelian unit Daikin Smile Series (FTKC) dan Aurora Series (FTKM).
2. **Garansi Ekstra 3 Tahun**: Dapatkan total garansi kompresor 3+2 tahun khusus pembelian selama periode promo.
3. **Gratis Jasa Pembersihan AC Pertama**: Layanan pembersihan berkala gratis dalam 6 bulan pertama.

> "Teknologi Inverter Daikin terbukti menghemat listrik hingga 60% dibandingkan AC konvensional. Melalui promo Mid-Year ini, kami ingin mempermudah keluarga Indonesia menikmati udara sehat." - Product Director Daikin Indonesia

## Syarat dan Ketentuan Pembelian

- Promo berlaku mulai 1 Juni hingga 31 Agustus 2026.
- Pembelian harus dilakukan melalui dealer resmi Daikin iShop terdaftar.
- Wajib melakukan registrasi unit pada aplikasi Daikin Smart Cloud untuk pengaktifan garansi ekstra.`,
      en: `# Mid-Year Sale Promo Daikin Inverter 2026

Daikin Indonesia proudly presents **Mid-Year Sale 2026** specifically for energy-efficient residential Inverter AC products.

## Mid-Year Sale Benefits

1. **Special Discount Up to 30%**: Valid for Daikin Smile Series (FTKC) and Aurora Series (FTKM).
2. **3-Year Extra Warranty**: Get a total compressor warranty of 5 years during the promo period.
3. **Free First Maintenance Service**: Free cleaning service within the first 6 months.`,
    },
    coverImage: '/images/promotions/daikin-promo-banner.png',
    publishedAt: '2026-06-01',
    validUntil: '2026-08-31',
    badge: 'Hot Deal',
    discount: 'Diskon 30%',
    code: 'DAIKINMID30',
    terms: [
      'Berlaku untuk pembelian unit AC Daikin Smile & Aurora Series Inverter.',
      'Berlaku di seluruh dealer resmi Daikin iShop Indonesia.',
      'Wajib melakukan registrasi garansi di Daikin Smart Cloud.',
      'Persediaan unit promo terbatas.'
    ]
  },
  {
    id: 'promo-002',
    slug: 'cashback-instalasi-gratis-ishop',
    category: 'cashback',
    title: {
      id: 'Cashback Rp 500.000 + Biaya Pemasangan Gratis',
      en: 'Cashback Rp 500,000 + Free Installation Fee',
    },
    excerpt: {
      id: 'Dapatkan cashback langsung senilai Rp 500.000 dan bebas biaya pemasangan standar dari tim teknisi resmi Daikin tersertifikasi.',
      en: 'Get an instant Rp 500,000 cashback and free standard installation fee from certified official Daikin technicians.',
    },
    content: {
      id: `# Cashback Rp 500.000 + Biaya Pemasangan Gratis

Solusi praktis untuk kebutuhan instalasi AC di rumah atau apartemen Anda. Setiap pembelian unit AC Daikin tipe apa saja di dealer iShop resmi, Anda berhak menerima cashback senilai Rp 500.000 beserta instalasi gratis.

## Paket Pemasangan Gratis Termasuk:
- Pipa pendingin (refrigerant pipe) standar hingga 3 meter.
- Kabel listrik terintegrasi dan braket outdoor original Daikin.
- Uji vakum pipa dan pengujian aliran udara komprehensif.

## Cara Mengklaim Cashback:
1. Beli AC Daikin di dealer resmi Daikin iShop terdekat.
2. Upload kuitansi dan foto nomor seri unit di aplikasi Daikin.
3. Cashback Rp 500.000 akan ditransfer langsung ke rekening/e-wallet Anda dalam 3x24 jam.`,
      en: `# Cashback Rp 500,000 + Free Installation Fee

Get an instant Rp 500,000 cashback and free standard installation fee from certified official Daikin technicians.`,
    },
    coverImage: '/images/hero/slider-streamer.jpg',
    publishedAt: '2026-06-15',
    validUntil: '2026-09-15',
    badge: 'Cashback',
    discount: 'Cashback 500K',
    code: 'FREEINSTALL500',
    terms: [
      'Wajib melakukan transaksi melalui dealer iShop resmi Daikin.',
      'Gratis instalasi mencakup pipa bawaan standar hingga 3 meter.',
      'Klaim cashback dilakukan melalui aplikasi Daikin Smart Cloud.',
      'Berlaku hingga 15 September 2026.'
    ]
  },
  {
    id: 'promo-003',
    slug: 'program-trade-in-tukar-tambah-ac-lama',
    category: 'tradein',
    title: {
      id: 'Program Trade-In: Tukar Tambah AC Lama Anda',
      en: 'Trade-In Program: Exchange Your Old AC',
    },
    excerpt: {
      id: 'Tukarkan AC lama Anda (kondisi & merek apapun) dengan unit AC Daikin Inverter terbaru. Kami hargai AC lama Anda hingga Rp 1.200.000.',
      en: 'Exchange your old AC (any condition & brand) with the latest Daikin Inverter unit. We value your old AC up to Rp 1,200,000.',
    },
    content: {
      id: `# Program Trade-In: Tukar Tambah AC Lama Anda

Saatnya memperbarui AC lama Anda yang boros listrik dengan teknologi AC Daikin Inverter generasi terbaru. Melalui **Program Trade-In Daikin 2026**, AC lama Anda kami hargai hingga Rp 1.200.000!

## Mengapa Harus Tukar Tambah?
- **Hemat Energi**: AC lama non-inverter mengonsumsi daya jauh lebih tinggi.
- **Layanan Jemput Gratis**: Tim teknisi Daikin akan menjemput dan mencopot AC lama tanpa biaya bongkar.
- **Ramah Lingkungan**: AC lama akan didaur ulang sesuai standar pengelolaan limbah B3 lingkungan Daikin Impact.`,
      en: `# Trade-In Program: Exchange Your Old AC

Exchange your old AC for a new energy-efficient Daikin Inverter unit with trade-in value up to Rp 1,200,000.`,
    },
    coverImage: '/images/hero/slider-emura.jpeg',
    publishedAt: '2026-07-01',
    validUntil: '2026-10-30',
    badge: 'Trade-In',
    discount: 'Subsidi 1.2Jt',
    code: 'TRADEIN2026',
    terms: [
      'AC lama akan dijemput oleh teknisi resmi Daikin tanpa biaya bongkar.',
      'Kondisi AC lama (hidup/mati) tetap diterima.',
      'Berlaku di kota-kota besar: Jabodetabek, Surabaya, Medan, Bandung, Makassar.'
    ]
  },
  {
    id: 'promo-004',
    slug: 'paket-bundle-ac-streamer-air-purifier',
    category: 'bundle',
    title: {
      id: 'Paket Bundling Sehat: AC Inverter + Streamer Air Purifier',
      en: 'Healthy Bundle Deal: Inverter AC + Streamer Air Purifier',
    },
    excerpt: {
      id: 'Dapatkan potongan langsung Rp 1.500.000 saat membeli 1 set AC Daikin Premium Inverter bersama Air Purifier Streamer MC55UVM6.',
      en: 'Get an instant Rp 1,500,000 discount when purchasing 1 set of Daikin Premium Inverter along with Streamer MC55UVM6 Air Purifier.',
    },
    content: {
      id: `# Paket Bundling Sehat: AC Inverter + Streamer Air Purifier

Kombinasi sempurna untuk perlindungan udara dalam ruangan secara menyeluruh. Gabungan pendinginan nyaman dari AC Inverter Daikin dan pemurnian udara dari Streamer Air Purifier.

## Keunggulan Paket Bundling
- Eliminasi 99.9% virus, bakteri, dan partikel PM2.5.
- Potongan paket langsung Rp 1.500.000.
- Garansi tambahan 1 tahun untuk Air Purifier Streamer.`,
      en: `# Healthy Bundle Deal: Inverter AC + Streamer Air Purifier

Perfect combination for complete indoor air protection with Rp 1,500,000 instant discount.`,
    },
    coverImage: '/images/news/emura.jpg',
    publishedAt: '2026-07-05',
    validUntil: '2026-09-30',
    badge: 'Bundle Deal',
    discount: 'Hemat 1.5Jt',
    code: 'BUNDLEPURE',
    terms: [
      'Berlaku untuk paket AC Inverter + Streamer Air Purifier.',
      'Bonus garansi tambahan 1 tahun.',
      'Persediaan paket bundel terbatas.'
    ]
  },
  {
    id: 'promo-005',
    slug: 'promo-vrv-home-residence-2026',
    category: 'inverter',
    title: {
      id: 'Penawaran Khusus Sistem VRV Home Untuk Hunian Mewah',
      en: 'Special Offer VRV Home System for Luxury Residences',
    },
    excerpt: {
      id: 'Gratis survey teknis, free piping layout design, serta diskon instalasi 20% khusus untuk pemilik rumah tinggal dan villa mewah.',
      en: 'Free technical survey, free piping layout design, and 20% installation discount specifically for luxury home and villa owners.',
    },
    content: {
      id: `# Penawaran Khusus Sistem VRV Home Untuk Hunian Mewah

Sistem pendingin terpusat Daikin VRV Home menawarkan estetika interior tanpa batas dengan 1 unit outdoor yang mampu terhubung hingga 8 unit indoor.

## Fasilitas Promo VRV Home:
- Free Technical Survey & Heat Load Calculation oleh Senior Engineer.
- Free 3D Piping Layout Design untuk Arsitek & Interior Designer.
- Diskon Biaya Instalasi Pipa Tembaga & Fitting hingga 20%.`,
      en: `# Special Offer VRV Home System for Luxury Residences

Centralized Daikin VRV Home cooling system offering limitless interior aesthetics.`,
    },
    coverImage: '/images/hero/commercial_building_hero.png',
    publishedAt: '2026-07-10',
    validUntil: '2026-11-15',
    badge: 'Promo VRV',
    discount: 'Diskon 20%',
    code: 'VRVHOME20',
    terms: [
      'Khusus proyek hunian tinggal / villa.',
      'Termasuk konsultasi gratis bersama insinyur Daikin.',
      'Berlaku s/d 15 November 2026.'
    ]
  },
  {
    id: 'promo-006',
    slug: 'promo-spesial-skyair-komersial-bisnis',
    category: 'cashback',
    title: {
      id: 'Promo SkyAir Komersial: Solusi Udara Toko & Kantor',
      en: 'Commercial SkyAir Promo: Air Solutions for Shops & Offices',
    },
    excerpt: {
      id: 'Solusi tata udara hemat listrik untuk toko, cafe, restoran, dan kantor dengan program cicilan 0% hingga 12 bulan dan bebas survey.',
      en: 'Energy efficient climate solutions for shops, cafes, restaurants, and offices with 0% installment up to 12 months.',
    },
    content: {
      id: `# Promo SkyAir Komersial: Solusi Udara Toko & Kantor

Tingkatkan kenyamanan pelanggan dan produktivitas karyawan bisnis Anda dengan AC Daikin SkyAir Cassette & Ceiling Duct Inverter.

## Keuntungan Promo Bisnis:
- Program Cicilan 0% hingga 12 Bulan via Kartu Kredit Bank Mitra.
- Bebas Biaya Survey Lokasi & Desain Saluran Udara (Ducting).
- Layanan Pemeliharaan Berkala Terjadwal (Maintenance Contract) Diskon 15%.`,
      en: `# Commercial SkyAir Promo: Air Solutions for Shops & Offices

Boost customer comfort and employee productivity with Daikin SkyAir Inverter.`,
    },
    coverImage: '/images/news/proshop-award-fy25.png',
    publishedAt: '2026-07-15',
    validUntil: '2026-12-31',
    badge: 'Komersial',
    discount: 'Cicilan 0%',
    code: 'SKYAIR0PCT',
    terms: [
      'Berlaku untuk unit AC SkyAir Cassette / Duct / Floor Standing.',
      'Cicilan 0% berlaku melalui bank mitra terdaftar.',
      'Free survey area kota besar Indonesia.'
    ]
  }
]

export function getPromotionBySlug(slug: string): PromotionArticle | undefined {
  return promotionArticles.find((p) => p.slug === slug)
}
