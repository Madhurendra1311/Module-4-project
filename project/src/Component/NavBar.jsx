import React from "react";
import styled from "styled-components";
import { Component } from "react";

const NavBarWrapper = styled.div`
  width: 98%;

  height: 70px;
  border: 1px solid black;
  padding: 10px;
  background-color: #282c34;
  img {
    float: left;
    margin-left: 20px;
  }
  button {
    clear: both;
    float: right;
    border-radius: 20px;
    margin-right: 50px;
    padding: 20px 30px;
    color: white;
    font-size: 20px;
    margin-top: -40px;
    background-color: teal;
  }
`;
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <NavBarWrapper>
          {" "}
          <img
            src="https://www.thecocktaildb.com/images/logo.png"
            alt="logo.png"
          ></img>
          <button>Home</button>
        </NavBarWrapper>
      </>
    );
  }
}
export default NavBar;
