import React, { Component } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import { Switch, Route } from "react-router";
import SignIn from "./Components/SignIn/SignIn.jsx";
import OptionalNavbar from "./Components/OptionalNavbar/OptionalNavbar";
import Dashboard from "./Pages/Dashboard/Dashboard";

export class App extends Component {

  render() {
    
    return (
      <>
        <OptionalNavbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/signIn"
            render={(routerProps) => (
              <SignIn isSignIn={true} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/signUp"
            render={(routerProps) => (
              <SignIn isSignIn={false} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={(routerProps) => (
              <Dashboard isSignIn={false} {...routerProps} />
            
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
