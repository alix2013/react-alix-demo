// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./css/todo.css";

// adapter react-alix
import { todoStore, counterStore } from "./viewmodel";
import { configure, appProvider, Store } from "react-alix";
// import alix from "react-alix"
import configOptions from "./config/config";
//alix.configure({ enforceActions: "never", ...configOptions });
configure(configOptions);
const store = new Store().addStores({ todoStore, counterStore });

const appRoot = appProvider("store", store, App);
// end adaptive
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(appRoot, document.getElementById("root"));

// console.log("getConfigure:", alix.getConfigure());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
