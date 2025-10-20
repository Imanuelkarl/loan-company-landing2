// context/NavigationContext.tsx
import React, { createContext, useContext, useState, type ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define the section types
export type SectionType = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'process' 
  | 'markets' 
  | 'testimonials'
  | 'teams' 
  | 'contact';

// Define page titles
export const pageTitles: Record<SectionType, string> = {
  home: 'Home - Meridian Core Solutions',
  about: 'About Us - Meridian Core Solutions',
  services: 'Our Services - Meridian Core Solutions',
  process: 'Our Process - Meridian Core Solutions',
  markets: 'Markets - Meridian Core Solutions',
  testimonials: 'Testimonials - Meridian Core Solutions',
  teams: 'Leadership Team - Meridian Core Solutions',
  contact: 'Contact Us - Meridian Core Solutions'
};

// Define the context type
interface NavigationContextType {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

// Create context with default values
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// Provider props interface
interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSectionState] = useState<SectionType>('home');

  // Sync URL with active section
  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home';
    if (isValidSection(path)) {
      setActiveSectionState(path as SectionType);
    }
  }, [location.pathname]);

  // Update page title when section changes
  useEffect(() => {
    document.title = pageTitles[activeSection];
  }, [activeSection]);

  const setActiveSection = (section: SectionType): void => {
    setActiveSectionState(section);
    navigate(`/${section === 'home' ? '' : section}`);
  };

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Helper function to validate section
const isValidSection = (section: string): section is SectionType => {
  return ['home', 'about', 'services', 'process', 'markets', 'testimonials', 'contact'].includes(section);
};

// Custom hook with type safety
export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};