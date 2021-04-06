import React, { Component } from "react";
import { Wrapper, ContainerShadowBox, Container } from "./styles";

import Navbar from "../../GlobalComponents/NavBar";
import ComponentsAddDestinos from "../DestinationAdd/AddDestinos";

///////////////////////////

export default class DestinationInformation extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <ContainerShadowBox />
        <Container>
          <ComponentsAddDestinos />
        </Container>
      </Wrapper>
    );
  }
}
