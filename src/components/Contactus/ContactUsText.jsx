import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from '@mui/icons-material/Phone';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ContactUsText() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const emailAddress = "Support@roomyfinder.com"; // Replace with your email address

  const handleEmailClick = () => {
    const link = `mailto:${emailAddress}`;
    window.open(link, "_blank");
  };
  const whatsappNumber = "+971586133921"; // Replace with your WhatsApp number
  
  const handleWhatsAppClick = () => {
    const link = `https://wa.me/${whatsappNumber}`;
    window.open(link, '_blank');
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          mx: 2,
          display: "flex",
          flexDirection: "column",
          py: 8,
        }}
      >
        <Typography variant="h4" sx={{ my: 1 }}>
          Let's talk about Roomy Finder
        </Typography>
        <Typography variant="subtitle2">
          We're here to answer your questions and discuss the future of the
          Roomy Finder
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "blue",
                cursor: "pointer",
              }}
            >
              <PhoneIcon />

              <Typography variant="subtitle1" sx={{ mx: 2 }}>
                +971586133921
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={handleWhatsAppClick}
            >
              <WhatsAppIcon />
              <Typography variant="subtitle1" sx={{ mx: 2 }}>
                +971586133921
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={handleEmailClick}
            >
              <EmailIcon />
              <Typography variant="subtitle1" sx={{ mx: 2 }}>
                Support@roomyfinder.com
              </Typography>
            </Grid>

            <Grid item xs={12}></Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

 


