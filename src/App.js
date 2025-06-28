import './App.css';
import Header from './components/Header';
import ScrollToAnchor from './ScrollTo';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contect from './components/Contect';


function App() {
  return (
      <>
        <Header />
        <Home/>
        <About />
        <Skills/>
        <Work/>
        <Contect/>
        <Footer />
        <ScrollToAnchor />
      </>
  );
}

export default App;
