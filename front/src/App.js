import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

import Chatroom from "./components/Chatroom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginPage />}></Route>
        <Route
          path="/chat"
          exact
          element={
            <Chatroom
              usersArray={["yam", "david", "daniel"]}
              MessagesArray={[
                { username: "yam", content: "fuck my life", time: Date.now() },
              ]}
            />
          }
        ></Route>
      </Routes>

      {/* <Chatroom
        usersArray={["yam", "david", "daniel"]}
        MessagesArray={[
          { username: "yam", content: "fuck my life", time: Date.now() },
        ]}
      />

      <LoginPage
        loginFunction={(a) => {
          console.log(a);
          alert(a);
        }}
      /> */}
    </BrowserRouter>
  );
}

export default App;
