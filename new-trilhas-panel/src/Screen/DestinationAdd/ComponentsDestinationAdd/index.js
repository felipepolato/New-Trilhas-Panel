import React, { Component } from "react";
import { ButtonSubmit, Logomarca, RowRow } from "./styles";

///////////////////////////
// FireBase ///////////////
///////////////////////////

import firebase from "firebase";
import { fire } from "../../../GlobalComponents/config";

///////////////////////////
// Formulário /////////////
///////////////////////////

import Input from "../../../GlobalComponents/Form/Input";
import { FileInput, file } from "../../../GlobalComponents/Form/FileInput";
import TextAreaInput from "../../../GlobalComponents/Form/TextAreaInput";
import CheckboxInput from "../../../GlobalComponents/Form/CheckBoxInput";
import FormSectionTitle from "../../../GlobalComponents/Form/FormSectionTitle";
import {
  GalleryInput,
  fileGallery,
} from "../../../GlobalComponents/Form/GalleryInput";

export default class ComponentsAddDestinos extends Component {
  constructor() {
    super();
    console.log("haha");

    this.state = {
      speed: 10,
      app: fire,
    };

    this.database = this.state.app.database().ref().child("speed");
  }

  componentDidMount() {
    this.database.on("value", (snap) => {
      this.setState({
        speed: snap.val(),
      });
    });

    if (
      localStorage.getItem("trilhas-user-access") !== "gerente" &&
      localStorage.getItem("trilhas-user-access") !== "administrador"
    ) {
      window.location.href = "/";
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(data) => {
            let myData = data;

            for (let i = 1; i < 8; i++) {
              if (fileGallery[i] == undefined) {
                if (i == 1) {
                  myData.foto1 = "";
                }
                if (i == 2) {
                  myData.foto2 = "";
                }
                if (i == 3) {
                  myData.foto3 = "";
                }
                if (i == 4) {
                  myData.foto4 = "";
                }
                if (i == 5) {
                  myData.foto5 = "";
                }
                if (i == 6) {
                  myData.foto6 = "";
                }
                if (i == 7) {
                  myData.foto7 = "";
                }
              } else {
                if (i == 1) {
                  myData.foto1 = fileGallery[i].name;
                }
                if (i == 2) {
                  myData.foto2 = fileGallery[i].name;
                }
                if (i == 3) {
                  myData.foto3 = fileGallery[i].name;
                }
                if (i == 4) {
                  myData.foto4 = fileGallery[i].name;
                }
                if (i == 5) {
                  myData.foto5 = fileGallery[i].name;
                }
                if (i == 6) {
                  myData.foto6 = fileGallery[i].name;
                }
                if (i == 7) {
                  myData.foto7 = fileGallery[i].name;
                }
              }
            }

            myData.logomarca = file.name;

            console.log(myData);

            this.state.app
              .database()
              .ref(`destinos/${data.nome}`)
              .set(myData)
              .then(() => console.log("Data set."));

            let storageRef = this.state.app.storage().ref();
            let mountainsRef = storageRef.child(`${data.nome}`);
            let mountainImagesRef = storageRef.child(`destinos/${data.nome}`);

            mountainImagesRef.put(file).then(function (snapshot) {
              console.log("Uploaded a blob or file!");
            });

            for (let i = 1; i < 8; i++) {
              if (fileGallery[i] != undefined) {
                storageRef = this.state.app.storage().ref();
                mountainsRef = storageRef.child(`${fileGallery[i].name}`);
                mountainImagesRef = storageRef.child(
                  `destinos/${data.nome}/${fileGallery[i].name}`
                );

                mountainImagesRef.put(fileGallery[i]).then(function (snapshot) {
                  console.log(`Uploaded gallery ${i}`);
                });
              }
            }
          }}
        >
          <center>
            <Logomarca className="container-50">
              <FileInput nome="logomarca" />
            </Logomarca>
          </center>
          <div className="row">
            <div className="col-6 align-center">
              {/* Informações Gerais */}

              <FormSectionTitle title="Informações Gerais" />

              <Input nome="nome" placeholder="Nome do Destino" />

              <Input nome="tipo" placeholder="Tipo do Destino" />

              <TextAreaInput
                nome="desricao"
                placeholder="Descrição do destino"
              />

              {/* Informações Adicionais */}

              <FormSectionTitle title="Informações Adicionais" />

              <div path="informacoesadicionais">
                <RowRow>
                  <div className="col-6-row">
                    <Input nome="tituloinfo1" placeholder="Título" />
                  </div>
                  <div className="col-6-row-left">
                    <Input nome="textoinfo1" placeholder="Informação" />
                  </div>
                </RowRow>
                <RowRow>
                  <div className="col-6-row">
                    <Input nome="tituloinfo2" placeholder="Título" />
                  </div>
                  <div className="col-6-row-left">
                    <Input nome="textoinfo2" placeholder="Informação" />
                  </div>
                </RowRow>
                <RowRow>
                  <div className="col-6-row">
                    <Input nome="tituloinfo3" placeholder="Título" />
                  </div>
                  <div className="col-6-row-left">
                    <Input nome="textoinfo3" placeholder="Informação" />
                  </div>
                </RowRow>
              </div>
            </div>
            <hr />
            <div className="col-6-left align-center">
              {/* Informações de Rota */}

              <FormSectionTitle title="Informações de Rota" />

              <CheckboxInput
                nome="possuirota"
                labelName="Há como ir por terra."
              />

              <RowRow>
                <div className="col-6-row">
                  <Input nome="latitude" placeholder="latitude" />
                </div>
                <div className="col-6-row-left">
                  <Input nome="longitude" placeholder="longitude" />
                </div>
              </RowRow>

              {/* Mídias Sociais */}

              <FormSectionTitle title="Mídias Sociais" />

              <div path="midiassociais">
                <Input nome="whatsapp" placeholder="Whatsapp" />
                <Input nome="instagram" placeholder="Instagram" />
                <Input nome="wikipedia" placeholder="Wikipedia" />
                <Input nome="facebook" placeholder="Facebook" />
                <Input nome="site" placeholder="Site" />
              </div>
            </div>
          </div>

          <br />

          <hr />
          <div className="row">
            <div className="col-6 align-center">
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
            </div>
            <hr />
            <div className="col-6-left align-center">
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
            </div>
          </div>

          <ButtonSubmit type="submit">Cadastrar Destino</ButtonSubmit>
        </form>
        ;
      </div>
    );
  }
}
