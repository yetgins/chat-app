import React, { useState } from "react";
import {
  MessageContainer,
  MyMessage,
  ReceivedMessage,
  MessageList,
  RoomContainer,
  RoomTextArea,
  Button,
} from "./ChatRoom.styles";
import useChat from "../../useChat";
const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const [newMessage, setNewMessage] = useState("");
  const { messages, sendMessage } = useChat(roomId);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };
  
  return (
    <RoomContainer>
      <h2>Welcome to {roomId} </h2>
      <MessageContainer>
        <MessageList>
          {messages.map((message, i) => (
               message.ownedByCurrentUser ? <MyMessage key={i}>{message.body}</MyMessage> : <ReceivedMessage key={i}>{message.body}</ReceivedMessage>
            
          ))}
        </MessageList>
      </MessageContainer>
      <RoomTextArea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write"
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </RoomContainer>
  );
};

export default ChatRoom;
