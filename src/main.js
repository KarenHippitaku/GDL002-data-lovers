//const mostrarData = () => {
  // const show = document.getElementById("Info").style.display = "block";
//  }

  //document.getElementById("Enter").addEventListener("click",mostrarData);

  //function fillElements (injuriesList, divElement){
  //for(let i=0; i<injuriesList.length; i++) {
  //  let divInjurie = document.createElement("div");
  //  divInjurie.className = "injurie";
  //  let array = Object.values(INJURIES[i]);
  //  for (let j = 0; j<array.length; j++){
    //ñoif (array= array[6]) {
    //  divInjurie.innerHTML = array[j];
    //  divElement.insertAdjacentElement("beforeend", divInjurie);
      //}

  //  }
  // }
  //}

//  function showInjuries(){
//  let injuriesList = INJURIES;
//  let divInjuriesList = document.getElementById("totalData");
//  fillElements(injuriesList, divInjuriesList);
//  }
//  document.getElementById("Enter").addEventListener("click",showInjuries);

const mostrarData = () => {
 const show = document.getElementById("Info").style.display = "block";
}

document.getElementById("Enter").addEventListener("click",mostrarData);

function fillElements (injuriesList, divElement){
for(let i=0; i<injuriesList.length; i++) {
   let divInjurie = document.createElement("div");
   divInjurie.className = "injurie";
   let array = INJURIES[i].Year;
   const newArray = parseInt(array);
   //console.log(newArray);
   if(newArray<=2016 & newArray>=2000){
     divInjurie.innerHTML = newArray;
     divElement.insertAdjacentElement("beforeend", divInjurie);
   }
 }
}

function showInjuries(){
let injuriesList = INJURIES;
let divInjuriesList = document.getElementById("totalData");
fillElements(injuriesList, divInjuriesList);
}
document.getElementById("Enter").addEventListener("click",showInjuries);
