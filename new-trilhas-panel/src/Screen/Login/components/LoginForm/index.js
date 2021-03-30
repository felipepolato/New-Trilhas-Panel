import React from "react";
import {
  LoginBox,
  Input,
  InputsBox,
  FormTitle,
  InputSubmit,
} from "./styles";
import "./styles.css";

import LogoRoundedImage from "../../../../Images/Login/logo.png";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <LoginBox>
        <img className="logo" id="logo" src={LogoRoundedImage} />
        <InputsBox>
          <FormTitle>Faça seu login:</FormTitle>
          <Input
            style={{
              marginTop: "5px",
            }}
            placeholder="Usuário"
            type="text"
          />
          <Input placeholder="Senha" type="password" />
          <InputSubmit onClick={ () => {
           document.getElementById('logo').style.animation = "anim-logo 0.2s linear 2";   
          }}>Entrar</InputSubmit>
        </InputsBox>
      </LoginBox>
    );
  }
}
