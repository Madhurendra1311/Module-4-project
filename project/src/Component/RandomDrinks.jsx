import React from "react";
import styled from "styled-components";
import { Component } from "react";
const ContWrapper = styled.div`
  display: flex;
  width: 84%;
  margin: 10px 8%;
  img {
    width: 200px;
    margin: 10px;
    border: 4px solid white;
  }
  h3 {
    flex: 1px;
    margin-top: 0px;
  }
`;
class RandomDrinks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h4>Random Drinks</h4>
        <ContWrapper>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/t8bgxl1596018175.jpg"
            alt="Bounty Hunter.png"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/sp8hkp1596017787.jpg"
            alt="The Philosopher"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/d83spj1596017390.jpg"
            alt="Caption Kidds Punch"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/qtv83q1596015790.jpg"
            alt="Funck and Soul"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/pg8iw31593351601.jpg"
            alt="Pineapple Paloma"
          ></img>
        </ContWrapper>
        <ContWrapper>
          <h3>Bounty Hunter</h3>
          <h3>The Philosopher</h3>
          <h3>Capitan Kidd's Punch</h3>
          <h3>Funk and Soul</h3>
          <h3>Pineapple Paloma</h3>
        </ContWrapper>
        <ContWrapper>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/hnuod91587851576.jpg"
            alt="White Wine Sangria"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/iloasq1587661955.jpg"
            alt="Aperol Spritz"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/6trfve1582473527.jpg"
            alt="Passion Fruit Martini"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg"
            alt="Spice 75"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/92h3jz1582474310.jpg"
            alt="Amaretto fizz"
          ></img>
        </ContWrapper>
        <ContWrapper>
          <h3>White Wine Sangria</h3>
          <h3>Aperol Spritz</h3>
          <h3>Passion Fruit Martini</h3>
          <h3>Spice 75</h3>
          <h3>Amaretto fizz</h3>
        </ContWrapper>
      </>
    );
  }
}
export default RandomDrinks;
