import React from "react";
import routes from "routes";
import Header from "../common/Header";
import "assets/styles/App.css";

const App = ()=>(
  <div className="container-fluid">
    <Header />
    <div className="content">{routes}</div>
  </div>
);

export default App;
