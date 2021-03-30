import React from "react";
import { Container } from "./styles";

import NavBar from "../../GlobalComponents/NavBar";

export default class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <NavBar thisPage="Clients" />
      </Container>
    );
  }
}
