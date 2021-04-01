import React from "react";

export default (data, firebaseConnect) => {
  let countsaude = 0;

  for (const loop in data.saude) {
    if (document.getElementById(loop).checked) {
      countsaude = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countsaude == 1) {
    firebaseConnect
      .database()
      .ref(`/todossaude/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
