import React from "react";

export default (data, firebaseConnect) => {
  let countveiculos = 0;

  for (const loop in data.veiculos) {
    if (document.getElementById(loop).checked) {
      countveiculos = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countveiculos == 1) {
    firebaseConnect
      .database()
      .ref(`/todosveiculos/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
