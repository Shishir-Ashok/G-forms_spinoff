import React, { Component } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import { Switch, Route } from "react-router";
import SignUp from "./Components/SignUp/SignUp";
import OptionalNavbar from "./Components/OptionalNavbar/OptionalNavbar";

export class App extends Component {
  render() {
    return (
      <>
        <OptionalNavbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/signUp"
            render={(routerProps) => (
              <SignUp isSignIn={true} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/logIn"
            render={(routerProps) => (
              <SignUp isSignIn={false} {...routerProps} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
