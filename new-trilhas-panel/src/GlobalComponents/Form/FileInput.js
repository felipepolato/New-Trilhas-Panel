import React, { useEffect, useRef, useState, useCallback } from "react";

import {LabelFile, FileInputStyle, ImgMobile, LabelFile2 }from "./styles"

export let file;

export function FileInput({
  initialPreview,
  nome,
  destiny,
  mobile,
  imgMobile,
  ...rest
}) {
  const inputRef = useRef(null);
   ////////Fazer Controle de Formulario///////////////////////
   const [ fieldName, setFildName] = useState("");
   const [ registerField, setRegisterField] = useState("");
   const [ defaultValue, setDefaultValue] = useState("");
   const [ error, setError] = useState("");

  const [preview, setPreview] = useState("");
  const [previewOk, setPreviewOk] = useState(false);
  const [typeOfString, setTypeOfString] = useState("");

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
//////////////////////////////////////////////////////////////////
  setTimeout(() => {
    if (destiny == true) {
      setTypeOfString("destinos");
    } else {
      setTypeOfString("images");
    }
    if (previewOk === false) {
      if (initialPreview !== undefined) {
        setPreview(
          `https://firebasestorage.googleapis.com/v0/b/reactjs-eb650.appspot.com/o/${typeOfString}%2F${initialPreview}?alt=media&token=41e1a21b-3919-4afd-80b6-1bdb22993a6e`
        );
        console.log(initialPreview);
        setPreviewOk(true);
      }
    }
  }, 800);

  return (
    <div>
      <center>
        {imgMobile ? (
          <ImgMobile>
            <img id="output" src={preview} width="100%" />
          </ImgMobile>
        ) : (
          <img id="output" src={preview} width="50%" />
        )}

        {mobile ? (
          <LabelFile2 for={inputRef.current}>Selecionar Logomarca</LabelFile2>
        ) : (
          <LabelFile for={inputRef.current}>Selecionar Logomarca</LabelFile>
        )}

        <FileInputStyle
          onChange={(e) => {
            file = e.target.files?.[0];

            if (!file) {
              setPreview(null);
            }
            const previewURL = URL.createObjectURL(file);
            setPreview(previewURL);
          }}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
          type="file"
          id={inputRef.current}
        />
      </center>
    </div>
  );
}
