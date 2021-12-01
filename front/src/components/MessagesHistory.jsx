import "../style/MessagesHistory.css";
import Message from "./Message";

function MessagesHistory({ MessagesArray }) {
  return (
    <div className="messagesHistory">
      {MessagesArray.map((message) => {
        return (
          <Message
            username={message.username}
            content={message.content}
            time={message.time}
          ></Message>
        );
      })}
    </div>
  );
}

export default MessagesHistory;
