import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-md text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                Get Started <FiArrowRight className="ml-2" />
              </a>
              <a
                href="#services"
                className="px-8 py-3 border border-primary-500 text-primary-400 rounded-md font-medium hover:bg-primary-500/10 transition-colors flex items-center justify-center"
              >
                Learn More
              </a>
            </motion.div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Business growth"
                  className="rounded-lg shadow-2xl border border-dark-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero