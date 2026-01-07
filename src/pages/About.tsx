import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";

const About = () => {
    return (
        <>
            <Box
                sx={{
                    height: "40vh",
                    backgroundImage: "url('/src/assets/images/Akoho.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "rgba(0,0,0,0.6)",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="h3" align="center">
                     À propos de Saveur Laquée By I-Mah
                    </Typography>
                </Box>
            </Box>
            
            {/* Tantara be */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 6}}>
                        <Typography variant="h4" gutterBottom>
                            Notre Histoire
                        </Typography>

                        <Typography color="text.secondary" paragraph>
                            Saveur Laquée By-Imah est né d'une passion profonde pour la cuisine et le partage.
                            Chaque plat est pensé comme une expérience gustative unique, alliant créativité,
                            authenticité et raffinement.
                        </Typography>

                        <Typography>
                            Nous accompagnons nos clients dans leurs évènements privés et professionnels en proposant
                            une cuisine sur mesure, réalisée avec des produits frais et de qualité.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6}}>
                        <Paper elevation={4} sx={{ p: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                Notre mission
                            </Typography>
                            <Typography color="text.secondary">
                                Offrir un service traiteur à domicile de qualité, accessible, élégant et personnalisé,
                                en créant des moments inoubliables autour de la table.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Valeur*/}
            <Box sx={{ backgroundColor: "#FFF8F0", py: 8 }}>
                <Container>
                    <Typography variant="h4" align="center" gutterBottom>
                        Nos valeurs
                    </Typography>

                    <Divider sx={{ mb: 4 }}/>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4}}>
                            <Paper sx={{ p: 3, textAlign: "center"}}>
                                <Typography variant="h6">Qualité</Typography>
                                <Typography variant="body2">
                                    Des ingrédients soigneusement séléctionnés et une préparation mminutieuses.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4}}>
                            <Paper sx={{ p: 3, textAlign: "center"}}>
                                <Typography variant="h6">Passion</Typography>
                                <Typography variant="body2">
                                    Chaque plat est réalisé avec amour et créativité.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4}}>
                            <Paper sx={{ p: 3, textAlign: "center"}}>
                                <Typography variant="h6">Engagement</Typography>
                                <Typography variant="body2">
                                    Un accompagnement sérieux du premier contact jusqu'au jour J.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Fa maninona no misafidy anay */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Pourquoi nous choisir?
                </Typography>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Paper sx={{ p: 3, textAlign: "center"}}>
                            <Typography variant="h6">Expertise</Typography>
                            <Typography variant="body2">
                                Un savoir-faire culinaire professionel.
                            </Typography>
                        </Paper>
                    </Grid>
                    
                    <Grid size={{ xs: 12, md: 3}}>
                        <Paper sx={{ p:3, textAlign: "center"}}>
                            <Typography variant="h6">Sur mesure</Typography>
                            <Typography variant="body2" >
                                Des prestations adaptées à chaque client.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Paper sx={{ p: 3, textAlign: "center"}}>
                            <Typography variant="h6">Confiance</Typography>
                            <Typography variant="body2">
                                Transparence, écoute et professionnalisme.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Paper sx={{ p: 3, textAlign: "center"}}>
                            <Typography variant="h6">Satisfaction</Typography>
                            <Typography variant="body2">
                                Des clients satisfaites et fidèles.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Cta */}
            <Box sx={{ py: 8, textAlign: "center"}}>
                <Typography variant="h4" gutterBottom>
                    Envie de travailler avec nous ?
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>
                    Contactez-nous pour discuter de votre évènements.
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
        </>
    );
};
export default About;