'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mx-6 sm:mx-8 md:mx-10 px-4 py-3 rounded-xl transition-all duration-300 group cursor-pointer hover:bg-white hover:shadow-lg hover:border hover:border-gray-200">
      <Image
        src={service.logo}
        alt={service.name}
        width={120}
        height={120}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain flex-shrink-0"
      />
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap group-hover:[text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
        {service.text}
      </span>
      <span className="text-xl sm:text-2xl md:text-3xl text-gray-400 ml-2 sm:ml-3 md:ml-4 flex-shrink-0">◦</span>
    </div>
  )

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-12 sm:mb-16 md:mb-20 text-black px-4">
          Subscriptions like
        </h2>

        {/* Row 1 - Left Direction */}
        <div className="mb-6 sm:mb-7 md:mb-8">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
            direction="left"
          >
            {[...row1, ...row1, ...row1, ...row1].map((service, index) => (
              <ServiceItem key={`row1-${service.name}-${index}`} service={service} />
            ))}
          </Marquee>
        </div>

        {/* Row 2 - Right Direction */}
        <div className="mb-6 sm:mb-7 md:mb-8">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
            direction="right"
          >
            {[...row2, ...row2, ...row2, ...row2].map((service, index) => (
              <ServiceItem key={`row2-${service.name}-${index}`} service={service} />
            ))}
          </Marquee>
        </div>

        {/* Row 3 - Left Direction */}
        <div className="mb-10 sm:mb-12 md:mb-16">
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
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <Link href="/join">
            <button className="bg-[#181414] hover:bg-[#0F0F0F] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-lg">
              Join our waitlist
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}