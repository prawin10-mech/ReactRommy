import {
  Box,
  Grid,
  Typography,
  TextField,
  Stack,
  Avatar,
  InputAdornment,
  Container,
  Button,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AttachmentIcon from "@mui/icons-material/Attachment";
import EmojiPicker from "emoji-picker-react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const Chat = () => {
  const [selectedChat, setselectedChat] = useState([]);
  const [openEmoji, setopenEmoji] = useState(false);
  const [userSearch, setuserSearch] = useState([]);
  const [Chat, setChat] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYzMjZiNTNjNTgzMzY1NDM3YjVlZTciLCJuYW1lIjoiR2h1bGFtIiwiZW1haSI6ImdodWxhbUBnbWFpbC5jb20iLCJwaWMiOiJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvOTE3NjMxOTgzMzcwNDYxMTg0L2JYUWpwa0RlXzQwMHg0MDAuanBnIiwiaWF0IjoxNjg0NDAwMzE4LCJleHAiOjE2ODQ0ODY3MTh9.vay_mYKQcflVWrUmUdbm1RqGgW3vU-Mb2guHKuYu6Hg";
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  // const getUserData=async()=>{
  //     const { Response } = await axios.post(
  //       "http://192.168.0.225:5005/api/chat",
  //       {
  //         userid: "64622835b8e5cd9a351b093b",
  //       },
  //       config
  //     );
  // }

  const createuserChat = async () => {
    try {
      const response = await axios.post("http://192.168.0.225:5005/api/chat", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // or any other required headers
        },
      });
      console.log("Response", response);
    } catch (err) {
      console.log(err);
    }
  };
  const getUserChatData = async (id) => {
    try {
      const response = await axios.get(
        "http://192.168.0.225:5005/api/chat",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // or any other required headers
          },
        },
        {
          userid: id,
        }
      );
      console.log("Response getUserChatData", response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserChatData();
  });
  const callapi = async (e) => {
    try {
      const response = await axios.get(
        `http://192.168.0.225:5005/api/user?search=${e.target.value}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // or any other required headers
          },
        }
      );
      setuserSearch(response.data.users);
      console.log("Response getcahat", response.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container xs={12} sm={12} sx={{ backgroundColor: "#E8E8E8" }}>
        <Typography variant="h4" sx={{ my: 2, mx: 2, pt: 1 }}>
          Chat
        </Typography>
        <Grid container xs={12} sx={{ display: "flex", flexDirection: "row" }}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              //   backgroundColor: "#f0ffff",
              display: "flex",
              flexDirection: "row",
              height: "100%",
              pr: 1,
            }}
          >
            <Box
              sx={{
                mx: 2,
                my: 1,
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                id="input-with-icon-textfield"
                label="Search"
                onChange={(e) => callapi(e)}
                variant="outlined"
              />

              <Box
                sx={{
                  mx: 2,
                  my: 1,
                  height: "500px",
                  width: "100%",
                  overflowY: "auto",
                  //  backgroundColor: "#f4544f"
                }}
              >
                {userSearch1 &&
                  userSearch1.map((val, id) => (
                    <>
                      <Paper
                        direction="row"
                        spacing={2}
                        sx={{
                          pt: 1,
                          pl: 1,
                          my: 1,
                          mr: 4,
                          //   border: "1px solid blue",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => createuserChat(val._id)}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                          name="OP"
                          sx={{
                            pl: 2,
                            // borderBottom: "1px solid #ee00ed",
                          }}
                        />
                        <Box
                          component="div"
                          sx={{
                            textOverflow: "ellipsis",
                            width: "100%",
                            px: 1,
                            // borderBottom: "1px solid #ee00ed",
                          }}
                        >
                          <Typography variant="h5">{val.name}</Typography>
                          <Typography variant="subtitle2">
                            Lorem Ipsum is simply dummy text
                          </Typography>
                        </Box>
                      </Paper>
                    </>
                  ))}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              // backgroundColor: "#f0ffff",
              height: "100%",
              pl: 1,
            }}
          >
            {openEmoji && (
              <Box sx={{ position: "absolute" }}>
                <EmojiPicker />
              </Box>
            )}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f0ffff",
                  p: 1,
                }}
              >
                <Box>
                  <Typography variant="h6">Ghulam</Typography>
                  <Typography variant="body2">Ghulam Suhani</Typography>
                </Box>
                <Typography variant="body1">Room mate</Typography>
              </Box>
              <Box
                sx={{
                  height: "464px",
                  overflowY: "auto",
                  //   backgroundColor: "#E8E8E8",
                }}
              >
                {chatdata.map((val, id) => (
                  <Typography
                    variant="body1"
                    sx={{
                      p: "8px 12px",
                      my: "4px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      maxWidth: "40%",
                    }}
                  >
                    {val.message}
                  </Typography>
                ))}
              </Box>

              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{ p: "10px" }}
                  aria-label="menu"
                  onClick={() => setopenEmoji(!openEmoji)}
                >
                  <SentimentDissatisfiedIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder=""
                  inputProps={{ "aria-label": "" }}
                />

                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <AttachmentIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                >
                  <SendRoundedIcon />
                </IconButton>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Chat;
const userSearch1 = [
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
  { name: "ghulam", pic: "acn.jpeg", msg: "sdfghjkxcvbn" },
];

const chatdata = [
  { message: "hello test" },
  { message: "hello test" },
  { message: "hello test" },
  { message: "hello test" },
  { message: "hello test" },
  {
    message:
      "hello test hello test hello test hello test hello test hello test",
  },
  { message: "hello test" },
  { message: "hello test" },
  { message: "hello test" },
  { message: "hello test" },
  {
    message:
      "hello test hello test hello test hello test hello test hello test",
  },
  {
    message:
      "hello test hello test hello test hello test hello test hello test",
  },
];
