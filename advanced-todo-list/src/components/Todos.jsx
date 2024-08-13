import React from "react";
import "./Todos.css";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import Todoitem from "./Todoitem";

function Todos() {
  const { todos, hideCompletedval } = useContext(UserContext);

  return (
    <>
      <ul id="list">
        {todos && hideCompletedval
          ? todos.map((item) => {
              return <Todoitem key={item.id} {...item} />;
            })
          : todos
              .filter((todo) => {
                if (todo.completed !== true) {
                  return todo;
                }
              })
              .map((item) => {
                return <Todoitem key={item.id} {...item} />;
              })}
      </ul>
    </>
  );
}

export default Todos;
