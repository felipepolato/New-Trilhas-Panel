import React from "react";
import { LoginBox, Input, InputsBox, FormTitle, InputSubmit } from "./styles";
import "./styles.css";

import databse from "firebase/database";
import { fire } from "../../../../GlobalComponents/config";

import LogoRoundedImage from "../../../../Images/Login/logo.png";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: "",
    };
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
            value={this.state.user}
            onChange={(e) => this.setState({ user: e.target.value })}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={this.state.pass}
            onChange={(e) => this.setState({ pass: e.target.value })}
          />
          <InputSubmit
            onClick={() => {
              document.getElementById("logo").style.animation =
                "anim-logo 0.2s linear 2";

              setTimeout(() => {
                /*
                
                  COLOCAR FUNÇÃO DE LOGIN AQUI!
                
                */
              }, 500);
            }}
          >
            Entrar
          </InputSubmit>
        </InputsBox>
      </LoginBox>
    );
  }
}
