import React from "react";

import {
  Title,
  Table,
  Col22,
  Col21,
  Row2,
  TitleBox,
  Th,
  TdTitle,
  TdSubTitle,
  ButtonEditText,
  ButtonRemoveText,
  ButtonRemoveTextBox,
  ButtonRemove,
  ButtonEditTextBox,
  ButtonEdit,
  Tr,
} from "./styles";

import icon from "../../../Images/location-icon.png";

import { fire } from "../../../GlobalComponents/config";
import TrilhasAlert from "../../../GlobalComponents/TrilhasAlert";

export default class ComponentsSearchDestinos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      alertOpened: false,
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref(`/destinos/`)
      .on("value", (snapshot) => {
        let tmp = snapshot.val();
        let array = [];

        for (let loop in tmp) {
            console.log(tmp[loop].nome);
          let stringA = localStorage.getItem("search_client_field");
          let stringB = tmp[loop].nome;
          if (stringB.indexOf(stringA) !== -1) {
            array.push(tmp[loop]);
          }
        }
        this.setState({ data: array });
      });
  }

  render() {
    const renderTables = () => {
      let toRender = [];
      let data = this.state.data;

      let sideA = [];
      let sideB = [];

      let size = data.length / 2.3;

      let count = 0;

      for (let loop in data) {
        let arrayImage = `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${encodeURI(
          data[loop].nome
        )}%2Flogomarca.png?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`;
        if (count < size) {
          console.log(arrayImage);
          sideA.push(
            <Tr>
              <center>
                <td>
                  <img
                    src={arrayImage}
                    style={{ marginTop: 20 }}
                    width="100%"
                  />
                </td>
              </center>
              <td style={{ paddingLeft: 10 }}>
                <TdTitle>{data[loop].nome}</TdTitle> <br />
                <TdSubTitle>
                  {data[loop].cidade}/{data[loop].estado}
                </TdSubTitle>
              </td>
              <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                <ButtonEdit
                  onClick={() => {
                    localStorage.setItem("destinoId", loop);
                    window.location.href = "/destinoedit";
                  }}
                >
                  <img src={icon} width="40%" height="70%" alt="logo" />
                  <ButtonEditTextBox
                    onClick={() => {
                      localStorage.setItem("destinoId", loop);
                      window.location.href = "/destinoedit";
                    }}
                  >
                    <ButtonEditText>Editar</ButtonEditText>
                  </ButtonEditTextBox>
                </ButtonEdit>

                <ButtonRemove
                  onClick={() => {
                    localStorage.setItem("id-to-delete", loop);
                    this.setState({ alertOpened: true });
                  }}
                >
                  <img src={icon} width="40%" height="70%" alt="logo" />
                  <ButtonRemoveTextBox>
                    <ButtonRemoveText>Excluir</ButtonRemoveText>
                  </ButtonRemoveTextBox>
                </ButtonRemove>
              </td>
            </Tr>
          );
        } else {
          sideB.push(
            <Tr>
              <center>
                <td>
                  <img
                    src={arrayImage}
                    style={{ marginTop: 20 }}
                    width="100%"
                  />
                </td>
              </center>
              <td style={{ paddingLeft: 10 }}>
                <TdTitle>{data[loop].nome}</TdTitle> <br />
                <TdSubTitle>
                  {data[loop].cidade}/{data[loop].estado}
                </TdSubTitle>
              </td>
              <td style={{ paddingTop: 10, paddingBottom: 10 }}>
                <ButtonEdit
                  onClick={() => {
                    localStorage.setItem("destinoId", loop);
                    window.location.href = "/destinoedit";
                  }}
                >
                  <img src={icon} width="40%" height="70%" alt="logo" />
                  <ButtonEditTextBox
                    onClick={() => {
                      localStorage.setItem("destinoId", loop);
                      window.location.href = "/destinoedit";
                    }}
                  >
                    <ButtonEditText>Editar</ButtonEditText>
                  </ButtonEditTextBox>
                </ButtonEdit>

                <ButtonRemove
                  onClick={() => {
                    localStorage.setItem("id-to-delete", loop);
                    this.setState({ alertOpened: true });
                  }}
                >
                  <img src={icon} width="40%" height="70%" alt="logo" />
                  <ButtonRemoveTextBox>
                    <ButtonRemoveText>Excluir</ButtonRemoveText>
                  </ButtonRemoveTextBox>
                </ButtonRemove>
              </td>
            </Tr>
          );
        }
        count++;
      }

      toRender.push(
        <Row2>
          <Col21>
            <Table>
              <tr>
                <Th
                  style={{
                    width: "20%",
                    paddingTop: "10px",
                    paddingBottom: "20px",
                  }}
                >
                  Logomarca
                </Th>
                <Th style={{ paddingTop: "10px", paddingBottom: "20px" }}>
                  Informações
                </Th>
                <Th
                  style={{
                    width: "20%",
                    paddingTop: "10px",
                    paddingBottom: "20px",
                  }}
                >
                  Ações
                </Th>
              </tr>
              {sideA}
            </Table>
          </Col21>
          <Col22>
            <Table>
              <tr>
                <Th
                  style={{
                    width: "20%",
                    paddingTop: "10px",
                    paddingBottom: "20px",
                  }}
                >
                  Logomarca
                </Th>
                <Th style={{ paddingTop: "10px", paddingBottom: "20px" }}>
                  Informações
                </Th>
                <Th
                  style={{
                    width: "20%",
                    paddingTop: "10px",
                    paddingBottom: "20px",
                  }}
                >
                  Ações
                </Th>
              </tr>
              {sideB}
            </Table>
          </Col22>
        </Row2>
      );

      return toRender;
    };
    return (
      <div>
        <TitleBox>
          <Title>Destinos</Title>
        </TitleBox>

        {renderTables()}

        {this.state.alertOpened ? (
          <TrilhasAlert
            title="EXCLUIR DESTINO"
            message="VOCÊ QUER EXCLUIR ESTE DESTINO?"
            confirmTitle="EXCLUIR"
            confirmOnClick={() =>
              fire
                .database()
                .ref(`/destinos/${localStorage.getItem("id-to-delete")}`)
                .set({})
            }
            cancelTitle="CANCELAR"
            cancelOnClick={() => this.setState({ alertOpened: false })}
            pageToReturn="/destinations"
          />
        ) : null}
      </div>
    );
  }
}