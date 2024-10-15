import { createBrowserRouter } from "react-router-dom";
import NavLayout from "./Pages/NavLayout";
import Posts from "./Pages/Posts";
import Users from "./Pages/Users";
import Todos from "./Pages/Todos";
import NotFound from "./Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Posts /> },
      { path: "/users", element: <Users /> },
      { path: "/todos", element: <Todos /> },
    ],
  },
]);
