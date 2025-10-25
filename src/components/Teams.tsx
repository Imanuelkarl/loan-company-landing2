import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import JamesWhitmore from '../assets/james_whitmore.jpg';
import EleanorBriggs from '../assets/eleanor-briggs.jpg';
import HarrietLawson from '../assets/hariett_lawson.jpg';
import OliverKent from '../assets/oliver_kent.jpg';
import SophieTurner from '../assets/sophie_tuner.jpg';
import { NavLink } from "react-router-dom";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  roleDescription: string;
  linkedin?: string;
  email?: string;
}

interface BoardMember {
  name: string;
  position: string;
}

const Teams = () => {
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

  const handleImageLoad = (name: string) => {
    setLoadedImages(prev => ({ ...prev, [name]: true }));
  };

  const leadershipTeam: TeamMember[] = [
    {
      name: "James Whitmore",
      role: "Chief Executive Officer",
      image: JamesWhitmore,
      roleDescription: "Provides strategic leadership and vision for the company, driving growth initiatives and overseeing all corporate operations and business development.",
      linkedin: "https://linkedin.com/in/james-whitmore",
      email: "james@meridiancoresolutions.com",
    },
    {
      name: "Eleanor Briggs",
      role: "Chief Financial Officer",
      image: EleanorBriggs,
      roleDescription: "Manages financial strategy, risk management, and capital allocation to ensure sustainable growth and financial stability across all operations.",
      linkedin: "https://linkedin.com/in/eleanor-briggs",
      email: "eleanor@meridiancoresolutions.com",
    },
    {
      name: "Harriet Lawson",
      role: "Director of Legal Services",
      image: HarrietLawson,
      roleDescription: "Oversees all legal matters, corporate governance, and regulatory affairs, ensuring compliance with international laws and business regulations.",
      linkedin: "https://linkedin.com/in/harriet-lawson",
      email: "harriet@meridiancoresolutions.com",
    },
    {
      name: "Oliver Kent",
      role: "Director of Operations",
      image: OliverKent,
      roleDescription: "Leads operational excellence, process optimization, and service delivery across all departments to maximize efficiency and client satisfaction.",
      linkedin: "https://linkedin.com/in/oliver-kent",
      email: "oliver@meridiancoresolutions.com",
    },
    {
      name: "Sophie Turner",
      role: "Compliance Officer",
      image: SophieTurner,
      roleDescription: "Ensures regulatory compliance, develops compliance frameworks, and monitors adherence to industry standards and internal policies.",
      linkedin: "https://linkedin.com/in/sophie-turner",
      email: "sophie@meridiancoresolutions.com",
    }
  ];

  const boardMembers: BoardMember[] = [
    { name: "Richard Montgomery", position: "Chairman" },
    { name: "Victoria Chen", position: "Independent Director" },
    { name: "Marcus Reynolds", position: "Non-Executive Director" },
    { name: "Craig Morrison", position: "Board Member" },
    { name: "Manuel Guzman", position: "Board Member" },
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section with Full-width Background Image */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
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
              Our Team
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Meet the experienced professionals driving our success and delivering exceptional financial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Team Content */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          {/* Header Section */}
          <motion.div 
            {...fadeUp(0)}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At Meridian Core Solutions, our leadership brings together strategy, innovation, and dedication to drive sustainable growth and client success.
            </p>
          </motion.div>

          {/* Leadership Team Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                {...fadeUp(0.1 + index * 0.1)}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative h-80">
                    {/* Loading Skeleton */}
                    {!loadedImages[member.name] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div>
                      <NavLink to={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline hover:text-blue-600 transition-colors duration-300" >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        </NavLink>
                        <p className="text-blue-600 font-semibold mb-3">
                          {member.role}
                        </p>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.roleDescription}
                      </p>
                    </div>
                    
                    {/* Contact Links */}
                    {/*<div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex space-x-4">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                          >
                            LinkedIn
                          </a>
                        )}
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                          >
                            Email
                          </a>
                        )}
                      </div>
                    </div>*/}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Board of Directors Section */}
          <motion.div 
            {...fadeUp(0.5)}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4">
                Governance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Board of Directors
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our board provides strategic oversight and guidance, bringing diverse expertise and industry knowledge to steer our company's vision.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {boardMembers.map((member, ) => (
                  <div
                    key={member.name}
                    className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {member.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            {...fadeUp(0.6)}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Partner With Our Visionary Team
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                We combine experience and creativity to craft innovative solutions for our clients. 
                Let's collaborate to turn your vision into measurable success.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-800 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                Start Your Journey
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Teams;