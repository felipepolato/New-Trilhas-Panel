import React from "react";

export default (data, firebaseConnect) => {
  let countcasamoveisedecoracao = 0;

  for (const loop in data.casamoveisedecoracao) {
    if (document.getElementById(loop).checked) {
      countcasamoveisedecoracao = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countcasamoveisedecoracao == 1) {
    firebaseConnect
      .database()
      .ref(`/todoscasamoveisedecoracao/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
