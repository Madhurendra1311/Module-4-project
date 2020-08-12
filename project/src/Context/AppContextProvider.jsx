import React from "react";
export const AppContext = React.createContext();
class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "context value",
      isAuth: false,
      data: "",
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
  render() {
    console.log(this.state.isAuth, this.state.data);
    const { isAuth, data } = this.state;
    const { toggleAuth, updateData } = this;
    return (
      <AppContext.Provider value={{ isAuth, data, toggleAuth, updateData }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppContextProvider;
