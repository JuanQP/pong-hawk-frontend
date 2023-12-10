import { Navigate, createBrowserRouter } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/Login";
import { Instructions } from "./pages/Instructions";
import { Subscriptions } from "./pages/Subscriptions";
import { Record } from "./pages/Record";
import { MyGames } from "./pages/MyGames";
import { GameDetail } from "./pages/GameDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" /> ,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      // Your protected routes go here
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/instructions",
        element: <Instructions />
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />
      },
      {
        path: "/record",
        element: <Record />
      },
      {
        path: "/games/:id",
        element: <GameDetail />
      },
      {
        path: "/my-games",
        element: <MyGames />
      },
    ]
  },
])
