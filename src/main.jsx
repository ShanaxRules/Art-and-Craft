import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Roots from "./Components/Roots.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./Components/AuthProvider.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import Profile from "./Components/Profile.jsx";
import Addcrafts from "./Addcrafts.jsx";
import Allcrafts from "./Allcrafts.jsx";
import MyItems from "./MyItems.jsx";
import EditItems from "./EditItems.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path : "/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/allcrafts",
        element: <Allcrafts></Allcrafts>
      },
      {
        path:"/additem",
        element:<PrivateRoute><Addcrafts></Addcrafts></PrivateRoute>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/myitems",
        element: <PrivateRoute><MyItems></MyItems></PrivateRoute>
      },
      {
        path: "/edititem",
        element: <PrivateRoute><EditItems></EditItems></PrivateRoute>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);