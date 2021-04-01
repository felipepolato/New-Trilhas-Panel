import React from "react";

export default (data, firebaseConnect) => {
  let countalimentosebebidas = 0;

  for (const loop in data.alimentosebebidas) {
    if (document.getElementById(loop).checked) {
      countalimentosebebidas = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countalimentosebebidas == 1) {
    firebaseConnect
      .database()
      .ref(`/todosalimentosebebidas/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
