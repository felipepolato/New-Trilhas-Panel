import React from "react";
import {
  Container,
  NavBar,
  SideBar,
  Logomarca,
  SideBarButton,
  SideBarFooter,
  UserName,
  UserDetails,
  UserAccess,
  ContainerAccounts,
  InputFile,
  Input,
  ButtonInput,
  SelectContas,
  OptionContas,
  SideBarButtonConfig,
  ConfigDropdown,
  SideBarButtonDropdown,
  InputFileLabel,
  ButtonAdd,
  ButtonAddTextBox,
  ButtonAddText,
  DivNav,
  ButtomAlterarSenha,
  OptionSection,
  SelectSection,
} from "./styles";
import LogomarcaImage from "../../Images/logo-normal.png";

//////FIREBASE///////
import { fire, userRef } from "../config";
import SearchBar from "../SearchBar/SearchBar";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inHome: false,
      inClients: false,
      inAccounts: false,
      inSections: false,
      inDestinations: false,
      name: "",
      surname: "",
      function: "",
      dropdownActive: false,
      trocarSenha: false,
      titulos: [],
      sectionName: "",
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref(userRef)
      .on("value", (snapshot) => {
        let tmp = snapshot.val();

        this.setState({
          name: tmp.name,
          surname: tmp.surname,
          function: tmp.function,
        });
      });

    if (this.props.thisPage === "Home") {
      this.setState({ inHome: true });
    } else if (this.props.thisPage === "Clients") {
      this.setState({ inClients: true });
    } else if (this.props.thisPage === "Accounts") {
      this.setState({ inAccounts: true });
    } else if (this.props.thisPage === "Sections") {
      this.setState({ inSections: true });
    } else if (this.props.thisPage === "Destinations") {
      this.setState({ inDestinations: true });
    }

    fire
      .database()
      .ref("/categorias/")
      .on("value", (snapshot) => {
        let tmp = snapshot.val();
        let titulos = [];

        for (let loop in tmp) {
          let count = 0;
          let tmp2 = tmp[loop].segments;
          for (let loop2 in tmp2) {
            count++;
          }
          titulos.push({
            title: tmp[loop].info["section-title"],
            ref: loop,
            amount: count,
          });
        }

        this.setState({ titulos: titulos });
      });

    if (
      localStorage.getItem("panel-trilhas-user") == undefined &&
      localStorage.getItem("panel-trilhas-user") == null
    ) {
      window.location.href = "/";
    }
  }

  render() {
    const selectRender = () => {
      let data = this.state.titulos;
      let toRender = [];
      for (let loop in data) {
        toRender.push(
          <OptionSection value={data[loop].ref}>
            {data[loop].title}
          </OptionSection>
        );
      }
      return toRender;
    };

    const { sectionName } = this.state;

    return (
      <Container>
        <NavBar>
          {this.state.inAccounts ? (
            <ContainerAccounts>
              <InputFile type="file" />
              <Input type="text" placeholder="Nome" />
              <Input type="text" placeholder="Sobrenome" />
              <Input type="text" placeholder="Usu??rio" />
              <Input type="text" placeholder="Com??rcio" />
              <Input type="password" placeholder="Senha" />

              <SelectContas>
                <OptionContas value="">Selecione ???</OptionContas>
                <OptionContas value="parceiro">Parceiro</OptionContas>
                <OptionContas value="gerente">Gerente</OptionContas>
                <OptionContas value="administrador">Administrador</OptionContas>
              </SelectContas>

              <ButtonInput>Enviar</ButtonInput>
            </ContainerAccounts>
          ) : null}

          {this.state.inSections ? (
            <ContainerAccounts>
              <SelectSection id="section">
                <OptionContas value="">Selecione ???</OptionContas>
                {selectRender()}
              </SelectSection>

              <Input
                value={this.state.sectionName}
                onChange={(e) => this.setState({ sectionName: e.target.value })}
                type="text"
                placeholder="Nome"
              />

              <ButtonInput
                onClick={() => {
                  let teste = [];
                  teste[`${this.state.sectionName}`] = "ok";

                  fire
                    .database()
                    .ref(
                      `/categorias/${
                        document.getElementById("section").value
                      }/segments/`
                    )
                    .on("value", (snapshot) => {
                      let tmp = snapshot.val();
                      for (let loop in tmp) {
                        teste[`${loop}`] = "ok";
                      }
                    });

                  fire
                    .database()
                    .ref(
                      `/categorias/${
                        document.getElementById("section").value
                      }/segments/`
                    )
                    .set(teste);

                  console.log(teste);

                  console.log(
                    `${document.getElementById("section").value}: ${
                      this.state.sectionName
                    }`
                  );
                }}
              >
                Enviar
              </ButtonInput>
            </ContainerAccounts>
          ) : null}

          {this.state.inClients ? (
            <DivNav>
              <SearchBar />
              <ButtonAdd>
                <ButtonAddTextBox>
                  <ButtonAddText
                    onClick={() => (window.location.href = "/add")}
                  >
                    Adicionar Cliente
                  </ButtonAddText>
                </ButtonAddTextBox>
              </ButtonAdd>
            </DivNav>
          ) : null}

          {this.state.inDestinations ? (
            <DivNav>
              <SearchBar />
              <ButtonAdd>
                <ButtonAddTextBox>
                  <ButtonAddText
                    onClick={() => (window.location.href = "/destinationadd")}
                  >
                    Adicionar Destino
                  </ButtonAddText>
                </ButtonAddTextBox>
              </ButtonAdd>
            </DivNav>
          ) : null}

          <UserDetails>
            <UserName>
              {this.state.name} {this.state.surname}
            </UserName>
            <UserAccess>{this.state.function}</UserAccess>
          </UserDetails>
        </NavBar>
       
      </Container>
    );
  }
}
/* <SideBar>
          <center>
            <Logomarca src={LogomarcaImage} />

            <SideBarButton
              type="button"
              onClick={() => (window.location.href = "/home")}
              style={
                this.state.inHome
                  ? {
                      backgroundColor: "rgb(255, 198, 73)",
                      color: "#116591",
                      paddingBottom: "15px",
                      paddingTop: "15px",
                    }
                  : null
              }
            >
              In??cio
            </SideBarButton>
            <SideBarButton
              type="button"
              onClick={() => (window.location.href = "/clients")}
              style={
                this.state.inClients
                  ? {
                      backgroundColor: "rgb(255, 198, 73)",
                      color: "#116591",
                      paddingBottom: "15px",
                      paddingTop: "15px",
                    }
                  : null
              }
            >
              Clientes
            </SideBarButton>
            <SideBarButton
              type="button"
              onClick={() => (window.location.href = "/accounts")}
              style={
                this.state.inAccounts
                  ? {
                      backgroundColor: "rgb(255, 198, 73)",
                      color: "#116591",
                      paddingBottom: "15px",
                      paddingTop: "15px",
                    }
                  : null
              }
            >
              Contas
            </SideBarButton>
            <SideBarButton
              type="button"
              onClick={() => (window.location.href = "/destinations")}
              style={
                this.state.inDestinations
                  ? {
                      backgroundColor: "rgb(255, 198, 73)",
                      color: "#116591",
                      paddingBottom: "15px",
                      paddingTop: "15px",
                    }
                  : null
              }
            >
              Destinos
            </SideBarButton>
            <SideBarButton
              type="button"
              onClick={() => (window.location.href = "/sections")}
              style={
                this.state.inSections
                  ? {
                      backgroundColor: "rgb(255, 198, 73)",
                      color: "#116591",
                      paddingBottom: "15px",
                      paddingTop: "15px",
                    }
                  : null
              }
            >
              Sess??es
            </SideBarButton>
            <SideBarButtonConfig
              onClick={() =>
                this.state.dropdownActive
                  ? this.setState({ dropdownActive: false })
                  : this.setState({ dropdownActive: true, trocarSenha: false })
              }
              type="button"
              style={
                this.state.dropdownActive
                  ? {
                      backgroundColor: "rgb(255, 198, 73)",
                      color: "#116591",
                      paddingBottom: "15px",
                      paddingTop: "15px",
                    }
                  : null
              }
            >
              {this.state.dropdownActive
                ? `Configura????es ???`
                : `Configura????es ???`}
              {this.state.dropdownActive ? (
                <ConfigDropdown id="dropdrownConfig">
                  <SideBarButtonDropdown
                    type="button"
                    onClick={() =>
                      this.setState({
                        trocarSenha: true,
                        dropdownActive: false,
                      })
                    }
                  >
                    Trocar Senha
                  </SideBarButtonDropdown>
                  <SideBarButtonDropdown
                    type="button"
                    onClick={() => {
                      localStorage.clear();
                      localStorage.removeItem("panel-trilhas-user");
                      localStorage.removeItem("panel-trilhas-id");
                      window.location.href = "/";
                    }}
                  >
                    Sair
                  </SideBarButtonDropdown>
                </ConfigDropdown>
              ) : null}
            </SideBarButtonConfig>

            {this.state.trocarSenha ? (
              <div>
                <Input
                  style={{ margin: "3px", width: "96%", height: "3em" }}
                  placeholder="Senha Atual"
                />

                <Input
                  style={{ margin: "3px", width: "96%", height: "3em" }}
                  placeholder="Senha Nova"
                />

                <Input
                  style={{ margin: "3px", width: "96%", height: "3em" }}
                  placeholder="Confirma????o de Senha"
                />
                <ButtomAlterarSenha>Alterar Senha</ButtomAlterarSenha>
              </div>
            ) : null}

            <SideBarFooter>
              Tecnologia Senhor.APP
              <br />
              v2.0.0
            </SideBarFooter>
          </center>
        </SideBar>*/