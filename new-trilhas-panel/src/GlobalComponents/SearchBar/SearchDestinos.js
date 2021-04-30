import React, { Component } from "react";

import { SearchBox, Input } from "./styles";

import SearchIcon from "../../Images/searchbar.png";

export default class SearchDestinos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    const { name, destiny } = this.state;
    return (
      <SearchBox>
        <Input
          placeholder="Pesquisar"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />

        <img
          src={SearchIcon}
          width="22%"
          height="100%"
          alt="logo"
          onClick={() => {
            let valueInput = name;
            localStorage.setItem("search_client_field", valueInput);

            window.location.href = "/seachdestinos";
          }}
        />
      </SearchBox>
    );
  }
}
