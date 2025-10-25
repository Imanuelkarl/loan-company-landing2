import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              How we protect and handle your information at Meridian Core Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            {...fadeUp(0)}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                  Last Updated: {new Date().getFullYear()}
                </span>
                <p className="text-gray-600 text-lg">
                  At Meridian Core Solutions, we are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <div className="space-y-3 text-gray-600">
                    <p>We collect minimal information necessary to provide our services:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Contact information (name, email, phone number) provided through our contact forms</li>
                      <li>Company information relevant to your inquiry</li>
                      <li>Communication history and correspondence</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <div className="space-y-3 text-gray-600">
                    <p>Your information is used solely for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Responding to your inquiries and providing requested services</li>
                      <li>Communicating about our services and updates</li>
                      <li>Improving our website and service offerings</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-600">
                    We implement appropriate security measures to protect your personal information. 
                    However, no method of transmission over the internet is 100% secure, and we cannot 
                    guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Disclosure</h2>
                  <p className="text-gray-600">
                    We do not sell, trade, or otherwise transfer your personally identifiable information 
                    to third parties unless we provide users with advance notice. This does not include 
                    website hosting partners and other parties who assist us in operating our website, 
                    conducting our business, or serving our users, so long as those parties agree to 
                    keep this information confidential.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <div className="space-y-3 text-gray-600">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to processing of your personal information</li>
                      <li>Request transfer of your data to another service</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us at:{' '}
                    <a href="mailto:doctornadiz@gmail.com" className="text-blue-600 hover:text-blue-800">
                      doctornadiz@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy