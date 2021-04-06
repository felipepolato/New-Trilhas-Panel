import React, { useEffect, useRef, useState } from "react";

import {InputStyle, InputStyle2 }from "./styles"

export default function Input({ typeInput, nome, ...rest }) {
  const inputRef = useRef(null);
   ////////Fazer Controle de Formulario///////////////////////
   const [ fieldName, setFildName] = useState("");
   const [ registerField, setRegisterField] = useState("");
   const [ defaultValue, setDefaultValue] = useState("");
   const [ error, setError] = useState("");

  useEffect(() => {
   
  }, []);
////////////////////////////////////////////////////////////////
  if (typeInput === "width-100") {
    return (
      <InputStyle2
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        
      />
    );
  } else {
    return (
      <InputStyle
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    );
  }
}
