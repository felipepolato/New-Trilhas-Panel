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
  CidadeTrilheiros,
  TrilheiroDetailBox,
} from "./styles";

import NavBar from "../../GlobalComponents/NavBar";
import Avatar from "../../Images/Login/logo.png";

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
            <ButtonRelatorio
              style={{ backgroundColor: "#1179b6", color: "white" }}
            >
              Total de Abordagens
            </ButtonRelatorio>
            <ButtonRelatorio
              style={{ backgroundColor: "#2aceb6", color: "white" }}
            >
              Aprovados
            </ButtonRelatorio>
            <ButtonRelatorio
              style={{ backgroundColor: "rgb(255, 198, 73)", color: "white" }}
            >
              Negociando
            </ButtonRelatorio>
            <ButtonRelatorio
              style={{ backgroundColor: "#f94827", color: "white" }}
            >
              Reprovados
            </ButtonRelatorio>
            <ButtonRelatorio
              style={{ backgroundColor: "#f65a8a", color: "white" }}
            >
              Disponíves
            </ButtonRelatorio>
          </ButtonsBox>

          <TitleBox>
            <Title>Relatório Trilheiros</Title>
          </TitleBox>

          <TrilheirosBox>
            <AvatarTrilheiros src={Avatar} />
            <TrilheiroDetailBox>
              <NomeTrilheiro>Antonio Rodrigues</NomeTrilheiro>
              <CidadeTrilheiros>Caraguatatuba / SP</CidadeTrilheiros>
            </TrilheiroDetailBox>
            <ButtonsBox>
              <ButtonRelatorio
                style={{ backgroundColor: "#1179b6", color: "white" }}
              >
                Total de Abordagens
              </ButtonRelatorio>
              <ButtonRelatorio
                style={{ backgroundColor: "#2aceb6", color: "white" }}
              >
                Aprovados
              </ButtonRelatorio>
              <ButtonRelatorio
                style={{ backgroundColor: "rgb(255, 198, 73)", color: "white" }}
              >
                Negociando
              </ButtonRelatorio>
              <ButtonRelatorio
                style={{ backgroundColor: "#f94827", color: "white" }}
              >
                Reprovados
              </ButtonRelatorio>
              <ButtonRelatorio
                style={{ backgroundColor: "#f65a8a", color: "white" }}
              >
                Disponíves
              </ButtonRelatorio>
            </ButtonsBox>
          </TrilheirosBox>
        </Content>
      </Container>
    );
  }
}
