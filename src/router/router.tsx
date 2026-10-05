import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AddItem from "../pages/AddItem";
import Layout from "../components/ui/Layout";
import Menus from "../pages/Menus";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/add-item",
        Component: AddItem,
      },
      {
        path: "/Menus",
        Component: Menus,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);
