import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import { thunk } from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  return result;
};
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(loggerMiddleware, thunk)),
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
