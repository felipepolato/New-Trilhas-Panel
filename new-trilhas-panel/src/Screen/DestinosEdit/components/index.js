import React, { Component } from "react";

import {
  ButtonSubmit,
  FormSectionTitle,
  RowRow,
  Column,
  RowNumero,
  RowEstado,
  Title,
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

export default class ComponentsAddDestinos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulos: "",

      // #InformaçõesGerais

      nome: "Carregando...",
      tipo: "Carregando...",
      whatsapp: "Carregando...",
      telefone: "Carregando...",
      descricao: "Carregando...",
      // #Gelocalizalição

      latitude: "Carregando...",
      longitude: "Carregando...",
      //#Endereço

      rua: "Carregando...",
      numero: "Carregando...",
      complemento: "Carregando...",
      bairro: "Carregando...",
      cidade: "Carregando...",
      estado: "Carregando...",
      //#RedesSociais

      facebook: "Carregando...",
      instagram: "Carregando...",
      youtube: "Carregando...",
      linkedin: "Carregando...",
      twitter: "Carregando...",
      site: "Carregando...",

      //#HorarioDeFuncionamento
      titulo1: "Carregando...",
      horario1Titulo: "Carregando...",
      horario1horario1: "Carregando...",
      horario1horario2: "Carregando...",
      horario1horario3: "Carregando...",
      horario1horario4: "Carregando...",

      titulo2: "Carregando...",
      horario2Titulo: "Carregando...",
      horario2horario1: "Carregando...",
      horario2horario2: "Carregando...",
      horario2horario3: "Carregando...",
      horario2horario4: "Carregando...",

      titulo3: "Carregando...",
      horario3Titulo: "Carregando...",
      horario3horario1: "Carregando...",
      horario3horario2: "Carregando...",
      horario3horario3: "Carregando...",
      horario3horario4: "Carregando...",

      titulo4: "Carregando...",
      horario4Titulo: "Carregando...",
      horario4horario1: "Carregando...",
      horario4horario2: "Carregando...",
      horario4horario3: "Carregando...",
      horario4horario4: "Carregando...",

      totalDestinos: 0,

      destinosData: false,
      arrayImage: "",
      arrayGaleria: [],
    };
  }

  componentDidMount() {
    console.log(`Destinos ID: ${localStorage.getItem("destinoId")}`);
    
    fire
      .database()
      .ref(`/destinos/${localStorage.getItem("destinoId")}/`)
      .on("value", (snapshot) => {
        let tmp = snapshot.val();
        this.setState({
          nome: tmp.nome,
          tipo: tmp.tipo,
          whatsapp: tmp.whatsapp,
          telefone: tmp.telefone,
          descricao: tmp.descricao,
          latitude: tmp.latitude,
          longitude: tmp.longitude,
          rua: tmp.rua,
          numero: tmp.numero,
          complemento: tmp.complemento,
          bairro: tmp.bairro,
          cidade: tmp.cidade,
          estado: tmp.estado,
          facebook: tmp.facebook,
          instagram: tmp.instagram,
          youtube: tmp.youtube,
          linkedin: tmp.linkedin,
          twitter: tmp.twitter,
          site: tmp.site,
          titulo1: tmp.titulo1,
          horario1Titulo: "",
          horario1horario1: tmp.horario1horario1,
          horario1horario2: tmp.horario1horario2,
          horario1horario3: tmp.horario1horario3,
          horario1horario4: tmp.horario1horario4,

          titulo2: tmp.titulo2,
          horario2Titulo: "",
          horario2horario1: tmp.horario2horario2,
          horario2horario2: tmp.horario2horario2,
          horario2horario3: tmp.horario2horario3,
          horario2horario4: tmp.horario2horario4,

          titulo3: tmp.titulo3,
          horario3Titulo: "",
          horario3horario1: tmp.horario3horario1,
          horario3horario2: tmp.horario3horario2,
          horario3horario3: tmp.horario3horario3,
          horario3horario4: tmp.horario3horario4,

          titulo4: tmp.titulo4,
          horario4Titulo: "",
          horario4horario1: tmp.horario4horario1,
          horario4horario2: tmp.horario4horario2,
          horario4horario3: tmp.horario4horario3,
          horario4horario4: tmp.horario4horario4,
        });
      });

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
        this.setState({ titulos: titulos, secoes: secoes });
      });
    fire
      .database()
      .ref("/destinos/")
      .on("value", (snapshot) => {
        let tmp = snapshot.val();
        if (tmp == null) {
          this.setState({ totalDestinos: 0 });
        } else {
          this.setState({ totalDestinos: tmp.length });
        }
      });

    setTimeout(() => {
      this.setState({
        arrayImage: `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${this.state.nome}%2Flogomarca.png?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`,
        arrayGaleria: [
          `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${this.state.nome}%2F${this.state.nome}_1?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`,
          `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${this.state.nome}%2F${this.state.nome}_2?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`,
          `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${this.state.nome}%2F${this.state.nome}_3?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`,
          `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${this.state.nome}%2F${this.state.nome}_4?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`,
          `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${this.state.nome}%2F${this.state.nome}_5?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`,
          `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${this.state.nome}%2F${this.state.nome}_6?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`,
          `https://firebasestorage.googleapis.com/v0/b/trilhas-f0c85.appspot.com/o/galeria%2F${this.state.nome}%2F${this.state.nome}_7?alt=media&token=14c5e841-2d28-4b32-a1ec-3be8b56972dc`,
        ],
        clienteData: true,
      });

      setTimeout(() => {
        let tmpGaleria = this.state.arrayGaleria;
        for (let loop in tmpGaleria) {
          fetch(tmpGaleria[loop])
            .then((response) => {})
            .then((response) => {
              if (response == undefined) {
                console.log("fetch deu negativo");
                tmpGaleria[loop] =
                  "https://senhor.app/testes/trilhas/src/main/no-image.png";
                this.setState({ arrayGaleria: tmpGaleria });
              }
            });
        }
      }, 200);
    }, 1000);
  }

  render() {
    const {
      nome,
      tipo,
      whatsapp,
      telefone,
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
      clienteData,
    } = this.state;

    return (
      <div>
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
              placeholder="Nome do Destino"
              value={nome}
              onChange={(e) => this.setState({ nome: e.target.value })}
            />
            <Input
              nome="tipo"
              placeholder="Tipo"
              value={tipo}
              onChange={(e) => this.setState({ tipo: e.target.value })}
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
            <center>
              {this.state.clienteData ? (
                <FileInput
                  nome="logomarca"
                  initialPreview={this.state.arrayImage}
                />
              ) : null}
            </center>
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
        <div>
          <RowRow>
            <Column>
              <GalleryInput
                nome="foto1"
                labeltext="Selecionar Foto 01"
                initialPreview={this.state.arrayGaleria[0]}
                indexnumber={1}
              />

              <br />
              <hr />

              <GalleryInput
                nome="foto3"
                labeltext="Selecionar Foto 03"
                initialPreview={this.state.arrayGaleria[2]}
                indexnumber={3}
              />

              <br />
              <hr />

              <GalleryInput
                nome="foto5"
                labeltext="Selecionar Foto 05"
                initialPreview={this.state.arrayGaleria[4]}
                indexnumber={5}
              />

              <br />
              <hr />

              <GalleryInput
                nome="foto7"
                labeltext="Selecionar Foto 07"
                initialPreview={this.state.arrayGaleria[6]}
                indexnumber={7}
              />
            </Column>

            <br />
            <hr />

            <Column>
              <GalleryInput
                nome="foto2"
                labeltext="Selecionar Foto 02"
                initialPreview={this.state.arrayGaleria[1]}
                indexnumber={2}
              />

              <br />
              <hr />

              <GalleryInput
                nome="foto4"
                labeltext="Selecionar Foto 04"
                initialPreview={this.state.arrayGaleria[3]}
                indexnumber={4}
              />

              <br />
              <hr />
              <GalleryInput
                nome="foto6"
                labeltext="Selecionar Foto 06"
                initialPreview={this.state.arrayGaleria[5]}
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
            let estados = this.state;

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

            if (file != undefined) {
              fire
                .storage()
                .ref()
                .child(`galeria/${this.state.nome}/logomarca.png`)
                .put(file)
                .then(() => console.log(`Logomarca: Upload concluído.`));
            }

            console.log(this.state.totalDestinos);
            fire
              .database()
              .ref(`/destinos/${this.state.totalDestinos}`)
              .set(estados)
              .then(() => console.log("Destinos: Dados registrados."));
          }}
        >
          Cadastrar no Trilhas
        </ButtonSubmit>
      </div>
    );
  }
}
