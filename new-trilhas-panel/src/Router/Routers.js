import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "../Screen/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/home"}>
          <HomeScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
