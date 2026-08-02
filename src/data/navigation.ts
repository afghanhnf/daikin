import type { NavItem } from '@/types/navigation'

export const navItems: NavItem[] = [
  {
    labelKey: 'nav:profile.label',
    path: '/profile',
    isMegaMenu: false,
    isTwoColumn: true,
    children: [
      // ── Column 1: Perusahaan ──────────────────────────────────
      { labelKey: '', path: '__divider_company', isDivider: true, groupLabel: 'Perusahaan', categoryIcon: 'Building2' },
      { labelKey: 'Sekilas Daikin', path: '/about/glance', description: 'Daikin at a Glance (9 Facts)' },
      { labelKey: 'nav:profile.about', path: '/profile/about', description: 'Mengenal Daikin Indonesia lebih dekat' },
      { labelKey: 'Filosofi Brand', path: '/profile/daikin-group', description: 'Daikin Industries, Ltd. global' },
      { labelKey: 'nav:profile.history', path: '/profile/history', description: 'Perjalanan kami sejak 1924' },
      { labelKey: 'Daikin Impact (CSR)', path: '/profile/csr', description: 'Program CSR Daikin' },
      // ── Column 2: Teknologi & Keunggulan ─────────────────────
      { labelKey: '', path: '__divider_tech', isDivider: true, groupLabel: 'Teknologi & Keunggulan', categoryIcon: 'Zap' },
      { labelKey: 'nav:profile.technology', path: '/profile/technology', description: 'Inovasi teknologi Daikin' },
      { labelKey: 'nav:profile.streamer', path: '/profile/streamer', description: 'Teknologi Streamer eksklusif' },
      { labelKey: 'nav:profile.awards', path: '/profile/awards', description: 'Penghargaan dan sertifikasi' },
      { labelKey: 'nav:profile.tkdn', path: '/profile/tkdn', description: 'Kandungan komponen lokal Indonesia' },
      { labelKey: 'nav:profile.discovery', path: '/profile/discovery', description: 'Program eksplorasi & inovasi Daikin' },
    ],
  },
  {
    labelKey: 'nav:products.label',
    path: '/products',
    isMegaMenu: true,
    children: [
      { labelKey: 'nav:products.residential', path: '/products/residential', icon: 'Home', description: 'AC untuk hunian' },
      { labelKey: 'nav:products.commercial', path: '/products/commercial', icon: 'Building2', description: 'Solusi komersial & proyek' },
      { labelKey: 'nav:products.accessories', path: '/products/accessories', icon: 'Package', description: 'Aksesori pelengkap' },
      { labelKey: 'nav:products.spareParts', path: '/products/spare-parts', icon: 'Settings', description: 'Suku cadang resmi' },
      { labelKey: 'nav:products.catalogue', path: '/products/e-catalogue', icon: 'BookOpen', description: 'Unduh e-catalogue' },
      { labelKey: 'Aplikasi Daikin', path: '/products/daikin-app', icon: 'Smartphone', description: 'Perangkat lunak & controller' },
    ],
  },
  {
    labelKey: 'Informasi',
    path: '/information',
    isMegaMenu: false,
    isTwoColumn: true,
    footerLinks: [
      {
        title: 'Menjadi Dealer',
        description: 'Kemitraan bisnis Daikin',
        buttonText: 'Lihat',
        path: '/information/dealer'
      },
      {
        title: 'Xperience Zone',
        description: 'Kunjungi showroom Daikin',
        buttonText: 'Kunjungi',
        path: '/information/xperience-zone'
      },
    ],
    children: [
      { labelKey: '', path: '__divider_solutions', isDivider: true, groupLabel: 'Solusi Tata Udara', categoryIcon: 'Home' },
      { labelKey: 'nav:solutions.calculator', path: '/solutions/ac-calculator', description: 'Kalkulator PK & Daya AC' },
      { labelKey: 'nav:solutions.howToChoose', path: '/solutions/how-to-choose', description: 'Panduan memilih AC' },
      { labelKey: 'nav:solutions.energy', path: '/solutions/energy-efficiency', description: 'Hemat energi dengan inverter' },
      { labelKey: 'nav:solutions.airQuality', path: '/solutions/air-quality', description: 'Kualitas udara dalam ruangan' },
      { labelKey: 'nav:solutions.tips', path: '/solutions/maintenance-tips', description: 'Tips perawatan AC' },

      { labelKey: '', path: '__divider_info', isDivider: true, groupLabel: 'Pencapaian & Berita', categoryIcon: 'Zap' },
      { labelKey: 'AC Subscription', path: '/about/achievements', description: 'Layanan berlangganan efisien energi' },
      { labelKey: 'Daikin\'s Air Today', path: '/information/articles', description: 'Artikel & Berita Dinamis' },
      { labelKey: 'For All Your Needs', path: '/information/solutions', description: 'Panduan Kebutuhan AC' },
      { labelKey: 'Carbon Neutrality', path: '/information/carbon-neutrality', description: 'Netralitas Karbon & Inovasi Lingkungan' },
      { labelKey: 'Studi Kasus', path: '/information/portfolio', description: 'Referensi Proyek Global' },
    ],
  },
  {
    labelKey: 'nav:services.label',
    path: '/services',
    children: [
      { labelKey: 'nav:services.ishop', path: '/services/ishop', description: 'Dealer resmi AC untuk hunian' },
      { labelKey: 'nav:services.proshop', path: '/services/proshop', description: 'Dealer resmi AC komersial & proyek' },
      { labelKey: 'VRV Certified Dealer', path: '/services/vrv-dealer', description: 'Daftar dealer resmi VRV tersertifikasi' },
      { labelKey: '', path: '__divider_service', isDivider: true, groupLabel: 'Layanan Teknis' },
      { labelKey: 'Layanan Umum', path: '/services/general-services', description: 'Dukungan teknis, instalasi, dan penyelesaian masalah' },
      { labelKey: 'nav:services.center', path: '/services/service-center', description: 'Temukan service center resmi terdekat' },
      { labelKey: 'Maintenance', path: '/services/maintenance', description: 'Kontrak & layanan pemeliharaan berkala' },
      { labelKey: 'nav:services.warranty', path: '/services/warranty', description: 'Jaminan & garansi resmi' },
      { labelKey: 'Spesifikasi & Data Teknis', path: '/services/technical-data', description: 'Spesifikasi & data teknis produk' },
    ],
  },
  {
    labelKey: 'nav:insights.label',
    path: '/insights',
    isMegaMenu: false,
    isTwoColumn: true,
    children: [
      { labelKey: '', path: '__divider_insights_news', isDivider: true, groupLabel: 'Berita & Informasi', categoryIcon: 'BookOpen' },
      { labelKey: 'nav:insights.news', path: '/insights/news', description: 'Berita terbaru' },
      { labelKey: 'nav:insights.promotions', path: '/insights/promotions', description: 'Promo spesial' },
      { labelKey: 'nav:insights.events', path: '/insights/events', description: 'Acara & kegiatan' },
      { labelKey: 'nav:insights.training', path: '/insights/training', description: 'Pelatihan & sertifikasi' },
      { labelKey: 'FAQ', path: '/insights/faq', description: 'Jawaban pertanyaan umum & penanganan masalah AC' },

      // ── Riset & Teknologi Terkini ─────────────
      { labelKey: '', path: '__divider_tech_new', isDivider: true, groupLabel: 'Riset & Teknologi Terkini', categoryIcon: 'Lightbulb' },
      { labelKey: 'Riset Neurosains', path: '/insights/research', description: 'Udara yang menghambat kelelahan' },
      { labelKey: 'World Air Survey', path: '/insights/reports', description: 'Survei Udara Daikin di Dunia' },
      { labelKey: 'Benefits of Tech', path: '/insights/technology/benefits', description: 'Inverter, Heat Pump, R-32' },
      { labelKey: 'Expert Ventilation', path: '/insights/technology/ventilation', description: 'Metode Ventilasi Ahli' },
      { labelKey: 'VRV Era', path: '/insights/technology/vrv', description: 'Evolusi Teknologi VRV' },

      // ── Kampanye ─────────────
      { labelKey: '', path: '__divider_campaigns', isDivider: true, groupLabel: 'Kampanye', categoryIcon: 'Megaphone' },
      { labelKey: '#KeputusanYangTepat', path: '/campaign/keputusan-yang-tepat', description: 'Untuk kenyamanan tanpa batas' },
      { labelKey: 'nav:perfecting.idealAir', path: '/campaign/ideal-air', description: 'Udara nyaman adalah hak semua orang' },
      { labelKey: 'nav:perfecting.power', path: '/campaign/power-to-create', description: 'Inovasi hijau untuk masa depan' },
      { labelKey: 'nav:perfecting.stories', path: '/campaign/perfecting-air', description: 'Kisah nyata pelanggan Daikin' },
    ],
  },
  // { labelKey: 'nav:competition.label', path: '/competition' }, // hidden
  {
    labelKey: 'nav:careers.label',
    path: '/careers',
  },
  {
    labelKey: 'nav:contact.label',
    path: '/contact',
  },
  {
    labelKey: 'nav:dealer.label',
    path: '/solutions/ac-recommendation',
    isDealer: true,
  },
]
