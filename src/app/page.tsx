import Hero from '@/components/home/Hero'
import ServiceBanner from '@/components/home/ServiceBanner'
import PreviewSection from '@/components/home/PreviewSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceBanner />
      <PreviewSection />
      <FeaturesSection />
      <CTASection />
    </>
  )
}