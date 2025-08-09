import { motion } from 'framer-motion'
import { FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'

const Footer = () => {
  const links = [
    {
      title: "Services",
      items: [
        { name: "Loan Syndication", href: "#services" },
        { name: "Joint Venture Capital", href: "#services" },
        { name: "Project Financing", href: "#services" },
        { name: "International Funding", href: "#services" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#" },
        { name: "Our Process", href: "#process" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Disclaimer", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                SimpleCredit
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Strategic capital solutions for global businesses and large-scale projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {links.map((link, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">{link.title}</h4>
              <ul className="space-y-3">
                {link.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SimpleCredit. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            SimpleCredit is a financial consultancy and does not provide banking services.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer