import React from "react";

export default (data, firebaseConnect) => {
  let countpetseagrodelivery = 0;

  for (const loop in data.petseagrodelivery) {
    if (document.getElementById(loop).checked) {
      countpetseagrodelivery = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countpetseagrodelivery == 1) {
    firebaseConnect
      .database()
      .ref(`/todospetseagrodelivery/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
