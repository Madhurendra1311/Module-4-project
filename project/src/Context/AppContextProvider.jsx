import React from "react";
export const AppContext = React.createContext();
class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "context value",
      isAuth: false,
      status: false,
      data: "",
      letterdata: "",
      intdata: "",
      popInte: "",
      ranInte: "",
    };
  }
  toggleAuth = (res) => {
    this.setState({
      isAuth: res,
    });
  };
  updateData = (data) => {
    console.log(data);
    this.setState({
      data: data,
    });
  };
  updateStatus = (data) => {
    this.setState({
      status: data,
    });
  };
  updateInte = (data) => {
    this.setState({
      intdata: data,
    });
  };
  updatepopInte = (data) => {
    this.setState({
      popInte: data,
    });
  };
  updateranInte = (data) => {
    this.setState({
      ranInte: data,
    });
  };
  updateLetter = (data) => {
    this.setState({
      letterdata: data,
    });
  };
  render() {
    console.log(this.state.ranInte);
    const {
      status,
      isAuth,
      data,
      letterdata,
      intdata,
      popInte,
      ranInte,
    } = this.state;
    const {
      toggleAuth,
      updateData,
      updateStatus,
      updateInte,
      updatepopInte,
      updateranInte,
      updateLetter,
    } = this;
    return (
      <AppContext.Provider
        value={{
          isAuth,
          data,
          status,
          letterdata,
          toggleAuth,
          updateData,
          updateStatus,
          updateLetter,
          intdata,
          updateInte,
          popInte,
          ranInte,
          updatepopInte,
          updateranInte,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppContextProvider;
