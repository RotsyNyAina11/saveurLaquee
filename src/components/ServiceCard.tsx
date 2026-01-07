import { Card, CardContent, Typography } from "@mui/material";

interface Props {
    title: string;
    description: string;
}

const ServiceCard = ({ title, description }: Props) => {
    return(
        <Card elevation={4} sx={{ height: "100%"}}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>

                <Typography variant="body2" gutterBottom>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;