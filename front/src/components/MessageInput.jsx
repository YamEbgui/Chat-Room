import { useRef } from "react";
import "../style/MessageInput.css";

function MessageInput({ sendFunction }) {
  const inputEl = useRef(null);

  return (
    <div className="messageInput">
      <input
        ref={inputEl}
        type={"text"}
        onKeyPressCapture={(event) => {
          if (event.key === `Enter` && inputEl.current.value)
            sendFunction(inputEl.current.value);
        }}
        placeholder={"Enter message - send on Enter"}
      ></input>
      <button
        onClick={() => {
          if (inputEl.current.value) {
            sendFunction(inputEl.current.value);
          }
        }}
      >
        send
      </button>
    </div>
  );
}

export default MessageInput;
