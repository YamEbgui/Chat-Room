import "../style/UserList.css";
import User from "./User";

function UserList({ usersArray }) {
  console.log(usersArray);
  return (
    <div className="userList">
      {usersArray.map((user) => {
        return <User username={user} />;
      })}
    </div>
  );
}

export default UserList;
