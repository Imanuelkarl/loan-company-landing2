import type { JSX } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiUsers, FiBriefcase, FiGlobe, FiArrowRight } from 'react-icons/fi';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <FiDollarSign className="w-8 h-8 text-blue-600" />,
    title: "Loan Facilitation & Syndication",
    description: "We connect borrowers and lenders, arrange business and commercial loans, and manage the full loan process from sourcing to disbursement.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: [
      "Business & commercial loan arrangement",
      "Full process management",
      "Documentation & compliance",
      "Performance monitoring"
    ]
  },
  {
    icon: <FiUsers className="w-8 h-8 text-blue-600" />,
    title: "Project Finance",
    description: "We assist clients in structuring and financing long-term projects through expert advisory and financial modeling.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: [
      "Project structuring advisory",
      "Financial modeling",
      "Funding strategy",
      "Implementation support"
    ]
  },
  {
    icon: <FiBriefcase className="w-8 h-8 text-blue-600" />,
    title: "Portfolio Management",
    description: "We select and evaluate top-performing portfolio managers through rigorous screening and performance reviews.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: [
      "Manager selection & evaluation",
      "Performance analysis",
      "Risk assessment",
      "Investment monitoring"
    ]
  },
  {
    icon: <FiGlobe className="w-8 h-8 text-blue-600" />,
    title: "Corporate Finance & Strategy",
    description: "We help businesses drive growth, profitability, and investor value through tailored corporate and financial strategies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: [
      "Business strategy development",
      "M&A advisory",
      "Financial planning",
      "Growth strategy"
    ]
  }
];

const Services: React.FC = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')"
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
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive financial solutions designed to drive your business growth and maximize opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Content */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          {/* Header Section */}
          <motion.div 
            {...fadeUp(0)}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">Specialized Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored financial solutions designed to meet your unique requirements and drive sustainable growth objectives.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-24">
            {services.map((service, index) => (
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
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl border border-gray-200 w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                  >
                    Discuss your needs 
                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            {...fadeUp(0.6)}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Financial Strategy?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our specialized services can drive your business growth and financial success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-800 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Get Started <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Learn About Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;