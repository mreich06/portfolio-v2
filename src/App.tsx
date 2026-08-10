import './App.css';
import Header from './components/Header';
import About from './sections/About';
import Hero from './sections/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <main className="content-container">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
