import React from "react";

import styled from "styled-components";

export default ({ name, value, onChange, type, placeholder, id }) => {
  return (
    <InputStyled
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  );
};

const InputStyled = styled.input`
    width: 100%;
    height: 2em;
`;