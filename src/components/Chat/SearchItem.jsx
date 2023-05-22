import React from 'react'
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

const SearchItem = ({ userSearch,createuserChat }) => {
    // console.log("userSearch", userSearch);
  return (
    <>
      {userSearch?.map((val, id) => (
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
    </>
  );
};

export default SearchItem