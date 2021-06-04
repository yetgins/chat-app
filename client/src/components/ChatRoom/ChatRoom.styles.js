import styled from 'styled-components';

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

export const RoomTextArea = styled.textarea`
    height: 200px;
    max-height: 50%;
    font-size: 20px;
    padding: 8px 12px;
    resize: none;

`;

export const Button =styled.button`
    font-size: 28px;
    font-weight: 600;
    color: white;
    background: #31a24c;
    padding: 24px 12px;
    border: none;
`;

export const MyMessage = styled.li`
    width: 55%;
    margin: 8px;
    padding: 12px 8px;
    word-break: break-word;
    border-radius: 4px;
    color: white;
    background-color: rgb(0, 132, 255);
    margin-left: auto;
`;

export const ReceivedMessage = styled.li`
    width: 55%;
    margin: 8px;
    padding: 12px 8px;
    word-break: break-word;
    border-radius: 4px;
    color: white;
    background-color: #3f4042;
    margin-right: auto;
`;