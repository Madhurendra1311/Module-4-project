import React from "react";
import styled from "styled-components";
import { Component } from "react";
const ContWrapper = styled.div`
  display: flex;
  width: 84%;
  margin: 10px 10%;
  img {
    width: 200px;
    margin: 10px;
  }
  h3 {
    flex: 1px;
    margin-top: 0px;
  }
`;
class PopularIngredients extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h4>Popular Ingredients</h4>
        <ContWrapper>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Vodka.png"
            alt="Vodka.png"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Gin.png"
            alt="Gin"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Rum.png"
            alt="Rum"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Tequila.png"
            alt="Tequila"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Scotch.png"
            alt="Scotch"
          ></img>
        </ContWrapper>
        <ContWrapper>
          <h3>Vodka</h3>
          <h3>Gin</h3>
          <h3>Rum</h3>
          <h3>Tequila</h3>
          <h3>Scotch</h3>
        </ContWrapper>
      </>
    );
  }
}
export default PopularIngredients;
