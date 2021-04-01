import React from "react";

export default (data, firebaseConnect) => {
  let countdeliveryalimentosebebidas = 0;

  for (const loop in data.deliveryalimentosebebidas) {
    if (document.getElementById(loop).checked) {
      countdeliveryalimentosebebidas = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countdeliveryalimentosebebidas == 1) {
    firebaseConnect
      .database()
      .ref(`/todosdeliveryalimentosebebidas/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }
  return true;
};
