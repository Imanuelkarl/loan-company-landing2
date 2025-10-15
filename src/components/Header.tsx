// components/Header.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigation, type SectionType } from '../context/NavigationContext';
import Logo from '../assets/meridian_core_solutions_logo-removebg-preview.png';

// Define nav item interface
interface NavItem {
  name: string;
  id: SectionType;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { activeSection, setActiveSection } = useNavigation();

  const navItems: NavItem[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Markets', id: 'markets' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: SectionType): void => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-dark-900/90 backdrop-blur-md z-50 border-b border-dark-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <button 
              onClick={() => handleNavClick('home')} 
              className="cursor-pointer"
              aria-label="Go to home"
            >
              <img className='w-35 invert' src={Logo} alt='Meridian Logo'/>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors ${
                  activeSection === item.id 
                    ? 'text-primary-400 font-semibold' 
                    : 'text-gray-300 hover:text-primary-400'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden md:block"
          >
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left transition-colors ${
                    activeSection === item.id 
                      ? 'text-primary-400 font-semibold' 
                      : 'text-gray-300 hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-md text-white font-medium hover:opacity-90 transition-opacity text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;