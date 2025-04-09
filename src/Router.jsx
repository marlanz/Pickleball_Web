import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import TournamentDetail from "./pages/TournamentDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CheckNewComerRoute from "./components/CheckNewComerRoute";
import PickRole from "./pages/PickRole";
import ProtectedRoute from "./components/ProtectedRoute";
import Matches from "./pages/Matches";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CheckNewComerRoute>
        <Home />
      </CheckNewComerRoute>
    ),
  },
  {
    path: "/tournaments/:id",
    element: <TournamentDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/matches",
    element: <Matches />,
  },
  {
    path: "/welcome",
    element: (
      <ProtectedRoute>
        <PickRole />
      </ProtectedRoute>
    ),
  },
]);

export default router;
