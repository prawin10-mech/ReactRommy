import React, { useState, useEffect } from "react";
import RoomyFinderLogo from "../../assets/roomyFinderLogo.jpg.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Button,
  Stack,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { UserActions } from "../../store/User";
import axios from "axios";

const pages = ["About Us", "Contact Us", "Our Services", "Post Property"];
const pageNavigate = ["aboutUs", "contactUs", "", "postProperty"];

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const firstName = useSelector((state) => state.user.firstName);
  // const lastName = useSelector((state) => state.user.lastName);
  const avatar = useSelector((state) => state.user.profilePicture);
  const type = useSelector((state) => state.user.type);
  const [activeLink, setActiveLink] = useState("ourServices");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["Home", "My Account", "My Bookings", "Logout"];

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(UserActions.isLoggedIn(false));
    localStorage.removeItem("token");
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav("/", event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleItemClick = (pageUrl) => {
    handleCloseUserMenu();
    navigate(`${pageUrl}`);
  };

  const editProfileHandler = async () => {
    const { data } = await axios.get("");
    navigate("/editProfile");
  };

  const fetchUser = async () => {
    const id = JSON.parse(localStorage.getItem("user")).id;
    const { data } = await axios.get(
      `http://roomy-finder-evennode.ap-1.evennode.com/api/v1/profile/profile-info?userId=${id}`
    );
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(UserActions.firstName(data.firstName));
    dispatch(UserActions.lastName(data.lastName));
    dispatch(UserActions.country(data.country));
    dispatch(UserActions.gender(data.gender));
    dispatch(UserActions.email(data.email));
    dispatch(UserActions.fcmToken(data.fcmToken));
  };
  if (localStorage.getItem("token")) dispatch(UserActions.isLoggedIn(true));

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    fetchUser();
  });
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
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent={"center"}
        >
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
      {isLoggedIn && (
        <Box sx={{ flexGrow: 0, display: "flex" }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 0, width: "50px" }}
            >
              <Avatar
                alt="avatar Sharp"
                src={`${avatar}`}
                sx={{
                  width: 50,
                  height: 50,
                  border: "2px solid purple",
                }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Grid sx={{ backgroundColor: "#ccc", padding: "20px" }}>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Avatar
                  alt="avatar Sharp"
                  src={`${avatar}`}
                  sx={{
                    width: 50,
                    height: 50,
                    mb: 1,
                    border: "2px solid purple",
                  }}
                />

                <Typography sx={{ fontWeight: "700" }}>
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography>{type}</Typography>
              </Grid>
              <MenuItem key={"Edit Profile"} onClick={editProfileHandler}>
                <Typography textAlign="center">Edit Profile</Typography>
              </MenuItem>

              {settings.map((setting) => {
                let onClickHandler = handleCloseUserMenu;

                if (setting === "Logout") {
                  onClickHandler = handleLogout;
                } else if (setting === "My Bookings") {
                  onClickHandler = () => handleItemClick("/myBookings");
                } else if (setting === "Home") {
                  onClickHandler = () => handleItemClick("/");
                }

                return (
                  <MenuItem key={setting} onClick={onClickHandler}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                );
              })}
            </Grid>
          </Menu>
        </Box>
      )}
    </div>
  );
};

export default Nav;
