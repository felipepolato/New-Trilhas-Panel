import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScren from "../Screen/Home/HomeScreen";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/home"}>
          <HomeScren />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
