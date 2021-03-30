import React from "react";
import { Container, Row, Banner } from "./styles";
import "./styles.css";

import BannerImage from "../../Images/Login/left-image.png";
import BackgroundImage from "../../Images/bg.png";
import BackgroundImageTwo from "../../Images/bg2.png";
import BackgroundImageThree from "../../Images/bg3.png";

import LoginForm from "./components/LoginForm";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <img src={BackgroundImage} className="bgImage" />
        <img src={BackgroundImageTwo} className="bgImageTwo" />
        <img src={BackgroundImageThree} className="bgImageThree" />
        <Row style={{ justifyContent: "flex-start" }}>
          <LoginForm />
        </Row>
        <Row>
          <Banner src={BannerImage} />
        </Row>
      </Container>
    );
  }
}
