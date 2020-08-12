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
    const { isAuth, data } = this.context;
    return (
      <>
        <div>
          <ContWrapp>
            <NavBar></NavBar>
            <SearchBar />
            {!isAuth ? (
              <>
                <PopularDrinks />
                <PopularIngredients />
                <RandomDrinks />
                <RandomIngredients />
                <LatestDrinks />
              </>
            ) : (
              <Result data={data} />
            )}
          </ContWrapp>
        </div>
      </>
    );
  }
}
Home.contextType = AppContext;
export default Home;
