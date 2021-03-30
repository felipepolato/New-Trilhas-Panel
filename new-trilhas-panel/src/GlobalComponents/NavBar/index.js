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
} from "./styles";
import LogomarcaImage from "../../Images/logo-normal.png";

//////FIREBASE///////
import { fire, userRef } from "../config";

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
  }

  render() {
    return (
      <Container>
        <NavBar>
          <UserDetails>
            <UserName>
              {this.state.name} {this.state.surname}
            </UserName>
            <UserAccess>{this.state.function}</UserAccess>
          </UserDetails>
        </NavBar>
        <SideBar>
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
              Início
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
              Sessões
            </SideBarButton>
            <SideBarButton type="button" onClick={() => null}>
              Configurações
            </SideBarButton>
            <SideBarFooter>Tecnologia Senhor.APP</SideBarFooter>
          </center>
        </SideBar>
      </Container>
    );
  }
}
