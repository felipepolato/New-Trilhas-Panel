import React, { useEffect, useRef, useState, useCallback } from "react";

import styled from "styled-components";
import {LabelFile, FileInputStyle }from "./styles"

export let fileGallery = [];

export function GalleryInput({
  initialPreview,
  labeltext,
  indexnumber,
  nome,
  destiny,
  ...rest
}) {
  const inputRef = useRef(null);
   ////////Fazer Controle de Formulario///////////////////////
   const [ fieldName, setFildName] = useState("");
   const [ registerField, setRegisterField] = useState("");
   const [ defaultValue, setDefaultValue] = useState("");
   const [ error, setError] = useState("");

  const [preview, setPreview] = useState(
    "https://senhor.app/testes/trilhas/src/main/no-image.png"
  );

  const [previewOk, setPreviewOk] = useState(false);
  const [typeOfString, setTypeOfString] = useState("");

  useEffect(() => {
    
  }, []);
///////////////////////////////////////////////////////////////////////////
  setTimeout(() => {
    if (destiny == true) {
      setTypeOfString("destinos");
    } else {
      setTypeOfString("images");
    }

    setTimeout(() => {
      if (previewOk === false) {
        if (initialPreview !== undefined) {
          setPreview(
            `https://firebasestorage.googleapis.com/v0/b/reactjs-eb650.appspot.com/o/${typeOfString}%2F${initialPreview}?alt=media&token=41e1a21b-3919-4afd-80b6-1bdb22993a6e`
          );
          setPreviewOk(true);
        }
        if (initialPreview === "") {
          setPreview("https://senhor.app/testes/trilhas/src/main/no-image.png");
        }
      }
    }, 500);
  }, 1000);

  return (
    <div>
      <center>
        <Img src={preview} width="90%" />
      </center>
      <LabelFile for={nome}>
        {labeltext}
      </LabelFile>
      <FileInputStyle
        onChange={(e) => {
          fileGallery[indexnumber] = e.target.files?.[0];
          if (!fileGallery[indexnumber]) {
            setPreview(null);
          }
          const previewURL = URL.createObjectURL(fileGallery[indexnumber]);
          setPreview(previewURL);
        }}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        type="file"
        id={nome}
      />
    </div>
  );
}

const Img = styled.img`
  box-shadow: 3px 4px 15px -1px rgba(0, 0, 0, 0.7);
`;
