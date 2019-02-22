// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
//  return 'example';
//};

window.data = {

  fillElements: (injuriesList, buttonElement) => {
  for(let i=0; i<injuriesList.length; i++) {
     let buttonInjurie = document.createElement("span");
     buttonInjurie.id = 'Injurie' + [i];
     let array = INJURIES[i].Year;
     const newArray = parseInt(array);
     if(newArray<=2016 & newArray>=2000){
       buttonInjurie.innerHTML = `${newArray} <button class="triangle-down" id="arrowDown${i}"></button><br />`;
       buttonElement.insertAdjacentElement("beforeend", buttonInjurie);
     }
   }
 },

  showAll: () => {
    let data = JSON.stringify(INJURIES);
    return data;
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
