import { Box, Container, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';

function Experience() {
  return (
    <Box
      id="experience"
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
      <Container maxWidth="lg" sx={{ zIndex: 2, pt: { xs: 6, md: 8 }, pb: { xs: 6, md: 8 } }}>
        <Typography variant="h2" sx={{ fontFamily: 'Inter, Poppins, sans-serif', fontWeight: 800, color: '#fff', mb: 3, textShadow: '0 0 16px #00d4ff' }}>
          Work Experience
        </Typography>

        <Box sx={{ background: 'rgba(10,10,20,0.86)', borderRadius: 3, p: 3, mb: 4, border: '1px solid #00ffd122' }}>
          <Typography variant="h5" sx={{ color: '#00ffd1', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>
            Software Developer Co-op/Intern — Nokia (Ottawa, ON)
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#cfcfd6', mt: 1, mb: 2 }}>Python, Kubernetes, GitLab, Docker — Jan. 2026 – Present</Typography>
          <List sx={{ color: '#cfcfd6' }}>
            <ListItem>
              <ListItemText primary="Reduced manual validation time by 60%+ by engineering GitLab CI/CD pipelines to orchestrate scalable Robot Framework and Python regression test suites for critical Service Router OS network performance." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Built a Python client-server wrapper to manage concurrent SSH sessions, targeting 40% faster test cycles by automating device state validation and configuration deployment across distributed network infrastructure." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developed AI-driven automation agents using Google ADK and Docker, reducing manual testing by ~70% and enabling rapid feature validation while maintaining quality standards." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Orchestrated Kubernetes deployments of multi-tier Docker test environments, implementing IaC via Python scripts to automate endpoint provisioning for distributed network validation." />
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
