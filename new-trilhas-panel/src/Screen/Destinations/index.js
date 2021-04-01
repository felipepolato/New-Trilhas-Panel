import React from "react";
import { Container } from "./styles";

import NavBar from "../../GlobalComponents/NavBar";

import { Content } from "../Home/styles";
import ComponentsDestination from "./components/ComponentsDestinations";

export default class Destinations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <NavBar thisPage="Destinations" />
        <Content>
          <ComponentsDestination />
        </Content>
      </Container>
    );
  }
}
