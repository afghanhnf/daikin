import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { NavigationProvider } from '@/context/NavigationContext'
import RootLayout from '@/components/layout/RootLayout'
import Spinner from '@/components/ui/Spinner'

// Lazy-loaded pages
const Home = lazy(() => import('@/pages/Home'))

// Profile
const AboutIndonesia = lazy(() => import('@/pages/Profile/AboutIndonesia'))
const AllAbout = lazy(() => import('@/pages/Profile/AllAbout'))
const DaikinGroup = lazy(() => import('@/pages/Profile/DaikinGroup'))
const OurHistory = lazy(() => import('@/pages/Profile/OurHistory'))
const BecomeDealer = lazy(() => import('@/pages/Information/BecomeDealer'))
const XperienceZone = lazy(() => import('@/pages/Information/XperienceZone'))
const VRVDealer = lazy(() => import('@/pages/Information/VRVDealer'))
const TechnologyOverview = lazy(() => import('@/pages/Profile/TechnologyOverview'))
const StreamerTechnology = lazy(() => import('@/pages/Profile/StreamerTechnology'))
const AwardsCertifications = lazy(() => import('@/pages/Profile/AwardsCertifications'))
const TKDN = lazy(() => import('@/pages/Profile/TKDN'))
const Discovery = lazy(() => import('@/pages/Profile/Discovery'))

// Products
const ProductsIndex = lazy(() => import('@/pages/Products'))
const ResidentialSolutions = lazy(() => import('@/pages/Products/ResidentialSolutions'))
const SingleSplitPage = lazy(() => import('@/pages/Products/Residential/SingleSplit'))
const AlphaInverterPage = lazy(() => import('@/pages/Products/Residential/AlphaInverter'))
const BetaInverterPage = lazy(() => import('@/pages/Products/Residential/BetaInverter'))
const SuperMiniSplitPage = lazy(() => import('@/pages/Products/Residential/SuperMiniSplit'))
const MultiSplitPage = lazy(() => import('@/pages/Products/Residential/MultiSplit'))
const MultiS3ConnectionPage = lazy(() => import('@/pages/Products/Residential/MultiS3Connection'))
const AirPurifierPage = lazy(() => import('@/pages/Products/Residential/AirPurifier'))
const MC80ZVM7Page = lazy(() => import('@/pages/Products/Residential/MC80ZVM7'))
const VRVHomePage = lazy(() => import('@/pages/Products/Residential/VRVHome'))
const Indoor3DiPage = lazy(() => import('@/pages/Products/Residential/Indoor3Di'))
const SuperMultiNXPage = lazy(() => import('@/pages/Products/Residential/SuperMultiNX'))
const CommercialSolutions = lazy(() => import('@/pages/Products/CommercialSolutions'))
const Accessories = lazy(() => import('@/pages/Products/Accessories'))
const Refrigerant = lazy(() => import('@/pages/Products/Accessories/Refrigerant'))
const PipaAC = lazy(() => import('@/pages/Products/Accessories/PipaAC'))
const Insulasi = lazy(() => import('@/pages/Products/Accessories/Insulasi'))
const RecommendTools = lazy(() => import('@/pages/Products/Accessories/Tools'))
const AirFilterPage = lazy(() => import('@/pages/Products/Accessories/Filter'))
const SmartConnectionPage = lazy(() => import('@/pages/Products/Accessories/SmartConnection'))
const OthersPage = lazy(() => import('@/pages/Products/Accessories/Others'))
const SkyAirPage = lazy(() => import('@/pages/Products/Commercial/SkyAir'))
const SkyAirFCFGPage = lazy(() => import('@/pages/Products/Commercial/SkyAirFCFG'))
const VRVPage = lazy(() => import('@/pages/Products/Commercial/VRV'))
const VRV6APage = lazy(() => import('@/pages/Products/Commercial/VRV6A'))
const PackagedACPage = lazy(() => import('@/pages/Products/Commercial/PackagedAC'))
const SpareParts = lazy(() => import('@/pages/Products/SpareParts'))
const ECatalogue = lazy(() => import('@/pages/Products/ECatalogue'))
const DaikinApp = lazy(() => import('@/pages/Products/DaikinApp'))
const ProductDetail = lazy(() => import('@/pages/Products/ProductDetail'))
const VirtualTour = lazy(() => import('@/pages/VirtualTour'))

// Services
const ServicesIndex = lazy(() => import('@/pages/Services'))
const IShop = lazy(() => import('@/pages/Services/IShop'))
const IShopDealerDetail = lazy(() => import('@/pages/Services/IShopDealerDetail'))
const ProShop = lazy(() => import('@/pages/Services/ProShop'))
const ServiceMaintenance = lazy(() => import('@/pages/Services/ServiceMaintenance'))
const ServiceCenter = lazy(() => import('@/pages/Services/ServiceCenter'))
const WarrantySupport = lazy(() => import('@/pages/Services/WarrantySupport'))
const TechnicalData = lazy(() => import('@/pages/Services/TechnicalData'))
const GeneralServices = lazy(() => import('@/pages/Services/GeneralServices'))

// Solutions
const SolutionsIndex = lazy(() => import('@/pages/Solutions'))
const HowToChoose = lazy(() => import('@/pages/Solutions/HowToChoose'))
const EnergyEfficiency = lazy(() => import('@/pages/Solutions/EnergyEfficiency'))
const ACCalculator = lazy(() => import('@/pages/Solutions/ACCalculator'))
const ACRecommendation = lazy(() => import('@/pages/Solutions/ACRecommendation'))
const IndoorAirQuality = lazy(() => import('@/pages/Solutions/IndoorAirQuality'))
const MaintenanceTips = lazy(() => import('@/pages/Solutions/MaintenanceTips'))

// Insights
const InsightsIndex = lazy(() => import('@/pages/Insights'))
const News = lazy(() => import('@/pages/Insights/News'))
const NewsDetail = lazy(() => import('@/pages/Insights/NewsDetail'))
const Promotions = lazy(() => import('@/pages/Insights/Promotions'))
const PromotionDetail = lazy(() => import('@/pages/Insights/PromotionDetail'))
const Events = lazy(() => import('@/pages/Insights/Events'))
const EventDetail = lazy(() => import('@/pages/Insights/EventDetail'))
const TrainingCertification = lazy(() => import('@/pages/Insights/TrainingCertification'))
const FAQ = lazy(() => import('@/pages/Insights/FAQ'))
const DaikinImpact = lazy(() => import('@/pages/Insights/DaikinImpact'))
const InverterDetail = lazy(() => import('@/pages/Insights/Technology/Inverter'))
const HeatPumpDetail = lazy(() => import('@/pages/Insights/Technology/HeatPump'))
const R32Detail = lazy(() => import('@/pages/Insights/Technology/R32'))
const VrvDetail = lazy(() => import('@/pages/Insights/Technology/Vrv'))
const VentilationDetail = lazy(() => import('@/pages/Insights/Technology/Ventilation'))

// Campaign
const CampaignIndex = lazy(() => import('@/pages/Campaign'))
const KeputusanYangTepat = lazy(() => import('@/pages/Campaign/KeputusanYangTepat'))
const IdealAir = lazy(() => import('@/pages/Campaign/IdealAir'))
const PowerToCreate = lazy(() => import('@/pages/Campaign/PowerToCreate'))
const PerfectingAirStories = lazy(() => import('@/pages/Campaign/PerfectingAirStories'))

// Standalone
const Competition = lazy(() => import('@/pages/Competition'))
const Careers = lazy(() => import('@/pages/Careers'))
const JobDetail = lazy(() => import('@/pages/Careers/JobDetail'))
const Contact = lazy(() => import('@/pages/Contact'))
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('@/pages/TermsConditions'))
const FlowAktor1 = lazy(() => import('@/pages/FlowAktor1'))
const FlowAktor2 = lazy(() => import('@/pages/FlowAktor2'))
const FlowAktor3 = lazy(() => import('@/pages/FlowAktor3'))
const FlowAktor4 = lazy(() => import('@/pages/FlowAktor4'))
const NotFound = lazy(() => import('@/pages/errors/NotFound'))

// New Pages (Combined)
const Glance = lazy(() => import('@/pages/About/Glance'))
const Achievements = lazy(() => import('@/pages/About/Achievements'))
const Articles = lazy(() => import('@/pages/Information/Articles'))
const InformationSolutions = lazy(() => import('@/pages/Information/Solutions'))
const CSR = lazy(() => import('@/pages/Information/CSR'))
const Portfolio = lazy(() => import('@/pages/Information/Portfolio'))
const FindDealer = lazy(() => import('@/pages/Information/FindDealer'))
const Research = lazy(() => import('@/pages/Insights/Research'))
const Reports = lazy(() => import('@/pages/Insights/Reports'))
const Benefits = lazy(() => import('@/pages/Insights/Technology/Benefits'))
const Ventilation = lazy(() => import('@/pages/Insights/Technology/Ventilation'))
const Vrv = lazy(() => import('@/pages/Insights/Technology/Vrv'))

function PageSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    }>
      {children}
    </Suspense>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <NavigationProvider>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<PageSuspense><Home /></PageSuspense>} />

            {/* Profile */}
            <Route path="/profile/about" element={<PageSuspense><AboutIndonesia /></PageSuspense>} />
            <Route path="/profile/daikin-group" element={<PageSuspense><DaikinGroup /></PageSuspense>} />
            <Route path="/profile/history" element={<PageSuspense><OurHistory /></PageSuspense>} />
            <Route path="/information/dealer" element={<PageSuspense><BecomeDealer /></PageSuspense>} />
            <Route path="/information/xperience-zone" element={<PageSuspense><XperienceZone /></PageSuspense>} />
            <Route path="/information/vrv-dealer" element={<Navigate to="/services/vrv-dealer" replace />} />
            <Route path="/services/vrv-dealer" element={<PageSuspense><VRVDealer /></PageSuspense>} />
            <Route path="/profile/technology" element={<PageSuspense><TechnologyOverview /></PageSuspense>} />
            <Route path="/profile/streamer" element={<PageSuspense><StreamerTechnology /></PageSuspense>} />
            <Route path="/solutions/fresh-pure-air" element={<PageSuspense><StreamerTechnology /></PageSuspense>} />
            <Route path="/products/fresh-pure-air" element={<PageSuspense><StreamerTechnology /></PageSuspense>} />
            <Route path="/profile/awards" element={<PageSuspense><AwardsCertifications /></PageSuspense>} />
            <Route path="/profile/tkdn" element={<PageSuspense><TKDN /></PageSuspense>} />
            <Route path="/profile/discovery" element={<PageSuspense><Discovery /></PageSuspense>} />

            {/* Products */}
            <Route path="/products" element={<PageSuspense><ProductsIndex /></PageSuspense>} />
            <Route path="/products/residential" element={<PageSuspense><ResidentialSolutions /></PageSuspense>} />
            <Route path="/products/residential/single-split" element={<PageSuspense><SingleSplitPage /></PageSuspense>} />
            <Route path="/products/residential/alpha-inverter" element={<PageSuspense><AlphaInverterPage /></PageSuspense>} />
            <Route path="/products/residential/single-split/alpha-inverter" element={<PageSuspense><AlphaInverterPage /></PageSuspense>} />
            <Route path="/products/single-split/alpha-inverter" element={<PageSuspense><AlphaInverterPage /></PageSuspense>} />
            <Route path="/products/residential/beta-inverter" element={<PageSuspense><BetaInverterPage /></PageSuspense>} />
            <Route path="/products/residential/single-split/beta-inverter" element={<PageSuspense><BetaInverterPage /></PageSuspense>} />
            <Route path="/products/single-split/beta-inverter" element={<PageSuspense><BetaInverterPage /></PageSuspense>} />
            <Route path="/products/residential/super-mini-split" element={<PageSuspense><SuperMiniSplitPage /></PageSuspense>} />
            <Route path="/products/residential/single-split/super-mini-split" element={<PageSuspense><SuperMiniSplitPage /></PageSuspense>} />
            <Route path="/products/single-split/super-mini-split" element={<PageSuspense><SuperMiniSplitPage /></PageSuspense>} />
            <Route path="/products/residential/multi-split" element={<PageSuspense><MultiSplitPage /></PageSuspense>} />
            <Route path="/products/residential/multi-split/multi-s-3-connection" element={<PageSuspense><MultiS3ConnectionPage /></PageSuspense>} />
            <Route path="/products/residential/multi-s-3-connection" element={<PageSuspense><MultiS3ConnectionPage /></PageSuspense>} />
            <Route path="/products/residential/multi-s-3" element={<PageSuspense><MultiS3ConnectionPage /></PageSuspense>} />
            <Route path="/products/multi-s-3-connection" element={<PageSuspense><MultiS3ConnectionPage /></PageSuspense>} />
            <Route path="/products/residential/air-purifier" element={<PageSuspense><AirPurifierPage /></PageSuspense>} />
            <Route path="/products/residential/air-purifier/mc80zvm7" element={<PageSuspense><MC80ZVM7Page /></PageSuspense>} />
            <Route path="/products/residential/mc80zvm7" element={<PageSuspense><MC80ZVM7Page /></PageSuspense>} />
            <Route path="/products/air-purifier/mc80zvm7" element={<PageSuspense><MC80ZVM7Page /></PageSuspense>} />
            <Route path="/products/mc80zvm7" element={<PageSuspense><MC80ZVM7Page /></PageSuspense>} />
            <Route path="/products/residential/vrv-home" element={<PageSuspense><VRVHomePage /></PageSuspense>} />
            <Route path="/products/residential/vrv-home-series" element={<PageSuspense><VRVHomePage /></PageSuspense>} />
            <Route path="/products/residential/vrv" element={<PageSuspense><VRVHomePage /></PageSuspense>} />
            <Route path="/products/vrv-home" element={<PageSuspense><VRVHomePage /></PageSuspense>} />
            <Route path="/products/residential/vrv-home/indoor-3di" element={<PageSuspense><Indoor3DiPage /></PageSuspense>} />
            <Route path="/products/residential/vrv-home/3di" element={<PageSuspense><Indoor3DiPage /></PageSuspense>} />
            <Route path="/products/residential/indoor-3di" element={<PageSuspense><Indoor3DiPage /></PageSuspense>} />
            <Route path="/products/vrv-home/indoor-3di" element={<PageSuspense><Indoor3DiPage /></PageSuspense>} />
            <Route path="/products/residential/multi-split/super-multi-nx" element={<PageSuspense><SuperMultiNXPage /></PageSuspense>} />
            <Route path="/products/residential/super-multi-nx" element={<PageSuspense><SuperMultiNXPage /></PageSuspense>} />
            <Route path="/products/residential/super-multi-nx-r32" element={<PageSuspense><SuperMultiNXPage /></PageSuspense>} />
            <Route path="/products/super-multi-nx" element={<PageSuspense><SuperMultiNXPage /></PageSuspense>} />
            <Route path="/products/super-multi-nx-r32" element={<PageSuspense><SuperMultiNXPage /></PageSuspense>} />
            <Route path="/products/commercial" element={<PageSuspense><CommercialSolutions /></PageSuspense>} />
            <Route path="/products/commercial/skyair" element={<PageSuspense><SkyAirPage /></PageSuspense>} />
            <Route path="/products/commercial/skyair/fcfg" element={<PageSuspense><SkyAirFCFGPage /></PageSuspense>} />
            <Route path="/products/commercial/vrv" element={<PageSuspense><VRVPage /></PageSuspense>} />
            <Route path="/products/commercial/vrv/vrv-6a" element={<PageSuspense><VRV6APage /></PageSuspense>} />
            <Route path="/products/commercial/packaged" element={<PageSuspense><PackagedACPage /></PageSuspense>} />
            <Route path="/products/accessories" element={<PageSuspense><Accessories /></PageSuspense>} />
            <Route path="/products/accessories/refrigerant" element={<PageSuspense><Refrigerant /></PageSuspense>} />
            <Route path="/products/accessories/pipa" element={<PageSuspense><PipaAC /></PageSuspense>} />
            <Route path="/products/accessories/insulasi" element={<PageSuspense><Insulasi /></PageSuspense>} />
            <Route path="/products/accessories/tools" element={<PageSuspense><RecommendTools /></PageSuspense>} />
            <Route path="/products/accessories/filter" element={<PageSuspense><AirFilterPage /></PageSuspense>} />
            <Route path="/products/accessories/smart-connection" element={<PageSuspense><SmartConnectionPage /></PageSuspense>} />
            <Route path="/products/accessories/others" element={<PageSuspense><OthersPage /></PageSuspense>} />
            <Route path="/products/spare-parts" element={<PageSuspense><SpareParts /></PageSuspense>} />
            <Route path="/products/e-catalogue" element={<PageSuspense><ECatalogue /></PageSuspense>} />
            <Route path="/products/daikin-app" element={<PageSuspense><DaikinApp /></PageSuspense>} />
            <Route path="/products/app" element={<PageSuspense><DaikinApp /></PageSuspense>} />
            <Route path="/products/perangkat-lunak" element={<PageSuspense><DaikinApp /></PageSuspense>} />
            <Route path="/virtual-tour" element={<PageSuspense><VirtualTour /></PageSuspense>} />
            <Route path="/products/:productSlug" element={<PageSuspense><ProductDetail /></PageSuspense>} />

            {/* Services */}
            <Route path="/services" element={<PageSuspense><ServicesIndex /></PageSuspense>} />
            <Route path="/services/ishop" element={<PageSuspense><IShop /></PageSuspense>} />
            <Route path="/services/ishop/dealer/:dealerId" element={<PageSuspense><IShopDealerDetail /></PageSuspense>} />
            <Route path="/services/ishop/:dealerId" element={<PageSuspense><IShopDealerDetail /></PageSuspense>} />
            <Route path="/services/proshop" element={<PageSuspense><ProShop /></PageSuspense>} />
            <Route path="/services/maintenance" element={<PageSuspense><ServiceMaintenance /></PageSuspense>} />
            <Route path="/services/service-center" element={<PageSuspense><ServiceCenter /></PageSuspense>} />
            <Route path="/services/warranty" element={<PageSuspense><WarrantySupport /></PageSuspense>} />
            <Route path="/services/general-services" element={<PageSuspense><GeneralServices /></PageSuspense>} />
            <Route path="/services/layanan-umum" element={<PageSuspense><GeneralServices /></PageSuspense>} />
            <Route path="/services/technical-data" element={<PageSuspense><TechnicalData /></PageSuspense>} />
            <Route path="/services/data-teknis" element={<Navigate to="/services/technical-data" replace />} />

            {/* Solutions */}
            <Route path="/solutions" element={<PageSuspense><SolutionsIndex /></PageSuspense>} />
            <Route path="/solutions/how-to-choose" element={<PageSuspense><HowToChoose /></PageSuspense>} />
            <Route path="/solutions/ac-recommendation" element={<PageSuspense><ACRecommendation /></PageSuspense>} />
            <Route path="/solutions/energy-efficiency" element={<PageSuspense><EnergyEfficiency /></PageSuspense>} />
            <Route path="/solutions/ac-calculator" element={<PageSuspense><ACCalculator /></PageSuspense>} />
            <Route path="/solutions/air-quality" element={<PageSuspense><IndoorAirQuality /></PageSuspense>} />
            <Route path="/solutions/maintenance-tips" element={<PageSuspense><MaintenanceTips /></PageSuspense>} />

            {/* Insights */}
            <Route path="/insights" element={<PageSuspense><InsightsIndex /></PageSuspense>} />
            <Route path="/insights/news" element={<PageSuspense><News /></PageSuspense>} />
            <Route path="/insights/news/:slug" element={<PageSuspense><NewsDetail /></PageSuspense>} />
            <Route path="/insights/promotions" element={<PageSuspense><Promotions /></PageSuspense>} />
            <Route path="/insights/promotions/:slug" element={<PageSuspense><PromotionDetail /></PageSuspense>} />
            <Route path="/insights/events" element={<PageSuspense><Events /></PageSuspense>} />
            <Route path="/insights/events/:slug" element={<PageSuspense><EventDetail /></PageSuspense>} />
            <Route path="/insights/training" element={<PageSuspense><TrainingCertification /></PageSuspense>} />
            <Route path="/insights/faq" element={<PageSuspense><FAQ /></PageSuspense>} />
            <Route path="/faq" element={<PageSuspense><FAQ /></PageSuspense>} />
            <Route path="/insights/technology/inverter" element={<PageSuspense><InverterDetail /></PageSuspense>} />
            <Route path="/insights/technology/heat-pump" element={<PageSuspense><HeatPumpDetail /></PageSuspense>} />
            <Route path="/insights/technology/r32" element={<PageSuspense><R32Detail /></PageSuspense>} />
            <Route path="/insights/technology/vrv" element={<PageSuspense><VrvDetail /></PageSuspense>} />
            <Route path="/insights/technology/ventilation" element={<PageSuspense><VentilationDetail /></PageSuspense>} />
            <Route path="/profile/csr" element={<PageSuspense><DaikinImpact /></PageSuspense>} />

            {/* Campaign */}
            <Route path="/campaign" element={<PageSuspense><CampaignIndex /></PageSuspense>} />
            <Route path="/campaign/keputusan-yang-tepat" element={<PageSuspense><KeputusanYangTepat /></PageSuspense>} />
            <Route path="/insights/keputusan-yang-tepat" element={<PageSuspense><KeputusanYangTepat /></PageSuspense>} />
            <Route path="/campaign/ideal-air" element={<PageSuspense><IdealAir /></PageSuspense>} />
            <Route path="/campaign/power-to-create" element={<PageSuspense><PowerToCreate /></PageSuspense>} />
            <Route path="/campaign/perfecting-air" element={<PageSuspense><PerfectingAirStories /></PageSuspense>} />

            {/* Standalone */}
            <Route path="/all-about" element={<PageSuspense><AllAbout /></PageSuspense>} />
            <Route path="/competition" element={<PageSuspense><Competition /></PageSuspense>} />
            <Route path="/careers" element={<PageSuspense><Careers /></PageSuspense>} />
            <Route path="/careers/:jobId" element={<PageSuspense><JobDetail /></PageSuspense>} />
            <Route path="/contact" element={<PageSuspense><Contact /></PageSuspense>} />
            <Route path="/privacy-policy" element={<PageSuspense><PrivacyPolicy /></PageSuspense>} />
            <Route path="/terms-condition" element={<PageSuspense><TermsConditions /></PageSuspense>} />
            <Route path="/terms-conditions" element={<PageSuspense><TermsConditions /></PageSuspense>} />
            <Route path="/flow-aktor-1" element={<PageSuspense><FlowAktor1 /></PageSuspense>} />
            <Route path="/flow-aktor-2" element={<PageSuspense><FlowAktor2 /></PageSuspense>} />
            <Route path="/flow-aktor-3" element={<PageSuspense><FlowAktor3 /></PageSuspense>} />
            <Route path="/flow-aktor-4" element={<PageSuspense><FlowAktor4 /></PageSuspense>} />

            {/* New Routes */}
            <Route path="/about/glance" element={<PageSuspense><Glance /></PageSuspense>} />
            <Route path="/about/achievements" element={<PageSuspense><Achievements /></PageSuspense>} />
            <Route path="/information/articles" element={<PageSuspense><Articles /></PageSuspense>} />
            <Route path="/information/solutions" element={<PageSuspense><InformationSolutions /></PageSuspense>} />
            <Route path="/information/carbon-neutrality" element={<PageSuspense><CSR /></PageSuspense>} />
            <Route path="/information/csr" element={<PageSuspense><CSR /></PageSuspense>} />
            <Route path="/information/portfolio" element={<PageSuspense><Portfolio /></PageSuspense>} />
            <Route path="/information/find-dealer" element={<PageSuspense><FindDealer /></PageSuspense>} />
            <Route path="/insights/research" element={<PageSuspense><Research /></PageSuspense>} />
            <Route path="/insights/reports" element={<PageSuspense><Reports /></PageSuspense>} />
            <Route path="/insights/technology/benefits" element={<PageSuspense><Benefits /></PageSuspense>} />
            <Route path="/insights/technology/ventilation" element={<PageSuspense><Ventilation /></PageSuspense>} />
            <Route path="/insights/technology/vrv" element={<PageSuspense><Vrv /></PageSuspense>} />
          </Route>

          {/* Standalone 404 Page (No Header / No Footer) */}
          <Route path="*" element={<PageSuspense><NotFound /></PageSuspense>} />
        </Routes>
      </AnimatePresence>
    </NavigationProvider>
  )
}
