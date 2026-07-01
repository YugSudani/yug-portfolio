import { Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Modern Animated Background */}
      <div className="bg-container">
        <div className="mesh-gradient"></div>
        <div className="glass-blob blob-1"></div>
        <div className="glass-blob blob-2"></div>
        <div className="glass-blob blob-3"></div>
        <div className="glass-blob blob-4"></div>
      </div>

      {/* Components */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
