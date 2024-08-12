import React, { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      Profile: {user}
      <button onClick={() => setUser("Hello Test")}>Change user name</button>
    </div>
  );
}

export default Profile;
