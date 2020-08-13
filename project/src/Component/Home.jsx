import React from "react";
import styled from "styled-components";
import { Component } from "react";
import NavBar from "../Component/NavBar";
import PopularDrinks from "../Component/PopularDrinks";
import PopularIngredients from "../Component/PopularIngredients";
import RandomDrinks from "../Component/RandomDrinks";
import RandomIngredients from "../Component/RandomIngredients";
import LatestDrinks from "../Component/LatestDrinks";
import SearchBar from "../Component/SearchBar";
import { AppContext } from "../Context/AppContextProvider";
import Result from "../Component/Result";
import Welcome from "../Component/Welcome";
import BrowseDrinks from "../Component/BrowseDrinks";
import Letter from "../Component/Letter";
import ImageDes from "../Component/ImageDes";
const ContWrapp = styled.div`
  background-color: #330033;
  * {
    color: white;
  }
  hr {
    width: 83%;
    margin-left: 9%;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.context);
    const { isAuth, data, status } = this.context;
    return (
      <>
        <div>
          <ContWrapp>
            <NavBar></NavBar>
            <Welcome />
            <hr></hr>
            <SearchBar />
            <hr></hr>
            {!isAuth ? (
              <>
                <PopularDrinks />
                <hr></hr>
                <PopularIngredients />
                <hr></hr>
                <RandomDrinks />
                <hr></hr>
                <RandomIngredients />
                <hr></hr>
                <LatestDrinks />
                <hr></hr>
                <BrowseDrinks />
              </>
            ) : (
              <>
                <Result data={data} />
                <Letter />
                <ImageDes />
              </>
            )}
          </ContWrapp>
        </div>
      </>
    );
  }
}
Home.contextType = AppContext;
export default Home;
