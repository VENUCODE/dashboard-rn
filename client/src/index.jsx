import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./assets/css/metisMenu.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/useAuth";
import { SocketProvider } from "./context/useSocket.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>
);
