import React from "react";

export default (data, firebaseConnect) => {
  let countutilidadepublica = 0;

  for (const loop in data.utilidadepublica) {
    if (document.getElementById(loop).checked) {
      countutilidadepublica = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countutilidadepublica == 1) {
    firebaseConnect
      .database()
      .ref(`/todosutilidadepublica/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
