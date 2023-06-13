import {createBrowserRouter, Navigate} from "react-router-dom";
import NotFound from "./views/NotFound.jsx";
import Users from "./views/Users.jsx";
import Signup from "./views/Signup.jsx";
import Login from "./views/Login.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import DashBoard from "./views/DashBoard.jsx";
import Vuelos from "./views/Vuelos.jsx";
import VueloForm from "./views/VueloForm.jsx";

const router  = createBrowserRouter([

  {
    path: "/",
    element: <DefaultLayout />,
    children: [
        {
            path: "/",
            element: <Navigate to="/users" />
        },
        {
            path: "/users",
            element: <Users />
        },
        {
            path: "/dashboard",
            element: <DashBoard />
        },
        {
            path: "/vuelos",
            element: <Vuelos />
        },
        {
            path: "/vuelos/new",
            element: <VueloForm key = "vueloCreate" />
        },
        {
            path: "/vuelos/:id",
            element: <VueloForm key = "vueloUpdate" />
        },
    ]
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <Signup />
        },
    ]
  },
  {
    path: "*",
      element: <NotFound />
  }


])
export default router;
