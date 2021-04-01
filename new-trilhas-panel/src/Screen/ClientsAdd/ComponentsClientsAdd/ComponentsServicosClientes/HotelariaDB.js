import React from "react";

export default (data, firebaseConnect) => {
  let counthotelaria = 0;

  for (const loop in data.hotelaria) {
    if (document.getElementById(loop).checked) {
      counthotelaria = 1;
      firebaseConnect
        .database()
        .ref(`/lojas/${loop}/${data.nome}`)
        .set(data)
        .then(() => console.log("Data set."));
    }
  }

  if (counthotelaria == 1) {
    firebaseConnect
      .database()
      .ref(`/todoshotelaria/${data.nome}`)
      .set(data)
      .then(() => console.log("Data set."));
  }

  return true;
};
