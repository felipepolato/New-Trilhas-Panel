import React, { Component } from "react";
//import "./main.css";
import { Wrapper, ContainerShadowBox, Container } from "./styles";

import Navbar from "../../GlobalComponents/NavBar";
import ComponentsClientsAdd from "./components";

///////////////////////////

export default class ClientesAdd extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <ContainerShadowBox />
        <Container>
          <ComponentsClientsAdd />
        </Container>
      </Wrapper>
    );
  }
}
