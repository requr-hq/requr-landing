import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#2C3449]">
      {/* Top Left Blob */}
      <div className="absolute top-0 left-0 w-[1100px] h-[1100px] -translate-x-[45%] -translate-y-[45%]">
        <Image
          src="/images/blob-1.svg"
          alt=""
          fill
          className="object-contain opacity-60"
        />
      </div>

      {/* Bottom Right Blobs */}
      <div className="absolute bottom-0 right-0 w-[900px] h-[900px] translate-x-[42%] translate-y-[38%]">
        <Image
          src="/images/blob-2.svg"
          alt=""
          fill
          className="object-contain opacity-60"
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-[850px] h-[850px] translate-x-[45%] translate-y-[42%]">
        <Image
          src="/images/blob-3.svg"
          alt=""
          fill
          className="object-contain opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center pt-8">
        <h1 className="text-[120px] leading-[0.95] md:text-[140px] font-black mb-8 text-white tracking-tight font-circular -ml-2">
          Manage your
          <br />
          Subscr<span className="relative inline-block">ı<span className="absolute top-10 left-5 -translate-x-1/2 w-[0.14em] h-[0.14em] bg-[#6FCF97] rounded-full -translate-y-[0.15em]"></span></span>ptions
        </h1>

        <p className="text-[17px] text-white/70 mb-12 max-w-2xl mx-auto font-normal">
          Keep track and manage all your subscriptions in one place. Stop paying for services you don&rsquo;t use.
        </p>

        <Link href="/join" className="inline-block">
          <button className="bg-[#1A1D2E] hover:bg-[#14161F] text-white px-10 py-4 rounded-lg text-base font-medium transition-colors shadow-lg">
            Join our waitlist
          </button>
        </Link>
      </div>
    </section>
  )
}