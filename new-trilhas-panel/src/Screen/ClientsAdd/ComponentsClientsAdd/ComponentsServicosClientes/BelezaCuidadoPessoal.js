import React from "react";

export default (data, firebaseConnect) => {
  let countbelezaecuidadopessoal = 0;

  for (const loop in data.belezaecuidadopessoal) {
    if (document.getElementById(loop).checked) {
      countbelezaecuidadopessoal = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countbelezaecuidadopessoal == 1) {
    firebaseConnect
      .database()
      .ref(`/todosbelezaecuidadopessoal/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
