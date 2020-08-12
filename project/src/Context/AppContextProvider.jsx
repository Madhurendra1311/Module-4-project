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
  updateLetter = (data) => {
    this.setState({
      letterdata: data,
    });
  };
  render() {
    console.log(this.state.status, this.state.data, this.state.letterdata);
    const { status, isAuth, data, letterdata } = this.state;
    const { toggleAuth, updateData, updateStatus, updateLetter } = this;
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
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppContextProvider;
