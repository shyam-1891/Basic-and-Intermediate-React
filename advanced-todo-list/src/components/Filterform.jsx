import React from "react";
import "./Todos.css";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Filterform() {
  const { filterTodosval, hideCompletedfn, filterTodosFN } =
    useContext(UserContext);
  const [item, setItem] = useState("");
  return (
    <>
      <div className="filter-form">
        {/* <div className="filter-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={item}
            onChange={(e) => {
              filterTodosFN(e.target.value);
              setItem(e.target.value);
            }}
          />
        </div> */}
        <label>
          <input
            type="checkbox"
            onChange={(e) => hideCompletedfn(e.target.checked)}
          />
          Hide Completed
        </label>
      </div>
    </>
  );
}

export default Filterform;
