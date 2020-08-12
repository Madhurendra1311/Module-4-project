import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../src/Component/Home";
import Welcome from "./Component/Welcome";
function App() {
  return (
    <div className="App">
      <Home />
      <Welcome />
    </div>
  );
}

export default App;
