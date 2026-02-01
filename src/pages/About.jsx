import { Container, Typography, Chip, Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

// Typing animation for section titles
function TypingTitle({ text, color }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span style={{ color, textShadow: `0 0 12px ${color}` }}>
      {displayed}
      <span style={{ color, fontWeight: 'bold' }}>|</span>
    </span>
  );
}

const skillGroups = [
  {
    title: 'Programming Languages',
    accent: '#00ffd1',
    skills: ['Java', 'JavaScript', 'Python', 'C/C++', 'Golang', 'TypeScript', 'SQL', 'HTML/CSS', 'Bash'],
  },
  {
    title: 'Frameworks & Libraries',
    accent: '#ff0055',
    skills: ['React.js', 'Spring Boot', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'React Native', 'LangChain', 'JUnit'],
  },
  {
    title: 'Databases & Cloud',
    accent: '#8b5cf6',
    skills: ['Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'AWS', 'GCP', 'DynamoDB'],
  },
  {
    title: 'Libraries & Analytics',
    accent: '#00d4ff',
    skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'PyTorch', 'TensorFlow', 'OpenCV', 'YOLOv8', 'Pydantic'],
  },
  {
    title: 'Developer Tools',
    accent: '#ff8a65',
    skills: ['Git', 'Linux', 'GitHub Actions', 'GitLab CI/CD', 'REST APIs', 'Jira', 'Agile', 'Postman'],
  },
];

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services (AWS)', date: 'Jun 2025' },
];

function About() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 2, pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 } }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Inter, Poppins, sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.6rem' },
              color: '#fff',
              mb: 1,
              textAlign: 'left',
              textShadow: '0 0 16px #00d4ff',
            }}
          >
            About Me
          </Typography>
          <Typography variant="body1" sx={{ color: '#cfcfd6', mt: 1, mb: 2, maxWidth: '1000px', lineHeight: 1.7, fontFamily: 'Inter, Poppins, sans-serif' }}>
            I'm a third‑year Software Engineering student at Carleton University who loves building solutions to real‑world problems. I'm passionate about technology and enjoy learning broadly — whether that's a new framework or principles that improve how software is designed and shipped.
          </Typography>
          <Typography variant="body1" sx={{ color: '#a0a0a0', mb: 2, maxWidth: '1000px', lineHeight: 1.7, fontFamily: 'Inter, Poppins, sans-serif' }}>
            I am currently a Software Developer Intern at Nokia, where I contribute to distributed systems and help implement AI‑enabled solutions as organisations increasingly adopt AI for more tasks.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillGroups.map((card) => (
            <Grid item xs={12} md={6} key={card.title}>
              <Box sx={{
                background: 'rgba(10,10,20,0.86)',
                borderRadius: 3,
                p: 3,
                height: 240,
                boxShadow: `0 8px 30px ${card.accent}22`,
                border: `1px solid ${card.accent}33`,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography variant="h5" sx={{ color: card.accent, fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, mb: 2, textShadow: `0 0 8px ${card.accent}` }}>
                  {card.title}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  gap: 1.5, 
                  flex: 1,
                  maxHeight: 160,
                  alignContent: 'flex-start'
                }}>
                  {card.skills.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      sx={{
                        borderRadius: 3,
                        px: 1.8,
                        py: 0.6,
                        background: 'transparent',
                        color: '#e6e6e9',
                        border: `1px solid ${card.accent}33`,
                        boxShadow: `inset 0 0 6px ${card.accent}11`,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
          <Typography variant="h4" sx={{ color: '#8b5cf6', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>Professional Certifications</Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {certifications.map((c) => (
              <Box key={c.name} sx={{ background: 'rgba(30,20,50,0.96)', borderRadius: 2, p: 2, border: '1px solid #8b5cf622' }}>
                <Typography variant="subtitle1" sx={{ color: '#ffbf80', fontWeight: 700 }}>{c.name}</Typography>
                <Typography variant="body2" sx={{ color: '#cfcfd6' }}>{c.issuer} • {c.date}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;