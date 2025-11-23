import WaitlistForm from '@/components/ui/WaitlistForm'
import { STATS } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to take control?
        </h2>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
          Join {STATS.waitlistCount} others who are saving money on subscriptions. Get early access to Requr.
        </p>

        {/* Waitlist Form */}
        <WaitlistForm
          placeholder="Enter your email address"
          buttonText="Join Waitlist"
          className="max-w-xl mx-auto mb-12"
        />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{STATS.waitlistCount}</div>
            <div className="text-sm text-text-muted">People on waitlist</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{STATS.averageSavings}</div>
            <div className="text-sm text-text-muted">Average monthly savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{STATS.trackedSubscriptions}</div>
            <div className="text-sm text-text-muted">Subscriptions tracked</div>
          </div>
        </div>
      </div>
    </section>
  )
}