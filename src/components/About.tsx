import { motion } from "framer-motion"

const About = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  })

  const values = [
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Extensive international network connecting businesses with opportunities worldwide."
    },
    {
      icon: "💡",
      title: "Strategic Insight",
      description: "Data-driven approaches that transform complex challenges into growth opportunities."
    },
    {
      icon: "⚡",
      title: "Rapid Execution",
      description: "Efficient processes that deliver results without compromising on quality or due diligence."
    },
    {
      icon: "🛡️",
      title: "Trust & Integrity",
      description: "Building lasting relationships based on transparency and ethical business practices."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Full-width Background Image */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Pioneering global financial solutions with expertise, integrity, and strategic innovation 
              to empower businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto space-y-24">
          
          {/* WHO WE ARE SECTION */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Text */}
            <motion.div {...fadeUp(0)} className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  Who We Are
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  About{" "}
                  <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
                    Meridian Core Solutions
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600">
                  Meridian Core Solutions is a premier global consulting firm that empowers enterprises through strategic
                  financing and international funding facilitation. We serve as the vital bridge connecting visionary 
                  businesses with discerning investors worldwide.
                </p>

                <p className="text-lg leading-relaxed text-gray-600">
                  Our expertise extends beyond traditional consulting — we combine deep financial acumen with global 
                  market intelligence to design sustainable funding structures and unlock new growth corridors for 
                  our partners.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-80 h-80 bg-blue-800/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                alt="Consulting team"
                className="rounded-2xl shadow-2xl border border-gray-200 hover:shadow-xl transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* OUR MISSION & VISION */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              {...fadeUp(0.2)}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white shadow-2xl"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To democratize access to global capital by providing innovative financial solutions that 
                empower businesses to achieve sustainable growth and create lasting impact in their industries.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.3)}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
            >
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted financial consultancy, recognized for transforming global 
                capital markets and enabling businesses to reach their full potential through strategic 
                partnerships and innovative funding solutions.
              </p>
            </motion.div>
          </div>

          {/* HOW WE ACHIEVE THIS SECTION */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Left: Text */}
            <motion.div {...fadeUp(0.4)} className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  Our Approach
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  How We Drive Global Growth
                </h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
                    Expert Financial Consulting
                  </h4>
                  <p className="text-gray-600">
                    We provide strategic, data-driven financial advisory to help businesses optimize funding
                    structures and attract high-value investors through comprehensive market analysis.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
                    Global Funding Network
                  </h4>
                  <p className="text-gray-600">
                    Through our extensive worldwide network, we connect enterprises with strategic partners, 
                    investors, and financial institutions across multiple continents and industries.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center">
                    <span className="w-3 h-3 bg-blue-800 rounded-full mr-3"></span>
                    Capital Facilitation
                  </h4>
                  <p className="text-gray-600">
                    We specialize in international loan syndication, equity partnerships, and bespoke financing
                    solutions to ensure capital flows where opportunity exists, driving sustainable growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              {...fadeUp(0.5)}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="Global business meeting"
                className="rounded-2xl shadow-2xl border border-gray-200 hover:shadow-xl transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* OUR VALUES */}
          <motion.div {...fadeUp(0.6)} className="text-center">
            <div className="space-y-4 mb-12">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Our Values
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                The Principles That Guide Us
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  {...fadeUp(0.7 + index * 0.1)}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-blue-200"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp(0.8)} className="text-center">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Financial Strategy?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Partner with Meridian Core Solutions to access world-class expertise and unlock new growth capital opportunities.
              </p>
              <button className="px-8 py-4 bg-white text-blue-800 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Discover Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About