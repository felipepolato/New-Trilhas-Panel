import React from "react";

export default (data, firebaseConnect) => {
  let counteletronicoseinformatica = 0;

  for (const loop in data.eletronicoseinformatica) {
    if (document.getElementById(loop).checked) {
      counteletronicoseinformatica = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (counteletronicoseinformatica == 1) {
    firebaseConnect
      .database()
      .ref(`/todoseletronicoseinformatica/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
