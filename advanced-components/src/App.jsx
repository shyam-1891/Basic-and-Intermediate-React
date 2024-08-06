import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import RenderRawHTML from "./RenderRawHTML";
import Todos from "./components/Todos/Todos";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        // console.log(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <Todos />

      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {user.map((item) => {
            return <UserData key={item.username} {...item} />;
          })}
        </ul>
      )}

      <h1>Render Raw HTML</h1>
      <RenderRawHTML />
    </>
  );
}

export function UserData({ name, phone }) {
  return (
    <li>
      {name} - {phone}
    </li>
  );
}

export default App;
