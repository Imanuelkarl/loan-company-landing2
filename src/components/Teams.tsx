// components/Teams.tsx
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  roleDescription: string;
  linkedin?: string;
  email?: string;
}

const Teams = () => {
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

  const handleImageLoad = (name: string) => {
    setLoadedImages(prev => ({ ...prev, [name]: true }));
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Craig Morrison",
      role: "Chief Consultant",
      image: "src/assets/Craig Morrison.jpg",
      roleDescription: "Oversees client advisory services and strategic financial consulting, ensuring tailored solutions for business growth and global market expansion.",
      linkedin: "https://linkedin.com/in/craig-morrison",
      email: "craig@meridiancoresolutions.com",
    },
    {
      name: "Manuel Guzzman",
      role: "Chief Compliance Officer / SOP Coordinator",
      image: "src/assets/manuel_guzzman.jpg",
      roleDescription: "Manages regulatory compliance and standard operating procedures, maintaining the highest quality standards across all financial operations.",
      linkedin: "https://linkedin.com/in/manuel-guzzman",
      email: "manuel@meridiancoresolutions.com",
    },
  ];

  return (
    <section id="teams" className="py-20 px-6 bg-dark-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text">
              Leadership Team
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At <span className="text-primary-400 font-semibold">Meridian Core Solutions</span>, 
            our leadership brings together strategy, innovation, and dedication to 
            drive sustainable growth and client success.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary-900/20"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Container - Natural Aspect Ratio */}
                <div className="md:w-2/5 relative">
                  <div className="relative w-full h-80 md:h-auto">
                    {/* Loading Skeleton */}
                    {!loadedImages[member.name] && (
                      <div className="absolute inset-0 bg-dark-700 animate-pulse rounded-l-xl"></div>
                    )}
                    
                    <img
                      src={member.image}
                      alt={member.name}
                      onLoad={() => handleImageLoad(member.name)}
                      className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                        loadedImages[member.name] ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent md:bg-gradient-to-r md:from-dark-900/50 md:via-transparent"></div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-400 font-semibold mb-3 text-lg">
                      {member.role}
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                      {member.roleDescription}
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="flex space-x-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-2 hover:bg-primary-500/10 rounded-lg"
                        title="LinkedIn Profile"
                      >
                        <FiLinkedin size={22} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-2 hover:bg-primary-500/10 rounded-lg"
                        title="Send Email"
                      >
                        <FiMail size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Partner With Our Visionary Team</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We combine experience and creativity to craft innovative solutions for our clients. 
              Let's collaborate to turn your vision into measurable success.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
            >
              Start Your Journey
              <FiArrowRight className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;