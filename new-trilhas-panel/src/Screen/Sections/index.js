import React from "react";
import { Container, Content } from "./styles";

import NavBar from "../../GlobalComponents/NavBar";
import ComponentsSection from "./components/ComponentsSections";

export default class Sections extends React.Component {
  render() {
    return (
      <Container>
        <NavBar thisPage="Sections" />
        <Content>
          <ComponentsSection />
        </Content>
      </Container>
    );
  }
}
