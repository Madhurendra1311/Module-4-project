import React from "react";
import styled from "styled-components";
import { Component } from "react";
import NavBar from "../Component/NavBar";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>
          <NavBar>
            <img
              src="https://www.thecocktaildb.com/images/logo.png"
              alt="logo.png"
            ></img>
          </NavBar>
        </div>
      </>
    );
  }
}
export default Home;
