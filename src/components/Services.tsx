import { motion } from 'framer-motion'
import { FiDollarSign, FiUsers, FiBriefcase, FiGlobe } from 'react-icons/fi'

const services = [
  {
    icon: <FiDollarSign className="w-8 h-8 text-primary-500" />,
    title: "Loan Syndication",
    description: "Structured debt solutions through collaborative lending from multiple financial institutions for large-scale financing needs.",
    delay: 100
  },
  {
    icon: <FiUsers className="w-8 h-8 text-primary-500" />,
    title: "Joint Venture Capital",
    description: "Strategic equity partnerships that align investor expertise with your business objectives for mutual growth.",
    delay: 200
  },
  {
    icon: <FiBriefcase className="w-8 h-8 text-primary-500" />,
    title: "Project Financing",
    description: "Tailored funding solutions for capital-intensive projects with structured risk allocation and repayment.",
    delay: 300
  },
  {
    icon: <FiGlobe className="w-8 h-8 text-primary-500" />,
    title: "International Funding",
    description: "Cross-border capital solutions leveraging global investor networks for your expansion needs.",
    delay: 400
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-dark-800">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary-400">Specialized Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver comprehensive financial solutions tailored to your unique requirements and growth objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              whileHover={{ y: -10 }}
              className="bg-dark-700 p-8 rounded-lg border border-dark-600 hover:border-primary-500/30 transition-all"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-600">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services