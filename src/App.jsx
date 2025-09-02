import BodyBackgroundChanger from './BodyBackgroundChanger';
import Home from './Home';
import Education from './pages/Education';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import { Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
      }}
    >
      <BodyBackgroundChanger />
      <section id="home" style={{ minHeight: '100vh', width: '100%', paddingTop: 0, paddingBottom: '7rem' }}>
        <Home />
      </section>
      <section id="education" style={{ minHeight: '100vh', width: '100%', paddingTop: '7rem', paddingBottom: '4rem' }}>
        <Education />
      </section>
      <section id="about" style={{ minHeight: '100vh', width: '100%', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <About />
      </section>
      <section id="projects" style={{ minHeight: '100vh', width: '100%', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Projects />
      </section>
      <section id="contact" style={{ minHeight: '100vh', width: '100%', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Contact />
      </section>
      <section id="footer" style={{ minHeight: '100vh', width: '100%', paddingTop: '4rem', paddingBottom: 0 }}>
        <Footer />
      </section>
    </Box>
  );
}

export default App;
