import { motion } from 'framer-motion'

const TermsOfService = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Guidelines for using Meridian Core Solutions' services and website.
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
                  Effective Date: {new Date().getFullYear()}
                </span>
                <p className="text-gray-600 text-lg">
                  Please read these Terms of Service carefully before using our website and services.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-600">
                    By accessing and using Meridian Core Solutions' website and services, you accept and 
                    agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
                  <p className="text-gray-600">
                    Meridian Core Solutions provides financial consulting services including loan facilitation, 
                    project finance, portfolio management, and corporate finance strategy. All services are 
                    subject to separate agreements and terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
                  <div className="space-y-3 text-gray-600">
                    <p>Permission is granted to temporarily use our website for personal, non-commercial 
                    transitory viewing only. This is the grant of a license, not a transfer of title, 
                    and under this license you may not:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose</li>
                      <li>Attempt to decompile or reverse engineer any software</li>
                      <li>Remove any copyright or other proprietary notations</li>
                      <li>Transfer the materials to another person or "mirror" the materials</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                  <p className="text-gray-600">
                    The materials on Meridian Core Solutions' website are provided on an 'as is' basis. 
                    Meridian Core Solutions makes no warranties, expressed or implied, and hereby disclaims 
                    and negates all other warranties including, without limitation, implied warranties or 
                    conditions of merchantability, fitness for a particular purpose, or non-infringement 
                    of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
                  <p className="text-gray-600">
                    In no event shall Meridian Core Solutions or its suppliers be liable for any damages 
                    (including, without limitation, damages for loss of data or profit, or due to business 
                    interruption) arising out of the use or inability to use the materials on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Materials</h2>
                  <p className="text-gray-600">
                    The materials appearing on Meridian Core Solutions' website could include technical, 
                    typographical, or photographic errors. We do not warrant that any of the materials 
                    on its website are accurate, complete or current.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Links</h2>
                  <p className="text-gray-600">
                    Meridian Core Solutions has not reviewed all of the sites linked to its website and 
                    is not responsible for the contents of any such linked site. The inclusion of any 
                    link does not imply endorsement by Meridian Core Solutions of the site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
                  <p className="text-gray-600">
                    Meridian Core Solutions may revise these terms of service for its website at any time 
                    without notice. By using this website you are agreeing to be bound by the then current 
                    version of these terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                  <p className="text-gray-600">
                    These terms and conditions are governed by and construed in accordance with the laws 
                    of England and Wales and you irrevocably submit to the exclusive jurisdiction of the 
                    courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-600">
                    If you have any questions about these Terms of Service, please contact us at:{' '}
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

export default TermsOfService