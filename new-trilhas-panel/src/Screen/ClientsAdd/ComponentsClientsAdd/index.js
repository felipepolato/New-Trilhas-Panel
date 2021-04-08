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

let controlCheckboxInput = [];

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
      cardapio: "",
      descricao: "",
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
      instagram: "",
      youtube: "",
      linkedin: "",
      twitter: "",
      site: "",

      //#HorarioDeFuncionamento
      titulo1: "",
      horario1Titulo: "",
      horario1horario1: "",
      horario1horario2: "",
      horario1horario3: "",
      horario1horario4: "",

      titulo2: "",
      horario2Titulo: "",
      horario2horario1: "",
      horario2horario2: "",
      horario2horario3: "",
      horario2horario4: "",

      titulo3: "",
      horario3Titulo: "",
      horario3horario1: "",
      horario3horario2: "",
      horario3horario3: "",
      horario3horario4: "",

      titulo4: "",
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

  render() {
    const {
      nome,
      nicho,
      cor,
      whatsapp,
      telefone,
      cardapio,
      latitude,
      longitude,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      facebook,
      instagram,
      youtube,
      linkedin,
      twitter,
      site,
      descricao,
      titulo1,
      titulo2,
      titulo3,
      titulo4,
      horario1horario1,
      horario1horario2,
      horario1horario3,
      horario1horario4,
      horario2horario1,
      horario2horario2,
      horario2horario3,
      horario2horario4,
      horario3horario1,
      horario3horario2,
      horario3horario3,
      horario3horario4,
      horario4horario1,
      horario4horario2,
      horario4horario3,
      horario4horario4,
    } = this.state;
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
            controlCheckboxInput.push({
              section: secoes[i].title,
              value: 'none'
            });

            let result;

            for(let loop2 in controlCheckboxInput) {
              if(controlCheckboxInput[loop2].section === secoes[i].title) {
                result = loop2;
                break;
              }
            }

            sideA.push(
              <DivCheckbox>
                <TextCheckbox for={secoes[i].title} style={{ width: "90%" }}>
                  {secoes[i].title}
                </TextCheckbox>
                <Input
                  type="checkbox"
                  id={secoes[i].title}
                  value={controlCheckboxInput[result].value}
                  onChange={() =>
                    document.getElementById(secoes[i].title).checked
                      ? controlCheckboxInput[result].value = 'ok'
                      : controlCheckboxInput[result].value = 'none'
                  }
                />
              </DivCheckbox>
            );
          }
          sideA.push(<hr style={{ width: "98%" }} />);
        } else {
          sideB.push(
            <Title style={{ marginTop: "1%", marginBottom: "2%" }}>
              <FormSectionTitle>{titulos[loop].title}</FormSectionTitle>
            </Title>
          );

          for (let i = loopInitialValue; i < count; i++) {
            controlCheckboxInput.push({
              section: secoes[i].title,
              value: 'none'
            });

            let result;

            for(let loop2 in controlCheckboxInput) {
              if(controlCheckboxInput[loop2].section === secoes[i].title) {
                result = loop2;
                break;
              }
            }
            sideB.push(
              <DivCheckbox>
                <TextCheckbox for={secoes[i].title} style={{ width: "90%" }}>
                  {secoes[i].title}
                </TextCheckbox>
                <Input
                  type="checkbox"
                  id={secoes[i].title}
                  value={controlCheckboxInput[result].value}
                  onChange={() =>
                    document.getElementById(secoes[i].title).checked
                      ? controlCheckboxInput[result].value = 'ok'
                      : controlCheckboxInput[result].value = 'none'
                  }
                />
              </DivCheckbox>
            );
          }
          sideB.push(<hr style={{ width: "98%" }} />);
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
              value={nome}
              onChange={(e) => this.setState({ nome: e.target.value })}
              placeholder="Nome do Empreendimento"
            />

            <Input
              nome="nicho"
              placeholder="Nicho Comercial"
              value={nicho}
              onChange={(e) => this.setState({ nicho: e.target.value })}
            />

            <Input
              nome="cor"
              placeholder="Cor de fundo"
              value={cor}
              onChange={(e) => this.setState({ cor: e.target.value })}
            />

            <Input
              nome="whatsapp"
              placeholder="Whatsapp Comercial"
              value={whatsapp}
              onChange={(e) => this.setState({ whatsapp: e.target.value })}
            />

            <Input
              nome="telefone"
              placeholder="Telefone Comercial"
              value={telefone}
              onChange={(e) => this.setState({ telefone: e.target.value })}
            />

            <Input
              name="cardapio"
              placeholder="Cardápio"
              value={cardapio}
              onChange={(e) => this.setState({ cardapio: e.target.value })}
            />

            {/* Geolocalização */}
            <Title style={{ marginTop: "4%" }}>
              <FormSectionTitle>Geolocalização</FormSectionTitle>
            </Title>

            <RowRow style={{ width: "106%" }}>
              <Column>
                <Input
                  nome="latitude"
                  placeholder="latitude"
                  value={latitude}
                  onChange={(e) => this.setState({ latitude: e.target.value })}
                />
              </Column>
              <Column>
                <Input
                  nome="longitude"
                  placeholder="longitude"
                  value={longitude}
                  onChange={(e) => this.setState({ longitude: e.target.value })}
                />
              </Column>
            </RowRow>

            {/* Endereço */}
            <Title>
              <FormSectionTitle>Endereço</FormSectionTitle>
            </Title>

            <RowRow style={{ width: "100%" }}>
              <Input
                nome="rua"
                placeholder="rua"
                value={rua}
                onChange={(e) => this.setState({ rua: e.target.value })}
              />
              <RowNumero>
                <Input
                  nome="numero"
                  placeholder="número"
                  value={numero}
                  onChange={(e) => this.setState({ numero: e.target.value })}
                />
              </RowNumero>
            </RowRow>
            <Input
              nome="complemento"
              placeholder="complemento"
              value={complemento}
              onChange={(e) => this.setState({ complemento: e.target.value })}
            />

            <Input
              nome="bairro"
              placeholder="bairro"
              value={bairro}
              onChange={(e) => this.setState({ bairro: e.target.value })}
            />
            <RowRow style={{ width: "100%" }}>
              <Input
                nome="cidade"
                placeholder="cidade"
                value={cidade}
                onChange={(e) => this.setState({ cidade: e.target.value })}
              />
              <RowEstado>
                <Input
                  nome="estado"
                  placeholder="estado"
                  value={estado}
                  onChange={(e) => this.setState({ estado: e.target.value })}
                />
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

              <Input
                nome="facebook"
                placeholder="facebook"
                value={facebook}
                onChange={(e) => this.setState({ facebook: e.target.value })}
              />
              <Input
                nome="instagram"
                placeholder="instagram"
                value={instagram}
                onChange={(e) => this.setState({ instagram: e.target.value })}
              />
              <Input
                nome="youtube"
                placeholder="youtube"
                value={youtube}
                onChange={(e) => this.setState({ youtube: e.target.value })}
              />
              <Input
                nome="linkedin"
                placeholder="linkedin"
                value={linkedin}
                onChange={(e) => this.setState({ linkedin: e.target.value })}
              />
              <Input
                nome="twitter"
                placeholder="twitter"
                value={twitter}
                onChange={(e) => this.setState({ twitter: e.target.value })}
              />
              <Input
                nome="site"
                placeholder="site"
                value={site}
                onChange={(e) => this.setState({ site: e.target.value })}
              />
            </div>
            {/* Descrição */}
            <div style={{ marginTop: "4%" }}></div>
            <FormSectionTitle>Descrição</FormSectionTitle>
            <TextAreaInput
              nome="descricao"
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => this.setState({ descricao: e.target.value })}
            />
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
                  value={titulo1}
                  onChange={(e) => this.setState({ titulo1: e.target.value })}
                />
                <Input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario1horario1}
                  onChange={(e) =>
                    this.setState({ horario1horario1: e.target.value })
                  }
                />
                <Input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario1horario2}
                  onChange={(e) =>
                    this.setState({ horario1horario2: e.target.value })
                  }
                />

                <Input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario1horario3}
                  onChange={(e) =>
                    this.setState({ horario1horario3: e.target.value })
                  }
                />
                <Input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario1horario4}
                  onChange={(e) =>
                    this.setState({ horario1horario4: e.target.value })
                  }
                />
              </div>

              <hr />

              <div>
                <Input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                  value={titulo2}
                  onChange={(e) => this.setState({ titulo2: e.target.value })}
                />
                <Input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario2horario1}
                  onChange={(e) =>
                    this.setState({ horario2horario1: e.target.value })
                  }
                />
                <Input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario2horario2}
                  onChange={(e) =>
                    this.setState({ horario2horario2: e.target.value })
                  }
                />

                <Input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario2horario3}
                  onChange={(e) =>
                    this.setState({ horario2horario3: e.target.value })
                  }
                />
                <Input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario2horario4}
                  onChange={(e) =>
                    this.setState({ horario2horario4: e.target.value })
                  }
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
                  value={titulo3}
                  onChange={(e) => this.setState({ titulo3: e.target.value })}
                />
                <Input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario3horario1}
                  onChange={(e) =>
                    this.setState({ horario3horario1: e.target.value })
                  }
                />
                <Input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario3horario2}
                  onChange={(e) =>
                    this.setState({ horario3horario2: e.target.value })
                  }
                />

                <Input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario3horario3}
                  onChange={(e) =>
                    this.setState({ horario3horario3: e.target.value })
                  }
                />

                <Input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario3horario4}
                  onChange={(e) =>
                    this.setState({ horario3horario4: e.target.value })
                  }
                />
              </div>

              <hr />

              <div>
                <Input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                  value={titulo4}
                  onChange={(e) => this.setState({ titulo4: e.target.value })}
                />
                <Input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario4horario1}
                  onChange={(e) =>
                    this.setState({ horario4horario1: e.target.value })
                  }
                />

                <Input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario4horario2}
                  onChange={(e) =>
                    this.setState({ horario4horario2: e.target.value })
                  }
                />

                <Input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario4horario3}
                  onChange={(e) =>
                    this.setState({ horario4horario3: e.target.value })
                  }
                />

                <Input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                  value={horario4horario4}
                  onChange={(e) =>
                    this.setState({ horario4horario4: e.target.value })
                  }
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

        <ButtonSubmit
          type="submit"
          onClick={() => {
            for (let loop in controlCheckboxInput) {
              console.log(
                `${controlCheckboxInput[loop].section}: ${
                  controlCheckboxInput[loop].value
                }`
              );
            }
          }}
        >
          Cadastrar no Trilhas
        </ButtonSubmit>
      </div>
    );
  }
}
