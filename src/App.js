import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Article from "./Article/Article";
import Connect from "./Connect/Connect";
import Apply from "./Connect/Apply";
import Print from "./Print/Print";
import "./resources/animate.css";
import "./App.css";

export default function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/article/:articleID" component={Article} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/info" component={Connect} />
        <Route exact path="/print" component={Print} />
        <Route exact path="/apply" component={Apply} />
      </Switch>
    </div>
  );
}