import React from "react";
import App from "./App.jsx";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Conversor from "./components/Conversor.jsx";

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/conversor",
    element: (
      <div>
        <Conversor />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
