import React, { Component } from "react";
import { Wrapper, ContainerShadowBox, Container } from "./styles";

import Navbar from "../../GlobalComponents/NavBar";
import AddDestinos from "./AddDestinos";

///////////////////////////

export default class DestinationAdd extends Component {

  
  render() {
    return (
      <Wrapper>
        <Navbar />
        <ContainerShadowBox />
        <Container>
          <AddDestinos />
        </Container>
      </Wrapper>
    );
  }
}
