import React from "react";

import {
  Col22,
  Col21,
  Row2,
  ButtonEditText,
  ButtonRemoveText,
  ButtonRemoveTextBox,
  ButtonRemove,
  ButtonEditTextBox,
  ButtonEdit,
  TableLine,
  TableLineStriped,
  TableColumn,
  TableColumnTitle,
} from "./styles";

import { fire } from "../../../GlobalComponents/config";

import Add from "../../../Images/add.png";
import Delet from "../../../Images/x-button.png";

export default class ComponentsSectionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulos: [],
      secoes: [],
      total: 0,
      alertOpened: false,
    };
  }

  componentDidMount() {
    console.log(`Section ID: ${localStorage.getItem("sectionId")}`);
    fire
      .database()
      .ref(`/categorias/${localStorage.getItem("sectionId")}/`)
      .on("value", (snapshot) => {
        let tmp = snapshot.val();
        this.setState({
          titulos: "",
          secoes: "",
        });
        for (let loop in tmp) {
          console.log(tmp['segments']);
          this.setState({
            titulos: tmp.titulos
          })
        }
      });
  }

  render() {
    const { titulos, secoes } = this.state;

    const tablesRender = () => {
      let toRender = [];
      let initialCount = 0;
      let stripedCount = 0;
      let strangerCount = 0;
      let strangerCount2 = 0;

      let sideA = [];
      let sideB = [];
      let total = this.state.total;
      let countTotal = 0;
      for (let loop in titulos) {
        let count = initialCount + titulos[loop].amount;
        if (countTotal <= total) {
          sideA.push(
            <div>
              {strangerCount > 0 ? (
                <div>
                  <br />
                  <hr />
                </div>
              ) : null}
              <TableColumnTitle>{titulos[loop].title}</TableColumnTitle>
              
            </div>
          );

          for (let i = initialCount; i < count; i++) {
            if (stripedCount == 1) {
              sideA.push(
                <TableLine>
                  <TableColumn>{secoes[i].title}</TableColumn>
                  <TableColumn>
                    <ButtonEdit>
                      <img src={Add} width="40%" height="70%" alt="logo" />
                      <ButtonEditTextBox>
                        <ButtonEditText
                          onClick={() => {
                            localStorage.setItem("sectionId", `${loop}`);
                            window.location.href = "/sectionedit";
                          }}
                        >
                          Editar
                        </ButtonEditText>
                      </ButtonEditTextBox>
                    </ButtonEdit>

                    <ButtonRemove
                      onClick={() => {
                        localStorage.setItem("id-to-delete", loop);
                        this.setState({ alertOpened: true });
                      }}
                    >
                      <img src={Delet} width="40%" height="70%" alt="logo" />
                      <ButtonRemoveTextBox>
                        <ButtonRemoveText>Excluir</ButtonRemoveText>
                      </ButtonRemoveTextBox>
                    </ButtonRemove>
                  </TableColumn>
                </TableLine>
              );
              stripedCount = 0;
            } else if (stripedCount == 0) {
              sideA.push(
                <TableLineStriped>
                  <TableColumn>{secoes[i].title}</TableColumn>
                  <TableColumn>
                    <ButtonEdit>
                      <img src={Add} width="40%" height="70%" alt="logo" />
                      <ButtonEditTextBox>
                        <ButtonEditText
                          onClick={() => {
                            localStorage.setItem("sectionId", `${loop}`);
                            window.location.href = "/sectionedit";
                          }}
                        >
                          Editar
                        </ButtonEditText>
                      </ButtonEditTextBox>
                    </ButtonEdit>

                    <ButtonRemove
                      onClick={() => {
                        localStorage.setItem("id-to-delete", loop);
                        this.setState({ alertOpened: true });
                      }}
                    >
                      <img src={Delet} width="40%" height="70%" alt="logo" />
                      <ButtonRemoveTextBox>
                        <ButtonRemoveText>Excluir</ButtonRemoveText>
                      </ButtonRemoveTextBox>
                    </ButtonRemove>
                  </TableColumn>
                </TableLineStriped>
              );
              stripedCount = 1;
            }
          }
        } else {
          sideB.push(
            <div>
              {strangerCount2 > 0 ? (
                <div>
                  <br />
                  <hr />
                </div>
              ) : null}
              <TableColumnTitle>{titulos[loop].title}</TableColumnTitle>
            </div>
          );

          for (let i = initialCount; i < count; i++) {
            if (stripedCount == 1) {
              sideB.push(
                <TableLine>
                  <TableColumn>{secoes[i].title}</TableColumn>
                  <TableColumn>
                    <ButtonEdit>
                      <img src={Add} width="40%" height="70%" alt="logo" />
                      <ButtonEditTextBox>
                        <ButtonEditText
                          onClick={() => {
                            localStorage.setItem("sectionId", `${loop}`);
                            window.location.href = "/sectionedit";
                          }}
                        >
                          Editar
                        </ButtonEditText>
                      </ButtonEditTextBox>
                    </ButtonEdit>

                    <ButtonRemove
                      onClick={() => {
                        localStorage.setItem("id-to-delete", loop);
                        this.setState({ alertOpened: true });
                      }}
                    >
                      <img src={Delet} width="40%" height="70%" alt="logo" />
                      <ButtonRemoveTextBox>
                        <ButtonRemoveText>Excluir</ButtonRemoveText>
                      </ButtonRemoveTextBox>
                    </ButtonRemove>
                  </TableColumn>
                </TableLine>
              );
              stripedCount = 0;
            } else if (stripedCount == 0) {
              sideB.push(
                <TableLineStriped>
                  <TableColumn>{secoes[i].title}</TableColumn>
                  <TableColumn>
                    <ButtonEdit
                      onClick={() => {
                        localStorage.setItem("sectionId", loop);
                        window.location.href = "/sectionedit";
                      }}
                    >
                      <img src={Add} width="40%" height="70%" alt="logo" />
                      <ButtonEditTextBox
                        onClick={() => {
                          localStorage.setItem("sectionId", loop);
                          window.location.href = "/sectionedit";
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
                      <img src={Delet} width="40%" height="70%" alt="logo" />
                      <ButtonRemoveTextBox>
                        <ButtonRemoveText>Excluir</ButtonRemoveText>
                      </ButtonRemoveTextBox>
                    </ButtonRemove>
                  </TableColumn>
                </TableLineStriped>
              );
              stripedCount = 1;
            }
          }
          strangerCount2++;
        }

        strangerCount++;
        countTotal++;
        initialCount += titulos[loop].amount;
      }

      toRender.push(
        <Row2>
          <Col21>{sideA}</Col21>
          <br />
          <hr />
          <br />
          <Col22>{sideB}</Col22>
        </Row2>
      );

      return toRender;
    };

    return tablesRender();
  }
}
