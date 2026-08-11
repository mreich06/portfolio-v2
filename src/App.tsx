import './App.css';
import Header from './components/Header';
import About from './sections/About';
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
      </main>
    </div>
  );
};

export default App;
