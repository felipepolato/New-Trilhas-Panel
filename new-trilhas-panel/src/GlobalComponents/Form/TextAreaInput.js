import React, { useEffect, useRef, useState } from "react";

import {TextAreaInputStyle }from "./styles"

export default function TextAreaInput({ nome, ...rest }) {
  const inputRef = useRef(null);
   ////////Fazer Controle de Formulario///////////////////////
   const [ fieldName, setFildName] = useState("");
   const [ registerField, setRegisterField] = useState("");
   const [ defaultValue, setDefaultValue] = useState("");
   const [ error, setError] = useState("");

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
/////////////////////////////////////////////////////////////////
  return (
    <TextAreaInputStyle
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
      
    ></TextAreaInputStyle>
  );
}
