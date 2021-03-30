import React from "react";
import { Container, Row, Banner } from "./styles";

import BannerImage from '../../Images/Login/left-image.png';

import LoginForm from './components/LoginForm';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Row style={{ justifyContent: 'flex-start'}}>
            <LoginForm />
        </Row>
        <Row>
            <Banner src={BannerImage} />
        </Row>
      </Container>
    );
  }
}
