import React from "react";
import styled from "styled-components";
import { Component } from "react";
import { AppContext } from "../Context/AppContextProvider";
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
          <div>
            {" "}
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Light%20Rum.png"
              alt="Light Rum"
            ></img>{" "}
            <h3>Light Rum</h3>
          </div>
          <div>
            {" "}
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Coffee.png"
              alt="Coffee"
            ></img>
            <h3>Coffee</h3>
          </div>
          <div>
            {" "}
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Maraschino%20Liqueur.png"
              alt="Maraschino Liqueur"
            ></img>
            <h3>Maraschino Liqueur</h3>
          </div>
          <div>
            {" "}
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Egg%20Yolk.png"
              alt="Egg"
            ></img>
            <h3>Egg</h3>
          </div>
          <div>
            {" "}
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Coconut%20Cream.png"
              alt="Coconut Cream"
            ></img>{" "}
            <h3>Coconut Cream</h3>
          </div>
        </ContWrapper>
      </>
    );
  }
}
RandomIngredients.contextType = AppContext;
export default RandomIngredients;
