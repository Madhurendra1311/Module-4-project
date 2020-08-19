import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Component } from "react";
import { AppContext } from "../Context/AppContextProvider";
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
        <ContWrapper>
          <div
            onClick={() => {
              this.handleLatest("The Evil Blue Thing");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/ojnpz71504793059.jpg"
              alt="The Evil Blue Thing"
            ></img>
          </div>
          <div
            onClick={() => {
              this.handleLatest("Thai Coffee");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg"
              alt="Thai Coffee"
            ></img>
          </div>
          <div
            onClick={() => {
              this.handleLatest("Mango Orange Smoothie");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg"
              alt="Mango Orange Smoothie"
            ></img>
          </div>
          <div
            onClick={() => {
              this.handleLatest("Absinthe #2");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg"
              alt="Absinthe #2"
            ></img>
          </div>
          <div
            onClick={() => {
              this.handleLatest("Absinthe #2");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg"
              alt="Queen Elizabeth"
            ></img>
          </div>
        </ContWrapper>
        <ContWrapper>
          <h3>Bounty Hunter</h3>
          <h3>Thai Coffee</h3>
          <h3>Mango Orange Smoothie</h3>
          <h3>Absinthe #2</h3>
          <h3>Queen Elizabeth</h3>
        </ContWrapper>
        <ContWrapper>
          <div
            onClick={() => {
              this.handleLatest("Mary Pickford");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg"
              alt="Mary Pickford"
            ></img>
          </div>
          <div
            onClick={() => {
              this.handleLatest("Victor");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg"
              alt="Victor"
            ></img>
          </div>
          <div
            onClick={() => {
              this.handleLatest("Grand Blue");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/vsrsqu1472761749.jpg"
              alt="Grand Blue"
            ></img>
          </div>
          <div
            onClick={() => {
              this.handleLatest("Amaretto Sunset");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg"
              alt="Amaretto Sunset"
            ></img>
          </div>
          <div
            onClick={() => {
              this.handleLatest("Caribbean Boilermaker");
            }}
          >
            <img
              src="https://www.thecocktaildb.com/images/media/drink/svsxsv1454511666.jpg"
              alt="Caribbean Boilermaker"
            ></img>
          </div>
        </ContWrapper>
        <ContWrapper>
          <h3>Mary Pickford</h3>
          <h3>Victor</h3>
          <h3>Grand Blue</h3>
          <h3>Amaretto Sunset</h3>
          <h3>Caribbean Boilermaker</h3>
        </ContWrapper>
      </>
    );
  }
}
LatestDrinks.contextType = AppContext;
export default LatestDrinks;
