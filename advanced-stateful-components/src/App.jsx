import { useState } from "react";

import Reducercheck from "./components/Reducercheck";
import UserContextProvider from "./context/UsercontextProvider";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Advanced stateful component.</h1>
      <Reducercheck />

      <Profile />
    </UserContextProvider>
  );
}

export default App;
