import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawerAndScroll = (to) => {
    setMobileOpen(false);
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About Me', to: 'education' },
    { label: 'Skills', to: 'about' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#0a0a0a',
        height: '100%',
        color: '#00ffd1',
        paddingTop: 5,
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} button>
            <ScrollLink 
              to={item.to}
              smooth
              duration={500}
              offset={-70}
              onClick={handleDrawerToggle} // 🛠 Real Fix: Close after scroll trigger
              style={{ textDecoration: 'none', color: '#00ffd1', width: '100%' }}
            >
              <ListItemText primary={item.label} />
            </ScrollLink>
          </ListItem>
        ))}
        {/* My Resume Button inside Drawer */}
        <Box textAlign="center" mt={2}>
          <Button 
            href="/Yuvraj_Bains_Resume2025.pdf" 
            download="Yuvraj_Bains_Resume2025.pdf"
            sx={{
              color: '#00ffd1',
              border: '2px solid #00ffd1',
              borderRadius: '20px',
              px: 3,
              '&:hover': {
                backgroundColor: '#00ffd1',
                color: '#0a0a0a',
                boxShadow: '0 0 10px #00ffd1, 0 0 20px #00ffd1',
              },
            }}
          >
            My Resume
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ background: 'linear-gradient(90deg, #0a0a0f 0%, #1a1a2e 100%)', boxShadow: '0 0 24px #8b5cf6', py: 1, borderBottom: '2.5px solid #8b5cf6' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left Side - Name, clickable to home */}
          <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Typography variant="h6" sx={{ color: '#8b5cf6', fontWeight: 'bold', fontFamily: 'JetBrains Mono, monospace', textShadow: '0 0 8px #8b5cf6', fontSize: '1.4rem' }}>
              Yuvraj Bains
            </Typography>
          </Box>
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {navItems.map((item) => (
              <ScrollLink 
                key={item.label}
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                style={{ textDecoration: 'none' }}
              >
                <Button sx={{ color: '#8b5cf6', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, '&:hover': { color: '#00d4ff', textShadow: '0 0 8px #00d4ff' } }}>
                  {item.label}
                </Button>
              </ScrollLink>
            ))}
            <Button 
              href="/Yuvraj_Bains_Resume2025.pdf" 
              download="Yuvraj_Bains_Resume2025.pdf"
              sx={{
                color: '#00d4ff',
                border: '2px solid #00d4ff',
                borderRadius: '20px',
                px: 3,
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 600,
                boxShadow: '0 0 8px #00d4ff',
                '&:hover': {
                  backgroundColor: '#00d4ff',
                  color: '#0a0a0a',
                  boxShadow: '0 0 16px #00d4ff',
                },
              }}
            >
              My Resume
            </Button>
          </Box>
          {/* Mobile Hamburger Menu */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#8b5cf6' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: { background: 'linear-gradient(90deg, #0a0a0f 0%, #1a1a2e 100%)', color: '#8b5cf6', boxShadow: '0 0 24px #8b5cf6' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;

