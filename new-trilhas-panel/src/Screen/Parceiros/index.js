import React, { Component } from "react";

import { Wrapper, ContainerShadowBox, Container } from "./styles";


import ComponbentsParceiros from "./components";
import Navbar from "../../GlobalComponents/NavBar";

export default class Parceiros extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <ContainerShadowBox />
        <Container>
          <ComponbentsParceiros />
        </Container>
      </Wrapper>
    );
  }
}
