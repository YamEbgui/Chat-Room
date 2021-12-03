import EventSource from "events";
import MessageInput from "./MessageInput";
import MessagesHistory from "./MessagesHistory";
import UserList from "./UserList";

import "../style/Chatroom.css";

const source = new EventSource("http://localhost:3000/");

function Chatroom({ usersArray, MessagesArray }) {
  source.onopen = function (event) {
    console.log("source is opened");
  };

  return (
    <div className="chatroom">
      <MessagesHistory MessagesArray={MessagesArray} />
      <UserList usersArray={usersArray} />
      <MessageInput
        sendFunction={(a) => {
          console.log(a);
          alert(a);
        }}
      />
    </div>
  );
}

export default Chatroom;
