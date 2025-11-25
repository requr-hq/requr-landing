import Link from 'next/link'

export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 bg-[#1D2034]" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content - Phone Mockups */}
          <div className="relative flex gap-8 justify-center md:justify-start">
            {/* First Phone */}
            <div className="relative w-[280px] h-[560px]">
              {/* Outer border (black) */}
              <div className="absolute inset-0 bg-black rounded-[48px] p-[3px]">
                {/* Inner border layer */}
                <div className="w-full h-full bg-[#2E3854] rounded-[45px] p-[2px]">
                  {/* Phone screen */}
                  <div className="w-full h-full bg-[#2E3854] rounded-[43px] overflow-hidden">
                    {/* App screenshot placeholder */}
                    <div className="w-full h-full flex items-center justify-center">
                      {/* <Image 
                        src="/images/app-screen-1.png" 
                        alt="App Screen 1"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[18px] z-10" />
            </div>

            {/* Second Phone */}
            <div className="relative w-[280px] h-[560px]">
              {/* Outer border (black) */}
              <div className="absolute inset-0 bg-black rounded-[48px] p-[3px]">
                {/* Inner border layer */}
                <div className="w-full h-full bg-[#2E3854] rounded-[45px] p-[2px]">
                  {/* Phone screen */}
                  <div className="w-full h-full bg-[#2E3854] rounded-[43px] overflow-hidden">
                    {/* App screenshot placeholder */}
                    <div className="w-full h-full flex items-center justify-center">
                      {/* <Image 
                        src="/images/app-screen-2.png" 
                        alt="App Screen 2"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[18px] z-10" />
            </div>
          </div>

          {/* Right Content - Text */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Keep track of
              <br />
              all subscriptions
              <br />
              <span className="text-white/40">even free trails</span>
            </h2>
            
            <Link href="/join" className="inline-block mt-8">
              <button className="bg-black hover:bg-black/90 text-white px-10 py-4 rounded-lg text-base font-medium transition-colors">
                Join our waitlist
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}