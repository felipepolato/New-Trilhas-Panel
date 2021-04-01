import React, { useEffect, useRef, useState } from "react";

import {TextCheckbox, DivCheckbox }from "./styles"

export default function CheckboxInput({ labelName, nome, ...rest }) {
  const inputRef = useRef(null);

  ////////Fazer Controle de Formulario///////////////////////
  const [ fieldName, setFildName] = useState("");
  const [ registerField, setRegisterField] = useState("");
  const [ defaultValue, setDefaultValue] = useState("");
  const [ error, setError] = useState("");
  
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
////////////////////////////////////////////////////////////////
  if (valueInput !== "sim") {
    return (
      <DivCheckbox>
        <input
          ref={inputRef}
          id={nome}
          defaultValue={valueInput}
          {...rest}
          type="checkbox"
          value={valueInput}
          onChange={() =>
            document.getElementById(`${nome}`).checked
              ? setValueInput("sim")
              : setValueInput("")
          }
        />
        <TextCheckbox for={nome}>
          {labelName}
        </TextCheckbox>
      </DivCheckbox>
    );
  } else {
    return (
      <DivCheckbox>
        <input
          ref={inputRef}
          id={nome}
          defaultValue={defaultValue}
          {...rest}
          type="checkbox"
          value={valueInput}
          onChange={() =>
            document.getElementById(`${nome}`).checked
              ? setValueInput("sim")
              : setValueInput("")
          }
          defaultChecked={true}
        />
        <TextCheckbox for={nome}>
          {labelName}
        </TextCheckbox>
      </DivCheckbox>
    );
  }
}
