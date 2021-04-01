import React from "react";

export default (data, firebaseConnect) => {
  let countsaudeebelezadelivery = 0;

  for (const loop in data.saudeebelezadelivery) {
    if (document.getElementById(loop).checked) {
      countsaudeebelezadelivery = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countsaudeebelezadelivery == 1) {
    firebaseConnect
      .database()
      .ref(`/todossaudeebelezadelivery/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }
};
