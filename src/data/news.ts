import type { NewsArticle, Promotion, Event } from '@/types/news'

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-001',
    slug: 'daikin-raih-penghargaan-energy-efficiency-2026',
    category: 'news',
    title: {
      id: 'Daikin Raih Penghargaan Energy Efficiency Award 2026',
      en: 'Daikin Receives Energy Efficiency Award 2026',
    },
    excerpt: {
      id: 'Daikin Indonesia berhasil meraih penghargaan bergengsi Energy Efficiency Award untuk kategori produk AC inverter terbaik.',
      en: 'Daikin Indonesia successfully receives the prestigious Energy Efficiency Award in the best inverter AC product category.',
    },
    content: {
      id: '# Daikin Raih Penghargaan Energy Efficiency Award 2026\n\nDaikin Indonesia dengan bangga mengumumkan keberhasilan meraih penghargaan Energy Efficiency Award 2026 yang diselenggarakan oleh Kementerian Energi dan Sumber Daya Mineral (ESDM).\n\nPenghargaan ini diberikan atas komitmen Daikin dalam menghadirkan produk AC dengan efisiensi energi tertinggi di kelasnya...',
      en: '# Daikin Receives Energy Efficiency Award 2026\n\nDaikin Indonesia proudly announces receiving the Energy Efficiency Award 2026 organized by the Ministry of Energy and Mineral Resources...',
    },
    coverImage: '/images/news/awards.webp',
    publishedAt: '2026-04-15',
    author: 'Tim Marketing Daikin',
    tags: ['award', 'energy-efficiency', 'inverter'],
  },
  {
    id: 'news-002',
    slug: 'peluncuran-emura-series-terbaru',
    category: 'news',
    title: {
      id: 'Peluncuran Resmi Emura Series Generasi Terbaru',
      en: 'Official Launch of the Latest Emura Series Generation',
    },
    excerpt: {
      id: 'Daikin memperkenalkan Emura Series generasi terbaru dengan desain Italia yang memukau dan teknologi streamer yang semakin canggih.',
      en: 'Daikin introduces the latest Emura Series generation with stunning Italian design and more advanced streamer technology.',
    },
    content: {
      id: '# Peluncuran Resmi Emura Series\n\nJakarta, Mei 2026 — Daikin Indonesia resmi meluncurkan Emura Series generasi terbaru...',
      en: '# Official Launch of Emura Series\n\nJakarta, May 2026 — Daikin Indonesia officially launches the latest Emura Series generation...',
    },
    coverImage: '/images/news/emura.jpg',
    publishedAt: '2026-05-01',
    author: 'Tim Produk Daikin',
    tags: ['product-launch', 'emura', 'design'],
  },
  {
    id: 'news-003',
    slug: 'daikin-impact-csr-mangrove-2026',
    category: 'csr',
    title: {
      id: 'Daikin Impact: Penanaman 10.000 Mangrove di Pesisir Jakarta',
      en: 'Daikin Impact: Planting 10,000 Mangroves on Jakarta Coast',
    },
    excerpt: {
      id: 'Dalam rangka memperingati Hari Lingkungan Hidup Sedunia, Daikin Indonesia menanam 10.000 bibit mangrove bersama komunitas lokal.',
      en: 'In commemoration of World Environment Day, Daikin Indonesia plants 10,000 mangrove seedlings with local communities.',
    },
    content: {
      id: '# Daikin Impact: 10.000 Mangrove\n\nProgram CSR tahunan Daikin Indonesia kembali hadir dengan skala yang lebih besar...',
      en: '# Daikin Impact: 10,000 Mangroves\n\nDaikin Indonesia\'s annual CSR program returns with a larger scale...',
    },
    coverImage: '/images/news/mangrove.jpg',
    publishedAt: '2026-06-05',
    author: 'Tim CSR Daikin',
    tags: ['csr', 'environment', 'sustainability'],
  },
  {
    id: 'news-004',
    slug: 'training-teknisi-bersertifikat-2026',
    category: 'training',
    title: {
      id: 'Program Sertifikasi Teknisi AC Daikin Batch 3 — 2026',
      en: 'Daikin AC Technician Certification Program Batch 3 — 2026',
    },
    excerpt: {
      id: 'Daikin membuka pendaftaran program sertifikasi teknisi AC untuk meningkatkan kompetensi tenaga servis di seluruh Indonesia.',
      en: 'Daikin opens registration for AC technician certification program to improve service technician competency across Indonesia.',
    },
    content: {
      id: '# Program Sertifikasi Teknisi Batch 3\n\nDaikin Indonesia kembali membuka program pelatihan dan sertifikasi untuk teknisi AC...',
      en: '# Technician Certification Program Batch 3\n\nDaikin Indonesia opens technician training and certification program again...',
    },
    coverImage: '/images/news/training.svg',
    publishedAt: '2026-03-10',
    author: 'Tim Training Daikin',
    tags: ['training', 'certification', 'technician'],
  },
]

export const promotions: Promotion[] = [
  {
    id: 'promo-001',
    slug: 'mid-year-sale-2026',
    title: { id: 'Mid-Year Sale — Hemat Hingga 30%', en: 'Mid-Year Sale — Save Up to 30%' },
    description: {
      id: 'Dapatkan diskon spesial hingga 30% untuk seluruh produk AC Daikin Smile dan Aurora Series selama periode Juni 2026.',
      en: 'Get special discounts up to 30% for all Daikin Smile and Aurora Series AC products during June 2026.',
    },
    imageUrl: '/images/promotions/mid-year-sale.svg',
    validUntil: '2026-06-30',
    discount: '30%',
    badge: 'Hot Deal',
  },
  {
    id: 'promo-002',
    slug: 'cashback-instalasi-gratis',
    title: { id: 'Cashback + Instalasi Gratis', en: 'Cashback + Free Installation' },
    description: {
      id: 'Beli AC Daikin apapun, dapatkan cashback Rp 500.000 dan biaya instalasi gratis melalui dealer resmi iShop.',
      en: 'Buy any Daikin AC, get Rp 500,000 cashback and free installation through official iShop dealers.',
    },
    imageUrl: '/images/promotions/cashback.svg',
    validUntil: '2026-07-31',
    discount: 'Rp 500K',
    badge: 'Cashback',
  },
  {
    id: 'promo-003',
    slug: 'trade-in-upgrade',
    title: { id: 'Program Trade-In: Tukar Tambah AC Lama', en: 'Trade-In Program: Exchange Old AC' },
    description: {
      id: 'Tukarkan AC lama Anda (merek apapun) dengan AC Daikin inverter terbaru dan dapatkan potongan harga eksklusif.',
      en: 'Exchange your old AC (any brand) with the latest Daikin inverter AC and get exclusive price reductions.',
    },
    imageUrl: '/images/promotions/trade-in.svg',
    validUntil: '2026-08-31',
    badge: 'Trade-In',
  },
]

export const events: Event[] = [
  {
    id: 'event-001',
    slug: 'daikin-expo-jakarta-2026',
    title: { id: 'Daikin Expo Jakarta 2026', en: 'Daikin Expo Jakarta 2026' },
    description: {
      id: 'Pameran produk dan teknologi Daikin terbesar di Indonesia. Temui pakar kami dan coba produk langsung.',
      en: 'The largest Daikin product and technology exhibition in Indonesia. Meet our experts and try products directly.',
    },
    imageUrl: '/images/events/expo-2026.svg',
    date: '2026-07-15',
    location: 'Jakarta Convention Center',
    isUpcoming: true,
  },
  {
    id: 'event-002',
    slug: 'webinar-udara-sehat-2026',
    title: { id: 'Webinar: Udara Sehat di Era Modern', en: 'Webinar: Healthy Air in the Modern Era' },
    description: {
      id: 'Webinar gratis membahas pentingnya kualitas udara dalam ruangan dan solusi teknologi Daikin.',
      en: 'Free webinar discussing the importance of indoor air quality and Daikin technology solutions.',
    },
    imageUrl: '/images/events/webinar.svg',
    date: '2026-06-20',
    location: 'Online — Zoom',
    isUpcoming: true,
  },
]

export function getLatestNews(count: number = 3) {
  return newsArticles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count)
}

export function getNewsByCategory(category: string) {
  return newsArticles.filter((n) => n.category === category)
}

export function getNewsBySlug(slug: string) {
  return newsArticles.find((n) => n.slug === slug)
}
