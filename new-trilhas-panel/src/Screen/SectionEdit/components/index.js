import React from "react";

import { ButtonSubmit, Label, InputEdit, DivEdit } from "./styles";

import { fire } from "../../../GlobalComponents/config";

export default class ComponentsSectionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulos: [],
      secoes: [],
      total: 0,
      alertOpened: false,
      novoNome: "",
    };
  }

  componentDidMount() {
    console.log(`Section ID: ${localStorage.getItem("sectionId")}`);
    console.log(`Section ID: ${localStorage.getItem("sectionNicho")}`);
  }

  render() {
    return (
      <DivEdit>
        <Label>Nome da Seção</Label>
        <InputEdit
          placeholder="Nome do Nicho"
          onChange={(text) => this.setState({ novoNome: text.target.value })}
          value={this.state.novoNome}
        />
        <ButtonSubmit
          type="submit"
          onClick={() => {
            fire
              .database()
              .ref(
                `categorias/${localStorage.getItem(
                  "sectionId"
                )}/${localStorage.getItem("sectionNicho")}/`
              )
              .set({});

            fire
              .database()
              .ref(
                `categorias/${localStorage.getItem(
                  "sectionId"
                )}/${localStorage.getItem("sectionNicho")}/`
              )
              .set("ok");
          }}
        >
          Editar Seção
        </ButtonSubmit>
      </DivEdit>
    );
  }
}
