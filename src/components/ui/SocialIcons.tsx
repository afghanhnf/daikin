import React from 'react'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export function TikTokIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.85 2.894 2.894 0 0 1-2.892-2.88 2.896 2.896 0 0 1 2.901-2.88c.277 0 .539.044.787.12v-3.52a6.371 6.371 0 0 0-.787-.049A6.333 6.333 0 0 0 3.15 15.65a6.336 6.336 0 0 0 6.336 6.336 6.337 6.337 0 0 0 6.336-6.336V9.088a8.214 8.214 0 0 0 4.821 1.554V7.185a4.834 4.834 0 0 1-1.054-.499z" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.2 1.25-1.95 1.41-.51.11-1.18.2-3.43-.73-2.88-1.19-4.74-4.12-4.88-4.31-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.12 1.01-2.41.27-.29.59-.36.79-.36.2 0 .39.01.56.01.19 0 .44-.07.69.53.25.6.86 2.09.93 2.24.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.29.77 1.27 1.65 2.05 1.13.99 2.09 1.3 2.38 1.45.29.15.46.12.63-.07.17-.19.73-.85.93-1.14.2-.29.39-.24.66-.14.27.1.1.72 2.15.86 2.29.14.14.24.22.28.29.04.07.04.41-.2.1.09z" />
    </svg>
  )
}

export interface SocialLinkItem {
  id: string
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const daikinSocialLinks: SocialLinkItem[] = [
  { id: 'facebook',  label: 'Facebook',  href: '#', icon: Facebook },
  { id: 'instagram', label: 'Instagram', href: '#', icon: Instagram },
  { id: 'tiktok',    label: 'TikTok',    href: '#', icon: TikTokIcon },
  { id: 'linkedin',  label: 'LinkedIn',  href: '#', icon: Linkedin },
  { id: 'youtube',   label: 'YouTube',   href: '#', icon: Youtube },
  { id: 'whatsapp',  label: 'WhatsApp',  href: '#', icon: WhatsAppIcon },
]
