// components/Services.tsx - SIMPLE VERSION
import type { JSX } from 'react';
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
    icon: <FiDollarSign className="w-8 h-8 text-primary-500" />,
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
    icon: <FiUsers className="w-8 h-8 text-primary-500" />,
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
    icon: <FiBriefcase className="w-8 h-8 text-primary-500" />,
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
    icon: <FiGlobe className="w-8 h-8 text-primary-500" />,
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
  return (
    <section id="services" className="py-20 px-6 bg-dark-800">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text">Specialized Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your unique requirements and growth objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-2xl border border-dark-600 w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center border border-dark-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center text-primary-400 font-medium hover:text-primary-300 transition-colors"
                >
                  Discuss your needs <FiArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Financial Strategy?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our specialized services can drive your business growth and financial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                Get Started <FiArrowRight className="ml-2" />
              </a>
              <a
                href="/about"
                className="px-8 py-3 border border-primary-500 text-primary-400 rounded-lg font-medium hover:bg-primary-500/10 transition-colors flex items-center justify-center"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;