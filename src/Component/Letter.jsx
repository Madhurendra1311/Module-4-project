import React from "react";
import { AppContext } from "../Context/AppContextProvider";
import { Component } from "react";
import styled from "styled-components";
const Cont = styled.div`
  width: 80%;
  background-color: #330033;
  margin: 10%;
  img {
    width: 100px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;
const Card = styled.div`
  margin-top: -200px;

  img {
    width: 300px;
    border: 5px solid white;
  }
`;
class Letter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.context.letterdata);
    const { letterdata } = this.context;
    return (
      <>
        <Cont>
          <Card>
            {letterdata ? (
              <h4>
                {letterdata.map((item) => (
                  <div>
                    <img src={item.strDrinkThumb}></img>
                    <h4>{item.strDrink}</h4>
                    <h4>Category:{item.strCategory}</h4>
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
Letter.contextType = AppContext;
export default Letter;