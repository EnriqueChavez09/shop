import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="catalogos" element={<Catalog />} />
        <Route path="contactanos" element={<Contact />} />
        <Route path="blogs" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
