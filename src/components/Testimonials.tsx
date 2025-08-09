import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from 'react'

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechScale Innovations",
    content: "SimpleCredit facilitated a $25M syndicated loan that enabled our international expansion. Their network of lenders and structured approach made the process seamless.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    position: "CFO, GreenEnergy Solutions",
    content: "The joint venture capital arranged through SimpleCredit was instrumental in launching our renewable energy project. Their expertise in aligning strategic partners was invaluable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "David Müller",
    position: "Director, EuroInfra Group",
    content: "We've worked with multiple capital advisors, but SimpleCredit's project financing solution for our infrastructure development was truly exceptional in terms of terms and structure.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
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

  return (
    <section className="py-20 px-6 bg-dark-900">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-primary-400">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from businesses that have successfully partnered with us for their capital needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-dark-700 p-8 rounded-lg border border-dark-600">
                    <div className="mb-6">
                      <p className="text-gray-300 italic text-lg">"{testimonial.content}"</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-dark-600 hover:bg-primary-500/10 hover:border-primary-500/30 transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${current === index ? 'bg-primary-500' : 'bg-dark-600'}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-dark-600 hover:bg-primary-500/10 hover:border-primary-500/30 transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials