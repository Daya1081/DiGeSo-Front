import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const navItems = [
  { label: 'Inicio', link: '/' },
  { label: 'Nosotros', link: '/about-us' },
  { label: 'Servicios', link: '/services' },
  { label: 'Contáctanos', link: '/contact-us' },
];
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: '#101218',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
          px: {xs: 1, sm: 4},
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid container item xs={12} md={4} justifyContent="center">
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    textAlign: 'left',
                    color: '#ffffff',
                  }}
                >
                  Digital Genius Solutions
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ textAlign: 'left', color: '#ffffff', textWrap: 'pretty' }}
                >
                  Tu Socio Digital Integral Diseño | Desarrollo | eCommerce |
                  Marketing | Social Media Soporte Técnico | Tecnologías: React,
                  Figma, PrestaShop, Power BI Equipo: Desarrolladores Web |
                  Marketing Digital | Business Intelligence ¡Inicia tu proyecto
                  con nosotros y descubre el potencial digital que podemos crear
                  juntos!
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="stretch"
                  spacing={2}
                >
                  <Link href="https://www.facebook.com/digesolutions/"><FacebookIcon sx={{ color: '#ffffff' }} /></Link>
                  <Link href="https://www.instagram.com/digesolutions/"><InstagramIcon sx={{ color: '#ffffff' }} /></Link>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={4}
              justifyContent={{ xs: 'left', md: 'center' }}
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    textAlign: 'left',
                    color: '#ffffff',
                  }}
                >
                  Compañia
                </Typography>
                <Stack
                  direction={{ xs: 'row', md: 'column' }}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  {navItems.map((item) => (
                    <Link
                      variant="body2"
                      key={item.label}
                      href={item.link}
                      underline="none"
                      sx={{
                        textAlign: 'left',
                        color: '#ffffff',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={4}
              justifyContent={{ xs: 'left', md: 'center' }}
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    textAlign: 'left',
                    color: '#ffffff',
                  }}
                >
                  Ponerse en contacto
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row', md: 'column' }}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                  >
                    <EmailIcon sx={{ color: '#ffffff' }} />
                    <Typography variant="body2" gutterBottom sx={{ textAlign: 'left', color: '#ffffff' }}>
                    info@digesolutions.com
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                  >
                    <WhatsAppIcon sx={{ color: '#ffffff' }} />
                    <Typography variant="body2" gutterBottom sx={{ textAlign: 'left', color: '#ffffff' }}>
                      +57 317 227 06 45
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider light />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: '#101218',
          alignItems: 'center',
          justifyContent: 'center',
          py: 2,
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="caption"
            gutterBottom
            sx={{ textAlign: 'center', color: '#ffffff' }}
          >
            Copyright © 2024 Digital Genius Solutions | Desarrollado por
            Digital Genius Solutions
          </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default Footer;
