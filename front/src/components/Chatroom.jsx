import MessageInput from "./MessageInput";
import MessagesHistory from "./MessagesHistory";
import UserList from "./UserList";

import "../style/Chatroom.css";

function Chatroom({ usersArray, MessagesArray }) {
  return (
    <div className="chatroom">
      <MessagesHistory MessagesArray={MessagesArray} />
      <UserList usersArray={usersArray} />
      <MessageInput sendFunction={() => alert("123")} />
    </div>
  );
}

export default Chatroom;
