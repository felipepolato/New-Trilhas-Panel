import React from "react";

export default (data, firebaseConnect) => {
  

  let countServicosGerais = 0;

  firebaseConnect
    .database()
    .ref(`/lojas/clientes/${data.nome}`)
    .set(data)
    .then(() => console.log("Data set."));

  for (const loop in data.servicosgerais) {
    if (document.getElementById(loop).checked) {
      countServicosGerais = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countServicosGerais == 1) {
    firebaseConnect
      .database()
      .ref(`/todosservicos/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
