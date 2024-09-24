import { createBrowserRouter } from "react-router-dom";

import { Login, Trips } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Trips />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
