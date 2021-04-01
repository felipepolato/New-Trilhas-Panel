import React from "react";

export default (data, firebaseConnect) => {
  let counteducacao = 0;

  for (const loop in data.educacao) {
    if (document.getElementById(loop).checked) {
      counteducacao = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (counteducacao == 1) {
    firebaseConnect
      .database()
      .ref(`/todoseducacao/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
