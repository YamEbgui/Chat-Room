import "../style/MessageInput.css";

function MessageInput({ sendFunction }) {
  return (
    <div className="messageInput">
      <input
        onKeyPressCapture={(event) => {
          if (event.target.keyCode === 13) sendFunction();
        }}
        placeholder={"Enter message - send on Enter"}
      ></input>
    </div>
  );
}

export default MessageInput;
