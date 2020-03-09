import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { defineCustomElements } from "syd-form/loader";

ReactDOM.render(<App />, document.getElementById("root"));

defineCustomElements(window);
