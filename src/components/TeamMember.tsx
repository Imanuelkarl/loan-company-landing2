import { motion } from "framer-motion";
import { FiArrowLeft, FiLinkedin, FiMail } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Import all team member images
import JamesWhitmore from '../assets/james_whitmore.jpg';
import EleanorBriggs from '../assets/eleanor-briggs.jpg';
import HarrietLawson from '../assets/hariett_lawson.jpg';
import OliverKent from '../assets/oliver_kent.jpg';
import SophieTurner from '../assets/sophie_tuner.jpg';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  roleDescription: string;
  detailedBio: string;
  linkedin?: string;
  email?: string;
  education?: string[];
  experience?: string[];
  specialties?: string[];
}

const TeamMemberDetail = () => {
  const { memberName } = useParams<{ memberName: string }>();
  const navigate = useNavigate();
  const [loadedImage, setLoadedImage] = useState(false);
  const [member, setMember] = useState<TeamMember | null>(null);

  // Mock data - replace with your actual team member details
  const teamMembers: TeamMember[] = [
    {
      name: "James Whitmore",
      role: "Chief Executive Officer",
      image: JamesWhitmore,
      roleDescription: "Provides strategic leadership and vision for the company, driving growth initiatives and overseeing all corporate operations and business development.",
      detailedBio: `James Whitmore brings over 15 years of executive leadership experience in the financial services industry. As our CEO, he has been instrumental in shaping Meridian Core Solutions' strategic direction and driving our global expansion initiatives.

Under James' leadership, the company has achieved remarkable growth, expanding our service offerings across three continents while maintaining our commitment to exceptional client service. His visionary approach combines deep industry knowledge with innovative thinking to deliver sustainable value for our clients and stakeholders.

Prior to founding Meridian Core Solutions, James held senior positions at several Fortune 500 financial institutions, where he developed expertise in corporate strategy, mergers and acquisitions, and international market development. He is a frequent speaker at industry conferences and is passionate about mentoring the next generation of financial leaders.`,
      linkedin: "https://linkedin.com/in/james-whitmore",
      email: "james@meridiancoresolutions.com",
      education: [
        "MBA, Harvard Business School",
        "Bachelor of Science in Finance, Wharton School of Business"
      ],
      experience: [
        "15+ years in executive leadership",
        "Former Senior Vice President at Global Financial Partners",
        "Board Member of Financial Innovation Council"
      ],
      specialties: ["Corporate Strategy", "Business Development", "International Expansion", "Mergers & Acquisitions"]
    },
    {
      name: "Eleanor Briggs",
      role: "Chief Financial Officer",
      image: EleanorBriggs,
      roleDescription: "Manages financial strategy, risk management, and capital allocation to ensure sustainable growth and financial stability across all operations.",
      detailedBio: `Eleanor Briggs is a seasoned financial executive with extensive experience in financial management, risk assessment, and strategic planning. As CFO, she oversees all financial operations and plays a critical role in shaping the company's financial future.

With a career spanning over 12 years in financial leadership, Eleanor has developed a reputation for implementing robust financial controls and driving operational efficiency. Her expertise in capital allocation and risk management has been pivotal in guiding Meridian Core Solutions through periods of rapid growth while maintaining financial stability.

Before joining our team, Eleanor served as Director of Finance at a leading investment firm, where she managed a multi-billion dollar portfolio and implemented financial systems that improved reporting accuracy by 40%. She is known for her analytical rigor and her ability to translate complex financial data into actionable business insights.`,
      linkedin: "https://linkedin.com/in/eleanor-briggs",
      email: "eleanor@meridiancoresolutions.com",
      education: [
        "Master of Professional Accounting, University of Chicago",
        "CPA Certification",
        "Bachelor of Arts in Economics, Stanford University"
      ],
      experience: [
        "12+ years in financial leadership",
        "Former Director of Finance at Sterling Investments",
        "CFO of the Year Finalist 2022"
      ],
      specialties: ["Financial Strategy", "Risk Management", "Capital Allocation", "Financial Reporting"]
    },
    {
      name: "Harriet Lawson",
      role: "Director of Legal Services",
      image: HarrietLawson,
      roleDescription: "Oversees all legal matters, corporate governance, and regulatory affairs, ensuring compliance with international laws and business regulations.",
      detailedBio: `Harriet Lawson brings a wealth of legal expertise and regulatory knowledge to her role as Director of Legal Services. With a background in corporate law and international compliance, she ensures that Meridian Core Solutions operates with the highest standards of legal and ethical integrity.

Harriet's comprehensive understanding of international business law has been essential in navigating the complex regulatory landscape of global financial services. She has successfully led the company through multiple international expansions while ensuring full compliance with local and international regulations.

Prior to joining our organization, Harriet practiced law at a prestigious international firm, specializing in corporate governance and regulatory compliance for financial institutions. Her proactive approach to legal risk management and her ability to anticipate regulatory changes have saved the company from potential legal challenges and positioned us for sustainable growth.`,
      linkedin: "https://linkedin.com/in/harriet-lawson",
      email: "harriet@meridiancoresolutions.com",
      education: [
        "Juris Doctor, Yale Law School",
        "Bachelor of Arts in Political Science, Columbia University",
        "Certified Compliance Professional"
      ],
      experience: [
        "10+ years in legal and compliance roles",
        "Former Partner at Harrison & Lowe LLP",
        "Admitted to New York and International Bar Associations"
      ],
      specialties: ["Corporate Law", "Regulatory Compliance", "International Business Law", "Risk Mitigation"]
    },
    {
      name: "Oliver Kent",
      role: "Director of Operations",
      image: OliverKent,
      roleDescription: "Leads operational excellence, process optimization, and service delivery across all departments to maximize efficiency and client satisfaction.",
      detailedBio: `Oliver Kent is an operations leader with a proven track record of driving operational excellence and process improvement across complex organizations. As Director of Operations, he is responsible for optimizing our service delivery and ensuring that we consistently exceed client expectations.

Oliver's operational expertise has been instrumental in scaling our operations to meet growing client demands while maintaining the high quality standards that define Meridian Core Solutions. He has implemented lean methodologies that have improved operational efficiency by 35% and reduced client onboarding time by 50%.

Before joining our team, Oliver led operations at a major financial technology company, where he managed cross-functional teams and implemented systems that supported a 300% growth in transaction volume. His hands-on leadership style and commitment to continuous improvement have created a culture of excellence throughout the organization.`,
      linkedin: "https://linkedin.com/in/oliver-kent",
      email: "oliver@meridiancoresolutions.com",
      education: [
        "Master of Business Administration, MIT Sloan",
        "Bachelor of Science in Industrial Engineering, Georgia Tech",
        "Six Sigma Black Belt Certification"
      ],
      experience: [
        "14+ years in operations management",
        "Former Head of Operations at FinTech Innovations Inc.",
        "Operations Excellence Award Recipient 2021"
      ],
      specialties: ["Process Optimization", "Service Delivery", "Operational Strategy", "Quality Management"]
    },
    {
      name: "Sophie Turner",
      role: "Compliance Officer",
      image: SophieTurner,
      roleDescription: "Ensures regulatory compliance, develops compliance frameworks, and monitors adherence to industry standards and internal policies.",
      detailedBio: `Sophie Turner is a dedicated compliance professional with extensive experience in developing and implementing comprehensive compliance frameworks. As our Compliance Officer, she ensures that Meridian Core Solutions adheres to all regulatory requirements and maintains the highest standards of ethical conduct.

Sophie's meticulous approach to compliance has been crucial in navigating the evolving regulatory landscape of the financial services industry. She has developed robust monitoring systems that proactively identify potential compliance issues, allowing the company to address concerns before they escalate.

Her background includes roles at major financial institutions where she specialized in anti-money laundering (AML) compliance and regulatory reporting. Sophie's expertise in interpreting complex regulations and her ability to implement practical compliance solutions have made her an invaluable asset to our organization and our clients.`,
      linkedin: "https://linkedin.com/in/sophie-turner",
      email: "sophie@meridiancoresolutions.com",
      education: [
        "Master of Laws in Financial Regulation, Georgetown University",
        "Bachelor of Science in Business Administration, UCLA",
        "Certified Anti-Money Laundering Specialist (CAMS)"
      ],
      experience: [
        "8+ years in compliance roles",
        "Former Senior Compliance Analyst at Global Trust Bank",
        "Regulatory Compliance Committee Chair"
      ],
      specialties: ["Regulatory Compliance", "AML/KYC", "Compliance Frameworks", "Risk Assessment"]
    }
  ];

  useEffect(() => {
    // Smooth scroll to top when component loads
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Find the team member based on the URL parameter
    const foundMember = teamMembers.find(m => 
      m.name.toLowerCase().replace(/\s+/g, '-') === memberName
    );
    setMember(foundMember || null);

    // Set page title when member is found
    if (foundMember) {
      document.title = `${foundMember.name} - ${foundMember.role} | Meridian Core Solutions`;
    } else {
      document.title = "Team Member Not Found | Meridian Core Solutions";
    }

    // Clean up function to reset title when component unmounts
    return () => {
      document.title = "Meridian Core Solutions";
    };
  }, [memberName]);

  const handleImageLoad = () => {
    setLoadedImage(true);
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  });

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
          <button 
            onClick={() => navigate('/team')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Team
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto w-full"
          >
            <button
              onClick={() => navigate('/team')}
              className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300 mb-6"
            >
              <FiArrowLeft className="mr-2" />
              Back to Team
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {member.name}
            </h1>
            <p className="text-xl text-gray-200 mt-2">
              {member.role}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar - Image and Quick Info */}
            <motion.div
              {...fadeUp(0.1)}
              className="lg:col-span-1"
            >
              <div className="sticky top-8">
                {/* Image Container */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden mb-6">
                  <div className="relative h-80">
                    {!loadedImage && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    )}
                    <img
                      src={member.image}
                      alt={member.name}
                      onLoad={handleImageLoad}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        loadedImage ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                  
                  {/* Contact Info */}
                  <div className="p-6">
                    <div className="flex space-x-4 mb-4">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                          <FiLinkedin size={18} />
                        </a>
                      )}
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                          <FiMail size={18} />
                        </a>
                      )}
                    </div>
                    
                    {member.specialties && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content - Bio and Details */}
            <motion.div
              {...fadeUp(0.2)}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                {/* Bio Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Biography</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    {member.detailedBio.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Education & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {member.education && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Credentials</h3>
                      <ul className="space-y-3">
                        {member.education.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.experience && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Highlights</h3>
                      <ul className="space-y-3">
                        {member.experience.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMemberDetail;