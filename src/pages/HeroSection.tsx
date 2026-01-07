import { Box, Button, Typography } from "@mui/material";

const HeroSection = () => {
    return(
        <Box
            sx={{
                height: "90vh",
                backgroundImage:"url('/src/assets/images/grillade.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                color: "#fff",
                position: "relative"
            }}
        >
            <Box
                sx={{
                    pt: 8,
                    backgroundColor:"rgba(0, 0, 0, 0.6)",
                    width: "100%",
                    height: "100%",
                    display: "felx",
                    alignItems: "center",
                    paddingLeft: { xs: 2, md: 8},
                }}
            >
                <Box maxWidth="500px">
                    <Typography variant="h2" gutterBottom>
                        Saveur Laquée By I-Mah
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 3 }}>
                        L'excellence culinaire à Domicile pour vos évènements privés et 
                        professionnels
                    </Typography>

                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{
                            fontWeight: 600,
                        }}
                    >
                        Demander un devis
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;