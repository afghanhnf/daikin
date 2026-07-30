import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface TimelineEvent {
  title: string
  date?: string
  image?: string // Deprecated, use images
  images?: string[]
}

interface TimelineItem {
  year: string | number
  title?: string
  description?: string
  category?: string
  image?: string
  events?: TimelineEvent[]
}

interface MilestoneTimelineProps {
  items: TimelineItem[]
  className?: string
}

export function MilestoneTimeline({ items, className }: MilestoneTimelineProps) {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null)

  return (
    <>
      <div className={cn("relative max-w-4xl mx-auto py-12", className)}>
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-24">
          {items.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={index} className="relative flex items-center md:justify-center">
                {/* Year Bubble */}
                <div className="absolute left-4 md:left-1/2 w-16 h-16 bg-white border-4 border-daikin-blue rounded-full flex items-center justify-center font-bold text-daikin-blue shadow-lg transform -translate-x-1/2 z-10">
                  {item.year}
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={cn(
                    "w-full ml-16 md:ml-0 md:w-[45%] bg-white rounded-2xl shadow-card p-6 border border-gray-100",
                    isEven ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  )}
                >
                  {item.category && (
                    <span className="inline-block px-3 py-1 bg-daikin-blue/10 text-daikin-blue text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                      {item.category}
                    </span>
                  )}
                  
                  {item.image && (
                    <div className="mb-4 overflow-hidden rounded-xl h-48 bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  {item.title && (
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2">
                      {item.title}
                    </h3>
                  )}
                  
                  {item.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.events && item.events.length > 0 && (
                    <div className="space-y-4 mt-4 text-left">
                      {item.events.map((ev, i) => {
                        // Support both legacy image and new images array
                        const displayImages = ev.images || (ev.image ? [ev.image] : [])
                        
                        return (
                          <div key={i} className={cn(
                            "flex w-full items-center gap-4 border-daikin-blue/30 py-2",
                            isEven ? "md:flex-row-reverse md:border-r-2 md:pr-4 md:border-l-0 border-l-2 pl-4 flex-row" : "flex-row border-l-2 pl-4"
                          )}>
                            <div className={cn("flex flex-col gap-1 flex-1", isEven ? "md:items-end items-start" : "items-start")}>
                              {ev.date && <span className="text-xs font-bold text-daikin-blue uppercase tracking-wider">{ev.date}</span>}
                              <span className="text-gray-700 font-medium">{ev.title}</span>
                            </div>
                            
                            {/* Circular Avatars */}
                            {displayImages.length > 0 && (
                              <div 
                                className="flex -space-x-3 shrink-0 cursor-pointer group hover:scale-105 transition-transform" 
                                onClick={() => setSelectedImages(displayImages)}
                              >
                                {displayImages.slice(0, 3).map((img, imgIdx) => (
                                  <img 
                                    key={imgIdx}
                                    src={img} 
                                    alt="Dokumentasi"
                                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100 relative z-[1]"
                                    style={{ zIndex: 3 - imgIdx }}
                                  />
                                ))}
                                {displayImages.length > 3 && (
                                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shadow-sm relative z-0">
                                    +{displayImages.length - 3}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Image Slider Popup Modal */}
      <AnimatePresence>
        {selectedImages && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedImages(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-md z-[60]"
              onClick={() => setSelectedImages(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImages.length === 1 ? (
                <img 
                  src={selectedImages[0]} 
                  alt="Detail" 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full relative group">
                  <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    effect="fade"
                    pagination={{ clickable: true }}
                    navigation={{ nextEl: '.popup-next', prevEl: '.popup-prev' }}
                    loop={selectedImages.length > 1}
                    className="w-full h-full"
                  >
                    {selectedImages.map((img, idx) => (
                      <SwiperSlide key={idx} className="flex items-center justify-center h-full">
                        <img 
                          src={img} 
                          alt={`Detail ${idx + 1}`} 
                          className="w-full h-full object-contain"
                        />
                      </SwiperSlide>
                    ))}
                    
                    <button className="popup-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 border border-white/20">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="popup-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 border border-white/20">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </Swiper>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
