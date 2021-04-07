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
} from "./styles";

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
        <RowRow>
          <center>
            <Logomarca>
              <InputFile nome="logomarca" />
            </Logomarca>
          </center>

          <Column>
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
            <RowRow>
              <Column>
                <Input nome="latitude" placeholder="latitude" />
              </Column>
              <Column>
                <Input nome="longitude" placeholder="longitude" />
              </Column>
            </RowRow>

            {/* Endereço */}
            <FormSectionTitle title="Endereço" />

            <RowRow>
              <Input nome="rua" placeholder="rua" />
              <RowNumero>
                <Input nome="numero" placeholder="número" />
              </RowNumero>
            </RowRow>
            <Input nome="complemento" placeholder="complemento" />

            <Input nome="bairro" placeholder="bairro" />
            <RowRow>
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
              <FormSectionTitle title="Redes Sociais" />

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
          </Column>
        </RowRow>
        <br />
        <hr />
        {/* Horário de Funcionamento [ 1 ] */}

        <RowRow>
          <FormSectionTitle title="Horário de Funcionamento" />
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
        <div>
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

/*{this.state.isLoading ? (
          <DivAbsoluta>
            <ImageLoading src="https://thumbs.gfycat.com/HollowNaughtyAfricanhornbill-small.gif" />
          </DivAbsoluta>
        ) : null}
        
         
        */
