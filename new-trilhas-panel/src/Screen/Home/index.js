import React from "react";
import {
  Container,
  Content,
  ButtonRelatorio,
  ButtonsBox,
  Title,
  TitleBox,
  TrilheirosBox,
  AvatarTrilheiros,
  NomeTrilheiro,
  CidadeTrilheiros
} from "./styles";

import NavBar from "../../GlobalComponents/NavBar";
import Avatar from "../../Images/Login/logo.png"

//////FIREBASE///////
import { fire, userRef } from "../../GlobalComponents/config";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fire
      .database()
      .ref(userRef)
      .on("value", (snapshot) => {
        let tmp = snapshot;
      });
  }

  render() {
    return (
      <Container>
        <NavBar thisPage="Home" />
        <Content>
          <TitleBox>
            <Title>Relatório Geral</Title>
          </TitleBox>
          <ButtonsBox>
            <ButtonRelatorio>Botao</ButtonRelatorio>
            <ButtonRelatorio>Botao</ButtonRelatorio>
            <ButtonRelatorio>Botao</ButtonRelatorio>
            <ButtonRelatorio>Botao</ButtonRelatorio>
            <ButtonRelatorio>Botao</ButtonRelatorio>
          </ButtonsBox>

          <TitleBox>
            <Title>Relatório Trilheiros</Title>
          </TitleBox>
          <TrilheirosBox>
              <AvatarTrilheiros src={Avatar}/>
              <NomeTrilheiro>Antonio Rodrigues</NomeTrilheiro>
              <br/>
              <CidadeTrilheiros>Caraguatatuba</CidadeTrilheiros>
          </TrilheirosBox>
        </Content>
      </Container>
    );
  }
}
