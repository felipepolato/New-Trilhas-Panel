import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clients from "../Screen/Clients";
import HomeScreen from "../Screen/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/home"}>
          <HomeScreen />
        </Route>
        <Route exact path={"/clients"}>
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
