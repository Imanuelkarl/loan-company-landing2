import { motion } from 'framer-motion'
import { FiZap, FiBarChart2, FiLayers, FiAnchor } from 'react-icons/fi'

const markets = [
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "Startups & Early Stage",
    description: "Innovative companies seeking growth capital to scale operations and market reach."
  },
  {
    icon: <FiBarChart2 className="w-6 h-6" />,
    title: "Business Expansion",
    description: "Established businesses requiring capital for geographic or product line expansion."
  },
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: "Infrastructure Projects",
    description: "Large-scale infrastructure developments requiring structured project financing."
  },
  {
    icon: <FiAnchor className="w-6 h-6" />,
    title: "Energy & Natural Resources",
    description: "Capital-intensive energy projects including renewable energy initiatives."
  }
]

const Markets = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
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
              Our Markets
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Specialized financial solutions tailored to diverse sectors and industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Markets Content */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          {/* Header Section */}
          <motion.div 
            {...fadeUp(0)}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Target <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">Markets</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We serve diverse sectors with tailored capital solutions to meet specific industry requirements and growth objectives.
            </p>
          </motion.div>

          {/* Markets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {markets.map((market, index) => (
              <motion.div
                key={index}
                {...fadeUp(0.1 + index * 0.1)}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600">
                    {market.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{market.title}</h3>
                <p className="text-gray-600 leading-relaxed">{market.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Markets