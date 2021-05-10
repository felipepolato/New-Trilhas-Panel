import React from "react";
import { Container, Content } from "./styles";

import NavBar from "../../GlobalComponents/NavBar";
import ComponentsAccounts from "./components/ComponentsAccounts";

export default class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <NavBar thisPage="Accounts" />
      <Content>
        <ComponentsAccounts/>
      </Content>
        
      </Container>
    );
  }
}
