// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./css/todo.css";

// adapter react-alix
import { todoStore, counterStore } from "./viewmodel";
import { configure, appProvider, Store } from "react-alix";
import configOptions from "./config/config";

configure(configOptions);
const store = new Store().addStores({ todoStore, counterStore });
const appRoot = appProvider("store", store, App);
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(appRoot, document.getElementById("root"));
// end adaptive

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
