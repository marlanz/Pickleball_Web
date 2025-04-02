import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./pages/Home.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import router from "./Router.jsx";

const theme = createTheme({
  typography: { fontFamily: "Montserrat" },
  palette: {
    primary: { main: "#16a34a" },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
