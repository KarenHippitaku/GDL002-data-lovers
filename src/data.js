// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
//  return 'example';
//};

window.data = {

  chain: (word, quantity) => {
    let finalInfo = mostrarPalabra() + " " + mostrarNumeros();
    return finalInfo;
  },

mostrarPalabra: () => {
  let word;
  for(let i = 0; i <= INJURIES.length; i++){
    word = Object.keys(INJURIES[i]);
    word.forEach(function (element) {
    document.write(element);
  });
}
  return word;
},

mostrarNumeros: () => {
  let quantity;
  for(let i = 0; i <INJURIES.length; i++){
      quantity = Object.values(INJURIES[i]);
      quantity.forEach(function (element) {
      document.write(element);

  });
}
  return quantity;
}

}
