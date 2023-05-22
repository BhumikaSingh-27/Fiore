import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { DataContextProvider } from "./contexts/DataContext";
import { AddressContextProvider } from "./contexts/AddressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <AddressContextProvider>
          <App />
        </AddressContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
