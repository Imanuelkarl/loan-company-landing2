import { motion } from "framer-motion"

const About = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  })

  return (
    <section id="about" className="relative py-28 px-6 bg-dark-950 text-gray-300 overflow-hidden">
      <div className="container mx-auto space-y-32">
        
        {/* WHO WE ARE SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Text */}
          <motion.div {...fadeUp(0)} className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Meridian Core Solutions
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-400">
              Meridian Core Solutions is a global consulting firm that empowers enterprises through strategic
              financing and international funding facilitation. We connect businesses to investors, design
              sustainable loan structures, and help them access the global capital they need to grow.
            </p>

            <p className="text-lg leading-relaxed text-gray-400">
              We go beyond traditional consulting — combining financial expertise with global reach to help our
              partners unlock new growth opportunities and strengthen their market presence.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="md:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary-700/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
              alt="Consulting team"
              className="rounded-2xl shadow-2xl border border-dark-700 hover:shadow-primary-500/20 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* HOW WE ACHIEVE THIS SECTION */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          {/* Left: Text */}
          <motion.div {...fadeUp(0.2)} className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-semibold text-primary-400">
              How We Drive Global Growth
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-1">Expert Financial Consulting</h4>
                <p className="text-gray-400">
                  We provide strategic, data-driven financial advisory to help businesses optimize funding
                  structures and attract high-value investors.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">Global Funding Network</h4>
                <p className="text-gray-400">
                  Through our worldwide network, we connect enterprises with strategic partners, investors, and
                  financial institutions across multiple continents.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">Capital Facilitation</h4>
                <p className="text-gray-400">
                  We specialize in international loan syndication, equity partnerships, and bespoke financing
                  solutions to ensure capital flows where opportunity exists.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            {...fadeUp(0.3)}
            className="md:w-1/2 relative"
          >
            <div className="absolute -top-8 -right-8 w-56 h-56 bg-primary-500/20 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Global business meeting"
              className="rounded-2xl shadow-2xl border border-dark-700 hover:shadow-primary-500/20 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* VALUE PROPOSITION SECTION */}
        <motion.div
          {...fadeUp(0.4)}
          className="bg-dark-800/70 backdrop-blur-sm border border-dark-700 p-10 rounded-2xl md:w-11/12 mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-primary-400 mb-3">Our Value Proposition</h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We empower organizations with strategic insight and access to global capital, enabling sustainable
            expansion and resilience. By leveraging our deep financial expertise and international partnerships,
            we transform vision into measurable growth.
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-8 text-center">
            {[
              { value: "15+", label: "Global Partners" },
              { value: "$200M+", label: "Funds Facilitated" },
              { value: "10+", label: "Countries Served" },
            ].map((stat, i) => (
              <div key={i} className="min-w-[120px]">
                <h4 className="text-3xl font-bold text-primary-400">{stat.value}</h4>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.6)} className="text-center mt-16">
          <p className="text-xl font-semibold text-white mb-6">
            Partner with Meridian Core Solutions to access world-class expertise and unlock new growth capital.
          </p>
          <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300">
            Discover Our Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
