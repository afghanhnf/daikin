export interface TrainingArticle {
  id: string
  slug: string
  title: string
  category: 'technician' | 'dealer' | 'project'
  level: string
  duration: string
  excerpt: string
  content: string
  coverImage: string
  badge: 'Terbuka' | 'Sisa 5 Kuota' | 'Terbatas'
  location: string
  highlights: string[]
  prerequisite: string
}

export const trainingArticles: TrainingArticle[] = [
  {
    id: 'prog-001',
    slug: 'sertifikasi-teknisi-hvac-level-1',
    title: 'Sertifikasi Teknisi HVAC Level 1: Residential AC',
    category: 'technician',
    level: 'Dasar (Level 1)',
    duration: '3 Hari (24 Jam)',
    excerpt: 'Pelatihan dasar mencakup prinsip refrigerasi, instalasi standar presisi, penanganan freon R-32 aman, dan trouble-shooting AC Daikin Residential.',
    content: `# Sertifikasi Teknisi HVAC Level 1: Residential AC

Program sertifikasi resmi Daikin Indonesia bagi teknisi pemula dan praktisi tata udara hunian.

## Kurikulum & Modul Pelatihan:
- Dasar-dasar Termodinamika & Siklus Refrigerasi.
- Teknik Flaring & Brazing Pipa Tembaga Presisi.
- Safe Handling & Evakuasi Refrigerant R-32.
- Pengujian Kebocoran & Diagnostik Kode Error.`,
    coverImage: '/images/news/disnakertrans-jatim.png',
    badge: 'Terbuka',
    location: 'Daikin Training Center (Jakarta, Surabaya, Medan, Makassar)',
    highlights: [
      'Dasar-dasar Termodinamika & Refrigerasi',
      'Teknik Flaring & Brazing Pipa Tembaga Presisi',
      'Penanganan Safe Handling Refrigerant R-32',
      'Diagnostik Kode Error & Perawatan Berkala'
    ],
    prerequisite: 'Terbuka untuk umum / teknisi pemula'
  },
  {
    id: 'prog-002',
    slug: 'sertifikasi-teknisi-hvac-level-2-vrv',
    title: 'Sertifikasi Teknisi HVAC Level 2: VRV & Commercial System',
    category: 'technician',
    level: 'Lanjutan (Level 2)',
    duration: '5 Hari (40 Jam)',
    excerpt: 'Pelatihan tingkat lanjut untuk teknisi berpengalaman - perancangan pipa VRV, komisioning sistem terpusat, pengujian BMS, dan diagnostik inverter lanjutan.',
    content: `# Sertifikasi Teknisi HVAC Level 2: VRV & Commercial System

Tingkatkan kualifikasi Anda untuk menangani proyek pendinginan skala besar gedung komersial dan residensial mewah.`,
    coverImage: '/images/hero/commercial_building_hero.png',
    badge: 'Terbuka',
    location: 'Daikin National Training Center Sunter, Jakarta',
    highlights: [
      'Prinsip Kerja & Skema Pipa Daikin VRV 6th Gen',
      'Pengoperasian Daikin Service Checker Software',
      'Pemasangan & Integrasi Centralized Controller',
      'Pengujian Komisioning & Troubleshooting Kompresor'
    ],
    prerequisite: 'Lulus Sertifikasi Level 1 / Pengalaman HVAC 2 Tahun'
  },
  {
    id: 'prog-003',
    slug: 'training-dealer-konsultan-sales-daikin',
    title: 'Training Dealer & Konsultan Sales Daikin',
    category: 'dealer',
    level: 'Professional Sales',
    duration: '2 Hari (16 Jam)',
    excerpt: 'Pelatihan komprehensif mengenai pengetahuan produk (product knowledge), estimasi beban pendinginan ruangan, dan konsultasi kebutuhan pelanggan.',
    content: `# Training Dealer & Konsultan Sales Daikin

Pelatihan teknis dan komunikasi penjualan bagi staf toko/dealer iShop & ProShop Daikin.`,
    coverImage: '/images/news/proshop-award-fy25.png',
    badge: 'Terbuka',
    location: 'Daikin Training Center / Online Hybrid',
    highlights: [
      'Katalog Produk Daikin Residential & SkyAir',
      'Simulasi Perhitungan Beban Pendinginan (Btu/h)',
      'Teknik Penjualan Edukatif & Layanan Purna Jual',
      'Integrasi Aplikasi Daikin Smart Cloud'
    ],
    prerequisite: 'Staff Dealer / Consultant Resmi Daikin'
  },
  {
    id: 'prog-004',
    slug: 'sertifikasi-manajer-proyek-hvac',
    title: 'Sertifikasi Manajer Proyek HVAC & Estimator',
    category: 'project',
    level: 'Executive Level',
    duration: '4 Hari (32 Jam)',
    excerpt: 'Program sertifikasi manajemen proyek HVAC mencakup pembacaan gambar teknik CAD/BIM, spesifikasi teknis gedung tinggi, serta regulasi efisiensi energi.',
    content: `# Sertifikasi Manajer Proyek HVAC & Estimator

Modul manajemen proyek kelas profesional untuk spesifikasi AC gedung komersial.`,
    coverImage: '/images/news/kemendikdasmen.png',
    badge: 'Sisa 5 Kuota',
    location: 'Daikin Head Office Tower, Jakarta',
    highlights: [
      'Manajemen Proyek HVAC Berbasis Standar ASHRAE & SNI',
      'Estimasi Biaya & Pemilihan Unit Gedung Komersial',
      'Integrasi BIM (Building Information Modeling)',
      'Strategi Pencapaian Green Building Certification'
    ],
    prerequisite: 'Insinyur / Manajer Proyek Bangunan Gedung'
  },
  {
    id: 'prog-005',
    slug: 'training-spesialis-streamer-air-purifier',
    title: 'Training Spesialis Teknologi Streamer & IAQ',
    category: 'technician',
    level: 'Spesialisasi',
    duration: '2 Hari (16 Jam)',
    excerpt: 'Pelatihan khusus mengenai perawatan, pembersihan filter HEPA, dan pengujian laboratorium unit Streamer Air Purifier Daikin.',
    content: `# Training Spesialis Teknologi Streamer & IAQ`,
    coverImage: '/images/hero/slider-streamer.jpg',
    badge: 'Terbuka',
    location: 'Daikin Training Center Sunter, Jakarta',
    highlights: [
      'Pengujian Efektivitas Streamer Plasma Discharge',
      'Teknik Pengantian Filter Deodorizing & Electrostatic HEPA',
      'Kalibrasi Sensor Kualitas Udara PM2.5'
    ],
    prerequisite: 'Teknisi Layanan Purna Jual Daikin'
  },
  {
    id: 'prog-006',
    slug: 'workshop-chiller-applied-system',
    title: 'Masterclass: Daikin Chiller & Applied System',
    category: 'project',
    level: 'Expert Level',
    duration: '5 Hari (40 Jam)',
    excerpt: 'Pelatihan kelas tertinggi untuk sistem Chiller pendingin cair gedung bertingkat tinggi dan pabrik manufaktur.',
    content: `# Masterclass: Daikin Chiller & Applied System`,
    coverImage: '/images/news/awards.webp',
    badge: 'Terbatas',
    location: 'Daikin Chiller Competence Center, Jakarta',
    highlights: [
      'Prinsip Kerja Air-Cooled & Water-Cooled Chiller',
      'Pengoperasian Inverter Magnetic Bearing Chiller',
      'Sistem Otomasi Gedung (BMS) & Pelaporan Energi'
    ],
    prerequisite: 'Insinyur Mesin Gedung Komersial'
  }
]

export function getTrainingBySlug(slug: string): TrainingArticle | undefined {
  return trainingArticles.find((t) => t.slug === slug)
}
