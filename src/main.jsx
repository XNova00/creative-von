import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./config/theme.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navItems } from "./utils/data.jsx";
import Base from "./layout/Base.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Base />}>
            {navItems.map((item, index) => (
              <Route key={index} path={item.path} element={item.page} />
            ))}
          </Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);
