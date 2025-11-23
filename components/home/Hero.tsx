import WaitlistForm from './WaitlistForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold">requr</h2>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Manage your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Subscriptions
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Keep track and manage all your subscriptions in one place, requr
        </p>

        {/* Waitlist Form */}
        <WaitlistForm />
      </div>
    </section>
  )
}