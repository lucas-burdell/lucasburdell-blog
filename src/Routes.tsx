import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Blog } from "./Blog";

export const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/blog" component={Blog} />
    <Route component={Home} />
  </Switch>
);
