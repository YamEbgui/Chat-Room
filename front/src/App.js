import Chatroom from "./components/Chatroom";
function App() {
  return (
    <Chatroom
      usersArray={["yam", "david", "daniel"]}
      MessagesArray={[
        { username: "yam", content: "fuck my life", time: Date.now() },
      ]}
    />
  );
}

export default App;
