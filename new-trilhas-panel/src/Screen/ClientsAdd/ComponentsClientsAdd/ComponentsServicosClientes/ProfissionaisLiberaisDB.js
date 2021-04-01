import React from "react";

export default (data, firebaseConnect) => {
  let countprofissionaisliberais = 0;

  for (const loop in data.profissionaisliberais) {
    if (document.getElementById(loop).checked) {
      countprofissionaisliberais = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countprofissionaisliberais == 1) {
    firebaseConnect
      .database()
      .ref(`/todosprofissionaisliberais/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
