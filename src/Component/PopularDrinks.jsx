import React from "react";
import axios from "axios";

import styles from "../Component/item.module.css"
import styled from "styled-components";
import { Component } from "react";
import { AppContext } from "../Context/AppContextProvider";
const ContWrapper = styled.div`
  width: 84%;
  margin: 10px 5%;
  img {
    width: 200px;
    margin: 10px;
    border: 4px solid white;
  }
  h3 {
   
    margin-top: 0px;
  }
`;
class PopularDrinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkDesc: [],
    };
  }
  handleDescription = (name) => {
    let showDesc =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;
    console.log(showDesc);
    axios.get(showDesc).then((res) => this.setToken(res));
  };

  setToken = (res) => {
    const {
      status,
      toggleAuth,
      updateData,

      updateInte,
      updatepopInte,
      updateranInte,
      updateLetter,
    } = this.context;

    this.setState({
      drinkDesc: res.data.drinks,
    });
    toggleAuth(true);
    updateInte(this.state.drinkDesc);
    updateData("");
    updateLetter("");
    updatepopInte("");
    updateranInte("");
  };
  render() {
    console.log(this.state.drinkDesc);
    return (
      <>
        <h4>Popular Drinks</h4>
        <ContWrapper className={styles.main}>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Mojito");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg"
                alt="Mojito"
              ></img>
              <h3>Mojito</h3></div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Old Fashioned");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg"
                alt="Old Fashioned"
              ></img> <h3>Old Fashioned</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Long Island Tea");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/tppn6i1589574695.jpg"
                alt="Long Island Tea"
              ></img>
              <h3>Long Island Tea</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Old Fashioned");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"
                alt="Negroni"
              ></img> <h3>Negroni</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Whiskey Sour");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg"
                alt="Whiskey Sour"
              ></img> <h3>Whiskey Sour</h3>
            </div>
          </div>

          <div>
            <div
              onClick={() => {
                this.handleDescription("Dry Marthi");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg"
                alt="Dry Marthi"
              ></img>
              <h3>Dry Martini</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Daiquiri");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg"
                alt="Daiquiri"
              ></img>  <h3>Daiquiri</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Mararita");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                alt="Mararita"
              ></img>  <h3>Margarita</h3></div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Manhattan");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg"
                alt="Manhattan"
              ></img> <h3>Manhattan</h3></div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleDescription("Moscow Mule");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg"
                alt="Moscow Mule"
              ></img><h3>Moscow Mule</h3></div>
          </div>
        </ContWrapper>

      </>
    );
  }
}
PopularDrinks.contextType = AppContext;
export default PopularDrinks;