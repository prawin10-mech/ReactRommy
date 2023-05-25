import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import ContactUsText from "../components/Contactus/ContactUsText";
import UAE2 from "../assets/contact/UAE2.jpg";
import USA from "../assets/contact/USA.webp";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../utils/ToastOptions";

const ContactUs = () => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const token = localStorage.getItem("token");

  const handleDeleteUserAccount = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirmation = () => {
    setConfirmationDialogOpen(true);
  };

  console.log(email, password);

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.post(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/profile/delete-account",
        { email, password },
        { headers: { Authorization: token } }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.message, toastOptions);
        localStorage.removeItem("token");
      }
    } catch (err) {
      if (err.response.status === 404) {
        toast.error(err.response.data.message, toastOptions);
      }
      if (err.response.status === 403) {
        setConfirmationDialogOpen(true);
        toast.error(err.response.data.message, toastOptions);
      }
    } finally {
      setDeleteDialogOpen(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          <Avatar
            alt="USA"
            src={USA}
            variant="square"
            sx={{
              width: 100,
              height: 100,
              objectFit: "cover",
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
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={6} sx={{ my: { md: "1%" } }}>
          <Paper sx={{ backgroundColor: "#E6E6E6" }}>
            <ContactUsText />
          </Paper>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} my={2}>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteUserAccount}
        >
          Delete Account
        </Button>
      </Grid>
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle fontWeight={700}>Confirm Account Deletion</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            By deleting your account, all your personal information and ads will
            be deleted without the possibility of recovery. It is recommended to
            withdraw all the money in your account before performing this
            action, as Roomy Finder will not refund any money to deleted
            accounts.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleDeleteConfirmation}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={confirmationDialogOpen}
        onClose={() => setConfirmationDialogOpen(false)}
      >
        <DialogTitle>Confirm Account Deletion</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Please enter your email and password to confirm the account
            deletion.
          </Typography>
          {confirmationDialogOpen && (
            <>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmationDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </Container>
  );
};

export default ContactUs;
