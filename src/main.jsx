import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PostStoreProvider } from "./lib/postContext";
import { FetchStoreProvider } from "./lib/fetchContext";

import "./assets/css/main.min.css";

import Header from "./views/sections/header/Header";
import Home from "./views/Home";
import News from "./views/News";
import Error from "./views/Error";
import ConditionalFooter from "./views/sections/footer/ConditionalFooter";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FetchStoreProvider>
        <PostStoreProvider>
          <div className="wrapper">
            <Header />
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <ConditionalFooter />
          </div>
        </PostStoreProvider>
      </FetchStoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
