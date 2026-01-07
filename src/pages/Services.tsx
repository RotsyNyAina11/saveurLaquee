import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import ServiceDetailCard from "../components/ServiceDetailCard";

const Services = () => {
    return (
        <>
            <Box
                sx={{
                    height: "40vh",
                    backgroundImage: "url('/src/assets/Akoho.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="h3" align="center">
                        Nos Services
                    </Typography>
                </Box>
            </Box>

            {/* Service Detaillees */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Une offre sur mesure pour chaque évènement
                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Saveur Laquée By I-Mah vous accompagne avec des prestations culinaires
                    raffinés et personnalisés
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={{xs: 12, md: 4}}>
                        <ServiceDetailCard 
                            title="Traiteur à domicile"
                            description="Nous préparons et servons des plats directement chez vous."
                            details={[
                                "Cuisine sur place ou Livrée",
                                "Produits frais et de quqlité",
                                "Présentation soignée",
                                "Service discret et professionnel"
                            ]}
                        />
                    </Grid>

                    <Grid size={{xs: 12, md: 4}}>
                        <ServiceDetailCard
                            title="Événements privés"
                            description="Des moments uniques sublimés par une cuisine d'exception"
                            details={[
                                "Mariage",
                                "Anniversaire",
                                "Baptême",
                                "Reception familiale",
                            ]}
                        />
                    </Grid>

                    <Grid size={{xs: 12, md: 4}}>
                        <ServiceDetailCard
                            title="Événements professionnels"
                            description="Une offre culinaire adaptée à vos évènements d'entreprise."
                            details={[
                                "Cocktails",
                                "Buffets",
                                "Repas d'affaires",
                                "Séminaires",
                            ]}
                        />
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <ServiceDetailCard
                            title="Menus personnalisés"
                            description="Des menus créés selon vos envies et votre budget."
                            details={[
                                "Cuisine locale et international",
                                "Options végétariennes et Fady Kisoa",
                                "Menus enfants",
                                "Adaptation aux contraintes alimentaires",
                            ]}
                        />
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <ServiceDetailCard
                            title="Chef à domicile"
                            description="Vivez l'expérience d'un chef privé chez vous."
                            details={[
                                "Dîners privés",
                                "Soirées spéciales",
                            ]}
                        />
                    </Grid>
                </Grid>

                {/* Processus */}
                <Box sx={{ backgroundColor: '#FFF8F0', py: 8}}>
                    <Container>
                        <Typography variant="h4" align="center" gutterBottom>
                            Comment ça marche ?
                        </Typography>

                        <Divider sx={{ mb: 4 }}/>
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 3}}>
                                <Paper sx={{ p: 3, textAlign: "center"}}>
                                    <Typography variant="h6">Contact</Typography>
                                    <Typography variant="body2">
                                        Vous nous contactez via le formulaire ou via WhatsApp/Facebook.
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3}}>
                                <Paper sx={{ p: 3, textAlign: "center"}}>
                                    <Typography variant="h6">Devis</Typography>
                                    <Typography variant="body2">
                                        Nous analysons  vos besoins et vous envoyons un devis.
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3}}>
                                <Paper sx={{ p: 3, textAlign: "center"}}>
                                    <Typography variant="h6">Validation</Typography>
                                    <Typography variant="body2">
                                        Vous validez la proposition.
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3}}>
                                <Paper sx={{ p: 3, textAlign: "center"}}>
                                    <Typography variant="h6">Événement</Typography>
                                    <Typography variant="body2">
                                        Nous occupons de tout le jour j.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* CTA */}
                <Box sx={{ py: 8, textAlign: "center"}}>
                    <Typography variant="h4" gutterBottom>
                        Prêt à organiser votre événement ?
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 4}}>
                        Contactez-nous dès maintenant pour un devis personnalisé.
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        href="/contact"
                    >
                        Demander un devis
                    </Button>
                </Box>


            </Container>
        </>
    );
}
export default Services