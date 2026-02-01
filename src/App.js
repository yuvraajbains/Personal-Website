import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
        <Experience />
        <Projects />
      <Footer />
    </>
  );
}

export default App;
