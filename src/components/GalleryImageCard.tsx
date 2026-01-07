import { Box, Typography } from "@mui/material";

interface Props {
    image: string,
    title?:  string
}

const GalleryImageCard = ({image, title}: Props) =>  {
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                cursor: "pointer",
                "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",

                },
                "&:hover img": {
                    transform: "scale(1.1)",
                },
                "&:hover .overlay": {
                    opacity: 1,
                },
            }}
        >
            <img src={image} alt={title}/>

            {/* Overlay */}
            <Box
                className="overlay"
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.4s ease"
                }}
            >
                <Typography variant="h6" color="secondary.main">
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};
export default GalleryImageCard;