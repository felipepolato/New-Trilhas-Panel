import React from "react";
import { Container, Row, Banner } from "./styles";
import "./main.css";

import BannerImage from "../../Images/Login/left-image.png";
import BackgroundImage from "../../Images/bg.png";
import BackgroundImageTwo from "../../Images/bg2.png";
import BackgroundImageThree from "../../Images/bg3.png";

import LoginForm from "./components";

export default class LoginMobile extends React.Component {
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
        <img src={BackgroundImage} className="bgImageFour" />
        <Row style={{ justifyContent: "flex-start" }}>
          <LoginForm />
        </Row>
      </Container>
    );
  }
}
