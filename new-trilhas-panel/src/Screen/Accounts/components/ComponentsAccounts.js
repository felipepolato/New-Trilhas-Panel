import React from "react";

import { TableUsers, TableUserHeaderText, TableUserHeaderBox } from "./styles";

export default class ComponentsAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <TableUsers>
        <TableUserHeaderBox style={{ marginLeft: "2px" }}>
          <TableUserHeaderText>Nome</TableUserHeaderText>
        </TableUserHeaderBox>

        <TableUserHeaderBox style={{ marginLeft: "2px", marginRight: "2px" }}>
          <TableUserHeaderText>Sobrenome</TableUserHeaderText>
        </TableUserHeaderBox>

        <TableUserHeaderBox>
          <TableUserHeaderText>Ações</TableUserHeaderText>
        </TableUserHeaderBox>
      </TableUsers>
    );
  }
}
