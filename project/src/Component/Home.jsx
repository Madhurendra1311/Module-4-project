import React from "react";
import styled from "styled-components";
import { Component } from "react";
import NavBar from "../Component/NavBar";
import PopularDrinks from "../Component/PopularDrinks";
import PopularIngredients from "../Component/PopularIngredients";
import RandomDrinks from "../Component/RandomDrinks";
import RandomIngredients from "../Component/RandomIngredients";
import LatestDrinks from "../Component/LatestDrinks";
import Welcome from "../Component/Welcome";
import BrowseDrinks from "../Component/BrowseDrinks";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>
          <NavBar></NavBar>
          <Welcome />
          <PopularDrinks />
          <PopularIngredients />
          <RandomDrinks />
          <RandomIngredients />
          <LatestDrinks />
          <BrowseDrinks />
        </div>
      </>
    );
  }
}
export default Home;
