import axios from "axios";
import MessageInput from "./MessageInput";
import MessagesHistory from "./MessagesHistory";
import UserList from "./UserList";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../style/Chatroom.css";

function Chatroom() {
  const [usersArray, setUsersArray] = useState([]);
  const [messagesArray, setMessagesArray] = useState([]);
  const { state } = useLocation();
  const username = state.username;
  console.log(username);
  useEffect(() => {
    const dataSource = new EventSource(
      `http://localhost:8080/fetch?username=${username}`
    );

    dataSource.onopen = function (event) {
      console.log("connection is open");
    };

    dataSource.onmessage = function (event) {
      const { messages, users } = JSON.parse(event.data);
      if (messages) setMessagesArray(messages);
      if (users) setUsersArray(users);
    };
  }, []);

  const sendMessage = async (message) => {
    await axios.post("http://localhost:8080/message", {
      username,
      content: message,
    });
  };
  return (
    <div className="chatroom">
      <MessagesHistory MessagesArray={messagesArray} />
      <UserList usersArray={usersArray} />
      <MessageInput sendFunction={sendMessage} />
    </div>
  );
}

export default Chatroom;
