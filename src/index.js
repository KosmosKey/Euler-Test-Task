import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";

ReactDOM.render(
  <BrowserRouter>
    <DAppProvider config={{}}>
      <Provider store={store}>
        <App />
      </Provider>
    </DAppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
