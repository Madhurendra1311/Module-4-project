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
class ImageDes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.context.intdata);
    const { intdata } = this.context;
    return (
      <>
        <div style={{ marginLeft: "-200px" }}>
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
        </div>
      </>
    );
  }
}
ImageDes.contextType = AppContext;
export default ImageDes;
