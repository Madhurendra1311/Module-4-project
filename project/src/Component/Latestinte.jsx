import React, { Component } from "react";
import { AppContext } from "../Context/AppContextProvider";
import styled from "styled-components";
const Cont = styled.div`
  float: left;
  width: 80%;
  margin-left: 45%;
  margin-top: 0px;
  img {
    width: 100px;
    margin-left: 10px;
  }
`;
const Card = styled.div`
  float: left;
  margin-top: -70px;
  img {
    width: 300px;
    border: 5px solid white;
    flex: 1px;
  }
`;
class LatestInte extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.context.popInte);
    const { popInte } = this.context;
    return (
      <>
        {" "}
        <Cont>
          <Card>
            {popInte ? (
              <h4>
                {popInte.map((item) => (
                  <div>
                    <img src={item.strDrinkThumb}></img>
                    <h4>{item.strDrink}</h4>
                    <h4>Category:{item.strCategory}</h4>
                    <h4>{item.strIngredient1}</h4>
                    <h4>{item.strIngredient2}</h4>
                    <h4>{item.strIngredient3}</h4>
                    <h4>{item.strIngredient4}</h4>
                    <h4>{item.strIngredient5}</h4>
                    <h4>{item.strIngredient6}</h4>
                    <h4>{item.strIngredient7}</h4>
                    <h4>{item.strIngredient8}</h4>
                    <h4>Instructions:{item.strInstructions}</h4>
                  </div>
                ))}
              </h4>
            ) : null}
          </Card>
        </Cont>
      </>
    );
  }
}
LatestInte.contextType = AppContext;
export default LatestInte;
