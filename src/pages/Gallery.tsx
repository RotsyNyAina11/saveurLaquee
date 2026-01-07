import { Box, Container, Grid, Typography } from "@mui/material";
import GalleryImageCard from "../components/GalleryImageCard";


const images = [
    {src: "/src/assets/images/Akoho.jpg", title: "Poulet grillé"},
    {src: "/src/assets/images/Eshine.jpg", title: "Echine de Porc"},
    {src: "/src/assets/images/ribs.jpg", title: "Ribs de porc"},
    {src: "/src/assets/images/Sosisy.jpg", title: "Saucisse et Brochette de viande"},
];

const Gallery = () => {
    return (
        <>
            <Box
                sx={{
                    height: "35vh",
                    backgroundImage: "url('/src/assets/images/Akoho.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    color: "#fff"
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
                    <Typography variant="h3">Galerie</Typography>
                </Box>
            </Box>

            <Container sx={{ py: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Nos réalisation
                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Découvrez quelques-unes de nos créations culinaires et évènements réalisés avec passion.
                </Typography>

                <Grid container spacing={4}>
                    {images.map((img, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <GalleryImageCard 
                                image={img.src}
                                title={img.title}
                            />
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </>
    );
};
export default Gallery