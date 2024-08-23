import React, { useEffect, useState } from "react";
import User from "./User";
import { useLoaderData } from "react-router-dom";
import { getUsers } from "../api/user";

function Users() {
  // const [userlist, setUserlist] = useState([]);
  const userlist = useLoaderData();

  // useEffect(() => {
  //   const postdata = fetch("http://127.0.0.1:3000/users")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setUserlist(json);
  //     });
  // }, []);
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {userlist.map((user) => {
          return <User key={user.username} {...user} />;
        })}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const userListRoute = {
  loader,
  element: <Users />,
};
