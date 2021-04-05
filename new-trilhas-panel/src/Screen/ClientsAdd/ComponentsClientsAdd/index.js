import React, { Component } from "react";

import {
  DivAbsoluta,
  ImageLoading,
  ButtonSubmit,
  Logomarca,
  RowRow,
  RowNumero,
  RowEstado,
} from "../styles";

///////////////////////////
// FireBase ///////////////
///////////////////////////

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

/////////////Componentes Clientes/////////

import ServicosGeraisDB from "./ComponentsServicosClientes/ServicosGeraisDB";
import DelAlimentosBebidasDB from "./ComponentsServicosClientes/DelAlimentosEBebidadeDB";
import DelModasAcessorios from "./ComponentsServicosClientes/DelModasAcessoriosDB";
import DelPetsAgro from "./ComponentsServicosClientes/DelPetAgro";
import DelSaudeBeleza from "./ComponentsServicosClientes/DelSaudeEBelezaDB";
import Turismo from "./ComponentsServicosClientes/TurismoDB";
import Nautica from "./ComponentsServicosClientes/NauticaDB";
import Religiao from "./ComponentsServicosClientes/ReligiaoDB";
import EducacaoDB from "./ComponentsServicosClientes/EducaçãoDB";
import ModaAcessorioDB from "./ComponentsServicosClientes/ModaAcessorioDB";
import ImoveisDB from "./ComponentsServicosClientes/ImoveisDB";
import CasaMoveisDecoracaoDB from "./ComponentsServicosClientes/CasaMoveisDecoracaoDB";
import HotelariaDB from "./ComponentsServicosClientes/HotelariaDB";
import EletronicoInformaticaDB from "./ComponentsServicosClientes/EletronicoInformaticaDB";
import ProfissionaisLiberaisDB from "./ComponentsServicosClientes/ProfissionaisLiberaisDB";
import ConstrucaoIndustrialECivilDB from "./ComponentsServicosClientes/ContrucaoIndustrialECivil";
import UtilidadePublicaDB from "./ComponentsServicosClientes/UtilidadesPublicasDB";
import AlimentosBebidasDB from "./ComponentsServicosClientes/AlimentosBebidasDB";
import ArtePapelariaArmarinhoDB from "./ComponentsServicosClientes/ArtePapelariaArmarinhoDB";
import BalezaCuidadoPessoalDB from "./ComponentsServicosClientes/BelezaCuidadoPessoal";
import SaudeDB from "./ComponentsServicosClientes/SaudeDB";
import VeiculosDB from "./ComponentsServicosClientes/VaiculosDB";
import PetsAgro from "./ComponentsServicosClientes/PetAgroDB";

export default class ComponentsClientsAdd extends React.Component {
  // constructor() {
  //   super();
  //   console.log("haha");

  //   this.state = {
  //     speed: 10,
  //     app: fire,
  //     isLoading: false,
  //   };

  //   this.database = this.state.app.database().ref().child("speed");
  // }

  // componentDidMount() {
    // this.database.on("value", (snap) => {
    //   this.setState({
    //     speed: snap.val(),
    //   });
    // });

    // if (
    //   localStorage.getItem("trilhas-user-access") !== "gerente" &&
    //   localStorage.getItem("trilhas-user-access") !== "administrador"
    // ) {
    //   window.location.href = "/";
    // }
  // }

  render() {
    return (
      <div>
        <form
          // onSubmit={(data) => {
          //   this.setState({ isLoading: true });
          //   setTimeout(() => {
          //     this.setState({ isLoading: false });
          //     window.location.href = "/clientes";
          //   }, 4000);

          //   let myGallery = [];

          //   let NomeFoto1 = "";
          //   let NomeFoto2 = "";
          //   let NomeFoto3 = "";
          //   let NomeFoto4 = "";
          //   let NomeFoto5 = "";
          //   let NomeFoto6 = "";
          //   let NomeFoto7 = "";

          //   for (let i = 1; i < 8; i++) {
          //     if (fileGallery[i] == undefined) {
          //       if (i == 1) {
          //         myGallery.foto1 = "";
          //       }
          //       if (i == 2) {
          //         myGallery.foto2 = "";
          //       }
          //       if (i == 3) {
          //         myGallery.foto3 = "";
          //       }
          //       if (i == 4) {
          //         myGallery.foto4 = "";
          //       }
          //       if (i == 5) {
          //         myGallery.foto5 = "";
          //       }
          //       if (i == 6) {
          //         myGallery.foto6 = "";
          //       }
          //       if (i == 7) {
          //         myGallery.foto7 = "";
          //       }
          //     } else {
          //       if (i == 1) {
          //         var n = Math.floor(Math.random() * 11);
          //         var k = Math.floor(Math.random() * 1000000);
          //         NomeFoto1 = Math.random().toString(36).substring(7);
          //         myGallery.foto1 = NomeFoto1;
          //       }
          //       if (i == 2) {
          //         var n = Math.floor(Math.random() * 11);
          //         var k = Math.floor(Math.random() * 1000000);
          //         NomeFoto2 = Math.random().toString(36).substring(7);
          //         myGallery.foto2 = NomeFoto2;
          //       }
          //       if (i == 3) {
          //         var n = Math.floor(Math.random() * 11);
          //         var k = Math.floor(Math.random() * 1000000);
          //         NomeFoto3 = Math.random().toString(36).substring(7);
          //         myGallery.foto3 = NomeFoto3;
          //       }
          //       if (i == 4) {
          //         var n = Math.floor(Math.random() * 11);
          //         var k = Math.floor(Math.random() * 1000000);
          //         NomeFoto4 = Math.random().toString(36).substring(7);
          //         myGallery.foto4 = NomeFoto4;
          //       }
          //       if (i == 5) {
          //         var n = Math.floor(Math.random() * 11);
          //         var k = Math.floor(Math.random() * 1000000);
          //         NomeFoto5 = Math.random().toString(36).substring(7);
          //         myGallery.foto5 = NomeFoto5;
          //       }
          //       if (i == 6) {
          //         var n = Math.floor(Math.random() * 11);
          //         var k = Math.floor(Math.random() * 1000000);
          //         NomeFoto6 = Math.random().toString(36).substring(7);
          //         myGallery.foto6 = NomeFoto6;
          //       }
          //       if (i == 7) {
          //         var n = Math.floor(Math.random() * 11);
          //         var k = Math.floor(Math.random() * 1000000);
          //         NomeFoto7 = Math.random().toString(36).substring(7);
          //         myGallery.foto7 = NomeFoto7;
          //       }
          //     }
          //   }

          //   let myData = data;
          //   myData.logomarca = file.name;

          //   this.state.app
          //     .database()
          //     .ref(`/lojas/galerias/${data.nome}`)
          //     .set(myGallery)
          //     .then(() => console.log("Gallery set."));

          //   // Serviços Gerais:

          //   ServicosGeraisDB(myData, this.state.app);

          //   // Delivery Alimentos e Bebidas:

          //   DelAlimentosBebidasDB(myData, this.state.app);

          //   // Delivery Moda e Acessórios:

          //   DelModasAcessorios(myData, this.state.app);

          //   // Delivery Pets e Agro:

          //   DelPetsAgro(myData, this.state.app);

          //   // Delivery Saúde e Beleza:

          //   DelSaudeBeleza(myData, this.state.app);

          //   // Turismo:

          //   Turismo(myData, this.state.app);

          //   // Náutica:

          //   Nautica(myData, this.state.app);

          //   // Religião:

          //   Religiao(myData, this.state.app);

          //   // Educação:

          //   EducacaoDB(myData, this.state.app);

          //   // Moda e Acessórios:

          //   ModaAcessorioDB(myData, this.state.app);

          //   // Imóveis:

          //   ImoveisDB(myData, this.state.app);

          //   // Casa, Móveis e Decoração:

          //   CasaMoveisDecoracaoDB(myData, this.state.app);

          //   // Hotelaria:

          //   HotelariaDB(myData, this.state.app);

          //   // Eletrônicos e Informática:

          //   EletronicoInformaticaDB(myData, this.state.app);

          //   // Profissionais Liberais:

          //   ProfissionaisLiberaisDB(myData, this.state.app);

          //   // Construção Industrial e Civil:

          //   ConstrucaoIndustrialECivilDB(myData, this.state.app);

          //   // Utilidade Pública:

          //   UtilidadePublicaDB(myData, this.state.app);

          //   // Alimentos e Bebidas:

          //   AlimentosBebidasDB(myData, this.state.app);

          //   // Arte, Papelaria e Armarinho:

          //   ArtePapelariaArmarinhoDB(myData, this.state.app);

          //   // Beleza e Cuidado Pessoal:

          //   BalezaCuidadoPessoalDB(myData, this.state.app);

          //   // Saúde:

          //   SaudeDB(myData, this.state.app);

          //   // Veículos:

          //   VeiculosDB(myData, this.state.app);

          //   // Pets e Agro:

          //   PetsAgro(myData, this.state.app);

          //   //Glaeria//

          //   let storageRef = this.state.app.storage().ref();
          //   let mountainsRef = storageRef.child(`${data.nome}`);
          //   let mountainImagesRef = storageRef.child(`images/${data.nome}`);
          //   mountainImagesRef.put(file).then(function (snapshot) {
          //     console.log("Uploaded a blob or file!");
          //   });

          //   if (NomeFoto1 !== "") {
          //     storageRef = this.state.app.storage().ref();
          //     mountainsRef = storageRef.child(`${NomeFoto1}`);
          //     mountainImagesRef = storageRef.child(`images/${NomeFoto1}`);
          //     mountainImagesRef.put(fileGallery[1]).then(function (snapshot) {
          //       console.log("Uploaded a Gallery File 1");
          //     });
          //   }

          //   if (NomeFoto2 !== "") {
          //     storageRef = this.state.app.storage().ref();
          //     mountainsRef = storageRef.child(`${NomeFoto2}`);
          //     mountainImagesRef = storageRef.child(`images/${NomeFoto2}`);
          //     mountainImagesRef.put(fileGallery[2]).then(function (snapshot) {
          //       console.log("Uploaded a Gallery File 2");
          //     });
          //   }

          //   if (NomeFoto3 !== "") {
          //     storageRef = this.state.app.storage().ref();
          //     mountainsRef = storageRef.child(`${NomeFoto3}`);
          //     mountainImagesRef = storageRef.child(`images/${NomeFoto3}`);
          //     mountainImagesRef.put(fileGallery[3]).then(function (snapshot) {
          //       console.log("Uploaded a Gallery File 3");
          //     });
          //   }

          //   if (NomeFoto4 !== "") {
          //     storageRef = this.state.app.storage().ref();
          //     mountainsRef = storageRef.child(`${NomeFoto4}`);
          //     mountainImagesRef = storageRef.child(`images/${NomeFoto4}`);
          //     mountainImagesRef.put(fileGallery[4]).then(function (snapshot) {
          //       console.log("Uploaded a Gallery File 4");
          //     });
          //   }

          //   if (NomeFoto5 !== "") {
          //     storageRef = this.state.app.storage().ref();
          //     mountainsRef = storageRef.child(`${NomeFoto5}`);
          //     mountainImagesRef = storageRef.child(`images/${NomeFoto5}`);
          //     mountainImagesRef.put(fileGallery[5]).then(function (snapshot) {
          //       console.log("Uploaded a Gallery File 5");
          //     });
          //   }

          //   if (NomeFoto6 !== "") {
          //     storageRef = this.state.app.storage().ref();
          //     mountainsRef = storageRef.child(`${NomeFoto6}`);
          //     mountainImagesRef = storageRef.child(`images/${NomeFoto6}`);
          //     mountainImagesRef.put(fileGallery[6]).then(function (snapshot) {
          //       console.log("Uploaded a Gallery File 6");
          //     });
          //   }

          //   if (NomeFoto7 !== "") {
          //     storageRef = this.state.app.storage().ref();
          //     mountainsRef = storageRef.child(`${NomeFoto7}`);
          //     mountainImagesRef = storageRef.child(`images/${NomeFoto7}`);
          //     mountainImagesRef.put(fileGallery[7]).then(function (snapshot) {
          //       console.log("Uploaded a Gallery File 7");
          //     });
          //   }
          // }}

          // Inputs //
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

              <Input
                nome="nome"
                maxlength="16"
                placeholder="Nome do Empreendimento"
              />

              <Input nome="nicho" placeholder="Nicho Comercial" />

              <Input nome="cor" placeholder="Cor de fundo" />

              <Input nome="whatsapp" placeholder="Whatsapp Comercial" />

              <Input nome="telefone" placeholder="Telefone Comercial" />

              {/* Geolocalização */}

              <FormSectionTitle title="Geolocalização" />

              <RowRow>
                <div className="col-6-row">
                  <Input nome="latitude" placeholder="latitude" />
                </div>
                <div className="col-6-row-left">
                  <Input nome="longitude" placeholder="longitude" />
                </div>
              </RowRow>

              {/* Endereço */}

              <FormSectionTitle title="Endereço" />

              <div path="endereco">
                <RowRow>
                  <div className="col-8-row">
                    <Input nome="rua" placeholder="rua" />
                  </div>
                  <RowNumero>
                    <Input nome="numero" placeholder="número" />
                  </RowNumero>
                </RowRow>
                <Input nome="complemento" placeholder="complemento" />

                <Input nome="bairro" placeholder="bairro" />

                <RowRow>
                  <div className="col-6-row">
                    <Input nome="cidade" placeholder="cidade" />
                  </div>
                  <RowEstado>
                    <Input nome="estado" placeholder="estado" />
                  </RowEstado>
                </RowRow>
              </div>
            </div>
            <hr />
            <div className="col-6-left align-center">
              {/* Redes Sociais */}

              <FormSectionTitle title="Redes Sociais" />

              <div path="redessociais">
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

            <div className="row">
              <div className="col-6">
                <div path="horarioFuncionamento[0]">
                  <Input
                    nome="titulo"
                    typeInput="width-100"
                    placeholder="Título (Ex: Segunda à Sexta)"
                  />

                  <RowRow>
                    <Input
                      typeInput="width-100"
                      nome="horario[0].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                    <Input
                      typeInput="width-100"
                      nome="horario[1].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                  </RowRow>

                  <RowRow>
                    <Input
                      typeInput="width-100"
                      nome="horario[2].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                    <Input
                      typeInput="width-100"
                      nome="horario[3].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                  </RowRow>
                </div>
              </div>

              <hr />

              <div className="col-6-left">
                <div path="horarioFuncionamento[1]">
                  <Input
                    typeInput="width-100"
                    nome="titulo"
                    placeholder="Título (Ex: Segunda à Sexta)"
                  />

                  <RowRow>
                    <Input
                      typeInput="width-100"
                      nome="horario[0].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                    <Input
                      typeInput="width-100"
                      nome="horario[1].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                  </RowRow>

                  <RowRow>
                    <Input
                      typeInput="width-100"
                      nome="horario[2].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                    <Input
                      typeInput="width-100"
                      nome="horario[3].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                  </RowRow>
                </div>
              </div>
            </div>

            <br />

            <hr />

            <div className="row">
              <div className="col-6">
                <div path="horarioFuncionamento[2]">
                  <Input
                    typeInput="width-100"
                    nome="titulo"
                    placeholder="Título (Ex: Segunda à Sexta)"
                  />

                  <RowRow>
                    <Input
                      typeInput="width-100"
                      nome="horario[0].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                    <Input
                      typeInput="width-100"
                      nome="horario[1].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                  </RowRow>

                  <RowRow>
                    <Input
                      typeInput="width-100"
                      nome="horario[2].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />

                    <Input
                      typeInput="width-100"
                      nome="horario[3].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                  </RowRow>
                </div>
              </div>

              <hr />

              <div className="col-6-left">
                <div path="horarioFuncionamento[3]">
                  <Input
                    typeInput="width-100"
                    nome="titulo"
                    placeholder="Título (Ex: Segunda à Sexta)"
                  />

                  <RowRow>
                    <Input
                      typeInput="width-100"
                      nome="horario[0].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />

                    <Input
                      typeInput="width-100"
                      nome="horario[1].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                  </RowRow>

                  <RowRow>
                    <Input
                      typeInput="width-100"
                      nome="horario[2].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />

                    <Input
                      typeInput="width-100"
                      nome="horario[3].horas"
                      placeholder="Horário (Ex: 07:00 às 18:00)"
                    />
                  </RowRow>
                </div>
              </div>
            </div>
          </center>

          <br />

          <hr />

          {/* Horário de Funcionamento*/}

          <div className="row">
            <div className="col-6">
              <FormSectionTitle title="Delivery Alimentos e Bebidas" />

              <div path="deliveryalimentosebebidas">
                <CheckboxInput labelName="Adegas" nome="adegasdelivery" />
                <CheckboxInput labelName="Àgua e Gás" nome="aguaegasdelivery" />
                <CheckboxInput labelName="Batataria" nome="batatariadelivery" />
                <CheckboxInput
                  labelName="Churrascaria"
                  nome="churrascariadelivery"
                />
                <CheckboxInput
                  labelName="Cozinha Oriental"
                  nome="cozinhaorientaldelivery"
                />
                <CheckboxInput
                  labelName="Cozinha Árabe"
                  nome="cozinhaarabedelivery"
                />
                <CheckboxInput
                  labelName="Cozinha Brasileira"
                  nome="cozinhabrasileiradelivery"
                />
                <CheckboxInput
                  labelName="Cozinha Mexicana"
                  nome="cozinhamexicanadelivery"
                />
                <CheckboxInput
                  labelName="Cozinha Francesa"
                  nome="cozinhafrancesadelivery"
                />
                <CheckboxInput
                  labelName="Cozinha Fitness"
                  nome="cozinhafitnessdelivery"
                />
                <CheckboxInput
                  labelName="Cozinha Italiana"
                  nome="cozinhaitalianadelivery"
                />
                <CheckboxInput
                  labelName="Doces e Bolos"
                  nome="docesebolosdelivery"
                />
                <CheckboxInput
                  labelName="Espetarias"
                  nome="espetariasdelivery"
                />
                <CheckboxInput
                  labelName="Esfiharias"
                  nome="esfihariasdelivery"
                />
                <CheckboxInput
                  labelName="Frango Assado"
                  nome="franngoassadodelivery"
                />
                <CheckboxInput
                  labelName="Hamburguerias"
                  nome="hamburgueriasdelivery"
                />
                <CheckboxInput
                  labelName="Hortifruti"
                  nome="hortifrutidelivery"
                />
                <CheckboxInput
                  labelName="Lanchonetes"
                  nome="lanchonetesdelivery"
                />
                <CheckboxInput
                  labelName="Marmita Popular"
                  nome="marmitapopulardelivery"
                />
                <CheckboxInput
                  labelName="Mercearias"
                  nome="merceariasdelivery"
                />
                <CheckboxInput labelName="Padarias" nome="padariasdelivery" />
                <CheckboxInput
                  labelName="Panquecarias"
                  nome="panquecariasdelivery"
                />
                <CheckboxInput
                  labelName="Pastelarias"
                  nome="pastelariasdelivery"
                />
                <CheckboxInput labelName="Peixarias" nome="peixariasdelivery" />
                <CheckboxInput labelName="Pizzarias" nome="pizzariasdelivery" />
                <CheckboxInput
                  labelName="Restaurantes"
                  nome="restaurantesdelivery"
                />
                <CheckboxInput labelName="Salgados" nome="salgadosdelivery" />
                <CheckboxInput
                  labelName="Sorvetes e Açaí"
                  nome="sorveteseacaidelivery"
                />
                <CheckboxInput
                  labelName="Tapiocarias"
                  nome="tapiocariasdelivery"
                />
                <CheckboxInput labelName="Vegana" nome="veganadelivery" />
                <CheckboxInput
                  labelName="Vegetariana"
                  nome="vegetarianadelivery"
                />
              </div>
            </div>
            <div className="col-6-left">
              <FormSectionTitle title="Delivery Moda e Acessórios" />

              <div path="modaeacessoriosdelivery">
                <CheckboxInput
                  labelName="Acessórios Femininos"
                  nome="acessoriosfemininosdelivery"
                />
                <CheckboxInput
                  labelName="Acessórios Masculinos"
                  nome="acessoriosmasculinosdelivery"
                />
                <CheckboxInput
                  labelName="Bagagens e Bolsas"
                  nome="bagagensebolsasdelivery"
                />
                <CheckboxInput labelName="Calçados" nome="calcadosdelivery" />
                <CheckboxInput
                  labelName="Moda Feminina"
                  nome="modafemininadelivery"
                />
                <CheckboxInput
                  labelName="Moda Infantil"
                  nome="modainfantildelivery"
                />
                <CheckboxInput
                  labelName="Moda Masculina"
                  nome="modamasculinadelivery"
                />
                <CheckboxInput
                  labelName="Moda Fitness"
                  nome="modafitnessdelivery"
                />
                <CheckboxInput
                  labelName="Moda Íntima Feminina"
                  nome="modaintimafemininadelivery"
                />
                <CheckboxInput
                  labelName="Moda Íntima Masculina"
                  nome="modaintimamasculinadelivery"
                />
                <CheckboxInput
                  labelName="Moda Esportiva"
                  nome="modaesportivadelivery"
                />
                <CheckboxInput
                  labelName="Moda Praia"
                  nome="modapraiadelivery"
                />
              </div>

              <FormSectionTitle title="Delivery Pets e Agro" />

              <div path="petseagrodelivery">
                <CheckboxInput
                  labelName="Adestramento"
                  nome="adestramentodelivery"
                />
                <CheckboxInput
                  labelName="Banhos e Tosas"
                  nome="banhoesetosasdelivery"
                />
                <CheckboxInput
                  labelName="Hospedagem para Pets"
                  nome="hospedagempetspetsdelivery"
                />
                <CheckboxInput
                  labelName="Lojas e Ração"
                  nome="lojasracaopetsdelivery"
                />
                <CheckboxInput
                  labelName="Passeador de Cães"
                  nome="passeadorcaespetsdelivery"
                />
                <CheckboxInput
                  labelName="Produtos Agrícolas"
                  nome="produtosagricolaspetsdelivery"
                />
              </div>

              <FormSectionTitle title="Delivery Saúde e Beleza" />

              <div path="saudeebelezadelivery">
                <CheckboxInput
                  labelName="Cabeleireiros"
                  nome="cabeleireirosdelivery"
                />
                <CheckboxInput labelName="Depilação" nome="depilacaodelivery" />
                <CheckboxInput labelName="Farmácias" nome="farmaciasdelivery" />
                <CheckboxInput
                  labelName="Manicure e Pedicure"
                  nome="manicureepedicuredelivery"
                />
                <CheckboxInput labelName="Maquiagem" nome="maquiagemdelivery" />
                <CheckboxInput
                  labelName="Massagistas"
                  nome="massagistasdelivery"
                />
                <CheckboxInput
                  labelName="Perfumaria"
                  nome="perfumariadelivery"
                />
                <CheckboxInput
                  labelName="Suplementos"
                  nome="suplementosdelivery"
                />
                <CheckboxInput
                  labelName="Terapias Alternativas"
                  nome="terapiasalternativasdelivery"
                />
              </div>
            </div>
          </div>

          <br />

          <hr />

          {/* Horário de Funcionamento*/}

          <div className="row">
            <div className="col-6">
              <FormSectionTitle title="Serviços Gerais" />

              <div path="servicosgerais">
                <CheckboxInput labelName="Babá" nome="baba" />
                <CheckboxInput labelName="Encanador" nome="encanador" />
                <CheckboxInput labelName="Caseiro" nome="caseiro" />
                <CheckboxInput labelName="Cozinheiro" nome="cozinheiro" />
                <CheckboxInput labelName="Chaveiro" nome="chaveiro" />
                <CheckboxInput labelName="Cuidador" nome="cuidador" />
                <CheckboxInput labelName="Eletricista" nome="eletricista" />
                <CheckboxInput labelName="Jardineiro" nome="jardineiro" />
                <CheckboxInput labelName="Faxineira" nome="faxineira" />
                <CheckboxInput labelName="Marceneiro" nome="marceneiro" />
                <CheckboxInput
                  labelName="Passeador de Cães"
                  nome="passeadordecaes"
                />
                <CheckboxInput labelName="Piscineiro" nome="piscineiro" />
                <CheckboxInput labelName="Pintor" nome="pintor" />
                <CheckboxInput labelName="Pedreiro" nome="pedreiro" />
                <CheckboxInput labelName="Vigilantes" nome="vigilantes" />
                <CheckboxInput labelName="Vidraceiros" nome="vidraceiros" />
              </div>

              <FormSectionTitle title="Turismo" />

              <div path="turismo">
                <CheckboxInput
                  labelName="Agências de Viagem"
                  nome="agenciasdeviagem"
                />
                <CheckboxInput
                  labelName="Aluguéis de Veículos"
                  nome="alugueisdeveiculos"
                />
                <CheckboxInput
                  labelName="Aluguéis Náuticos"
                  nome="alugueisnauticos"
                />
                <CheckboxInput
                  labelName="Empresas de Ônibus"
                  nome="empresasdeonibus"
                />
                <CheckboxInput
                  labelName="Guias Turísticos"
                  nome="guiasturisticosturismo"
                />
                <CheckboxInput labelName="Passeios" nome="passeiosturismo" />
              </div>

              <FormSectionTitle title="Náutica" />

              <div path="nautica">
                <CheckboxInput labelName="Aluguéis" nome="alugueisnautica" />
                <CheckboxInput labelName="Autopeças" nome="autopecasnautica" />
                <CheckboxInput labelName="Escolas" nome="escolasnautica" />
                <CheckboxInput labelName="Lojas" nome="lojasnautica" />
                <CheckboxInput labelName="Marinas" nome="marinasnautica" />
                <CheckboxInput labelName="Oficinas" nome="oficinasnautica" />
                <CheckboxInput labelName="Passeios" nome="passeiosnautica" />
              </div>

              <FormSectionTitle title="Religião" />

              <div path="religiao">
                <CheckboxInput
                  labelName="Artigos Religiosos"
                  nome="artigosreligiosos"
                />
                <CheckboxInput
                  labelName="Igrejas Católicas"
                  nome="igrejascatolicas"
                />
                <CheckboxInput
                  labelName="Templos Evangélicos"
                  nome="templosevangelicos"
                />
                <CheckboxInput labelName="Outros" nome="outrosreligiao" />
              </div>

              <FormSectionTitle title="Educação" />

              <div path="educacao">
                <CheckboxInput labelName="Cursos" nome="cursos" />
                <CheckboxInput labelName="Creches" nome="creches" />
                <CheckboxInput labelName="Escolas" nome="escolas" />
                <CheckboxInput labelName="Idiomas" nome="idiomas" />
                <CheckboxInput labelName="Faculdades" nome="faculdades" />
              </div>

              <FormSectionTitle title="Moda e Acessórios" />

              <div path="modaeacessorios">
                <CheckboxInput
                  labelName="Acessórios Femininos"
                  nome="acessoriosfemininos"
                />
                <CheckboxInput
                  labelName="Acessórios Masculinos"
                  nome="acessoriosmasculinos"
                />
                <CheckboxInput
                  labelName="Bagagens e Bolsas"
                  nome="bagagensebolsas"
                />
                <CheckboxInput labelName="Calçados" nome="calcados" />
                <CheckboxInput labelName="Moda Feminina" nome="modafeminina" />
                <CheckboxInput labelName="Moda Infantil" nome="modainfantil" />
                <CheckboxInput
                  labelName="Moda Masculina"
                  nome="modamasculina"
                />
                <CheckboxInput labelName="Moda Fitness" nome="modafitness" />
                <CheckboxInput
                  labelName="Moda Íntima Feminina"
                  nome="modaintimafeminina"
                />
                <CheckboxInput
                  labelName="Moda Íntima Masculina"
                  nome="modaintimamasculina"
                />
                <CheckboxInput
                  labelName="Moda Esportiva"
                  nome="modaesportiva"
                />
                <CheckboxInput labelName="Moda Praia" nome="modapraia" />
              </div>

              <FormSectionTitle title="Imóveis" />

              <div path="imoveis">
                <CheckboxInput
                  labelName="Imobiliárias"
                  nome="imobiliariasimoveis"
                />
                <CheckboxInput
                  labelName="Corretores de Imóveis"
                  nome="corretoresdeimoveisimoveis"
                />
              </div>

              <FormSectionTitle title="Casa, Móveis e Decoração" />

              <div path="casamoveisedecoracao">
                <CheckboxInput
                  labelName="Brechós e Usados"
                  nome="brechoseusados"
                />
                <CheckboxInput
                  labelName="Cama, Mesa e Banho"
                  nome="camamesaebanho"
                />
                <CheckboxInput labelName="Chaveiro" nome="chaveiro" />
                <CheckboxInput
                  labelName="Eletrodomésticos"
                  nome="eletrodomesticos"
                />
                <CheckboxInput
                  labelName="Equipamentos de Cozinha"
                  nome="equipamentosdecozinha"
                />
                <CheckboxInput
                  labelName="Enfeites e Decoração"
                  nome="enfeitesedecoracao"
                />
                <CheckboxInput labelName="Iluminação" nome="iluminicao" />
                <CheckboxInput
                  labelName="Jardins e Exteriores"
                  nome="jardinseexteriores"
                />
                <CheckboxInput labelName="Móveis" nome="moveis" />
                <CheckboxInput
                  labelName="Material de Construção"
                  nome="materialdeconstrucao"
                />
                <CheckboxInput
                  labelName="Refrigeração e Climatização"
                  nome="refrigeracaoeclimatizacao"
                />
                <CheckboxInput labelName="Segurança" nome="segurancacasa" />
                <CheckboxInput
                  labelName="Utilidades Domesticas"
                  nome="utilidadesdomesticas"
                />
              </div>

              <FormSectionTitle title="Hotelaria" />

              <div path="hotelaria">
                <CheckboxInput labelName="Chalés" nome="chales" />
                <CheckboxInput labelName="Camping" nome="camping" />
                <CheckboxInput
                  labelName="Casas Temporada"
                  nome="casastemporada"
                />
                <CheckboxInput labelName="Hóteis" nome="hoteis" />
                <CheckboxInput labelName="Motéis" nome="moteis" />
                <CheckboxInput labelName="Pousadas" nome="pousadashotelaria" />
                <CheckboxInput
                  labelName="Quartos e Suítes"
                  nome="quartosesuites"
                />
                <CheckboxInput
                  labelName="Hospedagem para Pets"
                  nome="hosppetshotelaria"
                />
              </div>

              <FormSectionTitle title="Eletrônicos e Informática" />

              <div path="eletronicoseinformatica">
                <CheckboxInput
                  labelName="Acessórios"
                  nome="acessoriosinformatica"
                />
                <CheckboxInput
                  labelName="Assessoria Técnica"
                  nome="assessoriatecnica"
                />
                <CheckboxInput labelName="Celulares" nome="celulares" />
                <CheckboxInput labelName="Computadores" nome="computadores" />
                <CheckboxInput
                  labelName="Drones e Acessórios"
                  nome="droneseacessorios"
                />
                <CheckboxInput labelName="Eletrônicos" nome="eletronicosinfo" />
                <CheckboxInput
                  labelName="Empresas de Internet"
                  nome="empresasdeinternet"
                />
                <CheckboxInput labelName="Informática" nome="informatica" />
                <CheckboxInput labelName="Lan Houses" nome="lanhouses" />
                <CheckboxInput
                  labelName="Lojas de Telefonia"
                  nome="lojasdetelefonia"
                />
                <CheckboxInput
                  labelName="Projetores e Telas"
                  nome="projetoresetelas"
                />
              </div>
            </div>
            <div className="col-6-left">
              <FormSectionTitle title="Profissionais Liberais" />

              <div path="profissionaisliberais">
                <CheckboxInput
                  labelName="Administradores"
                  nome="administradores"
                />
                <CheckboxInput labelName="Advogados" nome="advogados" />
                <CheckboxInput labelName="Arquitetos" nome="arquitetos" />
                <CheckboxInput labelName="Contadores" nome="contadores" />
                <CheckboxInput labelName="Coach" nome="coach" />
                <CheckboxInput
                  labelName="Corretores de Imóveis"
                  nome="corretoresdeimoveis"
                />
                <CheckboxInput
                  labelName="Corretores de Seguros"
                  nome="corretoresdeseguros"
                />
                <CheckboxInput
                  labelName="Digital Influencer"
                  nome="digitalinfluencer"
                />
                <CheckboxInput labelName="Dentistas" nome="dentistas" />
                <CheckboxInput labelName="Designers" nome="designers" />
                <CheckboxInput labelName="Despachantes" nome="despachantes" />
                <CheckboxInput labelName="Economistas" nome="economistas" />
                <CheckboxInput labelName="Engenheiros" nome="engenheiros" />
                <CheckboxInput labelName="Fotógrafos" nome="fotografos" />
                <CheckboxInput
                  labelName="Guias Turísticos"
                  nome="guiasturisticos"
                />
                <CheckboxInput labelName="Médicos" nome="medicos" />
                <CheckboxInput
                  labelName="Médicos Veterinários"
                  nome="medicosveterinarios"
                />
                <CheckboxInput labelName="Músicos" nome="musicos" />
                <CheckboxInput labelName="Palestrantes" nome="palestrantes" />
                <CheckboxInput labelName="Programadores" nome="programadores" />
                <CheckboxInput labelName="Psicólogos" nome="psicologos" />
                <CheckboxInput labelName="Psiquiátras" nome="psiquiatras" />
                <CheckboxInput labelName="Tradutores" nome="tradutores" />
              </div>

              <FormSectionTitle title="Construção Industrial e Civil" />

              <div path="construcaoindustrialecivil">
                <CheckboxInput
                  labelName="Material de Construção"
                  nome="materialdeconstrucao"
                />
                <CheckboxInput labelName="Metalúrgicas" nome="metalurgicas" />
                <CheckboxInput labelName="Marcenarias" nome="marcenarias" />
                <CheckboxInput labelName="Construtoras" nome="construtoras" />
                <CheckboxInput labelName="Arquitetura" nome="arquitetura" />
                <CheckboxInput
                  labelName="Engenharia Civil"
                  nome="engenhariacivil"
                />
              </div>

              <FormSectionTitle title="Utilidade Pública" />

              <div path="utilidadepublica">
                <CheckboxInput
                  labelName="Segurança"
                  nome="segurancautilpublica"
                />
                <CheckboxInput labelName="Saúde" nome="saude" />
                <CheckboxInput labelName="Prefeitura" nome="prefeitura" />
                <CheckboxInput labelName="Turismo" nome="turismo" />
                <CheckboxInput labelName="Ongs" nome="ongs" />
              </div>

              <FormSectionTitle title="Alimentos e Bebidas" />

              <div path="alimentosebebidas">
                <CheckboxInput labelName="Adegas" nome="adegas" />
                <CheckboxInput labelName="Àgua e Gás" nome="aguaegas" />
                <CheckboxInput labelName="Bares" nome="bares" />
                <CheckboxInput labelName="Carnes e Aves" nome="carneseaves" />
                <CheckboxInput labelName="Congelados" nome="congelados" />
                <CheckboxInput labelName="Churrascarias" nome="churrascarias" />
                <CheckboxInput
                  labelName="Frios e Laticínios"
                  nome="frioselaticinios"
                />
                <CheckboxInput labelName="Hortifruti" nome="hortifruti" />
                <CheckboxInput labelName="Hamburguerias" nome="hamburguerias" />
                <CheckboxInput labelName="Lanchonetes" nome="lanchonetes" />
                <CheckboxInput labelName="Mercados" nome="mercados" />
                <CheckboxInput labelName="Padarias" nome="padarias" />
                <CheckboxInput labelName="Pizzarias" nome="pizzarias" />
                <CheckboxInput labelName="Restaurantes" nome="restaurantes" />
                <CheckboxInput
                  labelName="Sorvetes e Açaí"
                  nome="sorveteseacai"
                />
              </div>

              <FormSectionTitle title="Arte, Papelaria e Armarinho" />

              <div path="artepapelariaearmarinho">
                <CheckboxInput
                  labelName="Artes e Artesanatos"
                  nome="arteseartesanatos"
                />
                <CheckboxInput labelName="Armarinhos" nome="armarinhos" />
                <CheckboxInput labelName="Brindes" nome="brindes" />
                <CheckboxInput labelName="Graficas" nome="graficas" />
                <CheckboxInput
                  labelName="Livros e Revistas"
                  nome="livroserevistas"
                />
                <CheckboxInput labelName="Papelarias" nome="papelarias" />
                <CheckboxInput labelName="Presentes" nome="presentes" />
              </div>

              <FormSectionTitle title="Beleza e Cuidado Pessoal" />

              <div path="belezaecuidadopessoal">
                <CheckboxInput
                  labelName="Artigos para Cabeleireiros"
                  nome="artigosparacabeleireiros"
                />
                <CheckboxInput labelName="Barbearias" nome="barbearias" />
                <CheckboxInput labelName="Cabeleireiros" nome="cabeleireiros" />
                <CheckboxInput
                  labelName="Clínicas de Estética"
                  nome="clinicasdeestetica"
                />
                <CheckboxInput labelName="Depilação" nome="depilacao" />
                <CheckboxInput
                  labelName="Manicure e Pedicure"
                  nome="manicureepedicure"
                />
                <CheckboxInput labelName="Maquiagem" nome="maquiagem" />
                <CheckboxInput labelName="Perfumaria" nome="perfumaria" />
              </div>

              <FormSectionTitle title="Saúde" />

              <div path="saude">
                <CheckboxInput labelName="Academias" nome="academias" />
                <CheckboxInput
                  labelName="Clínicas Médicas"
                  nome="clinicasmedicas"
                />
                <CheckboxInput labelName="Equipamentos" nome="equipamentos" />
                <CheckboxInput labelName="Farmácias" nome="farmacias" />
                <CheckboxInput labelName="Massagem" nome="massagem" />
                <CheckboxInput labelName="Odontologia" nome="odontologia" />
                <CheckboxInput
                  labelName="Suplementos Alimentares"
                  nome="suplementosalimentares"
                />
                <CheckboxInput
                  labelName="Terapias Alternativas"
                  nome="terapiasalternativas"
                />
              </div>

              <FormSectionTitle title="Veículos" />

              <div path="veiculos">
                <CheckboxInput
                  labelName="Aluguéis"
                  nome="alugueisvehveiculos"
                />
                <CheckboxInput
                  labelName="Autopeças Carros"
                  nome="autocarrosveiculos"
                />
                <CheckboxInput
                  labelName="Autopeças Motos"
                  nome="automotosveiculos"
                />
                <CheckboxInput
                  labelName="Autopeças Nauticos"
                  nome="autonaticoveiculos"
                />
                <CheckboxInput
                  labelName="Consórcios"
                  nome="consorciosveiculos"
                />
                <CheckboxInput
                  labelName="Concessionárias"
                  nome="concessionariasveiculos"
                />
                <CheckboxInput
                  labelName="Estética de Veículos"
                  nome="esteticadeveiculos"
                />
                <CheckboxInput labelName="Fretes" nome="fretes" />
                <CheckboxInput
                  labelName="Oficinas Carros"
                  nome="oficinascarrosveiculos"
                />
                <CheckboxInput
                  labelName="Oficinas Motos"
                  nome="oficinasmotosveiculos"
                />
                <CheckboxInput
                  labelName="Postos de Combustível"
                  nome="combustivelveiculos"
                />
                <CheckboxInput labelName="Táxis" nome="taxisveiculos" />
                <CheckboxInput labelName="Táxi Dog" nome="taxidog" />
              </div>

              <FormSectionTitle title="Pets e Agro" />

              <div path="petseagro">
                <CheckboxInput labelName="Adestramento" nome="adestramento" />
                <CheckboxInput
                  labelName="Banhos e Tosas"
                  nome="banhoesetosas"
                />
                <CheckboxInput labelName="Clínicas" nome="clinicaspets" />
                <CheckboxInput
                  labelName="Hospedagem para Pets"
                  nome="hospedagempetspets"
                />
                <CheckboxInput
                  labelName="Lojas e Ração"
                  nome="lojasracaopets"
                />
                <CheckboxInput
                  labelName="Passeador de Cães"
                  nome="passeadorcaespets"
                />
                <CheckboxInput
                  labelName="Produtos Agrícolas"
                  nome="produtosagricolaspets"
                />
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

          <ButtonSubmit type="submit" >Cadastrar no Trilhas</ButtonSubmit>
        </form>
        {this.state.isLoading ? (
          <DivAbsoluta>
            {/* <ImageLoading src="https://thumbs.gfycat.com/HollowNaughtyAfricanhornbill-small.gif" /> */}
          </DivAbsoluta>
        ) : null}
      </div>
    );
  }
}
