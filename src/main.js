const mostrarData = () => {
   const show = document.getElementById("Info").style.display = "block";
  }
  document.getElementById("Enter").addEventListener("click",mostrarData);
  function fillElements (injuriesList, divElement){
//       let array = [];
   for(let i=0; i<injuriesList.length; i++) {
       let divInjurie = document.createElement("div");
       divInjurie.className = "injurie";
      // let array = [];
  //     array = Object.keys(INJURIES[i]);
       //console.log(array);
  divInjurie.innerHTML = JSON.stringify(INJURIES);
  divElement.insertAdjacentElement("beforeend", divInjurie);
  }
  }
  function showInjuries(){
  let injuriesList = INJURIES;
  let divInjuriesList = document.getElementById("totalData");
  fillElements(injuriesList, divInjuriesList);
  }
  document.getElementById("Enter").addEventListener("click",showInjuries);
