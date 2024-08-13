import React from "react";
import { useState } from "react";
import TodoContext from "./TodoContext";

function TodoContextProvider({ childern }) {
  const [todos, setTodos] = useState("Hello");

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {childern}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
