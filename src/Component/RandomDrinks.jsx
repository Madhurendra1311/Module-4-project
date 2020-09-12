import React from "react";
import axios from "axios";
import styles from "./item.module.css"
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
class RandomDrinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkRandom: [],
    };
  }
  handleRandom = (name) => {
    let showRandom =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;
    console.log(showRandom);
    axios.get(showRandom).then((res) => this.setToken(res));
  };
  setToken = (res) => {
    const {
      toggleAuth,
      updateData,

      updateInte,
      updatepopInte,
      updateranInte,
      updateLetter,
    } = this.context;

    this.setState({
      drinkRandom: res.data.drinks,
    });
    toggleAuth(true);
    updateranInte(this.state.drinkRandom);
    updateData("");
    updateInte("");
    updateLetter("");
    updatepopInte("");
  };
  render() {
    console.log(this.state.drinkRandom);
    return (
      <>
        <h4>Random Drinks</h4>
        <ContWrapper className={styles.main}>
          <div
            onClick={() => {
              this.handleRandom("Bounty Hunter");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/t8bgxl1596018175.jpg"
              alt="Bounty Hunter"
            ></img>{" "}
            <h3>Bounty Hunter</h3>
          </div>
          <div
            onClick={() => {
              this.handleRandom("The Philosopher");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/sp8hkp1596017787.jpg"
              alt="The Philosopher"
            ></img>
            <h3>The Philosopher</h3>
          </div>
          <div
            onClick={() => {
              this.handleRandom("Captain Kidd's Punch");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/d83spj1596017390.jpg"
              alt="Captain Kidd's Punch"
            ></img>{" "}
            <h3>Capitan Kidd's Punch</h3>
          </div>
          <div
            onClick={() => {
              this.handleRandom("Funk and Soul");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/qtv83q1596015790.jpg"
              alt="Funk and Soul"
            ></img>{" "}
            <h3>Funk and Soul</h3>
          </div>
          <div
            onClick={() => {
              this.handleRandom("Pineapple Paloma");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/pg8iw31593351601.jpg"
              alt="Pineapple Paloma"
            ></img>{" "}
            <h3>Pineapple Paloma</h3>
          </div>

          <div
            onClick={() => {
              this.handleRandom("White Wine Sangria");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/hnuod91587851576.jpg"
              alt="White Wine Sangria"
            ></img>
            <h3>White Wine Sangria</h3>
          </div>
          <div
            onClick={() => {
              this.handleRandom("Aperol Spritz");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/iloasq1587661955.jpg"
              alt="Aperol Spritz"
            ></img>{" "}
            <h3>Aperol Spritz</h3>
          </div>
          <div
            onClick={() => {
              this.handleRandom("Passion Fruit Martini");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/6trfve1582473527.jpg"
              alt="Passion Fruit Martini"
            ></img>{" "}
            <h3>Passion Fruit Martini</h3>
          </div>
          <div
            onClick={() => {
              this.handleRandom("Spice 75");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg"
              alt="Spice 75"
            ></img>{" "}
            <h3>Spice 75</h3>
          </div>
          <div
            onClick={() => {
              this.handleRandom("Amaretto fizz");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/92h3jz1582474310.jpg"
              alt="Amaretto fizz"
            ></img>{" "}
            <h3>Amaretto fizz</h3>
          </div>
        </ContWrapper>
      </>
    );
  }
}
RandomDrinks.contextType = AppContext;
export default RandomDrinks;