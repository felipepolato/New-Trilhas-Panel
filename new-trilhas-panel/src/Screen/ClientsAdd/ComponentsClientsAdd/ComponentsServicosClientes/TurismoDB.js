import React from "react";

export default (data, firebaseConnect) => {
  let countturismo = 0;

  for (const loop in data.turismo) {
    if (document.getElementById(loop).checked) {
      countturismo = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countturismo == 1) {
    firebaseConnect
      .database()
      .ref(`/todosturismo/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
