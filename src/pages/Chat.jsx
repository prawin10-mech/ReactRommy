import {
  Box,
  Grid,
  Typography,
  TextField,
  Avatar,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";

import ChatBody from "../components/Chat/ChatBody";

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [handleSearch, setHandleSearch] = useState("");
  const token = localStorage.getItem("token");

  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  const getConversations = async () => {
    try {
      const { data } = await axios.get(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/messages/conversations",
        { headers: { Authorization: token } }
      );
      setConversations(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getConversationMessages = async (conversation) => {
    const { data } = await axios.get(
      `https://roomy-finder-evennode.ap-1.evennode.com/api/v1/messages/?otherId=${conversation.otherId}`,
      { headers: { Authorization: token } }
    );
    setMessages(data);
    setUser(conversation);
  };

  const sendMessage = async (newMessage) => {
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

      // Retrieve the updated conversation list
      getConversations();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  return (
    <>
      <Container
        xs={12}
        sm={12}
        sx={{
          backgroundColor: "#E8E8E8",
          height: "calc(100% - 200px)",
        }}
      >
        <Typography variant="h4" sx={{ my: 2, mx: 2, pt: 1 }}>
          Chat
        </Typography>
        <Grid container xs={12} sx={{ display: "flex", flexDirection: "row" }}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
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
                variant="outlined"
              />
              {conversations.map((conversation) => {
                const createdAt = new Date(conversation?.lastMessage.createdAt);
                const hours = createdAt.getHours();
                const minutes = createdAt.getMinutes();
                return (
                  <Grid
                    container
                    justifyContent="space-between"
                    sx={{ bgcolor: "grey", my: 1, cursor: "pointer" }}
                    onClick={() => getConversationMessages(conversation)}
                    key={conversation.id}
                  >
                    <Grid container alignItems="center">
                      <Avatar />
                      <Grid item>
                        <Typography sx={{ fontWeight: 600 }}>
                          {conversation?.other?.firstName}{" "}
                          {conversation?.other?.lastName}
                        </Typography>
                        <Typography>
                          {conversation?.lastMessage?.body}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography>{`${hours}:${minutes}`}</Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              height: "100%",
              pl: 1,
            }}
          >
            {openEmoji && (
              <Box sx={{ position: "absolute" }}>
                <EmojiPicker />
              </Box>
            )}
            {user && (
              <ChatBody
                user={user}
                messages={messages}
                messageSended={sendMessage}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Chat;
