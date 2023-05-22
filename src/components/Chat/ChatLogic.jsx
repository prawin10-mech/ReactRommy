export const getSender = async (logedUser, users) => {
  if (logedUser._id === users[0]._id) {
    return {
      name: users[1].name,
      picture: users[1].pic,
      details: users[1].details,
    };
  } else {
    return {
      name: users[0].name,
      picture: users[0].pic,
      details: users[0].details,
    };
  }
};

export const getSenderNew = async (newusers, loginuser) => {
  return newusers[0]._id === loginuser._id ? newusers[1] : newusers[0];
};

export const isSameSender = (messages, m, i, loginuser) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== loginuser
  );
};

export const islastmessage = (messages, i, loginuser) => {
  
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== loginuser &&
    messages[messages.length - 1].sender._id 
  );
};

export const  isSameSenderMargin= (messages, m, i, loginuser)=>{
  if(i < messages.length - 1 &&
    messages[i + 1].sender._id !== m.sender._id &&
    messages[i].sender._id !== loginuser) return 33;
    else if(
      (i < messages.length - 1 &&
    messages[i + 1].sender._id !== m.sender._id &&
    messages[i].sender._id !== loginuser) || 
    (i===messages.length - 1 && messages[i].sender._id !== loginuser )
    ) return 0
    else return 0
}

export const isSameUser = (messages,m, i)=>{
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};





