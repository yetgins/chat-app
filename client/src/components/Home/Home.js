import React, { useState } from "react";
import { HomeContainer, HomeInput, HomeButton } from "./Home.styles";

const Home = () => {
  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <HomeContainer>
      <h1>Chat App</h1>
      <HomeInput
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
      />
      <HomeButton to={`/${roomName}`}>Join Room</HomeButton>
    </HomeContainer>
  );
};

export default Home;
