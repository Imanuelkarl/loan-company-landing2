// components/Services.tsx
import { motion } from 'framer-motion';
import type { JSX } from 'react';
import { FiDollarSign, FiUsers, FiBriefcase, FiGlobe } from 'react-icons/fi';

// Define service interface
interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const services: Service[] = [
  {
    icon: <FiDollarSign className="w-8 h-8 text-primary-500" />,
    title: "Loan Facilitation & Syndication",
    description: "We connect borrowers and lenders, arrange business and commercial loans, and manage the full loan process — from sourcing and validation to documentation and disbursement Our team also monitors loan performance, handles settlements, and ensures smooth, compliant transactions.",
    delay: 100
  },
  {
    icon: <FiUsers className="w-8 h-8 text-primary-500" />,
    title: "Project Finance",
    description: "We assist clients in structuring and financing long-term projects through expert advisory and financial modeling. From planning to completion, we partner with you to secure funding and achieve your project goals efficiently.",
    delay: 200
  },
  {
    icon: <FiBriefcase className="w-8 h-8 text-primary-500" />,
    title: "Portfolio Management",
    description: "We select and evaluate top-performing portfolio managers through rigorous screening and performance reviews. Our process ensures your investments are managed by professionals who deliver consistent, high-quality results.",
    delay: 300
  },
  {
    icon: <FiGlobe className="w-8 h-8 text-primary-500" />,
    title: "Corporate Finance & Strategy",
    description: "We help businesses drive growth, profitability, and investor value through tailored corporate and financial strategies. Our services include business strategy, M&A advisory, and strategic planning to keep you ahead in a changing market.",
    delay: 400
  }
];

const Services: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-dark-800 flex items-center">
      <div className="container mx-auto w-full">
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
  );
};

export default Services;