import WaitlistForm from '@/components/ui/WaitlistForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
          <span className="text-sm text-text-secondary">
            Join the revolution of subscription management
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Manage your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent-cyan animate-gradient bg-[length:200%_auto]">
            Subscriptions
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Keep track and manage all your subscriptions in one place. Stop paying for services you don&rsquo;t use.
        </p>

        {/* CTA Form */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <WaitlistForm
            placeholder="Enter your email address"
            buttonText="Join our waitlist"
            className="max-w-xl mx-auto"
          />
          <p className="mt-4 text-sm text-text-muted">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}