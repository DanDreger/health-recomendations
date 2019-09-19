import React from "react";
import "./App.css";
import Home from "./views/home";
import Age from "./views/age";
import BasicInfo from "./views/basic-info";
import Gender from "./views/sex";
import Results from "./views/results";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/basic-info" component={BasicInfo} />
      <Route path="/age" component={Age} />
      <Route path="/sex" component={Gender} />
      <Route path="/results" component={Results} />
    </div>
  );
}

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
