import "../style/LoginPage.css";
import LoginInput from "./LoginInput";
import axios from "axios";
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();

  const loginFunction = async (username) => {
    console.log(username);
    const response = await axios.post("http://localhost:8080/user/login", {
      username,
    });
    if (response.status < 400) {
      navigate("/chat", { replace: true, state: { username } });
    }
  };

  return (
    <div className="loginPage">
      <h1>Cyber Chat</h1>
      <LoginInput loginFunction={loginFunction} />
    </div>
  );
}

export default LoginPage;
