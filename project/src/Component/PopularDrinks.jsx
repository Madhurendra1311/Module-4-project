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
    border: 4px solid black;
  }
  h3 {
    flex: 1px;
    margin-top: 0px;
  }
`;
class PopularDrinks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h4>Popular Drinks</h4>
        <ContWrapper>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg"
            alt="majito.png"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg"
            alt="Old Fashioned"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/tppn6i1589574695.jpg"
            alt="Long Island Tea"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"
            alt="Negroni"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg"
            alt="Whiskey Sour"
          ></img>
        </ContWrapper>
        <ContWrapper>
          <h3>Mojito</h3>
          <h3>Old Fashioned</h3>
          <h3>Long Island Tea</h3>
          <h3>Negroni</h3>
          <h3>Whiskey Sour</h3>
        </ContWrapper>
        <ContWrapper>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg"
            alt="Dry Marthi"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg"
            alt="Daiquiri"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
            alt="Mararita"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg"
            alt="Manhattan"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg"
            alt="Moscow Mule"
          ></img>
        </ContWrapper>
        <ContWrapper>
          <h3>Dry Martini</h3>
          <h3>Daiquiri</h3>
          <h3>Margarita</h3>
          <h3>Manhattan</h3>
          <h3>Moscow Mule</h3>
        </ContWrapper>
      </>
    );
  }
}
export default PopularDrinks;
