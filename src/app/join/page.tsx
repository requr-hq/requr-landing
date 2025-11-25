import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Waitlist - Requr',
  description: 'Join the Requr waitlist and be the first to know when we launch.',
}

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#2C3449] flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Join Our Waitlist
        </h1>
        <p className="text-lg sm:text-xl text-white/70 mb-12">
          Be the first to know when Requr launches. Get early access and exclusive benefits.
        </p>
        
        {/* Waitlist Form */}
        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <button
              type="submit"
              className="bg-black hover:bg-black/90 text-white px-8 py-4 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </div>
        </form>

        <p className="text-white/50 text-sm mt-8">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}