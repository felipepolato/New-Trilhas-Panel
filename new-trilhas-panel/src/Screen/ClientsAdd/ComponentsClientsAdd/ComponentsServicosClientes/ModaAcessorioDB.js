import React from "react";

export default (data, firebaseConnect) => {
  let countmodaeacessorios = 0;

  for (const loop in data.modaeacessorios) {
    if (document.getElementById(loop).checked) {
      countmodaeacessorios = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countmodaeacessorios == 1) {
    firebaseConnect
      .database()
      .ref(`/todosmodaeacessorios/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
