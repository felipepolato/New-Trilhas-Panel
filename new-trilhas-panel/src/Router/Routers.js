import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accounts from "../Screen/Accounts";
import Clients from "../Screen/Clients";
import Destinations from "../Screen/Destinations/index";
import Home from "../Screen/Home";
import Login from "../Screen/Login";
import Sections from "../Screen/Sections";
import ClientesAdd from "../Screen/ClientsAdd";
import DestinationAdd from "../Screen/DestinationAdd";
import ClientsEdit from "../Screen/ClientsEdit"
import DestinosEdit from "../Screen/DestinosEdit"
import ParceiroMobleScreen from "../Screen/ParceirosMobile";
import Parceiros from "../Screen/Parceiros";
import LoginMobile from "../Screen/LoginMobile";
import SeachClient from "../Screen/SeachClients";
import SearchDestinos from "../Screen/SearchDestinos";
import Teste from "../Screen/testeurl";

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
        <Route exact path={"/loginmobile"}>
          <LoginMobile />
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
        <Route exact path={"/add"}>
          <ClientesAdd />
        </Route>
        <Route exact path={"/destinationadd"}>
          <DestinationAdd />
        </Route>
        <Route exact path={"/clientsedit"}>
          <ClientsEdit />
        </Route>
        <Route exact path={"/destinoedit"}>
          <DestinosEdit />
        </Route>
        <Route exact path={"/parceiros"}>
          <Parceiros />
        </Route>
        <Route exact path={"/parceirosmobile"}>
          <ParceiroMobleScreen />
        </Route>
        <Route exact path={"/seachclients"}>
          <SeachClient />
        </Route>
        <Route exact path={"/seachdestinos"}>
          <SearchDestinos />
        </Route>
        <Route exact path={"/teste"}>
          <Teste />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
