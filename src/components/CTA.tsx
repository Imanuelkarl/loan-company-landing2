import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const CTA = () => {
  
  const formRef = useRef<HTMLFormElement>(null);
   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm('service_u0uf3u7', 'template_n2v37gm', formRef.current, 'dCwMP_zmgPxrQl_Bj')
        .then(() => {
          alert('Message sent successfully!');
          (e.target as HTMLFormElement).reset(); // clear form
        }, () => {
          alert('Failed to send. Please try again later.');
        });
    }
  };
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-dark-800 to-dark-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-primary-400">Explore</span> Your Financing Options?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact our team of capital advisory specialists to discuss your project requirements and financing solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiMail className="w-5 h-5 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-gray-400">doctornadiz@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiPhone className="w-5 h-5 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiMapPin className="w-5 h-5 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Headquarters</h4>
                  <p className="text-gray-400">123 Financial District, New York, NY 10005</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="bg-dark-700 p-8 rounded-lg border border-dark-600">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name='company'
                    id="company"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                    placeholder="Your company"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    name='message'
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                    placeholder="Tell us about your financing needs..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-md text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  Submit Inquiry <FiArrowRight className="ml-2" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA