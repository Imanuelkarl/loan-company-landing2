// App.tsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationProvider, useNavigation, type SectionType } from './context/NavigationContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Markets from './components/Markets';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import Spacer from './components/Spacer';
import Teams from './components/Teams';

// Main content component that handles section visibility
const MainContent: React.FC = () => {
  const { activeSection } = useNavigation();
  const location = useLocation();

  const sectionComponents: Record<SectionType, React.ReactElement> = {
    home: <Hero />,
    about: <About />,
    services: <Services />,
    process: <Process />,
    markets: <Markets />,
    testimonials: <Testimonials />,
    teams: <Teams /> ,
    contact: <CTA />
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {sectionComponents[activeSection]}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

// Route handler component
const RouteHandler: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/home" element={<MainContent />} />
      <Route path="/about" element={<MainContent />} />
      <Route path="/services" element={<MainContent />} />
      <Route path="/process" element={<MainContent />} />
      <Route path="/markets" element={<MainContent />} />
      <Route path="/testimonials" element={<MainContent />} />
      <Route path="/teams" element={<MainContent />} />
      <Route path="/contact" element={<MainContent />} />
      {/* Catch all route - redirect to home */}
      <Route path="*" element={<MainContent />} />
    </Routes>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <NavigationProvider>
        <div className="bg-dark-900 text-gray-100 min-h-screen">
          <Header />
          <Spacer height={80} />
          <RouteHandler />
          <Footer />
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;