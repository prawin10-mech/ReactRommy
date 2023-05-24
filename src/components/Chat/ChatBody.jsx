import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import axios from "axios";

const ChatBody = ({ user, messages }) => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const token = localStorage.getItem("token");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setChatMessages(messages);
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    try {
      const { data } = await axios.post(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/messages/send",
        {
          recieverFcmToken: user.other.fcmToken,
          recieverId: user.otherId,
          type: "text",
          body: newMessage,
        },
        { headers: { Authorization: token } }
      );
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessageInputHandler = (e) => {
    setNewMessage(e.target.value);
  };

  console.log(user);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#075e54",
          padding: "8px 16px",
          color: "#fff",
        }}
      >
        <Box>
          <Typography variant="body1" fontWeight={700}>
            {user?.other?.firstName} {user?.other?.lastName}
          </Typography>
        </Box>
        <Typography variant="body2">{user?.other?.type}</Typography>
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 200px)",
          overflowY: "auto",
          padding: "16px",
        }}
      >
        {chatMessages.reverse().map((message) => {
          const isCurrentUser = message?.senderId === user?.otherId;
          return (
            <Grid
              key={message.id}
              sx={{
                backgroundColor: isCurrentUser ? "purple" : "blue",
                color: "#fff",
                padding: "8px",
                borderRadius: "8px",
                marginBottom: "8px",
                alignSelf: isCurrentUser ? "flex-start" : "flex-end",
                marginLeft: isCurrentUser ? 0 : "auto",
                marginRight: isCurrentUser ? "auto" : 0,
                maxWidth: "70%",
              }}
            >
              <Typography variant="body1">{message.body}</Typography>
            </Grid>
          );
        })}
        <div ref={messagesEndRef} />
      </Box>

      <Paper
        component="form"
        sx={{
          p: "4px",
          display: "flex",
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#f0f0f0",
        }}
      >
        <IconButton
          sx={{ p: "10px" }}
          aria-label="menu"
          onClick={() => setOpenEmoji(!openEmoji)}
        >
          <SentimentDissatisfiedIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            borderRadius: "20px",
            backgroundColor: "#fff",
            padding: "8px",
          }}
          placeholder="Type a message"
          value={newMessage}
          inputProps={{ "aria-label": "" }}
          onChange={sendMessageInputHandler}
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
          sx={{ p: "10px", color: "#075e54" }}
          aria-label="directions"
        >
          <SendRoundedIcon onClick={sendMessage} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default ChatBody;
