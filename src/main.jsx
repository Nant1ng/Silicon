import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/main.min.css";

import Header from "./views/sections/header/Header";
import Home from "./views/Home";
import News from "./views/News";
import Error from "./views/Error";
import ConditionalFooter from "./views/sections/footer/ConditionalFooter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ConditionalFooter />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
