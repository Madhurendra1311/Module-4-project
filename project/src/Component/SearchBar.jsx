import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../Context/AppContextProvider";

const Cont = styled.div`
  padding: 10px;
  margin-top: 40px;
  input {
    padding: 10px;
    color: black;
  }
  button {
    padding: 10px;
    margin-left: 10px;
    color: black;
  }
`;
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: true,
      data: "",
    };
  }
  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };
  handleSearch = (event) => {
    event.preventDefault();
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?", {
        params: {
          s: this.state.name,
        },
      })
      .then((res) => this.setToken(res.data))
      .catch((err) => console.log(err));
  };

  setToken = (res) => {
    const {
      isAuth,
      toggleAuth,
      data,
      updateData,
      updateStatus,
      updateInte,
      updatepopInte,
      updateranInte,
      updateLetter,
    } = this.context;
    toggleAuth(true);
    this.setState({
      data: res.drinks,
    });
    console.log(this.state.data);
    updateData(this.state.data);
    updateInte("");
    updateLetter("");
    updatepopInte("");
    updateranInte("");
  };
  render() {
    return (
      <>
        <Cont>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Search the name"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </Cont>
      </>
    );
  }
}
SearchBar.contextType = AppContext;
export default SearchBar;
