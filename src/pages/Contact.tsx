import { Mail, Phone} from "@mui/icons-material";
import { Box, Button, Container, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return(
        <Box sx={{ py: 10 }}>
            <Container>
                <Typography variant="h6" align="center" gutterBottom>
                    Contact & Demande de devis
                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Parlez-nous de votre évènements, nous vous répondrons rapidement.
                </Typography>

                <Grid container spacing={4}>
                    {/* Formulaire */}
                    <Grid size={{ xs: 12, md: 7}}>
                        <Paper elevation={4} sx={{ p: 4 }}>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 6}}>
                                        <TextField 
                                            fullWidth
                                            label= "Nom complet"
                                            name="name"
                                            required
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6}}>
                                        <TextField
                                            fullWidth
                                            label="Téléphone"
                                            name="phone"
                                            required
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            type="email"
                                            required
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6}}>
                                        <TextField
                                            select
                                            fullWidth
                                            label="Type d'évènement"
                                            name="eventType"
                                            required
                                            onChange={handleChange}
                                        >
                                        <MenuItem value="Anniversaire">Anniversaire</MenuItem>
                                        <MenuItem value="Mariage">Mariage</MenuItem>
                                        <MenuItem value="Baptême">Baptême</MenuItem>
                                        <MenuItem value="Événement pro">Événement professionnel</MenuItem>
                                        <MenuItem value="Autre">Autre</MenuItem>
                                        </TextField>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6}}>
                                        <TextField 
                                            fullWidth
                                            type="date"
                                            label="Date de l'évènement"
                                            name="eventDate"
                                            InputLabelProps={{shrink: true}}
                                            onChange={handleChange}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <TextField 
                                            fullWidth
                                            label="Message"
                                            name="message"
                                            multiline
                                            rows={4}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            fullWidth
                                        >
                                            Envoyer la demande
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>

                    {/* Info & WhatsApp*/}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
                            <Typography variant="h6" gutterBottom>
                                contact direct
                            </Typography>

                            <Typography color="text.secondary">
                                Traiteur à Domicile
                            </Typography>
                            <Typography color="text.secondary">
                                <Phone/> +261 34 88 305 97
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 3 }}>
                                <Mail/> randriamboavonjyrotsy@gmail.com
                            </Typography>

                            <Button
                                variant="outlined"
                                color="success"
                                startIcon={<WhatsAppIcon />}
                                href="https://wa.me/261348830597"
                                target="blank"
                                fullWidth
                            >
                                Contacter via WhatsApp
                            </Button>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
export default Contact;