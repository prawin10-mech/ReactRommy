

import React, { useEffect, useState } from "react";
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
import { getSender, getSenderNew } from "../Chat/ChatLogic";
import ChatBody from "./ChatBody";



const ListofChatUser = ({ listOfChatUser1, dispatch, setreciver }) => {
  const [senders, setSenders] = useState([]);
  const [selectChatUser, setselectChatUser] = useState("");

  useEffect(() => {
    const fetchSenders = async () => {
      if (Array.isArray(listOfChatUser1)) {
        const senderPromises = listOfChatUser1.map((val) => renderSender(val));
        const senders = await Promise.all(senderPromises);
        setSenders(senders);
      }
    };

    fetchSenders();
  }, [listOfChatUser1]);
  //   console.log(senders, "senders");
  const renderSender = async (val) => {
    if (val.isGroupName) {
      return {
        name: val.chatName,
        picture: "", // Add the group picture URL or leave it empty
        details: "", // Add group details if needed
      };
    } else {
      try {
        const sender = await getSender(data, val.users);
        // console.log("serfre", sender);
        return {
          name: sender.name,
          picture: sender.picture,
          details: sender.details,
        };
      } catch (error) {
        // Handle error, if needed
        return null;
      }
    }
  };

  const GoTochatui = async (val, senders, name) => {
    try {
      const getallinfo = await getSenderNew(val.users, data);
      setreciver({
        userDetails: getallinfo,
        ChatId: val._id,
      });
      // console.log("getallinfo============================", getallinfo);
    } catch (err) {
      console.log(err);
    }
    setselectChatUser(val);
    dispatch({
      type: "UPDATE_FIELD",
      field: {
        name: name,
        val: val,
        senders: senders,
        senderfull: "",
      },
    });
    //    <ChatBody val={val} senders={senders} />

    // Do additional logic or send data to another component
  };

  useEffect(() => {}, []);

  return (
    <>
      {Array.isArray(listOfChatUser1) &&
        listOfChatUser1.map((val, id) => (
          <React.Fragment key={id}>
            <Paper
              direction="row"
              spacing={2}
              onClick={() => GoTochatui(val, senders, senders[id]?.name)}
             
              // backgroundColor={selectChatUser !== "" ? "#fff000" : "#00ff00"}
              sx={{
                pt: 1,
                pl: 1,
                my: 1,
                mr: 4,
                backgroundColor: `${
                  senders[id]?._id !== data._id ? "#BEE3F8" : "#B9F5D0"
                }`,

                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={senders[id]?.picture || "/static/images/avatar/1.jpg"}
                name="OP"
                sx={{
                  pl: 2,
                }}
              />
              <Box
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  width: "100%",
                  px: 1,
                }}
              >
                <Typography variant="h5">{senders[id]?.name}</Typography>
                <Typography variant="subtitle2">
                  {senders[id]?.details || "Lorem Ipsum is simply dummy text"}
                </Typography>
              </Box>
            </Paper>
          </React.Fragment>
        ))}
    </>
  );
};

export default ListofChatUser;




const data= {
        "_id": "646326b53c583365437b5ee7",
        "name": "Ghulam",
        "emai": "ghulam@gmail.com",
        "pic": "https://pbs.twimg.com/profile_images/917631983370461184/bXQjpkDe_400x400.jpg"
    }
