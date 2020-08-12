import React from "react";
import styled from "styled-components";
import { Component } from "react";
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
  }
  render() {
    return (
      <>
        <h4>Latest Drinks</h4>
        <ContWrapper>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/ojnpz71504793059.jpg"
            alt="The Evil Blue Thing"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg"
            alt="Thai Coffee"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg"
            alt="Mango Orange Smoothie"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg"
            alt="Absinthe #2"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg"
            alt="Queen Elizabeth"
          ></img>
        </ContWrapper>
        <ContWrapper>
          <h3>Bounty Hunter</h3>
          <h3>Thai Coffee</h3>
          <h3>Mango Orange Smoothie</h3>
          <h3>Absinthe #2</h3>
          <h3>Queen Elizabeth</h3>
        </ContWrapper>
        <ContWrapper>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg"
            alt="Mary Pickford"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg"
            alt="Victor"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/vsrsqu1472761749.jpg"
            alt="Grand Blue"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg"
            alt="Amaretto Sunset"
          ></img>
          <img
            src="https://www.thecocktaildb.com/images/media/drink/svsxsv1454511666.jpg"
            alt="Caribbean Boilermaker"
          ></img>
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
export default LatestDrinks;
