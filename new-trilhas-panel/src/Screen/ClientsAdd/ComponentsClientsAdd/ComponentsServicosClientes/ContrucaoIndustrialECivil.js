import React from "react";

export default (data, firebaseConnect) => {
  let countconstrucaoindustrialecivil = 0;

  for (const loop in data.construcaoindustrialecivil) {
    if (document.getElementById(loop).checked) {
      countconstrucaoindustrialecivil = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countconstrucaoindustrialecivil == 1) {
    firebaseConnect
      .database()
      .ref(`/todosconstrucaoindustrialecivil/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
