import { Typography, Box, Button, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Typing animation for main title
function TypingTitle({ text }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i+1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayed}<span style={{ color: '#00d4ff', fontWeight: 'bold' }}>|</span></span>;
}

// Simple animated particles background
const ParticlesBG = () => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
    {[...Array(30)].map((_, i) => (
      <motion.circle
        key={i}
        cx={Math.random()*1200}
        cy={Math.random()*800}
        r={Math.random()*2+1}
        fill="#00d4ff"
        initial={{ opacity: 0.3, r: 1 }}
        animate={{ opacity: [0.3, 0.7, 0.3], r: [1, 3, 1] }}
        transition={{ repeat: Infinity, duration: 3 + Math.random()*2, delay: i*0.1 }}
      />
    ))}
  </svg>
);

function Home() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        overflow: 'hidden',
        fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <ParticlesBG />
      <Container 
        maxWidth="lg" // Changed from "md" to "lg" for more space
        sx={{ 
          zIndex: 2, 
          pt: { xs: 8, md: 12 }, // Reduced padding
          pb: { xs: 8, md: 12 }, // Reduced padding
          textAlign: 'center',
          width: '100%', // Ensure full width usage
          px: { xs: 3, md: 6 } // Better responsive padding
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Inter, Poppins, sans-serif',
              fontWeight: 700,
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' }, // More responsive sizing
              color: '#fff',
              mb: 2,
              letterSpacing: 1,
              textShadow: '0 0 24px #00d4ff',
              lineHeight: 1.1, // Better line height
            }}
          >
            <TypingTitle text="Hi, I'm Yuvraj Bains" />
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'JetBrains Mono, Fira Code, monospace',
              fontWeight: 600,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, // More responsive
              color: '#00d4ff',
              mb: 3,
              textShadow: '0 0 16px #00d4ff',
              letterSpacing: 2,
              lineHeight: 1.2,
            }}
          >
            <TypingTitle text="A Software Engineering Student" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Inter, Poppins, sans-serif',
              fontWeight: 400,
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem', lg: '1.8rem' }, // Larger text
              color: '#a0a0a0',
              mb: 5, // More margin
              textShadow: '0 0 8px #00d4ff',
              maxWidth: '800px', // Limit line length for readability
              mx: 'auto',
              lineHeight: 1.4,
            }}
          >
            I build fast, scalable, and awesome web applications.<br />
            Let's create something amazing together.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 4, // Increased gap
            justifyContent: 'center', 
            mb: 6, 
            flexWrap: 'wrap' 
          }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, #00d4ff 0%, #8b5cf6 100%)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.2rem', // Larger buttons
                px: 5,
                py: 2,
                borderRadius: '12px', // More rounded
                boxShadow: '0 0 24px #00d4ff',
                transition: 'box-shadow 0.3s, transform 0.3s',
                minWidth: '160px', // Ensure minimum width
                '&:hover': {
                  boxShadow: '0 0 40px #00d4ff',
                  transform: 'scale(1.05)',
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #00d4ff 100%)',
                },
              }}
              href="#projects"
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: '2px solid #00d4ff',
                color: '#00d4ff',
                fontWeight: 600,
                fontSize: '1.2rem', // Larger buttons
                px: 5,
                py: 2,
                borderRadius: '12px', // More rounded
                boxShadow: '0 0 24px #00d4ff',
                transition: 'box-shadow 0.3s, transform 0.3s',
                minWidth: '160px', // Ensure minimum width
                '&:hover': {
                  boxShadow: '0 0 40px #00d4ff',
                  transform: 'scale(1.05)',
                  background: 'rgba(0,212,255,0.08)',
                },
              }}
              href="#contact"
            >
              Contact Me
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home;