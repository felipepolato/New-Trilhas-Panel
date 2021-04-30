import React from "react";
import { Container } from "./styles";
import { Content } from "../Home/styles";

import NavBar from "../../GlobalComponents/NavBar";

import ComponentsSearchClients from "./components";

export default class SearchClients extends React.Component {
  render() {
    return (
      <Container>
        <NavBar thisPage="Clients" />
        <Content>
          <ComponentsSearchClients />
        </Content>
      </Container>
    );
  }
}

