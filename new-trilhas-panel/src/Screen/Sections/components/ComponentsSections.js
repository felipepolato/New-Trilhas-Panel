import React from "react";

import {
  Table,
  Col22,
  Col21,
  Row2,
  ButtonEditText,
  ButtonRemoveText,
  ButtonRemoveTextBox,
  ButtonRemove,
  ButtonEditTextBox,
  ButtonEdit,
  Th,
} from "./styles";

import icon from "../../../Images/location-icon.png";

export default class ComponentsSection extends React.Component {
  render() {
    return (
      <Row2>
        <Col21>
          <Table>
            <tr>
              <Th>Nome</Th>
              <td>Nome do Nicho</td>
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
            <Table>
              <tr>
                <Th>Nome</Th>
                <td>Nome do Nicho</td>
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
          </Table>
        </Col22>
      </Row2>
    );
  }
}
