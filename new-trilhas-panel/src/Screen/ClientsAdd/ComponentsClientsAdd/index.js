import React, { Component } from "react";

import { DivAbsoluta, ButtonSubmit, FormSectionTitle } from "../styles";

///////////////////////////
// FireBase ///////////////
///////////////////////////

//import { fire } from "../../../GlobalComponents/config";

///////////////////////////
// Formulário /////////////
///////////////////////////

import TextAreaInput from "../../../GlobalComponents/Form/TextAreaInput";
//import Input from "../../../GlobalComponents/Form/Forms";
//import { GalleryInput } from "../../../GlobalComponents/Form/GalleryInput";
//import { InputFile } from "../../../GlobalComponents/NavBar/styles";

export default class ComponentsClientsAdd extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {
      // #InformaçõesGerais

      nome: "",
      nicho: "",
      cor: "",
      whatsapp: "",
      telefone: "",
      // #Gelocalizaliçaõ

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
  }*/

  render() {
    /*const { nome, idade, sobrenome } = this.state;
    const ChangeValue = (state, value) =>
      this.setState(`${state}: ${value.target.value}`);*/
    return (
      <div>
        <center>
          <div>
            <input nome="logomarca" />
          </div>
        </center>
        <div>
          <div>
            {/* Informações Gerais */}

            <FormSectionTitle title="Informações Gerais" />

            <input
              name="nome"
              type="text"
              maxlength="16"
              placeholder="Nome do Empreendimento"
            />

            <input nome="nicho" placeholder="Nicho Comercial" />

            <input nome="cor" placeholder="Cor de fundo" />

            <input nome="whatsapp" placeholder="Whatsapp Comercial" />

            <input nome="telefone" placeholder="Telefone Comercial" />

            {/* Geolocalização */}

            <inputectionTitle title="Geolocalização" />

            <div>
              <input nome="latitude" placeholder="latitude" />
            </div>

            <div>
              <input nome="longitude" placeholder="longitude" />
            </div>

            {/* Endereço */}

            <inputectionTitle title="Endereço" />

            <div path="endereco">
              <div>
                <input nome="rua" placeholder="rua" />
              </div>

              <input nome="numero" placeholder="número" />

              <input nome="complemento" placeholder="complemento" />

              <input nome="bairro" placeholder="bairro" />

              <div>
                <input nome="cidade" placeholder="cidade" />
              </div>

              <input nome="estado" placeholder="estado" />
            </div>
          </div>

          <hr />

          <div>
            {/* Redes Sociais */}

            <inputectionTitle title="Redes Sociais" />

            <div path="redessociais">
              <input nome="facebook" placeholder="facebook" />

              <input nome="instagram" placeholder="instagram" />

              <input nome="youtube" placeholder="youtube" />

              <input nome="linkedin" placeholder="linkedin" />

              <input nome="twitter" placeholder="twitter" />

              <input nome="site" placeholder="site" />
            </div>

            {/* Descrição */}

            <inputectionTitle title="Descrição" />

            <TextAreaInput nome="descricao" placeholder="descrição" />
          </div>
        </div>
        <br />
        <hr />
        <center>
          {/* Horário de Funcionamento [ 1 ] */}

          <inputectionTitle title="Horário de Funcionamento" />

          <div>
            <div>
              <div>
                <input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                />

                <input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
              </div>
            </div>

            <hr />

            <div>
              <div>
                <input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                />

                <input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
              </div>
            </div>
          </div>

          <br />

          <hr />

          <div>
            <div>
              <div>
                <input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                />

                <input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
                <input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
              </div>
            </div>

            <hr />

            <div>
              <div>
                <input
                  nome="titulo"
                  placeholder="Título (Ex: Segunda à Sexta)"
                />

                <input
                  nome="horario[0].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <input
                  nome="horario[1].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <input
                  nome="horario[2].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />

                <input
                  nome="horario[3].horas"
                  placeholder="Horário (Ex: 07:00 às 18:00)"
                />
              </div>
            </div>

            <input name="cardapio" placeholder="Cardápio" />
          </div>
        </center>
        <br />
        <hr />
        <br />
        <hr />
        <ButtonSubmit type="submit">Cadastrar no Trilhas</ButtonSubmit>
      </div>
    );
  }
}

/*{this.state.isLoading ? (
          <DivAbsoluta>
            <ImageLoading src="https://thumbs.gfycat.com/HollowNaughtyAfricanhornbill-small.gif" />
          </DivAbsoluta>
        ) : null}
        
          <div>
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

              <br />

              <hr />

              <GalleryInput
                nome="foto7"
                labeltext="Selecionar Foto 07"
                indexnumber={7}
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
        */
