import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./config/customTheme.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navItems } from "./utils/data";
import Base from "./layout/Base";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Base />}>
            {navItems.map((item, id) => (
              <Route key={id} path={item.path} element={item.page} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);
