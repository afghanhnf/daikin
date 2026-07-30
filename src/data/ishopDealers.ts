export interface IShopStore {
  id: string
  name: string
  region: string
  city: string
  address: string
  phone: string
  whatsapp: string
  openHours: string
  services: string[]
  shopeeUrl: string
  tokopediaUrl: string
  websiteUrl: string
  mapsUrl: string
  ownerVoice?: string
  detailedHours?: {
    weekday: string
    saturday: string
    sunday: string
    holiday: string
  }
  paymentMethods?: string[]
  socials?: {
    instagram: string
    website: string
    tiktok: string
  }
  offerings?: {
    sales: string[]
    maintenance: string[]
    repair: string[]
  }
  testimonials?: {
    name: string
    rating: number
    text: string
  }[]
}

export const ishopStores: IShopStore[] = [
  {
    id: 'jkt-wahana',
    name: 'AC WAHANA',
    region: 'DKI JAKARTA',
    city: 'Jakarta Utara',
    address: 'Rukan Artha Gading Niaga, Jl. Boulevard Artha Gading No.8 Blok C, RT.18/RW.8, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240, Indonesia',
    phone: '08951736699',
    whatsapp: '628951736699',
    openHours: 'Senin - Sabtu: 09.00 - 17.30',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC', 'Showroom Display'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://acwahana.com/brand/harga-ac-daikin',
    mapsUrl: 'https://maps.google.com/?q=Rukan+Artha+Gading+Niaga+Jl.+Boulevard+Artha+Gading+No.8+Blok+C',
    ownerVoice: 'ACWahana adalah Retail, Distributor, dan Kontraktor AC dengan pengalaman lebih dari 30 tahun. Melayani proyek residensial, komersial, dan industrial. ACWahana menyediakan solusi lengkap untuk kebutuhan AC, termasuk AC Split, Cassette, Floor Standing, VRV, dan Duct. Didukung teknisi bersertifikasi DAIKIN, ACWahana juga menyediakan produk lengkap DAIKIN, seperti AC, pipa, insulasi, refrigerant, dan alat pendukung lainnya, menjadikannya mitra terpercaya di bidang tata udara.',
    detailedHours: {
      weekday: 'Senin - Jumat 09:00 - 17:30',
      saturday: 'Sabtu 09:00 - 15:00',
      sunday: 'Minggu 09:00 - 17.30',
      holiday: 'Libur Hari Besar: Tutup'
    },
    paymentMethods: ['Tunai', 'Kartu Kredit', 'Transfer Bank'],
    socials: {
      instagram: '@acwahana',
      website: 'https://acwahana.com/brand/harga-ac-daikin',
      tiktok: 'acwahana.official'
    },
    offerings: {
      sales: ['Single split AC', 'Multi split AC', 'Commercial AC', 'Industrial AC', 'Air purifier'],
      maintenance: ['Single split AC', 'Multi split AC', 'Commercial AC'],
      repair: ['Single split AC', 'Multi split AC', 'Commercial AC']
    },
    testimonials: [
      {
        name: 'Winda Yuliyanti',
        rating: 5,
        text: 'Punya AC Daikin memang paling mantap, dingin cepat dan pelayanan instalasi teknisi dari ACWahana rapi sekali!'
      },
      {
        name: 'Rere Afryria',
        rating: 5,
        text: 'Air Purifier mempunyai rasa sejuk di keadaan dalam ruangan, meskipun AC bukan tujuan utamanya, sehingga mirip dengan fungsi AC. Air Purifier mampu mendinginkan udara sekitar dengan keadaan bersih, segar, dan sejuk (bebas polusi)! Air Purifier ini bisa menghilangkan partikel penyebab alergi atau sejenis lainnya. Yuk hidup sehat dengan Air Purifier Daikin yang bisa bikin udara di rumah kita lebih bersih dan sehat!'
      }
    ]
  },
  {
    id: 'jkt-captain',
    name: 'Captain Air Conditioning Indonesia',
    region: 'DKI JAKARTA',
    city: 'Jakarta Utara',
    address: 'Ruko Elang Laut Boulevard B-43 Pantai Indah Kapuk, Penjaringan, Kapuk Muara, Jakarta Utara 14470',
    phone: '021-22570425',
    whatsapp: '6281298765432',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Konsultasi HVAC', 'Showroom Display'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://captainaircon.id',
    mapsUrl: 'https://maps.google.com/?q=Captain+Air+Conditioning+Pantai+Indah+Kapuk',
    ownerVoice: 'Captain Air Conditioning melayani kebutuhan sistem tata udara modern dengan konsultasi menyeluruh dan pengawasan instalasi presisi tinggi oleh engineer tersertifikasi Daikin.',
    detailedHours: {
      weekday: 'Senin - Jumat 08:30 - 17:30',
      saturday: 'Sabtu 08:30 - 15:00',
      sunday: 'Minggu: Tutup',
      holiday: 'Libur Hari Besar: Tutup'
    },
    paymentMethods: ['Tunai', 'Kartu Kredit', 'Transfer Bank'],
    socials: {
      instagram: '@captainaircon',
      website: 'https://captainaircon.id',
      tiktok: 'captainaircon'
    },
    offerings: {
      sales: ['Single split AC', 'Multi split AC', 'Commercial AC', 'VRV System'],
      maintenance: ['Single split AC', 'Commercial AC'],
      repair: ['Single split AC', 'Multi split AC']
    },
    testimonials: [
      {
        name: 'Hendra Wijaya',
        rating: 5,
        text: 'Sangat profesional dari awal konsultasi PK sampai pemasangan unit di rumah PIK.'
      }
    ]
  },
  {
    id: 'jkt-centra',
    name: 'Centra HVACR',
    region: 'DKI JAKARTA',
    city: 'Jakarta Timur',
    address: 'Jl. Raya Pulo Gebang No.5, RT.7/RW.6, Kel. Pulo Gebang, Kec. Cakung, Jakarta Timur 13950',
    phone: '0851-7313-9000',
    whatsapp: '6285173139000',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://centrahvacr.id',
    mapsUrl: 'https://maps.google.com/?q=Centra+HVACR+Pulo+Gebang+Jakarta+Timur',
    ownerVoice: 'Centra HVACR berdedikasi memberikan solusi pendinginan hemat energi Daikin untuk hunian maupun komersial dengan layanan cepat dan tanggap.',
    detailedHours: {
      weekday: 'Senin - Jumat 08:30 - 17:30',
      saturday: 'Sabtu 08:30 - 15:00',
      sunday: 'Minggu: Tutup',
      holiday: 'Libur Hari Besar: Tutup'
    },
    paymentMethods: ['Tunai', 'Kartu Kredit', 'Transfer Bank'],
    socials: {
      instagram: '@centrahvacr',
      website: 'https://centrahvacr.id',
      tiktok: 'centrahvacr'
    },
    offerings: {
      sales: ['Single split AC', 'Multi split AC', 'Commercial AC', 'Air purifier'],
      maintenance: ['Single split AC', 'Multi split AC', 'Commercial AC'],
      repair: ['Single split AC', 'Multi split AC']
    },
    testimonials: [
      {
        name: 'Budi Santoso',
        rating: 5,
        text: 'Teknisi datang tepat waktu dan pemasangan AC Inverter sangat rapi.'
      }
    ]
  },
  {
    id: 'jkt-dunia',
    name: 'Dunia Electric',
    region: 'DKI JAKARTA',
    city: 'Jakarta Barat',
    address: 'Ruko Glodok Plaza Blok F/12A, Kota Jakarta Barat',
    phone: '0816-1799-7231',
    whatsapp: '6281617997231',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://duniaelectric.com',
    mapsUrl: 'https://maps.google.com/?q=Glodok+Plaza+Jakarta+Barat',
    ownerVoice: 'Penyedia produk AC Daikin resmi di Glodok dengan harga kompetitif dan pelayanan purnajual terpercaya.',
    detailedHours: {
      weekday: 'Senin - Jumat 08:30 - 17:30',
      saturday: 'Sabtu 08:30 - 15:00',
      sunday: 'Minggu: Tutup',
      holiday: 'Libur Hari Besar: Tutup'
    },
    paymentMethods: ['Tunai', 'Kartu Kredit', 'Transfer Bank'],
    socials: {
      instagram: '@duniaelectric',
      website: 'https://duniaelectric.com',
      tiktok: 'duniaelectric'
    },
    offerings: {
      sales: ['Single split AC', 'Multi split AC', 'Commercial AC'],
      maintenance: ['Single split AC', 'Multi split AC'],
      repair: ['Single split AC']
    },
    testimonials: [
      {
        name: 'Santi',
        rating: 5,
        text: 'Beli AC Daikin Smile Inverter di sini dijamin ori dan garansi resmi!'
      }
    ]
  },
  {
    id: 'jkt-era',
    name: 'ERA TEKNIK',
    region: 'DKI JAKARTA',
    city: 'Jakarta Pusat',
    address: 'Ruko Mega Grosir Cempaka Mas, Jl. Letjend Suprapto No.3 Blok C1 - C5, Jakarta Pusat',
    phone: '0878-8386-8800',
    whatsapp: '6287883868800',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://erateknik.com',
    mapsUrl: 'https://maps.google.com/?q=Mega+Grosir+Cempaka+Mas+Jakarta+Pusat'
  },
  {
    id: 'jkt-indocool',
    name: 'Indo Cool',
    region: 'DKI JAKARTA',
    city: 'Jakarta Utara',
    address: 'Jl. Pluit Karang Asri II No.1, RT.5/RW.13, Kec. Penjaringan, Kel. Pluit, Jakarta Utara 14450',
    phone: '0811-1376-0008',
    whatsapp: '6281113760008',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://indocool.id',
    mapsUrl: 'https://maps.google.com/?q=Pluit+Karang+Asri+Jakarta+Utara'
  },
  {
    id: 'jkt-sumbersurya',
    name: 'PT. Sumber Surya Maju Mandiri',
    region: 'DKI JAKARTA',
    city: 'Jakarta Selatan',
    address: 'Jl. RS. Fatmawati Raya No.3-B, RT.4/RW.3, Cilandak Barat, Kec. Cilandak, Jakarta Selatan 12410',
    phone: '0815-1779-9907',
    whatsapp: '6281517799907',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC', 'Showroom Display'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://ptsumbersuryamajumandiri.com',
    mapsUrl: 'https://maps.google.com/?q=RS+Fatmawati+Raya+Jakarta+Selatan'
  },
  {
    id: 'btn-tangerang',
    name: 'Tangerang Aircon Center iShop',
    region: 'BANTEN',
    city: 'Tangerang',
    address: 'Ruko Serpong Town Square Blok AA No.12, Gading Serpong, Tangerang 15810',
    phone: '021-54210088',
    whatsapp: '6281288991122',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Konsultasi Rumah', 'Showroom Display'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://tangerangaircon.id',
    mapsUrl: 'https://maps.google.com/?q=Gading+Serpong+Tangerang'
  },
  {
    id: 'bks-coldmaster',
    name: 'Bekasi Cold Master iShop',
    region: 'BEKASI',
    city: 'Kota Bekasi',
    address: 'Ruko Grand Galaxy City Blok RRG No.18, Bekasi Selatan, Kota Bekasi 17147',
    phone: '021-82736655',
    whatsapp: '6281311223344',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Cuci & Service AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://bekasicoldmaster.id',
    mapsUrl: 'https://maps.google.com/?q=Grand+Galaxy+City+Bekasi'
  },
  {
    id: 'jbr-bandung',
    name: 'Bandung HVAC Specialist iShop',
    region: 'JAWA BARAT',
    city: 'Bandung',
    address: 'Jl. Soekarno Hatta No.472, Batununggal, Kota Bandung, Jawa Barat 40266',
    phone: '022-7564990',
    whatsapp: '6282122334455',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Showroom Display', 'Garansi Resmi'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://bandunghvac.id',
    mapsUrl: 'https://maps.google.com/?q=Soekarno+Hatta+Bandung'
  },
  {
    id: 'jtg-semarang',
    name: 'Semarang Aircon Hub iShop',
    region: 'JAWA TENGAH',
    city: 'Semarang',
    address: 'Jl. Majapahit No.218, Pedurungan, Kota Semarang, Jawa Tengah 50192',
    phone: '024-6712345',
    whatsapp: '6285711223344',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Perawatan Berkala'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://semarangaircon.id',
    mapsUrl: 'https://maps.google.com/?q=Majapahit+Semarang'
  },
  {
    id: 'jtm-surabaya',
    name: 'Surabaya HVAC Specialist iShop',
    region: 'JAWA TIMUR',
    city: 'Surabaya',
    address: 'Ruko Rungkut Megah Raya Blok B-10, Jl. Raya Rungkut No.5, Surabaya 60293',
    phone: '031-8709988',
    whatsapp: '6281788990011',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Showroom Display', 'Service Center'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://surabayahvac.id',
    mapsUrl: 'https://maps.google.com/?q=Rungkut+Megah+Raya+Surabaya'
  },
  {
    id: 'bali-denpasar',
    name: 'Denpasar Climate iShop',
    region: 'BALI',
    city: 'Denpasar',
    address: 'Jl. Teuku Umar No.182, Dauh Puri Kauh, Kec. Denpasar Barat, Bali 80113',
    phone: '0361-234567',
    whatsapp: '6281999887766',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Konsultasi Villa & Hunian'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://denpasarclimate.id',
    mapsUrl: 'https://maps.google.com/?q=Teuku+Umar+Denpasar+Bali'
  },
  {
    id: 'sum-medan',
    name: 'Medan Aircon Center iShop',
    region: 'SUMATERA UTARA',
    city: 'Medan',
    address: 'Jl. Gatot Subroto No.145, Medan Petisah, Kota Medan, Sumatera Utara 20112',
    phone: '061-4512345',
    whatsapp: '6285266778899',
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    services: ['Penjualan & Pemasangan', 'Service & Sparepart'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com',
    websiteUrl: 'https://medanaircon.id',
    mapsUrl: 'https://maps.google.com/?q=Gatot+Subroto+Medan'
  }
]
