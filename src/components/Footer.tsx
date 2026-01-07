import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Call, Mail } from "@mui/icons-material";

const WHATSAPP_NUMBER = "261348830597";
const FACEBOOK_URL = "https://www.facebook.com/mendrika.rakotoarivony.9";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#111", color: "#fff", mt: 8, pt: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Présentation */}
          <Grid size={{ xs: 12, md: 4}}>
            <Typography variant="h6" sx={{ color: "secondary.main", mb: 2 }}>
              Saveur Laquée By I-Mah
            </Typography>
            <Typography variant="body2" color="gray">
              Traiteur à domicile spécialisé dans la création de plats raffinés
              pour vos événements privés et professionnels.
            </Typography>
          </Grid>

          {/* Liens rapides */}
          <Grid size={{ xs: 12, md: 4}}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Liens rapides
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="/" color="inherit" underline="hover">
                Accueil
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact & réseaux */}
          <Grid size={{ xs: 12, md: 4}}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact
            </Typography>

            <Typography variant="body2" color="gray">
              <Call/> +261 34 88 305 97
            </Typography>

            <Typography variant="body2" color="gray">
              <Mail/> randriamboavonjyrotsy@gmail.com
            </Typography>

            <Box mt={2}>
              {/* WhatsApp */}
              <IconButton
                component="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20Saveur%20Laquée%20By%20I-Mah,%20je%20souhaite%20un%20devis.`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#25D366",
                  "&:hover": { backgroundColor: "rgba(37,211,102,0.1)" },
                }}
              >
                <WhatsAppIcon />
              </IconButton>

              {/* Facebook */}
              <IconButton
                component="a"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#1877F2",
                  "&:hover": { backgroundColor: "rgba(24,119,242,0.1)" },
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Typography variant="body2" align="center" color="gray" pb={2}>
          © {new Date().getFullYear()} Saveur Laquée By I-Mah — Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
