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
class RandomIngredients extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h4>Random Ingredients</h4>
        <ContWrapper>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Light%20Rum.png"
            alt="Light Rum"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Coffee.png"
            alt="Coffee"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Maraschino%20Liqueur.png"
            alt="Maraschino Liqueur"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Egg%20Yolk.png"
            alt="Egg"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/ingredients/Coconut%20Cream.png"
            alt="Coconut Cream"
          ></img>
        </ContWrapper>
        <ContWrapper>
          <h3>Vodka</h3>
          <h3>Gin</h3>
          <h3>Rum</h3>
          <h3>Egg</h3>
          <h3>Coconut Cream</h3>
        </ContWrapper>
      </>
    );
  }
}
export default RandomIngredients;
