import { Container, Typography, Box, Button, Grid, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

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

// ...existing code...

const projects = [
  {
    title: 'Resonance',
    subtitle: 'AI Music Discovery Platform',
    description: 'Reduced recommendation latency to under 15ms by decoupling a PyTorch SASRec Transformer from a Ruby on Rails monolith into a dedicated FastAPI microservice, eliminating Ruby GIL contention on tensor operations. Compressed semantic embeddings by 83% (384D → 64D) for sub-millisecond FAISS retrieval via deterministic QR decomposition.',
    tech: [
      'Ruby on Rails', 'Python', 'PyTorch', 'FastAPI', 'FAISS', 'SASRec Transformer'
    ],
    github: 'https://github.com/yuvraajbains/myResonance',
  },
  {
    title: 'Nexttern',
    subtitle: 'Distributed Full-Stack Internship Platform',
    description: 'Delivered 500+ fresh internship listings weekly to 100+ concurrent users via a distributed ETL microservice pipeline on AWS Lambda and DynamoDB. Architected multi-tenant data isolation with PostgreSQL RLS, and engineered a RAG pipeline vectorizing 5,000+ job postings for a personalized project roadmap tool.',
    tech: [
      'Java', 'Spring Boot', 'React', 'AWS (Lambda, DynamoDB)', 'PostgreSQL', 'RAG', 'AI (gemini-api)'
    ],
    github: 'https://github.com/yuvraajbains/Nexttern',
    devpost: 'https://devpost.com/software/nexttern',
  },
  {
    title: 'Aura-Grid',
    subtitle: 'Distributed Agentic Fraud Detection Platform',
    description: 'Architected an event-driven fraud detection microservice with Ruby on Rails and Kafka, decoupling AI workloads via the Asynchronous Saga Pattern with sub-30ms response times. Engineered a multi-agent LangGraph swarm with localized LLaMA 3.2 inference delivering real-time verdicts via ActionCable WebSockets over Redis pub/sub.',
    tech: [
      'Ruby on Rails', 'Python', 'LangGraph', 'Kafka', 'Redis', 'PostgreSQL', 'Protobufs', 'Docker'
    ],
    github: 'https://github.com/yuvraajbains/Aura-Mesh',
  },
  {
    title: 'RoadWise',
    subtitle: 'AI/ML Mobile Potholes Data App',
    description: 'Delivered real-time municipal road safety alerts at 95% detection accuracy and 50ms latency by training a custom computer vision model on 1,000+ annotated road images. Built analytics infrastructure with a FastAPI backend, PostgreSQL geospatial queries, and interactive dashboards for city infrastructure planning.',
    tech: [
      'React Native', 'Python', 'FastAPI', 'PostgreSQL', 'OpenCV', 'YOLOv8', 'Computer Vision'
    ],
  },
  {
    title: 'NHL Goal Alert System',
    description: 'A fully automated Python app that tracks Edmonton Oilers goals live using the NHL public API and sends instant goal alerts via SMS using Twilio. Runs 24/7 in the cloud with real-time notifications directly to your phone every time the Oilers score.',
    tech: [
      'Python', 'Twilio', 'Railway'
    ],
    github: 'https://github.com/yuvraajbains/NHL-Goal-Alert-System',
  },
  {
    title: 'FantasyML',
    description: 'Full-stack ML pipeline that trains LightGBM ensembles for fantasy football projections, serves FastAPI APIs, and includes a React+TypeScript frontend.',
    tech: [
      'Python', 'FastAPI', 'LightGBM', 'scikit-learn', 'React', 'TypeScript', 'Vite', 'Tailwind', 'Docker', 'Postgres', 'Redis'
    ],
    github: 'https://github.com/yuvraajbains/NFL-Fantasy-MLPred',
  },
];

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
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
        justifyContent: 'flex-start',
        pt: { xs: 4, md: 6 },
        pb: { xs: 8, md: 12 },
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth={false} sx={{ zIndex: 2, px: { xs: 1, md: 6 }, maxWidth: '1800px' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 0, mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#8b5cf6',
              textShadow: '0 0 16px #8b5cf6',
              letterSpacing: 2,
              textAlign: 'center',
            }}
          >
            <TypingTitle text="Projects" color="#8b5cf6" />
          </Typography>
        </Box>
        <Grid container spacing={6} justifyContent="flex-start" alignItems="stretch" sx={{ width: '100%' }}>
          {projects.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} key={project.title} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Box
                sx={{
                  background: 'rgba(30,20,50,0.96)',
                  borderRadius: '18px',
                  boxShadow: '0 0 32px #8b5cf688',
                  border: '2.5px solid #8b5cf6',
                  p: 2.5,
                  minWidth: '260px',
                  minHeight: '220px',
                  maxWidth: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  mb: 2,
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  '&:hover': {
                    boxShadow: '0 0 64px #8b5cf6',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700,
                    color: '#8b5cf6',
                    mb: 1,
                    textShadow: '0 0 12px #8b5cf6',
                    fontSize: '1.15rem',
                  }}
                >
                  {project.title}
                </Typography>
                {project.subtitle && (
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: 'Inter, Poppins, sans-serif',
                      fontWeight: 600,
                      color: '#00d4ff',
                      mb: 0.5,
                      fontSize: '0.82rem',
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                      opacity: 0.85,
                    }}
                  >
                    {project.subtitle}
                  </Typography>
                )}
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: 'Inter, Poppins, sans-serif',
                    fontWeight: 500,
                    color: '#fff',
                    mb: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                  {project.tech.map(tech => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '999px',
                        background: 'transparent',
                        color: '#8b5cf6',
                        boxShadow: '0 0 8px #8b5cf644',
                        border: '1.5px solid #8b5cf6',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'scale(1.08)',
                          background: '#8b5cf622',
                          color: '#fff',
                          boxShadow: '0 0 16px #8b5cf6',
                        },
                      }}
                    />
                  ))}
                </Box>
                {(project.github || project.devpost) && (
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    {project.github && (
                      <Button
                        variant="contained"
                        startIcon={<FaGithub />}
                        sx={{
                          background: 'linear-gradient(90deg, #8b5cf6 0%, #00d4ff 100%)',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          px: 2,
                          py: 0.5,
                          borderRadius: '8px',
                          boxShadow: '0 0 16px #8b5cf6',
                          transition: 'box-shadow 0.3s, transform 0.3s',
                          minWidth: '0',
                          '&:hover': {
                            boxShadow: '0 0 32px #8b5cf6',
                            transform: 'scale(1.08)',
                            background: 'linear-gradient(90deg, #00d4ff 0%, #8b5cf6 100%)',
                          },
                        }}
                        href={project.github}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.devpost && (
                      <Button
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(90deg, #ff0055 0%, #8b5cf6 100%)',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          px: 2,
                          py: 0.5,
                          borderRadius: '8px',
                          boxShadow: '0 0 16px #ff0055',
                          transition: 'box-shadow 0.3s, transform 0.3s',
                          minWidth: '0',
                          '&:hover': {
                            boxShadow: '0 0 32px #ff0055',
                            transform: 'scale(1.08)',
                            background: 'linear-gradient(90deg, #8b5cf6 0%, #ff0055 100%)',
                          },
                        }}
                        href={project.devpost}
                        target="_blank"
                      >
                        Devpost
                      </Button>
                    )}
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;