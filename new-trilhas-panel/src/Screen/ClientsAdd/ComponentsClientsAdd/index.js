import React, { Component } from "react";

import {
  DivAbsoluta,
  ButtonSubmit,
  FormSectionTitle,
  Logomarca,
  RowRow,
  Column,
  RowNumero,
  RowEstado,
  Title,
  TextCheckbox,
  DivCheckbox,
} from "./styles";

///////////////////////////
// FireBase ///////////////
///////////////////////////

import { fire } from "../../../GlobalComponents/config";

///////////////////////////
// Formulário /////////////
///////////////////////////

import TextAreaInput from "../../../GlobalComponents/Form/TextAreaInput";
import Input from "../../../GlobalComponents/Form/Forms";
import { GalleryInput } from "../../../GlobalComponents/Form/GalleryInput";
import { InputFile } from "../../../GlobalComponents/NavBar/styles";

export default class ComponentsClientsAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulos: "",
      secoes: "",

      // #InformaçõesGerais

      nome: "",
      nicho: "",
      cor: "",
      whatsapp: "",
      telefone: "",
      // #Gelocalizalição

      latitude: "",
      longitude: "",
      //#Endereço

      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      //#RedesSociais

      facebook: "",
      instagra: "",
      youtube: "",
      linkedin: "",
      twitter: "",
      site: "",

      //#HorarioDeFuncionamento

      horario1Titulo: "",
      horario1horario1: "",
      horario1horario2: "",
      horario1horario3: "",
      horario1horario4: "",

      horario2Titulo: "",
      horario2horario1: "",
      horario2horario2: "",
      horario2horario3: "",
      horario2horario4: "",

      horario3Titulo: "",
      horario3horario1: "",
      horario3horario2: "",
      horario3horario3: "",
      horario3horario4: "",

      horario4Titulo: "",
      horario4horario1: "",
      horario4horario2: "",
      horario4horario3: "",
      horario4horario4: "",
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref("/categorias/")
      .on("value", (snapshot) => {
        let tmp = snapshot.val();

        let titulos = [];
        let secoes = [];

        for (let loop in tmp) {
          titulos.push({
            title: tmp[loop].info["section-title"],
            ref: loop,
          });

          let tmp2 = tmp[loop].segments;
          for (let loop2 in tmp2) {
            secoes.push({ title: loop2 });
          }
        }

        for (let loop in titulos) {
          let tmp3 = tmp[titulos[loop].ref].segments;
          let count = 0;
          for (let loop2 in tmp3) {
            count++;
          }
          titulos[loop].count = count;
        }
        console.log(titulos);
        this.setState({ titulos: titulos, secoes: secoes });
      });
  }
  /*

          
*/
  render() {
    const { nome, idade, sobrenome } = this.state;
    const ChangeValue = (state, value) =>
      this.setState(`${state}: ${value.target.value}`);

    const CheckboxRender = () => {
      let sideA = [];
      let sideB = [];
      let loopInitialValue = 0;

      const titulos = this.state.titulos;
      const secoes = this.state.secoes;

      let countLoop = 0;
      let division = titulos.length / 2;

      for (let loop in titulos) {
        let count = loopInitialValue + titulos[loop].count;
        countLoop++;

        if (countLoop > division) {
          sideA.push(
            <Title style={{ marginTop: "1%", marginBottom: "2%" }}>
              <FormSectionTitle>{titulos[loop].title}</FormSectionTitle>
            </Title>
          );

          for (let i = loopInitialValue; i < count; i++) {
            sideA.push(
              <DivCheckbox>
                <TextCheckbox for={secoes[i].title} style={{ width: "90%" }}>
                  {secoes[i].title}
                </TextCheckbox>
                <Input type="checkbox" value={secoes[i].title} id={secoes[i].title} />
              </DivCheckbox>
            );
          }
          sideA.push(
            <hr style={{ width: '98%' }}/>
          );
        } else {
          sideB.push(
            <Title style={{ marginTop: "1%", marginBottom: "2%" }}>
              <FormSectionTitle>{titulos[loop].title}</FormSectionTitle>
            </Title>
          );

          for (let i = loopInitialValue; i < count; i++) {
            sideB.push(
              <DivCheckbox>
                <TextCheckbox for={secoes[i].title} style={{ width: "90%" }}>
                  {secoes[i].title}
                </TextCheckbox>
                <Input type="checkbox" value={secoes[i].title} id={secoes[i].title} />
              </DivCheckbox>
            );
          }
          sideB.push(
            <hr style={{ width: '98%' }}/>
          );
        }

        loopInitialValue += titulos[loop].count;
      }

      return (
        <RowRow>
          <Column>{sideA}</Column>
          <br />

          <hr />
          <Column>{sideB}</Column>
        </RowRow>
      );
    };

    return (
      <div>
        <RowRow>
          <center>
            <Logomarca>
              <InputFile nome="logomarca" />
            </Logomarca>
          </center>

          <Column>
            {/* Informações Gerais */}
            <Title>
              <FormSectionTitle>Informações Gerais</FormSectionTitle>
            </Title>
            <Input
              name="nome"
              type="text"
              maxlength="16"
              placeholder="Nome do Empreendimento"
            />

            <Input nome="nicho" placeholder="Nicho Comercial" />

            <Input nome="cor" placeholder="Cor de fundo" />

            <Input nome="whatsapp" placeholder="Whatsapp Comercial" />

            <Input nome="telefone" placeholder="Telefone Comercial" />

            <Input name="cardapio" placeholder="Cardápio" />

            {/* Geolocalização */}
            <Title style={{ marginTop: "4%" }}>
              <FormSectionTitle>Geolocalização</FormSectionTitle>
            </Title>

            <RowRow style={{ width: "106%" }}>
              <Column>
                <Input nome="latitude" placeholder="latitude" />
              </Column>
              <Column>
                <Input nome="longitude" placeholder="longitude" />
              </Column>
            </RowRow>

            {/* Endereço */}
            <Title>
              <FormSectionTitle>Endereço</FormSectionTitle>
            </Title>

            <RowRow style={{ width: "100%" }}>
              <Input nome="rua" placeholder="rua" />
              <RowNumero>
                <Input nome="numero" placeholder="número" />
              </RowNumero>
            </RowRow>
            <Input nome="complemento" placeholder="complemento" />

            <Input nome="bairro" placeholder="bairro" />
            <RowRow style={{ width: "100%" }}>
              <Input nome="cidade" placeholder="cidade" />
              <RowEstado>
                <Input nome="estado" placeholder="estado" />
              </RowEstado>
            </RowRow>
          </Column>

          <hr />
          <Column>
            <div>
              {/* Redes Sociais */}
              <Title>
                <FormSectionTitle>Redes Sociais</FormSectionTitle>
              </Title>

              <Input nome="facebook" placeholder="facebook" />
              <Input nome="instagram" placeholder="instagram" />
              <Input nome="youtube" placeholder="youtube" />
              <Input nome="linkedin" placeholder="linkedin" />
              <Input nome="twitter" placeholder="twitter" />
              <Input nome="site" placeholder="site" />
            </div>
            {/* Descrição */}
            <div style={{ marginTop: "4%" }}></div>
            <FormSectionTitle>Descrição</FormSectionTitle>
            <TextAreaInput nome="descricao" placeholder="Descrição" />
          </Column>
        </RowRow>
        <br />
        <hr />

        {/* Horário de Funcionamento [ 1 ] */}
        <center>
          <Title style={{ marginTop: "1%", marginBottom: "2%" }}>
            <FormSectionTitle>Horario de Funcionamento</FormSectionTitle>
          </Title>
        </center>
        <RowRow>
          <Column>
            <div>
              <div>
                <Input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                />
                <Input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <Input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <Input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <Input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
              </div>

              <hr />

              <div>
                <Input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                />
                <Input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <Input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <Input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <Input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
              </div>
            </div>
          </Column>
          <br />

          <hr />
          <Column>
            <div>
              <div>
                <Input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                />
                <Input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <Input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <Input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <Input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
              </div>

              <hr />

              <div>
                <Input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                />
                <Input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <Input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <Input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <Input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
              </div>
            </div>
          </Column>
        </RowRow>

        <br />
        <hr />

        {/* SENGMENTO */}
        <center>
          <Title style={{ marginTop: "1%", marginBottom: "2%" }}>
            <FormSectionTitle>Selecione os Nichos</FormSectionTitle>
          </Title>
        </center>
        {CheckboxRender()}

        <div>
        <center>
          <Title style={{ marginTop: "1%", marginBottom: "2%" }}>
            <FormSectionTitle>Fotos para Galeria</FormSectionTitle>
          </Title>
        </center>
          <RowRow>
            <GalleryInput
              nome="foto1"
              labeltext="Selecionar Foto 01"
              indexnumber={1}
            />

            <br />
            <hr />

            <GalleryInput
              nome="foto3"
              labeltext="Selecionar Foto 03"
              indexnumber={3}
            />
          </RowRow>

          <br />
          <hr />

          <RowRow>
            <GalleryInput
              nome="foto5"
              labeltext="Selecionar Foto 05"
              indexnumber={5}
            />

            <br />
            <hr />

            <GalleryInput
              nome="foto7"
              labeltext="Selecionar Foto 07"
              indexnumber={7}
            />
          </RowRow>

          <hr />

          <RowRow>
            <GalleryInput
              nome="foto2"
              labeltext="Selecionar Foto 02"
              indexnumber={2}
            />

            <br />
            <hr />

            <GalleryInput
              nome="foto4"
              labeltext="Selecionar Foto 04"
              indexnumber={4}
            />
          </RowRow>

          <br />
          <hr />

          <RowRow>
            <GalleryInput
              nome="foto6"
              labeltext="Selecionar Foto 06"
              indexnumber={6}
            />
            <div style={{ width: "180%" }} />
          </RowRow>
        </div>

        <br />
        <hr />

        <ButtonSubmit type="submit">Cadastrar no Trilhas</ButtonSubmit>
      </div>
    );
  }
}
