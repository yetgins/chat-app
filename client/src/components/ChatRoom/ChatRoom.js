import React, { useState } from "react";
import {
  MessageContainer,
  MyMessage,
  ReceivedMessage,
  MessageList,
  RoomContainer,
  RoomInput,
  Button,
} from "./ChatRoom.styles";
import useChat from "../../useChat";
import InfoBar from "../InfoBar/InfoBar";
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
      <InfoBar roomId={roomId} />
      <MessageContainer>
        <MessageList>
          {messages.map((message, i) =>
            message.ownedByCurrentUser ? (
              <MyMessage key={i}>{message.body}</MyMessage>
            ) : (
              <ReceivedMessage key={i}>{message.body}</ReceivedMessage>
            )
          )}
        </MessageList>
      </MessageContainer>
      <div style={{ display: "flex", borderTop: "2px solid #D3D3D3" }}>
        <RoomInput
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Type a message..."
          onKeyPress={(event) =>
            event.key === "Enter" ? handleSendMessage(event) : null
          }
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </RoomContainer>
  );
};

export default ChatRoom;
