import React, { Component } from "react";
import { AppContext } from "../Context/AppContextProvider";
import styled from "styled-components";
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
  margin-top: -70px;
  img {
    width: 300px;
    border: 5px solid white;
    flex: 1px;
  }
`;
class ImageDes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.context.intdata);
    const { intdata } = this.context;
    return (
      <>
        {" "}
        <Cont>
          <Card>
            {intdata ? (
              <h4>
                {intdata.map((item) => (
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
ImageDes.contextType = AppContext;
export default ImageDes;
