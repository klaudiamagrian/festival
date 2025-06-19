import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConcertProvider } from "./context/concerts"; // ⬅️ TAK
import { TicketProvider } from "./context/tickets";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConcertProvider>
      <TicketProvider>
        {" "}
        <App />
      </TicketProvider>
    </ConcertProvider>
  </React.StrictMode>
);
