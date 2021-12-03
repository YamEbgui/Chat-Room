import LoginInput from "./LoginInput";
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();
  const loginFunction = (a) => {
    console.log(a);
    alert(a);
    navigate("/chat");
  };
  return (
    <div className="LoginPage">
      <h1>Cyber Chat</h1>
      <LoginInput loginFunction={loginFunction} />
    </div>
  );
}

export default LoginPage;
