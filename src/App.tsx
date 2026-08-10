import './App.css';
import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import Hero from './sections/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <main className="content-container">
        <Hero />
        <SectionHeader />
      </main>
    </div>
  );
};

export default App;
