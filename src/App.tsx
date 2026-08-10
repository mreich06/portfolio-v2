import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <main className="content-container">
        <Hero />
      </main>
    </div>
  );
};

export default App;
