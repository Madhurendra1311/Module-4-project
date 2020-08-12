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
const ContWrapp = styled.div`
  background-color: #330033;
  * {
    color: white;
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
            <SearchBar />

            {!isAuth && !status ? (
              <>
                <PopularDrinks />
                <PopularIngredients />
                <RandomDrinks />
                <RandomIngredients />
                <LatestDrinks />
                <BrowseDrinks />
              </>
            ) : (
              <>
                <Result data={data} />
                <Letter />
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
