import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import PagenotFound from "./pages/PagenotFound";
import { userListRoute } from "./pages/users";
import { postListRoute } from "./pages/posts";
import { todosListRoute } from "./pages/Todos";
import Layout from "./components/Layout";
import Post from "./pages/Post";
import User from "./pages/User";
import { postItemRoute } from "./pages/PostItem";
import { userItemRoute } from "./pages/UserPage";
import AddPost from "./pages/AddPost";
import { editPostRoute } from "./pages/EditPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              { index: true, ...postListRoute },
              {
                path: ":postId",
                children: [
                  { index: true, ...postItemRoute },
                  { path: "edit", ...editPostRoute },
                ],
              },
              {
                path: "/posts/new",
                element: <AddPost />,
              },
            ],
          },
          { path: "todos", children: [{ index: true, ...todosListRoute }] },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
          {
            path: "users",
            children: [
              { index: true, ...userListRoute },
              {
                path: ":userId",
                ...userItemRoute,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
