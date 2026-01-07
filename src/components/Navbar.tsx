import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "react-router-dom";

const  navItems = [
    { label: "Accueil", path: "/"},
    { label: "À propos", path: "/about"},
    { label: "Services", path: "/services"},
    { label: "Galerie", path: "/gallery"},
    { label: "Contact", path: "/contact"},
];

const Navbar = () => {
    const [mobileopen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileopen);
    };

    return(
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.85)",
                    backdropFilter: "blur(6px)",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between"}}>
                    {/* Logo */}
                    <Typography
                        component={Link}
                        to={"/"}
                        variant="h6"
                        sx={{
                            textDecoration: "none",
                            color: "secondary.main",
                            fontWeight: 700,
                            letterSpacing: 1,
                        }}
                    >
                        Saveur Laquée By I-Mah
                    </Typography>

                    <Box sx={{ display: { xs: "none", md: "flex"}, gap: 3 }}>
                        {navItems.map((item) => (
                        <Button
                            key={item.label}
                            component={Link}
                            to={item.path}
                            sx={{
                            color: "#fff",
                            fontWeight: 500,
                            textTransform: "none", 
                            "&:hover": {
                                color: "secondary.main",
                            },
                            }}
                        >
                            {item.label}
                        </Button>
                        ))}

                            <Button
                                variant="contained"
                                color="secondary"
                                component={Link}
                                to={"/contact"}
                                sx={{
                                    ml: 2,
                                    fontWeight: 600,
                                }}
                            >
                                Demander un Devis
                            </Button>
                    </Box>

                    <IconButton
                        color="inherit"
                        edge="end"
                        sx={{
                            display: { md: "none"}
                        }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <Drawer
                anchor="right"
                open={mobileopen}
                onClose={handleDrawerToggle}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 250,
                        backgroundColor: "#111",
                        color: "#fff",
                    }
                }}
            >
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={item.path}
                                onClick={handleDrawerToggle}
                            >
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <ListItem>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to={"/contact"}
                            onClick={handleDrawerToggle}
                        >
                            Demander un devis
                        </Button>
                    </ListItem>
                </List>
            </Drawer>

        </>
    );
};
export default Navbar;