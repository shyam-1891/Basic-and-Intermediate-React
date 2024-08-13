import React from "react";
import "./Todos.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";

function AddTodo() {
  const { addTodo } = useContext(UserContext);
  const [item, setItem] = useState("");

  const submitform = (e) => {
    e.preventDefault();
    if (item === "") return;
    addTodo(item);
    setItem("");
  };

  return (
    <>
      <form onSubmit={submitform} id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </>
  );
}

export default AddTodo;
