import { Box, Container, Typography, Chip } from '@mui/material';
import { useEffect, useState } from 'react';

// Local typing title (mirrors style used elsewhere)
function TypingTitle({ text, color = '#00ffd1' }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span style={{ color, textShadow: `0 0 16px ${color}` }}>
      {displayed}
      <span style={{ color, fontWeight: 'bold' }}>|</span>
    </span>
  );
}


function Education() {
  return (
    <Box
      id="education"
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #141428 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, md: 12 },
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.8rem' },
              color: '#00ffd1',
              textShadow: '0 0 18px #00ffd1',
              letterSpacing: 2,
              textAlign: 'center',
            }}
          >
            <TypingTitle text="About Me" color="#00ffd1" />
          </Typography>
        </Box>

        {/* Core Narrative (Updated) */}
        <Box
          sx={{
            background: 'rgba(10,10,20,0.85)',
            border: '2.5px solid #00ffd1',
            boxShadow: '0 0 40px #00ffd166',
            borderRadius: '26px',
            p: { xs: 4, md: 6 },
            mb: 8,
            backdropFilter: 'blur(6px)',
          }}
        >
          {[ 
            `My journey in software engineering is rooted in wanting to connect with people and solve real problems with technology. Whether I'm volunteering at Punjabi school sharing fundamentals with kids of different ages or mentoring students in discrete math and Python, I've learned that the best solutions start with listening and explaining hard ideas simply.`,
            `A decade of hockey wired me for adaptability and communication. Every season meant new teammates, new systems, new personalities, figuring out how to sync fast became second nature. That same mindset shows up in my engineering work: I like bridging technical depth with clear language so designers, product folks, and engineers move in the same direction.`,
            `Nexttern is a good snapshot of how I build. What began as curiosity about web scraping and distributed design snowballed into a platform combining ${' '}Java Spring Boot, AWS microservices, and event driven patterns to help students navigate internships. Seeing different components (queues, workers, APIs, data flows) click together into something useful for real people reinforced why I like this field.`,
            `Whether I'm debugging a tricky distributed flow or helping someone wrap their head around algorithms, I bring curiosity, patience, and a focus on the humans who will rely on the end result. Good engineering for me is translating need into something fast, reliable, and respectful of the user’s time.`
          ].map((para, i) => (
            <Typography
              key={i}
              variant="h5"
              sx={{
                mt: i === 0 ? 0 : 4,
                fontFamily: 'Inter, Poppins, JetBrains Mono, monospace',
                lineHeight: 1.55,
                fontWeight: 400,
                color: '#c8d4e4',
                fontSize: { xs: '1.05rem', md: '1.25rem' },
              }}
            >
              {para}
            </Typography>
          ))}
        </Box>

        {/* Quick Snapshot Chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mb: 4 }}>
          {[
            { label: 'Full‑Stack Focus', color: '#00ffd1' },
            { label: 'Cloud & Serverless', color: '#8b5cf6' },
            { label: 'Data & Observability', color: '#00d4ff' },
            { label: 'UI Precision', color: '#ff0055' },
            { label: 'Hackathon Energy', color: '#ff0055' },
            { label: 'Continuous Learning', color: '#8b5cf6' },
          ].map(tag => (
            <Chip
              key={tag.label}
              label={tag.label}
              sx={{
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 500,
                letterSpacing: 0.5,
                background: 'transparent',
                color: tag.color,
                border: `2px solid ${tag.color}`,
                boxShadow: `0 0 14px ${tag.color}55`,
                px: 2,
                py: 0.5,
                borderRadius: '999px',
                transition: 'all 0.25s',
                '&:hover': {
                  background: tag.color + '22',
                  boxShadow: `0 0 28px ${tag.color}`,
                  transform: 'translateY(-4px)',
                  color: '#fff',
                },
              }}
            />
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#6f7a89',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: 1,
            fontSize: { xs: '.75rem', md: '.8rem' },
          }}
        >
          Always building. Always refining.
        </Typography>
      </Container>
    </Box>
  );
}

export default Education;
