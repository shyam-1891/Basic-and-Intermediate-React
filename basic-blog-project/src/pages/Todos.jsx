import React from "react";
import { getTodos } from "../api/todos";
import { useLoaderData } from "react-router-dom";

function Todos() {
  const todolist = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todolist.map((todo) => {
          return (
            <li
              className={todo.completed ? "strike-through" : ""}
              key={todo.id}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
  // const postdata = getPosts({ signal });
  // console.log(postdata);
  // return [{ id: 1, title: "post 1", body: "post 1 body" }];
}

export const todosListRoute = {
  loader,
  element: <Todos />,
};
