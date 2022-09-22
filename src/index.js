import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
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
