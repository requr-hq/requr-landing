import Link from 'next/link'
import Image from 'next/image'

export default function PreviewSection() {
  return (
    <section className="py-32 px-6 bg-[#7B85A8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Preview your
              <br />
              subscriptions
              <br />
              <span className="text-white/50">all in one place</span>
            </h2>
            
            <Link href="/join" className="inline-block mt-8">
              <button className="bg-black hover:bg-black/90 text-white px-10 py-4 rounded-lg text-base font-medium transition-colors">
                Join our waitlist
              </button>
            </Link>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center md:justify-end">
            {/* Phone Frame */}
            <div className="relative w-[380px] h-[620px]">
              {/* Outer border (black) */}
              <div className="absolute inset-0 bg-black rounded-[48px] p-[3px]">
                {/* Inner border layer */}
                <div className="w-full h-full bg-[#8A94B5] rounded-[45px] p-[2px]">
                  {/* Phone screen */}
                  <div className="w-full h-full bg-[#8A94B5] rounded-[43px] overflow-hidden">
                    {/* You can add your app screenshot here */}
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Placeholder for app screenshot */}
                      {/* <Image 
                        src="/images/app-preview.png" 
                        alt="App Preview"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[140px] h-[28px] bg-black rounded-b-[20px] z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}