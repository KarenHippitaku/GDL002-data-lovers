const mostrarData = () => {
  document.getElementById("Info").style.display = "block";
};

document.getElementById("Enter").addEventListener("click",mostrarData);

const showInjuries = () => {
    let injuriesList = INJURIES;
    let buttonInjuriesList = document.getElementById("totalData");
    window.data.fillElements(injuriesList, buttonInjuriesList);
  };

//document.getElementById("filtrar").addEventListener("change",showInjuries);


 const filter = () =>{
   const values = document.getElementById("filtrar").value;
   switch(values){
     case 'filterForYear':
       mostrarData();
       showInjuries();
       break;
    //case "filterForRisk":

   }
 };
//console.log(filterInfo());
document.getElementById("filtrar").addEventListener("change",filter);
