import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Component } from "react";
import styles from "./item.module.css"
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
class LatestDrinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkLatest: [],
    };
  }
  handleLatest = (name) => {
    let showLatest =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;
    console.log(showLatest);
    axios.get(showLatest).then((res) => this.setToken(res));
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
      drinkLatest: res.data.drinks,
    });
    toggleAuth(true);
    updateranInte(this.state.drinkLatest);
    updateData("");
    updatepopInte("");

    updateLetter("");
    updateInte("");
  };

  render() {
    console.log(this.state.drinkLatest);
    return (
      <>
        <h4>Latest Drinks</h4>
        <ContWrapper className={styles.main}>
          <div>
            <div
              onClick={() => {
                this.handleLatest("The Evil Blue Thing");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/ojnpz71504793059.jpg"
                alt="The Evil Blue Thing"
              ></img> <h3>Bounty Hunter</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleLatest("Thai Coffee");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg"
                alt="Thai Coffee"
              ></img>  <h3>Thai Coffee</h3></div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleLatest("Mango Orange Smoothie");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg"
                alt="Mango Orange Smoothie"
              ></img> <h3>Mango Orange Smoothie</h3></div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleLatest("Absinthe #2");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg"
                alt="Absinthe #2"
              ></img> <h3>Absinthe #2</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleLatest("Absinthe #2");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg"
                alt="Queen Elizabeth"
              ></img> <h3>Queen Elizabeth</h3>
            </div>
          </div>

          <div>
            <div
              onClick={() => {
                this.handleLatest("Mary Pickford");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg"
                alt="Mary Pickford"
              ></img>  <h3>Mary Pickford</h3>
            </div>
          </div>

          <div>
            <div
              onClick={() => {
                this.handleLatest("Victor");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg"
                alt="Victor"
              ></img>    <h3>Victor</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleLatest("Grand Blue");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/vsrsqu1472761749.jpg"
                alt="Grand Blue"
              ></img>  <h3>Grand Blue</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleLatest("Amaretto Sunset");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg"
                alt="Amaretto Sunset"
              ></img> <h3>Amaretto Sunset</h3>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                this.handleLatest("Caribbean Boilermaker");
              }}
            >
              <img
                src="https://www.thecocktaildb.com/images/media/drink/svsxsv1454511666.jpg"
                alt="Caribbean Boilermaker"
              ></img>  <h3>Caribbean Boilermaker</h3></div>
          </div>

        </ContWrapper>
      </>
    );
  }
}
LatestDrinks.contextType = AppContext;
export default LatestDrinks;