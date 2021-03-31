import React, { Component } from "react";

import { SearchBox, Input, Select, Option } from "./styles";

import SearchIcon from "../../Images/searchbar.png";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // name: "",
    };
  }

  render() {
    // const { name, destiny } = this.props;
    return (
      <SearchBox>
        <Input placeholder="Pesquisar" />

        <img
          src={SearchIcon}
          width="22%"
          height="100%"
          alt="logo"
          //onClick={() => {
          // let valueInput = document.getElementById(`${name}`).value;
          //  localStorage.setItem("search_client_field", valueInput);

          //  window.location.href = destiny;
          // }}
        />
      </SearchBox>
    );
  }
}
