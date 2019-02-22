const mostrarData = () => {
 const show = document.getElementById("Info").style.display = "block";
}

document.getElementById("Enter").addEventListener("click",mostrarData);

function showInjuries(){
let injuriesList = INJURIES;
let buttonInjuriesList = document.getElementById("totalData");
window.data.fillElements(injuriesList, buttonInjuriesList);
}
document.getElementById("Enter").addEventListener("click",showInjuries);
