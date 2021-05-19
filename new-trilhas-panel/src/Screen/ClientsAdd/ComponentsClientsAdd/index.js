import React, { Component } from "react";

import {
  ButtonSubmit,
  FormSectionTitle,
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
import {
  GalleryInput,
  fileGallery,
} from "../../../GlobalComponents/Form/GalleryInput";
import { FileInput, file } from "../../../GlobalComponents/Form/FileInput";

import LoadingImage from '../../../Images/loading.gif';

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

      totalClientes: 0,
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
            title: tmp[loop].info["button-title"],
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
    fire
      .database()
      .ref("/clientes/")
      .on("value", (snapshot) => {
        let tmp = snapshot.val();
        if(tmp == null) {
          this.setState({totalClientes: 0});
        } else {
          this.setState({totalClientes: tmp.length});
        }
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
                <TextCheckbox
                  for={`${titulos[loop].title}_${secoes[i].title}`}
                  style={{ width: "90%" }}
                >
                  {secoes[i].title}
                </TextCheckbox>
                <Input
                  type="checkbox"
                  id={`${titulos[loop].title}_${secoes[i].title}`}
                  onChange={() =>
                    document.getElementById(
                      `${titulos[loop].title}_${secoes[i].title}`
                    ).checked
                      ? (controlCheckboxInput[
                          `${titulos[loop].title}_${secoes[i].title}`
                        ] = "ok")
                      : (controlCheckboxInput[
                          `${titulos[loop].title}_${secoes[i].title}`
                        ] = "")
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
            sideB.push(
              <DivCheckbox>
                <TextCheckbox
                  for={`${titulos[loop].title}_${secoes[i].title}`}
                  style={{ width: "90%" }}
                >
                  {secoes[i].title}
                </TextCheckbox>
                <Input
                  type="checkbox"
                  id={`${titulos[loop].title}_${secoes[i].title}`}
                  onChange={() =>
                    document.getElementById(
                      `${titulos[loop].title}_${secoes[i].title}`
                    ).checked
                      ? (controlCheckboxInput[
                          `${titulos[loop].title}_${secoes[i].title}`
                        ] = "ok")
                      : (controlCheckboxInput[
                          `${titulos[loop].title}_${secoes[i].title}`
                        ] = "")
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
        <div style={{
          position: 'fixed',
          left: 0,
          top: 0,
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white'
        }} id="loadingDiv">
          <img src={LoadingImage} style={{ width: '40vw' }} />
        </div>
        <RowRow>
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
              <FileInput nome="logomarca" />
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
            <FormSectionTitle>Horário de Funcionamento</FormSectionTitle>
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
            <Column>
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

              <br />
              <hr />

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
            </Column>

            <br />
            <hr />

            <Column>
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

              <br />
              <hr />
              <GalleryInput
                nome="foto6"
                labeltext="Selecionar Foto 06"
                indexnumber={6}
              />
            </Column>
          </RowRow>
        </div>

        <br />
        <hr />

        <ButtonSubmit
          type="submit"
          onClick={() => {
            let finalPut = [];
            let estados = this.state;

            finalPut.push(estados);
            finalPut.push(controlCheckboxInput);

            let galeria = [];

            for (let i = 1; i < 8; i++) {
              if (fileGallery[i] == undefined) {
                galeria[i] = "";
              } else {
                galeria[i] = `${this.state.nome}_${i}`;
              }

              fire
                .storage()
                .ref()
                .child(`galeria/${this.state.nome}/${galeria[i]}`)
                .put(fileGallery[i])
                .then(() => console.log(`Galeria ${i}: Upload concluído.`));
            }

            fire
              .database()
              .ref(`/galerias/${this.state.nome}/`)
              .set(galeria)
              .then(() => console.log("Galeria: Criado com sucesso!"));

            fire
              .storage()
              .ref()
              .child(`galeria/${this.state.nome}/logomarca.png`)
              .put(file)
              .then(() => console.log(`Logomarca: Upload concluído.`));

            console.log(this.state.totalClientes);

            fire
              .database()
              .ref(`/clientes/${this.state.totalClientes}`)
              .set(finalPut)
              .then(() => console.log("Clientes: Dados registrados."));

            setTimeout(() => {
              window.location.href = '/clients';
              alert('Loja editada com sucesso!');
            }, 30000);
            document.getElementById('loadingDiv').style.display = 'flex';
          }}
        >
          Cadastrar no Trilhas
        </ButtonSubmit>
      </div>
    );
  }
}
