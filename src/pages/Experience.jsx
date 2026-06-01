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
            Software Development Engineer Co-op/Intern — Nokia (Ottawa, ON)
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#cfcfd6', mt: 1, mb: 2 }}>Python, LangGraph, MCP, Kubernetes, vLLM, RAG, Docker — Jan. 2026 – Present</Typography>
          <List sx={{ color: '#cfcfd6' }}>
            <ListItem>
              <ListItemText primary="Eliminated 95% of manual test creation for network infrastructure validation by designing multi-agent AI workflows with retrieval-augmented generation, integrated into the CI/CD pipeline with automated testing gates." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Accelerated developer workflows by 70% by building a low-code AI platform with custom MCP servers on Kubernetes, handling high-volume SSE streams across three network domains as dedicated microservices." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Shipped a fully automated agentic pipeline adopted across four network infrastructure divisions, reducing manual processing time by 90%, by architecting a multimodal LangGraph workflow following agile development practices." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Secured internal LLM usage from data leakage by deploying an auth-gated vLLM inference microservice with MCP and REST access, integrating LLM-based redaction to ensure zero sensitive data exposure." />
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
