const mostrarData = () => {
  const show = document.getElementById("Info").style.display = "block";
}

document.getElementById("Enter").addEventListener("click",mostrarData);

function fillElements (injuriesList, divElement){
 for(let i=0; i<injuriesList.length; i++) {
   let divInjurie = document.createElement("div");
   divInjurie.className = "injurie";
   divInjurie.innerHTML = injuriesList[i];
   divElement.insertAdjacentElement("beforeend", divInjurie);
 }
}

function showInjuries(){
 let injuriesList = window.data.chane ();
 let divInjuriesList = document.getElementById("totalData");
 fillElements(injuriesList, divInjuriesList);
}
document.getElementById("Enter").addEventListener("click",showInjuries);
