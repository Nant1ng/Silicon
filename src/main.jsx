import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/main.min.css";

import Home from "./views/Home";
import Header from "./views/sections/header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
