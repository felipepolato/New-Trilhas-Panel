import React from "react";

import {
  Row,
  Col,
  Col2,
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

export default class ComponentsClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref("/clientes/")
      .on("value", (snapshot) => {
        let tmp = snapshot.val();

        this.setState({ data: tmp });
      });
  }

  render() {
    const renderTables = () => {
      let toRender = [];
      let data = this.state.data;

      let sideA = [];
      let sideB = [];

      let size = data.length / 2;

      let count = 0;

      for (let loop in data) {
        let arrayImage = `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${data[loop][0].nome}%2Flogomarca.png?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`;
        if (count <= size) {
          console.log(arrayImage);
          sideA.push(
            <Tr>
              <center>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={arrayImage} width="100%" />
                </td>
              </center>
              <td style={{ paddingLeft: "10px" }}>
                <TdTitle>{data[loop][0].nome}</TdTitle> <br />
                <TdSubTitle>{data[loop][0].nicho}</TdSubTitle> <br />
                <TdSubTitle>
                  {data[loop][0].cidade}/{data[loop][0].estado}
                </TdSubTitle>
              </td>
              <td>
                <ButtonEdit>
                  <img src={icon} width="40%" height="70%" alt="logo" />
                  <ButtonEditTextBox>
                    <ButtonEditText
                      onClick={() => {
                        localStorage.setItem("clientId", loop);
                        window.location.href = "/clientsedit";
                      }}
                    >
                      Editar
                    </ButtonEditText>
                  </ButtonEditTextBox>
                </ButtonEdit>

                <ButtonRemove>
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
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={arrayImage} width="100%" />
                </td>
              </center>
              <td style={{ paddingLeft: "10px" }}>
                <TdTitle>{data[loop][0].nome}</TdTitle> <br />
                <TdSubTitle>{data[loop][0].nicho}</TdSubTitle> <br />
                <TdSubTitle>
                  {data[loop][0].cidade}/{data[loop][0].estado}
                </TdSubTitle>
              </td>
              <td>
                <ButtonEdit>
                  <img src={icon} width="40%" height="70%" alt="logo" />
                  <ButtonEditTextBox
                    onClick={() => {
                      localStorage.setItem("clientId", loop);
                      window.location.href = "/clientsedit";
                    }}
                  >
                    <ButtonEditText>Editar</ButtonEditText>
                  </ButtonEditTextBox>
                </ButtonEdit>

                <ButtonRemove>
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
          <Title>Clientes</Title>
        </TitleBox>

        {renderTables()}
      </div>
    );
  }
}
