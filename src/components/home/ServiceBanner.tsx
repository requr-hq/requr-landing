'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'

export default function ServiceBanner() {
  const row1 = [
    { name: 'Netflix', logo: '/images/netflix-logo.png', text: 'Netflix' },
    { name: 'Spotify', logo: '/images/spotify-logo.png', text: 'Spotify' },
    { name: 'Hulu', logo: '/images/hulu-logo.png', text: 'Hulu' },
  ]

  const row2 = [
    { name: 'YouTube Music', logo: '/images/youtube-music-logo.png', text: 'YouTube Music' },
    { name: 'Apple Music', logo: '/images/apple-music-logo.png', text: 'Apple music' },
    { name: 'Xbox', logo: '/images/xbox-logo.png', text: 'Xbox' },
  ]

  const row3 = [
    { name: 'Playstation Plus', logo: '/images/playstation-logo.png', text: 'PlayStation Plus' },
    { name: 'Apple TV+', logo: '/images/apple-tv-logo.png', text: 'Apple TV+' },
    { name: 'LinkedIn Premium', logo: '/images/linkedin-logo.png', text: 'LinkedIn Premium' },
    { name: 'YouTube', logo: '/images/youtube-logo.png', text: 'YouTube' },
  ]

  const ServiceItem = ({ service }: { service: typeof row1[0] }) => (
    <div className="flex items-center gap-4 mx-8 group cursor-pointer transition-all duration-300">
      <Image
        src={service.logo}
        alt={service.name}
        width={80}
        height={80}
        className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <span 
        className="text-3xl md:text-5xl font-medium text-black transition-all duration-300 group-hover:font-bold group-hover:scale-110"
        style={{
          WebkitTextStroke: '0px transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.webkitTextStroke = '1.5px rgba(0,0,0,0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.webkitTextStroke = '0px transparent'
        }}
      >
        {service.text}
      </span>
      <span className="text-2xl text-gray-400 ml-4">◦</span>
    </div>
  )

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 text-black">
          Subscriptions like
        </h2>

        {/* Row 1 - Left Direction */}
        <div className="mb-6">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
            direction="left"
          >
            {[...row1, ...row1, ...row1].map((service, index) => (
              <ServiceItem key={`row1-${service.name}-${index}`} service={service} />
            ))}
          </Marquee>
        </div>

        {/* Row 2 - Right Direction */}
        <div className="mb-6">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
            direction="right"
          >
            {[...row2, ...row2, ...row2].map((service, index) => (
              <ServiceItem key={`row2-${service.name}-${index}`} service={service} />
            ))}
          </Marquee>
        </div>

        {/* Row 3 - Left Direction */}
        <div className="mb-12">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
            direction="left"
          >
            {[...row3, ...row3, ...row3].map((service, index) => (
              <ServiceItem key={`row3-${service.name}-${index}`} service={service} />
            ))}
          </Marquee>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#1A1D2E] hover:bg-[#14161F] text-white px-10 py-4 rounded-lg text-base font-medium transition-colors shadow-lg">
            Join our waitlist
          </button>
        </div>
      </div>
    </section>
  )
}