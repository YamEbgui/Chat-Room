import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

import Chatroom from "./components/Chatroom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginPage />}></Route>
        <Route path="/chat" exact element={<Chatroom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
