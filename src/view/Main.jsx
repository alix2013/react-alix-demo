import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../component/Header";

import Todo from "./Todo";
import Counter from "./Counter";

const Home = () => {
  return (
    <div>
      <h2 className="title"> Home page </h2>;<h3> Architecture Overview</h3>
      <img
        className="homeImg"
        src="./react-alix-arch1.jpg"
        alt="react-alix-architecture"
      />
      <img
        className="homeImg"
        src="./react-alix-arch2.jpg"
        alt="react-alix-architecture"
      />
    </div>
  );
};

const Main = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/canceldemo" component={CancelRequest} /> */}
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/counter" component={Counter} />
      </Switch>
    </div>
  </Router>
);
export default Main;
