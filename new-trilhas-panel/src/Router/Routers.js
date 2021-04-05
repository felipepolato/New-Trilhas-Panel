import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accounts from "../Screen/Accounts";
import Clients from "../Screen/Clients";
import Destinations from "../Screen/Destinations/index";
import Home from "../Screen/Home";
import Login from "../Screen/Login";
import Sections from "../Screen/Sections";
import ClientesAdd from "../Screen/ClientsAdd"
import DestinationAdd from "../Screen/DestinationAdd"

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
        <Route exact path={"/accounts"}>
          <Accounts />
        </Route>
        <Route exact path={"/destinations"}>
          <Destinations />
        </Route>
        <Route exact path={"/sections"}>
          <Sections />
        </Route>
        <Route exact path={"/clientsadd"}>
          <ClientesAdd />
        </Route>
        <Route exact path={"/destinationadd"}>
          <DestinationAdd />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
