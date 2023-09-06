import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import { HomePage } from "./pages/HomePage";
import { ToDoListPage } from "./pages/ToDoListPage";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ToDo } from "./models/todo-item";
import { NotFound } from "./pages/404";
import { ItemDescription } from "./pages/ItemDescription";
import { Layout } from "./layouts/layout";

const todos: ToDo[] = [
  {
    id: 0,
    text: "Первое действие",
    isDone: false,
  },
  {
    id: 1,
    text: "Второе действие",
    isDone: true,
  },
  {
    id: 2,
    text: "Третье действие",
    isDone: false,
  },
  {
    id: 3,
    text: "Четвертое действие",
    isDone: true,
  },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage todos={todos} />,
        },
        {
          path: "/todo",
          element: <ToDoListPage />,
        },
        {
          path: "/List/",
          children: [
            {
              path: ':id',
              element: <ItemDescription todos={todos} />
            }
          ]
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/" }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />}></Route>
        <Route path="/List/:id" element={<ItemDescription todos={todos} />}></Route>
        <Route path="/todo" element={<ToDoListPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
