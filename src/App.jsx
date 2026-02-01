import BodyBackgroundChanger from './BodyBackgroundChanger';
import Home from './Home';
import Projects from './Projects';
import Experience from './pages/Experience';
import About from './About';
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
      <section id="about" style={{ minHeight: '100vh', width: '100%', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <About />
      </section>
      <section id="experience" style={{ minHeight: '100vh', width: '100%', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Experience />
      </section>
      <section id="projects" style={{ minHeight: '100vh', width: '100%', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Projects />
      </section>
      {/* Contact section removed */}
      <section id="footer" style={{ minHeight: '100vh', width: '100%', paddingTop: '4rem', paddingBottom: 0 }}>
        <Footer />
      </section>
    </Box>
  );
}

export default App;
