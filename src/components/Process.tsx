import { motion } from 'framer-motion'
import { FiSearch, FiCheckCircle, FiFileText, FiTrendingUp, FiArrowRight } from 'react-icons/fi'

const processSteps = [
  {
    icon: <FiSearch className="w-6 h-6" />,
    title: "Needs Identification",
    description: "We conduct a thorough analysis of your financial requirements and project specifics to understand your unique capital needs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: "Documentation & Proposal",
    description: "Preparation of comprehensive investment memorandums, financial models, and strategic proposals tailored to investor requirements.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: "Investor Vetting & Matching",
    description: "Strategic alignment with suitable capital partners and syndicate members through our extensive global network.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Deal Execution & Management",
    description: "Ongoing monitoring, reporting, and strategic guidance to ensure successful capital deployment and project execution.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
]

const Process = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section with Full-width Background Image */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
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
              Our Process
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A structured, transparent approach to ensure efficient capital raising and optimal investor alignment for your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Process Content */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          {/* Header Section */}
          <motion.div 
            {...fadeUp(0)}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">Streamlined Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach designed to ensure efficient capital raising, optimal investor alignment, and successful project execution.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeUp(0.1 + index * 0.1)}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative group">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-900/10 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-800/10 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-2xl shadow-2xl border border-gray-200 w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 text-blue-600">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Step {index + 1} of {processSteps.length}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline Visualization - Mobile Friendly */}
          <motion.div 
            {...fadeUp(0.6)}
            className="mt-20 bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Process Timeline</h3>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center md:w-1/4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 transform translate-x-12 w-24 h-0.5 bg-blue-200 mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            {...fadeUp(0.8)}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Begin our structured process today and let us guide you toward successful capital raising and strategic growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-800 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Start the Process <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  View Services
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Process