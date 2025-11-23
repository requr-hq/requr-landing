import Hero from '@/components/home/Hero'
import ServiceLogos from '@/components/home/ServiceBannner'
import Features from '@/components/home/FeaturesSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceLogos />
      <Features />
      <Footer />
    </main>
  )
}