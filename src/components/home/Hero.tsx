'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero() {
  const word1Ref = useRef<HTMLSpanElement>(null)
  const word2Ref = useRef<HTMLSpanElement>(null)
  const word3Ref = useRef<HTMLSpanElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    // Blob animations
    gsap.to(blob1Ref.current, {
      rotation: 5,
      scale: 1.05,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to(blob2Ref.current, {
      rotation: -3,
      scale: 1.03,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to(blob3Ref.current, {
      rotation: 4,
      scale: 1.04,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // Text and button animations
    tl.fromTo(
      word1Ref.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(
      word2Ref.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(
      word3Ref.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(
      dotRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.4, ease: 'back.out(2)' },
      '-=0.2'
    )
    .fromTo(
      subtextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.3'
    )
    .fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    )
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-[#1D2034]">
      {/* Top Left Blob */}
      <div 
        ref={blob1Ref}
        className="absolute top-0 left-0 w-[600px] sm:w-[800px] md:w-[1100px] h-[600px] sm:h-[800px] md:h-[1100px] -translate-x-[45%] -translate-y-[45%]"
      >
        <Image
          src="/images/blob-1.svg"
          alt=""
          fill
          className="object-contain opacity-60"
          priority
        />
      </div>

      {/* Bottom Right Blobs */}
      <div 
        ref={blob2Ref}
        className="absolute bottom-0 right-0 w-[500px] sm:w-[700px] md:w-[900px] h-[500px] sm:h-[700px] md:h-[900px] translate-x-[42%] translate-y-[38%]"
      >
        <Image
          src="/images/blob-2.svg"
          alt=""
          fill
          className="object-contain opacity-60"
        />
      </div>
      
      <div 
        ref={blob3Ref}
        className="absolute bottom-0 right-0 w-[480px] sm:w-[650px] md:w-[850px] h-[480px] sm:h-[650px] md:h-[850px] translate-x-[45%] translate-y-[42%]"
      >
        <Image
          src="/images/blob-3.svg"
          alt=""
          fill
          className="object-contain opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center pt-8 sm:pt-12 md:pt-8">
        <h1 className="text-[56px] leading-[0.95] sm:text-[80px] md:text-[120px] lg:text-[140px] font-black mb-6 sm:mb-8 text-white tracking-tight font-circular px-2 overflow-hidden">
          <span ref={word1Ref} className="inline-block">
            Manage your
          </span>
          <br />
          <span ref={word2Ref} className="inline-block">
            Subscr
            <span className="relative inline-block">
              ı
              <span 
                ref={dotRef}
                className="absolute left-[57%] -translate-x-1/2 bg-[#6FCF97] rounded-full"
                style={{
                  top: '0.12em',
                  width: '0.15em',
                  height: '0.15em'
                }}
              />
            </span>
            pt
          </span>
          <span ref={word3Ref} className="inline-block">
            ions
          </span>
        </h1>

        <p 
          ref={subtextRef}
          className="text-[15px] sm:text-[16px] md:text-[17px] text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-normal px-4 leading-relaxed"
        >
          Keep track and manage all your subscriptions in one place. Stop paying for services you don&rsquo;t use.
        </p>

        <Link href="/join" ref={buttonRef} className="inline-block">
          <button className="bg-[#181414] hover:bg-[#0F0F0F] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-lg">
            Join our waitlist
          </button>
        </Link>
      </div>
    </section>
  )
}