export default function Features() {
  const features = [
    {
      title: 'Preview your subscriptions',
      subtitle: 'all in one place',
      description: 'See all your active subscriptions at a glance',
    },
    {
      title: 'Keep track of',
      subtitle: 'all subscriptions',
      description: 'Never miss a payment or renewal date',
    },
    {
      title: 'Have an idea of',
      subtitle: 'how much you spend',
      description: 'on subscriptions monthly and yearly',
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {features.map((feature, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-3xl md:text-4xl text-gray-400 mb-6">
                {feature.subtitle}
              </p>
              <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
                Join our waitlist
              </button>
            </div>
            
            <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}