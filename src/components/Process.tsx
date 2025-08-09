import { motion } from 'framer-motion'
import { FiSearch, FiCheckCircle, FiFileText, FiTrendingUp } from 'react-icons/fi'

const processSteps = [
  {
    icon: <FiSearch className="w-6 h-6" />,
    title: "Needs Identification",
    description: "We conduct a thorough analysis of your financial requirements and project specifics."
  },
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: "Documentation & Proposal",
    description: "Preparation of comprehensive investment memorandums and financial models."
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: "Investor Vetting & Matching",
    description: "Strategic alignment with suitable capital partners and syndicate members."
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Deal Execution & Management",
    description: "Ongoing monitoring and reporting to ensure successful capital deployment."
  }
]

const Process = () => {
  return (
    <section id="process" className="py-20 px-6 bg-dark-900">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary-400">Streamlined Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured approach to ensure efficient capital raising and optimal investor alignment.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-700 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className="flex flex-col md:flex-row items-center md:items-start"
              >
                {/* For even items (left side) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 flex md:justify-start justify-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white relative">
                        {step.icon}
                        <span className="absolute -bottom-8 text-xs font-semibold text-primary-400 md:hidden">
                          Step {index + 1}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12 flex md:justify-end justify-center order-1 md:order-none">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white relative">
                        {step.icon}
                        <span className="absolute -bottom-8 text-xs font-semibold text-primary-400 md:hidden">
                          Step {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-0 md:order-none">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process