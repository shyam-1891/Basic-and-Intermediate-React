import React from "react";
import UserContext from "./UserContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filterList, setFilterList] = useState("");

  const [filterTodosval, setFilterTodosval] = useState("");
  const [hideCompletedval, setHideCompletedval] = useState(true);

  const Deletetado = (todoid) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoid);
    });
  };

  const checkTodo = (todoid, completedval) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoid) {
          if (todo.id === todoid) return { ...todo, completed: completedval };
        }
        return todo;
      });
    });
  };

  const addTodo = (item) => {
    if (item === "") return;
    let uuid = self.crypto.randomUUID();
    let newtask = {
      id: uuid,
      taskname: item,
      completed: false,
    };
    setTodos((currentTodos) => {
      return [...currentTodos, newtask];
    });
  };

  const editTodo = (todoid, item) => {
    if (item === "") return;
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoid) {
          if (todo.id === todoid) return { ...todo, taskname: item };
        }
        return todo;
      });
    });
  };

  const hideCompletedfn = (checkedval) => {
    if (checkedval === true) {
      setHideCompletedval(false);
    } else {
      setHideCompletedval(true);
    }
  };

  const filterTodosFN = (inputVal) => {
    if (inputVal === "") return;
    setFilterTodosval(inputVal);
  };

  return (
    <UserContext.Provider
      value={{
        todos,
        setTodos,
        Deletetado,
        checkTodo,
        addTodo,
        editTodo,
        filterTodosval,
        hideCompletedval,
        hideCompletedfn,
        filterTodosFN,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
