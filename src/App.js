import React from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import { Switch, Route } from "react-router";
import SignIn from "./Components/SignIn/SignIn.jsx";
import OptionalNavbar from "./Components/OptionalNavbar/OptionalNavbar";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();
export default function App() {
  return (
    <>
      <OptionalNavbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/signIn"
          render={(routerProps) => <SignIn isSignIn={true} {...routerProps} />}
        />
        <Route
          exact
          path="/signUp"
          render={(routerProps) => <SignIn isSignIn={false} {...routerProps} />}
        />
      </Switch>
    </>
  );
}
