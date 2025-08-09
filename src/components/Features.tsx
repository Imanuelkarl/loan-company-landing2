import { motion } from 'framer-motion'
import { FiDollarSign, FiClock, FiPercent, FiCheckCircle } from 'react-icons/fi'

const features = [
  {
    icon: <FiDollarSign className="w-8 h-8" />,
    title: 'Competitive Rates',
    description: 'Enjoy some of the lowest interest rates in the industry.',
  },
  {
    icon: <FiClock className="w-8 h-8" />,
    title: 'Quick Approval',
    description: 'Get approved in as little as 24 hours with our fast process.',
  },
  {
    icon: <FiPercent className="w-8 h-8" />,
    title: 'Flexible Terms',
    description: 'Choose repayment terms that work best for your situation.',
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprises or hidden charges.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Our Loan Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide financial solutions tailored to meet your specific needs
            with transparency and efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features