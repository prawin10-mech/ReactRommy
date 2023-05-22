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
import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AttachmentIcon from "@mui/icons-material/Attachment";
import EmojiPicker from "emoji-picker-react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import LIstofChatUser from "../components/Chat/LIstofChatUser";
import SearchItem from "../components/Chat/SearchItem";
import ChatBody from "../components/Chat/ChatBody";


const initialState = {
  name: "",
  val: "",
  senders: "",
  senderfull: "",
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, ...action.field };
    case "RESET_FIELDS":
      return initialState;
    default:
      return state;
  }
};


const Chat = () => {
  const [selectedChat, setselectedChat] = useState([]);
  const [reciver, setreciver] = useState({
    userDetails:"",
    ChatId:""
  });
  const [openEmoji, setopenEmoji] = useState(false);
  const [checksearch, setchecksearch] = useState(false);
  const [handleSearch, sethandleSearch] = useState('');
  const [userSearch, setuserSearch] = useState([]);
  const [listOfChatUser1, setlistOfChatUser] = useState([]);
  const [Chat, setChat] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYzMjZiNTNjNTgzMzY1NDM3YjVlZTciLCJuYW1lIjoiR2h1bGFtIiwiZW1haSI6ImdodWxhbUBnbWFpbC5jb20iLCJwaWMiOiJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvOTE3NjMxOTgzMzcwNDYxMTg0L2JYUWpwa0RlXzQwMHg0MDAuanBnIiwiaWF0IjoxNjg0NjcyMjc0LCJleHAiOjE3MTYyMDgyNzR9.ZExDiBb0Vmv27JpgQunZFHwTV5VuZrOgrDDaL6fRU98";
  const createuserChat = async (val) => {
    sethandleSearch("")
    try {
      const response = await axios
        .post(
          "http://192.168.0.225:5005/api/chat",

          {
            userid: val,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json", // or any other required headers
            },
          }
        )
        .then((val) => {
            setchecksearch(false);
        
          setlistOfChatUser([val.data, ...listOfChatUser1]);
        });
    }  catch (err) {
      console.log(err);
    }
  };
  const getUserChatData = async (id) => {
    try {
      const response = await axios
        .get("http://192.168.0.225:5005/api/chat", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // or any other required headers
          },
        })
        .then((val) => {
          setlistOfChatUser(val.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserChatData();
  },[]);
  const callapi = async (e) => {
    if (e.target.value.length>0){
      setchecksearch(true)
    }else{
      setchecksearch(false);
    }
    sethandleSearch(e.target.value);
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
        // sethandleSearch("");
        setuserSearch(response.data.users);
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
                name="handleSearch"
                value={handleSearch}
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
                {checksearch === true ? (
                  <SearchItem
                    userSearch={userSearch}
                    createuserChat={createuserChat}
                  />
                ) : (
                  <LIstofChatUser
                    listOfChatUser1={listOfChatUser1}
                    dispatch={dispatch}
                    setreciver={setreciver}
                  />
                )}
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
            {/* <Box>
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
            </Box> */}
            <ChatBody state1={state} reciver={reciver} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Chat;

