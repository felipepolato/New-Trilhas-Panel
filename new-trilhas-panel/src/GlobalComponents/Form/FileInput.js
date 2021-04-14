import React, { useEffect, useRef, useState, useCallback } from "react";

import { LabelFile, FileInputStyle, ImgMobile, LabelFile2 } from "./styles";

export let file;

export function FileInput({
  initialPreview,
  nome,
  destiny,
  mobile,
  imgMobile,
  ...rest
}) {
  const [preview, setPreview] = useState("");
  const [previewOk, setPreviewOk] = useState(false);
  const [typeOfString, setTypeOfString] = useState("");
  //////////////////////////////////////////////////////////////////
  setTimeout(() => {
    if (destiny == true) {
      setTypeOfString("destinos");
    } else {
      setTypeOfString("images");
    }
    if (previewOk === false) {
      if (initialPreview !== undefined) {
        setPreview(initialPreview);
        console.log(`Initial: ${initialPreview}`);
        setPreviewOk(true);
      }
    }
  }, 1000);

  return (
    <div>
      <center>
        <img id="output" src={preview} width="50%" />

        <LabelFile for={nome}>Selecionar Logomarca</LabelFile>

        <FileInputStyle
          onChange={(e) => {
            file = e.target.files?.[0];

            if (!file) {
              setPreview(null);
            }
            const previewURL = URL.createObjectURL(file);
            setPreview(previewURL);
          }}
          {...rest}
          type="file"
          id={nome}
        />
      </center>
    </div>
  );
}
