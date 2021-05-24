import React from "react";

import {
  TableUsers,
  TableUserHeaderText,
  TableUserHeaderBox,
  TableUsers2,
  TableUserHeaderText2,
  TableUserHeaderBox2,
} from "./styles";

import { fire } from "../../../GlobalComponents/config";

export default class ComponentsAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      usuario: "",
      comercio: "",
      acoes: "",
      toRender: []
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref("/panelUsers/")
      .on("value", (snapshot) => {
        let tmp = snapshot.val();
        let toRender = [];
        let result = tmp.length;

        for (let loop in tmp) {
          if (tmp[loop] == null) continue;
          toRender.push(
            <TableUsers2>
              <TableUserHeaderBox2
                style={{ marginLeft: "2px", marginRight: "2px" }}
              >
                <TableUserHeaderText2>{tmp[loop].name}</TableUserHeaderText2>
              </TableUserHeaderBox2>

              <TableUserHeaderBox2
                style={{ marginLeft: "2px", marginRight: "2px" }}
              >
                <TableUserHeaderText2>{tmp[loop].surname}</TableUserHeaderText2>
              </TableUserHeaderBox2>

              <TableUserHeaderBox2
                style={{ marginLeft: "2px", marginRight: "2px" }}
              >
                <TableUserHeaderText2>{tmp[loop].user}</TableUserHeaderText2>
              </TableUserHeaderBox2>

              <TableUserHeaderBox2
                style={{ marginLeft: "2px", marginRight: "2px" }}
              >
                <TableUserHeaderText2>{tmp[loop].comercio}</TableUserHeaderText2>
              </TableUserHeaderBox2>

              <TableUserHeaderBox2
                style={{ marginLeft: "2px", marginRight: "2px" }}
              >
                <TableUserHeaderText2>Ações</TableUserHeaderText2>
              </TableUserHeaderBox2>
            </TableUsers2>
          );
        }
        this.setState({ countUsers: result, toRender: toRender });
      });
  }

  render() {
    const { toRender } = this.state;

    return (
      <div>
        <TableUsers>
          <TableUserHeaderBox style={{ marginLeft: "2px", marginRight: "2px" }}>
            <TableUserHeaderText>Nome</TableUserHeaderText>
          </TableUserHeaderBox>

          <TableUserHeaderBox style={{ marginLeft: "2px", marginRight: "2px" }}>
            <TableUserHeaderText>Sobrenome</TableUserHeaderText>
          </TableUserHeaderBox>

          <TableUserHeaderBox style={{ marginLeft: "2px", marginRight: "2px" }}>
            <TableUserHeaderText>Usuário</TableUserHeaderText>
          </TableUserHeaderBox>

          <TableUserHeaderBox style={{ marginLeft: "2px", marginRight: "2px" }}>
            <TableUserHeaderText>Comércio</TableUserHeaderText>
          </TableUserHeaderBox>

          <TableUserHeaderBox style={{ marginLeft: "2px", marginRight: "2px" }}>
            <TableUserHeaderText>Ações</TableUserHeaderText>
          </TableUserHeaderBox>
        </TableUsers>
        {toRender}
      </div>
    );
  }
}
