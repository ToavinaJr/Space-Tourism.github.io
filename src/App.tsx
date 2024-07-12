import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Erreur404 from "./pages/Erreur404";

const router = createBrowserRouter([
  {
    path: '*',
    element: <Erreur404 />
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/destination',
    element: <Destination/>
  },
  {
    path: '/crew',
    element: <Crew/>
  },
  {
    path: '/technology',
    element: <Technology/>
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
