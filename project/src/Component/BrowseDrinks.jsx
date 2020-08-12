import React from "react";
import axios from 'axios'
import styled from "styled-components";
import { Component } from "react";
const searchKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let style = {
    background: '#f44336',
  border: 'none',
  color: "white",
  padding: '5px 11px',
  display: 'inline-block',
  fontSize: '20px',
  margin: '4px 2px',
  cursor: 'pointer',
  };

class BrowseDrinks extends Component {
  constructor(props) {
    super(props);
    this.state={
      drinksList:[]
    }
  }

  handleSearch=(data)=>{
    console.log(data);
    let searchEndpints = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+data.toLowerCase();
    axios.get(searchEndpints)
      .then(response=>{
          this.setState({
              userDetails: response.data.drinks
          })
      })
}
  render() {
    console.log(this.state.userDetails)
    return (
      <>
      <div style={style} display="flex">
          {
              searchKey.map(data=>{
                  return(
                  <button style={style} onClick={()=>this.handleSearch(data)}>{data}</button>
                  )
              })
          }
           {
              this.state.userDetails ?
              <div>
                  {
                       this.state.userDetails.map(a=>{
                           return(
                               <div>
                                   {a.strDrink}
                               </div>
                           )
                       })
                  }
            </div>:
            null
          }
      </div>
      </>
    );
  }
}
export default BrowseDrinks;