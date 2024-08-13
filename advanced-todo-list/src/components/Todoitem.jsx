import React from "react";
import "./Todos.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";

function Todoitem({ id, taskname, completed }) {
  const { Deletetado, checkTodo, editTodo } = useContext(UserContext);
  const [inputval, setInputval] = useState(taskname);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input
            checked={completed}
            type="checkbox"
            data-list-item-checkbox
            onChange={(e) => checkTodo(id, e.target.checked)}
          />
          {edit ? (
            <input
              type="text"
              value={inputval}
              onChange={(e) => setInputval(e.target.value)}
            />
          ) : (
            <span data-list-item-text>{taskname}</span>
          )}
        </label>
        {edit ? (
          <button
            data-button-edit
            onClick={() => {
              editTodo(id, inputval);
              setEdit(false);
            }}
          >
            Update
          </button>
        ) : (
          <button
            data-button-edit
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
        )}
        <button data-button-delete onClick={() => Deletetado(id)}>
          Delete
        </button>
      </li>
    </>
  );
}

export default Todoitem;
