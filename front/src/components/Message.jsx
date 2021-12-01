function Message({ username, content, time }) {
  return (
    <div className="message">
      <h3 className="messageUsername">{username}</h3>
      <p className="messageContent">{content}</p>
      <p className="messageTime">{time}</p>
    </div>
  );
}

export default Message;
