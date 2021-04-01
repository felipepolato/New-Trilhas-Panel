import React from "react";

export default (data, firebaseConnect) => {
  let countimoveis = 0;

  for (const loop in data.imoveis) {
    if (document.getElementById(loop).checked) {
      countimoveis = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countimoveis == 1) {
    firebaseConnect
      .database()
      .ref(`/todosimoveis/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
