import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function PreviewSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Preview your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">
                subscriptions
              </span>
              <br />
              all in one place
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Get a clear overview of your monthly spending. See all your subscriptions, track renewal dates, and identify services you no longer use.
            </p>
            <Button variant="secondary" size="lg">
              <Link href="/join">Join our waitlist</Link>
            </Button>
          </div>

          {/* Right Content - Mock Dashboard */}
          <div className="relative">
            <div className="bg-background-secondary rounded-2xl p-6 border border-white/10 shadow-2xl">
              {/* Dashboard Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-muted text-sm">Total Monthly Spend</span>
                  <span className="text-accent-green text-sm font-semibold">+12%</span>
                </div>
                <div className="text-4xl font-bold text-white">$142.90</div>
              </div>

              {/* Mock Subscription Cards */}
              <div className="space-y-3">
                {[
                  { name: 'Netflix Premium', price: '$19.99', color: '#E50914', renewal: '2 days' },
                  { name: 'Spotify Duo', price: '$14.99', color: '#1DB954', renewal: '5 days' },
                  { name: 'Adobe Creative Cloud', price: '$54.99', color: '#FF0000', renewal: '12 days' },
                ].map((sub) => (
                  <div
                    key={sub.name}
                    className="flex items-center justify-between p-4 bg-background rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: sub.color }}
                      >
                        <span className="text-white text-lg">📺</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{sub.name}</div>
                        <div className="text-text-muted text-xs">Renew in {sub.renewal}</div>
                      </div>
                    </div>
                    <div className="text-white font-semibold">{sub.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}