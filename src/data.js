// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
//  return 'example';
//};

window.data = {
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
   for(let i=16; i<=32; i++) {
      Object.entries(INJURIES[i]).forEach(([key, value]) => {
        document.getElementById("Resultado").innerHTML += key + ':' + value;
      });
    }
 },

 //Función para mostrar años
fillElements: (injuriesList, buttonElement) => {
  for(let i=0; i<injuriesList.length; i++) {
     let buttonInjurie = document.createElement("span");
     buttonInjurie.id = 'Injurie' + [i];
     let array = injuriesList[i].Year;
     const newArray = parseInt(array);
     if(newArray<=2016 & newArray>=2000){ //restricción para descartar la información fuera del 2000 al 2016
       buttonInjurie.innerHTML =`${newArray} <button id = "arrowDown${i}" onclick = buttonFunctions()>i</button><br />`;
      //Template string para generar botones numerados (con el número de la iteración correspondiente), a la par de la línea de información
       buttonElement.insertAdjacentElement("beforeend", buttonInjurie);
     }
   }
  }
};
