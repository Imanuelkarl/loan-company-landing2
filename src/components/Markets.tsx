import { motion } from 'framer-motion'
import { FiZap, FiBarChart2, FiLayers, FiAnchor } from 'react-icons/fi'

const markets = [
  {
    icon: <FiZap className="w-6 h-6 text-primary-500" />,
    title: "Startups & Early Stage",
    description: "Innovative companies seeking growth capital to scale operations and market reach."
  },
  {
    icon: <FiBarChart2 className="w-6 h-6 text-primary-500" />,
    title: "Business Expansion",
    description: "Established businesses requiring capital for geographic or product line expansion."
  },
  {
    icon: <FiLayers className="w-6 h-6 text-primary-500" />,
    title: "Infrastructure Projects",
    description: "Large-scale infrastructure developments requiring structured project financing."
  },
  {
    icon: <FiAnchor className="w-6 h-6 text-primary-500" />,
    title: "Energy & Natural Resources",
    description: "Capital-intensive energy projects including renewable energy initiatives."
  }
]

const Markets = () => {
  return (
    <section id="markets" className="py-20 px-6 bg-dark-800">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Target <span className="text-primary-400">Markets</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We serve diverse sectors with tailored capital solutions to meet specific industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              whileHover={{ scale: 1.03 }}
              className="bg-dark-700 p-8 rounded-lg border border-dark-600 hover:border-primary-500/30 transition-all"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-dark-600">
                  {market.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{market.title}</h3>
              <p className="text-gray-400">{market.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Markets