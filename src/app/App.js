import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../stores";
import MainNavStack from "../components/drawerstack/MainNavStack";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <MainNavStack />
      </Provider>
    );
  }
}
