window.data = {
 
 mostrarNumeros: () => {
  document.getElementById("Resultado").innerHTML = "";
  document.getElementById("closeModal").style.display = "block";
  document.getElementById("Resultado").style.display = "block";
  const valueButton = event.target.value;
  const years = INJURIES.filter(INJURIE => valueButton === INJURIE.Year);
  for(let i = 0; i<48; i++){
    const result = Object.keys(years[0])[i] + ":" + Object.values(years[0])[i];
    document.getElementById("Resultado").innerHTML += result + `<br />`;
  }
},
 
 
fillElements: (injuriesList, buttonElement) => {
  const arrayYear = [];
  let year = "";
  for(let i=0; i<injuriesList.length; i++) {
     let spanInjurie = document.createElement("span");  
     spanInjurie.id = "Injurie" + [i];
     year = parseInt(injuriesList[i].Year);
     if(year <=2016 & year>=2000){
       let buttonInjurie = document.createElement("button");
       buttonInjurie.value = year;
       spanInjurie.appendChild(buttonInjurie);
       spanInjurie.innerHTML =` <button name="button" value = "${injuriesList[i].Year}">${year}</button>`;
       buttonElement.insertAdjacentElement("beforeend", spanInjurie);
     }
   }
   return arrayYear.push(year);
},

fillElementsOrder: (injuriesList, buttonElement) => {
  const arrayYear = [];
  let year = "";
  for(let i=0; i<injuriesList.length; i++) {
    year = parseInt(injuriesList[i].Year);
    if(year <=2016 & year>=2000){
      arrayYear.push(year);
    }
  }
  arrayYear.reverse();
  for(let j=0; j<arrayYear.length; j++){
    let spanInjurie = document.createElement("span");  
    spanInjurie.id = "Injurie" + [j];
    let buttonInjurie = document.createElement("button");
    buttonInjurie.value = arrayYear[j];
    spanInjurie.appendChild(buttonInjurie);
    spanInjurie.innerHTML =` <button name="button" value = "${injuriesList[j].Year}">${arrayYear[j]}</button>`;
    buttonElement.insertAdjacentElement("beforeend", spanInjurie);
  }
   return arrayYear.push(year);
},

};
