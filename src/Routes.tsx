import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";

export const Routes: FunctionComponent = () => (
  <Switch>
    <Route component={Home} />
  </Switch>
);
