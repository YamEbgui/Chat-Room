function Message({ username, content, time }) {
  return (
    <div className="message">
      <p className="messageContent">{username + ": " + content}</p>
    </div>
  );
}

export default Message;
