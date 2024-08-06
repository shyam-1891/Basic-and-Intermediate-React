import React, { useState } from "react";
import "./Todos.css";

export default function Todos() {
  const [todolist, setTodolist] = useState([]);
  const [textTodo, setTextTodo] = useState();
  console.log(todolist);

  const addTodo = () => {
    if (textTodo === "") return;
    let uuid = self.crypto.randomUUID();
    let newtask = {
      id: uuid,
      taskname: textTodo,
      completed: false,
    };
    setTodolist((currentTodos) => {
      return [...currentTodos, newtask];
    });
    setTextTodo("");
  };

  const updateTodo = (todoid, completedval) => {
    setTodolist((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoid) {
          if (todo.id === todoid) return { ...todo, completed: completedval };
        }
        return todo;
      });
    });
  };

  const Deletetado = (todoid) => {
    setTodolist((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoid);
    });
  };

  return (
    <>
      <ul id="list">
        {todolist &&
          todolist.map((todo) => {
            return (
              <Todoitem
                key={todo.id}
                {...todo}
                updateTodo={updateTodo}
                Deletetado={Deletetado}
              />
            );
          })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}

function Todoitem({ id, taskname, completed, updateTodo, Deletetado }) {
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input
            checked={completed}
            type="checkbox"
            data-list-item-checkbox
            onChange={(e) => updateTodo(id, e.target.checked)}
          />
          <span data-list-item-text>{taskname}</span>
        </label>
        <button data-button-delete onClick={() => Deletetado(id)}>
          Delete
        </button>
      </li>
    </>
  );
}
