import React from "react";

import styled from "styled-components";

export default ({ name, value, onChange, type, placeholder }) => {
  return (
    <InputStyled
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

const InputStyled = styled.input`
    
`;