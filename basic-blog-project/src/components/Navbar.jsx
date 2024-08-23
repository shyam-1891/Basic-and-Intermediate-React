import React from "react";
import { NavLink, useNavigation } from "react-router-dom";

function Navbar() {
  const { state } = useNavigation();

  // console.log(state);
  const isLoading = state === "loading";
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
        </ul>
      </nav>
      {isLoading && isLoading ? <div className="loading-spinner"></div> : null}
    </>
  );
}

export default Navbar;
