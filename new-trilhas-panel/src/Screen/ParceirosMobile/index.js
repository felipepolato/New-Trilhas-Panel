import React, { Component } from "react";
import { Wrapper, ContainerShadowBox, Container } from "./styles";

import NavBarMobile from "../../GlobalComponents/NavBarMobile";
import ComponentsParceiroMobleScreen from "./components";
///////////////////////////

export default class ParceiroMobleScreen extends Component {
  render() {
    return (
      <Wrapper>
        <NavBarMobile />
        <ContainerShadowBox />
        <Container>
          <ComponentsParceiroMobleScreen />
        </Container>
      </Wrapper>
    );
  }
}
