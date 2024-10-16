import { createBrowserRouter } from "react-router-dom";
import NavLayout from "./Pages/NavLayout";
import Posts from "./Pages/Posts";
import Users from "./Pages/Users";
import Todos from "./Pages/Todos";
import NotFound from "./Pages/NotFound";
import PostView from "./Pages/PostView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/posts", {
            signal,
          });
        },
      },
      {
        path: "posts/:postId",
        element: <PostView />,
        loader: ({ params, request: { signal } }) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
            { signal }
          );
        },
      },
      {
        path: "/users",
        element: <Users />,
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users", {
            signal,
          });
        },
      },
      {
        path: "/todos",
        element: <Todos />,
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/todos", {
            signal,
          });
        },
      },
    ],
  },
]);
