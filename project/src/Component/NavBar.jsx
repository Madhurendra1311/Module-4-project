import React from "react";
import styled from "styled-components";
import { Component } from "react";
import { AppContext } from "../Context/AppContextProvider";
const NavBarWrapper = styled.div`
  width: 98%;

  height: 70px;
  border: 1px solid;
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
    background-color: #ff8c00;
  }
`;
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  handleToggle = () => {
    const { isAuth, toggleAuth } = this.context;
    toggleAuth(false);
  };
  render() {
    return (
      <>
        <NavBarWrapper>
          <img
            src="https://www.thecocktaildb.com/images/logo.png"
            alt="logo.png"
          ></img>
          <button onClick={this.handleToggle}>Home</button>
        </NavBarWrapper>
      </>
    );
  }
}
NavBar.contextType = AppContext;
export default NavBar;
