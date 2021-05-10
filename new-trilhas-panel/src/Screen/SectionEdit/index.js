import React from "react";
import { Container } from "./styles";

import NavBar from "../../GlobalComponents/NavBar";

import { Content } from "../Home/styles";
import ComponentsSectionEdit from "./components";

export default class SectionEdit extends React.Component {
  render() {
    return (
      <Container>
        <NavBar thisPage="Sections" />
        <Content>
          <ComponentsSectionEdit />
        </Content>
      </Container>
    );
  }
}
