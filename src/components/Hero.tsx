import { motion } from 'framer-motion'
import { FiArrowRight, FiShield, FiGlobe, FiTrendingUp } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Meridian Core Solutions LTD.{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Global Growth
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              Empowering businesses with expert financial consulting and global funding solutions.
              We connect investors and enterprises through strategic financing, partnerships, and loan facilitation worldwide.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <FiShield className="text-primary-400 text-sm" />
                </div>
                <span className="text-gray-300">Trusted Financial Advisory</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <FiGlobe className="text-primary-400 text-sm" />
                </div>
                <span className="text-gray-300">Global Network Access</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <FiTrendingUp className="text-primary-400 text-sm" />
                </div>
                <span className="text-gray-300">Strategic Growth Solutions</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-md text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                Get Started <FiArrowRight className="ml-2" />
              </a>
              <a
                href="/services"
                className="px-8 py-3 border border-primary-500 text-primary-400 rounded-md font-medium hover:bg-primary-500/10 transition-colors flex items-center justify-center"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right Content - Organized Images */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-6">
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="col-span-2 relative"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-700 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Business growth and strategy"
                  className="rounded-xl shadow-2xl border border-dark-700 w-full h-64 object-cover"
                />
              </motion.div>

              {/* Supporting Images */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Global business partnerships"
                  className="rounded-xl shadow-lg border border-dark-600 w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent rounded-xl flex items-end p-4">
                  <span className="text-white text-sm font-medium">Global Partnerships</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Financial consulting"
                  className="rounded-xl shadow-lg border border-dark-600 w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent rounded-xl flex items-end p-4">
                  <span className="text-white text-sm font-medium">Financial Expertise</span>
                </div>
              </motion.div>
            </div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 p-4 bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-600"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <FiTrendingUp className="text-primary-400 text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Proven Methodology</h4>
                  <p className="text-gray-400 text-sm">Strategic approach to global financial solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero