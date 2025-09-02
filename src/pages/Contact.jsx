import { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Typing animation for section titles
function TypingTitle({ text, color }) {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 60);
    
    return () => clearInterval(interval); // Cleanup interval
  }, [text]);

  return (
    <span style={{ color }}>
      {displayed}
    </span>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, (error) => {
      console.log(error.text);
      alert('Something went wrong. Please try again!');
    });
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        height: 'auto',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        color: '#fff',
        fontFamily: 'Inter, Poppins, JetBrains Mono, monospace',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth={false} sx={{ 
        zIndex: 2, 
        width: '100%',
        maxWidth: '1200px',
        px: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#8b5cf6',
                color: '#fff',
                padding: '15px 30px',
                borderRadius: '30px',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 0 32px #8b5cf6, 0 0 48px #8b5cf6',
                zIndex: 9999,
              }}
            >
              ✅ Message Sent Successfully!
            </motion.div>
          )}
        </AnimatePresence>
        
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 1, mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#ff0055',
              textShadow: '0 0 16px #ff0055',
              letterSpacing: 2,
              textAlign: 'center',
            }}
          >
            <TypingTitle text="Contact Me" color="#ff0055" />
          </Typography>
        </Box>
        
        <Typography
          variant="body1"
          mb={5}
          sx={{ 
            color: '#b8b8d8', 
            maxWidth: '600px', 
            mx: 'auto', 
            textAlign: 'center', 
            fontFamily: 'Inter, Poppins, JetBrains Mono, monospace' 
          }}
        >
          Any inquiries regarding academics, personal projects, experience, and more. <br />
          Please do not hesitate to contact me. I will respond in a timely manner.
        </Typography>
        
        <Box
          component="form"
          onSubmit={sendEmail}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: { xs: '100%', md: '80%' },
            mx: 'auto',
            background: 'transparent',
            boxShadow: 'none',
            border: 'none',
            p: 0,
            mt: 2,
          }}
        >
          <TextField
            variant="outlined"
            name="name"
            label="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{
              style: { color: '#8b5cf6', fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 },
            }}
            InputLabelProps={{
              style: { color: '#b8b8d8', fontFamily: 'JetBrains Mono, monospace' },
            }}
            sx={{
              borderRadius: '999px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '999px',
                background: 'rgba(30,20,50,0.96)',
                boxShadow: '0 0 8px #8b5cf644',
                border: '1.5px solid #8b5cf6',
                color: '#8b5cf6',
                fontFamily: 'JetBrains Mono, monospace',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
            }}
          />
          
          <TextField
            variant="outlined"
            name="email"
            type="email"
            label="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            InputProps={{
              style: { color: '#8b5cf6', fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 },
            }}
            InputLabelProps={{
              style: { color: '#b8b8d8', fontFamily: 'JetBrains Mono, monospace' },
            }}
            sx={{
              borderRadius: '999px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '999px',
                background: 'rgba(30,20,50,0.96)',
                boxShadow: '0 0 8px #8b5cf644',
                border: '1.5px solid #8b5cf6',
                color: '#8b5cf6',
                fontFamily: 'JetBrains Mono, monospace',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
            }}
          />
          
          <TextField
            variant="outlined"
            name="message"
            label="Your Message"
            multiline
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            InputProps={{
              style: { color: '#8b5cf6', fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 },
            }}
            InputLabelProps={{
              style: { color: '#b8b8d8', fontFamily: 'JetBrains Mono, monospace' },
            }}
            sx={{
              borderRadius: '18px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '18px',
                background: 'rgba(30,20,50,0.96)',
                boxShadow: '0 0 8px #8b5cf644',
                border: '1.5px solid #8b5cf6',
                color: '#8b5cf6',
                fontFamily: 'JetBrains Mono, monospace',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#8b5cf6',
              },
            }}
          />
          
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              background: 'linear-gradient(90deg, #8b5cf6 0%, #00d4ff 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              px: 2,
              py: 1,
              borderRadius: '999px',
              boxShadow: '0 0 16px #8b5cf6',
              transition: 'box-shadow 0.3s, transform 0.3s',
              minWidth: '0',
              fontFamily: 'JetBrains Mono, monospace',
              '&:hover': {
                boxShadow: '0 0 32px #8b5cf6',
                transform: 'scale(1.08)',
                background: 'linear-gradient(90deg, #00d4ff 0%, #8b5cf6 100%)',
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;