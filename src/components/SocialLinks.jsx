import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialLinks() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/yuvraajbains', icon: <GitHubIcon sx={{ color: '#00ffd1' }} /> , color: '#00ffd1'},
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuvrajbains00/', icon: <LinkedInIcon sx={{ color: '#00d4ff' }} />, color: '#00d4ff' },
    { label: 'Devpost', href: 'https://devpost.com/yuvraajbains', icon: <img src="https://devpost.com/favicon.ico" alt="Devpost" style={{ width: 20, height: 20, display: 'block' }} />, color: '#8b5cf6' },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3, flexWrap: 'wrap' }}>
      {links.map(link => (
        <Box
          key={link.label}
          component="a"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: 2,
            border: `1px solid ${link.color}33`,
            background: 'rgba(10,10,20,0.6)',
            boxShadow: `0 6px 18px ${link.color}22`,
            textDecoration: 'none',
            color: '#e6e6e9',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 600,
            transition: 'transform 0.15s, box-shadow 0.15s',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 10px 28px ${link.color}44` },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{link.icon}</Box>
          <Box component="span" sx={{ fontSize: '0.9rem', color: link.color }}>{link.label}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default SocialLinks;
