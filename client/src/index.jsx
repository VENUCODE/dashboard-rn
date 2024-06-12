import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts.css";
import App from "./App.jsx";
import "./assets/css/metisMenu.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/useAuth";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./context/queryClient.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
