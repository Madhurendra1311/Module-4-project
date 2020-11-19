import React from "react";
import styled from "styled-components";
import styles from "./item.module.css"
import { Component } from "react";
const ContWrapper = styled.div`

  width: 84%;
  margin: 10px 5%;
  img {
    width: 200px;
    margin: 10px;
  }
  h3 {
    margin-top: 0px;
  }
  div {
    padding: 10px;
    text-content: center;
  }
 
`;
class PopularIngredients extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <h4>Popular Ingredients</h4>
        <ContWrapper className={styles.main}>
          <div>
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Vodka.png"
              alt="Vodka.png"
            ></img>
            <h3>Vodka</h3>
          </div>
          <div>
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Gin.png"
              alt="Gin"
            ></img>
            <h3>Gin</h3>
          </div>
          <div>
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Rum.png"
              alt="Rum"
            ></img>

            <h3 style={{ marginLeft: "0px" }}>Rum</h3>
          </div>
          <div>
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Tequila.png"
              alt="Tequila"
            ></img>
            <h3>Tequila</h3>
          </div>
          <div>
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Scotch.png"
              alt="Scotch"
            ></img>
            <h3>Scotch</h3>
          </div>
        </ContWrapper>
      </>
    );
  }
}
export default PopularIngredients;