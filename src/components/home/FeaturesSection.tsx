import { FEATURES } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 border-t border-white/5" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">
              stay in control
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Powerful features designed to help you save money and never miss a payment again.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl bg-background-secondary/50 border border-white/5 hover:border-primary/30 hover:bg-background-secondary transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/join" className="no-underline">
            <Button variant="primary" size="lg">
                Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}