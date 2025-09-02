import { Container, Typography, Chip, Box } from '@mui/material';
import { useEffect, useState } from 'react';

// Typing animation for section titles
function TypingTitle({ text, color }) {
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
  return <span style={{ color, textShadow: `0 0 16px ${color}` }}>{displayed}<span style={{ color, fontWeight: 'bold' }}>|</span></span>;
}

const skillGroups = [
  {
    title: 'Programming Languages',
    color: '#00ffd1',
    accent: '#00ffd1',
    skills: [
      'Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'
    ],
  },
  {
    title: 'Frameworks',
    color: '#ff0055',
    accent: '#ff0055',
    skills: [
      'React.js', 'Node.js', 'Express.js', 'Spring Boot', 'Flask', 'FastAPI', 'ExpoGO'
    ],
  },
  {
    title: 'Databases & Platforms',
    color: '#8b5cf6',
    accent: '#8b5cf6',
    skills: [
      'PostgreSQL', 'MongoDB', 'Supabase', 'AWS (Lambda, DynamoDB)', 'Google Cloud', 'Docker', 'Twilio'
    ],
  },
  {
    title: 'Libraries & AI/ML',
    color: '#00d4ff',
    accent: '#00d4ff',
    skills: [
      'Pandas', 'NumPy', 'Matplotlib', 'TensorFlow', 'OpenCV', 'YOLOv8', 'LLMs', 'Prompt Engineering'
    ],
  },
  {
    title: 'Developer Tools',
    color: '#ff0055',
    accent: '#ff0055',
    skills: [
      'Git', 'GitHub Actions', 'Power BI', 'Agile', 'REST APIs', 'VS Code', 'Postman', 'Lucidchart'
    ],
  },
];

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Issued Jun. 2025',
    id: '2837cbf8891f4378b95b6b2a7e11ce35',
  },
  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: 'Issued May 2025',
    id: 'Xl9K1F19VJPK',
  },
];
      <Container maxWidth="md" sx={{ zIndex: 2, pt: 6, pb: 6 }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 0, mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#00ffd1',
              textShadow: '0 0 16px #00ffd1',
              letterSpacing: 2,
              textAlign: 'center',
            }}
          >
            <TypingTitle text="Technical Skills & Certifications" color="#00ffd1" />
          </Typography>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mb: 6 }}>
          {skillGroups.map((group, idx) => (
            <Box key={group.title} sx={{
              background: 'rgba(10,10,20,0.85)',
              borderRadius: '18px',
              boxShadow: `0 0 32px ${group.accent}88`,
              border: `2.5px solid ${group.accent}`,
              p: 2.5,
              minWidth: '220px',
              maxWidth: '340px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              mb: 2,
              transition: 'box-shadow 0.3s, transform 0.3s',
              '&:hover': {
                boxShadow: `0 0 64px ${group.accent}`,
                transform: 'scale(1.05)',
              },
            }}>
              <Typography variant="h6" sx={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: group.accent, mb: 1, textShadow: `0 0 12px ${group.accent}` }}>{group.title}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                {group.skills.map(skill => (
                  <Chip key={skill} label={skill} sx={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: '0.85rem', px: 1.5, py: 0.5, borderRadius: '999px', background: 'transparent', color: group.accent, boxShadow: `0 0 8px ${group.accent}44`, border: `1.5px solid ${group.accent}`, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.08)', background: group.accent + '22', color: '#fff', boxShadow: `0 0 16px ${group.accent}` } }} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <Typography variant="h4" sx={{ color: '#8b5cf6', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, mb: 2, textShadow: '0 0 12px #8b5cf6' }}>Certifications</Typography>
          {certifications.map(cert => (
            <Box key={cert.name} sx={{ background: 'rgba(30,20,50,0.96)', borderRadius: '12px', boxShadow: '0 0 16px #8b5cf688', border: '2px solid #8b5cf6', p: 2, mb: 2, minWidth: '260px', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="h6" sx={{ color: '#ff0055', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>{cert.name}</Typography>
              <Typography variant="body2" sx={{ color: '#b8b8d8', fontFamily: 'Inter, Poppins, JetBrains Mono, monospace', mb: 1 }}>{cert.issuer}</Typography>
              <Typography variant="body2" sx={{ color: '#00ffd1', fontFamily: 'JetBrains Mono, monospace', mb: 1 }}>{cert.date}</Typography>
              <Typography variant="caption" sx={{ color: '#8b5cf6', fontFamily: 'JetBrains Mono, monospace' }}>Credential ID: {cert.id}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

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
      <Container maxWidth="lg" sx={{ zIndex: 2, pt: 6, pb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#00d4ff',
            mb: 6,
            textShadow: '0 0 16px #00d4ff',
            letterSpacing: 2,
            textAlign: 'center',
          }}
        >
          <TypingTitle text="Skills & Technologies" color="#00d4ff" />
        </Typography>
        {skillGroups.map((group, idx) => (
          <Box key={group.title} sx={{ mb: 6, position: 'relative', width: '100%' }}>
            <Box sx={{
              width: '100%',
              borderTop: `3px solid ${group.accent}`,
              borderBottom: `3px solid ${group.accent}`,
              px: { xs: 1, md: 4 },
              py: 3,
              background: 'rgba(10,10,20,0.85)',
              boxShadow: `0 0 32px ${group.accent}44`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 700,
                  color: group.accent,
                  mb: 3,
                  textShadow: `0 0 12px ${group.accent}`,
                  letterSpacing: 2,
                  textAlign: 'center',
                }}
              >
                {group.title}
              </Typography>
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                width: '100%',
                maxWidth: '1400px',
              }}>
                {group.skills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: 500,
                      fontSize: '1rem',
                      px: 2.5,
                      py: 1,
                      borderRadius: '999px',
                      background: 'transparent',
                      color: group.accent,
                      boxShadow: `0 0 12px ${group.accent}44`,
                      border: `2px solid ${group.accent}`,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.08)',
                        background: group.accent + '22',
                        color: '#fff',
                        boxShadow: `0 0 24px ${group.accent}`,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default About;