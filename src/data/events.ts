export interface EventArticle {
  id: string
  slug: string
  title: { id: string; en: string }
  excerpt: { id: string; en: string }
  content: { id: string; en: string }
  coverImage: string
  publishedAt: string
  date: string
  time?: string
  location: string
  isUpcoming: boolean
  category: 'expo' | 'webinar' | 'csr' | 'workshop'
  badge: string
  speaker?: string
  quota?: string
}

export const eventArticles: EventArticle[] = [
  {
    id: 'event-001',
    slug: 'daikin-expo-jakarta-2026',
    category: 'expo',
    badge: 'Pameran',
    title: {
      id: 'Daikin Airconditioning Expo Jakarta 2026',
      en: 'Daikin Airconditioning Expo Jakarta 2026',
    },
    excerpt: {
      id: 'Pameran teknologi tata udara HVAC terbesar di Indonesia. Saksikan peluncuran produk terbaru, demo teknologi VRV 6th Gen, dan konsultasi gratis bersama insinyur HVAC Daikin.',
      en: 'The largest HVAC air conditioning tech exhibition in Indonesia. Experience the latest product launch and free consulting with Daikin HVAC engineers.',
    },
    content: {
      id: `# Daikin Airconditioning Expo Jakarta 2026

Daikin Indonesia kembali menggelar pameran teknologi tata udara terbesar tahun ini: **Daikin Airconditioning Expo Jakarta 2026**. Pameran ini menjadi wadah pertemuan para arsitek, konsultan gedung, kontraktor HVAC, pemilik usaha, serta pengguna hunian.

## Highlight Acara:
- **Peluncuran Produk VRV 6th Generation**: Sistem AC terpusat tercanggih dengan efisiensi energi tertinggi.
- **Zona Simulasi Udara Sehat Streamer**: Pengujian langsung efektivitas eliminasi virus & alergen.
- **Konsultasi Gratis Bersama Insinyur Daikin**: Bawa denah rumah/gedung Anda untuk estimasi beban pendinginan gratis.`,
      en: `# Daikin Airconditioning Expo Jakarta 2026

Daikin Indonesia hosts the largest air conditioning technology exhibition this year.`,
    },
    coverImage: '/images/hero/commercial_building_hero.png',
    publishedAt: '2026-07-01',
    date: '2026-08-20',
    time: '09:00 - 18:00 WIB',
    location: 'Jakarta Convention Center (JCC), Hall A',
    isUpcoming: true,
    speaker: 'Tim Insinyur & Desainer Daikin Japan & Indonesia',
    quota: 'Terbuka Untuk Umum'
  },
  {
    id: 'event-002',
    slug: 'webinar-udara-sehat-era-modern',
    category: 'webinar',
    badge: 'Webinar',
    title: {
      id: 'Webinar Nasional: Solusi Udara Sehat & Bebas Virus di Era Modern',
      en: 'National Webinar: Healthy & Virus-Free Air Solutions',
    },
    excerpt: {
      id: 'Webinar gratis bersertifikat membahas pentingnya kualitas udara dalam ruangan (IAQ), teknologi Streamer plasma discharge, serta penerapan ventilasi efisien.',
      en: 'Free certified webinar discussing indoor air quality (IAQ), Streamer plasma discharge tech, and efficient ventilation methods.',
    },
    content: {
      id: `# Webinar Nasional: Solusi Udara Sehat & Bebas Virus di Era Modern

Kualitas udara dalam ruangan berpengaruh langsung pada kesehatan dan konsentrasi kerja. Ikuti webinar edukatif bersama para pakar kualitas udara dari Daikin dan akademisi terkemuka.

## Pokok Bahasan Webinar:
- Parameter utama Indoor Air Quality (IAQ) sesuai standar WHO & Kementerian Kesehatan.
- Mekanisme kerja Streamer Technology dalam melumpuhkan partikel mikroskopis.
- Simulasi pergantian udara (sirkulasi ventilasi) pada ruang ber-AC.`,
      en: `# National Webinar: Healthy & Virus-Free Air Solutions

Learn about indoor air quality standards and Daikin Streamer technology.`,
    },
    coverImage: '/images/hero/slider-streamer.jpg',
    publishedAt: '2026-07-05',
    date: '2026-08-28',
    time: '14:00 - 16:00 WIB',
    location: 'Online via Zoom & YouTube Live',
    isUpcoming: true,
    speaker: 'Dr. Rian Pradipta (Pakar IAQ) & Head of Product Daikin',
    quota: 'Sisa 120 Kuota'
  },
  {
    id: 'event-003',
    slug: 'workshop-arsitek-hvac-vrv-home',
    category: 'workshop',
    badge: 'Workshop',
    title: {
      id: 'Workshop Arsitek: Integrasi VRV HVAC Pada Arsitektur Mewah',
      en: 'Architect Workshop: VRV HVAC Integration in Luxury Architecture',
    },
    excerpt: {
      id: 'Sesi workshop eksklusif untuk para arsitek dan interior designer dalam merancang tata udara estetis dan hemat energi menggunakan sistem Daikin VRV Home.',
      en: 'Exclusive workshop session for architects & interior designers on designing aesthetic & energy-efficient climate control.',
    },
    content: {
      id: `# Workshop Arsitek: Integrasi VRV HVAC Pada Arsitektur Mewah

Bagaimana merancang sistem tata udara yang menyatu dengan estetika plafon dan interior tanpa mengorbankan kapasitas pendinginan? Workshop ini dirancang khusus untuk profesional arsitektur.`,
      en: `# Architect Workshop: VRV HVAC Integration in Luxury Architecture`,
    },
    coverImage: '/images/hero/slider-emura.jpeg',
    publishedAt: '2026-07-10',
    date: '2026-09-10',
    time: '10:00 - 15:00 WIB',
    location: 'Daikin ProShop Showroom Sunter, Jakarta',
    isUpcoming: true,
    speaker: 'Ikatan Arsitek Indonesia (IAI) & Principal Engineer Daikin',
    quota: 'Khusus Undangan'
  },
  {
    id: 'event-004',
    slug: 'daikin-impact-csr-mangrove-2026',
    category: 'csr',
    badge: 'CSR Event',
    title: {
      id: 'Daikin Impact: Penanaman 10.000 Mangrove Pesisir Jakarta',
      en: 'Daikin Impact: Planting 10,000 Mangroves on Jakarta Coast',
    },
    excerpt: {
      id: 'Aksi hijau memperingati Hari Lingkungan Hidup Sedunia. Gotong royong penanaman 10.000 bibit mangrove bersama komunitas nelayan lokal.',
      en: 'Green action commemorating World Environment Day. Planting 10,000 mangrove seedlings with local coastal communities.',
    },
    content: {
      id: `# Daikin Impact: Penanaman 10.000 Mangrove Pesisir Jakarta

Sebagai bagian dari komitmen Net Zero 2050, Daikin Indonesia menyelenggarakan aksi penanaman 10.000 bibit mangrove di kawasan pesisir Jakarta.`,
      en: `# Daikin Impact: Planting 10,000 Mangroves on Jakarta Coast`,
    },
    coverImage: '/images/news/mangrove.jpg',
    publishedAt: '2026-06-01',
    date: '2026-06-05',
    time: '07:00 - 12:00 WIB',
    location: 'Hutan Mangrove Pantai Indah Kapuk, Jakarta',
    isUpcoming: false,
    speaker: 'Tim Daikin Impact & Komunitas Nelayan Muara Baru'
  },
  {
    id: 'event-005',
    slug: 'daikin-technician-competition-2026',
    category: 'expo',
    badge: 'Kompetisi',
    title: {
      id: 'Kompetisi Teknisi HVAC Nasional Daikin 2026',
      en: 'Daikin National HVAC Technician Competition 2026',
    },
    excerpt: {
      id: 'Ajang unjuk kebolehan teknisi HVAC terbaik dari seluruh Indonesia memperebutkan sertifikasi master dan piala bergilir Daikin.',
      en: 'The showcase event for top HVAC technicians across Indonesia competing for master certification and trophy.',
    },
    content: {
      id: `# Kompetisi Teknisi HVAC Nasional Daikin 2026

Ajang apresiasi dan pengujian ketrampilan presisi teknisi AC terkemuka di Indonesia.`,
      en: `# Daikin National HVAC Technician Competition 2026`,
    },
    coverImage: '/images/news/kemendikdasmen.png',
    publishedAt: '2026-07-12',
    date: '2026-10-15',
    time: '08:00 - 17:00 WIB',
    location: 'Daikin National Training Center Sunter, Jakarta',
    isUpcoming: true,
    speaker: 'Juri Sertifikasi BNSP & Instruktur Senior Daikin'
  },
  {
    id: 'event-006',
    slug: 'seminar-bangunan-hijau-net-zero',
    category: 'webinar',
    badge: 'Seminar',
    title: {
      id: 'Seminar Bangunan Hijau & Net Zero Carbon Building',
      en: 'Green Building & Net Zero Carbon Seminar',
    },
    excerpt: {
      id: 'Diskusi mendalam bersama praktisi bangunan hijau mengenai strategi efisiensi energi HVAC untuk sertifikasi Greenship.',
      en: 'In-depth discussion with green building practitioners on HVAC energy efficiency strategies for Greenship certification.',
    },
    content: {
      id: `# Seminar Bangunan Hijau & Net Zero Carbon Building

Membahas regulasi bangunan hemat energi dan implementasi teknologi pendingin bebas hidrofluorokarbon.`,
      en: `# Green Building & Net Zero Carbon Seminar`,
    },
    coverImage: '/images/news/disnakertrans-jatim.png',
    publishedAt: '2026-07-15',
    date: '2026-11-05',
    time: '13:00 - 16:30 WIB',
    location: 'Grand Ballroom Hotel Indonesia Kempinski',
    isUpcoming: true,
    speaker: 'Green Building Council Indonesia & Daikin Engineer'
  }
]

export function getEventBySlug(slug: string): EventArticle | undefined {
  return eventArticles.find((e) => e.slug === slug)
}
