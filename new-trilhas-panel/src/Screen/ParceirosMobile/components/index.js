import React, { Component } from "react";

import { ButtonSubmit, FormSectionTitle, Title, Endereco } from "./styles";

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

let controlCheckboxInput = [];

export default class ParceirosMobile extends React.Component {
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

      clienteData: false,
      arrayImage: "",
      arrayGaleria: [],
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

    fire
      .database()
      .ref(`/clientes/0/`)
      .on("value", (snapshot) => {
        let tmp = snapshot.val();
        this.setState({
          nome: tmp[0].nome,
          nicho: tmp[0].nicho,
          cor: tmp[0].cor,
          whatsapp: tmp[0].whatsapp,
          telefone: tmp[0].telefone,
          cardapio: tmp[0].cardapio,
          rua: tmp[0].rua,
          numero: tmp[0].numero,
          complemento: tmp[0].complemento,
          bairro: tmp[0].bairro,
          cidade: tmp[0].cidade,
          estado: tmp[0].estado,
          facebook: tmp[0].facebook,
          instagram: tmp[0].instagram,
          youtube: tmp[0].youtube,
          linkedin: tmp[0].linkedin,
          twitter: tmp[0].twitter,
          site: tmp[0].site,
          descricao: tmp[0].descricao,
          titulo1: tmp[0].titulo1,
          titulo2: tmp[0].titulo2,
          titulo3: tmp[0].titulo3,
          titulo4: tmp[0].titulo4,
          horario1horario1: tmp[0].horario1horario1,
          horario1horario2: tmp[0].horario1horario2,
          horario1horario3: tmp[0].horario1horario3,
          horario1horario4: tmp[0].horario1horario4,
          horario2horario1: tmp[0].horario2horario1,
          horario2horario2: tmp[0].horario2horario2,
          horario2horario3: tmp[0].horario2horario3,
          horario2horario4: tmp[0].horario2horario4,
          horario3horario1: tmp[0].horario3horario1,
          horario3horario2: tmp[0].horario3horario2,
          horario3horario3: tmp[0].horario3horario3,
          horario3horario4: tmp[0].horario3horario4,
          horario4horario1: tmp[0].horario4horario1,
          horario4horario2: tmp[0].horario4horario2,
          horario4horario3: tmp[0].horario4horario3,
          horario4horario4: tmp[0].horario4horario4,
        });

        if (tmp == null) {
          this.setState({ totalClientes: 0 });
        } else {
          this.setState({ totalClientes: tmp.length });
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
      nicho,
      cor,
      whatsapp,
      telefone,
      cardapio,
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

    return (
      <div>
        <center>
          {this.state.clienteData ? (
            <FileInput
              nome="logomarca"
              initialPreview={this.state.arrayImage}
            />
          ) : null}
        </center>
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

        {/* Endereço */}

        <Title>
          <FormSectionTitle>Endereço</FormSectionTitle>
        </Title>

        <Input
          nome="rua"
          placeholder="rua"
          value={rua}
          onChange={(e) => this.setState({ rua: e.target.value })}
        />

        <Input
          nome="numero"
          placeholder="número"
          value={numero}
          onChange={(e) => this.setState({ numero: e.target.value })}
        />

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

        <Input
          nome="cidade"
          placeholder="cidade"
          value={cidade}
          onChange={(e) => this.setState({ cidade: e.target.value })}
        />

        <Input
          nome="estado"
          placeholder="estado"
          value={estado}
          onChange={(e) => this.setState({ estado: e.target.value })}
        />

        <hr />

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

        <br />
        <hr />

        {/* Horário de Funcionamento [ 1 ] */}
        <center>
          <Title style={{ marginTop: "1%", marginBottom: "2%" }}>
            <FormSectionTitle>Horário de Funcionamento</FormSectionTitle>
          </Title>
        </center>

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

        <br />

        <hr />

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

        <br />
        <hr />

        <center>
          <div>
            <Title style={{ marginTop: "1%", marginBottom: "4%" }}>
              <FormSectionTitle>Fotos para Galeria</FormSectionTitle>
            </Title>

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

            <br />
            <hr />

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
          </div>
        </center>

        <br />
        <hr />

        <ButtonSubmit
          type="submit"
          onClick={() => {
            let finalPut = [];
            let estados = this.state;

            delete estados["titulos"];
            delete estados["secoes"];

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
          }}
        >
          Cadastrar no Trilhas
        </ButtonSubmit>
      </div>
    );
  }
}
