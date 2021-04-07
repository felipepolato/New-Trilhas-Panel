import React, { Component } from "react";

import { DivAbsoluta, ButtonSubmit, FormSectionTitle, Logomarca } from "../styles";

///////////////////////////
// FireBase ///////////////
///////////////////////////

//import { fire } from "../../../GlobalComponents/config";

///////////////////////////
// Formulário /////////////
///////////////////////////

import TextAreaInput from "../../../GlobalComponents/Form/TextAreaInput";
import Input from "../../../GlobalComponents/Form/Forms";
import { GalleryInput } from "../../../GlobalComponents/Form/GalleryInput";
import { InputFile } from "../../../GlobalComponents/NavBar/styles";

export default class ComponentsAddDestinos extends React.Component {
  render() {
    return (
      <div>
        <center>
          <Logomarca>
            <InputFile nome="logomarca"  />
          </Logomarca>
        </center>
        <div>
          <div>
            {/* Informações Gerais */}

            <FormSectionTitle title="Informações Gerais" />

            <Input
              name="nome"
              type="text"
              maxlength="16"
              placeholder="Nome do Destino"
            />

            <Input nome="tipo" placeholder="Tipo" />

            <Input nome="whatsapp" placeholder="Whatsapp Comercial" />

            <Input nome="telefone" placeholder="Telefone Comercial" />

            {/* Geolocalização */}

            <FormSectionTitle title="Geolocalização" />

            <div>
              <Input nome="latitude" placeholder="latitude" />
            </div>

            <div>
              <Input nome="longitude" placeholder="longitude" />
            </div>

            {/* Endereço */}

            <FormSectionTitle title="Endereço" />

            <div>
              <div>
                <Input nome="rua" placeholder="rua" />
              </div>

              <Input nome="numero" placeholder="número" />

              <Input nome="complemento" placeholder="complemento" />

              <Input nome="bairro" placeholder="bairro" />

              <div>
                <Input nome="cidade" placeholder="cidade" />
              </div>

              <Input nome="estado" placeholder="estado" />
            </div>
          </div>

          <hr />

          <div>
            {/* Redes Sociais */}

            <inputectionTitle title="Redes Sociais" />

            <div>
              <Input nome="facebook" placeholder="facebook" />

              <Input nome="instagram" placeholder="instagram" />

              <Input nome="youtube" placeholder="youtube" />

              <Input nome="linkedin" placeholder="linkedin" />

              <Input nome="twitter" placeholder="twitter" />

              <Input nome="site" placeholder="site" />
            </div>

            {/* Descrição */}

            <FormSectionTitle title="Descrição" />

            <TextAreaInput nome="descricao" placeholder="descrição" />
          </div>
        </div>
        <br />
        <hr />
        <center>
          {/* Horário de Funcionamento [ 1 ] */}

          <FormSectionTitle title="Horário de Funcionamento" />

          <div>
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
            </div>

            <hr />

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
            </div>
          </div>

          <br />

          <hr />

          <div>
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
            </div>

            <hr />

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
            </div>
          </div>

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
        
         
        */
