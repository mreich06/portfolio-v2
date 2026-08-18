import './App.css';
import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import CustomCursor from './components/motion/CustomCursor';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import ContactModal from './components/ContactModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <div>
        <Header {...{ setIsModalOpen }} />
        <main className="content-container">
          <Hero {...{ setIsModalOpen }} />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          {isModalOpen && <ContactModal setIsModalOpen={setIsModalOpen} />}
        </main>
      </div>
    </MotionConfig>
  );
};

export default App;
