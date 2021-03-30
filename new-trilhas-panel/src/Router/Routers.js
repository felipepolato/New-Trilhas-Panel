import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clients from "../Screen/Clients";
import Home from "../Screen/Home";
import Login from "../Screen/Login";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/home"}>
          <Home />
        </Route>
        <Route exact path={"/clients"}>
          <Clients />
        </Route>
        <Route exact path={"/"}>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
