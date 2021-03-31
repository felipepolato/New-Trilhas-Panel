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
} from "./styles";

import icon from "../../../Images/location-icon.png";

export default class ComponentsAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <TitleBox>
          <Title>Clientes</Title>
        </TitleBox>

        <Row2>
          <Col21>
            <Table>
              <tr>
                <Th style={{ width: "20%" }}>Logomarca</Th>
                <Th>Informações</Th>
                <Th style={{ width: "20%" }}>Ações</Th>
              </tr>
              <tr>
                <center>
                  <td>
                    <img src={icon} width="50%" />
                  </td>
                </center>
                <td>
                  <TdTitle>Nome</TdTitle> <br />
                  <TdSubTitle>Nicho</TdSubTitle> <br />
                  <TdSubTitle>Cidade/Estado</TdSubTitle>
                </td>
                <td>
                  <ButtonEdit>
                    <img src={icon} width="40%" height="70%" alt="logo" />
                    <ButtonEditTextBox>
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
              </tr>
            </Table>
          </Col21>
          <Col22>
            <Table>
              <tr>
                <Th style={{ width: "20%" }}>Logomarca</Th>
                <Th>Informações</Th>
                <Th style={{ width: "20%" }}>Ações</Th>
              </tr>

              <tr>
                <center>
                  <td>
                    <img src={icon} width="50%" />
                  </td>
                </center>
                <td>
                  <TdTitle>Nome</TdTitle> <br />
                  <TdSubTitle>Nicho</TdSubTitle> <br />
                  <TdSubTitle>Cidade/Estado</TdSubTitle>
                </td>
                <td>
                  <ButtonEdit>
                    <img src={icon} width="40%" height="70%" alt="logo" />
                    <ButtonEditTextBox>
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
              </tr>
            </Table>
          </Col22>
        </Row2>
      </div>
    );
  }
}
