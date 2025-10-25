import { motion } from 'framer-motion'
import { /*FiTwitter, FiLinkedin, FiFacebook,*/ FiMail, FiPhone, FiMapPin,/* FiArrowRight */} from 'react-icons/fi'

const Footer = () => {
  const links = [
    {
      title: "Services",
      items: [
        { name: "Loan Syndication", href: "/services" },
        { name: "Joint Venture Capital", href: "/services" },
        { name: "Project Financing", href: "/services" },
        { name: "International Funding", href: "/services" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Our Process", href: "/process" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Disclaimer", href: "/disclaimer" }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-[#000022] via-[#000011] to-[#000033] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Meridian Core Solutions
              </span>
            </motion.div>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Strategic capital solutions for global businesses and large-scale projects. 
              Empowering growth through innovative financial consulting and global funding partnerships.
            </p>
            
            
            {/* Newsletter Subscription */}
            {/*<motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-blue-200 font-semibold mb-3">Stay Updated</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-blue-800/50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-1"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>*/}

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-blue-200">
                <FiMapPin className="w-5 h-5 text-blue-300" />
                <span>S5 9LU<br />
                    12, Milnrow Road, Ecclesfield<br />
                    Sheffield, England</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <FiMail className="w-5 h-5 text-blue-300" />
                <span>contact@meridiancoresolutionsltd.com</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <FiPhone className="w-5 h-5 text-blue-300" />
                <span>+447438970276</span>
                <span>+447304489678</span>
              </div>
            </div>

            {/* Social Links */}
            {/*<div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="p-3 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700/50 text-blue-200 hover:text-white hover:bg-blue-700/50 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -2 }}
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-3 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700/50 text-blue-200 hover:text-white hover:bg-blue-700/50 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -2 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-3 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700/50 text-blue-200 hover:text-white hover:bg-blue-700/50 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -2 }}
              >
                <FiFacebook className="w-5 h-5" />
              </motion.a>
            </div>*/}
          </div>

          {/* Navigation Links */}
          {links.map((link, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-blue-600/30">
                {link.title}
              </h4>
              <ul className="space-y-4">
                {link.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-blue-200 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-blue-700/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Meridian Core Solutions LTD. All rights reserved.
          </p>
          <div className="text-center md:text-right">
            <p className="text-blue-300 text-sm mb-2">
              Meridian Core Solutions is a consultancy company and does not provide banking services.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </footer>
  )
}

export default Footer