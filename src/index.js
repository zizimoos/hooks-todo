import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import ToDosContextProvider from "./Context";

ReactDOM.render(
  <ToDosContextProvider>
    <App />
  </ToDosContextProvider>,
  document.getElementById("root")
);
