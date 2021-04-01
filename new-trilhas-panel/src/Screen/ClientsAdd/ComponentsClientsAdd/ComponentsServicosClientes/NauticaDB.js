import React from "react";

export default (data, firebaseConnect) => {
  let countnautica = 0;

  for (const loop in data.nautica) {
    if (document.getElementById(loop).checked) {
      countnautica = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countnautica == 1) {
    firebaseConnect
      .database()
      .ref(`/todosnautica/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
