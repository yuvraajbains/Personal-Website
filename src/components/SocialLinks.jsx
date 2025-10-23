import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language'; // Using LanguageIcon for Devpost
import { useState, useEffect } from 'react';

function SocialLinks() {

  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Section color map
  const sectionColors = {
    home: '#00ffd1', // teal
    education: '#ff0055', // hot pink (About Me)
    about: '#00d4ff', // cyan for Skills
    projects: '#8b5cf6', // purple
    contact: '#ff0055', // pink for Contact
  };

  // Detect active section based on scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    if (scrollY < vh * 0.8) {
      setActiveSection('home');
    } else if (scrollY < vh * 1.8) {
      setActiveSection('education');
    } else if (scrollY < vh * 2.8) {
      setActiveSection('about');
    } else if (scrollY < vh * 3.8) {
      setActiveSection('projects');
    } else {
      setActiveSection('contact');
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 1200) { // 🔥 Switch layout at 1200px instead of 900px
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // run once at start
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        position: isMobile ? 'absolute' : 'fixed',
        top: isMobile ? 'auto' : '35%',
        bottom: isMobile ? '20px' : 'auto',
        left: isMobile ? '50%' : '20px',
        transform: isMobile ? 'translateX(-50%)' : 'none',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        alignItems: 'center',
        gap: 2,
        zIndex: 10,
      }}
    >
      <IconButton 
        href="https://github.com/yuvraajbains" 
        target="_blank" 
        sx={{ 
          color: sectionColors[activeSection],
          transition: 'color 0.5s',
          textShadow: `0 0 16px ${sectionColors[activeSection]}`,
        }}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>

      <IconButton 
        href="https://www.linkedin.com/in/yuvrajbains00/" 
        target="_blank" 
        sx={{ 
          color: sectionColors[activeSection],
          transition: 'color 0.5s',
          textShadow: `0 0 16px ${sectionColors[activeSection]}`,
        }}
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>

      <IconButton 
        href="https://www.instagram.com/yuvraj.bainss/" 
        target="_blank" 
        sx={{ 
          color: sectionColors[activeSection],
          transition: 'color 0.5s',
          textShadow: `0 0 16px ${sectionColors[activeSection]}`,
        }}
      >
        <InstagramIcon fontSize="large" />
      </IconButton>

      <IconButton
        href="https://devpost.com/yuvraajbains"
        target="_blank"
        sx={{
          color: sectionColors[activeSection],
          transition: 'color 0.5s',
          textShadow: `0 0 16px ${sectionColors[activeSection]}`,
        }}
      >
        <LanguageIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default SocialLinks;
