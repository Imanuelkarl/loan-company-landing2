import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-dark-900 text-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
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
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                alt="Consulting team"
                className="rounded-lg shadow-2xl border border-dark-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            About <span className="text-primary-500">Meridian Core Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg leading-relaxed mb-6"
          >
            Meridian Core Solutions is a UK-based business and financial consulting firm dedicated to helping organizations and individuals reach their full potential.
            We connect investors and enterprises globally, facilitating funding, partnerships, and loan syndications that drive real growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg leading-relaxed mb-8"
          >
            Our goal is to bridge the gap between ideas and capital—empowering businesses to thrive in a fast-evolving world economy through expert guidance, strategy, and financial innovation.
          </motion.p>

          {/* Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary-400 mb-2">Our Vision</h3>
              <p className="text-base text-gray-400">
                To be a global leader in financial consultancy, connecting people, ideas, and capital to unlock limitless growth opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary-400 mb-2">Our Mission</h3>
              <p className="text-base text-gray-400">
                To empower businesses through innovative financial strategies, expert advisory, and seamless access to global funding and investment opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
