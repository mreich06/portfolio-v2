import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

const App = () => {
  return (
    <div>
      <Header />
      <main className="content-container">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
