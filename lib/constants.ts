export const APP_NAME = 'Requr'
export const APP_DESCRIPTION = 'Track all your subscriptions in one place'
export const APP_URL = 'https://requr.co'

export const CONTACT_EMAIL = 'hello@requr.co'

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/requrhq',
  instagram: 'https://instagram.com/requrhq',
  github: 'https://github.com/requr-hq',
}

export const SERVICES = [
  { name: 'Netflix', icon: '📺' },
  { name: 'Spotify', icon: '🎵' },
  { name: 'Apple Music', icon: '🎧' },
  { name: 'Xbox', icon: '🎮' },
  { name: 'Google One', icon: '☁️' },
  { name: 'Hulu', icon: '📺' },
  { name: 'Minecraft', icon: '🎮' },
  { name: 'Disney+', icon: '🎬' },
] as const

export const FEATURES = [
  {
    title: 'Keep track of all subscriptions',
    description: 'Even the free trials you signed up for and forgot.',
    icon: '📊',
  },
  {
    title: 'Never miss a payment again',
    description: 'Get notified before your card is charged.',
    icon: '🔔',
  },
  {
    title: 'Smart insights',
    description: 'See exactly where your money goes each month.',
    icon: '💡',
  },
] as const

export const STATS = {
  waitlistCount: '10,000+',
  averageSavings: '$142.90',
  trackedSubscriptions: '50,000+',
} as const

export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '/blog' },
] as const