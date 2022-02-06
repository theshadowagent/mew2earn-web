import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#B080FF",
        },
    },
    spacing: [0, 5, 10, 15, 20, 40, 60],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                },
                contained: {
                    height: "31px",
                    boxShadow: "0px 4px #7538D8",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "210px 31px",
                    transform: "skew(-10deg)",
                    color: "#fff",
                    borderRadius: "2px",
                    "&:hover": {
                        boxShadow: "0px 4px #7538D8",
                    },
                },
                outlined: {
                    padding: "0.5rem 1.5rem",
                    borderRadius: "2px",
                    "&:hover": {
                        boxShadow: "none"
                    },
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                label: {
                    color: "rgba(0, 0, 0, 0.6)"
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    '&::before': {
                        borderBottom: "0px !important",
                    },
                    '&::after': {
                        borderBottom: "0px !important",
                    }
                },
                input: {
                    paddingLeft: 16,
                    paddingRight: 16,
                    color: "#171A1F",
                    '&:-webkit-autofill': {
                        borderRadius: "inherit"
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "15px",
                    lineHeight: "24px",
                    transform: "translate(16px, 16px) scale(1)",
                    color: "#9D9FA3",
                    marginTop: "0 !important",
                },
                shrink: {
                    fontSize: "13px",
                    lineHeight: "18px",
                    transform: "translate(16px, 8px) scale(1)",
                    color: "#71747A"
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiFilledInput-root': {
                        paddingLeft: 16,
                        '& .MuiFilledInput-input': {
                            lineHeight: "24px",
                            padding: "0px",
                            paddingTop: "6px",
                            paddingBottom: "8px"
                        }
                    },
                }
            }
        }
    },
    typography: {
        fontFamily: "Circe, San Francisco, Roboto, Helvetica, sans-serif",
        button: {
            color: "#fff",
            fontWeight: 700,
            fontSize: "14px !important",
            textTransform: "none",
        },
        h1: {
            fontFamily: "Rubik, Circe, San Francisco, Roboto, Helvetica, sans-serif",
            fontSize: 20,
            lineHeight: 1.5,
            fontWeight: 900,
            color: "#fff",
            textTransform: "uppercase"
        },
        h4: {
            fontWeight: 600
        },
        h5: {
            fontWeight: 500
        },
        subtitle1: {
            marginTop: "16px !important",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.7)"
        },
        highlight: {
            fontWeight: 500,
            color: "rgba(0, 0, 0, 0.54)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: 4,
            padding: 2
        }
    },
});
