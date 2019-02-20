// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
//  return 'example';
//};

window.data = {

chane: (word, quantity) => {
  let finalInfo = word + " " + quantity;
  return finalInfo;
},

mostrarPalabra: () => {
  let word;
  for(let i = 0; i <= INJURIES.length; i++){
    word = Object.keys(INJURIES[i]);
  }
  return word;
},

mostrarNumeros: () => {
  let quantity;
  for(let i = 0; i <INJURIES.length; i++){
      quantity = Object.values(INJURIES[i]);

}
  return quantity;
}

}
