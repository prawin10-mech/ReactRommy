import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Paper, Typography, Avatar } from "@mui/material";
import ContactUsForm from "../components/Contactus/ContactUsForm";
import ContactUsText from "../components/Contactus/ContactUsText";
import UAE from "../assets/contact/UAE.png";
import UAE2 from "../assets/contact/UAE2.jpg";
import UAE1 from "../assets/contact/UAE1.htm";
import USA from "../assets/contact/USA.webp";

const ContactUs = () => {
 return (
   <Container>
     <Grid container sx={{ my: { md: "5%" } }}>
       <Grid
         item
         md={6}
         sx={{
           display: "flex",
           flexDirection: "row",
           justifyContent: "left",
           gap: 2,
         }}
       >
         {/* <img
           src={UAE}
           alt="UAE"
           height="50px"
           style={{ aspectRatio: "5/3" }}
         /> */}
         <Avatar
           alt="UAE"
           src={UAE2}
           variant="square"
           sx={{
             width: 100,
             height: 100,
             objectFit: "cover",
             //  borderRadius: "50%",
           }}
         />
         <Box>
           <Typography variant="subtitle1">United Arab Emirates</Typography>
           <Typography variant="subtitle1">
             Location : Dubai, 16, Misakin St, Al Danah 22213
           </Typography>
           <Typography variant="subtitle1">Tel +971 50 601 3921</Typography>
         </Box>
       </Grid>
       <Grid
         item
         md={6}
         sx={{
           display: "flex",
           flexDirection: "row",
           justifyContent: "left",
           gap: 2,
         }}
       >
         {/* <img
           src={USA}
           alt="UAE"
           height="50px"
           style={{ aspectRatio: "5/3" }}
         /> */}
         <Avatar
           alt="USA"
           src={USA}
           variant="square"
           sx={{
             width: 100,
             height: 100,
             objectFit: "cover",

             //  borderRadius: "50%",
           }}
         />
         <Box>
           <Typography variant="subtitle1">United State of America</Typography>
           <Typography variant="subtitle1">
             Location : Global Strategy Catalyst Group LLc 401 Ryland St,Suit
             200-A, Reno, Nv. 89502
           </Typography>
           <Typography variant="subtitle1">Tel +1412 403 3921</Typography>
         </Box>
       </Grid>
     </Grid>

     <Grid
       container
       spacing={2}
       sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
     >
       <Grid item xs={12} sm={12} md={6} sx={{ my: { md: "1%" } }}>
         <Paper sx={{ backgroundColor: "#E6E6E6" }}>
           <ContactUsText />
         </Paper>
       </Grid>
       <Grid item xs={12} sm={12} md={6} sx={{ my: { md: "1%" } }}>
         {/* <Paper> */}
         <ContactUsForm />
         {/* </Paper> */}
       </Grid>
     </Grid>
   </Container>
 );
};

export default ContactUs;
