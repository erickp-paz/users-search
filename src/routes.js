import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Users from "./Users";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/:user" exact>
        <Users />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
