import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    description: string;
    details: string[];
}

const ServiceDetailCard = ({ title, description, details }:  Props) => {
    return (
        <Card elevation={4} sx={{ height: "100%"}}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>

                <Box component="ul" sx={{ pl:2, mb:3 }}>
                    {details.map((item, index) =>(
                        <li key={index}>
                            <Typography variant="body2">{item}</Typography>
                        </li>
                    ))}
                </Box>

                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/contact"
                >
                    Demander un devis
                </Button>
            </CardContent>
        </Card>
    );
};

export default ServiceDetailCard;