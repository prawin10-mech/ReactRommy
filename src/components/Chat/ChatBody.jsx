import React, { useEffect, useState } from 'react'
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
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AttachmentIcon from "@mui/icons-material/Attachment";
import EmojiPicker from "emoji-picker-react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import axios from 'axios';
import {
  getSender,
  getSenderNew,
  isSameSender,
  islastmessage,
  isSameSenderMargin,
  isSameUser,
} from "./ChatLogic";


const ChatBody = ({reciver}) => {
  
  const [openEmoji, setopenEmoji] = useState(false);
  const [chatData, setchatData] = useState([]);
  const [newMessage, setnewMessage] = useState('');

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYzMjZiNTNjNTgzMzY1NDM3YjVlZTciLCJuYW1lIjoiR2h1bGFtIiwiZW1haSI6ImdodWxhbUBnbWFpbC5jb20iLCJwaWMiOiJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvOTE3NjMxOTgzMzcwNDYxMTg0L2JYUWpwa0RlXzQwMHg0MDAuanBnIiwiaWF0IjoxNjg0NjcyMjc0LCJleHAiOjE3MTYyMDgyNzR9.ZExDiBb0Vmv27JpgQunZFHwTV5VuZrOgrDDaL6fRU98";
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getChatData = async () => {
    console.log(reciver);
    if (reciver.userDetails === "" || reciver.ChatId ==="") return;
      try {
        const response = await axios
          // .get(`http://192.168.1.104:5005/api/message/64636b3807a086db964cddfd`, {
          .get(`http://192.168.0.225:5005/api/message/${reciver.ChatId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json", // or any other required headers
            },
          })
          .then((val) => {
            setchatData([...val.data]);
            console.log(val.data);
            // setchatData([...chatData,...val.data]);
          });
      } catch (err) {
        console.log(err);
      }
  };

  useEffect(() => {
    getChatData()
  }, [reciver]);

  const sendchatdata = async(event)=>{
    if(event.key==="ENTER" && newMessage){
      try {
        setnewMessage("")
        const response = await axios
          // .get(`http://192.168.1.104:5005/api/message/64636b3807a086db964cddfd`, {
          .post(
            `http://192.168.0.225:5005/api/message/`,
            {
              content: newMessage,
              chatId: reciver.ChatId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json", // or any other required headers
              },
            }
          )
          .then((val) => {
            // setchatData([...chatData, val.data]);
            console.log("clickenter", val);
          });
      } catch (err) {
        console.log(err);
      }
    }
    try {
      setnewMessage("");
      const response = await axios
        .post(
          `http://192.168.0.225:5005/api/message/`,
          {
            content: newMessage,
            chatId: reciver.ChatId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json", // or any other required headers
            },
          }
        )
        .then((val) => {
          console.log("click", [...chatData, val.data]);
          setchatData([...chatData, val.data]);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const getinputdata = (e)=>{
    setnewMessage(e.target.value);
    console.log("e.target.value", e.target.value);
    // e.target.value
  }
  
  return (
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
          <Typography variant="h6">{reciver.userDetails.name}</Typography>
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
        {chatData.map((val, id) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              // marginTop: isSameUser(chatData, val, id) ? 3 : 10,
              // marginLeft: isSameSenderMargin(chatData, val, id, data._id),
            }}
          >
            {/* {(isSameSender(chatData, val, id, data._id) ||
              islastmessage(chatData, id, data._id)) && (
              <Avatar
                alt="Remy Sharp"
                src={val.sender.pic}
                // name={val.sender.name}
                sx={{
                  pl: 2,
                  mx: 2,
                  my: 1,
                }}
              />
            )} */}

            <Typography
              variant="body1"
              sx={{
                p: "8px 12px",
                my: "4px",
                // marginTop:isSameUser(chatData, val, id)?3:10,
                // marginLeft: isSameSenderMargin(chatData, val, id, data._id),
                marginLeft:`${val.sender._id === data._id ? "auto" : "0px"}`,
                backgroundColor: `${
                  val.sender._id === data._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                borderRadius: "20px",
                maxWidth: "40%",
              }}
            >
              {val.content}
            </Typography>
          </Box>
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
          onChange={getinputdata}
        />

        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <AttachmentIcon />
        </IconButton>
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <SendRoundedIcon onClick={sendchatdata} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default ChatBody

const data = {
  _id: "646326b53c583365437b5ee7",
  name: "Ghulam",
  emai: "ghulam@gmail.com",
  pic: "https://pbs.twimg.com/profile_images/917631983370461184/bXQjpkDe_400x400.jpg",
};



// const chatdata = [
//   { message: "hello test" },
//   { message: "hello test" },
//   { message: "hello test" },
//   { message: "hello test" },
//   { message: "hello test" },
//   {
//     message:
//       "hello test hello test hello test hello test hello test hello test",
//   },
//   { message: "hello test" },
//   { message: "hello test" },
//   { message: "hello test" },
//   { message: "hello test" },
//   {
//     message:
//       "hello test hello test hello test hello test hello test hello test",
//   },
//   {
//     message:
//       "hello test hello test hello test hello test hello test hello test",
//   },
// ];
