import React from "react";

export default (data, firebaseConnect) => {

  let countmodaeacessoriosdelivery = 0;

  for (const loop in data.modaeacessoriosdelivery) {
    if (document.getElementById(loop).checked) {
      countmodaeacessoriosdelivery = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (countmodaeacessoriosdelivery == 1) {
    firebaseConnect
      .database()
      .ref(`/todosmodaeacessoriosdelivery/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
