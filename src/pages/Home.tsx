import { Box, Container, Grid, Typography } from "@mui/material";
import HeroSection from "./HeroSection";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
    return(
        <>
            <Box sx={{ pt: 8 }}>
                <HeroSection/>
            </Box>
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Nos services
                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 5 }}
                >
                    un service traiteur sur mesure, directement chez vous 
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={{ xs:12, md:4}}>
                        <ServiceCard
                            title="Traiteur à Domicille"
                            description="Préparation de plats raffinés directement chez vous pour une éxperience unique."
                        />
                    </Grid>

                    <Grid size={{ xs:12, md:4}}>
                        <ServiceCard
                            title="Événements privés"
                            description="Mariage, anniversaire, baptême : nous sublimons vos moments importants."
                        />
                    </Grid>

                    <Grid size={{ xs:12, md:4}}>
                        <ServiceCard
                            title="Menus personnalisés"
                            description="Des menus adaptés à vos goûts, votre Budget et vos besoins."
                        />
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};
export default Home;