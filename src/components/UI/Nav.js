import React, { useState } from "react";
import RoomyFinderLogo from "../../assets/roomyFinderLogo.jpg.png";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import {
  Button,
  Stack,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

const pages = ["About Us", "Contact Us", "Our Services", "Post Property"];
const pageNavigate = ["aboutUs", "contactUs", "", "postProperty"];

const Nav = () => {
  const [activeLink, setActiveLink] = useState("ourServices");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  console.log(isLoggedIn);
  return (
    <div className="nav-container p-3 flex justify-between bg-white">
      <NavLink to={"/"} className="flex align-content-center">
        <img
          src={RoomyFinderLogo}
          alt="Roomy finder logo"
          width={70}
          className="mr-2"
        />
        <Stack sx={{ margiin: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bolder",
              color: "purple",
              display: { xs: "none", md: "flex" },
            }}
          >
            Roomy
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bolder",
              color: "purple",
              display: { xs: "none", md: "flex" },
            }}
          >
            Finder
          </Typography>
        </Stack>
      </NavLink>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page, index) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <NavLink to={`/${pageNavigate[index]}`}>
                <Typography
                  textAlign="center"
                  sx={{
                    color: "purple",
                  }}
                >
                  {page}
                </Typography>
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ m: "auto", display: { xs: "none", md: "flex" } }}
      >
        <Button
          color={activeLink === "aboutUs" ? "primary" : "inherit"}
          sx={{
            borderRadius: "10px",
            fontWeight: "bold",
            color: activeLink === "aboutUs" ? "#fff" : "purple",
            backgroundColor:
              activeLink === "aboutUs" ? "purple" : "transparent",
            "&:hover": {
              backgroundColor: "purple",
              color: "#fff",
            },
          }}
          onClick={() => handleClick("aboutUs")}
          component={NavLink}
          to={"/aboutUs"}
        >
          About Us
        </Button>
        <Button
          color={activeLink === "ourServices" ? "primary" : "inherit"}
          sx={{
            borderRadius: "10px",
            fontWeight: "bold",
            color: activeLink === "ourServices" ? "#fff" : "purple",
            backgroundColor:
              activeLink === "ourServices" ? "purple" : "transparent",
            "&:hover": {
              backgroundColor: "purple",
              color: "#fff",
            },
          }}
          onClick={() => handleClick("ourServices")}
          component={NavLink}
          to={"/"}
        >
          Our Services
        </Button>
        <Button
          color={activeLink === "contactUs" ? "primary" : "inherit"}
          sx={{
            borderRadius: "10px",
            fontWeight: "bold",
            color: activeLink === "contactUs" ? "#fff" : "purple",
            backgroundColor:
              activeLink === "contactUs" ? "purple" : "transparent",
            "&:hover": {
              backgroundColor: "purple",
              color: "#fff",
            },
          }}
          onClick={() => handleClick("contactUs")}
          component={NavLink}
          to={"/contactUs"}
        >
          Contact Us
        </Button>
        <Button
          color={activeLink === "postProperty" ? "primary" : "inherit"}
          sx={{
            borderRadius: "10px",
            fontWeight: "bold",
            color: activeLink === "postProperty" ? "#fff" : "purple",
            backgroundColor:
              activeLink === "postProperty" ? "purple" : "transparent",
            "&:hover": {
              backgroundColor: "purple",
              color: "#fff",
            },
          }}
          onClick={() => handleClick("postProperty")}
          component={NavLink}
          to={"/postProperty"}
        >
          Post Property
        </Button>
      </Stack>

      {!isLoggedIn && (
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            variant="contained"
            color={activeLink === "login" ? "primary" : "inherit"}
            sx={{
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "orange",
              border: "2px solid orange",
              "&:hover": {
                backgroundColor: "white",
                color: "orange",
              },
            }}
            onClick={() => handleClick("login")}
            component={NavLink}
            to={"/login"}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color={activeLink === "postProperty" ? "primary" : "inherit"}
            sx={{
              borderRadius: "10px",
              fontWeight: "bold",
              color: "orange",
              backgroundColor: "white",
              border: "2px solid orange",
              "&:hover": {
                backgroundColor: "orange",
                color: "white",
              },
            }}
            onClick={() => handleClick("signUp")}
            component={NavLink}
            to={"/signup"}
          >
            Sign Up
          </Button>
        </Stack>
      )}
      {isLoggedIn && <Logout />}
    </div>
  );
};

export default Nav;
