import React from "react";
import styled from "styled-components";
import { Component } from "react";
class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      
          <div style={{ marginTop: "30px", marginLeft: "100px" }}>
            <div style={{ width: "1100px", height: "200px",  display: "flex" }}>
              <div>
                <img src="https://www.thecocktaildb.com/images/cocktail_left.png" style={{ width: "150px", height: "150px"}}/>
              </div>
              <div >
                <div>
                    <h1>Welcome to TheCocktailDB</h1>
                </div>
                <div>
                    <p>An open, crowd-sourced database of drinks and cocktails from around the world.
                        We also offer a free JSON API for anyone wanting to use it.
                        If you like the site, please consider supporting us on Patreon by clicking the link below...</p>
                </div>
                <div >
                    <img src="https://www.thecocktaildb.com/images/patreon_logo.png" style={{ width: "120px", height: "40px"}} />
                </div>
              </div>
              <div >
                <img src="https://www.thecocktaildb.com/images/cocktail_left.png" style={{ width: "150px", height: "150px"}} />
              </div>
            </div>
          </div>
        
      </>
    );
  }
}
export default Welcome;