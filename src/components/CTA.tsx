import { motion, AnimatePresence } from 'framer-motion'
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiCheck, FiX } from 'react-icons/fi'

const CTA = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      emailjs.sendForm('service_3vqal0q', 'template_n2v37gm', formRef.current, 'dCwMP_zmgPxrQl_Bj')
        .then(() => {
          setIsSubmitting(false);
          setShowSuccess(true);
          (e.target as HTMLFormElement).reset();
          
          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        }, () => {
          setIsSubmitting(false);
          alert('Failed to send. Please try again later.');
        });
    }
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  })

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Success Message Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200"
            >
              <div className="text-center">
                {/* Success Icon Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.2 
                  }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: 0.4 
                    }}
                  >
                    <FiCheck className="w-10 h-10 text-green-600" />
                  </motion.div>
                </motion.div>

                {/* Success Text */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  Message Sent Successfully!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-600 mb-6"
                >
                  Thank you for your inquiry. Our team will get back to you within soon.
                </motion.p>

                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center mx-auto"
                >
                  Close
                  <FiX className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div 
          {...fadeUp(0)}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">Explore</span> Your Financing Options?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact our team of capital advisory specialists to discuss your project requirements and financing solutions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            {...fadeUp(0.1)}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <FiMail className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Email Us</h4>
                    <p className="text-gray-600">contact@meridiancoresolutionsltd.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <FiPhone className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Call Us</h4>
                    <p className="text-gray-600">+447438970276</p>
                    <p className="text-gray-600">+447304489678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <FiMapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Headquarters</h4>
                    <p className="text-gray-600">S5 9LU<br />
                    12, Milnrow Road, Ecclesfield<br />
                    Sheffield, England</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            {...fadeUp(0.2)}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name='company'
                    id="company"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your company"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    name='message'
                    rows={4}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell us about your financing needs..."
                  ></textarea>
                </div>
                
                <motion.button
                  {...fadeUp(0.3)}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Submit Inquiry 
                      <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA