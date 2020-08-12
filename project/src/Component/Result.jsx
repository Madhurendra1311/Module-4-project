import React, { Component } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContextProvider";
const Cont = styled.div`
  display: flex;
  width: 80%;
  margin: 10%;
  img {
    width: 100px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;
const Card = styled.div`
  display: flex;
  margin-left: 37%;
  margin-top: -60px;
  img {
    width: 300px;
    border: 5px solid black;
    flex: 1px;
  }
`;
class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  render() {
    console.log(this.context.data ? this.context.data[0].idDrink : null);
    return (
      <>
        <Cont>
          <Card>
            {this.props.data ? (
              <h4>
                {this.props.data.map((item) => (
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
Result.contextType = AppContext;
export default Result;
