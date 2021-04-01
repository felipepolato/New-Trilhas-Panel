import React from "react";

export default (data, firebaseConnect) => {
  let countreligiao = 0;

  for (const loop in data.religiao) {
    if (document.getElementById(loop).checked) {
      countreligiao = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countreligiao == 1) {
    firebaseConnect
      .database()
      .ref(`/todosreligiao/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
