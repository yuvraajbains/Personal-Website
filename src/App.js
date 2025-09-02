import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Home from './pages/Home';
import Education from './pages/Education';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <SocialLinks />
  <Home />
  <Education />
  <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
