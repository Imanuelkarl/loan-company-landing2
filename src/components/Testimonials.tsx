import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { useState } from 'react'

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechScale Innovations",
    content: "Meridian Core Solutions facilitated a $25M syndicated loan that enabled our international expansion. Their network of lenders and structured approach made the process seamless.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "CFO, GreenEnergy Solutions",
    content: "The joint venture capital arranged through Meridian Core Solutions was instrumental in launching our renewable energy project. Their expertise in aligning strategic partners was invaluable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "David Müller",
    position: "Director, EuroInfra Group",
    content: "We've worked with multiple financial consultants, but Meridian Core Solutions' project financing solution for our infrastructure development was truly exceptional in terms of terms and structure.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5
  }
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  })

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div 
          {...fadeUp(0)}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have successfully partnered with us for their financial solutions and capital needs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    {...fadeUp(0.1 + index * 0.1)}
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Rating Stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="mb-6">
                      <p className="text-gray-600 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                    </div>
                    
                    {/* Client Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-blue-600 font-medium">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-4 rounded-full border border-gray-300 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-800 transition-colors" />
            </button>
            
            <div className="flex items-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'bg-blue-800 w-8' 
                      : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-4 rounded-full border border-gray-300 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <FiChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-800 transition-colors" />
            </button>
          </div>
        </div>

        {/* Trust Indicator */}
        <motion.div
          {...fadeUp(0.6)}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-100">
            <div className="flex -space-x-2 mr-4">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-blue-800 font-medium">
              Trusted by industry leaders worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials