import React from "react";

export default (data, firebaseConnect) => {

  let countpetseagro = 0;

  for (const loop in data.petseagro) {
    if (document.getElementById(loop).checked) {
      countpetseagro = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countpetseagro == 1) {
    firebaseConnect
      .database()
      .ref(`/todospetseagro/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
