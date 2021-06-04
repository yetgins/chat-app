import styled from "styled-components";

export const RoomContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export const MessageContainer = styled.div`
  flex: 1;
  min-height: 100px;
  overflow: auto;
  border: 1px solid black;
  border-radius: 7px 7px 0 0;
`;

export const MessageList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

export const MessageItem = styled.li`
  width: 55%;
  margin: 8px;
  padding: 12px 8px;
  word-break: break-word;
  border-radius: 4px;
  color: white;
`;

export const RoomInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5% 12px ;
  width: 80%;
  font-size: 1.2em;
`;

export const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 24px 12px;
  display: inline-block;
  border: none;
  width: 20%;
`;

export const MyMessage = styled.li`
  font-weight: 500;
  font-size: 18px;
  width: 55%;
  margin: 8px;
  padding: 12px 8px;
  word-break: break-word;
  border-radius: 4px;
  color: white;
  background-color: #31a24c;
  margin-left: auto;
`;

export const ReceivedMessage = styled.li`
  font-weight: 500;
  font-size: 18px;
  width: 55%;
  margin: 8px;
  padding: 12px 8px;
  word-break: break-word;
  border-radius: 4px;
  color: black;
  background-color: #f8f8ff;
  margin-right: auto;
`;
