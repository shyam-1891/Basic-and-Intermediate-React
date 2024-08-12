import React from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState("Lorem test");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
