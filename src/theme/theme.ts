import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#8B0000",
        },
        secondary: {
            main: "#D4AF37",
        },
        background: {
            default: "#FFF8F0",
        },
    },

    typography: {
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
    },
});

export default theme;