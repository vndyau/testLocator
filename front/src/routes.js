import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/landing";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
    </Switch>
  );
};

export default Routes;
