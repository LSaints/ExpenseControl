import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#90caf9",
        },

        secondary: {
            main: "#f48fb1",
        },

        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },

        text: {
            primary: "#ffffff",
            secondary: "#b0b0b0",
        },
    },

    typography: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },

    shape: {
        borderRadius: 10,
    },

    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },

        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    padding: "16px"
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 8,
                },
            },
        },
    },
});