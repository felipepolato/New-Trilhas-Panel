import React from "react";
import { Container } from "./styles";

import NavBar from "../../GlobalComponents/NavBar";
import { Content } from "../Home/styles";

import ComponentsClients from "../Clients/components/ComponentsClients"

export default class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <NavBar thisPage="Clients" />
        <Content>
          <ComponentsClients/>
        </Content>
      </Container>
    );
  }
}
