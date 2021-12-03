import { useRef } from "react";

function LoginInput({ loginFunction }) {
  const inputEl = useRef(null);

  return (
    <div className="loginInputDiv">
      <input
        ref={inputEl}
        className={"loginInput"}
        placeholder={"Enter You Username"}
        onKeyPressCapture={(event) => {
          if (event.key === `Enter` && inputEl.current.value)
            loginFunction(inputEl.current.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (inputEl.current.value) {
            loginFunction(inputEl.current.value);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginInput;
