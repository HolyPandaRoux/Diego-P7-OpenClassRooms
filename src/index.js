import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About";
import Housing from "./pages/Housing/Housing";
import Error from "./pages/Error/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/housing/:id"
        render={(props) => <Housing {...props} />}
        element={<Housing />}
      />
      <Route path="*" element={<Error />} />
      <Route path="about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
