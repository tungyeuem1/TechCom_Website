import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureAxios } from "./configs/axios.ts";



configureAxios();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
              <App />
    </BrowserRouter>
  </React.StrictMode>
);
