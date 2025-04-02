import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import TournamentDetail from "./pages/TournamentDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tournaments/:id",
    element: <TournamentDetail />,
  },
]);

export default router;
