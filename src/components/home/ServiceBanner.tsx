'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'

export default function ServiceBanner() {
  const services = [
    { name: 'Netflix', logo: '/images/subscription-netflix.png' },
    { name: 'Spotify', logo: '/images/subscription-spotify.png' },
    { name: 'Apple', logo: '/images/subscription-apple.png' },
    { name: 'Hulu', logo: '/images/subscription-hulu.png' },
    { name: 'Youtube', logo: '/images/subscription-youtube.png' },
    { name: 'Xbox', logo: '/images/subscription-xbox.png' },
  ]

  return (
    <section className="py-20 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text-secondary">
          Track subscriptions from
        </h2>

        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#0f0f1a"
          gradientWidth={100}
          pauseOnHover={true}
        >
          {services.map((service, index) => (
            <div
              key={`${service.name}-${index}`}
              className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={service.logo}
                alt={service.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>

        <p className="text-center text-text-muted text-sm mt-8">
          and 100+ more services
        </p>
      </div>
    </section>
  )
}