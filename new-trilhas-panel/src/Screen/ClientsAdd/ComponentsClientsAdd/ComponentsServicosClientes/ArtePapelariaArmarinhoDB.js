import React from "react";

export default (data, firebaseConnect) => {
  let countartepapelariaearmarinho = 0;

  for (const loop in data.artepapelariaearmarinho) {
    if (document.getElementById(loop).checked) {
      countartepapelariaearmarinho = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countartepapelariaearmarinho == 1) {
    firebaseConnect
      .database()
      .ref(`/todosartepapelariaearmarinho/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
