import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import * as serviceWorker from "./serviceWorker.js";
import { BrowserRouter } from "react-router-dom";
import "./i18n.js";
import { Provider } from "react-redux";
import './style/global.css'

import store from "./store/index.js";
import ContextProvider from "context/ContextProvider.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider >
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.Fragment>
    </Provider>
    </ContextProvider>
);

serviceWorker.unregister()
